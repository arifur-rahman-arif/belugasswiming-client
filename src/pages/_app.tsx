import '@/styles/globals.scss';
import '../../build/styles/tailwind.css';

import type { AppProps } from 'next/app';
import Context from '../context/Context';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import { useEffect } from 'react';

/**
 * Main app component for the application
 *
 * @export
 * @param {AppProps} { Component, pageProps }
 * @returns {*}
 */
export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
    }, []);

    return (
        <>
            <Head>
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Head>
            <Context>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Context>
        </>
    );
}
