interface LoginResponseInterface {
    success: boolean,
    authenticationString? : string,
    error?: number
}
const LoginErrorCodes = {
    NotValid: 0
}

interface LoginRequestBody {
    email: string,
    password: string,
    rememberMe: boolean
}

export {LoginErrorCodes, LoginResponseInterface, LoginRequestBody}