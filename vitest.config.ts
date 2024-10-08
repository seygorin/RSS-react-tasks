import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '/app/__test__/setupTests.ts',
    exclude: ['**/node_modules/**', '**/dist/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: 'coverage',
      exclude: [
        '**/dist/**',
        '**/build/**',
        '**/remix.config.cjs',
        'node_modules',
        '.eslintrc.cjs',
        '**/*.types.ts',
        '**/*.test.tsx',
        '@/**',
        '**/vite-env.d.ts',
        '**/icons/**',
        '**/main.tsx',
        '**/__test__',
        '**/index.ts',
        '**/*.config.ts',
        'build',
        '**/.next/**',
        '**/next.config.mjs',
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: {
      '~': '/app',
    },
  },
});
