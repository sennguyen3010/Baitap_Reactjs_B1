import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';

//react-router-dom

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BaiTapReactForm from './BaiTapReactForm/BaiTapReactForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="" element={<BaiTapReactForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
