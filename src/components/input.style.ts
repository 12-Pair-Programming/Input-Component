import styled from "styled-components";

export const LoginBox = styled.div`
  width: 720px;
  height: 180px;
  margin: auto;
  padding: 20px;
`;

export const ContentHeader = styled.div`
  display: flex;
`;

export const ContentInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  align-items: center;
  border: none;
  outline: none;
  background-color: white;
  font-size: 16px;
  color: ${({ $write }) => ($write ? "#373740" : "#9FA6B2")};
  &:hover {
    border: 1px solid "gray";
  }
  &:active,
  &:focus {
    border: 2px solid "gray";
  }
`;

export const ErrorMessage = styled.p`
  color: "red";
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

//ContentInputBox
export const ContentInputBox = styled.div`
  display: flex;
  width: 350px;
  padding: 18px 15px;
  justify-content: center;
  flex-direction: ${({ $error }) => ($error ? "column" : "row")};
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${({ $error }) => ($error ? "#FF5B56" : "#CCD5E3")};
  &:focus {
    border: 1px solid #6d6afe;
  }
  background-color: white;
`;

export const ToggleEye = styled.button`
  display: ${({ $valid }) => ($valid ? "flex" : "none")};
  border: none;
`;
