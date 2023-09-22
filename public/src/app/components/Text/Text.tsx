
interface TextProps {
  As?: 'span' | 'h2' | 'h1' | 'h3' | 'h4' | 'h5' | 'p' | 'div';  
  children?: React.ReactNode;
  size?: number;
  className?: string;
  color?: 'black' |  'white'
}

export const Text = ({ 
  As = 'span', 
  children, 
  className,
  color,
  size
}: TextProps) => {
  return (
    <As className={className} style={{fontSize: size, color: color, }}>
      {children}
    </As>
  )
}