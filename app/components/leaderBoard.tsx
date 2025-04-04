import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

export const fakeUsers = [
    { id: "USR001", date: "2025-04-04", country: "USA", plans: ["Broke Rookie"], method: "Credit Card", amount: 99.99 },
    { id: "USR002", date: "2025-04-03", country: "UK", plans: ["Regretful Spender"], method: "PayPal", amount: 999.99 },
    { id: "USR003", date: "2025-04-02", country: "India", plans: ["Financial Acrobat", "Broke Rookie"], method: "Crypto", amount: 9999.99 },
    { id: "USR004", date: "2025-04-01", country: "Germany", plans: ["Bankruptcy Enthusiast"], method: "Wire Transfer", amount: 99999.99 },
    { id: "USR005", date: "2025-03-31", country: "Canada", plans: ["Financial Frenzy", "Regretful Spender"], method: "Debit Card", amount: 999999.99 },
    { id: "USR006", date: "2025-03-30", country: "Japan", plans: ["Custom Plan"], method: "Cash", amount: 0 },
];

export default function LeaderBoard() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">UserID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Plans</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {fakeUsers.map((user, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{user.id}</TableCell>
                        <TableCell>{user.date}</TableCell>
                        <TableCell>{user.country}</TableCell>
                        <TableCell>{user.plans.join(", ")}</TableCell>
                        <TableCell>{user.method}</TableCell>
                        <TableCell className="text-right">${user.amount.toFixed(2)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
