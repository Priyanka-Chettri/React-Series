import React from 'react'

const BgButton = ({colourName,onClick}) => {
  return (
    <div className='border min-w-[150px] max-w-max rounded-md flex-none text-center px-2 py-2'
     onClick={onClick} 
     style={{ backgroundColor: colourName }}>{colourName}</div>
  )
}

export default BgButton