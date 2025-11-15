import { useState } from 'react';

const Temperature = ({ name }) => {
  // เก็บค่า Celsius ไว้
  const [celsius, setCelsius] = useState(25);
  
  // คำนวณ Fahrenheit และ Kelvin
  const fahrenheit = (celsius * 9/5) + 32;
  const kelvin = celsius + 273.15;
  
  return (
    <div 
      className="border border-black border-2 mx-auto rounded-3 p-3 mt-3" 
      style={{ width: "fit-content" }}
    >
      {/* หัวข้อ */}
      <h1 className="text-primary text-center mb-3">{name || "TEMPERATURES"}</h1>
      
      {/* แสดงค่าทั้ง 3 หน่วย */}
      <div className="d-flex justify-content-between align-items-center mb-3 gap-3">
        <div className="badge bg-primary fs-6 p-2">
          {celsius.toFixed(2)} °C
        </div>
        <div className="badge bg-primary fs-6 p-2">
          {fahrenheit.toFixed(2)} °F
        </div>
        <div className="badge bg-primary fs-6 p-2">
          {kelvin.toFixed(2)} °K
        </div>
      </div>
      
      {/* ส่วนปรับค่า */}
      <div className="d-flex gap-3">
        {/* Celsius */}
        <div className="border border-secondary border-2 rounded-3 p-3 bg-secondary-subtle">
          <h2 className="text-center fw-bold fs-5 mb-3">CELSIUS</h2>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <button
              className="btn btn-danger"
              onClick={() => setCelsius(celsius - 1)}
            >
              &minus;
            </button>
            <div className="fs-3 fw-bold" style={{ minWidth: "100px", textAlign: "center" }}>
              {celsius.toFixed(2)}
            </div>
            <button
              className="btn btn-success"
              onClick={() => setCelsius(celsius + 1)}
            >
              +
            </button>
          </div>
        </div>
        
        {/* Fahrenheit */}
        <div className="border border-secondary border-2 rounded-3 p-3 bg-secondary-subtle">
          <h2 className="text-center fw-bold fs-5 mb-3">FAHRENHEIT</h2>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <button
              className="btn btn-danger"
              onClick={() => setCelsius((fahrenheit - 1 - 32) * 5/9)}
            >
              &minus;
            </button>
            <div className="fs-3 fw-bold" style={{ minWidth: "100px", textAlign: "center" }}>
              {fahrenheit.toFixed(2)}
            </div>
            <button
              className="btn btn-success"
              onClick={() => setCelsius((fahrenheit + 1 - 32) * 5/9)}
            >
              +
            </button>
          </div>
        </div>
        
        {/* Kelvin */}
        <div className="border border-secondary border-2 rounded-3 p-3 bg-secondary-subtle">
          <h2 className="text-center fw-bold fs-5 mb-3">KELVIN</h2>
          <div className="d-flex justify-content-between align-items-center gap-2">
            <button
              className="btn btn-danger"
              onClick={() => setCelsius(kelvin - 1 - 273.15)}
            >
              &minus;
            </button>
            <div className="fs-3 fw-bold" style={{ minWidth: "100px", textAlign: "center" }}>
              {kelvin.toFixed(2)}
            </div>
            <button
              className="btn btn-success"
              onClick={() => setCelsius(kelvin + 1 - 273.15)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;