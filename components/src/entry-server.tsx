import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { App } from './App';

import { setupStore } from './store/store';

export const render = (url: string, opts: RenderToPipeableStreamOptions) => {
  const store = setupStore();
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
};
