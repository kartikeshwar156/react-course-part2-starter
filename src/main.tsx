import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { ReactQueryDevtools} from '@tanstack/react-query-devtools'
import App from './App';
import './index.css';

const queryClient = new QueryClient();

// Below is the way of changing default nature of query settings. 
//const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       gcTime: 300_000, // earlier Cache time
//       staleTime: 10 * 1000, // 10 sec
//       refetchOnMount: false,
//       refetchOnReconnect: false,
//       refetchOnWindowFocus: false,
//     }
//   }
// });

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider> 
  </React.StrictMode>
);
