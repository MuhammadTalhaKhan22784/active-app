//Builtin
import React, { useState, useRef } from 'react'
import Nav from '../../assets/components/nav'

//components
import SelectComponent from '../../assets/components/selectComponent'

//components-data
import selectDataForHeaderMessage from '../../assets/componentsData/selectDataForHeaderMessage'

//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import signalsLogo from '../../assets/svgs/signalStream.svg'

//css
import stylesSheet from './mc2.module.css'

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
  const [isButton1Selected, setIsButton1Selected] = useState(false)
  const [isButton2Selected, setIsButton2Selected] = useState(false)
  const [isButton3Selected, setIsButton3Selected] = useState(false)
  const [isButton4Selected, setIsButton4Selected] = useState(false)
  const [isButton5Selected, setIsButton5Selected] = useState(false)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)

  const SubmitButton = useRef(null)

  const changeSubmitButtonColor = () => {
    setIsSubmitButtonDisabled(false)
  }

  const checkForAnyButtonSelected = () => {
    if (
      isButton1Selected ||
      isButton2Selected ||
      isButton3Selected ||
      isButton4Selected ||
      isButton5Selected
    ) {
      return true
    } else {
      return false
    }
  }

  const button1ClickHandler = (e) => {
    setIsButton1Selected(true)
    setIsButton2Selected(false)
    setIsButton3Selected(false)
    setIsButton4Selected(false)
    setIsButton5Selected(false)
    console.log(e.target.innerHTML)
    changeSubmitButtonColor()
  }

  const button2ClickHandler = (e) => {
    setIsButton1Selected(false)
    setIsButton2Selected(true)
    setIsButton3Selected(false)
    setIsButton4Selected(false)
    setIsButton5Selected(false)
    console.log(e.target.innerHTML)

    changeSubmitButtonColor()
  }

  const button3ClickHandler = (e) => {
    setIsButton1Selected(false)
    setIsButton2Selected(false)
    setIsButton3Selected(true)
    setIsButton4Selected(false)
    setIsButton5Selected(false)
    console.log(e.target.innerHTML)

    changeSubmitButtonColor()
  }

  const button4ClickHandler = (e) => {
    setIsButton1Selected(false)
    setIsButton2Selected(false)
    setIsButton3Selected(false)
    setIsButton4Selected(true)
    setIsButton5Selected(false)
    console.log(e.target.innerHTML)

    changeSubmitButtonColor()
  }

  const button5ClickHandler = (e) => {
    setIsButton1Selected(false)
    setIsButton2Selected(false)
    setIsButton3Selected(false)
    setIsButton4Selected(false)
    setIsButton5Selected(true)
    console.log(e.target.innerHTML)

    changeSubmitButtonColor()
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
        <h2>חלק 1-א</h2>
      </div>
    )
  }

  const Button1 = () => {
    return (
      <>
        <button
          className={
            isButton1Selected
              ? stylesSheet.gradient
              : checkForAnyButtonSelected()
              ? stylesSheet.disabled
              : stylesSheet.normal
          }
          onClick={button1ClickHandler}
        >
          רע מאוד
        </button>
      </>
    )
  }

  const Button2 = () => {
    return (
      <>
        <button
          className={
            isButton2Selected
              ? stylesSheet.gradient
              : checkForAnyButtonSelected()
              ? stylesSheet.disabled
              : stylesSheet.normal
          }
          onClick={button2ClickHandler}
        >
          רע
        </button>
      </>
    )
  }

  const Button3 = () => {
    return (
      <>
        <button
          className={
            isButton3Selected
              ? stylesSheet.gradient
              : checkForAnyButtonSelected()
              ? stylesSheet.disabled
              : stylesSheet.normal
          }
          onClick={button3ClickHandler}
        >
          סביר
        </button>
      </>
    )
  }

  const Button4 = () => {
    return (
      <>
        <button
          className={
            isButton4Selected
              ? stylesSheet.gradient
              : checkForAnyButtonSelected()
              ? stylesSheet.disabled
              : stylesSheet.normal
          }
          onClick={button4ClickHandler}
        >
          טוב
        </button>
      </>
    )
  }

  const Button5 = () => {
    return (
      <>
        <button
          className={
            isButton5Selected
              ? stylesSheet.gradient
              : checkForAnyButtonSelected()
              ? stylesSheet.disabled
              : stylesSheet.normal
          }
          onClick={button5ClickHandler}
        >
          טוב מאוד
        </button>
      </>
    )
  }

  return (
    <div>
      <Nav />

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
              <p style={{ textAlign: 'right' }}>
                נא לבחור תשובה אחת המתארת את מצבך הבריאותי הנוכחי
                <p style={{ float: 'left' }}>תוצאה 3</p>
              </p>
              <div className={stylesSheet.questionOptions}>
                <Button1 />
                <Button2 />
                <Button3 />
                <Button4 />
                <Button5 />
              </div>
            </div>
            <div className={stylesSheet.footerSubmitAndBackButton}>
              {!isSubmitButtonDisabled ? (
                <button
                  className={stylesSheet.gradient}
                  disabled={false}
                  onClick={() =>
                    alert('Clicked! Please Remove the onClick Event!')
                  }
                >
                  לסט הבא
                </button>
              ) : (
                <button
                  className={stylesSheet.disabled}
                  disabled={true}
                  onClick={() =>
                    alert('Clicked! Please Remove the onClick Event!')
                  }
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
