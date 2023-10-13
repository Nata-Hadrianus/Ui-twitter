import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.css'
import './componentes/Tweet.css';
import './componentes/sidebar.css';
import './componentes/Header.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <div className="layout">
         <div className="content">
          <RouterProvider router= {router} />
          </div>
      </div>
  </React.StrictMode>,
);


