import { Container } from '../components/container';
import { MastHead } from '../components/masthead';
import { Section } from '../components/section';

/**
 * Home/Landing page component for the App
 *
 * @export
 * @returns {*}
 */
export default function Home(): any {
    return (
        <>
            <MastHead />
            <Section>
                <Container>
                    <h1>section 1</h1>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h1>hello</h1>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h1>hello</h1>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h1>hello</h1>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h1>hello</h1>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h1>hello</h1>
                </Container>
            </Section>
            <Section>
                <Container>
                    <h1>hello</h1>
                </Container>
            </Section>
        </>
    );
}
