import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import { KubitProvider } from '@kubit-ui-web/react-components';

const elem = document.querySelector('.tabs');
if (elem) {
  const root = createRoot(elem);
  root.render(  <KubitProvider><App /></KubitProvider>);
}
