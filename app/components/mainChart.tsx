"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis} from "recharts"
import { fakeUsers } from "~/components/leaderBoard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
const chartData = [
  { date: "2024-04-01", money: 222},
  { date: "2024-04-02", money: 250},
  { date: "2024-04-03", money: 167},
  { date: "2024-04-04", money: 242},
  { date: "2024-04-05", money: 373},
  { date: "2024-04-06", money: 301},
  { date: "2024-04-07", money: 245},
  { date: "2024-04-08", money: 409},
  { date: "2024-04-09", money: 659},
  { date: "2024-04-10", money: 261},
  { date: "2024-04-11", money: 327},
  { date: "2024-04-12", money: 292},
  { date: "2024-04-13", money: 342},
  { date: "2024-04-14", money: 137},
  { date: "2024-04-15", money: 120},
  { date: "2024-04-16", money: 138},
  { date: "2024-04-17", money: 446},
  { date: "2024-04-18", money: 364},
  { date: "2024-04-19", money: 243},
  { date: "2024-04-20", money: 589},
  { date: "2024-04-21", money: 137},
  { date: "2024-04-22", money: 224},
  { date: "2024-04-23", money: 138},
  { date: "2024-04-24", money: 387},
  { date: "2024-04-25", money: 215},
  { date: "2024-04-26", money: 475},
  { date: "2024-04-27", money: 383},
  { date: "2024-04-28", money: 122},
  { date: "2024-04-29", money: 315},
  { date: "2024-04-30", money: 454},
  { date: "2024-05-01", money: 165},
  { date: "2024-05-02", money: 293},
  { date: "2024-05-03", money: 247},
  { date: "2024-05-04", money: 385},
  { date: "2024-05-05", money: 481},
  { date: "2024-05-06", money: 498},
  { date: "2024-05-07", money: 388},
  { date: "2024-05-08", money: 149},
  { date: "2024-05-09", money: 227},
  { date: "2024-05-10", money: 293},
  { date: "2024-05-11", money: 335},
  { date: "2024-05-12", money: 197},
  { date: "2024-05-13", money: 197},
  { date: "2024-05-14", money: 448},
  { date: "2024-05-15", money: 999},
  { date: "2024-05-16", money: 338},
  { date: "2024-05-17", money: 499},
  { date: "2024-05-18", money: 315},
  { date: "2024-05-19", money: 235},
  { date: "2024-05-20", money: 177},
  { date: "2024-05-21", money: 682},
  { date: "2024-05-22", money: 781},
  { date: "2024-05-23", money: 252},
  { date: "2024-05-24", money: 294},
  { date: "2024-05-25", money: 201},
  { date: "2024-05-26", money: 213},
  { date: "2024-05-27", money: 420},
  { date: "2024-05-28", money: 233},
  { date: "2024-05-29", money: 878},
  { date: "2024-05-30", money: 340},
  { date: "2024-05-31", money: 178},
  { date: "2024-06-01", money: 178},
  { date: "2024-06-02", money: 470},
  { date: "2024-06-03", money: 103},
  { date: "2024-06-04", money: 439},
  { date: "2024-06-05", money: 588},
  { date: "2024-06-06", money: 294},
  { date: "2024-06-07", money: 323},
  { date: "2024-06-08", money: 385},
  { date: "2024-06-09", money: 438},
  { date: "2024-06-10", money: 155},
  { date: "2024-06-11", money: 92},
  { date: "2024-06-12", money: 492},
  { date: "2024-06-13", money: 81},
  { date: "2024-06-14", money: 426},
  { date: "2024-06-15", money: 307},
  { date: "2024-06-16", money: 371},
  { date: "2024-06-17", money: 475},
  { date: "2024-06-18", money: 107},
  { date: "2024-06-19", money: 341},
  { date: "2024-06-20", money: 408},
  { date: "2024-06-21", money: 169},
  { date: "2024-06-22", money: 317},
  { date: "2024-06-23", money: 480},
  { date: "2024-06-24", money: 132},
  { date: "2024-06-25", money: 141},
  { date: "2024-06-26", money: 434},
  { date: "2024-06-27", money: 448},
  { date: "2024-06-28", money: 999},
  { date: "2024-06-29", money: 103},
  { date: "2024-06-30", money: 446},
]

const chartConfig = {
  money: {
    label: "Money",
    color: "hsl(var(--chart-1))",
  }
} satisfies ChartConfig

export default function Component() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  const totalAmount = fakeUsers.reduce((sum, user) => sum + user.amount, 0);
  
  return (
    <Card className="mx-5">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-4 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle className="md:text-base text-sm">Total money wasted so far: <span className="font-bold dark:text-green-400 text-green-500 tracking-wide">${totalAmount.toLocaleString()}</span></CardTitle>
          <CardDescription className="md:text-sm text-xs">
            Showing total money wasted for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[140px] rounded-md sm:ml-auto"
            aria-label="Select a value">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-md">
            <SelectItem value="90d" className="rounded-md">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-md">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-md">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-money)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-money)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={-3}
              tickCount={5}
              tickFormatter={(value) => {
                return value.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="money"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-money)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
