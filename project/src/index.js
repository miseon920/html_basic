import React from "react";
import ReactDOM from "react-dom/client";
import "./css/common.css";
import "./css/basic.css";
import "./css/section01.css";
import "./css/section02.css";
import "./css/main.css";
import App from "./App";

//라우터 붙이기 - 해당경로에 붙여야함
//https://reactrouter.com/docs/en/v6/getting-started/tutorial

// 버전오류 있을시
/*
https://velog.io/@do_ng_iill/npm-WARN-config-global-global-local-are-deprecated.-Use-locationglobal-instead.-%ED%95%B4%EA%B2%B0
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
