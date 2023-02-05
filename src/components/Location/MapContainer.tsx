import { Container } from '@/components/container';
import IconSwimming from '@/icons/icon-swimming-black-single-wave.svg';
import IconSwimmingDoubleWave from '@/icons/icon-swimming-black.svg';
import { MouseEvent } from 'react';
import SwimmingIcon from '@/icons/icon-swiming-yellow.svg';
import { forwardRef } from 'react';

interface MapContainerPropsInterface {
    toggleMapLocation: (e: MouseEvent<HTMLSpanElement>, item: string) => void;
    closeMapLocation: (e: MouseEvent<HTMLSpanElement>, item: string) => void;
}

/**
 * Map container for the map section
 *
 * @param {MapContainerPropsInterface} { toggleMapLocation, closeMapLocation }
 * @param {*} ref
 * @return {*}
 */
const MapContainer = forwardRef(({ toggleMapLocation, closeMapLocation }: MapContainerPropsInterface, ref: any) => {
    return (
        <Container className="grid grid-cols-1 items-center bg-[url('/images/section-images/map.png')] bg-contain bg-bottom bg-no-repeat sm:bg-[90%_auto] md:grid-cols-2 lg:bg-[70%_auto] xl:bg-none">
            <div>
                <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                <h2 className="mt-12 max-w-[38.8rem]">Locations</h2>
                <h3 className="mt-4 text-teal">We bring it to your home</h3>
            </div>
            <div className="grid place-items-center">
                <img
                    className="object-cover"
                    src="/images/section-images/black-man-with-glass.webp"
                    alt=""
                    width={529}
                    height={566}
                />
            </div>

            <div
                ref={ref?.mapContainer}
                className="relative hidden min-h-[15rem] sm:min-h-[20rem] md:col-span-2 md:col-start-1 xl:block xl:min-h-[33rem]"
            >
                {/* Item 1 */}
                <div className="location-pin absolute top-[30%] left-[10%] z-[2] grid max-w-[calc(10vmin_+_6rem)] -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0 md:max-w-none">
                    <IconSwimming />
                    <span className="uppercase">
                        SwimRight <br />
                        at Ascot
                    </span>
                    <span
                        className="relative col-span-2 justify-self-center"
                        onMouseEnter={(e) => toggleMapLocation(e, 'item-1')}
                        onMouseLeave={(e) => closeMapLocation(e, 'item-1')}
                    >
                        <img
                            src="/images/icons/icon-location-pin-yellow.svg"
                            className="w-full"
                            alt=""
                            width={53}
                            height={82}
                        />
                    </span>

                    {/* Full Location */}
                    <div
                        ref={ref.locationBox1}
                        className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                    >
                        <div className="h-[19rem] w-full">
                            <img
                                src="/images/section-images/location-ascot.webp"
                                alt="Ascot"
                                className="h-full w-full"
                                width={488}
                                height={190}
                            />
                        </div>

                        <div className="grid grid-cols-[1fr_auto] gap-4 px-12">
                            <span>
                                <IconSwimmingDoubleWave />
                            </span>

                            <div className="flex max-w-[31.5rem] flex-col items-start justify-start gap-[3.5rem]">
                                <p className="">At your residence or the swimming pool of your choice</p>
                                <div className="flex items-start justify-start gap-[2.7rem] ">
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img
                                            src="/images/section-images/mehdi-rounded.webp"
                                            alt=""
                                            width={80}
                                            height={80}
                                        />
                                        <span>Mehdi</span>
                                    </div>
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img
                                            src="/images/section-images/jhon-rounded.webp"
                                            alt=""
                                            width={80}
                                            height={80}
                                        />
                                        <span>John</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="location-pin absolute -top-[15%] left-[30%] z-[2] grid -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0">
                    <IconSwimming />
                    <span className="uppercase">
                        SwimRight
                        <br />
                        At windsor
                    </span>
                    <span
                        className="col-span-2 justify-self-center"
                        onMouseEnter={(e) => toggleMapLocation(e, 'item-2')}
                        onMouseLeave={(e) => toggleMapLocation(e, 'item-2')}
                    >
                        <img
                            src="/images/icons/icon-location-pin-yellow.svg"
                            className="w-full"
                            alt=""
                            height={82}
                            width={53}
                        />
                    </span>

                    {/* Full Location */}
                    <div
                        ref={ref.locationBox2}
                        className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                    >
                        <div className="h-[19rem] w-full">
                            <img
                                src="/images/section-images/location-windsor.webp"
                                alt="Ascot"
                                className="h-full w-full"
                                width={488}
                                height={190}
                            />
                        </div>

                        <div className="grid grid-cols-[1fr_auto] gap-4 px-12">
                            <span>
                                <IconSwimmingDoubleWave />
                            </span>

                            <div className="flex max-w-[31.5rem] flex-col items-start justify-start gap-[3.5rem]">
                                <p className="">At your residence or the swimming pool of your choice</p>
                                <div className="flex items-start justify-start gap-[2.7rem] ">
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img
                                            src="/images/section-images/mehdi-rounded.webp"
                                            alt=""
                                            width={80}
                                            height={80}
                                        />
                                        <span>Mehdi</span>
                                    </div>
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img
                                            src="/images/section-images/jhon-rounded.webp"
                                            alt=""
                                            width={80}
                                            height={80}
                                        />
                                        <span>John</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="location-pin absolute -top-[15%] right-[20%] z-[2] grid -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0">
                    <IconSwimming />
                    <span className="uppercase">
                        Adult SwimRight At
                        <br />
                        holand park
                    </span>
                    <span
                        className="col-span-2 justify-self-center"
                        onMouseEnter={(e) => toggleMapLocation(e, 'item-3')}
                        onMouseLeave={(e) => closeMapLocation(e, 'item-3')}
                    >
                        <img src="/images/icons/icon-location-pin-yellow.svg" className="w-full" alt="" />
                    </span>

                    {/* Full Location */}
                    <div
                        ref={ref.locationBox3}
                        className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                    >
                        <div className="h-[19rem] w-full">
                            <img
                                src="/images/section-images/location-holland.webp"
                                alt="Ascot"
                                className="h-full w-full"
                            />
                        </div>

                        <div className="grid grid-cols-[1fr_auto] gap-4 px-12">
                            <span>
                                <IconSwimmingDoubleWave />
                            </span>

                            <div className="flex max-w-[31.5rem] flex-col items-start justify-start gap-[3.5rem]">
                                <p className="">At your residence or the swimming pool of your choice</p>
                                <div className="flex items-start justify-start gap-[2.7rem] ">
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img src="/images/section-images/mehdi-rounded.webp" alt="" />
                                        <span>Mehdi</span>
                                    </div>
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img src="/images/section-images/jhon-rounded.webp" alt="" />
                                        <span>John</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="location-pin absolute top-[15%] left-2/4 z-[2] grid -translate-y-[100px] -translate-x-2/4 cursor-pointer grid-cols-1 content-center items-center justify-items-start gap-4 opacity-0">
                    <span
                        className="col-span-2 justify-self-center"
                        onMouseEnter={(e) => toggleMapLocation(e, 'item-4')}
                        onMouseLeave={(e) => closeMapLocation(e, 'item-4')}
                    >
                        <img
                            src="/images/icons/icon-location-pin-blue.svg"
                            className="w-full"
                            alt=""
                            width={255}
                            height={243}
                        />
                    </span>

                    {/* Full Location */}
                    <div
                        ref={ref.locationBox4}
                        className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                    >
                        <div className="h-[19rem] w-full">
                            <img
                                src="/images/section-images/location-london.webp"
                                alt="Ascot"
                                className="h-full w-full"
                                width={488}
                                height={190}
                            />
                        </div>

                        <div className="grid grid-cols-[1fr_auto] gap-4 px-12">
                            <span>
                                <IconSwimmingDoubleWave />
                            </span>

                            <div className="flex max-w-[31.5rem] flex-col items-start justify-start gap-[3.5rem]">
                                <p className="">At your residence or the swimming pool of your choice</p>
                                <div className="flex items-start justify-start gap-[2.7rem] ">
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img
                                            src="/images/section-images/mehdi-rounded.webp"
                                            alt=""
                                            width={80}
                                            height={80}
                                        />
                                        <span>Mehdi</span>
                                    </div>
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img
                                            src="/images/section-images/jhon-rounded.webp"
                                            alt=""
                                            width={80}
                                            height={80}
                                        />
                                        <span>John</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src="/images/section-images/road.svg"
                    className="absolute top-0 left-0 z-[1] w-full -translate-y-2/4 -translate-x-[2rem]"
                    alt=""
                    width={1125}
                    height={300}
                />
            </div>

            <div className="relative min-h-[calc(50vmin_+_2rem)] sm:min-h-[40rem] md:col-span-2 md:col-start-1 md:min-h-[53rem] lg:min-h-[70rem] xl:hidden">
                {/* <img
                    src="/images/section-images/map.svg"
                    alt=""
                    className="absolute top-0 left-0 z-[1] w-full -translate-y-2/4"
                /> */}
            </div>
        </Container>
    );
});

export default MapContainer;
