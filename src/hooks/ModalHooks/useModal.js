import { useState} from 'react'
// import { initialModalState, modalReducer} from '../../reducers/ModalReducers/modalReducer';

const useModal = () => {

    const [modalState, setModalState] = useState(false);

    const openModal = () => {
        setModalState(true);
    }

    const closeModal = () => {
        setModalState(false);
    }

    return [modalState, openModal, closeModal];
}
export default useModal