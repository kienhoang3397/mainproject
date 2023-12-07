import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Alert, Button, Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./DashBoard.module.css";
import { deleteProduct, productsFetch } from "../../redux/slice/productApiSlice";
import { HiPencil } from "react-icons/hi";
import { BiSolidTrash } from "react-icons/bi";
import Btn from "../../common/components/Buttons/Button";
import { FiPlus } from "react-icons/fi";

function DashBoard() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const productList = useSelector((state) => state.productsApi?.product?.items);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(productsFetch());
  }, []);

const handleDelete = async (productId) => {
  try {
    dispatch(deleteProduct(productId))
      .then(() => {
        setIsSubmitted(true);
        dispatch(productsFetch());
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  } catch (err) {
    console.error(err.errors);
  }
};



  return (
    <div className={styles.container}>
      {isSubmitted && (
        <Alert
          className={styles.alert}
          message="Product Delete Succces"
          type="success"
          showIcon
        />
      )}
      <main className={styles.containerCartPage}>
        <div className={styles.container1}>
          <section className={styles.fieldSettingHeading}>
            <p className={styles.formTitle}>Product</p>
            <Link to={"/dashboard/add"}>
              <div className={styles.btnAdd}>
                <FiPlus className={styles.btnAddIcon} />
                <p className={styles.btnAddContent}>Add Product</p>
              </div>
            </Link>
          </section>

          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.trTableWL}>
                <th className={styles.thTableWLFirst}>
                  <Checkbox />
                </th>
                <th className={styles.thTableWL}>Products</th>
                <th className={styles.thTableWL}>Category</th>
                <th className={styles.thTableWL}>Stock</th>
                <th className={styles.thTableWL}>Price</th>

                <th className={styles.thTableWL}>Action</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {productList?.map((item) => (
                <tr className={styles.trBody} key={item.product}>
                  <td className={styles.productSvgg}>
                    <Checkbox />
                  </td>
                  <td className={styles.productSvg}>
                    <div className={styles.productInfo}>
                      <img
                        className={styles.imgProduct}
                        src={item.image}
                        alt=""
                      />

                      <p className={styles.productContent}>{item.name}</p>
                    </div>
                  </td>
                  <td className={styles.productSvg}>{item.category}</td>
                  <td className={styles.productSvg}>{item.stock}</td>
                  <td className={styles.productSvg}>₹{item.price}</td>
                  <td className={styles.productSvg}>
                    <div className={styles.actionContainer}>
                      <div>
                        <Link className={styles.link} to={"add2/" + item._id}>
                          <HiPencil className={styles.action} />
                        </Link>
                      </div>
                      <IoEyeSharp className={styles.action} />
                      <BiSolidTrash
                        onClick={() => handleDelete(item._id)}
                        className={styles.action}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default DashBoard;
