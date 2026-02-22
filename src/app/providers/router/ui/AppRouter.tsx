import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import cls from './AppRouter.module.scss';

function AppRouter() {
    return (
        <div className={cls['page-wrapper']}>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {Object.entries(routeConfig).map(([routeKey, { path, element }]) => (
                        <Route key={routeKey} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
}

export default AppRouter;
