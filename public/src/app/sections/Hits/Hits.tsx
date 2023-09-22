'use client'
import { FunctionComponent, useState, useEffect, useContext } from "react";
import './Hits.css'
import { ColorButton } from "@/app/shared/Button/ColorButton";
import Image from "next/image";
import basketImg from '../../../../public/img/buttons/basketImg.svg'
import { SaleBadge} from "@/app/shared/Badges/sale/saleBadge";
import { AddToCart, AddToCartButton, CartContext, totalCount, totalPrice} from "@/app/shared/Сart/CartContext";
import { formatPrice } from "@/app/helpers/formatPrice";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useMediaQuery } from "react-responsive";
import { useSwipeable } from 'react-swipeable';
import { createPortal } from "react-dom";
import { Text } from "@/app/components/Text/Text";


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// РЕФАКТОРИНГ И РАСКИДАТЬ ПО КОМПОНЕНТАМ


interface Hit {
  productImg: string; // path
  name: string;
  price: string;
  discountPrice: number;
  range: number;
  sale: string;
  color1info: {colorPath: string; data: string; aria: string}
  color2info: {colorPath: string; data: string; aria: string}
  color3info: {colorPath: string; data: string; aria: string}
}

export const Hits: FunctionComponent = () => {
  // контекст корзины
  const {cartItems, setCartItems} = useContext(CartContext)

  // переключайтель секции
  const [sectionState, setSectionState] = useState('hits');
  const setHits = () => {
    setSectionState('hits')
    setMoveSlides(0)
  }
  const setSale = () => {
    setSectionState('sale')
    setMoveSlides(0)
  }

  //получаем данные о товарах, которые сегодня доступны в магазине 
  const [hitsData, setHitsData] = useState<Hit[]>([]);

  useEffect(() => {
    if (sectionState === 'hits') {
      fetch('data/catalogue/hitsCatalogue.json')
        .then(res => res.json())
        .then(data => setHitsData(data))
        .catch(error => console.error('Ошибка загрузки данных:', error));
    } else if (sectionState === 'sale') {
      fetch('data/catalogue/saleCatalogue.json')
      .then(res => res.json())
        .then(data => setHitsData(data))
        .catch(error => console.error('Ошибка загрузки данных:', error));
    }
  }, [sectionState])

  // обработчик открытия окна добавления в корзину
  const [windowAdd, setWindowAdd] = useState(hitsData.map(() => false));
  const handlerBasketBtn = (index: number) => {
    const updatedWindowAdd = [...windowAdd];
    updatedWindowAdd[index] = !updatedWindowAdd[index];
    setWindowAdd(updatedWindowAdd);
  }

  // выбор цвета перед добавлением в корзину
  const [color, setColor] = useState<string[]>([]);
  const [selectedColor, setSelectedColorIndex] = useState<boolean[][]>([[]]);
  useEffect(() => {
    setColor(new Array(hitsData.length).fill('blackColor'));
  }, [hitsData]);
  useEffect(() => {
    setSelectedColorIndex(new Array(hitsData.length).fill([true, false, false]));
  }, [hitsData]);
  
  const handlerChoiceColor = (colorValue: string, index: number, indexBtn: number) => {
    const updatedColor = [...color];
    updatedColor[index] = colorValue;
    setColor(updatedColor)
    const updSelectedColor = [...selectedColor]
    updSelectedColor[index] = [false, false, false]
    updSelectedColor[index][indexBtn] = true
    setSelectedColorIndex(updSelectedColor)
  }

  // выбираем количество перед добавлением в корзину
  const [count, setCount] = useState<number[]>([]);
  useEffect(() => {
    setCount(new Array(hitsData.length).fill(1));
  }, [hitsData]);

  const incrementProductsCount = (index: number) => {
    const updatedCount = [...count];
    updatedCount[index] = updatedCount[index] + 1;
    setCount(updatedCount);
  }
  const decrementProductsCount = (index: number) => {
    const updatedCount = [...count];
    if (updatedCount[index] > 0) {
      updatedCount[index] = updatedCount[index] - 1;
    }
    setCount(updatedCount);
  }


  // реализуем слайдер
  const [moveSlides, setMoveSlides] = useState(1)
  const is651px = useMediaQuery({minWidth: 651, maxWidth: 968})
  const is969px = useMediaQuery({minWidth: 969, maxWidth: 1250})
  const is1251px = useMediaQuery({minWidth: 1251})
  let x = 1
  if (is651px) {
    x = 2
  } else if (is969px) {
    x = 3
  } else if (is1251px) {
    x = 4
  }
  useEffect(() => {
    setMoveSlides(0);
  }, [is651px, is969px, is1251px])
   
  function nextSlide() {
    if (moveSlides < hitsData.length - x) {
      setMoveSlides(moveSlides + 1);
    }
  }
  function prevSlide() {
    if (moveSlides === 0) {
      return
    }
    setMoveSlides(moveSlides - 1)
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (moveSlides < hitsData.length - x) {
        setMoveSlides(moveSlides + 1);
      }
    },
    onSwipedRight: () => {
      if (moveSlides === 0) {
        return
      }
      setMoveSlides(moveSlides - 1)
    },
  });


  // МОДАЛЬНОЕ ОКНО ПОСЛЕ ДОБАВЛЕНИЯ В КОРЗИНУ
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlerModalWindow = () => {
    setIsModalOpen(!isModalOpen)
    // закрываем открытые карточки перед продолжением покупок
    const updatedWindowAdd = windowAdd.map(el => false);
    setWindowAdd(updatedWindowAdd);
  }
  

  return (
    <section className="Hits container">
      <Text As="h2" className="Hits__title section__title">ХИТЫ ПРОДАЖ / РАСПРОДАЖА</Text>
      <div className="Hits__btns">
        <ColorButton handler={setHits} className={sectionState === 'hits' ? 'hits__active' : 'hits__unactive'} text="Самые популярные" width={227} paddingY={10} />
        <ColorButton handler={setSale} className={sectionState === 'sale' ? 'hits__active' : 'hits__unactive'} text="Распродажа" width={175} paddingY={10} />
      </div>
      <div className="Hits__wrapper">
        <div className="Hits__nav">
          <button className="Hits__prev" onClick={() => prevSlide()}></button>
          <button className="Hits__next" onClick={() => nextSlide()}></button>
        </div>

        <div className="Hits__slider" {...handlers}>

          {hitsData.map((item, index) => (
              <div className="Hits__slide" key={index} style={{ transform: `translateX(-${moveSlides * 100}%)` }}>
                <SaleBadge text={item.sale} className="Hits__saleBadge" />
                <Image layout="responsive" src={item.productImg} alt={'фото товара'} width={279} height={220} />
                <h3 className="hits__name">{item.name}</h3>
                <p className="hits__price">{formatPrice(item.discountPrice)} р.<span className="hits__discount"> {item.price}</span></p>
                <div className="hitsSlide__btns">
                  <ColorButton handler={() => handlerBasketBtn(index)} id="hits__btn_basket" className="hits__btn_basket" width={50} img={basketImg} paddingY={7}/>
                  <ColorButton handler={() => {
                      AddToCart(
                        { name: item.name,
                          range: item.range,
                          count: 1,
                          price: item.discountPrice,
                          color: item.color1info.aria,
                          productImg: item.productImg }, 
                        cartItems,
                        setCartItems,
                        handlerModalWindow
                      );
                    }
                  } id="hits__btn_buy" className="hits__btn_buy" width={192} paddingY={10} text="ЗАКАЗ в 1 клик"/>
                </div>

              <div id={`${index}_basketWindow`} className={`Hits__windowAdd ${windowAdd[index] ? 'windowAdd_active' : ''}`} >
                <div className="windowAdd__header">
                  <Text As="h3">Выберите параметры товара</Text>
                  <button onClick={() => handlerBasketBtn(index)} className="windowAdd__close"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M6.61612 6.61612C7.10427 6.12796 7.89573 6.12796 8.38388 6.61612L15 13.2322L21.6161 6.61612C22.1043 6.12796 22.8957 6.12796 23.3839 6.61612C23.872 7.10427 23.872 7.89573 23.3839 8.38388L16.7678 15L23.3839 21.6161C23.872 22.1043 23.872 22.8957 23.3839 23.3839C22.8957 23.872 22.1043 23.872 21.6161 23.3839L15 16.7678L8.38388 23.3839C7.89573 23.872 7.10427 23.872 6.61612 23.3839C6.12796 22.8957 6.12796 22.1043 6.61612 21.6161L13.2322 15L6.61612 8.38388C6.12796 7.89573 6.12796 7.10427 6.61612 6.61612Z" fill="#4D4D4C"/></svg></button>
                </div>
                <div className="windowAdd__info">
                  <Image src={item.productImg} alt={'фото товара'} width={80} height={61} />  
                  <div className="windowAdd__text">
                  <p className="hits__name_add hits__name">
                    {(() => {
                      return item.name.slice(0, 33) + '...';
                    })()}
                  </p>
                    <span className="hits__discount_add hits__discount"> {item.price}</span>
                    <p className="hits__price_add hits__price">{formatPrice(item.discountPrice)} р.</p>
                  </div>
                </div>
                  <div className="windowAdd__params">
                    <h4 className="windowAdd__bundle">Комплект поставки:</h4>
                      <select  name="windowAdd__addition" id="" className="windowAdd__addition">
                        <option value="noAddition">Без дополнительных аксессуаров</option>
                        <option value="blanket">Одеяло в подарок</option>
                      </select>
                  </div>
                  <div className="windowAdd__color">
                    <h4 className="windowAdd__bundle">Выбранный цвет: {[item.color1info, item.color2info, item.color3info][selectedColor[index]?.indexOf(true)]?.aria}</h4>
                    <div className="windowAdd__color-selector">
                      {[item.color1info, item.color2info, item.color3info].map((item, indexBtn) => (
                        <button
                        key={indexBtn}
                        onClick={() => handlerChoiceColor(item.data, index, indexBtn)}
                        className={`windowAdd__color-option ${
                          selectedColor[index] && selectedColor[index][indexBtn] ? 'selected-color' : ''
                        }`}
                        aria-label={`Выбрать ${item.aria} цвет`}
                        data-color={item.data}
                        >
                          <Image className={`${
                            selectedColor[index] && selectedColor[index][indexBtn] ? 'selected-color__check' : ''
                          }`} 
                          src={item.colorPath} 
                          alt={'фото товара'} 
                          width={80} 
                          height={60} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="windowAdd__footer">
                    <div className="windowAdd__count">
                      <button onClick={() => decrementProductsCount(index)}>-</button>
                      <span>
                        {count[index]}
                      </span>
                      <button onClick={() => incrementProductsCount(index)}>+</button>
                    </div>
                    <AddToCartButton
                      optionalHandler={handlerModalWindow}
                      product = {{
                        name: item.name,
                        range: item.range,
                        count: count[index],
                        price: item.discountPrice,
                        productImg: item.productImg,
                        color: [
                          item.color1info,
                          item.color2info,
                          item.color3info
                        ][selectedColor[index]?.indexOf(true)]?.aria
                      }}
                      />

                      {isModalOpen && createPortal(
                        <div>
                          <div className="overlay"></div>
                          <div className="modal-window">
                            <div className="modal-window__container_first">
                              <div className="modal-window__header windowAdd__header">
                                <h4>ТОВАР ДОБАВЛЕН В КОРЗИНУ</h4>
                                <button onClick={handlerModalWindow} className="windowAdd__close"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M6.61612 6.61612C7.10427 6.12796 7.89573 6.12796 8.38388 6.61612L15 13.2322L21.6161 6.61612C22.1043 6.12796 22.8957 6.12796 23.3839 6.61612C23.872 7.10427 23.872 7.89573 23.3839 8.38388L16.7678 15L23.3839 21.6161C23.872 22.1043 23.872 22.8957 23.3839 23.3839C22.8957 23.872 22.1043 23.872 21.6161 23.3839L15 16.7678L8.38388 23.3839C7.89573 23.872 7.10427 23.872 6.61612 23.3839C6.12796 22.8957 6.12796 22.1043 6.61612 21.6161L13.2322 15L6.61612 8.38388C6.12796 7.89573 6.12796 7.10427 6.61612 6.61612Z" fill="#4D4D4C"/></svg></button>
                              </div>
                              <div className="modal-window__body">
                                {cartItems[cartItems.length - 1]?.productImg !== undefined ? 
                                  <Image src={cartItems[cartItems.length - 1]?.productImg as string | StaticImport} width={80} height={61} alt="Фото товара"/>
                                  : ''
                                }
                                <div className="modal-window__info">
                                  <p className="modal-window__name">{cartItems[cartItems.length - 1]?.name}</p>
                                  <p className="modal-window__price">
                                    {count[index]} x {formatPrice(cartItems[cartItems.length - 1]?.price)} р.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="modal-window__container_second">
                              <p>В корзине {totalCount(cartItems)} товар{totalCount(cartItems).toString().endsWith('1')  ? '' 
                                : totalCount(cartItems) % 10 >= 2 && totalCount(cartItems) % 10 <= 4 &&
                                  (totalCount(cartItems) % 100 < 10 || totalCount(cartItems) % 100 >= 20) ? 'а' : 'ов' }</p>
                              <p>Предварительная сумма всего заказа:</p>
                              <p className="modal-window__total">{formatPrice(totalPrice(cartItems))}</p>
                              <div className="modal-window__btns">
                              <a href="/" className="modal-window__ColorButton ColorButton">ОФОРМИТЬ ЗАКАЗ</a>
                              <button className="modal-window__close" onClick={handlerModalWindow}>ПРОДОЛЖИТЬ ПОКУПКИ</button>
                              </div>
                            </div>
                          </div>
                          </div>
                        , document.body
                        )
                      }

                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}