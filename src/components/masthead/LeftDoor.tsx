import * as animationData from '@/images/lottie/arrow-down.lottie.json';

import { AppContextInterface, AppCtx } from '@/context/Context';
import Lottie, { Options } from 'react-lottie';
import { useContext, useEffect } from 'react';

/**
 * Left masthead door
 *
 * @returns {*}  {JSX.Element}
 */
const LeftDoor = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);

    const lottieOptions: Options = {
        loop: true,
        autoplay: true,
        animationData: animationData
    };

    /**
     * Open the page door. If its opened already then don't change the state of the door anymore
     */
    const openDoor = () => {
        if (appCtx?.homePageDoorOpen) return;

        appCtx?.setHomePageDoorOpen(true);
        const body = document.querySelector('body');
        body?.classList.remove('overflow-hidden');
        body?.classList.add('overflow-visible');
    };

    useEffect(() => {
        document.querySelector('body')?.classList.add('overflow-hidden');
    }, []);

    return (
        <div className="relative mx-auto mt-36 h-[calc(100%_-_9rem)] w-full bg-white bg-[url('/images/masthead/masthead-door-left.webp')] bg-cover bg-center md:mt-0 md:h-auto">
            <div className="ml-auto h-full w-full md:max-w-[calc(var(--container-width)_/_2)]">
                <div className="h-full bg-[url('/images/masthead/masthead-home-bg.webp')] bg-cover bg-no-repeat px-8 pt-20 md:h-auto md:bg-none md:pt-[21rem] xl:px-0">
                    <h1 className="text-teal">Private swimming lessons</h1>

                    <img src="/images/logos/swimright.svg" alt="swimright" className="mt-8" width={525} height={58} />
                    {/* <img src="/images/logos/swimright-white.svg" alt="swimright" className="mt-8 md:hidden" /> */}

                    <p className="mt-12 w-full max-w-[37rem] text-left text-white">
                        There’s nothing more practical and convenient than having a swim session at home, in your pool,
                        with a private swimming instructor.
                    </p>

                    {/* <ul id="Hello" className="mt-12 flex flex-col items-start justify-start gap-12 md:mt-[6.6rem]">
                        <li className="grid grid-cols-[1fr_auto] items-center justify-items-start gap-[1.5rem]">
                            <YellowPin className="md:max-w-16 block" />
                            <div className="flex flex-wrap items-center justify-start gap-8">
                                <p className="relative h-full text-[1.6rem] font-bold uppercase leading-8 text-white before:absolute before:right-0 before:top-2/4 before:h-full before:w-[0.3rem] before:-translate-y-2/4 before:translate-x-[calc(100%_+_0.7rem)] before:bg-white before:content-[''] md:leading-[2.4rem] md:text-headingColor md:before:h-[1.7rem] md:before:bg-headingColor">
                                    Children swimming lessons
                                </p>
                                <span className="text-[1.4rem] font-bold uppercase leading-[1.6rem] text-white md:text-secondary">
                                    At Ascot
                                </span>
                            </div>
                        </li>
                        <li className="grid grid-cols-[1fr_auto] items-center justify-items-start gap-[1.5rem]">
                            <YellowPin className="md:max-w-16 block" />
                            <div className="flex flex-wrap items-center justify-start gap-8">
                                <p className="relative h-full text-[1.6rem] font-bold uppercase leading-8 text-white before:absolute before:right-0 before:top-2/4 before:h-full before:w-[0.3rem] before:-translate-y-2/4 before:translate-x-[calc(100%_+_0.7rem)] before:bg-white before:content-[''] md:leading-[2.4rem] md:text-headingColor md:before:h-[1.7rem] md:before:bg-headingColor">
                                    Home Swimming
                                </p>
                                <span className="text-[1.4rem] font-bold uppercase leading-[1.6rem] text-white md:text-secondary">
                                    At your private pool
                                </span>
                            </div>
                        </li>
                        <li className="grid grid-cols-[1fr_auto] items-center justify-items-start gap-[1.5rem]">
                            <YellowPin className="md:max-w-16 block" />
                            <div className="flex flex-wrap items-center justify-start gap-8">
                                <p className="relative h-full text-[1.6rem] font-bold uppercase leading-8 text-white before:absolute before:right-0 before:top-2/4 before:h-full before:w-[0.3rem] before:-translate-y-2/4 before:translate-x-[calc(100%_+_0.7rem)] before:bg-white before:content-[''] md:leading-[2.4rem] md:text-headingColor md:before:h-[1.7rem] md:before:bg-headingColor">
                                    Adult swimming lessons
                                </p>
                                <span className="text-[1.4rem] font-bold uppercase leading-[1.6rem] text-white md:text-secondary">
                                    At holland park & Ascot
                                </span>
                            </div>
                        </li>
                    </ul> */}
                    <div className="md:hidden">
                        <Lottie
                            options={lottieOptions}
                            speed={1}
                            title="Enter here"
                            style={{ width: '25x', height: '100px' }}
                        />

                        <button
                            type="button"
                            className={`mx-auto mt-4 block cursor-pointer rounded-[1.5rem] border-2 border-primary bg-transparent py-[1.8rem] px-[2.4rem] text-[1.6rem] font-bold uppercase leading-8 text-primary transition-all hover:bg-primary hover:text-secondary md:text-secondary `}
                            onClick={openDoor}
                        >
                            Enter
                        </button>
                    </div>

                    <div className="absolute top-[40%] left-2/4 z-[1] hidden -translate-x-2/4 md:top-2/4 md:block ">
                        <h5 className="mx-auto mt-20 hidden max-w-[25.4rem] text-center font-medium capitalize text-white md:mt-[7.8rem]  md:block">
                            If you want to swimright enter here
                        </h5>

                        <Lottie
                            options={lottieOptions}
                            speed={1}
                            title="Enter here"
                            style={{ width: '25x', height: '100px', marginTop: '2rem' }}
                        />

                        <button
                            type="button"
                            className={`mx-auto mt-4 block cursor-pointer rounded-[1.5rem] border-2 border-primary bg-transparent py-[1.8rem] px-[2.4rem] text-[1.6rem] font-bold uppercase leading-8 text-primary transition-all hover:bg-primary hover:text-secondary`}
                            onClick={openDoor}
                        >
                            Enter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftDoor;
