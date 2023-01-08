import React from 'react'
import '../styles/dashboard.css'
import SingleCard from '../reusable/SingleCard'
import MileChart from '../Charts/MileChart'
import CarStatsChart from '../Charts/CarStatsChart'
import RecommendCarCard from '../components/UI/RecommendCarCard'
import recommendCarsData from '../assets/dummy-data/recommendCars'
   
   const energyobj ={
    title:'Energy',
    totalnumber:45,
    icon:'ri-flashlight-line',
   }
   const rangeobj ={
    title:'Range',
    totalnumber:'157k',
    icon:'ri-line-height',
   }
   const breakobj ={
    title:'Break fluid',
    totalnumber:9,
    icon:'ri-drop-fill',
   }
   const tireobj ={
    title:'Tire Wear',
    totalnumber:25,
    icon:'ri-creative-commons-zero-fill',
   }
    const Dashboard = () => {
      return (
        <div className="dashboard" >
          <div className="dashboard-wrapper">
            <div className="dashboard-cards">
             <SingleCard item={energyobj} />
             <SingleCard item={rangeobj} />
             <SingleCard item={breakobj} />
             <SingleCard item={tireobj} />
            </div>
            <div className="statics">
              <div className="stats">
                <h3 className="stats-title" >Miles Statistics</h3>
                <h5 className="sub-title" >Day</h5> <h5 className="sub-title" >Week</h5> <h5 className="sub-title" >Month</h5>
                <MileChart/>
              </div>
              <div className="stats">
                <h3 className="stats-title" >Car Statistics</h3>
                <h5 className="LEFT">20 February 2022</h5>
                <h5 className="sub-title-r" >Day</h5> <h5 className="sub-title-r" >Week</h5> <h5 className="sub-title-r" >Month</h5>
                <CarStatsChart/>
              </div> 
            </div>
            <div className="recommendcar-wrapper">
              {
                recommendCarsData.map((item)=> <RecommendCarCard item={item} key={item.id} />)
              }
            </div>
          </div>
        </div>
      )
    }
    
    export default Dashboard
    