import { useEffect, useRef, useState } from 'react';
import IconLeft from '@/images/icons/icon-angle-left.svg';
import IconRight from '@/images/icons/icon-angle-right.svg';
import SliderCard from './SliderCard';
import { gsap } from 'gsap';

let sliderPosition = 0;

/**
 * Horizontal slider for mobile devices
 *
 * @returns {*}  {JSX.Element}
 */
const SliderSectionMobile = (): JSX.Element => {
    const sliderArray = [1, 2, 3, 4, 5];
    const sliderContainer = useRef<HTMLDivElement>(null);
    const sliderWrapper = useRef<HTMLDivElement>(null);
    const [sliderIndex, setSliderIndex] = useState<number>(0);
    const [sliderContainerWidth, setSliderContainerWidth] = useState<number>(
        sliderContainer.current?.clientWidth || 820
    );

    /**
     * Slide the card down position
     */
    const slideLeft = () => {
        const containerWidth = sliderContainerWidth || sliderContainer.current?.clientWidth;

        if (sliderIndex >= sliderArray.length - 1) return;
        if (!containerWidth) return;

        sliderPosition -= sliderContainerWidth - 40 + 30;

        gsap.to(sliderWrapper.current, {
            left: sliderPosition,
            duration: 0.5,
            ease: 'steps(8)'
        });

        setSliderIndex(sliderIndex + 1);
    };

    /**
     * Slide the card top position
     */
    const slideRight = () => {
        const containerWidth = sliderContainerWidth || sliderContainer.current?.clientWidth;

        if (sliderIndex < 1) return;
        if (!containerWidth) return;

        sliderPosition += sliderContainerWidth - 40 + 30;

        gsap.to(sliderWrapper.current, {
            left: sliderPosition,
            duration: 0.5,
            ease: 'steps(12)'
        });

        setSliderIndex(sliderIndex - 1);
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
            className="relative grid grid-cols-1 grid-rows-[auto_1fr] gap-8 overflow-hidden px-12 md:mt-12 lg:hidden"
        >
            <div
                ref={sliderWrapper}
                className="relative grid h-full w-full grid-flow-col gap-12"
                style={{
                    gridTemplateColumns: `repeat(${sliderArray.length}, ${sliderContainerWidth - 40}px)`
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
                                (sliderIndex === index && 'h-[0.5rem] bg-black') || 'bg-grey40'
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

export default SliderSectionMobile;
