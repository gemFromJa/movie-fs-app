import { MigrationInterface, QueryRunner } from "typeorm";

export class MovieDescription1773288776599 implements MigrationInterface {
    name = 'MovieDescription1773288776599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "description" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "description"`);
    }

}
