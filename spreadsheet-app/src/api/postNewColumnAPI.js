// API for posting new column

export async function postNewColumn(newColumn) {
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newColumn)
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/column/create/newColumn`, req)
    if (!response.ok) {
        if (response.status === 409) throw new Error('Name has to be unique.')
        throw new Error(response.statusText)
    }
    return response.json()
};
