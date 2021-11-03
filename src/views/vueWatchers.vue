<template>
  <div class="vueWatchers">
    <vueWatchers />
  </div>
</template>

<script>
// @ is an alias to /src
import vueWatchers from '@/components/vueWatchersComponent.vue'

export default {
  name: "vueEvents",
  components: {
    vueWatchers,
  },
};
</script>
