export async function deleteRowFromSheet(payload) {
    const req = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sheetID: payload.sheetID })
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sheet/delete/row/${payload.rowID}`, req)
    if (!response.ok) {
        if (response.status === 409) throw new Error('Name has to be unique.')
        throw new Error(response.statusText)
    }
    return Promise.resolve()
}