import '@/styles/globals.scss';
import '../../build/styles/tailwind.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';

/**
 * Main app component for the application
 *
 * @export
 * @param {AppProps} { Component, pageProps }
 * @returns {*}
 */
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    );
}
