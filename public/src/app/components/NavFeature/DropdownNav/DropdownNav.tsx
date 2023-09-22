import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FunctionComponent } from "react";
import './DropdownNav.css'
import empty from '../../../../../public/img/SecondNav/empty.svg'

interface ListItem {
  img?: StaticImport | string;
  badge?: FunctionComponent;
  text: string;
  class: string;
  link: string
}

interface Props {
  list: ListItem[]
  classNav: string;
  
}

export const DropdownNav: FunctionComponent<Props> = ({list, classNav}) => {
  function renderDropList() {
     return list.map((el) => {
        return <li key={`dropdownNav__el_${el.class}`} className={`${el.class}`}>
          <a href={el.link} className=" dropdownNav__link">
          <div className="dropdownNav__imgWrapper">
            <Image src={el.img ? el.img : empty} alt="" width={30} height={30} className="dropdownNav__img"/>
          </div>
          <span className="dropdownNav__text">{el.text}</span>
          {el.badge ? <el.badge /> : null}
          </a>
        </li>
    })
  }

 return (
  <ul className={`${classNav}`}>
    {renderDropList()}
  </ul>
 )
}