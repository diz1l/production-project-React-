import { classNames } from "@/shared/lib";
import classes from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  ERROR = "error",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const ButtonEl: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    type = "button",
    ...otherProps
  } = props;

  return (
    <button
      type={type}
      className={classNames(classes.button, {}, [className, theme ? classes[theme] : ""]) }
      {...otherProps}
    >
      {children}
    </button>
  );
};
