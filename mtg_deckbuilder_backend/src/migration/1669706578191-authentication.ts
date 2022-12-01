import { MigrationInterface, QueryRunner } from "typeorm";

export class authentication1669706578191 implements MigrationInterface {
    name = 'authentication1669706578191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "username" text NOT NULL, "password" text NOT NULL, "email" text NOT NULL, "firstName" text NOT NULL, "lastName" text NOT NULL, "accountCreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "authentication" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "accountCreatedDate" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "authenticationString" text NOT NULL, "accountId" uuid NOT NULL, CONSTRAINT "PK_684fcb9924c8502d64b129cc8b1" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "authentication"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
