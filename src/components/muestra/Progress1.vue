<template>
  <div>
    <a-progress type="circle" :percent="defaultPercent" :style="{color: red}" />
      <a-button-group>
        <a-button @click="decline">
          <template #icon :style="{color: red}"><minus-outlined /></template>
        </a-button>
        <a-button @click="increase">
          <template #icon><plus-outlined /></template>
        </a-button>
      </a-button-group>
  </div>
</template>
  
<script setup>
import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

const defaultPercent = ref(0);
const increase = () => {
  const percent = defaultPercent.value + 10;
  defaultPercent.value = percent > 100 ? 100 : percent;
  };

const decline = () => {
  const percent = defaultPercent.value - 10;
  defaultPercent.value = percent < 0 ? 0 : percent;
  };

</script>