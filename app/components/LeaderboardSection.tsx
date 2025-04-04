import LeaderBoard, { fakeUsers } from "~/components/leaderBoard";

export default function LeaderboardSection() {
    const totalAmount = fakeUsers.reduce((sum, user) => sum + user.amount, 0);
    const totalUsers = fakeUsers.length;
    const cardsCSS = "flex flex-col border shadow-sm shadow-zinc-400 dark:shadow-none dark:bg-zinc-950 rounded-md px-6 py-4"
    return (
        <div className="mt-10 mx-8" id="lederboard">
            <div className="text-center mb-4">
                <h1 className="text-3xl font-semibold ">🏆 Leaderboard 🏆</h1>
                <p className="text-muted-foreground text-sm mt-1 tracking-wide">List of people who have spent the most</p>
            </div>
            <LeaderBoard />
            <div className="flex flex-row gap-4 mt-6">
                <div className={cardsCSS}>
                    <h1 className="text-lg font-semibold">Total Money</h1>
                    <p className="text-muted-foreground text-sm">Total number of money spent till now</p>
                    <p className="font-bold text-xl mt-4 text-green-500">${totalAmount.toLocaleString()}</p>
                </div>
                <div className={cardsCSS}>
                    <h1 className="text-lg font-semibold">Total Users</h1>
                    <p className="text-muted-foreground text-sm">Total number of spenders till now</p>
                    <p className="font-bold text-xl mt-4">{totalUsers.toLocaleString()} people</p>
                </div>
            </div>
        </div>
    )

}