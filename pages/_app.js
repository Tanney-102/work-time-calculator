import React from 'react';
import Head from 'next/head';

import GlobalStyles from '../style/Globalstyles';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Work Day Calculator</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.3/xlsx.full.min.js"></script>
            </Head>
            <GlobalStyles />
            <Component />
        </>
    );
};

export default App;