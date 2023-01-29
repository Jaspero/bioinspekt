export const SHARED_CONFIG: {
	projectId: string,
	github: {
		organization: string,
		repository: string,
	},
  cloudRegion: 'us-central1' | 'us-east1' | 'us-east4' | 'europe-west1' | 'europe-west2' | 'asia-east2' | 'asia-northeast1';
	webUrl: string;
	adminEmail: string;
} = {
	github: {
		organization: 'Jaspero',
		repository: 'jms',
	},
	projectId: 'jp-bioinspekt',
	cloudRegion: 'europe-west1',
	webUrl: 'https://jp-bioinspekt.web.app',
	adminEmail: 'info@jaspero.co'
};