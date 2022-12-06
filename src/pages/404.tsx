import Link from 'next/link';
import { NextPage } from 'next';
import Page from '@/components/Page';

/**
 * 404 page of the website
 *
 * @returns {*}  {JSX.Element}
 */
const Page404: NextPage = (): JSX.Element => {
    return (
        <Page title="404">
            <div className="grid h-screen w-full place-items-center content-center px-8">
                <div>
                    <img src="/images/section-images/404.png" alt="404" width={787} height={492} />
                </div>
                <div className="mt-16 flex flex-col items-center justify-start gap-6  md:mt-36">
                    <img alt="Page not found" width={439} height={58} src="/images/logos/logo-page-not-found.svg" />

                    <Link href="/">
                        <button
                            type="button"
                            className={`mt-24 cursor-pointer rounded-[1.5rem] border-2 border-primary bg-transparent py-6 px-[2.4rem] text-[1.4rem] font-bold uppercase leading-8 text-secondary transition-all hover:bg-primary hover:text-secondary md:text-[1.6rem]`}
                        >
                            Back to home
                        </button>
                    </Link>
                </div>
            </div>
        </Page>
    );
};

// @ts-ignore
Page404.layout = 'noNavigationLayout';
export default Page404;
