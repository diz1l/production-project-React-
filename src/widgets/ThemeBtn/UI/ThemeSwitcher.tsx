import { classNames } from 'shared/lib';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import { ButtonTheme } from 'shared/UI/Button/Ui/ButtonEl';
import { ButtonEl } from 'shared/UI/Button';

interface ThemeBtnProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeBtnProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <ButtonEl
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? 'Dark' : 'Light'}
        </ButtonEl>
    );
}
