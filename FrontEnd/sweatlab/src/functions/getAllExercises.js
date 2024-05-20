async function getAllExercises() {
    try {
        const response = await fetch(`http://107.21.99.46:8080/exercise`);
        if (!response.ok) {
            throw new Error('Error al obtener los ejercicios');
        }
        const exercises = await response.json();
        return exercises;
    } catch (error) {
        console.error('Error al obtener los ejercicios:', error);
        throw error;
    }
}

export default getAllExercises;