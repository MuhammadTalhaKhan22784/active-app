import React, { useState, useRef } from 'react'
import navStyles from '../css/nav.module.css'
// import '../css/buttons.css'

import userIcon from '../images/iconSettings.png'
import settingsIcon from '../images/iconUser.png'
import closeButton from '../svgs/closeButton.svg'

import '../css/bootstrap/bootstrap.min.css'
import '../css/contactModal.css'
import { Modal } from 'react-bootstrap'

const Nav = () => {
  const [modalShow, setModalShow] = React.useState(false)

  const thereInput = useRef(null)
  const familyInput = useRef(null)
  const emailInput = useRef(null)
  const phoneInput = useRef(null)
  const messageInput = useRef(null)

  const handleSubmit = () => {
    if (
      thereInput.current.value &&
      familyInput.current.value &&
      emailInput.current.value &&
      phoneInput.current.value &&
      messageInput.current.value
    ) {
      console.log(thereInput.current.value)
      console.log(familyInput.current.value)
      console.log(emailInput.current.value)
      console.log(phoneInput.current.value)
      console.log(messageInput.current.value)
    }
  }

  // const thereChangeHandler = (e) => {
  //   setThere(e.target.value)
  // }
  // const familyChangeHandler = (e) => {
  //   setFamily(e.target.value)
  // }
  // const emailChangeHandler = (e) => {
  //   setEmail(e.target.value)
  // }
  // const phoneChangeHandler = (e) => {
  //   setPhone(e.target.value)
  // }
  // const messageChangeHandler = (e) => {
  //   setMessage(e.target.value)
  // }

  function ContactFormModal(props) {
    return (
      <Modal
        {...props}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='contactModal'
      >
        <Modal.Header id='contained-modal-title-vcenter'>
          <div className='modalHeader'>
            <div>
              <h2>נשמח לשמוע ממכם בכל עניין</h2>
            </div>
          </div>
          <button
            className='closeContactForm'
            onClick={() => setModalShow(false)}
          >
            <img src={closeButton} />
          </button>
        </Modal.Header>
        <Modal.Body>
          <form action='' onSubmit={handleSubmit}>
            <div className='inputs-container'>
              <div className='form-control-wrapper'>
                <div className='form-control'>
                  <label htmlFor='there'>שם</label>
                  <input
                    type='text'
                    name='there'
                    id='there'
                    placeholder=''
                    // value={there}
                    ref={thereInput}
                    // onChange={thereChangeHandler}
                  />
                </div>

                <div className='form-control'>
                  <label htmlFor='family'>משפחה</label>
                  <input
                    type='text'
                    name='family'
                    id='family'
                    placeholder=''
                    // value={family}
                    ref={familyInput}
                    // onChange={familyChangeHandler}
                  />
                </div>
              </div>
              <div className='form-control-wrapper'>
                <div className='form-control'>
                  <label htmlFor='email'>כתובת אימייל</label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    placeholder=''
                    // value={email}
                    ref={emailInput}
                    // onChange={emailChangeHandler}
                  />
                </div>

                <div className='form-control'>
                  <label htmlFor='phone'>כתובת אימייל</label>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    // value={phone}
                    ref={phoneInput}
                    placeholder=''
                    // onChange={phoneChangeHandler}
                  />
                </div>
              </div>
              <div className='form-control-wrapper'>
                <div className='form-control formMessage'>
                  <label htmlFor='form-message'>כתובת אימייל</label>
                  <textarea
                    name='form-message'
                    id='form-message'
                    rows='10'
                    ref={messageInput}
                    // value={message}
                    // onChange={messageChangeHandler}
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <footer>
            <button className='gradient' onClick={handleSubmit}>
              שלח{' '}
            </button>
          </footer>
        </Modal.Footer>
      </Modal>
    )
  }

  return (
    <div className={navStyles.navBarContainer}>
      <ContactFormModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className={navStyles.navBar}>
        <div id='brand'>לוגו יבוא כאן</div>
        <div className={navStyles.navListContainer}>
          <ul className={navStyles.navList}>
            <li
              className={`${navStyles.navLink} ${navStyles.contactUsButton}`}
              id='contact-us'
              onClick={() => {
                setModalShow(true)
              }}
            >
              צור קשר
            </li>
            <li className={navStyles.navLink} id='definitions'>
              <img src={settingsIcon} alt='' />
              הגדרות
            </li>
            <li className={navStyles.navLink} id='user-settings'>
              <img src={userIcon} alt='' />
              הגדרות משתמש
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
