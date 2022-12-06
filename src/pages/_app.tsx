import '@/styles/globals.scss';
import '../../build/styles/tailwind.css';

import type { AppProps } from 'next/app';
import Context from '../context/Context';
import Head from 'next/head';
import MainLayout from '../layouts/MainLayout';
import NoNavigationLayout from '../layouts/NoNavigationLayout';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap';
import { useEffect } from 'react';

/**
 * Main app component for the application
 *
 * @export
 * @param {AppProps} { Component, pageProps }
 * @returns {*}  {JSX.Element}
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
    const navLayouts = {
        mainLayout: MainLayout,
        noNavigationLayout: NoNavigationLayout
    };

    // @ts-ignore
    const layout: any = Component.layout ? Component.layout : 'mainLayout';
    // @ts-ignore
    const PageLayout = navLayouts[layout] || ((children) => <>{children}</>);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
    }, []);

    return (
        <>
            <Head>
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Head>
            <Context>
                <PageLayout>
                    <Component {...pageProps} />
                </PageLayout>
            </Context>
        </>
    );
}
