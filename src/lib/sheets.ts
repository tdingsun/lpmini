import {CLIENT_ID, CLIENT_SECRET, REFRESH_URL, SPREADSHEET_ID, REFRESH_TOKEN} from '$env/static/private'

const get_access_token_using_saved_refresh_token = async () => {
	const client_id = CLIENT_ID;
	const client_secret = CLIENT_SECRET;
	const refresh_token = REFRESH_TOKEN;
	const post_body = `grant_type=refresh_token&client_id=${encodeURIComponent(client_id)}&client_secret=${encodeURIComponent(client_secret)}&refresh_token=${encodeURIComponent(refresh_token)}`;

	const refresh_req = {
		body: post_body,
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/x-www-form-urlencoded'
		})
	};

	return fetch(REFRESH_URL, refresh_req)
		.then((response) => {
			return response.json();
		})
		.then((response_json) => {
            return(response_json.access_token);
		});
};

const listTable = async (access_token: string) => {
	const spreadsheetId = SPREADSHEET_ID;
	const sheets_url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/formResponses`;
	const sheets_request = {
		method: 'GET',
		headers: new Headers({
			Authorization: 'Bearer ' + access_token
		})
	};
	return fetch(sheets_url, sheets_request)
		.then((res) => {
			return res.json();
		})
		.then((sheet) => {
			return sheet;
		});
};


export const getSheet = async () => {
    const access_token = await get_access_token_using_saved_refresh_token();
    return listTable(access_token);
}