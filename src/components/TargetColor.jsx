import { useState } from "react";

export function TargetColor({ targetColor }) {
  const [answered, setAnswered] = useState(0);
  return (
    <div
      data-testid='colorBox'
      className='target-color'
      style={{ backgroundColor: `answered ? ${targetColor} : 'white'` }}
    >
      {answered ? "yooooo" : "Color is Hidden"}
    </div>
  );
}
