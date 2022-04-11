import axiosClient from './axiosClient'

const User = {

    Post_Login: (data) => {
        const url = '/client/khachhang/login'
        return axiosClient.post(url, data)
    },

    Get_User: (id) => {
        const url = `/client/khachhang/getKhachHangId/${id}`
        return axiosClient.get(url)
    },

    Post_Register: (data) => {
        const url = '/client/khachhang/register'
        return axiosClient.post(url, data)
    },


}

export default User