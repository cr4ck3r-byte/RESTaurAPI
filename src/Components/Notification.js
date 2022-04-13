import React from 'react'
import style from './Notification.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const Notification = ({ state, setState, payload }) => {
  
  setTimeout(() => {
    setState(style.father_div_off)
  }, 1800)

  return (
        <div className={state}>
            <div className={style.notification_container}>
              <FontAwesomeIcon icon={faCircleXmark} className={style.notification_exit} onClick={() => {setState(style.father_div_off)}}/>
              <p className={style.notification_text}>{payload.text}</p>
            </div>
        </div>
  )
}

export default Notification