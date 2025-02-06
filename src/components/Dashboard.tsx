import { SalesLineChart } from "./salesLineChart";
import { SalesBarChart } from "./salesBarChart";
import { CategoryPieChart } from "./categoryPieChart";
import { SalesAreaChart } from "./areaChart";
import { ScatterPlotChart } from "./scatterChart";
import { UsersTable, ProductsTable } from "./usersTable";
import {
  Users,
  ChevronDown,
  CreditCard,
  DollarSign,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useState, useEffect, useCallback } from "react";
import { Layout, Layouts } from "react-grid-layout";
import { throttle } from "lodash";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layouts: Layouts = {
  lg: [
    { i: "monthly", x: 0, y: 0, w: 8, h: 10 },
    { i: "quarterly", x: 8, y: 0, w: 4, h: 10 },
    { i: "category", x: 0, y: 10, w: 4, h: 12 },
    { i: "area", x: 4, y: 10, w: 4, h: 10 },
    { i: "scatter", x: 8, y: 10, w: 4, h: 10 },
  ],
  md: [
    { i: "monthly", x: 0, y: 0, w: 12, h: 10 },
    { i: "quarterly", x: 0, y: 10, w: 6, h: 10 },
    { i: "category", x: 6, y: 10, w: 6, h: 12 },
  ],
  sm: [
    { i: "monthly", x: 0, y: 0, w: 12, h: 12 },
    { i: "quarterly", x: 0, y: 12, w: 12, h: 12 },
    { i: "category", x: 0, y: 24, w: 12, h: 14 },
  ],
};

export const Dashboard = () => {
  const [currentLayouts, setCurrentLayouts] = useState<Layouts>(layouts);
  const [mounted, setMounted] = useState(false);

  const handleLayoutChange = useCallback(
    throttle((layout: Layout[], layouts: Layouts) => {
      setCurrentLayouts(layouts);
    }, 500),
    []
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  Last 7 days <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg"
              >
                <DropdownMenuItem>Last 7 days</DropdownMenuItem>
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                <DropdownMenuItem>Last year</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Activity</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+99</div>
              <p className="text-xs text-muted-foreground">
                +7% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {mounted && (
          <ResponsiveGridLayout
            className="layout"
            layouts={currentLayouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768 }}
            cols={{ lg: 12, md: 12, sm: 12 }}
            rowHeight={30}
            margin={[20, 20]}
            onLayoutChange={handleLayoutChange}
            isDraggable={true}
            isResizable={true}
            draggableHandle=".drag-handle"
            useCSSTransforms={true}
            resizeHandles={["s", "w", "e", "n", "sw", "nw", "se", "ne"]}
            compactType={null}
            preventCollision={true}
          >
            <div key="monthly" className="shadow-md rounded-lg bg-card">
              <div className="h-full flex flex-col">
                <div className="drag-handle cursor-move p-6 border-b">
                  <h3 className="font-semibold leading-none tracking-tight">
                    Monthly Performance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Revenue and sales overview
                  </p>
                </div>
                <div className="flex-1 p-6 overflow-hidden">
                  <SalesLineChart />
                </div>
              </div>
            </div>

            <div key="quarterly" className="shadow-md rounded-lg bg-card">
              <div className="h-full flex flex-col">
                <div className="drag-handle cursor-move p-6 border-b">
                  <h3 className="font-semibold leading-none tracking-tight">
                    Quarterly Sales
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Online vs Offline comparison
                  </p>
                </div>
                <div className="flex-1 p-6 overflow-hidden">
                  <SalesBarChart />
                </div>
              </div>
            </div>

            <div key="category" className="shadow-md rounded-lg bg-card">
              <div className="h-full flex flex-col">
                <div className="drag-handle cursor-move p-6 border-b">
                  <h3 className="font-semibold leading-none tracking-tight">
                    Category Distribution
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Product breakdown
                  </p>
                </div>
                <div className="flex-1 p-6 overflow-hidden">
                  <CategoryPieChart />
                </div>
              </div>
            </div>

            <div key="area" className="shadow-md rounded-lg bg-card">
              <div className="h-full flex flex-col">
                <div className="drag-handle cursor-move p-6 border-b">
                  <h3 className="font-semibold leading-none tracking-tight">
                    Sales Trend
                  </h3>
                </div>
                <div className="flex-1 p-6 overflow-hidden">
                  <SalesAreaChart />
                </div>
              </div>
            </div>

            <div key="scatter" className="shadow-md rounded-lg bg-card">
              <div className="h-full flex flex-col">
                <div className="drag-handle cursor-move p-6 border-b">
                  <h3 className="font-semibold leading-none tracking-tight">
                    Correlation Analysis
                  </h3>
                </div>
                <div className="flex-1 p-6 overflow-hidden">
                  <ScatterPlotChart />
                </div>
              </div>
            </div>
          </ResponsiveGridLayout>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest user and product updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-8 md:grid-cols-2">
              <UsersTable />
              <ProductsTable />
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};
