import React, { useState } from "react";
import { PulseLoader } from "react-spinners";

const Loading = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#FC4747");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <div className="py-3 mx-4">
      <PulseLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
