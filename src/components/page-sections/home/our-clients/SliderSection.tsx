import { useEffect, useRef, useState } from 'react';

import IconLeft from '@/images/icons/icon-angle-left.svg';
import IconRight from '@/images/icons/icon-angle-right.svg';
import SliderCard from './SliderCard';
import { gsap } from 'gsap';

let sliderPosition = 0;
let activeIndexes = [0, 1];

/**
 * Horizontal slider component
 *
 * @returns {*}  {JSX.Element}
 */
const SliderSection = (): JSX.Element => {
    const sliderArray = [1, 2, 3, 4];
    const sliderContainer = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const [sliderContainerWidth, setSliderContainerWidth] = useState<number>(
        sliderContainer.current?.clientWidth || 820
    );
    const [sliderReachedEndPosition, setSliderReachedEndPosition] = useState<boolean>(false);

    /**
     * Slide the card down position
     */
    const slideLeft = () => {
        const containerWidth = sliderContainerWidth || sliderContainer.current?.clientWidth;

        if (sliderIndex >= sliderArray.length - 2) return;
        if (!containerWidth) return;

        if (sliderArray.length - sliderIndex == 3) {
            sliderPosition -= containerWidth / 1.5;
            setSliderReachedEndPosition(true);
        } else {
            sliderPosition -= containerWidth / 2 + 30;
        }

        gsap.to(sliderWrapper.current, {
            left: sliderPosition,
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
    const slideRight = () => {
        const containerWidth = sliderContainerWidth || sliderContainer.current?.clientWidth;

        if (sliderIndex < 1) return;
        if (!containerWidth) return;

        if (sliderIndex == 1 && sliderReachedEndPosition) {
            sliderPosition += containerWidth / 1.5;
            setSliderReachedEndPosition(false);
        } else {
            sliderPosition += containerWidth / 2 + 30;
        }

        gsap.to(sliderWrapper.current, {
            left: sliderPosition,
            duration: 0.5,
            ease: 'steps(12)'
        });

        setSliderIndex(sliderIndex - 1);

        // Calculate the current 2 slide active indexes
        activeIndexes = [...activeIndexes.map((value) => value - 1)];
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSliderContainerWidth(sliderContainer.current?.clientWidth || 820);
        });

        setSliderContainerWidth(sliderContainer.current?.clientWidth || 820);
    }, []);
    return (
        <div
            ref={sliderContainer}
            className="relative hidden grid-cols-1 grid-rows-[auto_1fr] gap-8 overflow-hidden md:mt-12 md:pl-20 lg:grid xl:pl-40"
        >
            <div
                ref={sliderWrapper}
                className="relative grid h-full w-full grid-flow-col gap-12"
                style={{
                    gridTemplateColumns: `repeat(${sliderArray.length}, ${sliderContainerWidth / 2 - 15}px)`
                }}
            >
                {sliderArray.map((item, index) => (
                    <SliderCard key={index} index={index} />
                ))}
            </div>

            <div className="flex items-center justify-center gap-[1.5rem]">
                <span
                    onClick={slideRight}
                    className="cursor-pointer p-4 transition-all hover:scale-[1.3] hover:bg-grey20"
                >
                    <IconLeft />
                </span>

                <span className="text-[1.6rem] font-bold leading-[1.8rem] text-black">01</span>

                <div className="flex items-center justify-center gap-4">
                    {sliderArray.map((item, index) => (
                        <div
                            key={index}
                            className={`h-[0.4rem] w-[2rem] transition-all duration-500 ${
                                (activeIndexes.includes(index) && 'h-[0.5rem] bg-black') || 'bg-grey40'
                            }`}
                        ></div>
                    ))}
                </div>

                <span className="text-[1.6rem] font-bold leading-[1.8rem] text-black">
                    {sliderArray.length.toString().padStart(2, '0')}
                </span>

                <span
                    onClick={slideLeft}
                    className="cursor-pointer p-4 transition-all hover:scale-[1.3] hover:bg-grey20"
                >
                    <IconRight />
                </span>
            </div>
        </div>
    );
};

export default SliderSection;
