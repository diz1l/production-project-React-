import { classNames } from "@/shared/lib";
import classes from "./Navbar.module.scss";
import { AppLink, ThemeBtn } from "@/shared/UI";
import { AppLinkTheme } from "@/shared/UI/AppLink/UI/AppLink";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <ThemeBtn />
      <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
        About
      </AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
        Main
      </AppLink>
    </div>
  );
}
