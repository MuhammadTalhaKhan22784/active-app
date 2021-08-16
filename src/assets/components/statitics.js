import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import progressLogo from '../svgs/progress.svg'
import weeklyExercises from '../componentsData/weeklyExercises'

// import '../css/statistics.css'

const checkIconStyle = {
  float: 'left',
  borderRadius: '50%',
  border: '2px solid #fff',
  backgroundColor: '#21cec1',
  position: 'relative',
  fontSize: '21px',
  height: '20px',
  width: '20px',
  padding: '3px',
  color: '#fff',
}
const checkIcon = <FontAwesomeIcon icon={faCheck} style={checkIconStyle} />

const completedExercises = 1
const totalExercises = 3

function Statitics() {
  return (
    <div className='statisticsContainer bground-white'>
      <p className='statistics-header'>סטיסטיקות</p>
      <div className='statistics'>
        <div className='progress-info'>
          <span className='img'>
            <img src={progressLogo} alt='' />
          </span>
          <span className='statistics-breif'>
            <p className='disabled'>השבוע ביצעת</p>
            <h1 className='excercises-completed'>
              {totalExercises} / {completedExercises}
            </h1>
            <p className='disabled'>תרגילים שבועיים</p>
          </span>
        </div>

        <div className='exercises-names'>
          {weeklyExercises.map((exercise) => {
            return (
              <p
                className={exercise.isCompleted ? 'completed' : 'not-completed'}
              >
                {exercise.name}
                {exercise.isCompleted ? checkIcon : ''}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Statitics
