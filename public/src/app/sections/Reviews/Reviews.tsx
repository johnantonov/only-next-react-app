'use client'
import { useEffect, useState } from 'react'
import './Reviews.css'
import Image from 'next/image';

export const Reviews = () => {
  const [reviewsData, setReviewsData] = useState<any[]>([]);

  useEffect (() => {
    fetch('data/catalogue/reviews.json').then(res => res.json())
    .then(res => setReviewsData(res))
    .catch(error => console.error('Ошибка загрузки отзывов'))
  }, [])

  

  return (
    <section className='reviews'>
      <div className="container">
        <h2 className='reviews__title section__title'>
          ОТЗЫВЫ НАШИХ КЛИЕНТОВ
        </h2>
        <ul className='reviews__list'>
          {reviewsData.map((review, index) => {
            return (
              <li key={index} className='review'>
                <div className='review__header'>
                  <Image className='review__avatar' src={review.avatar ? review.avatar : '/img/reviews/noneAva.svg'} width={40} height={40} alt='Фото покупателя'/>
                  {!review.avatar ? <span className='review__img_name'>{review.name[0]}{review.surname[0]}</span> : null}
                  <div className='review__person'>
                    <p className='review__name'>{review.name} {review.surname}</p>
                    <p className='review__date'>{review.date}</p>
                  </div>
                  <div className="review__buyIn">
                    <p className="buyIn__text">КУПЛЕНО НА</p>
                    {review.buyIn === 'ozon' || review.buyIn === 'wb' ? 
                    <p className={review.buyIn === 'ozon' ? "buyIn_ozon" : "buyIn_wb"}> 
                      {review.buyIn === 'ozon' ? "OZON" : "WILDBERRIES"}
                    </p> :
                    <Image className="buyIn__img" 
                      src='/img/reviews/HS.svg'
                      alt='куплено на хелфшопер'
                      width={115}
                      height={27}
                    />}
                  </div>
                </div>
                <div className='review__body'>
                  <p className='review__text'>
                    {(() => {
                      return review.text.slice(0, 160) + '';
                    })()}
                  </p>
                  <a href={"/reviews/" + review.index} className='review__link'>Читать полностью</a>
                </div>
                <div className='review__photos'>
                  {review.imgs[0] ? 
                    <Image 
                      src={review.imgs[0]}
                      alt=''
                      width={100}
                      height={100}
                    />  : null
                  } 
                  {review.imgs[1] ? 
                    <Image 
                      src={review.imgs[1]}
                      alt=''
                      width={100}
                      height={100}
                    />  : null
                  } 
                  {review.imgs.length === 3 ?
                    <Image 
                      src={review.imgs[2]}
                      alt=''
                      width={100}
                      height={100}
                    />  : review.imgs.length > 3 ?
                    <div className='review__photo_empty'>
                      <a href={"/reviews/" + review.index} className='review__link'>+ {review.imgs.length-2} фото</a>
                    </div> : null
                  }
                </div>
              </li>
            )
          })}
        </ul>
        <div>
          <a href="" className='review__ColorButton ColorButton'>Показать все отзывы</a>
        </div>
      </div>
    </section>
  )
}