import { MigrationInterface, QueryRunner } from "typeorm";

export class UniqueContraint1773304421447 implements MigrationInterface {
    name = 'UniqueContraint1773304421447'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "actor" ADD CONSTRAINT "UQ_d452a7040f3c08451dc9c2f3ba9" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "actor" DROP CONSTRAINT "UQ_d452a7040f3c08451dc9c2f3ba9"`);
    }

}
