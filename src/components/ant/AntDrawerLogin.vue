<template>
<button @click="showDrawer" class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-[#00DC82] group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Login
  </span>
</button>
<!-- #00DC82
#4DE7A8 -->
<a-drawer v-model:visible="visible" class="custom-class" style="" title="Login" placement="left" @after-visible-change="afterVisibleChange">
  <template #extra>
    <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
  </template>
	<div class="bg-blue-200 h-screen rounded-lg">
      <form @submit.prevent="(HandleLogin)" class="flex flex-col justify-center items-center my-2">
        <input type="text" placeholder="ingrese un nombre" v-model.trim="nombreLogin" class="h-[35px] w-[10rem] rounded-full my-4">
			  <input type="email" placeholder="ingrese email" v-model.trim="emailLogin" class="h-[35px] w-[10rem] rounded-full mb-4">
			  <input type="password" placeholder="ingrese contraseña" v-model.trim="passwordLogin" class="h-[35px] w-[10rem] rounded-full mb-11">

        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Iniciar Sesion
          </span>
        </button>
        <!-- <a-button type="submit" >Crear Usuario</a-button> -->
		  </form>
      {{ UserStore.token }}
    </div>
</a-drawer>
</template>

<script setup>
import { ref } from 'vue';
import {useUserStore} from "../../stores/example-store";
import { useRouter } from 'vue-router';

const UserStore = useUserStore()
const router = useRouter()
const nombreLogin = ref('')
const emailLogin = ref('poison@gmail.cm')
const passwordLogin = ref('')
const nombre = ref('')
const email = ref('poison@gmail.cm')
const password = ref('')
const repassword = ref('')
const visible = ref(false)
const childrenDrawer = ref(false)
const HandleLogin = async() => {
  try {
    if (!emailLogin.value || !passwordLogin.value || !nombreLogin.value) {
		return notify({title: "Nombre incorrecto", type: "error", text: `señor ${nombreLogin.value}, no mande los datos vacios`,});
	}
  if (!UserStore) {
    return alert("error en la base de datos")
  }
    await UserStore.access(nombreLogin.value, emailLogin.value, passwordLogin.value)
	  console.log('esta funciondando' + emailLogin.value + passwordLogin.value);
    notify({
      title: "Felicidades",
      type: "success",
      text: `inicio sesion ${nombreLogin.value} `,
    });
    // router.push('/')
  } catch (error) {
    console.log('error', error);
    if (error.error) {
      return notify({title: "Error", type: "error", text: error.error});
    }
    return notify({title: "Error", type: "error", text: error.errors[0].msg});
  }
}
const HandleRegister = async() => {
	try {
    if (password.value === passwordLogin) {
      return notify({title: "Error", type: "error", text: `las contraseñas no coinciden`,});
    }
	  if (!email.value || !password.value || !nombre.value) {
		return notify({title: "Error", type: "error", text: `señor ${nombre.value}, no mande los datos vacios`,});
	}
	if (!UserStore) {
    return alert("error en la base de datos")
  }
  await UserStore.register(nombre.value, email.value, password.value, repassword.value)
    return notify({
            title: "Felicidades",
            type: "success",
            text: `Se creo el usuario ${nombre.value} `,
        });
	  // router.push('/')
	} catch (error) {
	  console.log('error', error);
    if (error.error) {
      return notify({title: "Error", type: "error", text: error.error});
    }
    return notify({title: "Error", type: "error", text: error.errors[0].msg});
	}
  }
const showDrawer = () => {
  visible.value = true;
  };
const onClose = () => {
  visible.value = false;
  };
const showChildrenDrawer = () => {
  childrenDrawer.value = true;
  };
  const closeChildrenDrawer = () => {
    childrenDrawer.value = false;
    };

</script>