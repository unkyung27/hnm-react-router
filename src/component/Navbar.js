import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M HOME', 'SALE', '지속가능성'];
    
// console.log("내비", {authenticate});

    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    }
    const search = (event) => {
        if(event.key === "Enter") {
            let keyword = event.target.value;
            // console.log("keyword ", keyword);

            // url 변경
            navigate(`/?q=${keyword}`);
        }
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
    <div>
        <div className="menu-toggle" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        <div>
            <div className="login-button" onClick={authenticate === false ? goToLogin : () => setAuthenticate(false)}>
                <FontAwesomeIcon icon={faUser} /> 
                <div>{authenticate === false ? '로그인' : '로그아웃'}</div>
            </div>
        </div>
        <div className="nav-section">
            <img className="nav-img-area" 
                width={100}
                src="https://i.pinimg.com/originals/94/8c/7f/948c7f31df5eb63955907221228842d7.png" alt=""
                onClick={() => navigate("/")}
            />
        </div>
        <div className="menu-area">
            <ul className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
                {menuList.map((menu, index) => (
                    <li key={index}>{menu}</li>
                ))}
            </ul>
            <div className="search-area">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" onKeyPress={(event)=>search(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar