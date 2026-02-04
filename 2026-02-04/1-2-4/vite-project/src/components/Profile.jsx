import { useState } from "react";

function Profile({
  name,
  setName,
  message,
  setMessage,
  isEditing,
  setIsEditing,
}) {
  const isTooLong = message.length > 20;

  return (
    <div style={{ border: "1px solid #999", padding: 16, borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>프로필</h3>

      {!isEditing ? (
        <div>
          <p>이름: {name}</p>
          <p>
            상태 메시지:{" "}
            <span style={{ color: isTooLong ? "red" : "inherit" }}>
              {message}
            </span>
            {isTooLong && (
              <span style={{ color: "red", marginLeft: 8 }}>(20자 초과!)</span>
            )}
          </p>

          <button onClick={() => setIsEditing(true)}>편집</button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <label>
            이름
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginLeft: 8 }}
            />
          </label>

          <label>
            상태 메시지
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ marginLeft: 8 }}
            />
          </label>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setIsEditing(false)}>저장</button>
            <button onClick={() => setIsEditing(false)}>취소</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
