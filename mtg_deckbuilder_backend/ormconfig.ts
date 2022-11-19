import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions"
import * as dotenv from 'dotenv'
import { DataSource } from "typeorm";
import { join } from "path";

dotenv.config()
const config: PostgresConnectionOptions = {
    type: "postgres",
    database: process.env.POSTGRES_DATABASE,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    // entities: ["src/model/**/*.entity.ts"],
    entities: [join(__dirname, "src", "model", "**", "*.entity.ts")],
    migrations: [join(__dirname, "src", "migration", "**", "*.ts")],
    synchronize: true
}
export const connectionSource = new DataSource(config);