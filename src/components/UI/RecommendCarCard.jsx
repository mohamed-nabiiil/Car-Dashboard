import React from 'react'
const RecommendCarCard = (props) => {
    const{carName,retweet,imgUrl,rentPrice,percentage}=props.item
  return (
    <div className="reommendcar-card">
                <div className="recommendcar-top">
                  <h5><span><i class="ri-refresh-line"></i></span>{percentage}% Recommend</h5>
                </div>
                <div className="recommedcar-img">
                  <img src={imgUrl} alt='' />
                </div>
                <div className="recommendcar-bottom">
                  <h4>{carName}</h4>
                  <div className="recommedcar-other">
                  <div className="recommend-icon" >
                    <p><i class="ri-repeat-line"></i>{retweet}K</p>
                    <p><i class="ri-settings-2-line"></i></p>
                    <p><i class="ri-timer-flash-line"></i></p>

                  </div>
                  <span>
                    ${rentPrice}/h
                  </span>
                  </div>
                </div>
              </div>
  )
}

export default RecommendCarCard
