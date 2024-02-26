import React, { useEffect } from "react";
import { ClimbingBoxLoader } from "react-spinners";

export default function LoadingAnimation({ duration, onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

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
        backgroundColor: "white",
        backdropFilter: "blur(5px)",
        zIndex: 9999,
      }}
    >
      <ClimbingBoxLoader
        size={25}
        color={"#d1c4e9"}
        loading={true}
        speedMultiplier={4}
      />
    </div>
  );
}
