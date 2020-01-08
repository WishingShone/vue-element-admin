<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>模板类型管理</span>
      </div>
      <div class="component-item">
        <mallki class-name="mallki-text" text="模板类型管理" />
      </div>
    </el-card>
  </div>
</template>

<script>
import Mallki from '@/components/TextHoverEffect/Mallki'
export default {
  name: 'Projectmanage',
  components: {
    Mallki
  },
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped></style>
