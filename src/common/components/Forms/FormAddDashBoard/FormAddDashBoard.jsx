import { DollarCircleFilled } from "@ant-design/icons";
import { Alert, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Btn from "../../Buttons/Button";
import styles from "./FormAddDashBoard.module.css";

import TextArea from "antd/es/input/TextArea";
import * as yup from "yup";
import {
  addProduct,
  productsFetch,
} from "../../../../redux/slice/productApiSlice";

import { AlertTitle } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

const { Option } = Select;

const schemaFormUpdate = yup.object().shape({
  name: yup.string().required("Product Name is required"),
  productDescription: yup.string().required("Description is required"),
  image: yup.string().required("Image URL is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .positive("Price must be greater than zero")
    .required("Price is required"),
  stock: yup
    .number()
    .typeError("Stock must be a number")
    .integer("Stock must be an integer")
    .min(0, "Stock cannot be negative")
    .required("Stock is required"),
  category: yup.string().required("Product Category is required"),
});

function FormAddProduct() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const productList = useSelector((state) => state.productsApi?.product?.items);
  const loading = useSelector((state) => state.productsApi.loading);

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaFormUpdate),
  });

  useEffect(() => {
    dispatch(productsFetch());
  }, [dispatch]);

  const handleInputChange = (name, value) => {
    setValue(name, value);
  };

 const onSubmit = async (data) => {
   try {
     await schemaFormUpdate.validate(data, { abortEarly: false });

     const existingProducts = productList;
     const isDuplicateName = existingProducts.some(
       (product) => product.name === data.name
     );
     const isDuplicateImage = existingProducts.some(
       (product) => product.image === data.image
     );

     if (isDuplicateName || isDuplicateImage) {
       setError("Product with the same name or image already exists");
       setIsSubmitted(false); // Reset isSubmitted to false
       return;
     }

     const productData = {
       name: data.name,
       image: data.image,
       image1: data.image1,
       image2: data.image2,
       image3: data.image3,
       image4: data.image4,
       price: data.price,
       stock: data.stock,
       category: data.category,
     };

     dispatch(addProduct(productData))
       .then(() => {
         setIsSubmitted(true);
         dispatch(productsFetch());
       })
       .catch((error) => {
         console.error("Error updating product:", error);
         setError("Error adding product. Please try again."); // Set error message
       });

     setTimeout(() => {
       setIsSubmitted(false);
       setError(null); // Clear error message
     }, 4000);
   } catch (err) {
     console.error(err.errors);
     const validationErrors = err.errors?.map(
       (error) => `Validation Error - ${error.path}: ${error.message}`
     );

     setError(validationErrors.join("\n"));
     setIsSubmitted(false); // Reset isSubmitted to false
   }
 };

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 4000);
  }, [error]);

  const closeAlerts = () => {
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      {isSubmitted && (
        <Alert
          className={styles.alert}
          message="Product Add Success"
          type="success"
          showIcon
        />
      )}

      {error && (
        <Alert
          className={styles.alert}
          message={error}
          type="error"
          showIcon
          onClose={closeAlerts}
        />
      )}

      <div className={styles.containerHeadingTitle}>
        <p className={styles.headingTitle}>Add Product</p>
        <Btn
          defaultValue
          content={"Save Product"}
          width={"140px"}
          height={"40px"}
          htmlType="submit"
        ></Btn>
      </div>
      <section className={styles.productSetting}>
        <div className={styles.leftForm}>
          <div className={styles.containerForm}>
            <p className={styles.formTitle}>General Information</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="name" className={styles.label}>
                  Product Name
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="name"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                        />
                        {errors.name && (
                          <p className={styles.errorMessage}>
                            {errors.name.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
              <section className={styles.fieldInput}>
                <label htmlFor="productDescription" className={styles.label}>
                  Description
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="productDescription"
                    control={control}
                    render={({ field }) => (
                      <>
                        <TextArea
                          {...field}
                          id="productDescription"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                        {/* {errors.productDescription && (
                          <p className={styles.errorMessage}>
                            {errors.productDescription.message}
                          </p>
                        )} */}
                      </>
                    )}
                  />
                </div>
              </section>
            </div>
          </div>
          <div className={styles.containerForm}>
            <p className={styles.formTitle}>Media</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="image" className={styles.label}>
                  Photo
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="image"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="image"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          onChange={(e) =>
                            handleInputChange("image", e.target.value)
                          }
                        />
                        {errors.image && (
                          <p className={styles.errorMessage}>
                            {errors.image.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
            </div>
          </div>
          <div className={styles.containerForm}>
            <p className={styles.formTitle}>Media</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="image" className={styles.label}>
                  Photo
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="image1"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="image1"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          onChange={(e) =>
                            handleInputChange("image1", e.target.value)
                          }
                        />
                        {errors.image1 && (
                          <p className={styles.errorMessage}>
                            {errors.image1.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
            </div>
          </div>
          <div className={styles.containerForm}>
            <p className={styles.formTitle}>Media</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="image2" className={styles.label}>
                  Photo
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="image2"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="image2"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          onChange={(e) =>
                            handleInputChange("image", e.target.value)
                          }
                        />
                        {errors.image2 && (
                          <p className={styles.errorMessage}>
                            {errors.image2.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
            </div>
          </div>
          <div className={styles.containerForm}>
            <p className={styles.formTitle}>Media</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="image" className={styles.label}>
                  Photo
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="image3"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="image3"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          onChange={(e) =>
                            handleInputChange("image3", e.target.value)
                          }
                        />
                        {errors.image3 && (
                          <p className={styles.errorMessage}>
                            {errors.image3.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
            </div>
          </div>
          <div className={styles.containerForm}>
            <p className={styles.formTitle}>Media</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="image4" className={styles.label}>
                  Photo
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="image4"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="image4"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          onChange={(e) =>
                            handleInputChange("image4", e.target.value)
                          }
                        />
                        {errors.image4 && (
                          <p className={styles.errorMessage}>
                            {errors.image4.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
            </div>
          </div>
          <div className={styles.containerForm}>
            <p className={styles.formTitle}>Pricing</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="productBasePrice" className={styles.label}>
                  Base Price
                </label>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        id="price"
                        className={styles.inputAntd}
                        size="large"
                        placeholder="large size"
                        prefix={<DollarCircleFilled />}
                        onChange={(e) =>
                          handleInputChange("price", e.target.value)
                        }
                      />
                      {errors.price && (
                        <p className={styles.errorMessage}>
                          {errors.price.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </section>
            </div>
          </div>
        </div>
        <div className={styles.rightForm}>
          <div className={styles.containerForm}>
            <p className={styles.formTitle}>Category</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="category" className={styles.label}>
                  Product Category
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Select
                          {...field}
                          id="category"
                          className={styles.inputTextArea}
                          placeholder="Select Product Category"
                          onChange={(value) =>
                            handleInputChange("category", value)
                          }
                        >
                          <Option value="Iphone">Iphone</Option>
                          <Option value="MacBook">MacBook</Option>
                          <Option value="AppleWatch">Apple Watch</Option>
                        </Select>
                        {errors.category && (
                          <p className={styles.errorMessage}>
                            {errors.category.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
              <section className={styles.fieldInput}>
                <label htmlFor="stock" className={styles.label}>
                  Product Stock
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="stock"
                    control={control}
                    render={({ field }) => (
                      <>
                        <Input
                          {...field}
                          id="stock"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          onChange={(e) =>
                            handleInputChange("stock", e.target.value)
                          }
                        />
                        {errors.stock && (
                          <p className={styles.errorMessage}>
                            {errors.stock.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default FormAddProduct;
