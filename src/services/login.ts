import request from '@/utils/request'

export interface LoginParamsType{
    username: string   
    password: string
}

export interface UserInfo{
    UserId: number
    UserName?: string
    Nick?: string
    Avatar?: string
}

export interface IResponseBase<T> {
    status: number
    message: string
    data: T
}
export const  fakeAccountLogin = (params: LoginParamsType)=>{
    return  request.post<IResponseBase<UserInfo>>('/api/login', params)
}


export const  register = (params: LoginParamsType)=>{
    return  request.post<IResponseBase<UserInfo>>('/api/register', params)
}
