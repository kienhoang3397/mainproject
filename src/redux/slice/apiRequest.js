import axios from "axios";
import { loginFailed, loginStart, loginSuccess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";
import { addProductFailed, addProductStart, addProductSuccsess, deleteProductFailed, deleteProductStart, deleteProductSuccsess, getProductError, getProductStart, getProductSuccess, updateProductFailed, updateProductStart, updateProductSuccsess } from "./productSlice";
import { getUserFailed, getUsersStart, getUsersSuccess, updateUserFailed, updateUserStart, updateUserSuccess } from "./userSlice";




export const getAllProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await axios.get("http://localhost:3000/product/getall");
        dispatch(getProductSuccess(res.data)); // Đã sửa tên action creator
    } catch (err) {
        dispatch(getProductError());
    }
};
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        await axios.post("http://localhost:3000/product/add", product)
        dispatch(addProductSuccsess())


    }
    catch (err) {
        dispatch(addProductFailed())
    }
}
export const deleteProduct = async (dispatch, id) => {
    dispatch(deleteProductStart());
    try {
        const res = await axios.delete(`http://localhost:3000/product/${id}`);
        dispatch(deleteProductSuccsess());
    } catch (err) {
        dispatch(deleteProductFailed());
    }
};


export const updateProduct = async (product, id, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await axios.put(`http://localhost:3000/product/${id}`, product);
        dispatch(updateProductSuccsess(res.data));
    } catch (err) {
        console.error('Error updating product:', err);
        dispatch(updateProductFailed(err.message));
    }
};
export const updateUser = async (user, id, dispatch) => {
    dispatch(updateUserStart());
    try {
        const res = await axios.put(`http://localhost:3000/v1/user/${id}`, user);
        dispatch(updateUserSuccess(res.data));
    } catch (err) {
        console.error('Error updating User:', err);
        dispatch(updateUserFailed(err.message));
    }
};



export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:3000/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (error) {
        console.error("Error logging in:", error);
        if (error.response) {

            dispatch(loginFailed(error.response.data));
        } else if (error.request) {

            console.error("No response received:", error.request);
            dispatch(loginFailed("No response received"));
        } else {

            console.error("Error setting up the request:", error.message);
            dispatch(loginFailed(error.message));
        }
    }
};

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("http://localhost:3000/v1/auth/register", user)
        dispatch(registerSuccess())
        navigate("/login")

    }
    catch (err) {
        dispatch(registerFailed())
    }
}
export const getAllUser = async (accessToken, dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("http://localhost:3000/v1/user/", {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (error) {
        console.error("Error fetching user data:", error);
        dispatch(getUserFailed());
    }
};


export const logOutUser = async (dispatch, id, navigate, accessToken) => {
    dispatch(logoutStart());
    try {
        const res = await axios.post("http://localhost:3000/v1/auth/logout", id, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logoutSuccess(res.data));
        navigate("/")
    } catch (error) {
        console.error("Error deleting user:", error);
        if (error.response) {
            dispatch(logoutFailed(error.response.data));
        } else if (error.request) {
            console.error("No response received:", error.request);
            dispatch(logoutFailed("No response received"));
        } else {
            dispatch(logoutFailed(error.message));
        }
    }
};
export const getUserApi = async (accessToken) => {
    try {

        const res = await axios.get("http://localhost:3000/v1/user/info", {
            headers: { token: `Bearer ${accessToken}` },
        });

      
        console.log(res.data);
        return res.data;
    } catch (error) {
        
        console.error('Error fetching user data:', error);
        throw error;
    }
};


  









