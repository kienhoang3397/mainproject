import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateProduct } from '../../../../redux/slice/apiRequest';
import Btn from '../../Buttons/Button';
import { FormInputDefault } from '../FormInput/FormInput';

function FormUpdateProduct() {
    const params = useParams();
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

    const getProductInfo = async () => {
        try {
            let result = await fetch(`http://localhost:3000/${params.id}`);
            result = await result.json();

            setFormData({
                name: result.name,
                qnty: result.qnty,
                image: result.image,
                price: result.price,
                stock: result.stock,
                category: result.category,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductInfo();
    }, [params.id]);

    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleUpdateProduct = (e) => {
        
        const id = params.id;

        const newProduct = {
            name: formData.name,
            qnty: formData.qnty,
            image: formData.image,
            price: formData.price,
            stock: formData.stock,
            category: formData.category,
        };

        updateProduct(newProduct, id, dispatch);
    };

    return (
        <div className="containerFormDashBoad">
            <form className="FormDashBoad" onSubmit={handleSubmit(handleUpdateProduct)}>
                <FormInputDefault
                    placeholder={'Type product name here. . .'}
                    title={'Name'}
                    value={formData.name}
                    handleChange={(e) => handleInputChange('name', e.target.value)}
                />
                <FormInputDefault
                    title={'Quantity'}
                    value={formData.qnty}
                    handleChange={(e) => handleInputChange('qnty', e.target.value)}
                />
                <FormInputDefault
                    title={'Src Image'}
                    value={formData.image}
                    handleChange={(e) => handleInputChange('image', e.target.value)}
                />
                <FormInputDefault
                    title={'Price'}
                    value={formData.price}
                    handleChange={(e) => handleInputChange('price', e.target.value)}
                />
                <FormInputDefault
                    title={'Stock'}
                    value={formData.stock}
                    handleChange={(e) => handleInputChange('stock', e.target.value)}
                />
                <FormInputDefault
                    title={'Category'}
                    value={formData.category}
                    handleChange={(e) => handleInputChange('category', e.target.value)}
                />
                <Btn defaultValue content={'Submit'} type={'submit'}>
                    Submit
                </Btn>
            </form>
        </div>
    );
}

export default FormUpdateProduct;
