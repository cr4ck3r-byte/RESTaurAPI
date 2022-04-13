import style from './Modal.module.css'
import Exit from './Exit';

export default function Modal({isModalOpen, closeModal, openModal, children, title}) {

  const handleModalDialogClick = e => {
    e.stopPropagation();
  } 

  return (
    <div className={`${style.modal_container} ${isModalOpen && style.modal_container_open}`} onClick={()=>closeModal()}>
        <div className={style.modal_dialog} onClick={handleModalDialogClick}>
              <h1 className={style.modal_title}>{title}</h1>
              {children}
              <Exit action={() => closeModal()} iconColor='#bbffaa'/>
        </div>
    </div>
  )
}