import React from 'react'
import styles from '../css/selectComponent.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
const downArrow = (
  <FontAwesomeIcon icon={faChevronDown} style={{ float: 'left' }} />
)
const leftArrow = (
  <FontAwesomeIcon icon={faChevronLeft} style={{ float: 'left' }} />
)
const upArrow = <FontAwesomeIcon icon={faChevronUp} style={{ float: 'left' }} />

const SelectComponent = (selectData) => {
  const { classname, options, selectOption } = selectData
  const [isOptionsVisible, setIsOptionsVisible] = React.useState(false)

  return (
    <div>
      <div
        className={classname + ` ${styles.select}`}
        onClick={() => setIsOptionsVisible(!isOptionsVisible)}
      >
        {selectOption}
        <button className={styles.selectUpDownButton}>
          {isOptionsVisible ? upArrow : downArrow}
        </button>
      </div>
      {isOptionsVisible ? (
        <div className={styles.options}>
          {options.map((option) => {
            return (
              <div className={styles.option}>
                {option}
                {leftArrow}
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default SelectComponent
