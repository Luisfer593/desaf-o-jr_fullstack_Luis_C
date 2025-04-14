// src/setupTests.js
const originalError = console.error;
console.error = (...args) => {
  if (
    args[0] &&
    typeof args[0] === 'string' &&
    args[0].includes('ReactDOMTestUtils.act is deprecated')
  ) {
    return; // Suprime el warning
  }
  originalError(...args); // Deja pasar el resto
};

import '@testing-library/jest-dom';
