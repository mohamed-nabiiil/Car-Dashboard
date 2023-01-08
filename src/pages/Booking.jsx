import React from 'react'
import "../styles/booking.css";

import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from '../components/UI/CarItem';

const Booking = () => {
  return (
    <div className="bookings">
      <div className="booking-wrapper">
        <h2 className="booking-title">Booking</h2>

        <div className="filter-widget-wrapper">
          <div className="filter-widget-01">
            <select>
              <option value="New">New</option>
              <option value="Popular">Popular</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="filter-widget-01">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">Bmw</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        
        </div>

        <div className="booking-car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Booking
