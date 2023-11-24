<template>
  <div class="bg-[#14151B]">
    <footer class="p-5 flex flex-col wrapper">
      <div class="flex flex-col items-center md:flex-row">
        <img class="w-[116px] mb-5" src="../assets/img/logo.svg">
        <form class="flex flex-col bg-secondary w-full p-8 mb-4 rounded-2xl md:w-[600px] md:ml-auto md:flex-row">
          <input type="email" required placeholder="Email" class="bg-transparent px-4 py-4 border border-white rounded-2xl mb-4 md:mb-0 md:mr-6 md:flex-grow">
          <button class="w-full text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular md:w-auto" type="submit">Subscribe to news</button>
        </form>
      </div>
      <div class="flex flex-col border-white border-t py-5 items-center md:flex-row-reverse">
        <ul class="flex mb-4 md:mb-0">
          <li class="mr-4"><a href="linkedin.com"><img src="../assets/img/linkedin-white.svg"></a></li>
          <li class="mr-4"><a href="facebook.com"><img src="../assets/img/facebook.svg"></a></li>
          <li><a href="twitter.com"><img src="../assets/img/twitter.svg"></a></li>
        </ul>
        <div class="w-full text-center md:w-auto md:mr-auto"><p>{{ $t('copyright') }}</p></div>
      </div>
    </footer>
  </div>
</template>
