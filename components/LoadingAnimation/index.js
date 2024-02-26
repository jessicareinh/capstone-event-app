import React, { useEffect, useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

export default function LoadingAnimation() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(5px)",
        zIndex: 9999,
      }}
    >
      {loading && (
        <ClimbingBoxLoader
          size={25}
          color={"black"}
          loading={true}
          speedMultiplier={4}
        />
      )}
    </div>
  );
}
