import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * createServerSupabase()
 * Works in Server Components, Server Actions, and Route Handlers.
 * Uses Promise.resolve(cookies()) so the helper is safe across Next contexts (sync or async).
 */
export async function createServerSupabase() {
  const cookieStore = await Promise.resolve(cookies());

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    // For normal user flows pass the anon key; service role is server-only and not required here
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        // set/delete are optional in this minimal starter
      },
    }
  );
}
