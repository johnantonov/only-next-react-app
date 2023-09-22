'use client'
import { Logo } from "@/app/shared/Logo/Logo"
import './Footer.css'
import { BtnContact } from "@/app/shared/BtnContact/BtnContact"
import phone from '../../../../public/img/buttons/phone.svg'
import tg from '../../../../public/img/buttons/tg.svg'
import mail from '../../../../public/img/buttons/mail.svg'
import whatsup from '../../../../public/img/buttons/whatsup.svg'
import { useMediaQuery } from "react-responsive"
import { useState } from "react"


export const Footer = () => {

  const is500px = useMediaQuery({maxWidth: 500})

  const [openAboutShop, setOpenAboutShop] = useState(false)
  const menuShopHandler = () => {
    setOpenAboutShop(!openAboutShop)
  }

  const [openForBuyers, setOpenForBuyers] = useState(false)
  const menuBuyersHandler = () => {
    setOpenForBuyers(!openForBuyers)
  }

  return (
    <footer className="container footer__container">
      <div>
        <Logo secondColor="#495955" firstColor="#019CDD"/>
        <div className="footer__schedule">
          <a href="tel:74994446902" className="footer__tel MainNav__tel ">+7 499 444-69-02</a>
          <p className="footer__schedule_name">График работы:</p>
          <p className="footer__schedule_text">Пн-Пт, 10.00 - 19.00</p>
          <br />
          <p className="footer__schedule_name">Адрес офиса:</p>
          <p className="footer__schedule_text">г. Москва, ул. Расплетина, дом 11, к.2</p>
          <a href="" className="footer__cart">
            <span className="cart__img">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4.22868 2.89543C5.22888 1.89524 6.58543 1.33333 7.99992 1.33333C9.41441 1.33333 10.771 1.89524 11.7712 2.89543C12.7713 3.89562 13.3333 5.25218 13.3333 6.66667C13.3333 8.73204 11.9894 10.7362 10.516 12.2915C9.79284 13.0548 9.06747 13.6796 8.52213 14.1139C8.31918 14.2755 8.1419 14.4101 7.99992 14.5151C7.85793 14.4101 7.68066 14.2755 7.4777 14.1139C6.93236 13.6796 6.20699 13.0548 5.48389 12.2915C4.01041 10.7362 2.66659 8.73204 2.66659 6.66667C2.66659 5.25218 3.22849 3.89562 4.22868 2.89543ZM7.62976 15.8878C7.62995 15.8879 7.63012 15.888 7.99992 15.3333L7.63012 15.888C7.85405 16.0373 8.14579 16.0373 8.36972 15.888L7.99992 15.3333C8.36972 15.888 8.36989 15.8879 8.37008 15.8878L8.37058 15.8875L8.37199 15.8865L8.37643 15.8835L8.39171 15.8732C8.40469 15.8644 8.4232 15.8517 8.44688 15.8353C8.49423 15.8025 8.56228 15.7548 8.64806 15.6928C8.81955 15.5689 9.06235 15.3881 9.3527 15.1569C9.93236 14.6954 10.707 14.0286 11.4839 13.2085C13.0104 11.5972 14.6666 9.26796 14.6666 6.66667C14.6666 4.89856 13.9642 3.20286 12.714 1.95262C11.4637 0.702379 9.76803 0 7.99992 0C6.23181 0 4.53612 0.702379 3.28587 1.95262C2.03563 3.20286 1.33325 4.89856 1.33325 6.66667C1.33325 9.26796 2.98943 11.5972 4.51595 13.2085C5.29284 14.0286 6.06747 14.6954 6.64713 15.1569C6.93749 15.3881 7.18028 15.5689 7.35178 15.6928C7.43756 15.7548 7.50561 15.8025 7.55296 15.8353C7.57664 15.8517 7.59515 15.8644 7.60813 15.8732L7.62341 15.8835L7.62785 15.8865L7.62926 15.8875L7.62976 15.8878ZM6.66659 6.66667C6.66659 5.93029 7.26354 5.33333 7.99992 5.33333C8.7363 5.33333 9.33325 5.93029 9.33325 6.66667C9.33325 7.40305 8.7363 8 7.99992 8C7.26354 8 6.66659 7.40305 6.66659 6.66667ZM7.99992 4C6.52716 4 5.33325 5.19391 5.33325 6.66667C5.33325 8.13943 6.52716 9.33333 7.99992 9.33333C9.47268 9.33333 10.6666 8.13943 10.6666 6.66667C10.6666 5.19391 9.47268 4 7.99992 4Z" fill="black"/>
              </svg>
            </span>
            Карта проезда
          </a>
        </div>
      </div>
      <div>
        <h4 >СВЯЗАТЬСЯ С НАМИ</h4>
        <BtnContact 
          link="/"
          img={tg}
          alt=""
          text="Написать в Telegram"
          color="#019CDD"
        />
        <BtnContact 
          link="/"
          img={whatsup}
          alt=""
          text="Написать в Whatsapp"
          color="#4BC796"
        />
        <BtnContact 
          link="/"
          img={mail}
          alt=""
          text="Отправить заявку"
          color="#000000"
        />
        <BtnContact 
          link="/"
          img={phone}
          alt=""
          text="Обратный звонок"
          color="#019CDD"
        />
      </div>
      <button onClick={() => {menuBuyersHandler()}} style={openForBuyers ? { borderBottom: 'none' } : {}} className="footer__btn buyers__btn">ПОКУПАТЕЛЯМ <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6.00001 8.40007C5.65001 8.40007 5.30001 8.26507 5.03501 8.00007L1.77501 4.74007C1.63001 4.59507 1.63001 4.35507 1.77501 4.21007C1.92001 4.06507 2.16001 4.06507 2.30501 4.21007L5.56501 7.47007C5.80501 7.71007 6.19501 7.71007 6.43501 7.47007L9.69501 4.21007C9.84001 4.06507 10.08 4.06507 10.225 4.21007C10.37 4.35507 10.37 4.59507 10.225 4.74007L6.96501 8.00007C6.70001 8.26507 6.35001 8.40007 6.00001 8.40007Z" fill="black"/></svg></button>
      {(!is500px || openForBuyers === true) &&
        <div className="footer__buyers">
          <h4>ПОКУПАТЕЛЯМ</h4>
          <ul >
            <li className="footer__link"><a href="">Хочу попробовать</a></li>
            <li className="footer__link"><a href="">Статьи</a></li>
            <li className="footer__link"><a href="">Отзывы</a></li>
            <li className="footer__link"><a href="">СМИ о нас</a></li>
            <li className="footer__link"><a href="">Партнерам</a></li>
            <li className="footer__link"><a href="">О компании</a></li>
          </ul>
        </div>
      }
      <button onClick={() => {menuShopHandler()}} style={openAboutShop ? { borderBottom: 'none' } : {}} className="footer__btn aboutShop__btn">О МАГАЗИНЕ <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6.00001 8.40007C5.65001 8.40007 5.30001 8.26507 5.03501 8.00007L1.77501 4.74007C1.63001 4.59507 1.63001 4.35507 1.77501 4.21007C1.92001 4.06507 2.16001 4.06507 2.30501 4.21007L5.56501 7.47007C5.80501 7.71007 6.19501 7.71007 6.43501 7.47007L9.69501 4.21007C9.84001 4.06507 10.08 4.06507 10.225 4.21007C10.37 4.35507 10.37 4.59507 10.225 4.74007L6.96501 8.00007C6.70001 8.26507 6.35001 8.40007 6.00001 8.40007Z" fill="black"/></svg></button>
      {(!is500px || openAboutShop === true) &&
        <div className="footer__aboutShop">
          <h4>О МАГАЗИНЕ</h4>
          <ul >
            <li className="footer__link"><a href="">Доставка и оплата</a></li>
            <li className="footer__link"><a href="">Возврат</a></li>
            <li className="footer__link"><a href="">Пункты самовывоза</a></li>
            <li className="footer__link"><a href="">Политика конфеденциальности</a></li>
            <li className="footer__link"><a href="">Протестировать оборудование</a></li>
          </ul>
        </div>
      }
    </footer>
  )
}