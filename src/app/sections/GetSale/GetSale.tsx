import './GetSale.css'

export const GetSale = () => {
  return (
    <div className='GetSale__divider'>
      <section className='container'>
        <div className='GetSale'>
          <div>
            <h2 className="GetSale__title section__title">СКИДКА 3% ЗА ПОДПИСКУ С ПЕРВОЙ ПОКУПКИ</h2>
            <h3 className='GetSale__subtitle'>
              Новинки, акции, специальные скидки для подписчиков
            </h3>
          </div>
          <form className='GetSale__form' action="">
            <input className='GetSale__input' type='email' placeholder='Введите ваш e-mail для подписки'/>
            <input className='ColorButton GetSale__ColorButton' type="submit" value={'ПОДПИСАТЬСЯ'} />
          </form>
        </div>
      </section>
    </div>
  )
}