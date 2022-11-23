import IconTop from '@/images/icons/icon-angle-top.svg';
import IconDown from '@/images/icons/icon-angle-down.svg';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SliderCard from './SliderCard';

interface PropInterface {
    sliders: JSX.Element[];
    minMaxHeight?: string;
}

let sliderPosition = 0;
let activeIndexes = [0, 1];

/**
 * Horizontal slider component for the application
 *
 * @param {PropInterface} { sliders }
 * @returns {*}  {JSX.Element}
 */
const HorizontalSlider = ({ sliders, minMaxHeight }: PropInterface): JSX.Element => {
    const sliderContainer = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const [sliderContainerHeight, setSliderContainerHeight] = useState<number>(
        sliderContainer.current?.clientHeight || 800
    );

    /**
     * Slide the card down position
     */
    const slideDown = () => {
        const containerWidth = sliderContainerHeight || sliderContainer.current?.clientHeight;

        if (sliderIndex >= sliders.length - 2) return;
        if (!containerWidth) return;

        sliderPosition -= containerWidth / 2 + 30;

        gsap.to(sliderWrapper.current, {
            top: sliderPosition,
            duration: 0.5,
            ease: 'steps(8)'
        });

        setSliderIndex(sliderIndex + 1);

        // Calculate the current 2 slide active indexes
        activeIndexes = [...activeIndexes.map((value) => value + 1)];
    };

    /**
     * Slide the card top position
     */
    const slideUp = () => {
        const containerWidth = sliderContainerHeight || sliderContainer.current?.clientHeight;

        if (sliderIndex < 1) return;
        if (!containerWidth) return;

        sliderPosition += containerWidth / 2 + 30;

        gsap.to(sliderWrapper.current, {
            top: sliderPosition,
            duration: 0.5,
            ease: 'steps(12)'
        });

        setSliderIndex(sliderIndex - 1);

        // Calculate the current 2 slide active indexes
        activeIndexes = [...activeIndexes.map((value) => value - 1)];
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSliderContainerHeight(sliderContainer.current?.clientHeight || 800);
        });

        setSliderContainerHeight(sliderContainer.current?.clientHeight || 800);
    }, []);

    return (
        <div
            ref={sliderContainer}
            className={`relative grid h-full ${
                minMaxHeight || 'max-h-[89rem] md:min-h-[87rem]'
            } min-h-[80rem] grid-cols-[1fr_auto] gap-4 overflow-hidden  md:gap-12 md:pl-12 xl:gap-[7rem]`}
        >
            <div
                ref={sliderWrapper}
                className="relative grid h-auto w-full grid-cols-1 gap-12"
                style={{
                    gridTemplateRows: `repeat(${sliders.length}, ${sliderContainerHeight / 2 - 25}px)`
                }}
            >
                {sliders.map((item, index) => (
                    <SliderCard key={index} children={sliders[index]} />
                ))}
            </div>

            <div className="min-w-[3rem] md:min-w-[1rem]">
                <div className="absolute top-2/4 right-0 z-[2] flex -translate-y-2/4 flex-col items-center justify-center gap-[1.5rem]">
                    {sliders.length <= 2 ? (
                        <></>
                    ) : (
                        <span
                            onClick={slideUp}
                            className="cursor-pointer p-4 transition-all hover:scale-[1.3] hover:bg-grey20"
                        >
                            <IconTop />
                        </span>
                    )}

                    <span className="text-[1.6rem] font-bold leading-[1.8rem] text-black">01</span>

                    <div className="flex flex-col items-center justify-center gap-4">
                        {sliders.map((item, index) => (
                            <div
                                key={index}
                                className={`h-[2rem] w-[0.4rem] transition-all duration-500 ${
                                    (activeIndexes.includes(index) && 'w-[0.5rem] bg-black') || 'bg-grey40'
                                }`}
                            ></div>
                        ))}
                    </div>

                    <span className="text-[1.6rem] font-bold leading-[1.8rem] text-black">
                        {sliders.length.toString().padStart(2, '0')}
                    </span>

                    {sliders.length <= 2 ? (
                        <></>
                    ) : (
                        <span
                            onClick={slideDown}
                            className="cursor-pointer p-4 transition-all hover:scale-[1.3] hover:bg-grey20"
                        >
                            <IconDown />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HorizontalSlider;
