<template>
  <div>
    <p>Toggle Work Switch</p>
    <div v-for="timestamp in timestamps" v-bind:key="timestamp.id">
      {{ timestamp.time }} {{ timestamp.action }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timestamps: []
    };
  },
  mounted() {
    const timestamps = JSON.parse(localStorage.getItem('timestamps'))
    if (timestamps === null) return
    this.timestamps = timestamps.map(elem => {
      const date = new Date(elem.time)
      const y = date.getYear()
      const m = date.getMonth()
      const d = date.getDate()
      const h = date.getHours()
      elem.time = y + '/' + m + '/' + d + '/' + h + ':' + m
      return elem
    })
  },
};
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
