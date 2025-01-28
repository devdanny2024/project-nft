"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", price: 2.15 },
  { month: "February", price: 2.31 },
  { month: "March", price: 2.45 },
  { month: "April", price: 3.12 },
  { month: "May", price: 2.89 },
  { month: "June", price: 2.76 },
  { month: "July", price: 2.92 },
  { month: "August", price: 3.45 },
  { month: "September", price: 3.21 },
  { month: "October", price: 2.98 },
  { month: "November", price: 3.56 },
  { month: "December", price: 3.89 },
  { month: "January", price: 4.12 },
  { month: "February", price: 3.87 },
  { month: "March", price: 4.23 },
  { month: "April", price: 4.56 },
  { month: "May", price: 4.32 },
  { month: "June", price: 4.78 },
  { month: "July", price: 5.12 },
  { month: "August", price: 4.89 },
  { month: "September", price: 5.34 },
  { month: "October", price: 5.67 },
  { month: "November", price: 0.43 },
  { month: "December", price: 0.89 }
];

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function CollectionVolumeChart() {
  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <CardTitle>Price</CardTitle>
        <CardDescription>
          Showing price for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}  className="aspect-auto h-[250px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
             <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="price"
              type="linear"
              fill="var(--color-price)"
              fillOpacity={0.2}
              stroke="var(--color-price)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter> */}
    </Card>
  );
}


