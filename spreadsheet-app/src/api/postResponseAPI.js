// API for posting new response

export async function postNewResponse(newResponse) {
    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newResponse)
    }
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sheet/create/newResponseToSheet`, req)
    if (!response.ok) {
        // console.log(response)
        if (response.status === 409) throw new Error('Name has to be unique.')
        throw new Error(response.statusText)
    }
    return response.json()
};
