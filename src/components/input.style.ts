import styled from "styled-components";

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 350px;
  margin: auto;
  padding: 20px;
`;

export const ContentHeader = styled.div`
  display: flex;
`;

export const ContentInput = styled.input`
  display: flex;
  gap: 6px;
  width: 350px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 18px 15px;
  color: ${({ $write }) => ($write ? "#373740" : "#9FA6B2")};
  flex-direction: ${({ $error }) => ($error ? "column" : "row")};
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? "#CCD5E3" : "#FF5B56")};
  &:focus {
    border: 1px solid #6d6afe;
  }
  background-color: white;
  &:hover {
    border: 1px solid "gray";
  }
  &:active,
  &:focus {
    border: 2px solid "gray";
  }
  color: #9fa6b2;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const InputBox = styled.div`
  position: relative;
`;

//ContentInputBox
export const ContentInputBox = styled.div``;

export const ToggleEye = styled.button`
  border: none;
  position: absolute;
  transform: translate(0, -50%);
  top: 50%;
  right: -7%;
`;
