import React, { useState } from 'react'
import stylesSheet from './login.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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

const Main = () => {
  const [isRememberMeChecked, setIsRememberMeChecked] = useState(false)
  const [userName, setUserName] = useState('')
  const [pass, setPass] = useState('')

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value)
  }
  const passChangeHandler = (e) => {
    setPass(e.target.value)
  }

  const loginSubmitButtonClickHandler = (e) => {
    e.preventDefault()
    if (userName && pass) {
      console.log(userName, pass, 'Remember Me: ' + isRememberMeChecked)
    }
  }

  return (
    <div className={stylesSheet.mainContainer}>
      <div className={stylesSheet.loginBoxContainer}>
        <h1>
          ברוכים הבאים <br /> ל-Active Lungs <br /> האזור האישי שלכם
        </h1>
        <p>
          ריאה היא איבר המאפשר נשימה בגופם של בעלי חיים מפותחים. לבעלי חוליות,
          כאן תוכלו להכנס לאזור האישי שלכם על ידי הכנסת שם משתמש וסיסמא.
        </p>

        <div className={stylesSheet.form}>
          <form action='#'>
            <div className={stylesSheet.loginFormControls}>
              <input
                type='text'
                name='userName'
                id='userName'
                value={userName}
                onChange={userNameChangeHandler}
                placeholder='שם משתמש'
              />

              <input
                type='password'
                name='password'
                id='password'
                value={pass}
                onChange={passChangeHandler}
                placeholder='סיסמא'
              />

              <input
                type='checkbox'
                name='remember-me'
                id='remember-me'
                onChange={() => {
                  setIsRememberMeChecked(!isRememberMeChecked)
                }}
              />
              <label htmlFor='remember-me'>
                <div className={stylesSheet.checkBoxContainer}>
                  {isRememberMeChecked ? (
                    <FontAwesomeIcon icon={faCheck} style={checkIconStyle} />
                  ) : (
                    <div className={stylesSheet.emptyCheckBox}>
                      <span></span>
                    </div>
                  )}
                </div>
                זכרו אותי
              </label>

              <button
                className={stylesSheet.gradient}
                onClick={loginSubmitButtonClickHandler}
              >
                כניסה
              </button>
              <div className={stylesSheet.signUp}>
                <a href=''>או הרשמו</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Main
