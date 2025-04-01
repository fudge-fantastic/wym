// eslint-disable-next-line import/no-unresolved
import dollars from "/dollars.png";

const cards = [
    {
        img: dollars,
        title: "Broke Rookie",
        money: 100,
        description: "Just getting starting? Welcome to the world of poor decisions!",
    },
    {
        img: dollars,
        title: "Regretful Spender",
        money: 1000,
        description: "You know it's legit dumb, but you still do it..",
    },
    {
        img: dollars,
        title: "Financial Acrobat",
        money: 10000,
        description: "Juggling expenses like a circus pro. Absolute Legend.",
    },
    {
        img: dollars,
        title: "Bankruptcy Enthusiast",
        money: 100000,
        description: "You don't spend money, you set it on fire.",
    },
    {
        img: dollars,
        title: "Financial Frenzy",
        money: 1000000,
        description: "Tailor-made self-destruction! There's no stopping you now.",
    },
    {
        img: dollars,
        title: "Custom Plan",
        money: 0,
        description: "Congratulations! You've Reached New Heights of Financial Irresponsibility",
    }
];

export default function Payments() {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-center font-semibold text-3xl mb-7">
                Available Payments
            </h1>

            {/* Cards Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {cards.map((card, index) => (
                    <div key={index} className="border shadow-sm dark:shadow-none shadow-zinc-400 p-6 rounded-lg flex flex-col items-center w-[280px] sm:w-[300px] md:w-[320px]">
                        <img src={card.img} alt={card.title} className="w-32 h-32 object-cover rounded-lg mb-4"/>
                        <h2 className="text-2xl font-semibold text-center">{card.title}</h2>
                        
                        <p className="text-lg font-bold dark:text-green-500 text-green-600 mt-2">${card.money.toLocaleString()}</p>
                        <p className="text-sm text-center text-muted-foreground mt-2">
                            {card.description}
                        </p>
                        <button className="border py-2 px-4 rounded-lg mt-4 hover:bg-zinc-100 bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-sm">
                            Get Wasted!
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
