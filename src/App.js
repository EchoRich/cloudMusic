import React from 'react';
import {Provider} from  'react-redux'
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import routes from  './routes/index'
import {HashRouter} from  'react-router-dom'
import { renderRoutes } from 'react-router-config';
import store from  './store/index'
import  {Data} from  './application/Singer/data'

function App() {
  return (
  
    <div className="App">
        <Provider store={store}>
       <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <Data>
      {renderRoutes(routes)}
      </Data>
     </HashRouter>
     </Provider>
    </div>
  );
}

export default App;