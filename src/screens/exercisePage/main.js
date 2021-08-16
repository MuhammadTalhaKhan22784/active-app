//Builtin
import React from 'react'
import { useRef } from 'react'
import Nav from '../../assets/components/nav'

//components
import SelectComponent from '../../assets/components/selectComponent'
import UpdatesAndGuides from '../../assets/components/UpdatesAndGuides'

//components-data
import selectDataForHeaderMessage from '../../assets/componentsData/selectDataForHeaderMessage'

//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import videoThumbnail from '../../assets/images/group-6.png'
import playIcon from '../../assets/svgs/playIcon.svg'
import progressLogo from '../../assets/svgs/progress.svg'
import signalStream from '../../assets/svgs/signalStream.svg'

//css
import stylesSheet from './ep.module.css'

const CheckIcon = () => {
  return (
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
        alignSelf: 'flex-start',
      }}
    />
  )
}

const name = 'שלומי שושנה'
const id = 63485408
const date = new Date().toLocaleDateString()

const total = 20
const completed = 1

const Main = () => {
  const input1 = useRef(null)
  const input2 = useRef(null)

  const handleFooterFormSubmit = () => {
    console.log(input1.current.value)
    console.log(input2.current.value)
  }

  return (
    <div>
      <Nav/>
    <div className={stylesSheet.mainWrapper}>
      <div className={stylesSheet.rightSide}>
        <header>
          <div className={stylesSheet.messageAndSelectContainer}>
            <span className={stylesSheet.message}>
              <h1>
                תרגילים לחיזוק הנשימ
                <br />
                ושרירי עזר בבית החזה והסרעפת
              </h1>
              <p className={stylesSheet.nameIdDate}>
                {name}&emsp;/&emsp;{id}&emsp;/&emsp;{date}
              </p>
            </span>
            <SelectComponent {...selectDataForHeaderMessage} />
          </div>
        </header>

        <main>
          <div className={stylesSheet.statisticsSide}>
            <div
              className={`${stylesSheet.statisticsContainer} ${stylesSheet.backgroundWhite}`}
            >
              <div className={stylesSheet.progressInfo}>
                <span className={stylesSheet.img}>
                  <img src={progressLogo} alt='' />
                </span>
                <span className={stylesSheet.statisticsBreif}>
                  <h1 className={stylesSheet.exercisesCompleted}>
                    {total} / {completed}
                  </h1>
                  <p className={stylesSheet.disabled}>תרגילים שבועיים</p>
                </span>
              </div>
              <div className={stylesSheet.instructions}>
                <p className={stylesSheet.exerciseDuration}>
                  <small> משך התרגיל - 20 דקות</small>
                </p>
                <div>
                  <h2>תרגיל מספר 1 </h2>
                  <h2>נשימות בסיבוב הגוף</h2>
                </div>
                <p>
                  מפעיל ומחזק את הסרעפת, הבטן, הטחול, הלבלב, הלב והכבד. משחרר
                  רעלים מהריאות, משפר את העיכול ומנקה את הסינוסים
                </p>
              </div>
            </div>
            <div className={stylesSheet.sos}></div>
            <img
              src={signalStream}
              alt=''
              className={stylesSheet.signalStream}
            />
          </div>
          <div className={stylesSheet.videoAndDesc}>
            <header>
              <div className={stylesSheet.videoImage}>
                <CheckIcon />
                <img
                  src={videoThumbnail}
                  alt='Thumbnail'
                  className={stylesSheet.videoThumbnail}
                />
                <img
                  src={playIcon}
                  alt='Play Icon'
                  className={stylesSheet.playIcon}
                />
              </div>
            </header>
            <main>
              <div className={stylesSheet.videoDesc}>
                <strong>תאור התרגיל:</strong>
                <p>
                  בעמידה במקום, יש להתחיל לצעוד ולנסות להגיע עם הברכיים עד לגובה
                  של הליכה טבעית. קצב הפעילות יהיה קבוע, לא מהיר ולא איטי מידי,
                  במידה והקושי מתגבר, ניתן להאט את קצב ההליכה.
                </p>
                <strong>ביצוע:</strong>
                <p>
                  כל סט יבוצע במשך זמן מוגדר בלבד, במידה וקיים קושי ניתן להקטין
                  את הזמן.
                </p>
                <strong>אופן נשימה:</strong>
                <p>לשאוף אוויר בתחילת הפעילות, לנסות להגיע לנפח ריאות מלא.</p>
                <p>
                  יש לנשוף את האוויר החוצה לאורך 5 צעדים, ומיד לאחר מכן לשאוף
                  אוויר מחדש ולהמשיך שוב.
                </p>
                <p>
                  לא לעצור את הפעילות בשביל לשאוף אוויר חדש, אלא תוך כדי פעילות
                  –
                </p>
                <strong>אופן מדידה:</strong>
                <p>
                  יש לשבת מיד לאחר סיום הפעילות ולהכניס את האצבע למכשיר כבוי כך
                  שהאצבע נכנסת כמעט עד הסוף, ולאחר מכן להדליק את המכשיר.
                </p>
                <p>
                  בשלב זה המכשיר יציג תוצאה ראשונית, יש להמתין פרק זמן קצר
                  יחסית, עד קבלת תוצאת מדידה סופית.
                </p>
                <p>זאת אומרת, לבצע רישום ברגע שהמספרים מתייצבים ואין שינוי.</p>
                <p>
                  <strong>התאוששות: </strong>לאחר כל משך זמן פעילות, יש להמתין
                  דקה וחצי עד 2 דקות - או- להמתין עד שהדופק, הסיטורציה והנשימה
                  מסתדרים לגמרי, ורק אז להתחיל שוב.
                </p>
                <p>
                  **במידה ומתקבלת בכל שלב של הפעילות תוצאה סופית של סיטורציה
                  נמוכה מ90% - יש להפסיק את הפעילות, וליידע אותי.
                </p>
              </div>
            </main>
            <footer>
              <p>
                <strong>מדדים לאחר סיום תרגיל מספר 5</strong>
              </p>
              <form
                action=''
                onSubmit={(e) => {
                  e.preventDefault()
                  handleFooterFormSubmit()
                }}
              >
                <input
                  type='text'
                  className='normal'
                  placeholder='הכנס נתון'
                  ref={input1}
                />
                <input
                  type='text'
                  className='normal'
                  placeholder='הכנס נתון'
                  ref={input2}
                />
                <button
                  type='submit'
                  className={stylesSheet.gradient}
                  onClick={() => {}}
                >
                  סיימתי, בוא נמשיך
                </button>
              </form>
            </footer>
          </div>
        </main>
      </div>
      <div className={stylesSheet.leftSide}>
        <UpdatesAndGuides />
      </div>
    </div>
    </div>

  )
}

export default Main
