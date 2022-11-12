import YellowPin from '@/images/icons/icon-pin-head-left-yellow.svg';

/**
 * Left masthead door
 *
 * @returns {*}  {JSX.Element}
 */
const LeftDoor = (): JSX.Element => {
    return (
        <div className="mx-auto mt-40 h-[calc(100%_-_10rem)] w-full max-w-[var(--container-width)] bg-white md:mt-0 md:h-auto">
            <div className="ml-auto h-full w-full md:max-w-[calc(var(--container-width)_/_2)]">
                <div className="h-full bg-[url('/images/masthead/masthead-home-bg.png')] bg-cover bg-no-repeat px-8 pt-20 md:h-auto md:bg-none md:pt-[21rem] xl:px-0">
                    <h1 className="text-teal">Private swimming lessons</h1>

                    <h2 className="hidden">SwimRight</h2>

                    <img src="/images/logos/swimright.svg" alt="swimright" />

                    <p className=" w-full max-w-[31rem] pt-8 text-left text-white md:text-secondary">
                        Become more comfortable in the water with our private swimming instructors.
                    </p>

                    <ul id="Hello" className="mt-12 flex flex-col items-start justify-start gap-12 md:mt-[6.6rem]">
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
            </div>
        </div>
    );
};

export default LeftDoor;
