import { MigrationInterface, QueryRunner } from 'typeorm';

export class ActorMovieRelation1773221334229 implements MigrationInterface {
  name = 'ActorMovieRelation1773221334229';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "actor" DROP COLUMN "birthDate"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "actor" ADD "birthDate" TIMESTAMP NOT NULL`,
    );
  }
}
