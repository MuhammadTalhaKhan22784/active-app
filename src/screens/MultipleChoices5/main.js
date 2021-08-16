//Builtin
import React, { useState } from 'react'
import Nav from '../../assets/components/nav'

//components
import SelectComponent from '../../assets/components/selectComponent'
import { SelectForMCQ4 } from '../../assets/components/selectComponentForMultipleChoices'

//components-data
import selectDataForHeaderMessage from '../../assets/componentsData/selectDataForHeaderMessage'

//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import signalsLogo from '../../assets/svgs/signalStream.svg'

//css
import stylesSheet from './mc5.module.css'

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
  const [isButton1Clicked, setIsButton1Clicked] = useState(false)
  const [isButton2Clicked, setIsButton2Clicked] = useState(false)
  const [isButton3Clicked, setIsButton3Clicked] = useState(false)
  const [isButton4Clicked, setIsButton4Clicked] = useState(false)
  const [isButton5Clicked, setIsButton5Clicked] = useState(false)
  const [isButton6Clicked, setIsButton6Clicked] = useState(false)
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)

  const checkForClickedButton = () => {
    setIsSubmitButtonDisabled(false)
  }

  const button1ClickHandler = () => {
    setIsButton1Clicked(true)
    setIsButton2Clicked(false)
    checkForClickedButton()
  }

  const button2ClickHandler = () => {
    setIsButton2Clicked(true)
    setIsButton1Clicked(false)
    checkForClickedButton()
  }
  const button3ClickHandler = () => {
    setIsButton3Clicked(true)
    setIsButton4Clicked(false)
    checkForClickedButton()
  }
  const button4ClickHandler = () => {
    setIsButton4Clicked(true)
    setIsButton3Clicked(false)
    checkForClickedButton()
  }
  const button5ClickHandler = () => {
    setIsButton5Clicked(true)
    setIsButton6Clicked(false)
    checkForClickedButton()
  }
  const button6ClickHandler = () => {
    setIsButton6Clicked(true)
    setIsButton5Clicked(false)
    checkForClickedButton()
  }

  const QuestionNumbers = () => {
    return (
      <div className={stylesSheet.questionNumbers} dir='ltr'>
        <div
          className={`${stylesSheet.questionNumber} ${stylesSheet.completed}`}
          id='q1'
        >
          <h3>1</h3>
          <CheckIcon />
        </div>
        <div
          className={`${stylesSheet.questionNumber} ${stylesSheet.active}`}
          id='q2'
        >
          <h3>2</h3>
        </div>
        <div
          className={`${stylesSheet.questionNumber} ${stylesSheet.next}`}
          id='q3'
        >
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
        <p>
          <strong>האם מופיע קושי בנשימה אחרי הליכה קצרה בקצב הנוח לך?</strong>
        </p>
      </div>
    )
  }

  const Button1Clicked = () => {
    return <button className={stylesSheet.gradient}>יש קוצר נשימה</button>
  }
  const Button1Unclicked = () => {
    return (
      <button
        className={isButton2Clicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={() => {
          button1ClickHandler()
        }}
      >
        יש קוצר נשימה
      </button>
    )
  }

  const Button2Clicked = () => {
    return <button className={stylesSheet.gradient}>אין קוצר נשימה</button>
  }

  const Button2Unclicked = () => {
    return (
      <button
        className={isButton1Clicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={() => button2ClickHandler()}
      >
        אין קוצר נשימה
      </button>
    )
  }

  const Button3Clicked = () => {
    return <button className={stylesSheet.gradient}>אין קוצר נשימה</button>
  }

  const Button3Unclicked = () => {
    return (
      <button
        className={isButton4Clicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={() => button3ClickHandler()}
      >
        אין קוצר נשימה
      </button>
    )
  }

  const Button4Clicked = () => {
    return <button className={stylesSheet.gradient}>אין קוצר נשימה</button>
  }

  const Button4Unclicked = () => {
    return (
      <button
        className={isButton3Clicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={() => button4ClickHandler()}
      >
        אין קוצר נשימה
      </button>
    )
  }

  const Button5Clicked = () => {
    return <button className={stylesSheet.gradient}>אין קוצר נשימה</button>
  }

  const Button5Unclicked = () => {
    return (
      <button
        className={isButton6Clicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={() => button5ClickHandler()}
      >
        אין קוצר נשימה
      </button>
    )
  }

  const Button6Clicked = () => {
    return <button className={stylesSheet.gradient}>אין קוצר נשימה</button>
  }

  const Button6Unclicked = () => {
    return (
      <button
        className={isButton5Clicked ? stylesSheet.disabled : stylesSheet.normal}
        onClick={() => button6ClickHandler()}
      >
        אין קוצר נשימה
      </button>
    )
  }

  const AfterYesChoice1 = () => {
    return (
      <div className={stylesSheet.afterYesChoice}>
        <p>איך היית מדרג את רמת הקושי?</p>
        <div className={stylesSheet.selectComponentContainer}>
          <SelectForMCQ4 />
        </div>
      </div>
    )
  }

  const AfterYesChoice2 = () => {
    return (
      <div className={stylesSheet.afterYesChoice}>
        <p>איך היית מדרג את רמת הקושי?</p>
        <div className={stylesSheet.selectComponentContainer}>
          <SelectForMCQ4 />
        </div>
      </div>
    )
  }

  const AfterYesChoice3 = () => {
    return (
      <div className={stylesSheet.afterYesChoice}>
        <p>איך היית מדרג את רמת הקושי?</p>
        <div className={stylesSheet.selectComponentContainer}>
          <SelectForMCQ4 />
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
              <div className={stylesSheet.yesNoQuestions}>
                <div className={stylesSheet.yesNoQuestion} id='ynq-1'>
                  <div className={stylesSheet.yesButton}>
                    <p>להתקלח או להתלבש</p>
                    {isButton1Clicked ? (
                      <Button1Clicked />
                    ) : (
                      <Button1Unclicked />
                    )}
                  </div>

                  <div className={stylesSheet.noButton}>
                    <p>
                      <br />
                    </p>
                    {isButton2Clicked ? (
                      <Button2Clicked />
                    ) : (
                      <Button2Unclicked />
                    )}
                  </div>
                  <div className={stylesSheet.selectYNQ}>
                    {isButton1Clicked ? <AfterYesChoice1 /> : ''}
                  </div>
                </div>

                <div className={stylesSheet.yesNoQuestion} id='ynq-2'>
                  <div className={stylesSheet.yesButton}>
                    <p>להתקלח או להתלבש</p>
                    {isButton3Clicked ? (
                      <Button3Clicked />
                    ) : (
                      <Button3Unclicked />
                    )}
                  </div>

                  <div className={stylesSheet.noButton}>
                    <p>
                      <br />
                    </p>
                    {isButton4Clicked ? (
                      <Button4Clicked />
                    ) : (
                      <Button4Unclicked />
                    )}
                  </div>
                  <div className={stylesSheet.selectYNQ}>
                    {isButton3Clicked ? <AfterYesChoice2 /> : ''}
                  </div>
                </div>

                <div className={stylesSheet.yesNoQuestion} id='ynq-3'>
                  <div className={stylesSheet.yesButton}>
                    <p>להתקלח או להתלבש</p>
                    {isButton5Clicked ? (
                      <Button5Clicked />
                    ) : (
                      <Button5Unclicked />
                    )}
                  </div>

                  <div className={stylesSheet.noButton}>
                    <p>
                      <br />
                    </p>
                    {isButton6Clicked ? (
                      <Button6Clicked />
                    ) : (
                      <Button6Unclicked />
                    )}
                  </div>
                  <div className={stylesSheet.selectYNQ}>
                    {isButton5Clicked ? <AfterYesChoice3 /> : ''}
                  </div>
                </div>

                <div className={stylesSheet.yesNoQuestion} id='ynq-3'>
                  <div className={stylesSheet.yesButton}>
                    <p>להתקלח או להתלבש</p>
                    {isButton5Clicked ? (
                      <Button5Clicked />
                    ) : (
                      <Button5Unclicked />
                    )}
                  </div>

                  <div className={stylesSheet.noButton}>
                    <p>
                      <br />
                    </p>
                    {isButton6Clicked ? (
                      <Button6Clicked />
                    ) : (
                      <Button6Unclicked />
                    )}
                  </div>
                  <div className={stylesSheet.selectYNQ}>
                    {isButton5Clicked ? <AfterYesChoice3 /> : ''}
                  </div>
                </div>

                <div className={stylesSheet.yesNoQuestion} id='ynq-3'>
                  <div className={stylesSheet.yesButton}>
                    <p>להתקלח או להתלבש</p>
                    {isButton5Clicked ? (
                      <Button5Clicked />
                    ) : (
                      <Button5Unclicked />
                    )}
                  </div>

                  <div className={stylesSheet.noButton}>
                    <p>
                      <br />
                    </p>
                    {isButton6Clicked ? (
                      <Button6Clicked />
                    ) : (
                      <Button6Unclicked />
                    )}
                  </div>
                  <div className={stylesSheet.selectYNQ}>
                    {isButton5Clicked ? <AfterYesChoice3 /> : ''}
                  </div>
                </div>

                <div className={stylesSheet.yesNoQuestion} id='ynq-3'>
                  <div className={stylesSheet.yesButton}>
                    <p>להתקלח או להתלבש</p>
                    {isButton5Clicked ? (
                      <Button5Clicked />
                    ) : (
                      <Button5Unclicked />
                    )}
                  </div>

                  <div className={stylesSheet.noButton}>
                    <p>
                      <br />
                    </p>
                    {isButton6Clicked ? (
                      <Button6Clicked />
                    ) : (
                      <Button6Unclicked />
                    )}
                  </div>
                  <div className={stylesSheet.selectYNQ}>
                    {isButton5Clicked ? <AfterYesChoice3 /> : ''}
                  </div>
                </div>

                <div className={stylesSheet.yesNoQuestion} id='ynq-3'>
                  <div className={stylesSheet.yesButton}>
                    <p>להתקלח או להתלבש</p>
                    {isButton5Clicked ? (
                      <Button5Clicked />
                    ) : (
                      <Button5Unclicked />
                    )}
                  </div>

                  <div className={stylesSheet.noButton}>
                    <p>
                      <br />
                    </p>
                    {isButton6Clicked ? (
                      <Button6Clicked />
                    ) : (
                      <Button6Unclicked />
                    )}
                  </div>
                  <div className={stylesSheet.selectYNQ}>
                    {isButton5Clicked ? <AfterYesChoice3 /> : ''}
                  </div>
                </div>
              </div>
            </div>
            <div className={stylesSheet.footerSubmitAndBackButton}>
              {!isSubmitButtonDisabled ? (
                <button
                  className={stylesSheet.gradient}
                  disabled={false}
                  onClick={() => alert('Clicked!')}
                >
                  לסט הבא
                </button>
              ) : (
                <button
                  className={stylesSheet.disabled}
                  disabled={true}
                  onClick={() => alert('Clicked!')}
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
