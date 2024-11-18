CREATE TABLE IF NOT EXISTS "carImages" (
	"id" integer PRIMARY KEY NOT NULL,
	"imageUrl" varchar DEFAULT 'https://motozitelive.blob.core.windows.net/motozite-live/newcars_images/1670408218No-Image.jpg' NOT NULL,
	"carListinId" integer NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "carImages" ADD CONSTRAINT "carImages_carListinId_listings_id_fk" FOREIGN KEY ("carListinId") REFERENCES "public"."listings"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
