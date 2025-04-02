import { fakeUsers } from "../shared/fakeDB";

export default function HallOfFame() {
  // Get top 3 biggest money wasters
  const topThree = fakeUsers
    .slice()
    .sort((a, b) => b.moneyWasted - a.moneyWasted)
    .slice(0, 3);

  // Medal colors
  const medalColors = ["bg-yellow-400", "bg-gray-400", "bg-orange-600"];
  const borderColors = ["border-yellow-400", "border-gray-300", "border-orange-400"];

  return (
    <div className="mx-5 mt-12">
      <h1 className="text-center font-semibold text-3xl md:text-5xl mb-7">
        🔥 Hall of Fame 🔥
      </h1>

      {/* Top 3 Cards */}
      <div className="flex justify-center gap-6 flex-wrap">
        {topThree.map((user, index) => (
          <div
            key={user.id}
            className={`relative p-6 rounded-lg shadow-md border ${borderColors[index]} ${medalColors[index]} w-64 text-center`}
          >
            {/* Medal Position */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-zinc-900 text-white text-3xl px-3 py-1 rounded-full">
              {index === 0 ? "🥇" : index === 1 ? "🥈" : "🥉"}
            </div>

            {/* Avatar Placeholder */}
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-lg font-bold mx-auto">
              {user.username.charAt(0).toUpperCase()}
            </div>

            {/* Username & Money Wasted */}
            <h2 className="mt-3 text-xl font-bold">{user.username}</h2>
            <p className="text-lg font-semibold">${user.moneyWasted.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
