<template>
  <div class="issue-wrap">
    上传模板文件,当前传递的id：{{ templateid }}
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

