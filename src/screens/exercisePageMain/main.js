//Builtin
import React from 'react'
import Nav from '../../assets/components/nav'

//components
import SelectComponent from '../../assets/components/selectComponent'

//components-data
import selectDataForHeaderMessage from '../../assets/componentsData/selectDataForHeaderMessage'
import exercisesVideosArray from '../../assets/componentsData/exercisesVideosArray'

//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation, faCheck } from '@fortawesome/free-solid-svg-icons'
import playIcon from '../../assets/svgs/playIcon.svg'
import progressLogo from '../../assets/svgs/progress.svg'
import signalStream from '../../assets/svgs/signalStream.svg'

//css
import stylesSheet from './epm.module.css'

const exclamationIcon = (
  <FontAwesomeIcon
    icon={faExclamation}
    style={{
      borderRadius: '50%',
      border: '2px solid #fff',
      backgroundColor: '#fd7172',
      position: 'relative',
      fontSize: '30px',
      padding: '3px',
      width: '35px',
      height: '35px',
      float: 'right',
      color: '#fff',
      margin: '-18px',
      right: '5px',
    }}
  />
)

const checkIcon = (
  <FontAwesomeIcon
    icon={faCheck}
    style={{
      borderRadius: '50%',
      border: '2px solid #fff',
      backgroundColor: '#21cec1',
      position: 'relative',
      fontSize: '30px',
      padding: '3px',
      width: '35px',
      height: '35px',
      float: 'right',
      color: '#fff',
      margin: '-18px',
      right: '5px',
    }}
  />
)

const name = 'שלומי שושנה'
const id = 63485408
const date = new Date().toLocaleDateString()

const total = 20
const completed = 1

const main = () => {
  return (
    <div>
      <Nav />
    <>
      <div className={stylesSheet.mainWrapper}>
        <header>
          <div className={stylesSheet.messageAndSelectContainer}>
            <span className={stylesSheet.message}>
              <h1>
                תרגילים לחיזוק הנשימ
                <br />
                ושרירי עזר בבית החזה והסרעפת
              </h1>
              <p className=''>
                {name}&emsp;/&emsp;{id}&emsp;/&emsp;{date}
              </p>
            </span>
            <SelectComponent {...selectDataForHeaderMessage} />
          </div>
        </header>

        <main>
          <div className={stylesSheet.rightSide}>
            <div
              className={`${stylesSheet.statisticsContainer} ${stylesSheet.backgroundWhite}`}
            >
              <div className={stylesSheet.progressInfo}>
                <span className={stylesSheet.img}>
                  <img src={progressLogo} alt='' />
                </span>
                <span className={stylesSheet.statisticsBreif}>
                  <h1 className={stylesSheet.excercisesCompleted}>
                    {total} / {completed}
                  </h1>
                  <p className={stylesSheet.disabled}>תרגילים שבועיים</p>
                </span>
              </div>
              <div className={stylesSheet.instructions}>
                <p className={stylesSheet.rowHeader}>
                  במידה ובכל שלב של הפעילות מופיעה הרגשה של אי
                  נוחות/סחרחורת/חולשה או אפילו כאב, יש להפסיק את הפעילות ולשקול
                  לפנות לייעוץ רפואי
                </p>
                <br />
                <p className={stylesSheet.rowHeader}>
                  יש לקרוא את ההוראות בפירוט לפני ביצוע כל תרגיל
                </p>
                <br />
                <p>
                  1. את התרגילים ניתן ורצוי לבצע על בסיס יומי, מתי שנח לכם, בכל
                  שעה של היום.
                </p>
                <hr />
                <p>
                  2. תכנית זו היא לא תחליף לתכנית השבועית , אלא בנוסף.(ניתן לבצע
                  את התכנית הזו ממש לפני או אחרי לתכנית השבועית, וניתן לעשות
                  אותה בהפרש של כמה שעות - מתי שאתם מרגישים הכי נח).
                </p>
                <hr />
                <p>
                  3. רצוי לא לבצע את כל התרגילים בתכנית זו, אלא - מומלץ לבחור 2
                  או 3 תרגילים בכל פעם ולגוון.
                </p>
              </div>
            </div>
            <div className={stylesSheet.sos}>
              <img src={signalStream} className={stylesSheet.signalStream} />
            </div>
          </div>

          <div className={stylesSheet.leftSide}>
            {exercisesVideosArray.map((exercise) => {
              return (
                <div className={stylesSheet.video}>
                  <div className={stylesSheet.videoImage}>
                    {exercise.isCompleted
                      ? checkIcon
                      : exercise.isFailed
                      ? exclamationIcon
                      : ''}
                    <img
                      src={exercise.img}
                      alt='Thumbnail'
                      className={stylesSheet.videoThumbnail}
                    />
                    <img
                      src={playIcon}
                      alt=''
                      className={stylesSheet.playIcon}
                    />
                  </div>
                  <div className={stylesSheet.videoData}>
                    <p className={stylesSheet.exerciseNumber}>
                      תרגיל מספר {exercise.number}
                    </p>
                    <p className={stylesSheet.exerciseTitle}>
                      <strong>נשימות בסיבוב הגוף</strong>
                    </p>
                    <p className={stylesSheet.exerciseDescription}>
                      {exercise.desc}
                    </p>
                    <p className={stylesSheet.exerciseDuration}>
                      <small>משך התרגיל - {exercise.duration}</small>
                    </p>
                    <button
                      className={
                        exercise.isCompleted
                          ? stylesSheet.normal
                          : exercise.isFailed
                          ? stylesSheet.reddish
                          : stylesSheet.gradient
                      }
                    >
                      {exercise.isCompleted
                        ? 'חזור על התרגיל'
                        : exercise.isFailed
                        ? 'יש לחזור על התרגיל'
                        : 'התחל תרגיל'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </main>
      </div>
      
    </>
    </div>

  )
}

export default main
