import compression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react';

export default {
  plugins: [
    react(),
    compression({
      algorithm: 'brotli', // or 'gzip'
      threshold: 10240, // Compress files larger than 10 KB
    }),
  ],
};
