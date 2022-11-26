import Link from 'next/link';

/**
 * Request call back button component
 *
 * @returns {*}
 */
const RequestCallbackButton = () => {
    return (
        <Link href="/contact-swimming-instructor">
            <button
                type="button"
                className={`mt-24 cursor-pointer rounded-[1.5rem] border-2 border-primary bg-transparent py-[1.8rem] px-[2.4rem] text-[1.6rem] font-bold uppercase leading-8 text-primary transition-all hover:bg-primary hover:text-secondary md:text-secondary `}
            >
                Request a call back
            </button>
        </Link>
    );
};

export default RequestCallbackButton;
