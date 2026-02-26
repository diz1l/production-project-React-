import { screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/tests';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('should render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('toggle-button');
        expect(toggleBtn).toBeInTheDocument();
        toggleBtn.click();
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        toggleBtn.click();
        expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
    });
});
