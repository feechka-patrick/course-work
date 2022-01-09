import { $host } from "."


export const registration = async (email, password) => {
    const response = await $host.post('auth/registration', {email, password, role: 'user'})
    return response;
}

export const login = async (email, password) => {
    const response = await $host.post('/auth/login', {email, password})
    return response;
}

export const check = async (email, password) => {
    const response = await $host.post('/auth/registration')
    return response;
}
