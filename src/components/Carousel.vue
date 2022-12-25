<template> <div class="mt-3 mb-[10px] pb-[20px] bg-[#012A35]">
	<div>
    <a-upload v-model:file-list="fileList" :before-upload="beforeUpload" list-type="picture-card" @preview="handlePreview">
      <div class="">
        <plus-outlined />
        <div class="mt-[8px]">Upload</div>
      </div>

    </a-upload>



    <a-modal :visible="previewVisible" :style="{display: 'absolute', top: '2%'}" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
				<main class="grid grid-cols-2">
					<p>vida <a-rate v-model:value="vida" character="█" style="font-size: 26px" /></p>
					<p>ataque <a-rate v-model:value="ataque" character="█" style="font-size: 26px" /></p>
					<p>defensa <a-rate v-model:value="defensa" character="█" style="font-size: 26px" /></p>
					<p>ferviente <a-rate v-model:value="ferviente" character="█" style="font-size: 26px" /></p>
					<p>velocidad <a-rate v-model:value="velocidad" character="█" style="font-size: 26px" /></p>

				</main>
    	</a-modal>
  </div>

	<Carousel :itemsToShow="4.20" :wrapAround="true" :transition="400" :autoplay="autoplay" >
		<slide v-for="item in fileList" :key="item" >
			<div v-if="!item.uid.startsWith('__')"> 
				<img v-if="fileList.length > 3" :src="`${item.thumbUrl}`" @click="handlePreview" :title="item" :v-model="item"  class=" rounded-md hover:scale-[1.1] group-hover:scale-[1.1] duration-200" >
			</div>
		</slide>
	
		<template #addons>
			<div :class="`${fileList.length > 3 ? null : 'hidden'}`">
				<navigation />
				<pagination />
			</div>
		</template>
	</Carousel>
<main class="flex justify-between ">
	<div :class="`${fileList.length > 3 ? 'mt-0' : 'mt-3'}`">
		<nav :class="`inline ml-3 p-2 pb-3 rounded-xl bg-[#00DC82] text-white`"> <a-switch v-model:checked="checked" /> Autoplay </nav>
	</div>
	<div class="flex">
	<button @click="Guardar" class="flex items-end justify-end p-0.5 ml-3 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-[#00DC82] group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  	<span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Guardar
  	</span>
	</button>
	<button @click="Restaurar" class="flex items-end justify-end p-0.5 ml-3 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-[#00DC82] group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  	<span class=" px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Restaurar
  	</span>
	</button>
</div>
</main>
	<!-- :maskStyle="{opacity: 8}" -->
<main v-for="item in chaos" :key="item.id">
	<img :src="`${item.thumbUrl}`" alt="">
</main>

</div></template>
	
	<script setup>
	import { computed, ref } from 'vue';
	import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'
	import { PlusOutlined } from '@ant-design/icons-vue';
	const checked = ref(false);
	const visible = ref(false);
	const imagenModal = ref([])
		const slider = [{
			id: 0,
			img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
			funti: 'Pizza con Queso',
			price: '30',
			stock: true
		},
		{
			id: 1,
			img: 'https://www.recetas360.com/wp-content/uploads/2022/09/como-hacer-milanesa-napolitana-receta-argentina.jpg',
			funti: 'breaded veal with fries',
			price: '10',
			stock: false
		},
		{
			id: 2,
			img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Un_Cafe_y_un_sandwich_mixto.jpg/1200px-Un_Cafe_y_un_sandwich_mixto.jpg',
			funti: 'Coffe',
			price: '15',
			stock: true
		},
		{
			id: 3,
			img: 'https://www.hechicerafit.com/static/r/237/arroz-fit-con-atun-y-maiz-es-YrqLR.jpg',
			funti: 'rice with tuna',
			price: '55',
			stock: false
		},
		{
			id: 4,
			img: 'https://s1.1zoom.me/big0/272/Drinks_Hamburger_Buns_Frikadeller_Vegetables_Fast_593329_1280x853.jpg',
			funti: 'hamburger with coca-cola',
			price: '2',
			stock: true
		},
		]
	const autoplay = computed(() => {
		if (checked.value === false) {
			return 0
		} if (checked.value === true) {
			return 900
		}
	})
	const showModal = (item) => {
		visible.value = true;
		if (item.id === 0) {imagenModal.value = [{id: 0, img: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg', title: 'Victineripsis', descripcion: 'Victineripsis is the supreme king of luck and believes that luck is the greatest superpower', at: 6, de: 4, fer: 2, luc: 3}]}
		if (item.id === 1) {imagenModal.value = [{id: 1, img: 'https://www.recetas360.com/wp-content/uploads/2022/09/como-hacer-milanesa-napolitana-receta-argentina.jpg', title: 'Victini cookies', descripcion: 'Victini fell asleep thinking about his strategy for stealing cookies. But he slept too long', at: 4, de: 1, fer: 1, luc: 7}]}
		if (item.id === 2) {imagenModal.value = [{id: 2, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Un_Cafe_y_un_sandwich_mixto.jpg/1200px-Un_Cafe_y_un_sandwich_mixto.jpg', title: 'Natavil', descripcion: 'He el the brother of Leviathan. He has the power to cancel the powers of others, and can create an area where the supernatural does not exist', at: 2, de: 4, fer: 2, luc: 3}]}
		if (item.id === 3) {imagenModal.value = [{id: 3, img: 'https://www.hechicerafit.com/static/r/237/arroz-fit-con-atun-y-maiz-es-YrqLR.jpg', title: 'Lanzaria', descripcion: 'Have you ever seen a prettier clown?', at: 1, de: 2, fer: 4, luc: 6}]}
		if (item.id === 4) {imagenModal.value = [{id: 4, img: 'https://s1.1zoom.me/big0/272/Drinks_Hamburger_Buns_Frikadeller_Vegetables_Fast_593329_1280x853.jpg', title: 'Treetive', descripcion: 'red tree, wise but demanding', at: 6, de: 4, fer: 2, luc: 2}]}
	};
	const handleOk = e => {
		visible.value = false;
	};

	

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
	
  });
}

const vida = ref(2)
const ataque = ref(2)
const defensa = ref(2)
const ferviente = ref(2)
const velocidad = ref(2)

let chaos = null
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');
const fileList = ref([{}]);
    const handleCancel = () => {
      previewVisible.value = false;
      previewTitle.value = '';
    };
    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
      }
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
      previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
    console.log("wow");
		};

    const beforeUpload = async file => {
       fileList.value = await [...fileList.value, file];
			 return false;
    };

		const Guardar = async() => {
			localStorage.setItem('sew', JSON.stringify(fileList.value))
			fileList.value = await JSON.parse(localStorage.getItem('sew'))
			console.log(fileList.value);
		}

		const Restaurar = async() => {
			fileList.value = await JSON.parse(localStorage.getItem('sew'))
			console.log(fileList.value);
		}
// setInterval(() => {
// 	if (fileList.value[0].uid.startsWith('__')) {
// 		fileList.value[0].uid = null
// 	}
// }, 300);


	</script>
	
	
	<style scoped>
	.contenedor{
			position: relative;
			display: inline-block;
			text-align: center;
	}
	.centrado{
			position: absolute;
			top: 50%;
			transform: translate(-5%, -0%);
	}
		.carousel__slide {
			padding: 1px;
			padding-left: 40px;
		}
		.carousel__viewport {
			perspective: 2000px;
		}
		.carousel__track {
			transform-style: preserve-3d;
		}
		.carousel__slide--sliding {
			transition: 0.5s;
		}
		.carousel__slide {
			opacity: 0.9;
			transform: rotateY(-20deg) scale(0.9);
		}
		.carousel__slide--active ~ .carousel__slide {
			transform: rotateY(20deg) scale(0.9);
		}
		.carousel__slide--prev {
			opacity: 1;
			transform: rotateY(-10deg) scale(0.95);
		}
		.carousel__slide--next {
			opacity: 1;
			transform: rotateY(10deg) scale(0.95);
		}
		.carousel__slide--active {
			opacity: 1;
			transform: rotateY(0) scale(1.1);
		}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>