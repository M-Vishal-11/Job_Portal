import { auth } from "./auth";

export const proxy = auth;

// export function proxy(request: any) {
//   console.log("Proxy is running on path:", request.nextUrl.pathname);
//   return;
// }

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
