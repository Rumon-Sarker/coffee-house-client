import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import './index.css';
import { router } from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './privuder/AuthProvider.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
