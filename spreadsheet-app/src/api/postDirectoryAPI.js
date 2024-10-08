// API for posting new directories

export async function postNewDirectory(newDirectory) {
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDirectory)
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/directory/create/newDirectory`, req)
    if (!response.ok) {
        if (response.status === 409) throw new Error('Name has to be unique.')
        throw new Error(response.statusText)
    }
    return Promise.resolve()
};