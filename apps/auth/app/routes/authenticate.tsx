import { useState, useEffect } from "react";
import { StytchB2B, useStytchMemberSession } from "@stytch/react/b2b";
import { B2BProducts, AuthFlowType } from "@stytch/vanilla-js/b2b";
import type { Route } from "./+types/authenticate";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Authenticating... | Affiliate AI" },
    { name: "description", content: "Completing sign in" },
  ];
}

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
        <p className="text-muted-foreground">Signing you in...</p>
      </div>
    </div>
  );
}

export default function Authenticate() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingScreen />;
  }

  return <AuthenticateContent />;
}

function AuthenticateContent() {
  const { session } = useStytchMemberSession();

  // Redirect to portal once authenticated
  useEffect(() => {
    if (session) {
      const portalUrl = import.meta.env.VITE_PORTAL_URL;
      window.location.href = portalUrl;
    }
  }, [session]);

  const config = {
    products: [B2BProducts.emailMagicLinks],
    sessionOptions: {
      sessionDurationMinutes: 60, // 1 hour (increase in Stytch dashboard for longer sessions)
    },
    authFlowType: AuthFlowType.Discovery,
    emailMagicLinksOptions: {
      discoveryRedirectURL: import.meta.env.VITE_STYTCH_REDIRECT_URL,
    },
    cookieOptions: {
      availableToSubdomains: true,
      domain: import.meta.env.VITE_COOKIE_DOMAIN,
    },
  };

  const callbacks = {
    onEvent: (event: any) => {
      console.log("Stytch event:", event);
      if (event.type === "AUTHENTICATE_FLOW_COMPLETE") {
        const portalUrl = import.meta.env.VITE_PORTAL_URL;
        window.location.href = portalUrl;
      }
    },
  };

  // The StytchB2B component will automatically handle the token in the URL
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md px-4">
        <StytchB2B config={config} callbacks={callbacks} />
      </div>
    </div>
  );
}
