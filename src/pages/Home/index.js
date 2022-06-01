import { useState } from "react"
import Modal from "components/Modal"
import AuthSide from "components/AuthSide"

export default function Home() {
    const [showModal, setShowModal] = useState(false)
    const handleOpenModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <>
            <button onClick={handleOpenModal}>modal</button>
            {showModal && <Modal onClose={handleCloseModal}>
                <AuthSide closeModal={handleCloseModal} />
            </Modal>}
        </>
    )
}