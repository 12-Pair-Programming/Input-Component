import TextForm from "../components/Input";
import * as A from "./InputPage.style";
import React, { useState } from "react";

function InputPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <A.MainBox>
      <TextForm kind="id" onChange={setId} />
      <TextForm kind="password" onChange={setPassword} />
      <TextForm kind="passwordRepeat" passwordCheck={password} />
    </A.MainBox>
  );
}

export default InputPage;
