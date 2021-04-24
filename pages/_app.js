import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [buyStatus, setBuyStatus] = useState(0);
  const handleMouse = (e, type) => {
    e.persist();
    if (buyStatus === 0) {
      setData([
        ...data,
        {
          x: parseInt(e.clientX),
          y: parseInt(e.clientY),
          type: type,
          time: Date.now(),
        },
      ]);
      localStorage.setItem("mouseData", JSON.stringify(data));
    }
  };

  const postData = async (mouseData, buyStatus) => {
    const res = await fetch("/api/postRecord", {
      body: JSON.stringify({
        windowX: window.innerWidth,
        windowY: window.innerHeight,
        buyStatus: buyStatus,
        mouseData: mouseData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (buyStatus === 1) {
      localStorage.setItem("mouseData", JSON.stringify([]));
      setData([]);
      setBuyStatus(true);
      localStorage.setItem("basket", JSON.stringify([]));
    }

    const result = await res.json();
  };
  useEffect(() => {
    const mouseData = localStorage.getItem("mouseData");
    mouseData !== null &&
      mouseData !== JSON.stringify([]) &&
      postData(mouseData, 0);
  }, []);

  return (
    <div
      onMouseMove={(e) => handleMouse(e, 0)}
      onClick={(e) => handleMouse(e, 1)}
    >
      <Component {...pageProps} onBuy={() => postData(data, 1)} />
    </div>
  );
}

export default MyApp;
