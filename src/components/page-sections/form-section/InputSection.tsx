/**
 * Input component for the form component
 *
 * @returns {*}  {JSX.Element}
 */
const InputSection = (): JSX.Element => {
    return (
        <div className="mt-12 flex w-full flex-col items-start justify-start gap-[1.5rem]">
            <div className="flex w-full flex-col items-start justify-start gap-4">
                <label className="text-[1.4rem] font-bold leading-[1.6rem]" htmlFor="name">
                    Name <span className="text-[#FF0000]">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    className="h-[4.8rem] w-full rounded-[1.5rem] border border-grey40 px-[1.6rem] py-[1.2rem] outline-none transition-all focus:border-teal"
                    placeholder="Your name"
                />
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-4">
                <label className="text-[1.4rem] font-bold leading-[1.6rem]" htmlFor="phoneNumber">
                    Phone <span className="text-[1.4rem]">(Optional)</span>
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    placeholder="Your phone number"
                    className="h-[4.8rem] w-full rounded-[1.5rem] border border-grey40 px-[1.6rem] py-[1.2rem] outline-none transition-all focus:border-teal"
                />
            </div>

            <div className="flex w-full flex-col items-start justify-start gap-4">
                <label className="text-[1.4rem] font-bold leading-[1.6rem]" htmlFor="email">
                    Email <span className="text-[#FF0000]">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    className="h-[4.8rem] w-full rounded-[1.5rem] border border-grey40 px-[1.6rem] py-[1.2rem] outline-none transition-all focus:border-teal"
                    placeholder="Email address"
                />
            </div>
        </div>
    );
};

export default InputSection;
