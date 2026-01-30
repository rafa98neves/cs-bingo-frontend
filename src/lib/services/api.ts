export const getService = (baseUrl: string) => {
	const headers = { 'Content-Type': 'application/json' };

	const setHeaders = (newHeaders: Record<string, string>) => {
		Object.assign(headers, newHeaders);
	};

	const request = async (url: string, method: string, body?: any) => {
		const options: RequestInit = { method, headers };

		if (body) options.body = JSON.stringify(body);

		const response = await fetch(baseUrl + url, options);
		return await response.json();
	};

	const get = async (url: string) => {
		return await request(url, 'GET');
	};

	const del = async (url: string) => {
		return await request(url, 'DELETE');
	};

	const post = async (url: string, body: any) => {
		return await request(url, 'POST', body);
	};

	const patch = async (url: string, body: any) => {
		return await request(url, 'PATCH', body);
	};

	return {
		setHeaders,
		get,
		post,
		patch,
		del
	};
};
