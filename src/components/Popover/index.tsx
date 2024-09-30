import React, {HTMLAttributes, PropsWithChildren, useRef, useState} from "react";
import {createPortal} from "react-dom";
import { twMerge } from 'tailwind-merge';

type Placement = 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
type Props = {
  overlay: React.ReactNode
  placement?: Placement
} & Pick<HTMLAttributes<Element>,'className' | 'style'>

const Popover: React.FC<PropsWithChildren<Props>> = (props)=> {
  const {children, placement = 'bottom', overlay, className} = props
  const [visible, setVisible] = useState(false)
  const wrapper = useRef<HTMLSpanElement>(null)
  const [{left, right, top, bottom, width, height}, setRect] = useState<Partial<DOMRect>>({})
  const style = {
    top: {left: `${left}px`, top: `${top}px`, height: '0px', width: `${width}px`, justifyContent:'center', alignItems:'end'},
    left: {left: `${left}px`, top: `${top}px`, height: `${height}px`, width: '0px', justifyContent:'end', alignItems:'center'},
    right: {left: `${right}px`, top: `${top}px`, height: `${height}px`, width: '0px', justifyContent:'start', alignItems:'center'},
    bottom: {left: `${left}px`, top: `${bottom}px`, height: '0px', width: `${width}px`, justifyContent:'center', alignItems:'start'},
    topLeft:{left: `${left!-width!}px`, top: `${top}px`, height: '0px', width: `${width}px`, justifyContent:'center', alignItems:'end'},
    topRight:{left: `${left!+width!}px`, top: `${top}px`, height: '0px', width: `${width}px`, justifyContent:'center', alignItems:'end'},
    bottomLeft:{left: `${left!-width!}px`, top: `${bottom}px`, height: '0px', width: `${width}px`, justifyContent:'center', alignItems:'start'},
    bottomRight:{left: `${left!+width!}px`, top: `${bottom}px`, height: '0px', width: `${width}px`, justifyContent:'center', alignItems:'start'},
  }[placement]

  const show = () => {
    if (!wrapper.current) return
    const rect = wrapper.current.getBoundingClientRect()
    setRect(rect)
    setVisible(true)
  }

  const hide = () => {
    setVisible(false);
  }

  const onMouseEnter = () => {
    show()
  }

  const onMouseLeave = () => {
    hide()
  }

  return (
    <>
      <span ref={wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {children}
      </span>
      {createPortal(
        <div className={twMerge(
          "flex fixed z-[100] text-inherit",
          !visible && "hidden"
        )} style={{...props.style, ...style}}
        onMouseEnter={onMouseEnter}  // 把事件绑定在整个弹出框外层
        onMouseLeave={onMouseLeave}
        >
          <span className={twMerge('min-w-fit min-h-fit', className)}
          >{overlay}</span>
        </div>, document.body
      )}
    </>
  )
}

export default Popover;