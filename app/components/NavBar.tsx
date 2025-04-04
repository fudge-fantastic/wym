import ModeToggle from "~/components/darkModeToggle";
import { Separator } from "./ui/separator";
import { Link } from "@remix-run/react";

export default function NavBar() {
    const cssLink = "hover:underline hover:underline-offset-2"
    return (
        <>
            <div className="mx-5 my-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold"><Link to="/">_wasteyourmoney</Link></h3>
                    <div className="text-sm font-semibold flex gap-6 items-center">
                        <Link className={cssLink} to="#pricing">Pricing</Link>
                        <Link className={cssLink} to="#lederboard">Leaderboard</Link>
                        <Link className={cssLink} to="#about">About Us</Link>
                    </div>
                    <ModeToggle />
                </div>
            </div>
            <Separator />
        </>
    );
}