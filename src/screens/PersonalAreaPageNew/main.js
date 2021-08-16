//Builtin
import React, { useState } from 'react'
import Nav from '../../assets/components/nav'

//components
import UpdatesAndGuides from '../../assets/components/UpdatesAndGuides'
import SelectComponent from '../../assets/components/selectComponent'

//components-data
// import recommendations from '../../assets/componentsData/doctorReccomendation'
import tasks from '../../assets/componentsData/weeklyTasks'
import selectDataForHeaderMessage from '../../assets/componentsData/selectDataForHeaderMessage'

//Modal
import { Modal } from 'react-bootstrap'
import '../../assets/css/bootstrap/bootstrap.min.css'

//assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faExclamation,
  faChevronDown,
  faChevronUp,
  faCheck,
  faTrashAlt,
  faUpload,
  faReply,
} from '@fortawesome/free-solid-svg-icons'
import doctorLogo from '../../assets/svgs/disabledDoctorIcon.svg'
import respiratoryDiagnosis from '../../assets/svgs/respiratoryDiagnosis.svg'
import uploadFilesLogo from '../../assets/svgs/uploadFiles.svg'

//css
import stylesSheet from './papn.module.css'
import '../../assets/css/replyModal.css'

const checkIconStatisticsStyle = {
  float: 'left',
  borderRadius: '50%',
  border: '2px solid #fff',
  backgroundColor: '#21cec1',
  position: 'relative',
  fontSize: '21px',
  height: '20px',
  width: '20px',
  padding: '3px',
  color: '#fff',
}
const checkIcon = (
  <FontAwesomeIcon icon={faCheck} style={checkIconStatisticsStyle} />
)

const downArrow = (
  <FontAwesomeIcon icon={faChevronDown} style={{ float: 'left' }} />
)
const leftArrow = (
  <FontAwesomeIcon icon={faChevronLeft} style={{ float: 'left' }} />
)

const checkIconStyle = {
  borderRadius: '50%',
  border: '2px solid #fff',
  backgroundColor: '#21cec1',
  position: 'relative',
  top: '15px',
  fontSize: '30px',
  padding: '3px',
  float: 'left',
}

const checkCompletionIcon = (
  <FontAwesomeIcon icon={faCheck} style={checkIconStyle} />
)
const exclamationIcon = (
  <FontAwesomeIcon
    icon={faExclamation}
    style={{
      borderRadius: '50%',
      border: '2px solid #fff',
      backgroundColor: '#fd7172',
      position: 'relative',
      top: '15px',
      fontSize: '30px',
      padding: '3px',
      width: '30px',
      height: '30px',
      float: 'left',
    }}
  />
)

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
const date = new Date().toLocaleDateString()

function UploadFilesModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='replyModal'
    >
      <Modal.Header id='contained-modal-title-vcenter'>
        {/* <Modal.Title id='contained-modal-title-vcenter'> */}
        <div className='modalHeader'>
          <div>
            <button className='gradient'>שלח</button>
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
          <button className='normal'>
            מסמך אישור רפואי… <div className='pdfIcon brand'>PDF</div>
          </button>
          <button className='normal'>
            מסמך אישור רפואי… <div className='wordIcon'>W</div>
          </button>
        </footer>
      </Modal.Footer>
    </Modal>
  )
}

const Tasks = () => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <div
            className={`${stylesSheet.task} ${stylesSheet.backgroundWhite} ${stylesSheet.disabledComponent}`}
          >
            <div
              className={`${stylesSheet.taskName} ${stylesSheet.backgroundBlue} ${stylesSheet.title}`}
            >
              {task.taskName}
            </div>
            <div className={stylesSheet.desc}>{task.taskDesc}</div>

            <div
              className={`${stylesSheet.taskButton} ${stylesSheet.metaInfo}`}
            >
              <button className={task.isCompleted ? stylesSheet.gradient : ''}>
                התחל עכשיו
              </button>
            </div>
          </div>
        )
      })}
    </>
  )
}

