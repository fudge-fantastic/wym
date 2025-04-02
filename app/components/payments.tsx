const cards = [
    {
      title: "Broke Rookie",
      features: [
        "A tiny money pit",
        "No actual benefits",
        "Beginners' money drain",
        "Just a starting point",
        "Start with a small amount",
      ],
      money: 100,
      description: "Just getting started? Welcome to the world of poor decisions!",
    },
    {
      title: "Regretful Spender",
      features: [
        "Watch your cash vanish",
        "Nothing extra included",
        "Pay and regret instantly",
        "Just throw it away",
      ],
      money: 1000,
      description: "You know it's legit dumb, but you still do it..",
    },
    {
      title: "Financial Acrobat",
      features: [
        "Multiple ways to waste cash",
        "Real-time money burn alerts",
        "Instant approval for more losses",
        "Track your growing regrets",
        "Risky business, guaranteed",
      ],
      money: 10000,
      description: "Juggling expenses like a circus pro. Absolute Legend.",
    },
    {
      title: "Bankruptcy Enthusiast",
      features: [
        "All-in on wasted cash",
        "Overpriced webinars on doing nothing",
        "VIP access to your own downfall",
        "Repo agent notifications included",
        "Pawn shop perks for extra losses",
      ],
      money: 100000,
      description: "You don't spend money, you set it on fire.",
    },
    {
      title: "Financial Frenzy",
      features: [
        "Unlimited, mindless spending",
        "Overdraft alerts to keep you aware",
        "Monthly regret summaries",
        "No hustle, just hassle",
        "Therapy hotline? You’ll need it",
      ],
      money: 1000000,
      description: "Tailor-made self-destruction! There's no stopping you now.",
    },
    {
      title: "Custom Plan",
      features: [
        "Design your own disaster",
        "Personalized cash burn",
        "Unique failure guaranteed",
        "Your money, your mess",
      ],
      money: 0,
      description:
        "Congratulations! You've Reached New Heights of Financial Irresponsibility",
    },
  ];
  
export default function Payments() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center">
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
            _wasteyourmoney
          </p>
          <h1 className="text-3xl font-bold">
            Pricing that grows with you
          </h1>
        </div>
  
        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col border shadow-sm shadow-zinc-400 dark:shadow-none dark:bg-zinc-900 rounded-lg px-6 py-5"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {card.title}
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
              <div className="mt-4 text-2xl font-bold text-green-500">
                {card.money > 0 ? `$${card.money.toLocaleString()}` : "Custom"}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300 flex-1">
                {card.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <span className="mr-2 text-green-500">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 py-2 px-4 bg-zinc-200 rounded hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors font-semibold text-sm">
                Get wasted!
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  