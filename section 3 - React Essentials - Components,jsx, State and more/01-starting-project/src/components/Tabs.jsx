import React from 'react'

export default function Tabs({children, buttons, ButtonConteiner = 'menu'}) {
  return (
    <>
        <ButtonConteiner>
         {buttons}
        </ButtonConteiner>
        {children}
    </>)
}
