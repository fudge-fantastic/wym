export default function Footer() {
    return (
        <footer className="py-5">
            <div className="text-center">
                <p className="text-xs text-zinc-500">
                    &copy; {new Date().getFullYear()} _wasteyourmoney. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
