import { useState } from "react";

function Theme({ isDark, onToggle }) {
  return (
    <button onClick={onToggle}>{isDark ? "라이트모드" : "다크모드"}</button>
  );
}
export default Theme;
