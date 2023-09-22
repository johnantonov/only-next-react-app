import { ColorButton } from "@/app/shared/Button/ColorButton";
import { Logo } from "@/app/shared/Logo/Logo";
import { FunctionComponent } from "react";
import './MainNav.css'
import { BtnContact } from "@/app/shared/BtnContact/BtnContact";
import phone from '../../../../../public/img/buttons/phone.svg'
import { renderNavList } from "@/app/components/NavFeature/RenderMainNav/RenderNavList";

interface Props {
  container: string;
  list: { text: string; link: string; key: string;}[];
  LogoColors: string[]
  BtnInfo: {
    text?: string;
    width: number;
    paddingY: number;
    img?: string;
  }
}

export const MainNav: FunctionComponent<Props> = ({
  list, LogoColors, BtnInfo, container
}) => {
 
  return (

  <nav className={`${container} MainNav`} >
    <a href="/" className="MainNav__logo">
      <Logo 
        firstColor = {LogoColors[0]}
        secondColor = {LogoColors[1]}
      />
    </a>
      <ColorButton 
        text={BtnInfo.text}
        width={BtnInfo.width}
        paddingY={BtnInfo.paddingY}
      />
      <ul>{renderNavList(list) }</ul>
      <div className="MainNav__call">
        <a href="tel:74994446902" className="MainNav__tel">+7 499 444-69-02</a>
        <BtnContact 
          link="/"
          img={phone}
          alt=""
          text="Обратный звонок"
          color="#019CDD"
        />
      </div>

  </nav>

 )
}