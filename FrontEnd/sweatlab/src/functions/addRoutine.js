export async function addRoutine(userId, routine) {
    const url = 'http://107.21.99.46:8080/routine/' + userId;

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name : routine.name, exercises: []})
        });

        const routineData = await response.json();
        const routineId = routineData.routineId;

        if (response.status === 200) {
            // Si la rutina se añadió correctamente, añadir los ejercicios
            const exercisesResponse = await addExercises(userId, routineId, routine.exercises);
            return exercisesResponse; // Devolver la respuesta de la función addExercises
        } else {
            return { status: exercisesResponse.status, body: routineData };
        }
        
    } catch (error) {
        console.error('Error al realizar la solicitud PUT:', error);
        throw new Error('No se pudo completar la solicitud PUT');
    }
}

async function addExercises(userId, routineId, exercises) {
    const url = 'http://107.21.99.46:8080/routine/exercise/' + userId + '/' + routineId;

    for (let i = 0; i < exercises.length; i++) {
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: exercises[i].name,
                image: exercises[i].image,
                muscularGroup: exercises[i].muscularGroup,})
            });

            const data = await response.text();
            if (response.status !== 200) {
                return { status: response.status, body: data };
            }
            
        } catch (error) {
            console.error('Error al realizar la solicitud PUT:', error);
            throw new Error('No se pudo completar la solicitud PUT');
        }
    }

    // Si todos los ejercicios se añadieron correctamente, devolver una respuesta exitosa
    return { status: 200, body: 'Ejercicios añadidos correctamente a la rutina con ID ' + routineId };
}