<template>
  <div class="issue-wrap">
    模板信息,当前传递的id：{{ templateId }}
  </div>
</template>

<script>
export default {
  props: {
    templateid: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      // templateId: this.templateid
    }
  },
  computed: {
    templateId: function() {
      return this.templateid
    }
  }
}
</script>
<style lang="scss" scoped></style>
