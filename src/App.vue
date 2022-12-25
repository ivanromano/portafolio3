<template>

<div class="flex flex-wrap-reverse lg:fixed z-10">
  <section class="mx-auto">
      <!-- navbar -->
  <nav class="flex justify-between bg-[#001E26] text-[#00DC82] w-screen">
    <div class="px-5 xl:px-12 py-1 flex w-full items-center">
      <dingding-outlined two-tone-color="#ff37cd" :style="{fontSize: '40px'}" />
      <div class="text-[30px] font-mono"> victory </div>
        <!-- Nav Links -->
      <ul class="hidden md:flex px-2 mx-auto font-semibold  space-x-12 mt-[10px]">
        <li><RouterLink :class="`${cssLi}`" to="/"> Home</RouterLink> </li>
        <a-dropdown placement="bottom"  >                                                                      
        <li><a :class="`${cssLi}`" href="#">Componentes <svg class="ml-1 mt-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </a></li>
          <template #overlay :style="{}" >
            <a-menu :style="{background: '#255461', marginTop: '22px'}" >
              <main v-for="item in drowComponentes" :key="item.id"> <!-- ! vfor del down componentes -->
                <a-menu-item  :style="{background: '#255461'}" >
                  <nav :class="`${item.css1}`">
                    <p :class="`${item.css2} `" rel="noopener noreferrer" > 
                      <main v-if="item.icon === 0" :class="`${cssIconos} bg-green-400 duration-500  group-hover:bg-green-700`"> <ant-design-outlined /> </main> 
                      <main v-if="item.icon === 1" :class="`${cssIconos} bg-blue-400 duration-500  group-hover:bg-blue-700`"> <bg-colors-outlined /> </main> 
                      <main v-if="item.icon === 2" :class="`${cssIconos} bg-amber-400 duration-500  group-hover:bg-amber-700`"> <pie-chart-outlined /> </main> 
                      {{ item.name }} <br> <span class="ml-11"> {{ item.description }} </span> 
                    </p>
                  </nav>
                </a-menu-item>
              </main>
	          </a-menu>
          </template>
        </a-dropdown>
        
        <li><RouterLink :class="`${cssLi}`" to="/presupuesto"> Contact</RouterLink> </li>
        <li><RouterLink :class="`${cssLi}`" to="/presupuesto"> Donate</RouterLink> </li>


        </ul>
        <!-- Header Icons -->
        <div class="hidden xl:flex items-center space-x-5 ">

          <a style="{text-decoration: none}" href="https://github.com/freeCodeCamp/scripts" >
            <!-- <github-outlined two-tone-color="#ff37cd" :style="{fontSize: '40px'}" /> -->
          </a>
          <!-- Sign In / Register      -->

        </div>
      </div>
      <!-- Responsive navbar -->
      <a class="md:hidden flex mr-6 items-center" href="#">

        <!-- <AntMovilDrawer> </AntMovilDrawer> -->
      </a>
    </nav>
  </section>
</div>
  <!-- <nav class="inline">
    <RouterLink to="/tag">linkTag </RouterLink>
  </nav> -->
  <ant-design-outlined />
  <RouterView class="h-full  bg-[#001E26]"></RouterView>
</template>

<script setup>
import {AntDesignOutlined, BgColorsOutlined, PieChartOutlined,  DingdingOutlined, GithubOutlined, UnorderedListOutlined, CaretDownOutlined, UserOutlined} from '@ant-design/icons-vue';
import { ref } from 'vue';
// import AntMovilDrawer from './components/ant/AntMovilDrawer.vue';

const cssLi = 'text-[#fff] text-xl hover:text-[#B2CCCC] inline-flex items-center cursor-pointer duration-300'
const cssIconos = 'text-[#fff] text-xl p-2 m-1 hover:text-[#B2CCCC] inline-flex items-center cursor-pointer duration-300'


const drowComponentes = ref([{
  id: 1,
  name: 'Ant Desing',
  css1: 'rounded-md hover:bg-[#4DE7A8] duration-500 hover:translate-x-[1rem]',
  css2: ' text-white my-auto duration-300 hover:text-green-800 group', 
  icon: 0,
  description: 'An enterprice-class UI design language',
  },
  {
  id: 2,
  name: 'Tailwind',
  css1: 'rounded-md hover:bg-[#408BD6] duration-500 hover:translate-x-[1rem]',
  css2: ' text-white my-auto duration-300 hover:text-[#00468C] group',
  icon: 1,
  description: 'A utility-first CCS framework',
  },
  {
  id: 3,
  name: 'Logic',
  css1: 'rounded-md hover:bg-amber-400 duration-500 hover:translate-x-[1rem]',
  css2: ' text-white my-auto duration-300 hover:text-[#793409] group',
  icon: 2,
  description: 'The progressive framework',
  },
])

</script>

<style lang="scss" scoped>

</style>