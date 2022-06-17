
import * as axios from 'axios'
import { follow, unfollow } from '../redux/users-reducer '

const instance = axios.create({
    withCredentials: true,
    headers: { 'API-key': '4d6268f2-942f-42a6-8bdd-77308c548b94' },
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const userAPI = {
    GetUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(userid) {
        return instance.delete(`follow/ ${userid}`)
            .then(response => response.data)

    },
    Follow(user) {
        return instance.post(`follow/ ${user}`)
            .then(response => response.data)
    },
    getProfile(userId) {
        console.warn('Obolete method.Please use ProfileAPI')
        return ProfileAPI.getProfile(userId)
    }
}
export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus(userid) {
        return instance.get(`profile/status/` + userid)
            .then(response => response.data)
    },
    UpdateStatus(status) {
        return instance.put(`profile/status/`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    }, 
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}
