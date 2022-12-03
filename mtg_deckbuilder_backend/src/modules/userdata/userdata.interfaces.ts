export interface GetBasicUserDataResponseInterface {
    authenticated: boolean
    username?: string,
    email?: string,
    firstName?: string,
    lastName?: string
}

export interface GetBasicUserDataRequestInterface {
    authenticationString: string
}