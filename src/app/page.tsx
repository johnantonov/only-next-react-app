import Image from "next/image"
import { Header } from "./sections/Header/Header"
import heroImg from '../../public/hero/matte2025b 1.jpg'
import { SliderHero } from "./components/SliderHero/SliderHero"
import styles from './page.module.css';
import { Hits } from "./sections/Hits/Hits";
import { Maybe } from "./sections/Maybe/Maybe";
import MaybeImage1 from './../../public/img/Maybe/1.jpg'
import MaybeImage2 from './../../public/img/Maybe/2.jpg'
import MaybeImage3 from './../../public/img/Maybe/3.jpg'
import MaybeImage3for500px from '../../public/img/Maybe/3for500px.jpg'
import MaybeImage4 from './../../public/img/Maybe/4.jpg'
import MaybeImage5 from './../../public/img/Maybe/5.jpg'
import { Reviews } from "./sections/Reviews/Reviews";
import { GetSale } from "./sections/GetSale/GetSale";



const MaybeImages = [
  {href: '/', img: MaybeImage1, key: '1', alt: 'Лечебный мат Detensor 18%', type: 1},
  {href: '/', img: MaybeImage2, key: '2', alt: 'Лечебный матрас Fibrotor Classic', type: 1},
  {href: '/', img: MaybeImage3, imgMin: MaybeImage3for500px, key: '3', alt: 'Подспинная подушка Detensor', type: 2},
  {href: '/', img: MaybeImage4, key: '4', alt: 'Лечебный матрас Fibrotor Classic', type: 1},
  {href: '/', img: MaybeImage5, key: '5', alt: 'Анатомическая ночная подушка', type: 1},
]


export default function Home() {
  return (
    <main>
      <section className={' container'}>
        <div className={styles.hero}>
          <SliderHero />
        </div>
      </section>
      <Hits/>
      <Maybe images={MaybeImages}/>
      <Reviews  />
      <GetSale />
    </main>
  )
}
