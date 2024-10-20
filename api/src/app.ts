import express from 'express'
import compression from 'compression'
import helmet from 'helmet'
import nocache from 'nocache'
import cookieParser from 'cookie-parser'
import i18n from './lang/i18n'
import * as env from './config/env.config'
import cors from './middlewares/cors'
import allowedMethods from './middlewares/allowedMethods'
import userRoutes from './routes/userRoutes'
import categoryRoutes from './routes/categoryRoutes'
import productRoutes from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes'
import orderRoutes from './routes/orderRoutes'
import notificationRoutes from './routes/notificationRoutes'
import deliveryTypeRoutes from './routes/deliveryTypeRoutes'
import paymentTypeRoutes from './routes/paymentTypeRoutes'
import settingRoutes from './routes/settingRoutes'
import stripeRoutes from './routes/stripeRoutes'
import wishlistRoutes from './routes/wishlistRoutes'
import * as helper from './common/helper'

const app = express()

app.use(helmet.contentSecurityPolicy())
app.use(helmet.dnsPrefetchControl())
app.use(helmet.crossOriginEmbedderPolicy())
app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(helmet.hsts())
app.use(helmet.ieNoOpen())
app.use(helmet.noSniff())
app.use(helmet.permittedCrossDomainPolicies())
app.use(helmet.referrerPolicy())
app.use(helmet.xssFilter())
app.use(helmet.originAgentCluster())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(helmet.crossOriginOpenerPolicy())

app.use(nocache())
app.use(compression({ threshold: 0 }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb' }))

app.use(cors())
app.options('*', cors())
app.use(cookieParser(env.COOKIE_SECRET))
app.use(allowedMethods)

app.use('/', userRoutes)
app.use('/', categoryRoutes)
app.use('/', productRoutes)
app.use('/', cartRoutes)
app.use('/', orderRoutes)
app.use('/', notificationRoutes)
app.use('/', deliveryTypeRoutes)
app.use('/', paymentTypeRoutes)
app.use('/', settingRoutes)
app.use('/', stripeRoutes)
app.use('/', wishlistRoutes)

i18n.locale = env.DEFAULT_LANGUAGE

await helper.mkdir(env.CDN_USERS)
await helper.mkdir(env.CDN_TEMP_USERS)
await helper.mkdir(env.CDN_CATEGORIES)
await helper.mkdir(env.CDN_TEMP_CATEGORIES)
await helper.mkdir(env.CDN_PRODUCTS)
await helper.mkdir(env.CDN_TEMP_PRODUCTS)

export default app