export async function updateExercise (userId, routineId, exerciseId, updatedInfo) {
    const url = 'http://192.168.18.40:8080/routine/exercise/'+ userId +'/'+ routineId +'/'+ exerciseId;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        });

        const data = await response.text();
        return { status: response.status, body: data };
    } catch (error) {
        throw error;
    }
}