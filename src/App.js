import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import routes from  './routes/index'
import {HashRouter} from  'react-router-dom'
import { renderRoutes } from 'react-router-config';

function App() {
  return (
    <div className="App">
       <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      <i className="iconfont">&#xe62b;</i>
      {renderRoutes(routes)}
     </HashRouter>
    </div>
  );
}

export default App;