declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test" | undefined;
    PORT: string | undefined;
    DB_URI: string | undefined;
  }
}
