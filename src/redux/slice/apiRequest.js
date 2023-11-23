import axios from "axios";
import { getProductError, getProductStart, getProductSuccess, addProductStart, addProductSuccsess, addProductFailed, deleteProductStart, deleteProductSuccsess, deleteProductFailed, updateProductStart, updateProductSuccsess, updateProductFailed } from "./productSlice";
import { loginFailed, loginStart, loginSuccsess, registerFailed, registerStart, registerSuccsess } from "./authSlice"
import { deleteUserFailed, deleteUsersStart, deleteUsersSuccsess, getUserFailed, getUsersStart, getUsersSuccsess} from "./userSlice";

export const getAllProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await axios.get("http://localhost:3000/getall");
        dispatch(getProductSuccess(res.data)); // Đã sửa tên action creator
    } catch (err) {
        dispatch(getProductError());
    }
};
export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        await axios.post("http://localhost:3000/add", product)
        dispatch(addProductSuccsess())


    }
    catch (err) {
        dispatch(addProductFailed())
    }
}
export const deleteProduct = async (dispatch, id) => {
    dispatch(deleteProductStart());
    try {
        const res = await axios.delete(`http://localhost:3000/${id}`);
        dispatch(deleteProductSuccsess());
    } catch (err) {
        dispatch(deleteProductFailed());
    }
};


export const updateProduct = async (product, id, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await axios.put(`http://localhost:3000/${id}`, product);
        dispatch(updateProductSuccsess(res.data)); 
    } catch (err) {
        console.error('Error updating product:', err);
        dispatch(updateProductFailed(err.message)); 
    }
};



export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:3000/v1/auth/login", user)
        dispatch(loginSuccsess(res.data))
        navigate("/home")

    }
    catch (err) {
        dispatch(loginFailed())
    }
}
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("http://localhost:3000/v1/auth/register", user)
        dispatch(registerSuccsess())
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
      dispatch(getUsersSuccsess(res.data));
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch(getUserFailed());
    }
  };
  export const deleteUser = async (accessToken, dispatch, id,axiosJWT) => {
    dispatch(deleteUsersStart()); 
    try {
      const res = await axiosJWT.delete("http://localhost:3000/v1/user/"+ id, {
        headers: { token: `Bearer ${accessToken}` },
      });
      dispatch(deleteUsersSuccsess(res.data));
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch(deleteUserFailed());
    }
  };



  
  
