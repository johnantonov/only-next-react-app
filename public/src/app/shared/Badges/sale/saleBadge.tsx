'use client'
import './sale.css'
import { FunctionComponent } from 'react'

interface Props {
  text: string | number;
  className?: string;
}

export const SaleBadge: FunctionComponent<Props> = ({text, className}: Props) => {
  return (
    <div className={'saleBadge '+ className}>
      <span className={'saleBadge__text '}>
        {typeof text === 'string' ? text : `- ${text}%`}
      </span>
    </div>
  )
}