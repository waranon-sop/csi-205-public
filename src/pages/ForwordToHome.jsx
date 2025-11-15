import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForwardToHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("../home");
  }, [navigate]);
  return (
    <>
      <h2>FORWARD TO HOME PAGE</h2>
    </>
  );
};

export default ForwardToHome;
