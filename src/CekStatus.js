import { useState, useEffect } from "react";

const CekStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);
  useEffect(() => {
    const setOnline = () => {
      setStatus(true);
    };
    const setOffline = () => {
      setStatus(false);
    };

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.addEventListener("online", setOnline);
      window.addEventListener("offline", setOffline);
    };
  }, []);
  return status;
};

export default CekStatus;
