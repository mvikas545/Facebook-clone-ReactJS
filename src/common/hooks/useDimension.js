import { useEffect, useState } from "react";
const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

const useDimension = () => {
  const [dimension, setDimension] = useState(getWindowDimension());
  useEffect(() => {
    const resizeHandler = () => {
      setDimension(getWindowDimension());
    };
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [setDimension]);
  return { width: dimension.width, height: dimension.height };
};
export default useDimension;
