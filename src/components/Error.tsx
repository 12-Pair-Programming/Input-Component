import * as S from "./input.style";
import { useState, useEffect } from "react";

interface Props {
  kind: string;
  text: string;
}

const Error = ({ kind, text }: Props) => {
  const [errorText, setErrorText] = useState("");

  const errorTexts = {
    id: {
      errorNone: "이메일을 입력해주세요.",
      errorGrammar: "이메일 형식이 아닙니다.",
    },
    password: {
      errorNone: "비밀번호를 입력해주세요.",
      errorGrammar: "비밀번호는 영문과 숫자를 조합한 8자 이상을 입력해주세요.",
    },
    passwordRepeat: {
      errorNone: "비밀번호 확인을 입력해주세요.",
      errorGrammar2: "비밀번호가 일치하지 않습니다.",
    },
  };

  const handleErrorText = () => {
    setErrorText(errorTexts[kind][text]); // kind와 text props를 이용하여 동적으로 에러 텍스트 설정
  };

  // Error 컴포넌트가 마운트될 때 에러 텍스트 설정
  useEffect(() => {
    handleErrorText();
  }, [kind, text]);

  return (
    <>
      <S.ErrorMessage>{errorText}</S.ErrorMessage>
    </>
  );
};

export default Error;
