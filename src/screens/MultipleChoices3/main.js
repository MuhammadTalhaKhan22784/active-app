//Buitlin
import React, { useState } from 'react'
import Nav from '../../assets/components/nav'

//components
import SelectComponent from '../../assets/components/selectComponent'
import { SelectForMCQ2 } from '../../assets/components/selectComponentForMultipleChoices'

//components-data
import selectDataForHeaderMessage from '../../assets/componentsData/selectDataForHeaderMessage'

//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import signalsLogo from '../../assets/svgs/signalStream.svg'

//css
import stylesSheet from './mc3.module.css'

const checkIconStyles = {
  borderRadius: '50%',
  border: '1px solid #fff',
  backgroundColor: '#21cec1',
  position: 'absolute',
  fontSize: '15px',
  width: '20px',
  height: '20px',
  padding: '1px',
  zIndex: '9999',
  margin: '9px 0px 0px 5px',
  color: '#fff',
  fill: '#fff',
}

const CheckIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faCheck}
      style={checkIconStyles}
      className='fa-check'
    />
  )
}

const name = 'שלומי שושנה'
const id = 63485408
const date = new Date().toLocaleDateString()

const Main = () => {
  const [yesButtonClicked, setYesButtonClicked] = useState(false)
  const [noButtonClicked, setNoButtonClicked] = useState(false)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)

  const noButtonClickHandler = () => {
    setNoButtonClicked(true)
    setYesButtonClicked(false)
    setIsSubmitButtonDisabled(false)
  }
  const yesButtonClickHandler = () => {
    setYesButtonClicked(true)
    setNoButtonClicked(false)
    setIsSubmitButtonDisabled(false)
  }

  const QuestionNumbers = () => {
    return (
      <div className={stylesSheet.questionNumbers} dir='ltr'>
        <div
          className={`${stylesSheet.questionNumber} ${stylesSheet.active}`}
          id='q1'
        >
          <h3>1</h3>
        </div>
        <div
          className={`${stylesSheet.questionNumber} ${stylesSheet.next}`}
          id='q2'
        >
          <h3>2</h3>
        </div>
        <div className={stylesSheet.questionNumber} id='q3'>
          <h3>3</h3>
        </div>
        <div className={stylesSheet.questionNumber} id='q4'>
          <h3>4</h3>
        </div>
        <div className={stylesSheet.questionNumber} id='q5'>
          <h3>5</h3>
        </div>
        <div className={stylesSheet.questionNumber} id='q6'>
          <h3>6</h3>
        </div>
        <div className={stylesSheet.questionNumber} id='q7'>
          <h3>7</h3>
        </div>
        <div className={stylesSheet.questionNumber} id='q8'>
          <h3>8</h3>
        </div>
        <div className={stylesSheet.questionNumber} id='q9'>
          <h3>9</h3>
        </div>
        <div className={stylesSheet.questionNumber} id='q10'>
          <h3>10</h3>
        </div>
      </div>
    )
  }

  const Question = () => {
    return (
      <div className={stylesSheet.question}>
        <h2>שאלות של מסוגלות פיזית</h2>
        <p>האם מופיע קושי בנשימה אחרי הליכה קצרה בקצב הנוח לך?</p>
      </div>
    )
  }

  const YesButtonClicked = () => {
    return <button className={stylesSheet.gradient}>כן</button>
  }

  const YesButtonUnclicked = () => {
    return (
      <button
        className={noButtonClicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={() => {
          yesButtonClickHandler()
        }}
      >
        כן
      </button>
    )
  }

  const AfterYesChoice = () => {
    return (
      <div className={stylesSheet.afterYesChoice}>
        <p>איך היית מדרג את רמת הקושי?</p>
        <div className={stylesSheet.selectComponentContainer}>
          <SelectForMCQ2 />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Nav/>

    <>
      <div className={stylesSheet.mainWrapper}>
        <div className={stylesSheet.messageAndSelectContainer}>
          <span className={stylesSheet.message}>
            <h1>שאלון מעקב 3 חודשים</h1>
            <p className={stylesSheet.nameIdDate}>
              {name}&emsp;/&emsp;{id}&emsp;/&emsp;{date}
            </p>
          </span>
          <SelectComponent {...selectDataForHeaderMessage} />
        </div>

        <div className={stylesSheet.mainContainer}>
          <div className={stylesSheet.rightSide}>
            <div className={stylesSheet.timer}>
              <h1>Timer</h1>
            </div>
            <div className={stylesSheet.instructions}>
              <p>
                מטרת שאלון זה היא לבדוק את אופן התקדמות המטופל. השאלות הבאות
                יבדקו כיצד ההתקדמות באה לידי ביטוי ביכולת פיזית ונשימתית בפעולות
                היום יומיות ובהערכה תחושתית שלכם עם מגבלת הנשימה.
              </p>
              <p>
                חלק 1 של השאלון מכיל בדיקת מדדים במנוחה ומענה על שאלות, נסו
                לענות בכנות ובדיוק ככל הניתן.
              </p>
              <p>חלק 2 של השאלון מכיל בדיקת מאמץ קצרה</p>
              <p>***השאלות נכתבו בלשון זכר, אך מתייחסת לשני המינים***.</p>
              <p>סה"כ זמן למענה על כל השאלון – כ 10 דק'.</p>
              <p className={stylesSheet.redText}>
                במידה ובמהלך הפעילות בתוכנית אתם נדרשים להשתמש בחמצן, אנא היעזרו
                בחמצן גם עבור שאלון זה. הפעילו את המחולל על הכמות שאתם נעזרים
                בדרך כלל*
              </p>
            </div>
          </div>

          <div className={stylesSheet.leftSide}>
            <div>
              <QuestionNumbers />
              <Question />
              <div className={stylesSheet.questionOptions}>
                <div className={stylesSheet.yesButton}>
                  {yesButtonClicked ? (
                    <YesButtonClicked />
                  ) : (
                    <YesButtonUnclicked />
                  )}

                  {yesButtonClicked ? <AfterYesChoice /> : ''}
                </div>

                <div className={stylesSheet.noButton}>
                  {noButtonClicked ? (
                    <button className={stylesSheet.gradient}>לא</button>
                  ) : (
                    <button
                      className={
                        yesButtonClicked
                          ? stylesSheet.diabled
                          : stylesSheet.normal
                      }
                      onClick={() => noButtonClickHandler()}
                    >
                      לא
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className={stylesSheet.footerSubmitAndBackButton}>
              <a href='#'>חזור</a>

              {yesButtonClicked || noButtonClicked ? (
                <button
                  className={stylesSheet.gradient}
                  disabled={false}
                  onClick={() => {
                    alert('Clicked Enabled Button')
                  }}
                >
                  לסט הבא
                </button>
              ) : (
                <button
                  className={stylesSheet.disabled}
                  disabled={true}
                  onClick={() => {
                    alert('Clicked diasbled Button')
                  }}
                >
                  לסט הבא
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={stylesSheet.sos}>
          <img src={signalsLogo} className={stylesSheet.signalStream}></img>
        </div>
      </div>
    </>
    </div>

  )
}

export default Main
