import Image from "next/image";
import { FunctionComponent } from "react";
import './BtnContact.css'

interface Props {
  link: string;
  img: string;
  text: string;
  alt: string;
  color: string;
}

export const BtnContact: FunctionComponent<Props> = ({
  link, img, text, alt, color
}) => {
  return (
    <button className="BtnContact" style={{color: color}}>
      <Image 
        src={img}
        alt={alt}
      />
      <span>{text}</span>
    </button>
  )
}