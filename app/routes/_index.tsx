import type { MetaFunction } from "@remix-run/node";
import LeaderboardSection from "~/components/LeaderboardSection";
import Component from "~/components/mainChart";
import Payments from "~/components/payments";
import { Separator } from "~/components/ui/separator";

export const meta: MetaFunction = () => {
  return [
    { title: "Waste Your Money" },
    { name: "description", content: "Welcome to Waste Your Money! Where you can waste your money mindlessly" },
  ];
};

export default function Index() {
  return (
    <>
      <div className="mx-5">
        <div className="text-left flex flex-col gap-1 my-6 md:w-1/2">
          <h1 className="md:text-3xl text-2xl font-bold md:text-left text-center">Waste Your Money</h1>
          <p className="ml-0.5 tracking-tight md:text-base text-sm md:text-left text-center">We don’t judge. Whether you’re spending to flex, to fill a void, or just because you can, this is your playground. No budgets. No second thoughts. Just you, your card, and the quiet realization that money was never meant to be saved.</p>
        </div>
      </div>
      <Component />
      <Separator className="my-8 bg-transparent" />
      <Payments />
      <LeaderboardSection />
    </>
  );
}

