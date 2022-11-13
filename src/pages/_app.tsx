import '@/styles/globals.scss';
import '../../build/styles/tailwind.css';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';
import Context from '../context/Context';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
            <Context>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Context>
        </>
    );
}
