<!-- <template>
    <Modal :is-modal-visible="isModalVisible" title="Are you sure?" description="This action cannot be undone" 
    @on-close="emit('onClose')">
    
    <div class="pt-6 space-x-2 flex items-center justify-end w-full">

        <Button :disabled="isLoading" variant="outline" @click="emit('onClose')">Cancel</Button>
        <Button :disabled="isLoading" variant="destructive" @click="emit('onConfirm')">Continue</Button>
    </div>
    </Modal>
</template>

<script setup lang="ts">
const props = defineProps<{
    isOpen: boolean
}>();
const { isLoading,  } = useStore();

const isModalVisible =  computed(() => props.isOpen)

const emit = defineEmits(['onConfirm','onClose']);

</script>

<style scoped>

</style> -->

<template>
    <div>
      <Modal :is-modal-visible="isModalVisible" title="Are you sure?" 
            description="This action cannot be undone" @on-close="toggleAlertModal(false)">
        <div class="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button :disabled="isLoading" variant="outline" @click="toggleAlertModal(false)">Cancel</Button>
          <Button :disabled="isLoading" variant="destructive" @click="emit('onConfirm')">Continue</Button>
        </div>
      </Modal>
    </div>
  </template>
  
  <script setup lang="ts">
  const { isLoading, isAlertModalVisible, toggleAlertModal } = useStore();
  
  const isModalVisible = computed(() => isAlertModalVisible.value);
  
  const emit = defineEmits(['onConfirm']);
  </script>
  
  <style scoped></style>
  