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

  return <AuthGuardContent>{children}</AuthGuardContent>;
}

function AuthGuardContent({ children }: { children: React.ReactNode }) {
  const { session, isInitialized } = useStytchMemberSession();

  useEffect(() => {
    if (!isInitialized) return;

    if (!session) {
      const authUrl = import.meta.env.VITE_AUTH_URL;
      window.location.href = authUrl;
    }
  }, [session, isInitialized]);

  if (!isInitialized || !session) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
