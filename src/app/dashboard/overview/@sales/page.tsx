import { RecentSales } from '@/features/overview/components/recent-sales';
import { recentSalesData } from '@/constants/data';
import { notFound } from 'next/navigation';
import type { SaleUser } from '@/constants/data';
import { headers } from 'next/headers';

const ITEMS_PER_PAGE = 4;

function getPaginatedSales(page: number): {
  data: SaleUser[];
  totalPages: number;
} {
  const totalPages = Math.ceil(recentSalesData.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  return {
    data: recentSalesData.slice(start, end),
    totalPages
  };
}

export default async function SalesPage() {
  const headersList = await headers();
  const referer = (await headersList).get('referer') || '';
  const search = referer.split('?')[1] || '';
  const params = new URLSearchParams(search);
  const page = Number(params.get('page')) || 1;

  const { data, totalPages } = getPaginatedSales(page);
  if (page < 1 || page > totalPages) return notFound();

  return (
    <div className='h-full'>
      <RecentSales
        salesData={data}
        currentPage={page}
        totalPages={totalPages}
      />
    </div>
  );
}
