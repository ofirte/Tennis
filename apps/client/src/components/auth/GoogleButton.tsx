import { Button } from "@mui/material";
import { FC } from "react";
import GoogleIcon from "../../common/icons/GoogleIcon";

type GoogleButtonProps = {
  label?: string;
  type?: "dark" | "light";
  disabled?: boolean;
  onClick: () => void;
};
const GoogleButton: FC<GoogleButtonProps> = ({
  label,
  type,
  disabled,
  onClick,
}) => {
  return (
    <Button
      startIcon={<GoogleIcon />}
      variant="outlined"
      disabled={disabled}
      onClick={onClick}
      sx={{
        borderRadius: ({ shape }) => shape.borderRadius,
        color: ({ palette }) =>
          type === "dark" ? palette.common.white : palette.text.primary,
      }}
    >
      {label}
    </Button>
  );
};
export default GoogleButton;
