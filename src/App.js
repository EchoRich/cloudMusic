import React from 'react';
import {Provider} from  'react-redux'
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import routes from  './routes/index'
import {HashRouter} from  'react-router-dom'
import { renderRoutes } from 'react-router-config';
import store from  './store/index'

function App() {
  return (
  
    <div className="App">
        <Provider store={store}>
       <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      {renderRoutes(routes)}
     </HashRouter>
     </Provider>
    </div>
  );
}

export default App;