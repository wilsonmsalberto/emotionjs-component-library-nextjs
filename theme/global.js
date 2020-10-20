import { css } from '@emotion/core';
import normalize from 'emotion-normalize';

export default css`
    ${normalize}

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        font-size: 62.5%;
    }
`;
