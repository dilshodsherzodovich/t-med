const VisionConnectCard = () => {
  return (
    <div className="card border-0 h-100 ">
      <div className="card-header text-white">
        <h2 className="h4 mb-0">T-MED VISION CONNECT</h2>
      </div>
      <div className="card-body d-flex flex-column">
        <div
          className="image-box position-relative"
          style={{ height: "280px" }}
        >
          <img
            src="https://nsu-railway.uz/_next/static/media/visionConnect.a9a35b2e.png"
            alt="Video conference with doctors"
            // className="img-fluid h-100 w-100 object-fit-contain bg-light rounded p-2"
          />
        </div>
        <div className="mt-auto">
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Foydalanuvchi nomi"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Vision connect ID"
            />
          </div>
          <button className="btn btn-primary w-100">
            {"VC konferentsiyasiga qo'shilish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisionConnectCard;
