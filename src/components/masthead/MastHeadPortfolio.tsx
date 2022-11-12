import { useContext, useEffect, useRef } from 'react';
import { Container } from '../container';
import { gsap } from 'gsap';
import { AppContextInterface, AppCtx } from '../../context/Context';

let animationStarted = false;

/**
 * Masthead section of portfolio home page
 *
 * @returns {*}  {JSX.Element}
 */
const MastHeadPortfolio = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const boxElementsParent = useRef<HTMLDivElement>(null);
    const query = gsap.utils.selector(boxElementsParent);

    /**
     * Animate masthead boxed based on screen size and window resize event
     *
     */
    const animateBoxes = () => {
        const windowWidth: number = window.innerWidth;

        if (windowWidth > 1280 && !animationStarted && appCtx?.homePageDoorOpen) {
            animationStarted = true;

            setTimeout(() => {
                gsap.to(query('div'), {
                    duration: 1,
                    transform: 'translateY(-100%)',
                    stagger: 0.5,
                    ease: 'steps(8)'
                });
            }, 1000);
        }

        if (windowWidth < 1280 && animationStarted) {
            gsap.to(query('div'), {
                duration: 1,
                transform: 'translateY(0%)',
                stagger: 0.5,
                ease: 'steps(8)'
            });
        }
    };

    useEffect(() => {
        animateBoxes();

        window.addEventListener('resize', () => {
            animateBoxes();
        });
    }, [appCtx?.homePageDoorOpen]);

    return (
        <>
            <div className="masthead w-full overflow-hidden bg-[url('/images/masthead/masthead-portfolio-bg.png')] bg-cover bg-no-repeat md:absolute md:h-[75rem] md:-translate-y-[13rem] md:pt-[13rem]">
                <Container className="relative h-full pt-[7.3rem]">
                    <img src="/images/logos/your-swimright-journey.svg" alt="Your swimright journey starts here" />

                    <div
                        ref={boxElementsParent}
                        className="mt-20 grid w-full grid-cols-2 md:absolute md:right-0 md:bottom-0 md:-z-[1] md:mt-0 md:mr-8 md:max-w-[35rem] lg:max-w-[50rem] xl:z-auto xl:mr-0 xl:max-w-[88.8rem] xl:translate-y-full xl:grid-cols-4"
                    >
                        <div className="grid h-[14rem] place-items-center bg-teal py-[4.6rem] px-8">
                            <p className="max-w-[16rem] text-left text-[calc(2vmin_+_0.5rem)] font-bold font-extrabold leading-[2.4rem] text-white sm:text-[2rem]">
                                SWIMRIGHT AT HOME
                            </p>
                        </div>
                        <div className="grid h-[14rem] place-items-center bg-red py-[4.6rem] px-8">
                            <p className="max-w-[16rem] text-left text-[calc(2vmin_+_0.5rem)] font-bold font-extrabold leading-[2.4rem] text-white sm:text-[2rem]">
                                SWIMRIGHT AT FULHAM
                            </p>
                        </div>
                        <div className="grid h-[14rem] place-items-center bg-primary py-[4.6rem] px-8">
                            <p className="max-w-[16rem] text-left text-[calc(2vmin_+_0.5rem)] font-bold font-extrabold leading-[2.4rem] text-secondary sm:text-[2rem]">
                                SWIMRIGHT AT HOLLAND PARK
                            </p>
                        </div>
                        <div className="grid h-[14rem] place-items-center bg-indigo py-[4.6rem] px-8">
                            <p className="max-w-[16rem] text-left text-[calc(2vmin_+_0.5rem)] font-bold font-extrabold leading-[2.4rem] text-white sm:text-[2rem]">
                                SWIMRIGHT AT MAIDE VALE
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="pointer-events-none invisible w-full md:h-[calc(75rem_-_13rem)]"></div>
        </>
    );
};
export default MastHeadPortfolio;
