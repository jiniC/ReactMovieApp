import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// id가 root인 곳에 App.js 내용을 보여준다 (컴포넌트 출력)

// react: UI라이브러리
// reactDOM(Document Object Module): 리액트를 웹사이트에 출력하는걸 도와주는 모델
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
