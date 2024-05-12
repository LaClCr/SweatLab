export async function deleteRoutine(userId, routineId) {
    const url = 'http://192.168.18.40:8080/routine/'+ userId +'/'+ routineId;

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const data = await response.text();
        return { status: response.status, body: data };
    } catch (error) {
        throw error;
    }
}