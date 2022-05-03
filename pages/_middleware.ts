import { NextResponse } from 'next/server';

const signedinPages = ['/', '/playlist', '/library'];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const { pathname, origin } = req.nextUrl;
    const token = req.cookies.TRAX_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.rewrite(`${origin}/signin`);
    }
  }
}
