import { client } from '$lib/api.js';

export async function get({ params }) {
	const log = await client.getEntries({
		'fields.slug' : params.slug, 
        content_type: 'logEntry'
	});

	if (log) {
		return {
			status: 200,
			body: {
				log
			}
		};
	}

	return {
		status: 404
	};
}