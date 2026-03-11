import LandingPgae from "../components/HomePage/Landing";
import LandingEnd from "../components/HomePage/LandingEnd";
import LandingProjects from "../components/HomePage/LandingProjects";
import LandingSkills from "../components/HomePage/LandingSkills";

export default function HomePage() {
    return(
        <>
            <LandingPgae />
            <LandingSkills />
            <LandingProjects />
            <LandingEnd />
        </>
    )
}