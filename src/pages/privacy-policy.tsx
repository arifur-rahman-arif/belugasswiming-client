import { Container } from '@/components/container';
import { MastheadPrivacyPolicy } from '@/components/masthead';
import Page from '@/components/Page';
import { Section } from '@/components/section';

/**
 * Privacy policy page
 *
 * @returns {*}  {JSX.Element}
 */
const PrivacyPolicy = (): JSX.Element => {
    return (
        <Page title="Terms & Conditions" description="">
            <MastheadPrivacyPolicy />

            <Section>
                <Container>
                    {/* Item 1 */}
                    <h3 className="col-span-2 text-[2.4rem] font-bold uppercase leading-[2.8rem] text-headingColor">
                        BACKGROUND
                    </h3>

                    <ul className="mt-12 grid grid-cols-1 gap-6">
                        <li className="flex w-full items-start justify-start gap-4">
                            <span className="font-medium">1.1</span>
                            <p>
                                You have made a booking with SwimRight trading brand of Beluga Swimming Academy Ltd
                                ("we" or "us").
                            </p>
                        </li>
                        <li className="flex w-full items-start justify-start gap-4">
                            <span className="font-medium">1.2</span>
                            <p>
                                The booking confirmation, together with the Booking T&Cs, constitutes the entire
                                agreement (the "Agreement") between us and you. If any of the details in the booking
                                confirmation appear to be incorrect, please contact us.
                            </p>
                        </li>
                        <li className="flex w-full items-start justify-start gap-4">
                            <span className="font-medium">1.3</span>
                            <p>
                                You hereby agree that you accept the terms of the booking confirmation together with the
                                Booking T&Cs on behalf of yourself and any person you are booking on behalf of, and that
                                all such persons shall at all times adhere to the specific terms of conduct within the
                                venue. For the purposes of this Agreement, "you" shall include the person named on the
                                booking confirmation and any person they are booking on behalf of.
                            </p>
                        </li>
                        <li className="flex w-full items-start justify-start gap-4">
                            <span className="font-medium">1.4</span>
                            <p>
                                All correspondence from us will be sent to the person named as the customer on the
                                booking confirmation. All regular communications from us will be sent in email format
                                and it is your responsibility to inform us of any changes to your email address.
                            </p>
                        </li>
                    </ul>

                    {/* Item 2 */}
                    <h3 className="col-span-2 mt-12 text-[2.4rem] font-bold uppercase leading-[2.8rem] text-headingColor">
                        PAYMENT
                    </h3>

                    <p></p>

                    <ul className="mt-12 grid grid-cols-1 gap-6">
                        <li className="flex w-full items-start justify-start gap-4">
                            <p>
                                You will be billed for the whole term prior to the lesson start date. Tuition fees must
                                be paid in full by the due date. SwimRight cannot guarantee your enrolment if payment is
                                made after the due date.
                            </p>
                        </li>
                    </ul>

                    {/* Item 3 */}
                    <h3 className="col-span-2 mt-12 text-[2.4rem] font-bold uppercase leading-[2.8rem] text-headingColor">
                        REFUNDS/CANCELLATIONS
                    </h3>

                    <ul className="mt-12 grid grid-cols-1 gap-6">
                        <li className="flex w-full flex-col items-start justify-start gap-4">
                            <strong className="font-bold">Cancelling the course</strong>
                            <div className="grid grid-cols-1 gap-4 pl-12">
                                <p>
                                    No refunds will be given on or after the day of the first lesson unless for medical
                                    reasons.
                                </p>
                                <p>
                                    Course cancellations must be made by emailing the following address:{' '}
                                    <strong className="font-bold">contact@belugaswimmingacademy.com</strong>
                                </p>
                            </div>
                        </li>

                        <li className="flex w-full flex-col items-start justify-start gap-4">
                            <strong className="font-bold">Cancelling a single lesson</strong>
                            <div className="grid grid-cols-1 gap-4 pl-12">
                                <p>
                                    We cannot guarantee a replacement lesson if a class is either cancelled or missed.
                                    Subject to availability, SwimRight will offer a make-up session under the following
                                    notes:
                                </p>
                                <div className="flex items-start justify-start gap-2 pl-6">
                                    <strong>1.</strong>
                                    <p className="">
                                        Notice must be given at least 48 hours before its scheduled start time,
                                    </p>
                                </div>

                                <div className="flex items-start justify-start gap-2 pl-6">
                                    <strong>2.</strong>
                                    <p className="">Only one make up lesson can take place per term,</p>
                                </div>

                                <div className="flex items-start justify-start gap-2 pl-6">
                                    <strong>3.</strong>
                                    <p className="">
                                        Cancellation of shared lessons – semi-private or group – will only occur when
                                        all parties cancel the shared lesson,
                                    </p>
                                </div>

                                <div className="flex items-start justify-start gap-2 pl-6">
                                    <strong>4.</strong>
                                    <p className="">
                                        The make-up lesson offered to replace the cancelled lesson could be taught by
                                        any of our instructors,
                                    </p>
                                </div>

                                <div className="flex items-start justify-start gap-2 pl-6">
                                    <strong>5.</strong>
                                    <p className="">
                                        The make-up lesson of the cancelled shared lesson will be a shared lesson; the
                                        parties are not entitled to individual make up lessons to replace the cancelled
                                        shared lesson,
                                    </p>
                                </div>

                                <div className="flex items-start justify-start gap-2 pl-6">
                                    <strong>6.</strong>
                                    <p className="">
                                        The make-up lesson must take place during the term the cancelled lesson was
                                        booked and cannot be carried forward to subsequent terms,
                                    </p>
                                </div>

                                <div className="flex items-start justify-start gap-2 pl-6">
                                    <strong>7.</strong>
                                    <p className="">No financial credit will be given for cancelled lessons,</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex w-full flex-col items-start justify-start gap-4">
                            <p>
                                Lessons in outdoors pools will be held under all weather conditions, except thunder and
                                lightning, in which case, the instructor will cancel the lesson and the tuition fees
                                will be fully refunded (not credited to your account).
                            </p>
                        </li>
                        <li className="flex w-full flex-col items-start justify-start gap-4">
                            <p>
                                Please note that in exceptional circumstances, SwimRight reserves the right to cancel
                                lessons and courses. In such events, replacement classes will be offered, or a refund
                                will be provided.
                            </p>
                        </li>
                    </ul>

                    {/* Item 4 */}
                    <h3 className="col-span-2 mt-12 text-[2.4rem] font-bold uppercase leading-[2.8rem] text-headingColor">
                        SUPERVISION
                    </h3>

                    <ul className="mt-12 grid grid-cols-1 gap-6">
                        <li className="flex w-full flex-col items-start justify-start gap-4">
                            <p>
                                All parents/guardians are responsible for the supervision of their children, except
                                during the swimming lesson. They must stay throughout the duration of the lesson.
                            </p>
                        </li>

                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Spring term 2023</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Tuesday 3rd January – Sunday 2nd of April.</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Half term: Monday 13th February – Sunday 19th February (special session available)</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Easter Holidays 2023 ( special session available)</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Monday 3rd April – Thursday 6th April</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Tuesday 11th April – Friday 14th April</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Summer term 2023</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Monday 17th April – Sunday 23rd July</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Half term: Monday 29th May – Sunday 4th June (special session available)</p>
                        </li>
                        <li className="flex w-full items-center justify-start gap-4">
                            <span className="relative top-1 h-3 w-3 rounded-full bg-headingColor"></span>
                            <p>Exclusions 1st May (bank holiday)</p>
                        </li>
                    </ul>
                </Container>
            </Section>
        </Page>
    );
};

export default PrivacyPolicy;
