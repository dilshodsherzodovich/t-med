import { X, CalendarDays, MapPin } from "lucide-react";
import "./Modal.scss";

function Modal({ item, onClose }) {
  console.log(item);
  return (
    <div className="modal-overlay">
      <div className="detail-modal">
        <button className="detail-modal__close" onClick={onClose}>
          <X />
        </button>
        <h2 className="detail-modal__title">{item.title}</h2>
        <div className="detail-modal__image-container">
          <img
            src={item.image || "/placeholder.svg"}
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
          {item.detailedInfo.split("\n").map((paragraph, index) => (
            <p key={index} className="detail-modal__paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
