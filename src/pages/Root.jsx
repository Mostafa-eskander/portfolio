import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";
import MainFooter from "../components/Layout/MainFooter";

export default function RootPage() {
    return(
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <MainFooter />
        </>
    )
}