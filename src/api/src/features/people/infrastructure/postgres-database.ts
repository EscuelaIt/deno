import { Client, Injectable } from "../../../../deps.ts";
import { Database } from "../domain/database.ts";

@Injectable()
export class PostgresDatabase implements Database {
  client: Client;
  constructor() {
    this.client = new Client({
      user: "admin",
      database: "fake_people",
      hostname: "localhost",
      port: 5432,
      password: "V6l56D%k748RDyc",
    });
    this.client.connect();
  }

  async query<T>(sql: string): Promise<T[]> {
    const result = await this.client.query(sql);
    return result.rows;
  }
}
