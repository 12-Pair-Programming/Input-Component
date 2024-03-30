import React, { ChangeEvent, useState } from "react";
import * as S from "./input.style";
import EyeOff from "../images/eye-off.svg";
import EyeOn from "../images/eye-on.svg";
import Error from "./Error";

export interface KindOptions {
  placeholder?: string;
  type?: string;
  error?: string;
  isPassword?: boolean;
}

export interface Props extends KindOptions {
  kind?: string;
  type?: string;
  onChange: (value: string | number) => void;
  onBlur?: Event;
  passwordCheck?: string;
  $error?: boolean;
}

const TextForm = ({ kind, onChange, passwordCheck, $error }: Props) => {
  const content = {
    id: {
      placeholder: "아이디를 입력해주세요.",
      type: "text",
      error: "아이디가 없습니다.",
      isPassword: false,
    },
    password: {
      placeholder: "비밀번호를 입력해주세요.",
      type: "password",
      error: "비밀번호가 없습니다.",
      isPassword: true,
    },
    passwordRepeat: {
      placeholder: "비밀번호를 확인해주세요.",
      type: "password",
      error: "비밀번호가 일치하지 않습니다.",
      isPassword: true,
    },
  };

  //이쪽이 타입을 받아서 파라미터 설정하는것
  const [isActive, setIsActive] = useState(false);
  const [isType, setIsType] = useState(content[kind].type);
  const [word, setWord] = useState("");
  const [isError, setIsError] = useState(true);
  const [errorType, setErrorType] = useState("");

  //정규식
  const EMAILPATTERN: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const PASSWORDPATTERN: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/;

  //정규식 타입
  type Check = {
    [key: string]: {
      isValidCheck: RegExp;
    };
  };

  //블러 시 정규식에 맞는지 체크
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    if (word.trim() !== "") {
      if (kind === "passwordRepeat") {
        if (passwordCheck === word) {
          setIsError(true);
        } else {
          setIsError(false);
          setErrorType("errorGrammar2");
        }
      } else {
        if (CHECK[kind].isValidCheck.test(word.trim())) {
          setIsError(true);
        } else {
          setIsError(false);
          setErrorType("errorGrammar");
        }
      }
    } else {
      setIsError(false);
      setErrorType("errorNone");
    }
  };

  const CHECK: Check = {
    id: {
      isValidCheck: EMAILPATTERN,
    },
    password: {
      isValidCheck: PASSWORDPATTERN,
    },
    passwordRepeat: {
      isValidCheck: PASSWORDPATTERN,
    },
  };

  // 온체인지시 값 적용
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setWord(value);
    onChange(value);
  };

  const handleClick = () => {
    isType === "password" ? setIsType("text") : setIsType("password");
    setIsActive(!isActive);
  };

  return (
    <S.LoginBox>
      <S.ContentHeader>
        {content[kind]?.id?.password?.passwordRepeat.title}
      </S.ContentHeader>
      <S.InputBox>
        <S.ContentInput
          placeholder={content[kind].placeholder}
          type={isType}
          onBlur={handleCheck}
          onChange={onChangeValue}
          $error={isError}
        ></S.ContentInput>
        {kind !== "id" && (
          <S.ToggleEye onClick={handleClick}>
            {isActive ? <EyeOn /> : <EyeOff />}
          </S.ToggleEye>
        )}
      </S.InputBox>
      {isError === false && <Error kind={kind} text={errorType} />}
    </S.LoginBox>
  );
};

export default TextForm;
