import React, { useEffect, useRef, useState } from "react";

const Effect1 = () => {
    const ref = useRef(10);
//   console.log(ref.current+2);
//   const [state, setState] = useState(10);

  useEffect(() => {
    console.log("updated");
    ref.current = ref.current + 2;
    // setState((prev) => prev + 2);
  });
  return <div>Effect1</div>;
};

export default Effect1;
