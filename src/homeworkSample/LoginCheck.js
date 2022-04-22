import React, { useState } from "react";

function LoginCheck() {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div>
        {login ? <p>Online</p> : <p>Offline</p>}
        <button onClick={() => setLogin(true)}>Giriş Yap</button>
        <button onClick={() => setLogin(false)}>Çıkış Yap</button>
      </div>
    </>
  );
}

export default LoginCheck;
