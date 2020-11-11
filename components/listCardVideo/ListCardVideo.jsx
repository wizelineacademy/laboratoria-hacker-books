import React, { useState, useEffect } from 'react'

// Components
import CardVideo from '../cardVideo/cardVideo'
import ArrowPrevSVG from '../svg/ArrowPrevSVG'
import ArrowNextSVG from '../svg/ArrowNextSVG'

// Styeles
import styles from '../../styles/Home.module.css'

const ListCardVideo = ({ cards }) => {

  return (
    <div className={`${styles.containerCard} bg-gray-200`}>
      <div className="z-10">
      </div>
      {cards.map((card) => {
        return (
          <div style={{ background: "white" }} key={card.alt} className="mx-2">
            <CardVideo card={card} />
          </div>
        )
      })}
    </div>
  )
}

export default ListCardVideo
