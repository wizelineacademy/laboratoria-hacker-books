import React from 'react'

// Components
import ScoreStar from '../svg/scoreStar'
import BtnPlaySVG from '../svg/btnPlaySVG'

// Styles
//import styles from '../cardVideo/cardVideo.module.css'

const CardVideo = ({ card }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg w-3-5">
      {/*  <img className="w-full" className={styles.sizeImg} src="/img/js-1.png" alt="Video course" /> */}
      <div style={{ display: 'flex', justifyContent: "center", padding: '4rem' }}>
        <BtnPlaySVG />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{card.title}</h2>
      </div>
      <div className="mx-6 mt-2 mb-2 rounded-full bg-gray-200">
        <span className="inline-block text-sm font-semibold text-gray-700 mr-2"> <ScoreStar /> </span>
        <span className="inline-block text-sm font-semibold text-gray-700 mr-2"> <ScoreStar /> </span>
        <span className="inline-block text-sm font-semibold text-gray-700 mr-2"> <ScoreStar /> </span>
      </div>
    </div>
  )
}

export default CardVideo

/* <VideoSVG /> */
/* <div className={styles.card}>
     <h3>{card.title} &rarr;</h3>
     <p>Find in-depth information about Next.js features and API.</p>
 </div> */