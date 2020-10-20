import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';

// Components
import { Button } from '@emotion-ui/components';

// Styles
import { Dark as DarkTheme } from '@emotion-ui/themes';

import globalStyles from '../theme/global';

const App = () => {
    // Theme
    const themeGlobalStyles = {
        ...DarkTheme.globalStyles,
        ...globalStyles,
    };

    return (
        <>
            <Global styles={ themeGlobalStyles } />
            <ThemeProvider theme={ DarkTheme }>
                <Button>
                    Test Button
                </Button>
            </ThemeProvider>
        </>
    );
};

export default App;