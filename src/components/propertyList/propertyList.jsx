import React from 'react'
import './propertyList.css'

const PropertyList = () => {
    return (
        <div className="pList">
          <div className="pListItem">
            <img
              className="pListImg"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/135693840.jpg?k=27a98a900b3fe2fb691b061f3b4ddeb3599fd617d07f7cb83dc9b0dbfe7dba32&o=&hp=1"
            />
            <div className="pListTitles">
              <h1>Hotels</h1>
              <h2>200 hotels</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              className="pListImg"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/135697091.jpg?k=92496a12876a66d58c1da5e660eeabec41a498aeb2ee435fb99f5f71beb89996&o=&hp=1"
            />
            <div className="pListTitles">
              <h1>Apartments</h1>
              <h2>200 apartments</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              className="pListImg"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/135696992.jpg?k=2e22775aa4c09dbbea05902a46f27dd4a2d493bebf074f8ac151b03560f4c291&o=&hp=1"
            />
            <div className="pListTitles">
              <h1>Resorts</h1>
              <h2>200 resorts</h2>
            </div>
          </div>
          <div className="pListItem">
            <img
              className="pListImg"
              src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/76478727.jpg?k=c1f471ac3c9fa22644c5ddd281ff332f8d1d27670d5d5b8e1f72c5098d9ca1b4&o=&hp=1"
            />
            <div className="pListTitles">
              <h1>Cabins</h1>
              <h2>200 cabins</h2>
            </div>
          </div>
        </div>
    )
}

export default PropertyList
