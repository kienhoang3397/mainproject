// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteTodo, fetchTodos, postTodos } from '../redux/slice/todolist';

// export function useTodoList() {
//     const todoList = useSelector((state) => state.todoList);
//     const dispatch = useDispatch();
//     const [formData, setFormData] = useState({ name: '', status: '' });

//     // useEffect(() => {
//     //     // Fetch initial data, if needed
//     // }, []);

//     if (!todoList) {
//         return {
//             data: [],
//             isLoading: false,
//             handleAddItem: () => { },
//             handleRefechData: () => { },
//         };
//     }

//     const { isLoading, data } = todoList;

//     const handleAddItem = () => {
//         dispatch(postTodos(formData)); 
//         setFormData({ name: '', status: '' });
//     }

//     const handleRefechData = () => {
//         dispatch(fetchTodos());
//     }
  

//     return {
//         data,
//         isLoading,
//         handleAddItem,
//         handleRefechData,
//         formData,
//         setFormData,
//     };
// }

// function Test() {
//     const dispatch = useDispatch();
//     const todoList = useSelector((state) => state.todoList);
//     const { handleAddItem, handleRefechData, formData, setFormData } = useTodoList();
    
//     const handleDeleteItem = (itemId) => {
//         dispatch(deleteTodo(itemId)); // Dispatch the delete action with the item ID
//     }

//     useEffect(() => {
//         console.log(todoList.data);
//     }, [todoList.data]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         handleAddItem();
//     }

//     return (
//         <>
//             <button onClick={handleRefechData}>Refresh Data</button>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Status"
//                     value={formData.status}
//                     onChange={(e) => setFormData({ ...formData, status: e.target.value })}
//                 />
//                 <button type="submit">Add Item</button>
//             </form>
//             <ul>
//                 {todoList.data.map(item => (
//                     <li key={item.id}>
//                         {item.name} - {item.status}
//                         <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }


// export default Test;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import httpService from '../services/httpService';

function Test() {
  // const handleFetchTodos = async () => {
  //   const data = await fetch(`https://fe21-db.vercel.app/todo/`, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   });
  //   const json = await data.json();
  //   setData(json);
  // };

  // const handlePostTodos = async (params) => {
  
  //  await fetch(`https://fe21-db.vercel.app/todo/create`, {

  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(params),
  //   });
  //   handleFetchTodos();
  // };

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   handleFetchTodos();
  // }, []);
 const [dataAPI, setDataAPI] = useState([]);

  const getList = async () => {
    const  data  = await httpService.get('/fact')
    console.log(data)
    console.log(data)
    setDataAPI(data);
  };

  const handlePostTodos = async (item) => {
    await axios.post('https://fe21-db.vercel.app/todo/create', item);
    
    getList();
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <button onClick={() => handlePostTodos({ name: 'Kien28/10', status: 'Completed' })}>Add</button>
    
    </>
  );
}
export default Test;


