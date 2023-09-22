import { MainNav } from "@/app/components/NavFeature/MainNav/MainNav";
import { FunctionComponent } from "react";
import './Header.css'
import React from "react";
import { SecondNav } from "@/app/components/NavFeature/SecondNav/SecondNav";
import accountImg from '../../../../public/img/buttons/accountImg.svg'
import basketImg from '../../../../public/img/buttons/basketImg.svg'
import { Hit } from "@/app/shared/Badges/hit/Hit";
import backImg from '../../../../public/img/SecondNav/back.svg'
import neckImg from '../../../../public/img/SecondNav/neck.svg'
import sleepImg from '../../../../public/img/SecondNav/sleep.svg'
import massageImg from '../../../../public/img/SecondNav/massage.svg'
import saleImg from '../../../../public/img/SecondNav/sale.svg'
import { NewBadge } from "@/app/shared/Badges/new/New";


let PropsMain = {
  container: 'container',
  list: [
    {text: 'статьи', link: '/', key: 'articles'},
    {text: 'отзывы', link: '/', key: 'reviews'},
    {text: 'сми о нас', link: '/', key: 'smi'},
    {text: 'партнерам', link: '/', key: 'partner'},
    {text: 'контакты', link: '/', key: 'contacts'},
  ],
  LogoColors: ['#019CDD', '#495955'],
  BtnInfo: {
    text: 'Хочу попробовать',
    width: 197,
    paddingY: 10, 
  }
}

let PropsSecond = {
  list: [
    {text: "Все товары", class: "all", link: '/' },
    {text: "Когда болит спина",img: backImg,class: "back", link: '/',badge: Hit},
    {text: "Когда болит шея", img: neckImg, class: "neck", link: '/'},
    {text: "Для здорового сна", img: sleepImg, class: "sleep", link: '/'},
    {text: "Массажное оборудование", img: massageImg, class: "massage", link: '/'},
    {text: "Товары со скидкой", img: saleImg, class: "sale", link: '/'},
    {text: "Отзывы", class: "testimonials", link: '/', badge: NewBadge},
    {text: "Болит спина, что сделать?", class: "painBack", link: '/'},
    {text: "Где можно попробовать?", class: "where", link: '/'},
  ],
  BtnInfo: {
    text: {text1: "Мой аккаунт", text2: "Корзина"},
    width: 199,
    paddingY: 10,
    img: {img1: accountImg, img2: basketImg}
  }

}



export const Header: FunctionComponent = () => {


  return (
    <header className="">

        <MainNav 
          container="container"
          list={PropsMain.list}
          LogoColors={PropsMain.LogoColors}
          BtnInfo={PropsMain.BtnInfo}
        />
      <SecondNav list={PropsSecond.list} BtnInfo={PropsSecond.BtnInfo} MainList={PropsMain.list}/>
    </header>
  )
}