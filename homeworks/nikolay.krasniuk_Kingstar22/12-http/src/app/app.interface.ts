export interface ITodo {
    text: string;
    isDone: boolean;
    id: string;
}

export interface User {
    login: string,
    password: string,
    rememberCheckbox: boolean
}

export interface IToken {
    token: string
}
