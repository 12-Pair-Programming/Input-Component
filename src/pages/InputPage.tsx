import TextForm, { Props } from "../components/Input";
import * as A from "./InputPage.style";

function InputPage({ type, onChange, onBlur, valid, onFocus }: Props) {
  return (
    <A.MainBox>
      <TextForm
        kind="id"
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        valid={valid}
        onFocus={onFocus}
      />
      <TextForm
        kind="password"
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        valid={valid}
        onFocus={onFocus}
      />
      <TextForm
        kind="passwordRepeat"
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        valid={valid}
        onFocus={onFocus}
      />
    </A.MainBox>
  );
}

export default InputPage;
