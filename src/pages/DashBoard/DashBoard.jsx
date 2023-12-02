import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { BiSolidTrashAlt } from 'react-icons/bi'
import { IoEyeSharp } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProduct, getAllProducts } from '../../redux/slice/apiRequest'
import styles from './DashBoard.module.css'

// ... (existing code)

function DashBoard() {
    
    const productList = useSelector((state) => state.product.product.allProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        getAllProducts(dispatch);
    }, []);

    const [toogle, setToggle] = useState(false);

    const Toggle = () => {
        setToggle(!toogle);
    };
    const handleDelete = (id) => {
        deleteProduct(dispatch, id)
    }

    return (


        <div className={styles.dashboard}>


            <div className={styles.dash}>
                <Button className={styles.menuIcon}
                    type="text"
                    icon={toogle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setToggle(!toogle)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />

                <table className={styles.tableDash}>
                    <h1 className={styles.tableDashTitle}>Latest Orders</h1>
                    <thead className={styles.tableRow}>
                        <th className={styles.cell}>
                            <Checkbox />
                            <p className={styles.headerCellContent}>Order ID</p>
                        </th>
                        <th className={styles.cell}>
                            <p className={styles.headerCellContent}>Product</p>
                            <AiFillCaretDown className={styles.menuIconDash} />
                        </th>
                        <th className={styles.cell}>
                            <p className={styles.headerCellContent}>Date</p>
                            <AiFillCaretDown className={styles.menuIconDash} />
                        </th>
                        <th className={styles.cell}>
                            <p className={styles.headerCellContent}>Customer</p>

                        </th>
                        <th className={styles.cell}>
                            <p className={styles.headerCellContent}>Total</p>
                            <AiFillCaretDown className={styles.menuIconDash} />
                        </th>
                        <th className={styles.cell}>
                            <p className={styles.headerCellContent}>Payment</p>
                            <AiFillCaretDown className={styles.menuIconDash} />
                        </th>
                        {/* <th className={styles.cell}>
                <p className={styles.headerCellContent}>Status</p>
                <AiFillCaretDown className={styles.menuIconDash}/>
                </th> */}
                        <th className={styles.cell}>
                            <p className={styles.headerCellContent}>Action</p>
                            <AiFillCaretDown className={styles.menuIconDash} />
                        </th>

                    </thead>
                    <tbody>
                        {productList.map((product) => (
                            <tr key={product._id} className={styles.tableRow}>
                                <td className={styles.cell}>
                                    <Checkbox />
                                    <p className={styles.cellContentCheck}>{product.orderId}</p>
                                </td>
                                <td className={styles.cell}>
                                    <div className={styles.containerProduct}>
                                        <img className={styles.containerProductImg} src={product.image} alt="" />
                                        <section className={styles.containerProductContent}>
                                            <p className={styles.containerProductName}>{product.name}</p>
                                            <p className={styles.containerProductSold}>+ {product.qnty} Products</p>
                                        </section>
                                    </div>
                                </td>
                                <td className={styles.cell}><p className={styles.cellContent}>29 Dec 2004</p></td>
                                <td className={styles.cell}><p className={styles.cellContent}>HoangKien</p></td>
                                <td className={styles.cell}><p className={styles.cellContent}>₹{product.price}</p></td>
                                <td className={styles.cell}><p className={styles.cellContent}>{product.paymentDate}</p></td>
                                <td className={styles.cell}>
                                    <div className={styles.containerProduct}>
                                        <Link to={"add2/"+product._id}>
                                            {/* <BsFillPencilFill className={styles.menuIconDash} /> */}asgasg
                                        </Link>
                                        <IoEyeSharp className={styles.menuIconDash} />
                                        <BiSolidTrashAlt onClick={() => handleDelete(product._id)} className={styles.menuIconDash} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    );
}

export default DashBoard;


