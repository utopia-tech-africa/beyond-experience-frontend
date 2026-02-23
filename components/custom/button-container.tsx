import React from 'react'

type ButtonContainerProps = React.PropsWithChildren<{
  className?: string
  style?: React.CSSProperties
  as?: React.ElementType
  onClick?: React.MouseEventHandler
}>

export default function ButtonContainer({
  children,
  className = '',
  style,
  as: Component = 'div' as React.ElementType,
  onClick,
}: ButtonContainerProps) {
  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '10px 14px',
    borderRadius: 8,
    background: 'transparent',
    border: 'none',
    cursor: onClick ? 'pointer' : 'default',
    ...style,
  }

  
  // <ButtonContainer as="button" onClick={() => {}}> <img src="/Button container.png"/> Click me </ButtonContainer>

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <Component className={className} style={baseStyle} onClick={onClick}>
      {children}
    </Component>
  )
}
