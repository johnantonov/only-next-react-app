import { ColorButton } from "@/app/shared/Button/ColorButton"
import "./AccountDrop.css"
import { FunctionComponent, useRef, useState } from "react"


export const AccountDrop: FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [valid, setValid] = useState(true)
  const [click, setClick] = useState(false)

  
  function checkAccount(arg: number | string | undefined) {
    console.log(typeof inputRef.current?.value)
    if(arg === '') {
      setValid(false)
      return
    }
    setClick(true)
    if (typeof arg === 'string') {
      if (arg.includes('@') && arg.includes('.')) {
        console.log('открываем окно авторизации, с уже введенной почтой')
        return
      } else {
        fetch(`http://someAdress/${arg}`)
        .then(() => console.log('осуществляем вход')) // открытие окна с информацией о заказе 
        .catch(() => {
          setValid(false)
          setClick(false)
        })
      } 
    }
  }
  function inputOnChange() {
    setValid(true)
    console.log('yes')
    setClick(false)
  }

  return (
    <div className="account">
      <a href="/" className="btn account__myOrders">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z" fill="#292D32"/><path d="M6 16.75C5.59 16.75 5.25 16.41 5.25 16V8C5.25 7.59 5.59 7.25 6 7.25C6.41 7.25 6.75 7.59 6.75 8V16C6.75 16.41 6.41 16.75 6 16.75Z" fill="#292D32"/><path d="M9 12.75C8.59 12.75 8.25 12.41 8.25 12V8C8.25 7.59 8.59 7.25 9 7.25C9.41 7.25 9.75 7.59 9.75 8V12C9.75 12.41 9.41 12.75 9 12.75Z" fill="#292D32"/><path d="M9 16.75C8.59 16.75 8.25 16.41 8.25 16V15C8.25 14.59 8.59 14.25 9 14.25C9.41 14.25 9.75 14.59 9.75 15V16C9.75 16.41 9.41 16.75 9 16.75Z" fill="#292D32"/><path d="M15 9.75C14.59 9.75 14.25 9.41 14.25 9V8C14.25 7.59 14.59 7.25 15 7.25C15.41 7.25 15.75 7.59 15.75 8V9C15.75 9.41 15.41 9.75 15 9.75Z" fill="#292D32"/><path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="#292D32"/><path d="M15 16.75C14.59 16.75 14.25 16.41 14.25 16V12C14.25 11.59 14.59 11.25 15 11.25C15.41 11.25 15.75 11.59 15.75 12V16C15.75 16.41 15.41 16.75 15 16.75Z" fill="#292D32"/><path d="M18 16.75C17.59 16.75 17.25 16.41 17.25 16V8C17.25 7.59 17.59 7.25 18 7.25C18.41 7.25 18.75 7.59 18.75 8V16C18.75 16.41 18.41 16.75 18 16.75Z" fill="#292D32"/></svg> 
        <span>Мои заказы</span>
      </a>
      <div className="account__track">
        <p className="track__title">Отследить заказ:</p>
        <input onChange={() => inputOnChange()} ref={inputRef} className="track__input" type="text" placeholder="Номер заказа или e-mail"/>
        {!!click && <span className="account__validate account__validate_loading">загрузка...</span>}
        {!valid && <span className="account__validate">e-mail или заказ не найден</span>}
        <div className="account__btns">
          <ColorButton handler={() => checkAccount(inputRef.current?.value)}  width={117} paddingY={10} text="Войти" />
          <button className="account__reg">Регистрация</button>
        </div>
      </div>
    </div>
  )

}