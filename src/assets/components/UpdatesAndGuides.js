import React from 'react'

import updatesList from '../componentsData/updatesList'
import guidesList from '../componentsData/guidesList'

import styles from '../css/updatesAndGuides.module.css'

const Updates = (
  <>
    <p className={styles.rowHeader}>עדכונים</p>

    {updatesList.map((update) => {
      return (
        <div className={`${styles.update} ${styles.backgroundWhite}`}>
          <img src={update.imgSrc} alt='' />
          <p className={styles.updatesAndGuideDate}>
            <small>{update.date}</small>
          </p>
          <p className={`${styles.updateTitle} ${styles.desc}`}>
            {update.title}
          </p>
          <a href='' className={styles.metaInfo}>
            קראו עוד
          </a>
        </div>
      )
    })}
  </>
)

const Guides = (
  <>
    <p class={styles.rowHeader}>מדריכים</p>
    {guidesList.map((guide) => {
      return (
        <div className={`${styles.guide} ${styles.backgroundWhite}`}>
          <img src={guide.imgSrc} alt='' />
          <p className={styles.updatesAndGuideDate}>
            <small>{guide.date}</small>
          </p>
          <p className={`${styles.guideTitle} ${styles.desc}`}>{guide.title}</p>
          <a href='' className={styles.metaInfo}>
            קראו עוד
          </a>
        </div>
      )
    })}
  </>
)

const UpdatesAndGuides = () => {
  return (
    <div className={styles.updatesAndGuides}>
      <div className={styles.updates}>{Updates}</div>
      <div className={styles.guides}>{Guides}</div>
    </div>
  )
}

export default UpdatesAndGuides
