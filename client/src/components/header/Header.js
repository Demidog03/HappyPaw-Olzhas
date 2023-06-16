/* import "../../pages/main/main.css"; */
import React, { useState } from "react";
import "./header.css";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = sessionStorage.getItem("user");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function logout() {
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <header>
      <div className="container">
        <div className="header-flex">
          <div className="header-flex-logo">
            <div
              className={isOpen ? "close-menu" : "burger-menu"}
              onClick={toggleMenu}
            ></div>
            <a href="#">
              <img
                className="main-logo"
                src="/images-main/1.0-happy-paws-logo-1.svg"
                alt="happy-paws-logo-1"
              />
            </a>
          </div>
          <div className="header-flex-link">
            <ul>
              <li>
                <a href="" onClick={() => navigate("/")}>
                  Услуги
                </a>
              </li>
              <li>
                <a href="">Блог</a>
              </li>
              <li>
                <a href="">Контакты</a>
              </li>
            </ul>
          </div>
          <div
            className={
              isOpen
                ? ["colmenu", "colmenuactive"].join(" ")
                : ["colmenu"].join(" ")
            }
          >
            <ul>
              <li>

                <Link to={"/services"}>
                  <a>Услуги</a>
                </Link>
              </li>
              <li onClick={() => navigate("/posts")}>
                <a href="">Блог</a>
              </li>
              <li onClick={() => navigate("/contacts")}>
                <a href="">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="header-flex-reg">
            {user ? (
              <button className="sign-in" onClick={logout}>
                Выйти
              </button>
            ) : (
              <>
                <button className="sign-in" onClick={() => navigate("/login")}>
                  Войти
                </button>
                <button className="log-in">Зарегистрироваться</button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
