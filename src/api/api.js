import * as axios from "axios";


const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            'API-KEY': "973bb087-4f51-40db-9a8c-410a2141146c"
        },

    }
);


export const userAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        })
    },

    clickButton: (userId, request) => {
        return instance[request](`follow/${userId}`)
    },
}

export const profileAPI = {
    getProfileData: (useId) => {
        return instance.get(`profile/${useId ? useId : '2'}`)
    },
    getProfileStatus: (useId) => {
        return instance.get(`profile/status/${useId ? useId : '2'}`)
    },
    updateProfileStatus: (status) => {
        return instance.put('profile/status', {status: status});
    }
};

export const headerAPI = {
    getDataAuth: () => {
        return instance.get('auth/me',)
    }

}


