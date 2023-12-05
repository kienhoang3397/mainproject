import { DollarCircleFilled } from "@ant-design/icons";
import { Alert, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Btn from "../../Buttons/Button";
import { DropMenuCustom } from "../../DropMenu/DropMenuSort/DropMenuSort";
import styles from "./FormAddDashBoard.module.css";

import TextArea from "antd/es/input/TextArea";
import * as yup from "yup";
import {
  productsFetch,
  updateProductApi,
} from "../../../../redux/slice/productApiSlice";

import { AlertTitle } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

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

      setValue("image", product.image);
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

        image: data.image,
        price: data.price,
        stock: data.stock,
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
                <label htmlFor="productCategory" className={styles.label}>
                  Product Category
                </label>
                <div className={styles.inputArea}>
                  <Controller
                    name="productCategory"
                    control={control}
                    render={({ field }) => (
                      <>
                        <DropMenuCustom
                          item1={"Iphone"}
                          item2={"MacBook"}
                          item3={"AppleWatch"}
                        />
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
