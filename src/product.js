import React from 'react'
import './product.css'

function product({title,img,name,img2,name2,img3,name3,img4,name4}) {
  return (
    <div className='Product'>
    <h3 className='title'>{title}</h3>
        <div className='Product_one'>
        <div className='ok'>
            <img src={img} />
            <p className='name'>{name}</p>
        </div>
        <div>
            <img src={img2}/>
            <p className='name'>{name2}</p>
        </div>
        </div>
        <div className='product_two'>
        <div className='ok'>
            <img src={img3} />
            <p className='name'>{name3}</p>
        </div>
        <div>
            <img src={img4}/>
            <p className='name'>{name4}</p>
        </div>
        </div>
    </div>
  )
}

export default product