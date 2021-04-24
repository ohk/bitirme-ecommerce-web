import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [buyStatus, setBuyStatus] = useState(0);
  const handleMouse = (e, type) => {
    e.persist();
    if (buyStatus === false) {
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

  const downloadData = async (mouseData, buyStatus) => {
    const blob = new Blob(
      [
        JSON.stringify({
          buyStatus: buyStatus,
          mouseData: mouseData,
        }),
      ],
      { type: "application/json" }
    );
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = Date.now() + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    if (buyStatus === true) {
      localStorage.setItem("mouseData", JSON.stringify([]));
      setData([]);
      setBuyStatus(true);
      localStorage.setItem("basket", JSON.stringify([]));
    }
  };

  const postData = async (mouseData, buyStatus) => {
    const res = await fetch("/api/postRecord", {
      body: JSON.stringify({
        buyStatus: buyStatus,
        mouseData: mouseData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    alert(result.status);
    // result.user => 'Ada Lovelace'
  };
  useEffect(() => {
    const mouseData = localStorage.getItem("mouseData");
    console.log(mouseData);
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
