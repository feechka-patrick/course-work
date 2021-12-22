import { $host } from "."


export const registration = async (email, password) => {
    const response = await $host.post('auth/registration', {email, password, role: 'admin'})
    return response;
}

export const login = async (email, password) => {
    const response = await $host.post('api/user/login', {email, password})
    return response;
}

export const check = async (email, password) => {
    const response = await $host.post('api/auth/registration')
    return response;
}
