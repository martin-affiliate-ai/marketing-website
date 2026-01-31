import { StytchB2BProvider } from "@stytch/react/b2b";
import { getStytchClient } from "~/lib/stytch";

export function StytchClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === "undefined") {
    return <>{children}</>;
  }
  return (
    <StytchB2BProvider stytch={getStytchClient()}>
      {children}
    </StytchB2BProvider>
  );
}
