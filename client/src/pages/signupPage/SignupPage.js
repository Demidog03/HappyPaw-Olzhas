import axios from "axios";
import cl from "../signupPage/SignupPage.module.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function openHomePage() {
    navigate("/home");
  }

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setError('Пожалуйста заполните обязательные поля');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { email, password });

      if (response.status === 201) {
        openHomePage()
      } else {
        setError('Ошибка создания аккаунта');
      }
    } catch (error) {
      setError('Произошла ошибка регистрации. Пожалуйста повторите позднее');
    }
  };

  return (
    <div>
      <header>
        <div className={cl.container}>
          <div className={cl.header_flex}>
            <div className={cl.header_flex_logo}>
              <div className={cl.burger_menu}></div>

              <a href="#">
                <img
                  className={cl.main_logo}
                  src="images-main/1.0-happy-paws-logo-1.svg"
                  alt="-happy-paws-logo-1"
                />
              </a>
            </div>
            <div className={cl.header_flex_link}>
              <ul>
                <li>
                  <a href="#">Услуги</a>
                </li>
                <li>
                  <a href="#">Блог</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
              </ul>
            </div>
            <div className={cl.header_flex_reg}>
              <button className={cl.signin}>Войти</button>
              <button className={cl.login}>Зарегистрироваться</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className={cl.section1_login}>
          <div className={cl.container}>
            <div className={cl.wrapper}>
              <div className={cl.close_icon}>
                <img
                  className={cl.closebtn}
                  src="images-main/p7-1-close1.svg"
                  alt="close"
                />
              </div>

              <div className={cl.regwrapper}>
                <h1>Регистрация</h1>
                {error && <p className={cl.error}>{error}</p>}
                <div className={cl.formcontent}  >
                  <div className={cl.form1}>
                    <form action="#">
                      <input type="email" placeholder="Введите e-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </form>
                  </div>

                  <div className={cl.form2}>
                    <form action="#">
                      <input type={showPassword ? 'text' : 'password'} placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                      <span onClick={togglePasswordVisibility}>
                        {showPassword ? <img src="images-main/open-eye-icon.png" alt="open-eye" /> : <img src="images-main/p7-3-eye.svg" alt="closed-eye" /> }
                      </span>
                    </form>
                  </div>

                  <div className={cl.form2}>
                    <form action="#">
                      <input type={showPassword ? 'text' : 'password'} placeholder="Подтвердите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                      <span onClick={togglePasswordVisibility}>
                        {showPassword ? <img src="images-main/open-eye-icon.png" alt="open-eye" /> : <img src="images-main/p7-3-eye.svg" alt="closed-eye" /> }
                      </span>
                    </form>
                  </div>
                </div>


                <div className={cl.login_button}>
                  <button className={cl.loginbtn} onClick={handleSignup}>Зарегистрироваться</button>
                </div>
              </div>

              
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className={cl.myfreedom2}>
          <div className={cl.container}>
            <p>Есть вопросы? Свяжитесь с нами! +375 (44) 111-11-11</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SignupPage;
