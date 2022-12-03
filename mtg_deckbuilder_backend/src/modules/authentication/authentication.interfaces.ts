interface GetUsersResponseInterface {
    authenticated: boolean,
    uuid?: string
}
interface GetUserRequestInterface {
    authenticationString: string
}

export {GetUsersResponseInterface, GetUserRequestInterface}