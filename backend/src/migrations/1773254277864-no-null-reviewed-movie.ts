import { MigrationInterface, QueryRunner } from 'typeorm';

export class NoNullReviewedMovie1773254277864 implements MigrationInterface {
  name = 'NoNullReviewedMovie1773254277864';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343"`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" ALTER COLUMN "movieId" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343"`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" ALTER COLUMN "movieId" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