const FirstRow = () => {
  const [showUploadFilesModal, setShowUploadFilesModal] = useState(false)

  return (
    <div className={stylesSheet.firstRow}>
      <UploadFilesModal
        show={showUploadFilesModal}
        onHide={() => {
          setShowUploadFilesModal(false)
        }}
      />
      <div
        className={`${stylesSheet.statisticsContainer} ${stylesSheet.backgroundWhite}`}
      >
        <p className={stylesSheet.statisticsHeader}>סטיסטיקות</p>
        <div className={stylesSheet.statistics}>
          <div className={stylesSheet.progressInfo}></div>

          <div className={stylesSheet.exercisesNames}></div>
        </div>
      </div>

      <div
        className={`${stylesSheet.meetADoctor} ${stylesSheet.backgroundWhite} ${stylesSheet.disabledComponent}`}
      >
        <img src={doctorLogo} alt='' />
        <p>מפגש עם רופא</p>
      </div>
      <div
        className={`${stylesSheet.onlineConsultaion} ${stylesSheet.backgroundWhite}`}
      >
        <img src={respiratoryDiagnosis} alt='' />
        <p>אבחון נשימתי פיזי</p>
      </div>
      <div
        className={`${stylesSheet.uploadFiles} ${stylesSheet.backgroundWhite}`}
        onClick={() => setShowUploadFilesModal(true)}
      >
        <img src={uploadFilesLogo} alt='' />
        <p>העלאת קבצים</p>
      </div>
    </div>
  )
}

const ThirdRow = () => {
  return (
    <>
      <p className={stylesSheet.rowHeader}>משימות שבועיות</p>
      <div className={`${stylesSheet.thirdRow} ${stylesSheet.weeklyTasks}`}>
        <Tasks />
      </div>
    </>
  )
}

const FourthRow = () => {
  return (
    <>
      <p className={stylesSheet.rowHeader}>הודעות</p>
      <div className={`${stylesSheet.fourthRow} ${stylesSheet.messages}`}>
        <div
          className={`${stylesSheet.fourthRowDiv} ${stylesSheet.backgroundWhite}`}
        >
          <div
            className={`${stylesSheet.contactName} ${stylesSheet.backgroundBlue} ${stylesSheet.title}`}
          >
            צרו קשר
          </div>
          <div className={stylesSheet.desc}>
            תוכלו ליצור איתנו קשר על כל דבר ואנחנו נשתדל לענות במהרה
          </div>
          <div
            className={`${stylesSheet.contactButtons} ${stylesSheet.metaInfo}`}
          >
            <button>כתבו לנו</button>
            <button>התקשרו</button>
          </div>
        </div>

        <div
          className={`${stylesSheet.fourthRowDiv} ${stylesSheet.backgroundWhite}`}
        >
          <div
            className={`${stylesSheet.messagesName} ${stylesSheet.backgroundBlue} ${stylesSheet.title}`}
          >
            הודעות
          </div>
          <div className={stylesSheet.desc}>
            <div className={stylesSheet.messagePreview}>
              הודעת מערכת חדשה {leftArrow}
            </div>
            <div className={stylesSheet.messagePreview}>
              ברוך הבא ל- Active Lungs {leftArrow}
            </div>
            <div className={stylesSheet.readMoreMessages}>
              <a href=''>כל ההודעות</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Main = () => {
  return (
    <div>
      <Nav/>

    <div className={stylesSheet.mainWrapper}>
      <div className={stylesSheet.rightSide}>
        <div className={stylesSheet.messageAndSelectContainer}>
          <span className={stylesSheet.message}>
            <h1>שלום, {name}</h1>
            <p className=''>כניסתך האחרונה הייתה ב-{date}</p>
          </span>
          {console.log(selectDataForHeaderMessage)}
          <SelectComponent {...selectDataForHeaderMessage} />
        </div>

        <FirstRow />

        <hr />

        <ThirdRow />

        <hr />

        <FourthRow />
      </div>
      <div className={stylesSheet.leftSide}></div>
      <UpdatesAndGuides />
    </div>
    </div>

  )
}

export default Main
