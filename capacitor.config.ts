import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'stock.tracker.client',
  appName: 'stock-tracker-client',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
