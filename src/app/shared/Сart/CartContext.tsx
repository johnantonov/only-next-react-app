'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { createContext, useContext, useEffect, useState } from "react"
import { ColorButton } from "../Button/ColorButton";
import basketImg from '../../../../public/img/buttons/basketImg.svg'

interface CartContextType {
  cartItems: Product[];
  setCartItems: React.Dispatch<React.SetStateAction<any[]>>;
}

interface Product {
  range: number;
  productImg?: string | StaticImport;
  name: string;
  count: number;
  price: number;
  color: string;
  addition?: string;
} 


export const CartContext = createContext<CartContextType>({
  cartItems: [],
  setCartItems: () => {}
}) 

export const CartProvider: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Сохранение корзины в localStorage при её изменении
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const AddToCart = (product: Product, cartItems: Product[], setState: Function, optionalHandler?: Function) => {
  if (optionalHandler) {
    optionalHandler()
  }
  
  const newCartItems = [...cartItems];
  const existingProductIndex = newCartItems.findIndex(item => item.range === product.range && item.color === product.color);
  if (existingProductIndex > -1) {
    newCartItems[existingProductIndex].count += product.count;
    setState(newCartItems);
  } else {
    newCartItems.push(product);
    setState(newCartItems);
  }
}

export const RemoveFromCart = (product: Product,  cartItems: Product[], setState: Function) => {
  const newCartItems = [...cartItems]
  const existingProductIndex = newCartItems.findIndex(item => item.range === product.range && item.color === product.color);
  newCartItems.splice(existingProductIndex, 1)
  setState(newCartItems);
}

export const AddToCartButton = ({ product, optionalHandler }: { product: Product, optionalHandler?: Function },) => {
  const {cartItems, setCartItems} = useContext(CartContext);

  return (
    <ColorButton handler={() => AddToCart(product, cartItems, setCartItems, optionalHandler)} text="в корзину" img={basketImg} paddingY={5} width={150}/>
  );
};


// общая стоимость
export const totalPrice = (cartItems: Product[]) => {
    return cartItems.reduce((accum, currentProduct) => {
      return accum + currentProduct.price * currentProduct.count;
    }, 0);
}
// общее количество 
export const totalCount = (cartItems: Product[]) => {
    return cartItems.reduce((accum, currentProduct) => {
      return accum + currentProduct.count;
    }, 0);
}

