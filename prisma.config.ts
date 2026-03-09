// prisma.config.ts
import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',

  migrations: {
    path: 'prisma/migrations', // ✅ migrations is separate from datasource
  },

  datasource: {
    url: env('DATABASE_URL'), // ✅ this is the correct key, NOT migrate
  },
});
