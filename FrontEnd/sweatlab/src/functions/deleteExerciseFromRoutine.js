export async function deleteExerciseFromRoutine(userId, routineId, exerciseId) {
    const url = 'http://192.168.18.40:8080/routine/exercise/'+ userId +'/'+ routineId + '/'+ exerciseId;

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