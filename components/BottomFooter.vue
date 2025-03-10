<template>
  <footer class="flex flex-col items-center justify-center bg-primary text-white">
    <div class="flex flex-col items-center w-full py-8 px-8 tablet:py-16 border-b-2 border-primary-dark">
      <h3 class="uppercase text-3xl font-bold">Subscribe to our newsletter</h3>
      <p class="text-xs text-gray-50 font-light pb-4">Get the latest updates on new products and upcoming sales</p>
      <div class="flex items-center justify-center w-full">
        <LoftusEmailInput class="text-black w-full max-w-2xl" />
        <LoftusButton class="ml-2 bg-primary-dark border-primary-dark text-white hover:bg-white hover:text-primary">Subscribe</LoftusButton>
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
            <LoftusLink class="rounded-full px-2 py-px mr-2 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white hover:no-underline" href="https://www.facebook.com/LoftusInternational" rel="noreferrer" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f" aria-hidden="true" /></LoftusLink>
            <LoftusLink class="rounded-full px-2 py-0.5 mr-2 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white hover:no-underline" href="https://www.instagram.com/loftusinternational" rel="noreferrer" target="_blank" aria-label="Instagram"><i class="fab fa-instagram" aria-hidden="true" /></LoftusLink>
            <LoftusLink class="rounded-full px-2 py-0.5 mr-2 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white hover:no-underline" href="https://x.com/loftusintl" rel="noreferrer" target="_blank" aria-label="Twitter"><i class="fab fa-twitter" aria-hidden="true" /></LoftusLink>
            <LoftusLink class="rounded-full px-2 py-0.5 mr-2 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white hover:no-underline" href="https://www.pinterest.com/loftusinternational" rel="noreferrer" target="_blank" aria-label="Pinterest"><i class="fab fa-pinterest" aria-hidden="true" /></LoftusLink>
            <LoftusLink class="rounded-full px-2 py-0.5 text-lg align-middle text-primary bg-white hover:bg-primary-dark hover:text-white hover:no-underline" href="https://www.youtube.com/user/LoftusInternational" rel="noreferrer" target="_blank" aria-label="YouTube"><i class="fab fa-youtube" aria-hidden="true" /></LoftusLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col mt-8 phone:mt-0">
        <h5 class="text-lg uppercase font-semibold">Products</h5>
        <ul class="text-sm mt-2">
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/featured-products">Featured Products</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/bestselling-products">Bestselling Products</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/latest-products">Latest Products</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/special-products">Special Products</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/top-rated-products">Top Rated Products</LoftusLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col mt-8 tablet:mt-0">
        <h5 class="text-lg uppercase font-semibold">Important links</h5>
        <ul class="text-sm mt-2">
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/about">About Us</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/contact">Contact</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/return-policy">Return Policy</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/privacy-products">Privacy Policy</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/terms-conditions">Terms & Conditions</LoftusLink>
          </li>
        </ul>
      </div>

      <div class="flex flex-col mt-8 laptop:mt-0">
        <h5 class="text-lg uppercase font-semibold">Extra</h5>
        <ul class="text-sm mt-2">
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/search">Search</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/account">Account</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/news">News</LoftusLink>
          </li>
          <li class="my-2">
            <LoftusLink class="hover:text-gray-200" to="/collections/all-products">All Products</LoftusLink>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <span> Copyright © {{ year }} <span class="bold"></span>Loftus International</span>
    </div>

    <div class="pt-0.5">
      <span class="nowrap">Powered by <LoftusLink href="https://chromedomewebdesigns.com" rel="noreferrer" target="_blank">Chrome Dome Web Designs</LoftusLink></span>
    </div>

    <div class="flex items-center pb-2 pt-1">
      <LoftusImage src="~/assets/svg/visa.svg" />
      <LoftusImage src="~/assets/svg/mastercard.svg" />
      <LoftusImage src="~/assets/svg/amex.svg" />
      <LoftusImage src="~/assets/svg/paypal.svg" />
      <LoftusImage src="~/assets/svg/diners-club.svg" />
      <LoftusImage src="~/assets/svg/discover.svg" />
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
