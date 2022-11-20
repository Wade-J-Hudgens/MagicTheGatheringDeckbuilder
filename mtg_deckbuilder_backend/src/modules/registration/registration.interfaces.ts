interface RegisterUserResponseInterface {
    success: boolean,
    error?: number
}
const RegisterUserErrorCodes = {
    EmailExists: 0,
    UsernameExists: 1,
    InvalidEmailFormat: 2,
    ServerError: 3,
    PasswordNotLongEnough: 4
}

interface RegisterUserRequestBody {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    username: string
}
export {RegisterUserResponseInterface, RegisterUserErrorCodes, RegisterUserRequestBody}