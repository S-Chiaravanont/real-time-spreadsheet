// API for fetching columns

export function fetchColumns() {
    const req = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return fetch(`${import.meta.env.VITE_API_URL}/api/column/get`, req).then((res) =>
        res.json(),
    )
};
