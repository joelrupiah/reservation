import React from 'react'
import './featured.css'

const Featured = () => {
    return (
        <div>
          <div className="featured">
            <div className="featuredItem">
              <img
                className="featuredImage"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/326301922.jpg?k=71aa85544a46693b3dca9ebe115a8db477a1373443003c4496437bfe284b9b4d&o=&hp=1"
              />
              <div className="featuredTitles">
                <h1>Nairobi</h1>
                <h2>100 properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                className="featuredImage"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/326301856.jpg?k=0086bae7ce6effc5e9d9c46983a77fb3fcd95aecd96e7619ff379a1aea57fd3d&o=&hp=1"
              />
              <div className="featuredTitles">
                <h1>Mombasa</h1>
                <h2>80 properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                className="featuredImage"
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/230067761.jpg?k=4e1efaffbe05f8914a5cc362c3886243621555310b87b4cc93a5476631f3386b&o=&hp=1"
              />
              <div className="featuredTitles">
                <h1>Kisumu</h1>
                <h2>50 properties</h2>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Featured
