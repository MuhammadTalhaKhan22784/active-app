//Builtin
import React, { useState } from 'react'
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
import stylesSheet from './mcp2.module.css'

const checkIconStyle = {
  borderRadius: '50%',
  backgroundColor: '#21cec1',
  position: 'relative',
  fontSize: '15px',
  width: '20px',
  height: '20px',
  padding: '3px',
  color: '#fff',
  fill: '#fff',
}

const name = 'שלומי שושנה'
const id = 63485408
const date = new Date().toLocaleDateString()

const Main = () => {
  const [isStatorConditionChecked, setIsStatorConditionChecked] =
    useState(false)
  const [isStopActivityConditionChecked, setIsStopActivityConditionChecked] =
    useState(false)

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true)

  const Question = () => {
    return (
      <div className={stylesSheet.question}>
        <h2>חלק 2 - מבדק פיזי</h2>
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
                בחלק זה של השאלון תתבקשו לבצע הליכה בקצב הנוח לכם, ולפי אופן
                הנשימה שאתם מרגישים לנכון.
              </p>
              <br />
              <p>
                ההליכה לא תהיה הליכה במקום, אלא – הליכה ברחבי הבית, ניתן גם לבצע
                את ההליכה בחוץ (לדוגמא בגינת הבית או במסדרון הקומה/בניין).
              </p>
              <br />
              <p>
                הבדיקה תיעשה בעזרת שימוש בחמצן – רק במידה ובמהלך הפעילות בתכנית
                אתם נדרשים להשתמש בחמצן. הפעילו את המחולל על הכמות שאתם משתמשים
                בדרך כלל*
              </p>
              <br />
              <div className={stylesSheet.redText}>
                <p>
                  <strong>תיאור התרגיל:</strong>
                </p>
                <p>התרגיל הוא תרגיל הליכה עד 6 דק' בלבד.</p>
                <br />
                <p>
                  קצב ומהירות ההליכה: כפי שנוח לכם איך נושמים: כפי שנוח לכם.
                </p>
                <br />
                <p>
                  <strong>איך נושמים: </strong>כפי שנוח לכם.
                </p>
                <br />
                <p>
                  <strong>המטרה: </strong>לצעוד כמה שיותר זמן כל עוד:
                </p>
                <br />
                <p>
                  <strong>1. </strong>סטורציה מעל 90%
                </p>
                <p>או </p>
                <p>
                  <strong>2. </strong>דרגת עומס נשימתי בין 0 ל3.5
                </p>
              </div>
            </div>
          </div>

          <div className={stylesSheet.leftSide}>
            <div>
              <div>
                <Question />
              </div>
              <div className={stylesSheet.infoAndConfirmation}>
                <div className={stylesSheet.infoSection}>
                  <p>
                    <strong>עזרים לתרגיל:</strong>
                  </p>
                  <p>מד הסטורציה צריך להיות על האצבע כל זמן ההליכה.</p>
                  <br />
                  <p>
                    <strong>מתי מסתיים התרגול?</strong>
                  </p>
                  <p>
                    עצרו את מהלך התרגיל במידה ורק אחד מהתנאים מתקיימים במהלך
                    ההליכה:
                  </p>
                  <br />
                  <p>
                    <strong>סטורציה ירדה מתחת ל-90%</strong>
                  </p>
                  <hr />
                  <p>
                    <strong> דרגת עומס נשימתי הגיעה ל-4</strong>
                  </p>
                  <hr />
                  <p>
                    <strong>הטיימר הגיע ל-6 דק'</strong>
                  </p>
                </div>
                <div className={stylesSheet.confirmationSection}>
                  <p>חובה לאשר על מנת להמשיך</p>
                  <form action='#'>
                    <input
                      type='checkbox'
                      name='condition'
                      id='statorCondition'
                      checked={isStatorConditionChecked}
                      onChange={() => {
                        setIsStatorConditionChecked(!isStatorConditionChecked)
                      }}
                    />
                    <label
                      htmlFor='statorCondition'
                      className={
                        isStatorConditionChecked
                          ? stylesSheet.statorConditionBox
                          : `${stylesSheet.statorConditionBox} ${stylesSheet.disabled}`
                      }
                    >
                      <div className={stylesSheet.checkBoxContainer}>
                        {isStatorConditionChecked ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={checkIconStyle}
                          />
                        ) : (
                          <div className={stylesSheet.emptyCheckBox}>
                            <span></span>
                          </div>
                        )}
                      </div>
                      הבנתי שמד הסטורציה יהיה דלוק ועל האצבע כל הזמן *
                    </label>

                    <input
                      type='checkbox'
                      name='condition'
                      id='stopActivityCondition'
                      checked={isStopActivityConditionChecked}
                      onChange={() => {
                        setIsStopActivityConditionChecked(
                          !isStopActivityConditionChecked
                        )
                      }}
                    />
                    <label
                      htmlFor='stopActivityCondition'
                      className={
                        isStopActivityConditionChecked
                          ? stylesSheet.stopActivityConditionBox
                          : `${stylesSheet.stopActivityConditionBox} ${stylesSheet.disabled}`
                      }
                    >
                      <div className={stylesSheet.checkBoxContainer}>
                        {isStopActivityConditionChecked ? (
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={checkIconStyle}
                          />
                        ) : (
                          <div className={stylesSheet.emptyCheckBox}>
                            <span></span>
                          </div>
                        )}
                      </div>
                      הבנתי מהם התנאים לעצירת הפעילות *
                    </label>
                  </form>
                </div>
              </div>
            </div>
            <div className={stylesSheet.footerSubmitAndBackButton}>
              {isStatorConditionChecked && isStopActivityConditionChecked ? (
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
