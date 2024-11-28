import React from "react";
import { MdMail, MdPhone, MdReceipt } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

function ManagemetLoading({ count = 2 }) {
  const skeletonItems = [...Array(count)];

  return (
    <div className=" d-flex flex-column gap-4 mb-n6 pb-5">
      {skeletonItems?.map((_, index) => (
        <div className="row" key={index}>
          <div className="col-md-3">
            <Skeleton baseColor="#e0e7ff" width="100%" height="220px" />
          </div>
          <div className="col-md-9" data-aos="fade-up">
            <div className="info d-flex flex-column justify-content-between">
              <div>
                <Skeleton
                  baseColor="#e0e7ff"
                  width="450px"
                  height="20px"
                  style={{ marginBottom: "0.5rem" }}
                />
                <Skeleton baseColor="#e0e7ff" width="200px" height="20px" />
              </div>
              <div className="mt-3">
                <div className="d-flex align-items-center gap-3 mb-1 ">
                  <div
                    style={{
                      background: "#dbeafe",
                      color: "#2563eb",
                      width: "30px",
                      height: "30px",
                    }}
                    className="rounded-circle d-flex align-items-center justify-content-center "
                  >
                    <MdPhone size={16} />
                  </div>
                  <Skeleton baseColor="#e0e7ff" width="150px" />
                </div>
                <div className="d-flex align-items-center gap-3 mb-1 ">
                  <div
                    style={{
                      background: "#dbeafe",
                      color: "#2563eb",
                      width: "30px",
                      height: "30px",
                    }}
                    className="rounded-circle d-flex align-items-center justify-content-center "
                  >
                    <MdMail size={16} />
                  </div>
                  <Skeleton baseColor="#e0e7ff" width="150px" />
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div
                    style={{
                      background: "#dbeafe",
                      color: "#2563eb",
                      width: "30px",
                      height: "30px",
                    }}
                    className="rounded-circle d-flex align-items-center justify-content-center "
                  >
                    <MdReceipt size={16} />
                  </div>
                  <Skeleton baseColor="#e0e7ff" width="250px" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManagemetLoading;
