import { useState } from "react";
import { fakeUsers } from "../shared/fakeDB";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

const USERS_PER_PAGE = 10;

export default function LeaderBoard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(fakeUsers.length / USERS_PER_PAGE);

  const paginatedUsers = fakeUsers
    .slice()
    .sort((a, b) => b.moneyWasted - a.moneyWasted)
    .slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);

  return (
    <div className="mx-5 mt-10">
      <div className="rounded-lg">
      <h1 className="text-center font-semibold text-3xl mb-7">LeaderBoard</h1>
      <h2 className="text-lg font-semibold">Recent Investors</h2>
      <p className="text-sm text-zinc-400">Top money wasters this month</p>
      {/* Leaderboard Cards */}
      <div className="mt-4 space-y-2 border dark:shadow-none rounded-lg p-2 shadow-sm shadow-zinc-400">
        {paginatedUsers.map((user) => (
          <div key={user.id} className="flex items-center justify-between p-2 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 dark:bg-zinc-900 bg-zinc-100 border rounded-full flex items-center justify-center text-xs font-bold">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold">{user.username}</p>
                <p className="text-sm text-zinc-400">user@email.com</p>
              </div>
            </div>
            <p className="text-green-500 font-semibold text-sm">-${user.moneyWasted.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                onClick={() => setCurrentPage(index + 1)}
                className={currentPage === index + 1 ? "font-bold" : ""}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
    </div>
  );
}
