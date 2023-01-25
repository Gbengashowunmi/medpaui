import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import "./itemCard.scss"
export default function ItemCard({images,productName}) {
  return (
    <div className='item_container'>
        <div className='image'>
          <Link to="/details">  <img src={images} alt="product" />
          </Link>
        </div>
        <div className='description'>

        <p className='item-name'>{productName}</p>
        <p className='ratings'><BsStarFill/> <BsStarFill/> <BsStarFill/> <BsStarHalf/> <BsStar/></p>
        <p className='price'>$689</p>
        </div>
        <div className='discount'>%565 off</div>
        <button className='add-to-cart'><h3>+</h3></button>
    </div>
  )
}
