import {
  pgTable,
  serial,
  varchar,
  integer,
  uuid,
  text,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 24 }).notNull(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
});

export const employer = pgTable("employer", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 24 }).notNull(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
});

export const job = pgTable("job", {
  id: serial("id").primaryKey(),
  uuid: uuid("uuid").defaultRandom(),
  name: varchar("name").notNull(),
  employerId: integer("employer_id").references(() => employer.id),
  description: text("description"),
});