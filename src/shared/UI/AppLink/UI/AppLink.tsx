import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme,
        ...otherProps
    } = props;
    return (
        <Link
            to={to}
            // @ts-ignore
            className={classNames(cls['app-link'], {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
