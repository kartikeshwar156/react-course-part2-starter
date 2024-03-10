import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import App from './App';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
