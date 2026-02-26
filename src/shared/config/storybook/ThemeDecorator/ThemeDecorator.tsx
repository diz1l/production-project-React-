import React from 'react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

type DecoratorFunction = (theme: Theme) => (Story: React.ComponentType) => React.ReactElement;

export const ThemeDecorator: DecoratorFunction = (theme: Theme) => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
