import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import messagesArray from '../componentsData/messagesArray'
import paperClipIcon from '../svgs/paperClipIcon.svg'

import styles from '../css/messages.module.css'

const circleIcon = (
  <FontAwesomeIcon
    icon={faCircle}
    style={{
      borderRadius: '50%',
      color: '#21cec1',
      backgroundColor: '#21cec1',
      width: '8px',
      height: '8px',
      margin: '5px',
    }}
  />
)

const messages = () => {
  let count = 0

  return (
    <>
      <div className={styles.messagesCount}>
        <p>
          הודעות שלא נקראו <span>44</span>
        </p>
      </div>
      {messagesArray.map((message) => {
        count = count + 1

        return (
          <div
            className={
              message.isRead
                ? `${styles.inboxMessageContainer} ${styles.read}`
                : `${styles.inboxMessageContainer} ${styles.notRead}`
            }
          >
            <p>
              <small>
                {message.isRead ? circleIcon : ''}
                {message.name} <span>{message.time}</span>
              </small>
            </p>
            <p>
              <strong>{message.topic}</strong>
            </p>
            <div className={styles.tagAndAttachIcon}>
              {message.isRequest ? (
                <span className={styles.requestTag}>
                  <small>{message.tag}</small>
                </span>
              ) : message.isUrgent ? (
                <span className={styles.urgentTag}>
                  <small>{message.tag}</small>
                </span>
              ) : message.isAnswer ? (
                <span className={styles.answerTag}>
                  <small>{message.tag}</small>
                </span>
              ) : (
                ''
              )}
              <span className={styles.attachIcon}>
                {message.isAttachment ? <img src={paperClipIcon} alt='' /> : ''}
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default messages
