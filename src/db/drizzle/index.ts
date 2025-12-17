import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { account, session, user, verification } from '../sql/auth-schema'
import { project } from '../sql/project-schema'
import {
	accountRelations,
	projectRelations,
	sessionRelations,
	userRelations,
} from '../sql/relationships'

config({ path: '.env.local' })

const pool = new Pool({
	connectionString: process.env.DATABASE_URL!,
})

const allSchemaAndRelationships = {
	user,
	session,
	account,
	verification,
	project,
	userRelations,
	sessionRelations,
	accountRelations,
	projectRelations,
}

export const db = drizzle(pool, { schema: allSchemaAndRelationships })
