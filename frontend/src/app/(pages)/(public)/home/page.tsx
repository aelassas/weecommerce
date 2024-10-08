
import * as wexcommerceTypes from ':wexcommerce-types'
import env from '@/config/env.config'
import * as SettingService from '@/lib/SettingService'
import * as ProductService from '@/lib/ProductService'
import * as CartService from '@/lib/CartService'
import * as CategoryService from '@/lib/CategoryService'
import { strings } from '@/lang/home'
import FeaturedProducts from '@/components/FeaturedProducts'
import Carrousel from '@/components/Carrousel'
import CategoryList from '@/components/CategoryList'
import FeaturedCategories from '@/components/FeaturedCategories'

import styles from '@/styles/home.module.css'

const slides = [
  '/slides/slide1.jpg',
  '/slides/slide2.jpg',
  '/slides/slide3.jpg',
  '/slides/slide4.jpg',
]

const Home = async () => {

  let featuredProducts: wexcommerceTypes.Product[] = []
  let categories: wexcommerceTypes.CategoryInfo[] = []
  let categoryGroups: wexcommerceTypes.FeaturedCategory[] = []

  try {
    const cartId = await CartService.getCartId()
    featuredProducts = await ProductService.getFeaturedProducts(env.FEATURED_PRODUCTS_SIZE, cartId)

    const language = await SettingService.getLanguage()
    categories = await CategoryService.getCategories(language, true)

    categoryGroups = await CategoryService.getFeaturedCategories(language, env.FEATURED_PRODUCTS_SIZE, cartId)
  } catch (err) {
    console.error(err)
  }

  return (
    <div className={styles.main}>

      <div className={styles.carrousel}>
        <Carrousel
          images={slides}
          autoplay
          autoplaySpeed={4 * 1000}
          showNavigation
        />
      </div>

      <div className={styles.featuredProducs}>
        <FeaturedProducts
          title={strings.FEATURED_PRODUCTS_TITLE}
          products={featuredProducts}
          autoplay
          autoplaySpeed={5 * 1000}
        />
      </div>

      <div className={styles.categories}>
        <CategoryList title={strings.CATEGORIES_TITLE} categories={categories} />
      </div>

      <div className={styles.featuredCategories}>
        <FeaturedCategories categoryGroups={categoryGroups} />
      </div>

    </div>
  )
}

export default Home