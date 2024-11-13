import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import App from "./App";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
