import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "bulma/css/bulma.css";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//   reportWebVitals();

render(<App />, document.getElementById("content"));
// ReactDOM.render(<App />, document.getElementById('root'));


// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('content'));

// ReactDOM.render(
//   <React.StrictMode>
//    <App />
//   </React.StrictMode>,
//   document.getElementById('content')
// );

// class Content extends React.Component {
//     render() {
//       return (
//         <span>いいねボタン予定地</span>
//       );
//     }
//   }
  
//   ReactDom.render(
//     <Content />,
//     document.getElementById("content")
//   );

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         test001
//       </div>
//     );
//   }
// }

// export default App;