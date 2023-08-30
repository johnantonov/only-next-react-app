'use client'
import { ColorButton } from "@/app/shared/Button/ColorButton";
import { FunctionComponent, useContext, useState } from "react";
import './SecondNav.css'
import { useMediaQuery } from "react-responsive";
import { DropdownNav } from "../DropdownNav/DropdownNav";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { renderNavList } from "../RenderMainNav/RenderNavList";
import { AccountDrop } from "../AccountDrop/AccountDrop";
import { BasketDrop } from "../BasketDrop/BasketDrop";
import { useSwipeable } from 'react-swipeable';
import { CartContext, totalCount } from "@/app/shared/Сart/CartContext";

interface ListItem {
  img?: StaticImport | string;
  badge?: FunctionComponent;
  text: string;
  class: string;
  link: string;
}
interface Props {
  list: ListItem[];
  MainList: {text: string; link: string, key: string}[];
  BtnInfo: {
    text?: {text1: string, text2: string};
    width: number;
    paddingY: number;
    img?: {img1:StaticImport | string, img2: StaticImport | string };
  }
}

export const SecondNav: FunctionComponent<Props> = ({list, BtnInfo, MainList}) => {
  const max500pxContainer = useMediaQuery({ maxWidth: 500})
  const max600pxContainer = useMediaQuery({ maxWidth: 600})
  const min1100pxContainer = useMediaQuery({ minWidth: 1100})
  

  // открытие выпадающего меню
  const [isDropdownOpen, setIsDropdownOpen] = useState(Boolean(min1100pxContainer)); // при выше 1100рх меню всегда и изначально открыто
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
    if (isBasketOpen) {
      setIsBasketOpen(!isBasketOpen)
    }
    if (isAccountOpen) {
      setIsAccountOpen(!isAccountOpen)
    }
  }

  // открытие окна аккаунта
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const toggleOpenAccount = () => {
    setIsAccountOpen(!isAccountOpen)
    if (isBasketOpen) {
      setIsBasketOpen(!isBasketOpen)
    }
    if (isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  } 
  // открытие окна корзины
  const [isBasketOpen, setIsBasketOpen] = useState(false)
  const toggleOpenBasket = () => {
    setIsBasketOpen(!isBasketOpen)
    if (isAccountOpen) {
      setIsAccountOpen(!isAccountOpen)
    }
    if (isDropdownOpen) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }


  // свайп основного меню на мобильный устройствах
  const [scrollLeft, setScrollLeft] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if(max500pxContainer) {
        const maxScroll = (MainList.length - 3) * 100; // 100 - ширина элемента
        if (scrollLeft < maxScroll) {
          setScrollLeft(scrollLeft + 100);
        }
      }
    },
    onSwipedRight: () => {
      if(max500pxContainer) {
        if (scrollLeft > 0) {
        setScrollLeft(scrollLeft - 100);
        }
      }
    },
  });

  // используем контекст корзины и добавляем на кнопку корзину кол-во товаров

  const cartItems = useContext(CartContext)
  const totalItems = totalCount(cartItems.cartItems);

  return (
    <nav className="">
      <div className=" SecondNav ">
        <div className="container SecondNav__container">
          <button className="SecondNav__menu" disabled={Boolean(min1100pxContainer)} onClick={toggleDropdown}>
          {Boolean(max500pxContainer) ? 'Меню' : 'Каталог товаров'}
          </button>
          <div className="SecondNav__btns">
            <ColorButton handler={toggleOpenAccount} id='account'  width={Boolean(max500pxContainer) ? 20 : BtnInfo.width} paddingY={BtnInfo.paddingY} img={BtnInfo.img?.img1} text="Мой аккаунт" /> 
            <span id="cartCountBadge" style={{display: cartItems.cartItems.length === 0 ? 'none' : 'block', position: 'absolute', right: max600pxContainer ? 14 : 130}}>{totalItems}</span>
            <ColorButton handler={toggleOpenBasket} id="basket" width={Boolean(max500pxContainer) ? 20 : BtnInfo.width} paddingY={BtnInfo.paddingY} img={BtnInfo.img?.img2} text="Корзина" /> 
            {isAccountOpen && <AccountDrop /> }
            {isBasketOpen && <BasketDrop />}
          </div>
        </div>
      </div>
      <div className="thirdNav_1100px container">
        <div className="thirdNav_1100px__shadow"></div>
        <ul className="thirdNav__list_1100px"
          style={{ transform: `translateX(-${scrollLeft}px)` }}
          {...handlers}
        >
          {renderNavList(MainList)}
        </ul>
      </div>
      <div className=" container dropdownWrapper">
          {(isDropdownOpen || min1100pxContainer) && 
          <DropdownNav 
            list={list}
            classNav="SecondNav__DropdownNav"
          />
        } 
      </div>
    </nav>
  )
}