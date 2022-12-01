import apiConfig from "./config.json";

export const login = async (email, password, rememberMe) => {
    const concactedUrl = apiConfig.baseUrl + apiConfig.endpoints.login.endpoint;
    const response = fetch(concactedUrl, {
        method: apiConfig.endpoints.login.method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: email,
            password: password,
            rememberMe: rememberMe
        })
    }).then(res=>res.json());
    return response;
}