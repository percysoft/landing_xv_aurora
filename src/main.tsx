import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { invitationData } from './data/invitationData';

if (invitationData.elegant) document.body.classList.add('elegante');
if (invitationData.name !== 'Camila') document.title = `Mis XV Años · ${invitationData.name} · ${invitationData.day}·12·${invitationData.year}`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
