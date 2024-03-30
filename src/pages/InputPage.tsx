import TextForm from "../components/Input";
import * as A from "./InputPage.style";
import React, { useState } from "react";

function InputPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (id) => {
    setId(id);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  return (
    <A.MainBox>
      <TextForm kind="id" onChange={handleIdChange} />
      <TextForm kind="password" onChange={handlePasswordChange} />
      <TextForm kind="passwordRepeat" passwordCheck={password} />
    </A.MainBox>
  );
}

export default InputPage;
