import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.mycollection.app',
	appName: 'myCollection',
	webDir: 'build',
	server: {
		androidScheme: 'https'
	}
};

export default config;
