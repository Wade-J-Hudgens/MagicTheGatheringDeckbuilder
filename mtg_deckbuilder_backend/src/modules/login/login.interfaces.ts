interface LoginResponseInterface {
    success: boolean,
    error?: number
}
const LoginErrorCodes = {
    NotValid: 0
}

interface LoginRequestBody {
    email: string,
    password: string
}

export {LoginErrorCodes, LoginResponseInterface, LoginRequestBody}