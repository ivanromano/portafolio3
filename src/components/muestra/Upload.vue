<template>
  <div >
    <a-upload v-model:file-list="fileList" style="background: red" :before-upload="beforeUpload" list-type="picture-card" @preview="handlePreview">
      <div class="bg-red-500">
        <plus-outlined />
        <div class="mt-[8px]">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
        
    </a-modal>
  </div>
</template>

<script setup>
import { PlusOutlined } from '@ant-design/icons-vue';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    localStorage.setItem('users', fileList)
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });
}

const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');
const fileList = ref([{
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }, {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }, {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    }
    ]);
    const handleCancel = () => {
      previewVisible.value = false;
      previewTitle.value = '';
    };
    const handlePreview = async file => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
        localStorage.setItem('usergs', fileList)}
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
      previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
    };

    const beforeUpload = file => {
      fileList.value = [...fileList.value, file];
      return false;
    };
</script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>