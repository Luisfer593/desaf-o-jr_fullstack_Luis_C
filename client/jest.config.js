module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx|mjs)$': 'babel-jest',
      '^.+\\.css$': 'jest-transform-stub',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
      '/node_modules/(?!(axios)/)',  // Excepción para axios
    ],
  };
  