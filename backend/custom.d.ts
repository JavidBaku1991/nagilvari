// Custom type declarations for the project
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      MONGO_URI?: string;
      JWT_SECRET?: string;
      ADMIN_USER?: string;
      ADMIN_PASS?: string;
      NODE_ENV?: string;
    }
  }
}

export {};
  