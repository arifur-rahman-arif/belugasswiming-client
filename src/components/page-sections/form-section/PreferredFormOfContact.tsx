/**
 * Input checkbox for the form component
 *
 * @returns {*}  {JSX.Element}
 */
const PreferredFormOfContact = (): JSX.Element => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-y-4 gap-x-12">
            <strong className="col-span-3 text-[1.6rem] font-bold capitalize leading-[1.6rem]">
                Preferred form of contact:
            </strong>
            <div className="flex items-center justify-start gap-4">
                <div className="h-[1.6rem] w-[1.6rem] overflow-hidden rounded-[0.5rem]">
                    <input id="phone" type="checkbox" value="" className="h-full w-full cursor-pointer" />
                </div>
                <label htmlFor="phone" className="cursor-pointer text-[1.4rem] leading-8 text-grey60">
                    Phone
                </label>
            </div>

            <div className="flex items-center justify-start gap-4">
                <div className="h-[1.6rem] w-[1.6rem] overflow-hidden rounded-[0.5rem]">
                    <input id="email" type="checkbox" value="" className="h-full w-full cursor-pointer" />
                </div>
                <label htmlFor="email" className="cursor-pointer text-[1.4rem] leading-8 text-grey60">
                    Email
                </label>
            </div>

            <div className="flex items-center justify-start gap-4">
                <div className="h-[1.6rem] w-[1.6rem] overflow-hidden rounded-[0.5rem]">
                    <input id="text" type="checkbox" value="" className="h-full w-full cursor-pointer" />
                </div>
                <label htmlFor="text" className="cursor-pointer text-[1.4rem] leading-8 text-grey60">
                    Text
                </label>
            </div>
        </div>
    );
};

export default PreferredFormOfContact;
