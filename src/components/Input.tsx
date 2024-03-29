//인풋창

//스타일드 컴포넌트
import React, { useState } from "react";
import * as S from "./input.style";
import EyeOff from "../images/eye-off.svg";
import EyeOn from "../images/eye-on.svg";
import { ChangeEvent } from "react";

// 형태
// handleNameError <= 시스템
// isName <=  boolean

/*<TextForm
  type="card"
  onChange={handleNameError}
  valid={isName}
  onBlur={handleBlur}
  onFocus={() => setIsName(false)}
></TextForm>;
*/

export interface KindOptions {
  placeholder: string;
  type: string;
  error: string;
  isPassword: boolean;
}

export interface Props extends KindOptions {
  kind: string | KindOptions;
  type: string;
  onChange: ChangeEvent;
  onBlur: Event;
  valid: Function;
  onFocus: Event;
}

// function isValid({ inputs }: { inputs?: any }) {
//   return !!inputs;
// }

const TextForm = ({ type, onChange, onBlur, valid, onFocus, kind }: Props) => {
  //이쪽이 타입을 받아서 파라미터 설정하는것
  const [isActive, setIsActive] = useState(false);
  const [isValue, setIsValue] = useState(true);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

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

  //정규식
  const EMAILPATTERN: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  const PASSWORDPATTERN: RegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,30}$/;

  //정규식 반영
  const CHECK = {
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

  //블러시 정규식에 맞는지 체크
  const handleCheck = (e) => {
    if (CHECK[kind].isValidCheck !== e.target.value.trim) {
      setIsValue(false);
    } else if (CHECK[kind] === "passwordRepeat") {
      if (password.trim === e.target.value.trim) {
        setIsValue(false);
      } else {
        setIsValue(true);
      }
    } else {
      setIsValue(true);
    }
  };

  // 온체인지시 값 적용
  const onChangeValue = (e) => {
    kind === "id" && setId(e.target.value);
    kind === "password" && setPassword(e.target.value);
  };

  function isPasswordType(types) {
    return types === "password"; // type이 password면 true
  }

  const handleClick = () => {
    setIsActive(!isActive);
  };

  function passwordToggle() {
    if (isPassword) {
      if (!!isActive) {
        S.ContentInput.type = "text";
      } else {
        S.ContentInput.type = "password";
      }
    }
  }

  return (
    <S.LoginBox>
      <S.ContentHeader>
        {content[kind]?.id?.password?.passwordRepeat.title}
      </S.ContentHeader>
      <S.ContentInputBox>
        <S.ContentInput
          placeholder={content[kind].placeholder}
          type={content[kind].type}
          // onChange={onChangeValue}
          //$valid={isValid(onChange)}
          //abc={!content[kind].isPassword || passwordToggle} // isPassword가 true면 passwordToggle, isPassword가 false면 abc가 true 호출

          onBlur={handleCheck}
          // onFocus={onFocus}
        ></S.ContentInput>
        {kind !== "id" && (
          <S.ToggleEye onClick={handleClick} $valid={isPasswordType}>
            {isActive ? <EyeOn /> : <EyeOff />}
          </S.ToggleEye>
        )}
      </S.ContentInputBox>
      {/* <S.ContentInputBox $error={isValue} $write={content[kind].error} /> */}
      <S.ErrorMessage $valid={isValue}>{content[kind].error}</S.ErrorMessage>
    </S.LoginBox>
  );
};

export default TextForm;

/*

$error={isValue} $write={content[kind].error}
function toggleEyeImage() {
  if (myInputPassword.type === 'text') {
    myInputPassword.type = 'password';
    eyeOn.style.display = 'none';
    eyeOff.style.display = 'block';
  } else {
    myInputPassword.type = 'text';
    eyeOn.style.display = 'block';
    eyeOff.style.display = 'none';
  }
}
*/
