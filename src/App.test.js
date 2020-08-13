import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('mostra o nome do banco: ByteBank', () => {
  const { getByText } = render(<App />);
  const nomeDoBanco = getByText("ByteBank");
  expect(nomeDoBanco).toBeInTheDocument();
});
