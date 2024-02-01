import React, {useEffect} from 'react'

//import desti images
import paris from '../../assets/paris.jpg'
import dubai from '../../assets/dubai.jpg'
import london from '../../assets/london.jpg'
import maldi from '../../assets/maldi.jpg'

//import traveler images
import traveler1 from '../../assets/per1.jpg'
import traveler2 from '../../assets/per2.jpg'
import traveler3 from '../../assets/per33.jpg'
import traveler4 from '../../assets/per3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

//map
const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: 'Shivani Parasar',
    socialLink: '@sheeesh30'
  },
  {
    id: 2,
    destinationImage: dubai,
    travelerImage: traveler2,
    travelerName: 'Shivani Parasar',
    socialLink: '@sheeesh30'
  },
  {
    id: 3,
    destinationImage: london,
    travelerImage: traveler3,
    travelerName: 'Tridib Nandi',
    socialLink: '@trishhh'
  },
  {
    id: 4,
    destinationImage: maldi,
    travelerImage: traveler4,
    travelerName: 'Avinash Gupta',
    socialLink: '@nashpati'
  },
]

const Travellers = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='travelers container section'>
      <div className="sectionContainer">
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Top travelers of this month!
        </h2>

        <div className="travelersContainer grid">
          {/* single passenger card  */}
          
          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
              return(
                <div data-aos='fade-down' data-aos-duration='3500' key={id} className="singleTraveler">

                  <img src={destinationImage} className='destinationImage' />

                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerImage} className='travelerImage'/>
                    </div>

                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialLink}</p>
                    </div>
                  </div>

                </div>
              )
            })
          }

        </div>
      </div>

    </div>
  )
}

export default Travellers