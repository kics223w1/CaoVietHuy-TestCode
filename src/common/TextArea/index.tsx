import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({
  name,
  placeholder,
  value,
  readOnly = false,
  onChange,
  t,
}: InputProps & { readOnly?: boolean }) => (
  <StyledContainer>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledTextArea
      placeholder={t(placeholder)}
      id={name}
      name={name}
      value={value || ""}
      onChange={onChange}
      readOnly={readOnly}
    />
  </StyledContainer>
);
export default withTranslation()(TextArea);
