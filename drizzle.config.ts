import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: '.env.local' })

const allShema = [
	'./src/db/sql/auth-schema.ts',
	'./src/db/sql/project-schema.ts',
]

export default defineConfig({
	out: './src/db/migrations',
	schema: allShema,
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
})
