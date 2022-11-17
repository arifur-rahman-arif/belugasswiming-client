import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { AppContextInterface, AppCtx } from '@/context/Context';
import SwimmingIcon from '@/images/icons/icon-swiming-yellow.svg';
import { useContext, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import TermsSlider from './TermsSlider';

/**
 * Terms section component for home page
 *
 * @returns {*}
 */
const TermsSection = () => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const yellowElement = useRef<HTMLDivElement>(null);
    const imageElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!appCtx?.homePageDoorOpen) return;

        gsap.to(yellowElement.current, {
            height: '15rem',
            duration: 1.5,
            ease: 'steps(12)',
            scrollTrigger: {
                trigger: yellowElement.current,
                start: 'top 85%'
            }
        });
    }, [appCtx?.homePageDoorOpen]);

    return (
        <Section>
            <Container className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-y-12">
                <div className="col-span-2 col-start-1">
                    <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                    <h2 className="mt-12">Classes and Terms</h2>
                    <h3 className="mt-4 text-teal">All Age and levels swimming lessons</h3>
                </div>

                <div className="col-span-2 flex items-start justify-start md:col-span-1">
                    <span ref={yellowElement} className="h-[0] w-[0.8rem] bg-primary"></span>
                    <div ref={imageElement} className="relative w-full overflow-hidden">
                        <img
                            className="h-full w-full"
                            src="/images/section-images/person-getting-out-of-pool.png"
                            alt=""
                        />
                    </div>
                </div>

                <TermsSlider />
            </Container>
        </Section>
    );
};

export default TermsSection;
