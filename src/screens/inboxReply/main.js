//Builtin
import React from 'react'
import Nav from '../../assets/components/nav'

//Modal
import { Modal } from 'react-bootstrap'
import '../../assets/css/bootstrap/bootstrap.min.css'

//components
import SelectComponent from '../../assets/components/selectComponent'
import UpdatesAndGuides from '../../assets/components/UpdatesAndGuides'

//components-data
import selectDataForHeaderMessage from '../../assets/componentsData/selectDataForHeaderMessage'
import Messages from '../../assets/componentsData/messages'

//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReply,
  faTrashAlt,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'

//css
import stylesSheet from './inbox.module.css'
import './replyModal.css'

const ReplyIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faReply}
      style={{
        margin: '0px 10px',
        color: '#716eff',
        cursor: 'pointer',
      }}
    />
  )
}
const TrashIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faTrashAlt}
      style={{
        margin: '0px 10px',
        color: '#716eff',
        cursor: 'pointer',
      }}
    />
  )
}
const UploadIcon = () => {
  return (
    <FontAwesomeIcon
      icon={faUpload}
      style={{
        margin: '0px 10px',
        color: '#716eff',
        cursor: 'pointer',
      }}
    />
  )
}

const name = 'שלומי שושנה'
const id = 63485408
const date = new Date().toLocaleDateString()

function ReplyModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='replyModal'
    >
      <Modal.Header id='contained-modal-title-vcenter'>
        <div className='modalHeader'>
          <div>
            <button className={stylesSheet.gradient}>שלח</button>
            <TrashIcon />
          </div>
          <div className=''>
            <UploadIcon />
          </div>
        </div>
        {/* </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <form action=''>
          <textarea name='' id='' cols='30' rows='20'>
            ככה תראה הודעה שהלוקח יכתוב…
          </textarea>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <footer>
          <p>קבצים מצורפים</p>
          <button className={stylesSheet.normal}>
            מסמך אישור רפואי… <div className='pdfIcon brand'>PDF</div>
          </button>
          <button className={stylesSheet.normal}>
            מסמך אישור רפואי… <div className='wordIcon'>W</div>
          </button>
        </footer>
      </Modal.Footer>
    </Modal>
  )
}

const Main = () => {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <div>
      <Nav/>
    <div className={stylesSheet.mainWrapper}>
      <ReplyModal show={modalShow} onHide={() => setModalShow(false)} />
      <div className={stylesSheet.rightSide}>
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
          {console.log(selectDataForHeaderMessage)}
          <SelectComponent {...selectDataForHeaderMessage} />
        </div>

        <div className={stylesSheet.inboxContainer}>
          <div className={stylesSheet.messagesContainer}>
            <Messages />
          </div>
          <div className={stylesSheet.messageContainer}>
            <div className={stylesSheet.icons}>
              <div>
                <span onClick={() => setModalShow(true)}>
                  <ReplyIcon />
                </span>
                <UploadIcon />
              </div>
              <div>
                <TrashIcon />
              </div>
            </div>
            <div className={stylesSheet.openedMessage}>
              <header>
                <p>
                  <small>
                    אוהד אוחנה <span className={stylesSheet.time}>17:25</span>
                  </small>
                </p>
                <p>
                  <strong>יש לך עדכון תכנית גש לאזור האישי</strong>
                </p>
              </header>
              <main>
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
              </main>
              <footer>
                <p>קבצים מצורפים</p>
                <button className={stylesSheet.normal}>
                  מסמך אישור רפואי…
                  <div
                    className={`${stylesSheet.pdfIcon} ${stylesSheet.brand}`}
                  >
                    PDF
                  </div>
                </button>
                <button className={stylesSheet.normal}>
                  מסמך אישור רפואי…{' '}
                  <div className={stylesSheet.wordIcon}>W</div>
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
      <div className={stylesSheet.leftSide}>
        <UpdatesAndGuides />
      </div>
    </div>
    </div>

  )
}

export default Main
