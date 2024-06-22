import axios from "axios";
import Swal from "sweetalert2";
const token = localStorage.getItem("token");

const url = 'http://localhost:5000/api/'
const api = axios.create({
    baseURL: url,
    // headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    // },
});

export const ImageURL =
    "http://localhost:5000/uploads/";

// get
export const Get = async (url) => {
    const response = await api.get(url);
    return response.data;
};

//post
export const Post = async (url, data, conf) => {
    await api
        .post(url, data, conf)
        .then(function (res) {
            Swal.fire({
                title: "Successful!",
                text: "You Created Treatment!",
                icon: "success",
                // showCancelButton: true,

                showConfirmButton: false,
                timer: 2000,
            });
            return res.data.data

        })
        .catch(function (err) {
            Swal.fire({
                title: "Something Wrong!",
                text: "Try again, Please.",
                icon: "warning",
                // showCancelButton: true,

                showConfirmButton: false,
                timer: 2000,
            });
        });
};


//delete
export const Delete = async (url, id) => {
    await api
        .delete(url + id)
        .then((response) => {
            Swal.fire({
                title: "Success",
                text: "Successfully Deleted!",
                icon: "success",
                showConfirmButton: false,
                timer: 2000,
            });
            return response.data.data;
        })
        .catch((error) => {
            Swal.fire({
                title: "Error",
                text: error.response.data.message,
                icon: "error",
                confirmButtonText: "CANCEL",
            });
        });
};

//update
export const Update = async (url, id, data, conf) => {
    await api
        .put(url + id, data, conf)
        .then(function (res) {
            Swal.fire({
                title: "Successful!",
                text: "You Created Treatment!",
                icon: "success",
                // showCancelButton: true,

                showConfirmButton: false,
                timer: 2000,
            });
            return res.data.data;
        })
        .catch(function (err) {
            Swal.fire({
                title: "Something Wrong!",
                text: "Try again, Please.",
                icon: "warning",
                // showCancelButton: true,

                showConfirmButton: false,
                timer: 2000,
            });
        });
};

//detail
export const GetDetail = async (url, id) => {
    const response = await api.get(url + id);
    return response.data;
};

export default api;
