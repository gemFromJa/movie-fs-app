import { MigrationInterface, QueryRunner } from 'typeorm';

export class ActorMovieRelation1773220918592 implements MigrationInterface {
  name = 'ActorMovieRelation1773220918592';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "actor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "gender" character varying NOT NULL, "birthDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_05b325494fcc996a44ae6928e5e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "movie" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "director" character varying NOT NULL, "releaseDate" TIMESTAMP NOT NULL, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "review" ("id" SERIAL NOT NULL, "rating" integer NOT NULL, "comment" character varying NOT NULL, "movieId" integer, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "actor_movies_movie" ("actorId" integer NOT NULL, "movieId" integer NOT NULL, CONSTRAINT "PK_bb8e9dcbccde7d3edd9383fb25a" PRIMARY KEY ("actorId", "movieId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_48fa78b2634b01bf58ad1686ef" ON "actor_movies_movie" ("actorId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_45708bd514560bac8a3a54470d" ON "actor_movies_movie" ("movieId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "review" ADD CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "actor_movies_movie" ADD CONSTRAINT "FK_48fa78b2634b01bf58ad1686ef5" FOREIGN KEY ("actorId") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "actor_movies_movie" ADD CONSTRAINT "FK_45708bd514560bac8a3a54470d5" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "actor_movies_movie" DROP CONSTRAINT "FK_45708bd514560bac8a3a54470d5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "actor_movies_movie" DROP CONSTRAINT "FK_48fa78b2634b01bf58ad1686ef5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "review" DROP CONSTRAINT "FK_4ccf71f9d14aa1a059877b06343"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_45708bd514560bac8a3a54470d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_48fa78b2634b01bf58ad1686ef"`,
    );
    await queryRunner.query(`DROP TABLE "actor_movies_movie"`);
    await queryRunner.query(`DROP TABLE "review"`);
    await queryRunner.query(`DROP TABLE "movie"`);
    await queryRunner.query(`DROP TABLE "actor"`);
  }
}
