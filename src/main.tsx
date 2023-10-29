import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BlogProvider } from "./context/blogContext.tsx";
/* Redux */
import { Provider } from "react-redux";
import store from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BlogProvider>
        <App />
      </BlogProvider>
    </Provider>
  </React.StrictMode>
);
