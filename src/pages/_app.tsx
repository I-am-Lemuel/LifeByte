import '@/styles/globals.css';
import { theme } from '@/utils/theme';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
    display: 'swap',
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <div className={roboto.className}>
                <Component {...pageProps} />
            </div>
        </ThemeProvider>
    );
}
