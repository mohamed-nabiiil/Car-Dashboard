import React from "react";

const CarItem = (props) => {
  const { category, type, rentPrice, imgUrl, carName, groupSize } = props.item;
  return (
    <div className="car-item">
      <div className="car-item-top">
        <div className="car-item-tile">
          <h3>{carName}</h3>
          <span>
            <i class="ri-heart-line"></i>
          </span>
        </div>
        <p>{category}</p>
      </div>

      <div className="car-img">
        <img src={imgUrl} alt="" />
      </div>

      <div className="car-item-bottom">
        <div className="car-bottom-left">
          <p>
            <i class="ri-user-line"></i> {groupSize}
          </p>
          <p>
            <i class="ri-repeat-line"></i>
            {type}
          </p>
        </div>

        <p className="car-rent">${rentPrice}/d</p>
      </div>
    </div>
  );
};

export default CarItem;