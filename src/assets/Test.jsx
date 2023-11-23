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

const Test = () => {
  const [formData, setFormData] = useState({
    subjects: [], // Mảng lưu trữ các môn học được chọn
  });

  const subjectsList = ['Math', 'Science', 'History', 'English']; // Thay đổi danh sách môn học theo nhu cầu

  const handleCheckboxChange = (subject) => {
    const updatedSubjects = [...formData.subjects];

    if (updatedSubjects.includes(subject)) {
      // Nếu môn học đã được chọn, loại bỏ khỏi danh sách
      updatedSubjects.splice(updatedSubjects.indexOf(subject), 1);
    } else {
      // Nếu môn học chưa được chọn, thêm vào danh sách
      updatedSubjects.push(subject);
    }

    setFormData({
      ...formData,
      subjects: updatedSubjects,
    });
  };

  return (
    <div className="subject">
      <p className='titleSubject'>Select Subject?</p>
      {/* Render checkboxes dynamically */}
      {subjectsList.map((subject) => (
        <label key={subject} className="checkBoxField">
          <p className='contentCheckBox'>{subject}</p>
          <input
            type="checkbox"
            value={subject}
            checked={formData.subjects.includes(subject)}
            onChange={() => handleCheckboxChange(subject)}
          />
          <span className="checkmark"></span>
        </label>
      ))}
    </div>
  );
};

export default Test;

