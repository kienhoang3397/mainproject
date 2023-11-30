// import React, { useEffect } from 'react';
// import { getAllProducts } from '../redux/slice/apiRequest';
// import { useDispatch, useSelector } from 'react-redux';

// function Test() {
//   const productList = useSelector((state) => state.product.product.allProduct);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getAllProducts(dispatch);
//   }, []);

//   return (
//     <div>
//       {productList.map((product) => (
//         <div key={product.id}>{product.name}</div>
//       ))}
//     </div>
//   );
// }

// export default Test;
import React, { useState } from 'react';

const Test = ({ label, name, type, register, value, onChange, errorMessage }) => {
  return (
    <label>
      {label}:
      <input
        name={name}
        type={type}
        
        value={value}
        onChange={onChange}
      />
      asgasga
      <div style={{ color: "red" }}>{errorMessage}</div>
    </label>
  );
};

export default Test;

