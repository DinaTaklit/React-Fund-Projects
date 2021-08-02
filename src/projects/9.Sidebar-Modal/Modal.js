import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>modal content</h2>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal