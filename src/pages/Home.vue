<template> <div class="">

<h1 class="flex justify-center items-center py-11 font-mono text-lg text-white">Registrate o Inicia Sesion para acceder a las demas rutas</h1>

<div class="flex gap-4 justify-center items-center mb-24">
	<AntDrawerLogin> </AntDrawerLogin>
	<AntDrawerRegister> </AntDrawerRegister>
</div>

<h1 class="flex justify-center items-center pb-8 font-mono text-lg text-white">Agrega 3 imagenes o mas para crear tu carousel</h1>

<Carousel> </Carousel>

<main class="grid gap-4 grid-cols-2 mx-11 pt-7 text-white ">
	<main :class="`bg-[#003543]`">
		<div class="flex justify-center m-11">

		</div>

		

		<div v-if="MostrarCode">
		
		</div>
	</main>

	<main class="bg-[#003543]">
	  <Message1> </Message1>
	</main>
</main>
</div> </template>

<script setup>
import AntDrawerLogin from '../components/ant/AntDrawerLogin.vue';
import AntDrawerRegister from '../components/ant/AntDrawerRegister.vue';
import Carousel from '../components/Carousel.vue';
import Progress1 from '../components/muestra/Progress1.vue';
import Message1 from '../components/muestra/Message1.vue';
import { ref } from 'vue';
import Upload from '../components/muestra/Upload.vue';

const MostrarCode = ref(false)

const show = () => {
  MostrarCode.value = !MostrarCode.value;
  };
</script>

<style lang="scss" scoped>

</style>
<!-- #00DC82 -->