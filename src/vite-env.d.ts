/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_BASE_URL?: string;
  readonly VITE_APPLICATION_RECEIVER_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
