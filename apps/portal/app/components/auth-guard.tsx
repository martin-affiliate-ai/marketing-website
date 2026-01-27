import { useEffect, useState } from "react";
import { useStytchMemberSession } from "@stytch/react/b2b";

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

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <LoadingScreen />;
  }

  return <AuthGuardClient>{children}</AuthGuardClient>;
}

function AuthGuardClient({ children }: { children: React.ReactNode }) {
  const authUrl = import.meta.env.VITE_AUTH_URL;
  const { session } = useStytchMemberSession();

  //console.log("[AuthGuard] session:", session);

  useEffect(() => {
    if (session) {
      //console.log("[AuthGuard] → session found, clearing redirect");
      return;
    }

    //console.log("[AuthGuard] → no session, scheduling redirect check");
    const timer = setTimeout(() => {
      //console.log("[AuthGuard] → redirect check fired, redirecting");
      window.location.href = authUrl;
    }, 1000);

    return () => clearTimeout(timer);
  }, [session, authUrl]);

  if (!session) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
