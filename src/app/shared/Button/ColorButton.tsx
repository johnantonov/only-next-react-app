import { FunctionComponent, MouseEventHandler, TouchEventHandler } from "react";
import './ColorButton.css'
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  img?: string | StaticImport;
  text?: string;
  width: number;
  paddingY: number;
  id?: string; 
  handler?: Function;
  className?: string;
}

export const ColorButton: FunctionComponent<Props> = ({
  img, 
  text,
  width,
  paddingY,
  id,
  handler, 
  className
}) => {
  return (
    <div className={"ColorButtonWrapper " + id+"Wrapper"} style={{ width: `${width}px` }}>
      <button  onClick={handler && (() => handler())} id={id} style={{padding: `${paddingY}px 0`}} className={"ColorButton " + className}>
        {
          img !== undefined && <Image 
            src={img}
            alt=''
            className="ColorButton__img"
           
          />
        }
        <span>{text}</span>
      </button>
    </div>
  )
}