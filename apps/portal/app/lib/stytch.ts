import { StytchB2BUIClient } from "@stytch/vanilla-js/b2b";

let stytchClient: StytchB2BUIClient | null = null;

export function getStytchClient(): StytchB2BUIClient {
  if (!stytchClient) {
    stytchClient = new StytchB2BUIClient(
      import.meta.env.VITE_STYTCH_PUBLIC_TOKEN,
      {
        cookieOptions: {
          availableToSubdomains: true,
          domain: import.meta.env.VITE_COOKIE_DOMAIN,
        },
      }
    );
  }
  return stytchClient;
}
