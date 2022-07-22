import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img 
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/158126518.jpg?k=971f7ce9d58a704d3b5012c34ad77e2bdc9e46eefd9e5aa05fe01e2aaa31016d&o=&hp=1" 
            className='siImg'
        />
        <div className="siDesc">
            <h1 className='siTitle'>Tower Street Apartments</h1>
            <span className='siDistance'>500m from cbd</span>
            <span className='siTaxiOp'>Free airport taxi ride</span>
            <span className='siSubTitle'>Studio Apartment with Air Conditioning</span>
            <span className='siFeatures'>Entire studio 1 bedroom 1 bathroom</span>
            <span className='siCancelOp'>Free Cancellation</span>
            <span className='siCancelOpSubtitle'>You can cancel later</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$1234</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className='siCheckButton'>See Availability</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem