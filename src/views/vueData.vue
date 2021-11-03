<template>
  <div class="vueDocs">
    <vueDataComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import vueDataComponent from '@/components/vueDataComponent.vue'

export default {
  name: "vueEvents",
  components: {
    vueDataComponent,
  },
};
</script>
