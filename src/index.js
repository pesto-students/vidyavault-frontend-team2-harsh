import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundaries/ErrorFallback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ErrorBoundary FallbackComponent={ErrorFallback}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
    </ErrorBoundary>
  </ThemeProvider>
);

