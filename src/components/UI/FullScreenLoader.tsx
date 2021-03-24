import React from "react";
import { CircularProgress } from "@material-ui/core";

function FullScreenLoader() {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size="5rem" color="secondary" />
    </div>
  );
}

export default FullScreenLoader;
