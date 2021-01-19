import React, { useMemo, useState } from 'react'
import styled from 'styled-components';
import icons from 'assets/icons';

const colog = (...args) => {
  if (process && process.env && process.env.NODE_ENV === 'development') {
    console.warn(...args)
  }
}

const toCamelCase = (str) => {
  return str.replace(/([-_][a-z0-9])/ig, ($1) => {
    return $1.toUpperCase()
  }).replace(/-/ig, '')
}

type Size = 'custom' | 'custom-size' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
export interface IconProps {
    className?: string;
    name: keyof typeof icons;
    content?: string | Array<any>;
    size?: Size;
    customClasses?: string | Array<any> | object;
    src?: string;
    title?: string;
    use?: string;
    [x: string]: any;
}

const Icon = (props: IconProps) => {

  const {
    className,
    name,
    content,
    customClasses,
    size,
    src,
    title,
    use,
    ...attributes
  } = props

  const [change, setChange] = useState(0)

  useMemo(() => setChange(change + 1), [name, JSON.stringify[content as string]])

  const iconName = useMemo(()=>{
    const iconNameIsKebabCase = name && name.includes('-')
    return iconNameIsKebabCase ? toCamelCase(name) : name
  }, [change])

  const titleCode = title ? `<title>${title}</title>` : ''

  const code = useMemo(() => {
    if (content) {
      return content
    } else if (name && icons) {
      return icons[iconName] ? icons[iconName] :
        colog('Not existing icon: '+ iconName + ' in icons object')
    }
  }, [change])

  const iconCode = useMemo(()=>{
    return Array.isArray(code) ? code[1] || code[0] : code
  }, [change])

  const scale = (()=>{
    return Array.isArray(code) && code.length > 1 ? code[0] : '64 64'
  })()

  const viewBox = (()=>{
    return attributes.viewBox || `0 0 ${scale}`
  })()

  const computedSize = (()=>{
    const addCustom = !size && (attributes.width || attributes.height)
    return size === 'custom' || addCustom ? 'custom-size' : size
  })()

  return (
    <React.Fragment>
      { !src && !use &&
        <Svg
          {...attributes}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          className={className}
          role="img"
          size={computedSize}
          dangerouslySetInnerHTML={{__html: titleCode + iconCode}}
        />
      }
      {/* { src && !use &&
        <Img
          {...attributes}
          className={className}
          src={src}
          role="img"
          size={computedSize}
        />
      } */}
      { !src && use &&
        <Svg
          {...attributes}
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          role="img"
          size={computedSize}
        >
          <use href={use}></use>
        </Svg>
      }
    </React.Fragment>
  )
}

function getSize(size: IconProps['size']) {
    const sizes = {
        "sm": '0.875',
        "lg": '1.25rem',
        "xl": '1.5rem',
        "2xl": '2rem',
        "3xl": '3rem',
        "4xl": '4rem',
        "5xl": '5rem',
        "6xl": '6rem',
        "7xl": '7rem',
        "8xl": '8rem',
        "9xl": '9rem',
    }

    return sizes[size] || '1rem'
}

const Svg = styled.svg<{ size: Size }>`
display: inline-block;
color: inherit;
text-align: center;
fill: currentColor;
width: ${props => getSize(props.size)};
font-size: ${props => getSize(props.size)};
height: ${props => getSize(props.size)};
`

const Img = styled(Svg)``;

export default Icon