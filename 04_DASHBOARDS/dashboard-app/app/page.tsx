import { getExecutiveOverview } from "@/lib/metrics";
import KpiCard from "@/components/KpiCard";
import ChartCard from "@/components/ChartCard";
import FilterBar from "@/components/FilterBar";
import RevenueTrend from "@/components/charts/RevenueTrend";
import OrdersTrend from "@/components/charts/OrdersTrend";
import RevenueByChannel from "@/components/charts/RevenueByChannel";
import NewVsReturning from "@/components/charts/NewVsReturning";
import SpendVsRevenue from "@/components/charts/SpendVsRevenue";

export default function ExecutiveOverviewPage() {
  const d = getExecutiveOverview();

  return (
    <div className="min-h-screen">
      <FilterBar periodLabel={d.periodLabel} comparisonLabel={d.comparisonLabel} />

      <div className="space-y-6 px-6 py-6">
        {/* KPI grid */}
        <section
          aria-label="Key performance indicators"
          className="grid grid-cols-2 gap-4 lg:grid-cols-5"
        >
          {d.kpis.map((kpi) => (
            <KpiCard key={kpi.key} kpi={kpi} />
          ))}
        </section>

        {/* Hero revenue chart */}
        <ChartCard
          title="Monthly Revenue Trend"
          subtitle="Total revenue, Jan–Jun 2025 (AED)"
        >
          <RevenueTrend data={d.revenueTrend} />
        </ChartCard>

        {/* Two-up row */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard title="Orders Trend" subtitle="Completed orders per month">
            <OrdersTrend data={d.ordersTrend} />
          </ChartCard>
          <ChartCard title="Revenue by Channel" subtitle={`${d.periodLabel} (AED)`}>
            <RevenueByChannel data={d.revenueByChannel} />
          </ChartCard>
        </section>

        {/* Two-up row */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartCard
            title="New vs Returning Customers"
            subtitle="Acquisition vs retention mix"
          >
            <NewVsReturning data={d.newVsReturning} />
          </ChartCard>
          <ChartCard
            title="Marketing Spend vs Revenue"
            subtitle="Investment against top-line (AED)"
          >
            <SpendVsRevenue data={d.spendVsRevenue} />
          </ChartCard>
        </section>

        <p className="pt-2 text-center text-xs text-muted">
          All figures are fictional sample data created to demonstrate dashboard
          design and reporting approach. Not real company data.
        </p>
      </div>
    </div>
  );
}
