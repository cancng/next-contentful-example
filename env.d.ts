declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    NEXT_PUBLIC_GRAPHQL_ENDPOINT: string;
    CONTENTFUL_TOKEN: string;
  }
}
