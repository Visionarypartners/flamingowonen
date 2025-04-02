import { loadEnv, defineConfig } from '@medusajs/framework/utils';

loadEnv(process.env.NODE_ENV || 'production', process.cwd());

export default defineConfig({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        workerMode: process.env.MEDUSA_WORKER_MODE as "shared" | "worker" | "server",
        redisUrl: process.env.REDIS_URL,
        http: {
            storeCors: process.env.STORE_CORS!,
            adminCors: process.env.ADMIN_CORS!,
            authCors: process.env.AUTH_CORS!,
            jwtSecret: process.env.JWT_SECRET || 'supersecret',
            cookieSecret: process.env.COOKIE_SECRET || 'supersecret'
        }
    },
    admin: {
        disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
        backendUrl: process.env.MEDUSA_BACKEND_URL,
    },
    modules: [
        {
            resolve: '@medusajs/medusa/payment',
            options: {
                providers: [
                    {
                        resolve: '@medusajs/payment-stripe',
                        id: 'stripe',
                        options: {
                            apiKey: process.env.STRIPE_API_KEY,
                            webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
                            checkoutSessions: true,
                        },
                    },
                ],
            },
        },
        {
            resolve: "@medusajs/medusa/cache-redis",
            options: {
                redisUrl: process.env.REDIS_URL,
            },
        },
        {
            resolve: "@medusajs/medusa/event-bus-redis",
            options: {
                redisUrl: process.env.REDIS_URL,
            },
        },
        {
            resolve: "@medusajs/medusa/workflow-engine-redis",
            options: {
                redis: {
                    url: process.env.REDIS_URL,
                },
            },
        },

    ],
});
