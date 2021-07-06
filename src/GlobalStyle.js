import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, 
    *::after, 
    *::before {
        box-sizing: border-box;
    }
     :root {
        --accent: #122a58;
        --white: #ffffff;
        --black: #211103;
        --grey: #a9a9a9;
        --grey-light: #c0c0c0;
        --grey-lightest: #d3d3d3;
        --grey-dark: #6d6d6d;
        --success: rgb(92, 184, 92);
        --danger: rgb(223, 71, 89);

        --ff-primary:'Roboto', sans-serif;
        
        --fs-300: 1rem;
        --fs-350: 1.125rem;
        --fs-400: 1.25rem;
        --fs-500: 1.375rem;
        --fs-550: 1.5rem;
        --fs-600: 1.75rem;
        --fs-700: 2rem;
        --fs-800: 2.5rem;
        --fs-850: 3rem;
        --fs-900: 5rem;
    }

    h1, h2, h3 {
        line-height: 1.2;
    }

    h1, h2, h3, p {
        margin: 0 auto;
    }

    body {
        font-family: var(--ff-primary); 
        font-size: var(--fs-350); 
        line-height: 1.5;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;  
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
    `;
