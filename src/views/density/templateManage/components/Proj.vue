<template>
  <div class="issue-wrap">
    关联项目,当前传递的id：{{ templateid }}
  </div>
</template>

<script>
export default {
  props: {
    templateid: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style lang="scss" scoped></style>

