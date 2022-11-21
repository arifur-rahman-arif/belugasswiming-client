import IconPhone from '@/icons/icon-phone-outline.svg';
import LocationPin from '@/icons/location-pin-outline.svg';

/**
 *
 *
 * @returns {*}  {JSX.Element}
 */
const ContactSectionRight = (): JSX.Element => {
    return (
        <div className="grid grid-cols-1 content-start gap-12 md:grid-cols-2">
            <div className="flex flex-col items-start justify-start">
                <span className="text-[2rem] font-bold leading-[2.4rem] text-headingColor">Phone</span>
                <div className="mt-6 flex items-center justify-start gap-4">
                    <IconPhone />
                    <span className="text-[1.6rem] leading-[1.6rem]">+44 07550 400000</span>
                </div>

                <span className="mt-12 text-[2rem] font-bold leading-[2.4rem] text-headingColor">
                    Locations we cover
                </span>

                <div className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-6">
                    <LocationPin />
                    <span className="text-[1.6rem] leading-[1.6rem]">Up to a 15-mile radius around London</span>
                    <LocationPin />
                    <span className="text-[1.6rem] leading-[1.6rem]">Ascot</span>
                    <LocationPin />
                    <span className="text-[1.6rem] leading-[1.6rem]">Windsor castle</span>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start">
                <span className="text-[2rem] font-bold leading-[2.4rem] text-headingColor">Phone</span>
                <div className="mt-6 flex items-center justify-start gap-4">
                    <IconPhone />
                    <span className="text-[1.6rem] leading-[1.6rem]">Portland Road, London, W11 4LQ</span>
                </div>
            </div>
        </div>
    );
};

export default ContactSectionRight;
