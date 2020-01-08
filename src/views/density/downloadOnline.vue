<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>在线定密</span>
      </div>
      <div class="component-item">
        <mallki class-name="mallki-text" text="在线定密" />
      </div>
    </el-card>
  </div>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
export default {
  name: 'Downloadonline',
  components: {
    Mallki
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
