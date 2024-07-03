import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';

const elem = document.querySelector('.form');
if (elem) {
  const formURL = elem.querySelector("form").dataset.action;
  const root = createRoot(elem);
  root.render(<App formURL={formURL} />);
}
