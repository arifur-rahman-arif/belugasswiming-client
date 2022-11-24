import { Container } from '@/components/container';
import SwimmingIcon from '@/icons/icon-swiming-yellow.svg';
import { MouseEvent } from 'react';
import IconSwimming from '@/icons/icon-swimming-black-single-wave.svg';
import IconSwimmingDoubleWave from '@/icons/icon-swimming-black.svg';
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
        <Container className="grid grid-cols-1 items-center md:grid-cols-2">
            <div>
                <SwimmingIcon className="max-h-[3.7rem] max-w-[5.1rem]" />
                <h2 className="mt-12 max-w-[38.8rem]">Locations</h2>
                <h3 className="mt-4 text-teal">We bring it to your home</h3>
            </div>
            <div className="grid place-items-center">
                <img className="object-cover" src="/images/section-images/black-man-with-glass.png" alt="" />
            </div>

            <div
                ref={ref?.mapContainer}
                className="relative hidden min-h-[15rem] sm:min-h-[20rem] md:col-span-2 md:col-start-1 xl:block xl:min-h-[33rem]"
            >
                {/* Item 1 */}
                <div className="location-pin absolute top-2/4 left-[5%] z-[2] grid max-w-[calc(10vmin_+_6rem)] -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0 md:max-w-none">
                    <IconSwimming />
                    <span className="uppercase">SwimRight at Ascot</span>
                    <span
                        className="relative col-span-2 justify-self-center"
                        onMouseEnter={(e) => toggleMapLocation(e, 'item-1')}
                        onMouseLeave={(e) => closeMapLocation(e, 'item-1')}
                    >
                        <img src="/images/icons/icon-location-pin-yellow.svg" className="w-full" alt="" />
                    </span>

                    {/* Full Location */}
                    <div
                        ref={ref.locationBox1}
                        className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                    >
                        <div className="h-[19rem] w-full">
                            <img
                                src="/images/section-images/location-ascot.png"
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
                                        <img src="/images/section-images/mehdi-rounded.png" alt="" />
                                        <span>Mehdi</span>
                                    </div>
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img src="/images/section-images/jhon-rounded.png" alt="" />
                                        <span>Jhon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="top-35 location-pin absolute left-1/4 top-20 z-[2] grid -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0">
                    <IconSwimming />
                    <span className="uppercase">SwimRight At windsor</span>
                    <span
                        className="col-span-2 justify-self-center"
                        onMouseEnter={(e) => toggleMapLocation(e, 'item-2')}
                        onMouseLeave={(e) => toggleMapLocation(e, 'item-2')}
                    >
                        <img src="/images/icons/icon-location-pin-yellow.svg" className="w-full" alt="" />
                    </span>

                    {/* Full Location */}
                    <div
                        ref={ref.locationBox2}
                        className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                    >
                        <div className="h-[19rem] w-full">
                            <img
                                src="/images/section-images/location-windsor.png"
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
                                        <img src="/images/section-images/mehdi-rounded.png" alt="" />
                                        <span>Mehdi</span>
                                    </div>
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img src="/images/section-images/jhon-rounded.png" alt="" />
                                        <span>Jhon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="location-pin absolute left-2/4 z-[2] grid -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0">
                    <IconSwimming />
                    <span className="uppercase">Adult SwimRight At holand park</span>
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
                                src="/images/section-images/location-holland.png"
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
                                        <img src="/images/section-images/mehdi-rounded.png" alt="" />
                                        <span>Mehdi</span>
                                    </div>
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img src="/images/section-images/jhon-rounded.png" alt="" />
                                        <span>Jhon</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Item 4 */}
                <div className="location-pin absolute top-2/4 right-[5%] z-[2] grid -translate-y-[100px] cursor-pointer grid-cols-[1fr_auto] content-center items-center justify-items-start gap-4 opacity-0">
                    <IconSwimming />
                    <span className="uppercase">SwimRight at home</span>
                    <span
                        className="col-span-2 justify-self-center"
                        onMouseEnter={(e) => toggleMapLocation(e, 'item-4')}
                        onMouseLeave={(e) => closeMapLocation(e, 'item-4')}
                    >
                        <img src="/images/icons/icon-location-pin-yellow.svg" className="w-full" alt="" />
                    </span>

                    {/* Full Location */}
                    <div
                        ref={ref.locationBox4}
                        className="full-location absolute bottom-full left-2/4 z-[99] grid min-w-[48.8rem] -translate-y-[2rem] -translate-x-2/4 scale-0 grid-cols-1 items-start justify-items-start gap-[3.4rem] overflow-hidden bg-white pb-[3.5rem] shadow-shadow1"
                    >
                        <div className="h-[19rem] w-full">
                            <img
                                src="/images/section-images/location-london.png"
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
                                        <img src="/images/section-images/mehdi-rounded.png" alt="" />
                                        <span>Mehdi</span>
                                    </div>
                                    <div className="grid grid-cols-1 items-start justify-items-center gap-4">
                                        <img src="/images/section-images/jhon-rounded.png" alt="" />
                                        <span>Jhon</span>
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
                />
            </div>

            <div className="relative min-h-[calc(50vmin_+_2rem)] sm:min-h-[40rem] md:col-span-2 md:col-start-1 md:min-h-[53rem] lg:min-h-[70rem] xl:hidden">
                <img
                    src="/images/section-images/map.svg"
                    alt=""
                    className="absolute top-0 left-0 z-[1] w-full -translate-y-2/4"
                />
            </div>
        </Container>
    );
});

export default MapContainer;
