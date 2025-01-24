import { X, CalendarDays, MapPin } from "lucide-react";
import "./Modal.scss";

function Modal({ item, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="detail-modal">
        <button className="detail-modal__close" onClick={onClose}>
          <X />
        </button>
        <h2 className="detail-modal__title">{item.title}</h2>
        <div className="detail-modal__image-container">
          <img
            src={item?.images[0]?.image || "/placeholder.svg"}
            alt={item.title}
            className="detail-modal__image"
          />
        </div>
        <div className="detail-modal__details">
          <div className="detail-modal__detail">
            <CalendarDays className="detail-modal__detail-icon" />
            <span>{item.date}</span>
          </div>
          <div className="detail-modal__detail">
            <MapPin className="detail-modal__detail-icon" />
            <span>{item.location}</span>
          </div>
        </div>
        <div className="detail-modal__content">
          <p dangerouslySetInnerHTML={{ __html: item?.description }}></p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
