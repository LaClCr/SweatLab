async function getUserByEmail(email) {
    try {
        const response = await fetch(`http://192.168.1.53:8080/user/email/${email}`);
        if (!response.ok) {
            throw new Error('Error al obtener el usuario por correo electrónico');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error al obtener el usuario:', error);
        throw error;
    }
}

export default getUserByEmail;