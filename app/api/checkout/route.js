import { stripe } from '@/lib/stripe'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { priceId, productName } = await req.json()

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/shop`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'MX', 'GB', 'DE', 'FR', 'ES', 'IT', 'NL', 'AU'],
      },
      metadata: { productName },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
