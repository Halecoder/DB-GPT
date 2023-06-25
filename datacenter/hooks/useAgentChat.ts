import {
    EventStreamContentType,
    fetchEventSource,
  } from '@microsoft/fetch-event-source';
  import { ApiError, ApiErrorType } from '@/utils/api-error';  
  import useStateReducer from './useStateReducer';
  import useVisitorId from './useVisitorId';
  
  type Props = {
    queryAgentURL: string;
    queryHistoryURL?: string;
    channel?: "dashboard" | "website" | "slack" | "crisp";
    queryBody?: any;
  };

  const useAgentChat = ({
    queryAgentURL,
    queryHistoryURL,
    channel,
    queryBody,
  }: Props) => {
    const [state, setState] = useStateReducer({
      history: [{
        from: 'human',
        message: 'hello',
      }, {
        from: 'agent',
        message: 'Hello! How can I assist you today?',
      }] as { from: 'human' | 'agent'; message: string; id?: string }[],
    });
  
    const { visitorId } = useVisitorId();
  
    const handleChatSubmit = async (message: string) => {
      if (!message) {
        return;
      }
  
      const history = [...state.history, { from: 'human', message }];
      const nextIndex = history.length;
  
      setState({
        history: history as any,
      });
  
      let answer = '';
      let error = '';
  
      try {
        const ctrl = new AbortController();
        let buffer = '';
  
        class RetriableError extends Error {}
        class FatalError extends Error {}
  
        await fetchEventSource(queryAgentURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...queryBody,
            streaming: true,
            query: message,
            visitorId: visitorId,
            channel,
          }),
          signal: ctrl.signal,
  
          async onopen(response) {
            console.log('onopen', response);
            if (
              response.ok &&
              response.headers.get('content-type') === EventStreamContentType
            ) {
              return; // everything's good
            } else if (
              response.status >= 400 &&
              response.status < 500 &&
              response.status !== 429
            ) {
              if (response.status === 402) {
                throw new ApiError(ApiErrorType.USAGE_LIMIT);
              }
              throw new FatalError();
            } else {
              throw new RetriableError();
            }
          },
          onclose() {
            throw new RetriableError();
          },
          onerror(err) {
            console.log('on error', err, Object.keys(err));
						throw new Error(err);
            // if (err instanceof FatalError) {
            //   ctrl.abort();
            //   throw new Error(); // rethrow to stop the operation
            // } else if (err instanceof ApiError) {
            //   console.log('ApiError', ApiError);
            //   throw new Error();
            // } else {
            //   throw new Error(err);
            // }
          },
          onmessage: (event) => {
            console.log(event, 'event');
            if (event.data === '[DONE]') {
              ctrl.abort();
            } else if (event.data?.startsWith('[ERROR]')) {
              ctrl.abort();
  
              setState({
                history: [
                  ...history,
                  {
                    from: 'agent',
                    message: event.data.replace('[ERROR]', ''),
                  } as any,
                ],
              });
            } else {
              buffer += decodeURIComponent(event.data) as string;
              const h = [...history];
              if (h?.[nextIndex]) {
                h[nextIndex].message = `${buffer}`;
              } else {
                h.push({ from: 'agent', message: buffer });
              }
              setState({
                history: h as any,
              });
            }
          },
        });
      } catch (err) {
        console.log('err', err);
				setState({
					history: [
						...history,
						{ from: 'agent', message: answer || '请求出错' as string },
					] as any,
				});
        // if (err instanceof ApiError) {
        //   if (err?.message) {
        //     error = err?.message;
  
        //     if (error === ApiErrorType.USAGE_LIMIT) {
        //       answer =
        //         'Usage limit reached. Please upgrade your plan to get higher usage.';
        //     } else {
        //       answer = `Error: ${error}`;
        //     }
        //   } else {
        //     answer = `Error: ${error}`;
        //   }
  
        //   setState({
        //     history: [
        //       ...history,
        //       { from: 'agent', message: answer as string },
        //     ] as any,
        //   });
        // }
      }
    };
  
    return {
      handleChatSubmit,
      history: state.history,
    };
  };
  
  export default useAgentChat;
  