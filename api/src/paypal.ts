import axios from 'axios'
import * as env from './config/env.config'
import * as helper from './common/helper'

const PAYPAL_API = env.PAYPAL_SANDBOX
  ? 'https://api-m.sandbox.paypal.com' // PayPal sandbox host (for testing)
  : 'https://api-m.paypal.com' // PayPal production host (for production) https://developer.paypal.com/api/rest/production/

export const getToken = async () => {
  const res = await axios.post(
    `${PAYPAL_API}/v1/oauth2/token`,
    { grant_type: 'client_credentials' },
    {
      auth: {
        username: env.PAYPAL_CLIENT_ID,
        password: env.PAYPAL_CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )

  return res.data.access_token
}

export const createOrder = async (orderId: string, amount: number, currency: string, name: string, description: string) => {
  const price = helper.formatPayPalPrice(amount)
  const token = await getToken()
  const res = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders`,
    {
      intent: 'CAPTURE',
      payer: {
        address: {
          country_code: 'US', // Only the country is required, prevents full address collection
        },
      },
      application_context: {
        brand_name: env.WEBSITE_NAME,
        locale: 'en-US',
        shipping_preference: 'NO_SHIPPING', // Removes shipping address
        user_action: 'PAY_NOW', // Skips review page
        payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED', // Ensures instant payment
      },
      payment_source: {
        card: {
          billing_address: null, // Explicitly disable billing address
        },
      },
      purchase_units: [
        {
          invoice_id: orderId,
          amount: {
            currency_code: currency,
            value: price,
            breakdown: {
              item_total: {
                currency_code: currency,
                value: price,
              },
            },
          },
          items: [
            {
              name,
              description,
              unit_amount: {
                currency_code: currency,
                value: price,
              },
              quantity: '1',
              // category: 'cars',
              // sku: 'sku01',
              // image_url: 'https://example.com/static/images/items/1/tshirt_green.jpg',
              // url: 'https://example.com/url-to-the-item-being-purchased-1',
              // upc: {
              //   type: 'UPC-A',
              //   code: '123456789012',
              // },
            },
          ],
        },
      ],
    },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return res.data.id
}

export const getOrder = async (orderId: string) => {
  const token = await getToken()
  const res = await axios.get(
    `${PAYPAL_API}/v2/checkout/orders/${orderId}`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  )

  return res.data
}
