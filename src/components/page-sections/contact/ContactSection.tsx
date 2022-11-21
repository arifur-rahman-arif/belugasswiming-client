import { Container } from '@/components/container';
import Description from '@/page-sections/form-section/Description';
import InputSection from '@/page-sections/form-section/InputSection';
import PreferredFormOfContact from '@/page-sections/form-section/PreferredFormOfContact';
import { Section } from '@/components/section';
import IconRefresh from '@/icons/icon-refresh.svg';
import ContactSectionRight from './ContactSectionRight';
import { AppContextInterface, AppCtx } from '@/context/Context';
import { FormEvent, useContext, useState } from 'react';
import IconSpin from '@/icons/icon-spin.svg';
import axios from 'axios';

/**
 * Contact section for the contact page
 *
 * @returns {*}  {JSX.Element}
 */
const ContactSection = (): JSX.Element => {
    const appCtx: AppContextInterface | null = useContext(AppCtx);
    const [formSubmitSuccessFull, setFormSubmitSuccessFull] = useState<boolean>(false);

    console.log(formSubmitSuccessFull);

    /**
     * Reset the contact form
     *
     */
    const resetForm = () => {
        appCtx?.setPreferredPhone(false);
        appCtx?.setPreferredEmail(true);
        appCtx?.setPreferredText(false);
        appCtx?.setContactName('');
        appCtx?.setContactPhone('');
        appCtx?.setContactEmail('');
        appCtx?.setContactDescription('');
    };

    /**
     * Form submit handler
     *
     * @param {FormEvent<HTMLFormElement>} e
     */
    const formSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (appCtx?.formSubmitted) return;

        appCtx?.setSubmitButtonPressed(true);

        if (!appCtx?.contactName || !appCtx.contactEmail) return;

        appCtx?.setFormSubmitted(true);

        axios
            .post(`${process.env.NEXT_PUBLIC_BELUGA_REST_URL}/submit-contact-form`, {
                profferedFormOfContact: {
                    phone: appCtx?.preferredPhone,
                    email: appCtx?.preferredEmail,
                    text: appCtx?.preferredText
                },
                name: appCtx.contactName,
                phone: appCtx?.contactPhone,
                email: appCtx?.contactEmail,
                description: appCtx.contactDescription
            })
            .then(function (response) {
                console.log(response);
                appCtx?.setFormSubmitted(true);
                setFormSubmitSuccessFull(true);
            })
            .catch(function (error) {
                appCtx?.setFormSubmitted(false);
                console.error(error);
            });

        // Fetch(`${process.env.NEXT_PUBLIC_BELUGA_REST_URL}/submit-contact-form`, {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         profferedFormOfContact: {
        //             phone: appCtx?.preferredPhone,
        //             email: appCtx?.preferredEmail,
        //             text: appCtx?.preferredText
        //         },
        //         name: appCtx.contactName,
        //         phone: appCtx?.contactPhone,
        //         email: appCtx?.contactEmail,
        //         description: appCtx.contactDescription
        //     }),
        //     headers: {
        //         // 'X-WP-NONCE': iclinic.nonce,
        //         // 'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json'
        //     }
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         console.log(data);
        //         appCtx?.setFormSubmitted(true);
        //         setFormSubmitSuccessFull(true);
        //     })
        //     .catch((error) => {
        //         appCtx?.setFormSubmitted(false);
        //         console.error(error);
        //     });
    };

    return (
        <Section>
            <form id="contact-form" onSubmit={formSubmit}>
                <Container className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-y-24">
                    <span className="text-left text-[3.2rem] font-bold font-extrabold uppercase leading-[3.8rem] md:col-span-2">
                        Get in touch
                    </span>
                    {/* Col 1 */}
                    <div className="grid grid-cols-1 gap-12  xl:grid-cols-2 ">
                        {/* Form input area */}
                        <div className="flex flex-col items-start justify-start">
                            <PreferredFormOfContact />

                            <InputSection />
                        </div>

                        {/* Form text area */}
                        <Description />

                        <div className="flex items-center justify-start gap-[2.8rem] justify-self-end xl:col-span-2">
                            {!appCtx?.formSubmitted && (
                                <span
                                    className="flex cursor-pointer items-center justify-center gap-4 px-8 py-12"
                                    onClick={resetForm}
                                >
                                    <IconRefresh className="max-h-[1.6rem] max-w-[1.6rem]" />
                                    <span className="text-[1.4rem] font-medium uppercase leading-[1.6rem] text-headingColor">
                                        RESET
                                    </span>
                                </span>
                            )}
                            <button
                                type="submit"
                                form="contact-form"
                                disabled={appCtx?.formSubmitted}
                                className={`grid cursor-pointer grid-flow-col place-items-center gap-4 rounded-[1.5rem] border-2 border-primary bg-primary p-4 text-[1.6rem] font-bold uppercase leading-8 text-headingColor transition-all hover:bg-transparent sm:py-[1.8rem] sm:px-[2.4rem] ${
                                    appCtx?.formSubmitted && 'cursor-not-allowed opacity-50'
                                }`}
                            >
                                {appCtx?.formSubmitted && (
                                    <IconSpin className="h-8 w-8 animate-spin bg-transparent text-headingColor" />
                                )}
                                Send my request
                            </button>
                        </div>
                    </div>

                    {/* Col 2 */}
                    <ContactSectionRight />
                </Container>
            </form>
        </Section>
    );
};

export default ContactSection;
