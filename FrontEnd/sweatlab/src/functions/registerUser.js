export async function registerUser(registerInfo) {
    const url = 'http://192.168.18.40:8080/user';
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        });

        const data = await response.text();
        return { status: response.status, body: data };
        
    } catch (error) {
        throw error;
    }
}