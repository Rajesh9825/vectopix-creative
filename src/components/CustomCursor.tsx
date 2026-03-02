import { useEffect, useState } from "react";
import penCursorImg from "@/assets/pen-cursor.png";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, []);

  if (!visible) return null;

  return (
    <img
      src={penCursorImg}
      alt=""
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: pos.x - 8,
        top: pos.y - 8,
        width: 40,
        height: 40,
      }}
    />
  );
};

export default CustomCursor;
