<template>
  <div>
    <p>Toggle Work Switch</p>
    <div v-for="timestamp in timestamps" v-bind:key="timestamp.id">
      {{ timestamp.time }} {{ timestamp.action }}
    </div>
  </div>
</template>

<script lang="ts">
import { Action } from '@/types'
export default {
  data() {
    return {
      timestamps: [],
    }
  },
  mounted() {
    const timestamps = JSON.parse(localStorage.getItem('timestamps'))
    if (timestamps === null) return
    this.timestamps = timestamps.map(elem => {
      const date = new Date(elem.time)
      const y = date.getFullYear()
      const m = date.getMonth()
      const d = date.getDate()
      const h = date.getHours()
      elem.time = y + '/' + m + '/' + d + '/' + h + ':' + m
      elem.action = this.toActionName(elem.action)
      return elem
    })
  },
  methods: {
    toActionName: (actionNum: number): string => {
      const action: Action = actionNum
      switch (action) {
        case Action.Locked:
          return '休憩'
        case Action.UnLocked:
          return '業務再開'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
