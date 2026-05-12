import { auth } from "./auth";

export async function proxy(request: any) {
  return await auth(request);
}



export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
