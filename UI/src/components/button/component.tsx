import { StyledButton } from "./styles";
import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({ onClick, label, width }) => {
  return (
    <StyledButton $width={width} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
