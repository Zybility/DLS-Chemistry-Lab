
import { defineConfig } from 'vite';

export default defineConfig({
  // GitHub Pages repository path
  base: '/ZY-Chemistry-Lab/',

  server: {
    proxy: {
      '/api/chem': {
        target: 'http://10.0.0.149:8000',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/chem/, ''),
      },
    },
  },
});
