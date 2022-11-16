import { MastHead } from '@/components/masthead';
import {
    JhonSection,
    LearnFromBest,
    LocationSection,
    MehdiSection,
    PrivateSwiming
} from '@/components/page-sections/home';

/**
 * Home/Landing page component for the App
 *
 * @export
 * @returns {JSX.Element}
 */
export default function Home(): JSX.Element {
    return (
        <>
            <MastHead />
            <PrivateSwiming />
            <LearnFromBest />
            <MehdiSection />
            <JhonSection />
            <LocationSection />
        </>
    );
}
