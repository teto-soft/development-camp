import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { TableNames } from '@/constants/table-and-view-names';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });
  const session = await supabase.auth.getSession();

  const email = session?.data?.session?.user?.email;
  const { data } = await supabase
    .from(TableNames.user)
    .select()
    .eq('email', email);

  if (!data || data.length === 0) {
    return NextResponse.redirect(`${req.nextUrl.origin}/register`);
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};
