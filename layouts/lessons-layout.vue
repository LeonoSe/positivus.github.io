<template>
  <div class="flex flex-col min-h-screen">
    <div class="wrapper w-full">
      <header class="p-6 flex justify-between w-full box-border md:items-center">
        <NuxtLink :to="localePath('/')">
          <img src="~/assets/img/logo.svg">
        </NuxtLink>
        <button class="navbar-burger flex items-center text-white w-[40px] h-[40px] lg:hidden">
          <svg class="block h-full w-full fill-current lg:hidden" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
        <NuxtLink class="text-center text-black text-base rounded-2xl px-4 py-2 bg-primary border border-black shadow-regular hidden lg:block" href="#">To the guide</NuxtLink>
      </header>
    </div>
    <div class="flex flex-col flex-grow lg:flex-row wrapper w-full">
      <nav class="p-6">
        <ul>
          <li v-for="item in navigation">
            <h3 class="font-bold text-lg mb-2">{{ item.title }}</h3>
            <ol>
              <li class="mb-2" v-for="(link, index) in item.links">
                <NuxtLink :to="localePath('/lessons' + link.link)">{{ navOrderNumber(index) + '. ' + link.name }}</NuxtLink>
              </li>
            </ol>
          </li>
        </ul>
      </nav>
      <slot></slot>
    </div>
    <footer-component class="mt-auto"></footer-component>
  </div>
</template>

<script setup lang="ts">
  const navigation = [
    {title: 'Payment System design', links: [{name: 'Product 1', link: '/product'}, {name: 'Урок 1', link: '/lesson-1'}]}
  ]

  function navOrderNumber(number: number) {
    return (number < 10) ? ("0" + number) : number;
  }

  const localePath = useLocalePath();
</script>