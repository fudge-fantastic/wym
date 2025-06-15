import LeaderBoard from "~/components/leaderBoard";

export default function LeaderboardSection() {
    return (
        <div className="mt-10 mx-8 cursor-default" id="lederboard">
            <div className="text-center mb-4">
                <h1 className="text-3xl font-semibold ">🏆 Leaderboard 🏆</h1>
                <p className="text-muted-foreground text-sm mt-1 tracking-wide">List of people who have spent the most</p>
            </div>
            <LeaderBoard />
        </div>
    )

}