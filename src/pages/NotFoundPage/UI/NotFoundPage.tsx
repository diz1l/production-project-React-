import React from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface PageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: PageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};
