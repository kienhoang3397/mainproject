import axios from "axios";
import { getProductError, getProductStart, getProductSuccess, addProductStart, addProductSuccsess, addProductFailed, deleteProductStart, deleteProductSuccsess, deleteProductFailed, updateProductStart, updateProductSuccsess, updateProductFailed } from "./productSlice";
import { loginFailed, loginStart, loginSuccess, loginSuccsess, logoutFailed, logoutStart, logoutSuccess, registerFailed, registerStart, registerSuccess, registerSuccsess } from "./authSlice"
import { deleteUserFailed, deleteUsersStart, deleteUsersSuccsess, getUserFailed, getUsersStart, getUsersSuccess, getUsersSuccsess, updateUserFailed, updateUserStart, updateUserSuccess } from "./userSlice";
import { dataProductPages } from "../../common/datas/ProductListingData";



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


export const logOutUser = async ( dispatch, id, navigate, accessToken) => {
    dispatch(logoutStart());
    try {
        const res = await axios.post("http://localhost:3000/v1/auth/logout" , id,{
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
export const addToCart = async (productId, accessToken, quantity) => {
    try {
        const res = await axios.post(
            "http://localhost:3000/v1/user/add-to-cart",
            { productId, quantity },
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            }
        );

        // Handle the response as needed
        console.log("Response:", res.data);
        // You might want to dispatch an action or handle the response in some way

    } catch (error) {
        console.error("Error adding to cart:", error);

        // Handle different types of errors
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
            // You might want to dispatch an action or handle the error in some way
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received:", error.request);
            // You might want to dispatch an action or handle the error in some way
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error("Error message:", error.message);
            // You might want to dispatch an action or handle the error in some way
        }
    }
};








