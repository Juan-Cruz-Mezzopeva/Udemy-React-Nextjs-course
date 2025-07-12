import React from 'react'

export default function TabButton({children, onSelect, isSelected}) {
  
  function handleClick() {
    console.log('Tab button clicked');
  }
  
  return (
    <div>
      <li>
        <button className={isSelected ? "active" : undefined} onClick={onSelect}>
            {children}
        </button>
    </li>
    </div>
  )
}
