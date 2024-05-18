export async function loginValidation(loginData) {
    const url = 'http://192.168.1.53:8080/user/login';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        const data = await response.text();
        return { status: response.status, body: data };
        
    } catch (error) {
        throw error;
    }
}

