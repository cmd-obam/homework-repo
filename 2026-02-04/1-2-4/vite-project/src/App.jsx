import { useState } from "react";
import Theme from "./components/Theme";
import Profile from "./components/Profile";

function App() {
  const [isDark, setIsDark] = useState(true);

  const [name, setName] = useState("한찬우");
  const [message, setMessage] = useState("오늘도 어렵다");

  const [isEditing, setIsEditing] = useState(false);

  const pageStyle = {
    minHeight: "100vh",
    padding: 20,
    backgroundColor: isDark ? "#111" : "#fff",
    color: isDark ? "#fff" : "#111",
  };

  return (
    <div style={pageStyle}>
      <h2>테마 & 프로필 매니저</h2>

      <Theme isDark={isDark} onToggle={() => setIsDark((p) => !p)} />

      <div style={{ marginTop: 16 }}>
        <Profile
          name={name}
          setName={setName}
          message={message}
          setMessage={setMessage}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      </div>
    </div>
  );
}

export default App;
