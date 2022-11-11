import { Container } from '../container';
import YellowPin from '@/images/icons/icon-pin-head-left-yellow.svg';

/**
 * Masthead component
 *
 * @returns {*}
 */
const MastHead = () => {
    return (
        <div className="relative w-full md:h-[75rem]">
            <Container className="grid h-full grid-cols-1 md:grid-cols-2">
                <div className="bg-[url('/images/masthead/masthead-home-bg.png')] bg-cover bg-no-repeat md:mt-32 md:bg-none">
                    <h1 className="mt-12 text-teal">Private swimming lessons</h1>

                    <h2 className="hidden">SwimRight</h2>

                    <img src="/images/logos/swimright.svg" alt="swimright" />

                    <p className="text-leftt w-full max-w-[29.9rem] pt-8 text-white md:text-secondary">
                        Become more comfortable in the water with our private swimming instructors.
                    </p>

                    <ul className="mt-12 flex flex-col items-start justify-start gap-12 md:mt-[6.6rem]">
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
                    </ul>
                </div>

                <div className="bg-cover bg-no-repeat md:absolute md:left-2/4 md:-z-10 md:mt-[-13rem] md:h-[calc(100%_+_13rem)] md:w-2/4 md:bg-[url('/images/masthead/masthead-home-bg.png')] md:bg-center">
                    {/* <h3>IF YOU WANT TO SWIMRIGHT ENTER HERE</h3> */}
                </div>
            </Container>
        </div>
    );
};

export default MastHead;
