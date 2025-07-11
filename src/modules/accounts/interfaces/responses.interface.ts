export interface BaseResponse {
     success : boolean;
     message : string
}

export interface LoginResponse extends BaseResponse, Partial<Token> {
     sessionId : string; 
}

export interface Token {
     authToken : string;
}

export interface User{
     userId: string;
     name: string;
     role : Role;
}

export enum Role {
     ADMIN = "ADMIN",
     DRIVER = "DRIVER",
     USER = "USER"
}