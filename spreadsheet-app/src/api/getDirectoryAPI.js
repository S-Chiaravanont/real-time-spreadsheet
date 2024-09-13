// API for fetching directories

// export function fetchDirectories({ queryKey }) {
export async function fetchDirectories(directoryID) {
    const req = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/directory/get/${directoryID}`, req)
    if (!response.ok) {
        if (response.status === 409) throw new Error('Name has to be unique.')
        throw new Error(response.statusText)
    }
    return response.json()
};