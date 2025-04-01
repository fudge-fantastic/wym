import ModeToggle from "~/components/darkModeToggle";
import { Separator } from "./ui/separator";

export default function NavBar() {
    return (
        <>
            <div className="mx-5 my-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold">_wasteyourmoney</h3>
                    <ModeToggle />
                </div>
            </div>
            <Separator />
        </>
    );
}