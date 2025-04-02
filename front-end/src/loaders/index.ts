import StripeProviderService from "@medusajs/payment-stripe/dist/services/stripe-provider.js"
console.log("test")
export default async function mainLoader({ container }) {
    const stripeService = new StripeProviderService(container, {
        apiKey: process.env.STRIPE_API_KEY!,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    })

    container.register({
        pp_stripe: stripeService,
    })

    console.log("✅ Manually registered Stripe provider")
}
