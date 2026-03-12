import { MigrationInterface, QueryRunner } from "typeorm";

export class AddMultipleMovieActors1773267035722 implements MigrationInterface {
    name = 'AddMultipleMovieActors1773267035722'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "poster" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "poster"`);
    }

}
