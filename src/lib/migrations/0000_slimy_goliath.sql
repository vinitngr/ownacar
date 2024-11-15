CREATE TABLE IF NOT EXISTS "listings" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "listings_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"sellersId" varchar(255) NOT NULL,
	"created_at" date DEFAULT now(),
	"listingTitle" varchar(255) NOT NULL,
	"tagline" varchar(255),
	"originalPrice" numeric NOT NULL,
	"sellingPrice" numeric NOT NULL,
	"category" varchar(255) NOT NULL,
	"condition" varchar(255) NOT NULL,
	"type" varchar(255),
	"maker" varchar(255) NOT NULL,
	"year" integer NOT NULL,
	"driveType" varchar(255) NOT NULL,
	"cylinder" integer,
	"color" varchar(255) NOT NULL,
	"offerType" varchar(255),
	"fuelType" varchar(255) NOT NULL,
	"vin" varchar(255),
	"engineSize" numeric,
	"mileage" numeric NOT NULL,
	"transmission" varchar(255) NOT NULL,
	"listingDescription" text NOT NULL,
	"features" json
);