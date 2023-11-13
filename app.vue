<template>
  <header class="flex justify-between p-5">
    <img src="./assets/img/logo.svg">
    <NuxtLink class="text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular" href="#">Try it</NuxtLink>
  </header>
  <main class="p-5">
    <section class="flex flex-col mb-8">
      <h1 class="font-bold text-4xl">хeй, это гид по платежным системам!</h1>
      <p class="font-medium text-4xl">узнай больше о системах от инженеров, которые их проектируют 🔥</p>
      <img class="block w-fit pt-8 pb-4" src="./assets/img/system.png">
      <p class="pb-4">Гид позволяет выбрать и исследовать различные темы и направления. А также покажет как разные решения пересекаются и используются во многих продуктах</p>
      <NuxtLink class="w-full text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular" href="#">Открыть гид</NuxtLink>
    </section>
    <section class="pt-5 mb-8 flex flex-col items-center">
      <h2 class="bg-primary w-auto text-center text-black font-bold rounded-lg text-4xl p-1 mb-4">20+ дизайн систем</h2>
      <p class="mb-4 text-center w-auto">50+ уроков, 10+ спроектированных сервисов и функциональных решений</p>
      <ul class="w-full flex flex-col">
        <li v-for="lesson in lessons.slice(0, 3)" class="p-8 mb-4 bg-white rounded-2xl shadow-regular flex flex-col items-start">
          <h3 class="px-2 bg-black rounded-lg mb-4 text-2xl">{{ lesson.title }}</h3>
          <NuxtLink class="text-black" href="{{ lesson.link }}#"><img src="./assets/img/arrow.svg"></NuxtLink>
        </li>
      </ul>
      <NuxtLink class="w-full text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular" href="#">Открыть уроки</NuxtLink>
    </section>
    <section class="pt-5 mb-8 flex flex-col items-center">
      <h2 class="bg-primary w-auto text-center text-black font-bold rounded-lg text-4xl p-1 mb-4">5+ реальных продуктов</h2>
      <p class="mb-4 text-center w-auto">Шаг за шагом создадим платежные продукты</p>
    </section>
  </main>
</template>
<script setup lang="ts">

const lessons = [
  {title: 'Дизайн FX Rate сервиса', link: ''},
  {title: 'Дизайн Limiter для финансовых операций', link: ''},
  {title: 'Дизайн Proximity сервиса для банкоматов', link: ''},
  {title: 'Дизайн Account с двойной записью', link: ''},
  {title: 'Дизайн сервиса комиссий', link: ''},
  {title: 'Дизайн фондовой биржи', link: ''},
  {title: 'Дизайн сервиса нотификаций', link: ''}
];

const accordion = [
  {title: 'Crypto-exchanger'},
  {title: 'E-commerce provider'},
  {title: 'Card Provider (Visa, Mastercard)'},
  {title: 'Payment Providers'},
  {title: 'Banking'},
];

</script>