import { FunctionComponent, useContext } from 'react'
import './BasketDrop.css'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { ColorButton } from '@/app/shared/Button/ColorButton';
import Image from 'next/image';
import { CartContext, RemoveFromCart, totalCount, totalPrice } from '@/app/shared/Сart/CartContext';
import { formatPrice } from '@/app/helpers/formatPrice';

export const BasketDrop: FunctionComponent = () => {
  const {cartItems, setCartItems} = useContext(CartContext);


  
  if (cartItems[0] === undefined) {
    return (
      <div className='basket basket_empty'>
        <p>Ваша корзина пуста</p>
      </div>
    )
  }

  return (
      <div className='basket'>
        <ul>  
          {(() => {
            return cartItems.map((item, index) => {
              return <li key={index} className={'Basket__product product' + item.range}>
                <Image className='product__img' src={item.productImg ? item.productImg : ''} alt='Фото продукта' width={80} height={62}/>
                <div className='product__info'>
                  <p className='product__name'>{item.name} (Цвет: {item.color ? item.color : 'стандартный'})</p>
                  <p className='product__price'>{item.count} x {formatPrice(item.price)} р.</p>
                  <p>{item.addition}</p>
                </div>
                <button className='basket__delete' onClick={() => {RemoveFromCart(item, cartItems, setCartItems)}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.16999 15.58C8.97999 15.58 8.78999 15.51 8.63999 15.36C8.34999 15.07 8.34999 14.59 8.63999 14.3L14.3 8.63999C14.59 8.34999 15.07 8.34999 15.36 8.63999C15.65 8.92999 15.65 9.40998 15.36 9.69998L9.69998 15.36C9.55998 15.51 9.35999 15.58 9.16999 15.58Z" fill="#9F9F9F"/><path d="M14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L8.63999 9.69998C8.34999 9.40998 8.34999 8.92999 8.63999 8.63999C8.92999 8.34999 9.40998 8.34999 9.69998 8.63999L15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58Z" fill="#9F9F9F"/><path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#9F9F9F"/></svg></button>
              </li>
            })
          })()}
        </ul>
        <div className='Basket__info'>
          <span className='Basket__all'>Всего:</span>
          <div>
            <span className='Basket__count'>{totalCount(cartItems)} шт. на </span>
            <span className='Basket__price'>{formatPrice(totalPrice(cartItems))} р.</span>
          </div>
        </div>
        <div className='Basket__btns'>
          <ColorButton id='goBasket' width={120} text='Корзина' paddingY={10}/>
          <ColorButton id='checkoutOrder' width={177} text='Оформить заказ' paddingY={10}/>
        </div>
      </div>
  )
}