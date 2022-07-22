import React from 'react';
import './featuredProperties.css'

const FeaturedProperties = () => {
	return (
		<div className="fp">
			<div className="fpItem">
				<img
          className="fpImg"
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/101437097.jpg?k=0589e3d06ebed84c353525b6b4b34e69fe7738c0c12c4843bbde18479ce23274&amp;o=&amp;hp=1"
				/>
				<span className="fpName">Apartment des olnyesh</span>
				<span className="fpCity">Madrid</span>
				<span className="fpPrice">Starting from $1200</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
      <div className="fpItem">
				<img
          className="fpImg"
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/101437097.jpg?k=0589e3d06ebed84c353525b6b4b34e69fe7738c0c12c4843bbde18479ce23274&amp;o=&amp;hp=1"
				/>
				<span className="fpName">Apartment upon thames</span>
				<span className="fpCity">London</span>
				<span className="fpPrice">Starting from $1500</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
      <div className="fpItem">
				<img
          className="fpImg"
					src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/101437097.jpg?k=0589e3d06ebed84c353525b6b4b34e69fe7738c0c12c4843bbde18479ce23274&amp;o=&amp;hp=1"
				/>
				<span className="fpName">Apartment dijon</span>
				<span className="fpCity">Paris</span>
				<span className="fpPrice">Starting from $1300</span>
				<div className="fpRating">
					<button>8.9</button>
					<span>Excellent</span>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProperties;
