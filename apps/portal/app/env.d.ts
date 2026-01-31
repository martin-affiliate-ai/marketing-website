/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STYTCH_PUBLIC_TOKEN: string;
  readonly VITE_AUTH_URL: string;
  readonly VITE_COOKIE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
