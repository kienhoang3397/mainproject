import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, getAllUser, refreshToken } from '../../redux/slice/apiRequest';
import axios from 'axios';

import { jwtDecode } from 'jwt-decode';
import { loginSuccsess } from '../../redux/slice/authSlice';

function Profile() {
  let axiosJWT = axios.create();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users?.allUser);
  const msg = useSelector((state) => state.users?.msg);

  const handleDeleteUser = (id) => {
    deleteUser(user?.accessToken, dispatch, id, axiosJWT)
  };

  // axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     let date = new Date();
  //     const decodedToken = jwtDecode(user?.accsessToken);

  //     if (decodedToken.exp < date.getTime() / 1000) {
  //       try {
  //         const data = await refreshToken();
  //         const refreshUser = {
  //           ...user,
  //           accsessToken: data.accsessToken,
  //         };

  //         dispatch(loginSuccsess(refreshUser));
  //         config.headers["token"] = 'Bearer ' + data.accsessToken;
  //       } catch (error) {
       
  //         console.error('Error refreshing token:', error);
  //       }
  //     }

  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );
  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.post("http://localhost:3000/v1/auth/refresh", {
  //       withCredentials: true,
  //     });
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
    
  //   }
  // };
  
  useEffect(() => {
    getAllUser(user?.accessToken, dispatch);
    
  }, []);

  return (
    <div>
      {userList?.map((user) => (
        <div key={user?._id}>
          
          {user.username}
          <button onClick={() => handleDeleteUser(user?._id)}>Delete</button>
        </div>
        
      ))}
      {msg}
    </div>
  );
}

export default Profile;
