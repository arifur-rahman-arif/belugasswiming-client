/**
 * Description text area
 *
 * @returns {*}  {JSX.Element}
 */
const Description = (): JSX.Element => {
    return (
        <div className="flex flex-col items-start justify-start gap-4 self-end">
            <strong className="text-[1.4rem] font-bold leading-[1.6rem]">Description of the pool</strong>
            <textarea
                className="h-[22.1rem] w-full resize-none rounded-[1.5rem] border border-grey40 px-[1.6rem] py-[1.2rem] outline-none transition-all focus:border-teal"
                placeholder="Length x width x Depth"
            ></textarea>
        </div>
    );
};

export default Description;
