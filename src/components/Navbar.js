import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import foodnest from './img-visa/foodnest.png';
import language from './img-visa/Language.png';

export default function Navbar(props, { address }) {

    const [cartView, setCartView] = useState(false);
    const items = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    };

    const loadCart = () => {
        setCartView(true);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-success navbar-dark position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">
                        <img src={foodnest} style={{ height: '50px', width: 'auto' }} alt="FoodNest Logo" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 pt-3 active" aria-current="page" to="/">Home</Link>
                            </li>
                            {(localStorage.getItem("token")) &&
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 pt-3 active" aria-current="page" to="/myorder">My Orders</Link>
                                </li>
                            }
                          

                        </ul>
                        <li className="  dropdown onhover-dropdown  yash ">
                                <span className="nav-link dropdown-toggle text-black-50" id="quickLinksDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Quick Links</span>
                                <div className="dropdown-menu" aria-labelledby="quickLinksDropdown">
                                    <a className="dropdown-item" href="https://foodnests.com/page/careers" target="_blank" rel="noopener noreferrer">Careers</a>
                                    <a className="dropdown-item" href="https://foodnests.com/page/vendor-registration" target="_blank" rel="noopener noreferrer">Vendor Registration</a>
                                    <a className="dropdown-item" href="https://foodnests.com/page/privacy-policies" target="_blank" rel="noopener noreferrer">Privacy Policies</a>
                                    <a className="dropdown-item" href="https://foodnests.com/page/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                                    <a className="dropdown-item" href="https://foodnests.com/page/faqs" target="_blank" rel="noopener noreferrer">FAQ's</a>
                                </div>
                            </li>

                            <li className=" dropdown onhover-dropdown  yash ">
                                <span className="nav-link dropdown-toggle d-flex align-items-center text-black-50" id="languageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-1">En</span>
                                    <span className="icon-icLang align-middle">
                                        <img className="manu" src={language} alt="Language Icon" />
                                    </span>
                                    <span className="ml-1">Language</span>
                                </span>
                                <div className="dropdown-menu" aria-labelledby="languageDropdown">
                                    <a className="dropdown-item "  target="_blank" rel="noopener noreferrer">English</a>
                                    <a className="dropdown-item" target="_blank" rel="noopener noreferrer">Hindi(हिन्दी, हिंदी)</a>
                                </div>
                            </li>
                        {(!localStorage.getItem("token")) ?
                            <form className="d-flex">
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
                            </form> :
                            <div className='cart'>
                                <div className="btn bg-white text-success mx-2 " onClick={loadCart}>
                                    <Badge color="secondary" badgeContent={items.length}>
                                        <ShoppingCartIcon />
                                    </Badge>
                                    Cart
                                </div>
                                {cartView && <Modal onClose={() => setCartView(false)}><Cart /></Modal>}
                                <button onClick={handleLogout} className="btn bg-white text-success">Logout</button>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
