<template>
  <div class="wrapper">
    <header class="flex justify-between p-5 md:items-center">
      <img src="~/assets/img/logo.svg">
      <nav class="hidden md:block md:ml-auto">
        <ul class="md:flex">
          <li class="mr-8"><a href="#">Lessons</a></li>
          <li class="mr-8"><a href="#">Membership</a></li>
          <li class="mr-8"><a href="#">Rus</a></li>
        </ul>
      </nav>
      <NuxtLink class="text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular md:text-xl md:px-6" href="#">Try it</NuxtLink>
    </header>
    <main class="p-5">
      <section class="flex flex-col mb-8 md:flex-row md:relative md:min-h-[345px] md:items-center lg:min-h-[640px] lg:mb-20">
        <div class="md:w-1/2 md:flex md:flex-col md:items-start lg:w-3/5">
          <h1 class="font-bold text-4xl lg:text-6xl">хeй, это гид по платежным системам!</h1>
          <p class="font-medium text-4xl md:mb-5 lg:text-6xl">узнай больше о системах от инженеров, которые их проектируют 🔥</p>
          <NuxtLink class="w-auto text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular hidden md:block md:text-xl" href="#">Открыть гид</NuxtLink>
        </div>
        <img class="block pt-8 pb-4 md:absolute md:top-0 md:left-1/2 md:w-[600px] md:p-0 lg:min-w-[1200px] lg:left-[60%]" src="~/assets/img/system.png">
        <p class="pb-4 md:hidden">Гид позволяет выбрать и исследовать различные темы и направления. А также покажет как разные решения пересекаются и используются во многих продуктах</p>
        <NuxtLink class="w-full text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular md:hidden" href="#">Открыть гид</NuxtLink>
      </section>
      <section class="pt-5 mb-8 flex flex-col items-center md:items-start md:mb-16 lg:mb-20">
        <div class="flex flex-col items-center md:items-start md:py-6">
          <h2 class="bg-primary w-auto text-center text-black font-bold rounded-lg text-4xl p-1 mb-4 lg:text-6xl">20+ дизайн систем</h2>
          <p class="mb-4 text-center w-auto">50+ уроков, 10+ спроектированных сервисов и функциональных решений</p>
        </div>
        <ul class="w-full flex flex-col md:hidden">
          <li v-for="lesson in lessons.slice(0, 3)" class="p-8 mb-4 bg-white rounded-2xl shadow-regular flex flex-col items-start">
            <h3 class="px-2 bg-black rounded-lg mb-4 text-2xl">{{ lesson.title }}</h3>
            <NuxtLink class="text-black" href="{{ lesson.link }}#"><img src="~/assets/img/arrow.svg"></NuxtLink>
          </li>
        </ul>
        <div class="hidden w-full md:block">
          <Swiper
              :slides-per-view="3"
              :loop="true"
              :autoplay="{ delay: 3000 }"
          >
            <SwiperSlide v-for="slide in lessons">
              <div class="w-full h-full min-h-[420px] p-8 bg-white rounded-2xl shadow-regular flex flex-col items-start">
                <h3 class="px-2 bg-black rounded-lg mb-4 text-2xl">{{ slide.title }}</h3>
                <NuxtLink class="flex text-black items-center mt-auto" :href="slide.link"><img class="mr-4" src="~/assets/img/arrow.svg">Открыть урок</NuxtLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <NuxtLink class="w-full text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular md:hidden" href="#">Открыть уроки</NuxtLink>
      </section>
      <section class="hidden pt-5 mb-16 items-center rounded-3xl shadow-big min-h-[400px] md:flex bg-[#14151B] lg:mb-20">
        <div class="flex flex-col items-start p-14 w-1/2">
          <h2 class="text-4xl mb-8 lg:text-6xl">Из чего состоит гид?</h2>
          <p class="text-s mb-8">Гид позволяет выбрать и исследовать различные темы и направления. А также покажет как разные решения пересекаются и используются во многих продуктах</p>
          <NuxtLink class="text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular" href="#">Открыть гид</NuxtLink>
        </div>
        <img class="block w-1/2" src="~/assets/img/system-guide.png">
        </section>
      <section class="pt-5 mb-8 flex flex-col items-center md:items-start lg:mb-20">
        <h2 class="bg-primary w-auto text-center text-black font-bold rounded-lg text-4xl p-1 mb-4 lg:text-6xl">5+ реальных продуктов</h2>
        <p class="mb-4 text-center w-auto">Шаг за шагом создадим платежные продукты</p>
        <ul class="w-full">
          <li class="p-8 bg-white shadow-regular mb-5 rounded-3xl text-black" v-for="(item, index) in accordion">
            <accordion-panel :title="item.title" :index="index">
              <ul class="list-disc pl-4 mb-4">
                <li v-for="description in item.description" v-html="description"></li>
              </ul>
              <NuxtLink class="flex text-black items-center" href="#"><img class="mr-4" src="~/assets/img/arrow.svg">Coming soon</NuxtLink>
            </accordion-panel>
          </li>
        </ul>
      </section>
      <section class="pt-5 mb-8 flex flex-col items-center md:items-baseline lg:mb-20">
        <h2 class="bg-primary w-auto text-center text-black font-bold rounded-lg text-4xl p-1 mb-4 md:mb-12 lg:text-6xl">Обо мне</h2>
        <div class="w-full p-8 bg-white shadow-regular mb-5 rounded-3xl text-black">
          <div class="flex pb-4 border-black border-b mb-4">
            <img src="~/assets/img/avatar.png">
            <div class="px-2">
              <h4 class="text-lg">Константин Крашеница</h4>
              <p class="text-s">Founder</p>
            </div>
            <a class="ml-auto shrink-0" href="linkedin.com"><img src="~/assets/img/linkedin.png"></a>
          </div>
          <p>10+ опыта в создании и развитии платежных систем, биржевых брокеров, банковских приложений как со стороны системного и технического анализа, так и со стороны продуктовой аналитики.</p>
        </div>
      </section>
    </main>
  </div>
  <footer-component></footer-component>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';

  const lessons = [
    {title: 'Дизайн FX Rate сервиса', link: 'lessons'},
    {title: 'Дизайн Limiter для финансовых операций', link: 'lessons'},
    {title: 'Дизайн Proximity сервиса для банкоматов', link: 'lessons'},
    {title: 'Дизайн Account с двойной записью', link: 'lessons'},
    {title: 'Дизайн сервиса комиссий', link: 'lessons'},
    {title: 'Дизайн фондовой биржи', link: 'lessons'},
    {title: 'Дизайн сервиса нотификаций', link: 'lessons'}
  ];

  const accordion = [
    {title: 'Crypto-exchanger',
      description: [
        '<b>Курсы и spread</b> - узнаем, как интегрироваться через биржевый стакан',
        '<b>Как управлять спредом</b> - какие алгоритмы использовать, фиксированный и ступенчатый спред',
        '<b>Спроектируем exchanger через P2P - сети</b> - с подпиской на обменный курс или с бронированием курсов',
        '<b>Спроектируем систему арбитража</b> - и узнаем разные схемы арбитража'
      ]
    },
    {title: 'E-commerce provider',
      description: [
        '<b>Push и Pull платежи</b> - recurrent, refund и другие платежные сценарии',
        '<b>E-commerce платежи</b> - интернет-acquiring, платежные формы, ссылки и QR коды',
        'Buy now, Pay later (BNPL)',
        'Save now, Buy later (SNBL)',
        'Pay-as-you-drive (PAYD)',
        'Pay-as-you-use (PAYU)'
      ]
    },
    {title: 'Card Provider (Visa, Mastercard)',
      description: [
        '<b>Cross-border платежи VISA и Mastercard</b> - three-corner model и four-corner model взаимодействия',
        '<b>ApplePay и GooglePay</b> - как они хранят данные о картах и платежах',
        'Как устроены <b>dispute и chargeback</b> в VISA и Mastercard',
        '<b>Как интегрироваться с VISA и Mastercard</b> - как реализовать требования PCIDSS, token service provider (TSP)',
        '<b>3DS secure</b> проверки',
      ]
    },
    {title: 'Payment Providers',
      description: [
        'Схемы платежей - двухстадийные, одностадийные, real-time credit transfer payments (RTP)',
        'Wallet Management',
        'Currency Rate Management',
        'Payment Providers Management',
        'Risk & Fraud Management',
        'Settlement & Recalculation Management',
        'Billing & Commission Management'
      ]
    },
    {title: 'Banking',
      description: [
        '<b>Система SWIFT</b> и флоу платежей',
        '<b>Система быстрых платежей</b> - SEPA, Target2, FastPayments и другие',
        '<b>OpenAPI</b> - как работают AISP и PISP-провайдеры',
        '<b>Wallet система кошельков</b> - как правильно хранить деньги в базе данных и как управлять их движением',
      ]},
  ];
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