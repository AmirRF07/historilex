import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.historilex.app',
  appName: 'HistoriLex',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
