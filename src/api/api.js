import * as axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3001",
})

export const authAPI = {
    registration(login, nickname, passHash, token, num) { // data: { login, nickname, passHash, token, num }
        return instance.post('/auth/registration', {
            login, nickname, passHash, token, num
        });
    },
    login(login, passHash, token, num) {
        return instance.post('/auth/login   ', {
            login, passHash, token, num
        })
    },
    logout(token) {
        return instance.get(`/auth/logout/${token}`);
    }
}

export const usersAPI = {
    getUserData(token) {
        return instance.get(`/users/getUserData/${token}`);
    }
}

export const avatarAPI = {
    saveUserAvatar(token, avatar) {
        const data = new FormData();
        data.append('token', token);
        data.append('avatar', avatar, avatar.name);
        return instance.post('/avatar/saveAvatar', data);
    },
    getUserAvatar(token) {
        return instance.get(`/avatar/getUserAvatar/${token}`);
    },
    updateUserAvatar(token, avatar) {
        const data = new FormData();
        data.append('token', token);
        data.append('avatar', avatar, avatar.name);
        return instance.post('/avatar/updateAvatar', data);
    },
    deleteUserAvatar(token) {
        return instance.get(`/avatar/delete/${token}`);
    }
}
