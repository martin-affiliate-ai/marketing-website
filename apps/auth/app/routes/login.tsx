import { useState, useEffect } from "react";
import { StytchB2B, useStytchMemberSession } from "@stytch/react/b2b";
import { B2BProducts, AuthFlowType } from "@stytch/vanilla-js/b2b";
import type { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | Affiliate AI" },
    { name: "description", content: "Sign in to your Affiliate AI account" },
  ];
}

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}

export default function Login() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingScreen />;
  }

  return <LoginContent />;
}

function LoginContent() {
  const { session } = useStytchMemberSession();

  // Redirect to portal if already authenticated
  useEffect(() => {
    if (session) {
      const portalUrl = import.meta.env.VITE_PORTAL_URL;
      window.location.href = portalUrl;
    }
  }, [session]);

  const config = {
    products: [B2BProducts.emailOtp],
    sessionOptions: {
      sessionDurationMinutes: 60,
    },
    authFlowType: AuthFlowType.Discovery,
    cookieOptions: {
      availableToSubdomains: true,
      domain: import.meta.env.VITE_COOKIE_DOMAIN,
    },
  };

  const style = {
    container: {
      width: "100%",
    },
  };

  const callbacks = {
    onEvent: (event: any) => {
      //console.log("Stytch event:", event);
      if (event.type === "AUTHENTICATE_FLOW_COMPLETE") {
        setTimeout(() => {
          const portalUrl = import.meta.env.VITE_PORTAL_URL;
          window.location.href = portalUrl;
        }, 1000);
      }
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col max-w-sm w-full px-4">
        <StytchB2B config={config} styles={style} callbacks={callbacks} />
      </div>
    </div>
  );
}
