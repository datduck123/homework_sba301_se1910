import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Bootstrap CSS must come before app styles so custom CSS can override cleanly
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
