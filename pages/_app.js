import React from 'react';

import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

// Components
import { Button } from '@emotion-ui/components';

// Styles
import { Dark as DarkTheme } from '@emotion-ui/themes';

const App = () => {
    return (
        <>
            <Global styles={ DarkTheme.global } />
            <ThemeProvider theme={ DarkTheme }>
                <Button>
                    Test Button
                </Button>
            </ThemeProvider>
        </>
    );
};

export default App;