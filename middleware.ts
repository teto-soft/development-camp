import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { TableNames } from '@/constants';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const email = session?.user?.email;
    const { data } = await supabase
      .from(TableNames.user)
      .select()
      .eq('email', email);

    if (!data || data.length === 0) {
      return NextResponse.redirect(`${req.nextUrl.origin}/register`);
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/story'],
};
