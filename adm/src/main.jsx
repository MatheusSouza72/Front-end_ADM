//main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Cadastro from './routes/Cadastro.jsx';
import OcoSemAdm from './routes/OcoSemAdm.jsx';
import OcoAdm from './routes/OcoAdm.jsx';
import Admin from './routes/Admin.jsx';
import Samuel7 from './routes/Samuel7.jsx'
import Samuel10 from './routes/Samuel10.jsx'
import Samuel11 from './routes/Samuel11.jsx'
import Samuel12 from './routes/Samuel12.jsx'
import Funcionario from './routes/Funcionario.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Login />,
      },
      {
        path: '/cadastro',
        element: <Cadastro />,
      },
      {
        path: '/Ocosemadm',
        element: <OcoSemAdm />,
      },
      {
        path: '/Ocoadm',
        element: <OcoAdm />,
      },
      {
        path: '/Admin',
        element: <Admin />,
      },
      {
        path: '/Samuel7',
        element: <Samuel7 />,
      },
      {
        path: '/Samuel10',
        element: <Samuel10 />,
      },
      {
        path: '/Samuel11',
        element: <Samuel11 />,
      },
      {
        path: '/Samuel12',
        element: <Samuel12 />,
      },
      {
        path: '/Funcionario',
        element: <Funcionario />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
