import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import type { SaleUser } from '@/constants/data';
import Link from 'next/link';

interface RecentSalesProps {
  salesData: SaleUser[];
  currentPage: number;
  totalPages: number;
}

export function RecentSales({
  salesData,
  currentPage,
  totalPages
}: RecentSalesProps) {
  return (
    <Card className='h-full'>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
        <CardDescription>You made 265 sales this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {salesData.map((sale, index) => (
            <div key={sale.id} className='flex items-center'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src={sale.image} alt='Avatar' />
                <AvatarFallback>{sale.initials}</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm leading-none font-medium'>{sale.name}</p>
                <p className='text-muted-foreground text-sm'>{sale.email}</p>
              </div>
              <div className='ml-auto font-medium'>{sale.amount}</div>
            </div>
          ))}
        </div>
        {/* Pagination Controls inside the Card */}
        <div className='mt-8 flex items-center justify-center gap-4'>
          <Link href={`?page=${currentPage - 1}`} passHref legacyBehavior>
            <button
              className='rounded bg-gray-200 px-3 py-1 hover:bg-gray-300 disabled:opacity-50'
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </Link>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Link href={`?page=${currentPage + 1}`} passHref legacyBehavior>
            <button
              className='rounded bg-gray-200 px-3 py-1 hover:bg-gray-300 disabled:opacity-50'
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
