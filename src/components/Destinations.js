import React from 'react'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available in 46 countries!</h3>
      <div className='grid'>
        <div>
          <img src={image1} alt='destination-1' />
          <h3>Fly to Mumbai</h3>
          <p>
          Visit Gateway of India, Day out at Marine Drive, Taj Mahal palace, pray at Haji Ali Dargah, 
          Marvel at the Chhatrapati Shivaji Maharaj Terminus, picnic at Juhu Beach, Elephanta cave tour, 
          Rides at Essel world, Siddhivinayak temple, Drive on Bandra- Worli sea link, Mumbai Film City,
           Dharavi Slum tour, Chowpatty Beach.
          </p>
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Experience Dubai</h3>
          <p>
          visits the Souqs, the Old Gold Souq, Spice Souq, Old Bur Dubai Souq, Fruit and Vegetable
           markets, and Fish market, because these souqs are unique and special. visit the malls, cinemas,
           and parks such as City Centre, Mercato Mall, Grand Cineplex Cinema, Safa and Alkhoar Parks.
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>Savour santorini Greece</h3>
          <p>
          Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, 
          forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, 
          cling to cliffs above an underwater caldera (crater).They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
