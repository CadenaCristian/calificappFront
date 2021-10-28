const baseUrl = 'http://127.0.0.1:8000/api';

export const fetchApi = (endpoint, method, data) => {
    const url = `${baseUrl}/${endpoint}`;
    // console.log("url: ", url)
    return fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
}
