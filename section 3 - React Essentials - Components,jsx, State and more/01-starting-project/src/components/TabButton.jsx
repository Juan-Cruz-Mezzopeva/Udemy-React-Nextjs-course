import React from 'react'

export default function TabButton({children, onSelect}) {
  
  function handleClick() {
    console.log('Tab button clicked');
  }
  
  return (
    <div>
      <li>
        <button onClick={onSelect}>
            {children}
        </button>
    </li>
    </div>
  )
}
