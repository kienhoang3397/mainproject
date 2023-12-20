import { DollarCircleFilled } from "@ant-design/icons";
import { Alert, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Btn from "../../Buttons/Button";
import styles from "./FormUpdateProduct.module.css";

import TextArea from "antd/es/input/TextArea";
import * as yup from "yup";
import {
  productsFetch,
  updateProductApi,
} from "../../../../redux/slice/productApiSlice";

import { AlertTitle } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

const { Option } = Select;

const schemaFormUpdate = yup.object().shape({
  name: yup.string().required("Product Name is required"),
  desc1: yup.string().required("Description is required"),
  desc2: yup.string().required("Description is required"),
  image: yup.string().required("Image URL is required"),
  image1: yup.string().required("Image URL is required"),
  image2: yup.string().required("Image URL is required"),
  image3: yup.string().required("Image URL is required"),
  image4: yup.string().required("Image URL is required"),
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

function FormUpdateProduct() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const { productDashBoardId } = useParams();
  const productList = useSelector((state) => state.productsApi?.product?.items);

  const product = productList.find((prod) => prod._id === productDashBoardId);

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

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("category", product.category);
      setValue("desc1", product.desc1);
      setValue("desc2", product.desc2);
      setValue("image", product.image);
      setValue("image1", product.image1);
      setValue("image2", product.image2);
      setValue("image3", product.image3);
      setValue("image4", product.image4);
      setValue("price", product.price);
      setValue("stock", product.stock);
    }
  }, [product, setValue]);

  const handleInputChange = (name, value) => {
    setValue(name, value);
  };

  const onSubmit = async (data) => {
    const id = product?._id;
    try {
      await schemaFormUpdate.validate(data, { abortEarly: false });
      const productData = {
        name: data.name,
        desc1: data.desc1,
        desc2: data.desc2,
        image: data.image,
        image1: data.image1,
        image2: data.image2,
        image3: data.image3,
        image4: data.image4,
        price: data.price,
        stock: data.stock,
        category: data.category,
      };

      dispatch(updateProductApi({ id, updatedData: productData }))
        .then(() => {
          dispatch(productsFetch());
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error(err.errors);
      const validationErrors = err.errors.map(
        (error) => `Validation Error - ${error.path}: ${error.message}`
      );
      setError(validationErrors.join("\n"));
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  const closeAlerts = () => {
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      {isSubmitted && (
        <Alert
          className={styles.alert}
          message="Product Update Succces"
          type="success"
          showIcon
        />
      )}

      <div className={styles.containerHeadingTitle}>
        <p className={styles.headingTitle}>Edit Product</p>
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
                <label htmlFor="desc1" className={styles.label}>
                  Description 1
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="desc1"
                    control={control}
                    render={({ field }) => (
                      <>
                        <TextArea
                          {...field}
                          id="desc1"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                        {errors.desc1 && (
                          <p className={styles.errorMessage}>
                            {errors.desc1.message}
                          </p>
                        )}
                      </>
                    )}
                  />
                </div>
              </section>
              <section className={styles.fieldInput}>
                <label htmlFor="desc2" className={styles.label}>
                  Description 2
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="desc2"
                    control={control}
                    render={({ field }) => (
                      <>
                        <TextArea
                          {...field}
                          id="desc2"
                          className={styles.inputTextArea}
                          placeholder="Controlled autosize"
                          autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                        {errors.desc2 && (
                          <p className={styles.errorMessage}>
                            {errors.desc2.message}
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
            <p className={styles.formTitle}>Media Deta 1</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="image1" className={styles.label}>
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
            <p className={styles.formTitle}>Media Deta 2</p>
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
                            handleInputChange("image2", e.target.value)
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
            <p className={styles.formTitle}>Media Detail 3</p>
            <div className={styles.containerfieldInput}>
              <section className={styles.fieldInput}>
                <label htmlFor="image3" className={styles.label}>
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
            <p className={styles.formTitle}>Media Detail 4</p>
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

export default FormUpdateProduct;
