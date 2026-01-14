import { createFileRoute, Link, Outlet, useMatchRoute } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_marketplace/_authenticated/_admin/dashboard")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const matchRoute = useMatchRoute();
  const { data: session } = authClient.useSession();

  const isOverviewActive = !!matchRoute({ to: "/dashboard", fuzzy: false });
  const isInventoryActive = !!matchRoute({ to: "/dashboard/inventory" });
  const isOrdersActive = !!matchRoute({ to: "/dashboard/orders" });
  const isUsersActive = !!matchRoute({ to: "/dashboard/users" });
  const isProvidersActive = !!matchRoute({ to: "/dashboard/providers" });

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-8">
        <Link to="/" className="text-sm hover:underline mb-8 inline-block">
          ← Back to Store
        </Link>

        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-2xl font-medium mb-2">Admin Dashboard</h1>
            <div className="flex items-center gap-2 text-[#717182] text-sm">
              <Badge variant="outline" className="bg-[#00ec97]/10 text-[#00ec97] border-[#00ec97]">
                Admin
              </Badge>
              <span>{session?.user?.email || "Admin User"}</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <div className="space-y-1">
            <Link
              to="/dashboard"
              preload="intent"
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                isOverviewActive ? "bg-[#ececf0] dark:bg-accent" : "hover:bg-[#f5f5f7] dark:hover:bg-accent/50"
              )}
            >
              <LayoutDashboard className="size-4" />
              <span className="flex-1 text-sm">Overview</span>
              <ChevronRight className="size-4" />
            </Link>

            <Link
              to="/dashboard/inventory"
              preload="intent"
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                isInventoryActive ? "bg-[#ececf0] dark:bg-accent" : "hover:bg-[#f5f5f7] dark:hover:bg-accent/50"
              )}
            >
              <Package className="size-4" />
              <span className="flex-1 text-sm">Inventory</span>
              <ChevronRight className="size-4" />
            </Link>

            <Link
              to="/dashboard/orders"
              preload="intent"
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                isOrdersActive ? "bg-[#ececf0] dark:bg-accent" : "hover:bg-[#f5f5f7] dark:hover:bg-accent/50"
              )}
            >
              <ShoppingBag className="size-4" />
              <span className="flex-1 text-sm">Orders</span>
              <ChevronRight className="size-4" />
            </Link>

            <Link
              to="/dashboard/users"
              preload="intent"
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                isUsersActive ? "bg-[#ececf0] dark:bg-accent" : "hover:bg-[#f5f5f7] dark:hover:bg-accent/50"
              )}
            >
              <Users className="size-4" />
              <span className="flex-1 text-sm">Users</span>
              <ChevronRight className="size-4" />
            </Link>

            <Link
              to="/dashboard/providers"
              preload="intent"
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                isProvidersActive ? "bg-[#ececf0] dark:bg-accent" : "hover:bg-[#f5f5f7] dark:hover:bg-accent/50"
              )}
            >
              <Settings className="size-4" />
              <span className="flex-1 text-sm">Providers</span>
              <ChevronRight className="size-4" />
            </Link>
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
