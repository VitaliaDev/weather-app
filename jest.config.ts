import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default',
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.ts'], // Adjust the path if necessary

  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    "\\.(png|jpg|jpeg|gif|webp)$": "<rootDir>/src/__mocks__/fileMock.ts", },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!some-module-to-transform|another-module)',
  ],
};

export default config;
