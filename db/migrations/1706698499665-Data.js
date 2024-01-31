module.exports = class Data1706698499665 {
    name = 'Data1706698499665'

    async up(db) {
        await db.query(`CREATE TABLE "price_data" ("id" character varying NOT NULL, "block" integer NOT NULL, "tx_hash" text NOT NULL, "key" text NOT NULL, "value" numeric NOT NULL, "timestamp" numeric NOT NULL, CONSTRAINT "PK_39e1331c1781e8b0e57bde579b9" PRIMARY KEY ("id"))`)
    }

    async down(db) {
        await db.query(`DROP TABLE "price_data"`)
    }
}
