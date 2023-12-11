import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./OrtherHistory.module.css";
import Status from "../../common/components/Status/Status";
import Btn from "../../common/components/Buttons/Button";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function OrtherHistory() {
  const orderhistory = useSelector((state) => state.infoUserApi.user.orderhistory);

  const formatDate = (dateString) => {
    const options = {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  return (
    <div className={styles.container}>
      <section className={styles.fieldSettingHeading}>
        <p className={styles.settingHeading}>Order History</p>
      </section>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.trTableWL}>
            <th className={styles.thTableWLFirst}>PRODUCT NAME</th>
            <th className={styles.thTableWL}>STATUS</th>
            <th className={styles.thTableWL}>DATE</th>
            <th className={styles.thTableWL}>TOTAL</th>
            <th className={styles.thTableWL}>ACTION</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {orderhistory?.map((orderhistory) => (
            <tr className={styles.trBody} key={orderhistory._id}>
              <td className={styles.productSvg}>
                <div className={styles.productPrice}>
                  <p className={styles.name}>
                    {" "}
                    {orderhistory.products[0].name}
                  </p>
                </div>
              </td>
              <td className={styles.productSvg}>
                <div className={styles.productPrice}>
                  <p className={styles.price}>IN PROGRESS</p>
                </div>
              </td>
              <td className={styles.productSvg}>
                <p className={styles.date}> {formatDate(orderhistory.date)} </p>
              </td>
              <td className={styles.productSvg}>
                <p className={styles.total}>
                  {" "}
                  ₹{orderhistory.products[0].amount} ({" "}
                  {orderhistory.products[0].quantity} item ){" "}
                </p>
              </td>
              <td className={styles.productSvg}>
                <section className={styles.productSvg}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/product/${orderhistory.products[0].product}`}
                  >
                    <p className={styles.detail}>
                      View Details <IoMdArrowForward />{" "}
                    </p>
                  </Link>
                </section>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrtherHistory;
