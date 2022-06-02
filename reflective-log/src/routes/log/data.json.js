import { client } from '$lib/api.js';

export async function get() {
	const logs = await client.getEntries({
		content_type: 'logEntry'
	});

	if (logs) {
		return {
			status: 200,
			body: {
				logs
			}
		};
	}

	return {
		status: 404
	};
}