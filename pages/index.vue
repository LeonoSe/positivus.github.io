<template>
  <div class="wrapper">
    <header class="flex justify-between p-6 md:items-center">
      <img src="~/assets/img/logo.svg">
      <nav class="hidden md:block md:ml-auto">
        <ul class="md:flex">
          <li class="mr-8"><NuxtLink :to="localePath('lessons')">{{ $t('lessons') }}</NuxtLink></li>
          <li class="mr-8"><a href="#">{{ $t('lessons') }}</a></li>
          <li class="mr-8">
            <NuxtLink :to="switchLocalePath(otherLocale)">{{ currentLocale.toUpperCase() }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtLink class="text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular md:text-xl md:px-6" href="#">{{ $t('try') }}</NuxtLink>
    </header>
    <main class="p-6">
      <section class="flex flex-col mb-8 md:flex-row md:relative md:min-h-[345px] md:items-center lg:min-h-[640px] lg:mb-20">
        <div class="md:w-1/2 md:flex md:flex-col md:items-start lg:w-3/5">
          <h1 class="font-bold text-4xl lg:text-6xl">{{ $t('welcome') }}</h1>
          <p class="font-medium text-4xl md:mb-5 lg:text-6xl">{{ $t('learn-more') }}</p>
          <NuxtLink class="w-auto text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular hidden md:block md:text-xl" :to="localePath('lessons')">{{ $t('open-guide') }}</NuxtLink>
        </div>
        <img class="block pt-8 pb-4 md:absolute md:top-0 md:left-1/2 md:w-[600px] md:p-0 lg:min-w-[1200px] lg:left-[60%]" src="~/assets/img/system.png">
        <p class="pb-4 md:hidden">{{ $t('guide-description') }}</p>
        <NuxtLink class="w-full text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular md:hidden" href="#">{{ $t('open-guide') }}</NuxtLink>
      </section>
      <section class="pt-5 mb-8 flex flex-col items-center md:items-start md:mb-16 lg:mb-20">
        <div class="flex flex-col items-center md:items-start md:py-6">
          <h2 class="bg-primary w-auto text-center text-black font-bold rounded-lg text-4xl p-1 mb-4 lg:text-6xl">{{ $t('systems') }}</h2>
          <p class="mb-4 text-center w-auto">{{ $t('how-many-lessons') }}</p>
        </div>
        <ul class="w-full flex flex-col md:hidden">
          <li v-for="lesson in $tm('system-list')" :key="lesson" class="p-8 mb-4 bg-white rounded-2xl shadow-regular flex flex-col items-start">
            <h3 class="px-2 bg-black rounded-lg mb-4 text-2xl">{{ $rt(lesson.title) }}</h3>
            <NuxtLink class="text-black" :to="localePath(lesson.link)"><img src="~/assets/img/arrow.svg"></NuxtLink>
          </li>
        </ul>
        <div class="hidden w-full md:block">
          <Swiper
              :slides-per-view="3"
              :loop="true"
              :autoplay="{ delay: 3000 }"
          >
            <SwiperSlide v-for="slide in $tm('slider')">
              <div class="w-full h-full min-h-[420px] p-8 bg-white rounded-2xl shadow-regular flex flex-col items-start">
                <h3 class="px-2 bg-black rounded-lg mb-4 text-2xl">{{ slide.title }}</h3>
                <NuxtLink class="flex text-black items-center mt-auto" :to="localePath(slide.link)"><img class="mr-4" src="~/assets/img/arrow.svg">{{ $t('open-lesson') }}</NuxtLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <NuxtLink class="w-full text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular md:hidden" href="#">{{ $t('open-lessons') }}</NuxtLink>
      </section>
      <section class="hidden pt-5 mb-16 items-center rounded-3xl shadow-big min-h-[400px] md:flex bg-[#14151B] lg:mb-20">
        <div class="flex flex-col items-start p-14 w-1/2">
          <h2 class="text-4xl mb-8 lg:text-6xl">{{ $t('guide-structure') }}</h2>
          <p class="text-s mb-8">{{ $t('guide-description') }}</p>
          <NuxtLink class="text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular" href="#">{{ $t('open-guide') }}</NuxtLink>
        </div>
        <img class="block w-1/2" src="~/assets/img/system-guide.png">
        </section>
      <section class="pt-5 mb-8 flex flex-col items-center md:items-start lg:mb-20">
        <div class="flex flex-col items-center md:items-start md:py-6">
          <h2 class="bg-primary w-auto text-center text-black font-bold rounded-lg text-4xl p-1 mb-4 lg:text-6xl">{{ $t('open-guide') }}</h2>
          <p class="mb-4 text-center w-auto">{{ $t('real-products') }}</p>
        </div>
        <ul class="w-full">
          <li class="p-8 bg-white shadow-regular mb-5 rounded-3xl text-black" v-for="(item, index) in $tm('accordion')">
            <accordion-panel :title="item.title" :index="index">
              <ul class="list-disc pl-4 mb-4">
                <li v-for="description in item.description" v-html="description"></li>
              </ul>
              <NuxtLink class="flex text-black items-center" href="#"><img class="mr-4" src="~/assets/img/arrow.svg">{{ $t('soon') }}</NuxtLink>
            </accordion-panel>
          </li>
        </ul>
      </section>
      <section class="pt-5 mb-8 flex flex-col items-center md:items-baseline lg:mb-20">
        <h2 class="bg-primary w-auto text-center text-black font-bold rounded-lg text-4xl p-1 mb-4 md:mb-12 lg:text-6xl">{{ $t('about-me') }}</h2>
        <div class="w-full p-8 bg-white shadow-regular mb-5 rounded-3xl text-black">
          <div class="flex pb-4 border-black border-b mb-4">
            <img src="~/assets/img/avatar.png">
            <div class="px-2">
              <h4 class="text-lg">{{ $t('konstantin') }}</h4>
              <p class="text-s">{{ $t('founder') }}</p>
            </div>
            <a class="ml-auto shrink-0" href="linkedin.com"><img src="~/assets/img/linkedin.png"></a>
          </div>
          <p>{{ $t('experience-description') }}</p>
        </div>
      </section>
    </main>
  </div>
  <footer-component></footer-component>
</template>

<script setup lang="ts">
  const switchLocalePath = useSwitchLocalePath();
  const localePath = useLocalePath();
  const { locale, setLocale } = useI18n();

  const otherLocale = locale.value === 'ru' ? 'en' : 'ru';
  const currentLocale = locale;
</script>

<style scoped>
  .swiper {
    width: 100%;
  }

  .swiper-slide {
    display: flex;
    width: 100%;
    padding: 15px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  }
  .swiper-wrapper {
    min-width: 100%;
    width: 100%;
  }
</style>