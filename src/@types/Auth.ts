export type User = {
    id: number,
    name: string,
    email:string,
    creatd_at:number
}

export type ApiSignUp ={
    user: User,
    authToken: string
}

export type ApiSignIn ={
    user: User,
    authToken: string
}

export type ApiGetUser ={
    user: User,
}

export type ApiUpdateUser ={
    user: User,
} 

export type ApiDeleteUser ={
    sucess: boolean
}

