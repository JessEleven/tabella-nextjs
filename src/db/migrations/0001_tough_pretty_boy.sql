CREATE TABLE "project" (
	"id" text PRIMARY KEY NOT NULL,
	"project_name" varchar(100) NOT NULL,
	"project_schema" jsonb,
	"favorite" boolean DEFAULT false NOT NULL,
	"last_opened_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"user_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "project" ADD CONSTRAINT "project_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "project_user_name_unique" ON "project" USING btree ("user_id","project_name");--> statement-breakpoint
CREATE INDEX "project_user_idx" ON "project" USING btree ("user_id");