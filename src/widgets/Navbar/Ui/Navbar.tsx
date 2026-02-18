import { classNames } from "@/shared/lib";
import classes from "./Navbar.module.scss";
import { AppLink } from "@/shared/UI";
import { AppLinkTheme } from "@/shared/UI/AppLink/AppLink";

interface NavbarProps {
  className?: string;
  onToggleTheme?: () => void;
}

export default function Navbar({ className, onToggleTheme }: NavbarProps) {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      {onToggleTheme && (
        <button className={classes.themeBtn} onClick={onToggleTheme}>
          Themes
        </button>
      )}

      <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
        About
      </AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to={"/"}>
        Main
      </AppLink>
    </div>
  );
}
