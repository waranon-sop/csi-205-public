import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center p-4 h-100 ">
      <div className="container p-5 rounded-4 shadow-lg bg-white border border-secondary border-1">
        <h2 className="text-center mb-4 fw-bold text-dark ">Home Page</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div
              className="card shadow-lg border-0 rounded-4 overflow-hidden"
            >
              {/* Body */}
              <div className="card-body bg-white p-5">
                {/* Profile Image */}
                <div className="text-center mb-4">
                  <img
                    src="./image/Profile.png"
                    alt="Profile"
                    className="shadow-lg rounded-3"
                    style={{
                      width: "180px",
                      height: "180px",
                      border: "3px solid #fff",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Info */}
                <div className="row g-3">
                  <div className="col-12">
                    <div className="p-3 border-start border-4 border-primary rounded-3 bg-light d-flex align-items-center gap-3">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-person-fill fs-5"></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-muted d-block fw-500">
                          ชื่อ-นามสกุล
                        </small>
                        <span className="fw-bold text-dark">วรานนท์ โสปรก</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 border-start border-4 border-info rounded-3 bg-light d-flex align-items-center gap-3">
                      <div
                        className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-credit-card-fill fs-5"></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-muted d-block fw-500">
                          รหัสนักศึกษา
                        </small>
                        <span className="fw-bold text-dark">67155008</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 border-start border-4 border-success rounded-3 bg-light d-flex align-items-center gap-3">
                      <div
                        className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-laptop-fill fs-5"></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-muted d-block fw-500">สาขา</small>
                        <span className="fw-bold text-dark">
                          วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 border-start border-4 border-warning rounded-3 bg-light d-flex align-items-center gap-3">
                      <div
                        className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-building-fill fs-5"></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-muted d-block fw-500">คณะ</small>
                        <span className="fw-bold text-dark">
                          เทคโนโลยีสารสนเทศ
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 border-start border-4 border-danger rounded-3 bg-light d-flex align-items-center gap-3">
                      <div
                        className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-mortarboard-fill fs-5"></i>
                      </div>
                      <div className="flex-grow-1">
                        <small className="text-muted d-block fw-500">
                          มหาวิทยาลัย
                        </small>
                        <span className="fw-bold text-dark">
                          มหาวิทยาลัยศรีปทุม
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css"
      />
    </div>
  );
};

export default Home;
