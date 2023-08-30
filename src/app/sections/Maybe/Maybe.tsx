'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FunctionComponent } from "react";
import './Maybe.css'
import { useMediaQuery } from "react-responsive";

interface Props {
  images: {
    img: string | StaticImport;
    imgMin?: string | StaticImport;
    key: string;
    alt: string;
    href?: string;
    type?: number;
  }[]
}


export const Maybe: FunctionComponent<Props> = ({
  images
}) => {

  const is1050px = useMediaQuery({maxWidth: 1050})

  return (
    <section className="Maybe">
       <div className="container Maybe__container">
       <h2 className="Maybe__title section__title">ВОЗМОЖНО, ВАС ЗАИНТЕРЕСУЕТ</h2>
        <div className="Maybe__photos">
          <div className="Maybe__column Maybe__column_1">
          {images.map((el, index) =>  {
            if (index >= 2) {
              return
            }
            return (
                <a href={el.href} className={'Maybe__link Maybe__link_'+ el.key} key={'Maybe__link_'+ el.key} >
                  <Image 
                    className={"Maybe__img_"+el.key}
                    layout="responsive"
                    src={el.img}
                    alt={el.alt}
                    loading="lazy"
                    objectFit="contain"
                  />
                </a>
            )
          })}
          </div>
          <div className="Maybe__column Maybe__column_2">
          {images.map((el, index) =>  {
            if (index === 2) {
              return (
                  <a className={'Maybe__link Maybe__link_'+ el.key} key={'Maybe__link_'+ el.key} href={el.href}>
                    <Image 
                      className={"Maybe__img Maybe__img_"+el.key}
                      layout="responsive"
                      src={is1050px && el.imgMin ? el.imgMin : el.img}
                      alt={el.alt}
                      loading="lazy"
                      objectFit="contain"
                    />
                  </a>
              )
            }
          })}
          </div>
          <div className="Maybe__column Maybe__column_3">
          {images.map((el, index) =>  {
            if (index < 3) {
              return
            }
            return (
                <a className={'Maybe__link Maybe__link_'+ el.key} key={'Maybe__link_'+ el.key} href={el.href}>
                  <Image 
                    className={"Maybe__img_"+el.key}
                    layout="responsive"
                    src={el.img}
                    alt={el.alt}
                    loading="lazy"
                    objectFit="contain"
                  />
                </a>
            )
          })}
          </div>
        </div>
       </div>
    </section>
  )
}