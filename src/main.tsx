import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import SignatureGenerator from './signature-generator.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignatureGenerator />
  </StrictMode>
);
