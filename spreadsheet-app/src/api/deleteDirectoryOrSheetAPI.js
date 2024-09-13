export async function deleteDirectoryOrSheetAPI(payload) {
    const req = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/directory/delete/type/${payload.Type}/id/${payload.ID}`, req)
    if (!response.ok) {
        if (response.status === 409) throw new Error('Name has to be unique.')
        throw new Error(response.statusText)
    }
    return Promise.resolve()
}