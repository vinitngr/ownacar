ALTER TABLE "listings" ADD COLUMN "userimageUrl" varchar DEFAULT 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg';--> statement-breakpoint
ALTER TABLE "listings" ADD COLUMN "userEmail" varchar DEFAULT 'v@nagar';--> statement-breakpoint
ALTER TABLE "listings" DROP COLUMN IF EXISTS "offerType";