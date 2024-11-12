import { integer, pgTable, varchar , numeric , text, json, date} from "drizzle-orm/pg-core";

export const listingsTable = pgTable("listings", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  sellersId : varchar({ length: 255 }).notNull(),
  createdAt: date("created_at").defaultNow(),
  listingTitle: varchar({ length: 255 }).notNull(),
  tagline: varchar({ length: 255 }),
  originalPrice: numeric().notNull(),
  sellingPrice: numeric().notNull(),
  category: varchar({ length: 255 }).notNull(),
  condition: varchar({ length: 255 }).notNull(),
  type: varchar({ length: 255 }),
  maker: varchar({ length: 255 }).notNull(),
  year: integer().notNull(),
  driveType: varchar({ length: 255 }).notNull(),
  cylinder: integer(),
  color: varchar({ length: 255 }).notNull(),
  offerType: varchar({ length: 255 }),
  fuelType: varchar({ length: 255 }).notNull(),
  vin: varchar({ length: 255 }),
  engineSize: numeric(),
  mileage: numeric().notNull(),
  transmission: varchar({ length: 255 }).notNull(),
  listingDescription: text().notNull(),
  features : json() 
});


export const carImages= pgTable('carImages' , {
    id: integer().primaryKey(),
    imageURL : varchar('imageUrl').notNull(),
    carListingId : integer('carListinId').notNull().references(()=> listingsTable.id)
})