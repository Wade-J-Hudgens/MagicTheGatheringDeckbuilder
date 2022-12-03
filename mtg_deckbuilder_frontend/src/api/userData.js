import apiConfig from "./config.json";

export const getUserData = async () => {
    const concactedUrl = apiConfig.baseUrl + apiConfig.endpoints.getBasicUserData.endpoint;
    const authString = window.localStorage.getItem("authenticationString");
    if (authString === null) {
        return {authenticated: false}
    }
    const response = fetch(concactedUrl, {
        method: apiConfig.endpoints.getBasicUserData.method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            authenticationString: authString
        })
    })
    .then((res)=>res.json())
    return response;
}