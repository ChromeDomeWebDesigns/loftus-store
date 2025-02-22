<template>
  <footer class="flex flex-col items-center justify-center bg-primary text-white">
    <div class="flex flex-col items-center w-full py-8 px-8 tablet:py-16 border-b-2 border-primary-dark">
      <h3 class="uppercase text-3xl font-bold">Subscribe to our newsletter</h3>
      <p class="text-xs text-gray-50 font-light pb-4">Get the latest updates on new products and upcoming sales</p>
      <div class="flex items-center justify-center w-full">
        <input type="email" placeholder="Email" class="rounded py-2 px-4 text-black w-full max-w-2xl">
        <button class="rounded bg-primary-dark text-white px-3 py-2 ml-2 hover:bg-white hover:text-primary transition-all duration-300">Subscribe</button>
      </div>
    </div>

    <div class="grid phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 justify-items-start laptop:justify-items-center w-full py-8 px-8 tablet:py-16">
      <div class="flex flex-col">
        <h5 class="text-lg uppercase font-semibold">Contact us</h5>
        <ul class="text-sm">
          <li class="flex mt-4">
            <i class="fas fa-map-marker-alt pt-1 pr-2"></i>
            <div class="flex flex-col">
              <span class="font-bold">Loftus International</span>
              <span>865 S. 200 E.</span>
              <span>Salt Lake City, UT 84111</span>
              <span>USA</span>
            </div>
          </li>
          <li class="flex mt-4">
            <i class="fas fa-phone-alt pt-1 pr-2"></i>
            <div class="flex flex-col">
              <span>Toll Free Phone: 800-453-4879</span>
              <span>Toll Free Fax: 888-871-7375</span>
              <span>Phone: 801-355-5335</span>
              <span>Fax: 801-355-9995</span>
            </div>
          </li>
          <li class="flex mt-4">
            <i class="fas fa-envelope pt-1 pr-2"></i>
            <span>sales@loftus.com</span>
          </li>
          <li class="flex items-center mt-4">
            <a class="rounded-full px-2 py-px mr-2 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white transition-all duration-300" href="https://www.facebook.com/LoftusInternational" rel="noreferrer" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true" /></a>
            <a class="rounded-full px-2 py-0.5 mr-2 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white transition-all duration-300" href="https://www.instagram.com/loftusinternational" rel="noreferrer" target="_blank" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true" /></a>
            <a class="rounded-full px-2 py-0.5 mr-2 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white transition-all duration-300" href="https://x.com/loftusintl" rel="noreferrer" target="_blank" aria-label="Twitter"><i class="fab fa-twitter" aria-hidden="true" /></a>
            <a class="rounded-full px-2 py-0.5 mr-2 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white transition-all duration-300" href="https://www.pinterest.com/loftusinternational" rel="noreferrer" target="_blank" aria-label="Pinterest"><i class="fab fa-pinterest" aria-hidden="true" /></a>
            <a class="rounded-full px-2 py-0.5 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white transition-all duration-300" href="https://www.youtube.com/user/LoftusInternational" rel="noreferrer" target="_blank" aria-label="YouTube"><i class="fab fa-youtube" aria-hidden="true" /></a>
          </li>
        </ul>
      </div>

      <div class="flex flex-col mt-8 phone:mt-0">
        <h5 class="text-lg uppercase font-semibold">Products</h5>
        <ul class="text-sm mt-2">
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/featured-products">Featured Products</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/bestselling-products">Bestselling Products</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/latest-products">Latest Products</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/special-products">Special Products</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/top-rated-products">Top Rated Products</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="flex flex-col mt-8 tablet:mt-0">
        <h5 class="text-lg uppercase font-semibold">Important links</h5>
        <ul class="text-sm mt-2">
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/about">About Us</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/contact">Contact</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/return-policy">Return Policy</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/privacy-products">Privacy Policy</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/terms-conditions">Terms & Conditions</nuxt-link>
          </li>
        </ul>
      </div>

      <div class="flex flex-col mt-8 laptop:mt-0">
        <h5 class="text-lg uppercase font-semibold">Extra</h5>
        <ul class="text-sm mt-2">
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/search">Search</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/account">Account</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/news">News</nuxt-link>
          </li>
          <li class="my-2">
            <nuxt-link class="hover:text-gray-200 transition-all duration-300" to="/all-products">All Products</nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <span> Copyright © {{ year }} <span class="bold"></span>Loftus International</span>
    </div>

    <div class="pt-0.5">
      <span class="nowrap">Powered by <a href="https://chromedomewebdesigns.com" rel="noreferrer" target="_blank">Chrome Dome Web Designs</a></span>
    </div>

    <div class="flex items-center pb-2 pt-1">
      <img src="@/assets/svg/visa.svg" />
      <img src="@/assets/svg/mastercard.svg" />
      <img src="@/assets/svg/amex.svg" />
      <img src="@/assets/svg/paypal.svg" />
      <img src="@/assets/svg/diners-club.svg" />
      <img src="@/assets/svg/discover.svg" />
    </div>

  </footer>
</template>

<script>
export default {
  name: 'BottomFooter',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './assets/scss/breaks';

  footer {
    font-size: 0.8em;

    @media (min-width: breaks(large-tablet)) {
      font-size: 0.9em;
    }

    @media (min-width: breaks(laptop)) {
      font-size: 1em
    }
  }
</style>
