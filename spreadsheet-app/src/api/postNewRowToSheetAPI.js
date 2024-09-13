// API for posting new row to sheet

export async function postNewRow(sheetID) {
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetID)
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sheet/create/newRowToSheet`, req)
    if (!response.ok) {
        // console.log(response)
        if (response.status === 409) throw new Error('Name has to be unique.')
        throw new Error(response.statusText)
    }
    return Promise.resolve()
};
