// API for fetching directories

export async function postNewSheet(newSheet) {
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSheet)
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/directory/create/newSheet`, req)
    if (!response.ok) {
        if (response.status === 409) throw new Error('Name has to be unique.')
        throw new Error(response.statusText)
    }
    return Promise.resolve()
};
