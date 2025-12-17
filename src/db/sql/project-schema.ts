import {
	boolean,
	index,
	jsonb,
	pgTable,
	text,
	timestamp,
	uniqueIndex,
	varchar,
} from 'drizzle-orm/pg-core'
import { user } from './auth-schema'

export const project = pgTable(
	'project',
	{
		id: text('id').primaryKey(),
		projectName: varchar('project_name', { length: 100 }).notNull(),
		projectSchema: jsonb('project_schema'),
		favorite: boolean('favorite').default(false).notNull(),
		lastOpenedAt: timestamp('last_opened_at'),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updated_at')
			.defaultNow()
			.$onUpdate(() => new Date())
			.notNull(),
		userId: text('user_id')
			.notNull()
			.references(() => user.id, { onDelete: 'cascade' }),
	},
	(table) => [
		// Unique project name per user
		uniqueIndex('project_user_name_unique').on(table.userId, table.projectName),
		index('project_user_idx').on(table.userId),
	]
)
