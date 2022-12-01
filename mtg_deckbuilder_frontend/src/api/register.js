import apiConfig from "./config.json";

export const registerUser = async (email, username, firstName, lastName, password) => {
    const concactedUrl = apiConfig.baseUrl + apiConfig.endpoints.register.endpoint;
    const response = fetch(concactedUrl, {
        method: apiConfig.endpoints.register.method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            username: username,
            firstName: firstName,
            lastName, lastName,
            password: password
        })
    }).then(res=>res.json());
    return response;
}

export const checkEmailExists = async (email) => {
    const concactedUrl = apiConfig.baseUrl + apiConfig.endpoints.register_checkEmail.endpoint;
    const response = fetch(concactedUrl, {
        method: apiConfig.endpoints.register_checkEmail.method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            value: email
        })
    }).then(res=>res.json());
    return response;
}

export const checkUserExists = async (user) => {
    const concactedUrl = apiConfig.baseUrl + apiConfig.endpoints.register_checkUser.endpoint;
    const response = fetch(concactedUrl, {
        method: apiConfig.endpoints.register_checkUser.method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            value: user
        })
    }).then(res=>res.json());
    return response;
}