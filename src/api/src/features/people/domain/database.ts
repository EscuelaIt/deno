export interface Database {
  query<Result>(sql: string): Promise<Result[]>;
}
