import { classNames } from 'shared/lib';
import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.Loader, {}, [className])}>
        <div className={cls.loader} />
    </div>
);
