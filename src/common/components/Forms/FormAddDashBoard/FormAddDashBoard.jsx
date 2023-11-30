import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './FormAddDashBoard.css';
import { addProduct } from '../../../../redux/slice/apiRequest';
import { useDispatch } from 'react-redux';
import { FormInputDefault } from '../FormInput/FormInput';
import Btn from '../../Buttons/Button';

function FormAddDashBoard() {
const dispatch = useDispatch();
    const { handleSubmit, control } = useForm();

    const [formData, setFormData] = useState({
        name: '',
        qnty: '',
        image: '',
        price: '',
        stock: '',
        category: '',
    });

    const onSubmit = () => {
        const newProduct = {
            name: formData.name,
            qnty: formData.qnty,
            image: formData.image,
            price: formData.price,
            stock: formData.stock,
            category: formData.category,
        };

        addProduct(newProduct, dispatch);
    };

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                    <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormInputDefault
                            placeholder={'Type product name here. . .'}
                            title={'Name'}
                            {...field}
                            value={formData.name}
                            handleChange={(e) => handleInputChange('name', e.target.value)}
                        />
                    )}
                />
            </div>

            <div className='FormInputDashBoard'>
                <Controller
                    name="qnty"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormInputDefault
                            title={'Quantity'}
                            {...field}
                            value={formData.qnty}
                            handleChange={(e) => handleInputChange('qnty', e.target.value)}
                        />
                    )}
                />
            </div>

            <div className='FormInputDashBoard'>
                         <Controller
                    name="image"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormInputDefault
                            title={'Src Image'}
                            {...field}
                            value={formData.srcImage}
                            handleChange={(e) => handleInputChange('image', e.target.value)}
                        />
                    )}
                />
            </div>

            <div className='FormInputDashBoard'>
                     <Controller
                    name="price"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormInputDefault
                            title={'Price'}
                            {...field}
                            value={formData.price}
                            handleChange={(e) => handleInputChange('price', e.target.value)}
                        />
                    )}
                />
            </div>

            <div className='FormInputDashBoard'>
                     <Controller
                    name="stock"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormInputDefault
                            title={'Stock'}
                            {...field}
                            value={formData.stock}
                            handleChange={(e) => handleInputChange('stock', e.target.value)}
                        />
                    )}
                />
            </div>

            <div className='FormInputDashBoard'>
                        <Controller
                    name="category"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <FormInputDefault
                            title={'Category'}
                            {...field}
                            value={formData.category}
                            handleChange={(e) => handleInputChange('category', e.target.value)}
                        />
                    )}
                />
                           </div>
                        <Btn  variant2 content={'Add Product'} type={'submit'} ></Btn>
        
        </form>
    );
}

export default FormAddDashBoard;
