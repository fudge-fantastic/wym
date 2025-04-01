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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const USERS_PER_PAGE = 10;

export default function LeaderBoard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(fakeUsers.length / USERS_PER_PAGE);

  const paginatedUsers = fakeUsers
  .slice() // Create a copy
  .sort((a, b) => b.moneyWasted - a.moneyWasted) // Sort by most wasted
  .slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold text-center mb-4">Leaderboard</h2>

      <Table>
        <TableCaption>Latest users who wasted money</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">#</TableHead>
            <TableHead>Username</TableHead>
            <TableHead className="text-right">Money Wasted</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedUsers.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">
                {index + 1 + (currentPage - 1) * USERS_PER_PAGE}
              </TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell className="text-right font-semibold">
                ${user.moneyWasted}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            //   disabled={currentPage === 1}
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
            //   disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
