<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
    <div :key="key" style="margin-top:30px;">
      <div>
        <span v-permission="['system']" class="permission-alert">
          Only
          <el-tag class="permission-tag" size="small">system</el-tag> can see this
        </span>
        <el-tag v-permission="['system']" class="permission-sourceCode" type="info">
          v-permission="['system']"
        </el-tag>
      </div>

      <div>
        <span v-permission="['safety']" class="permission-alert">
          Only
          <el-tag class="permission-tag" size="small">safety</el-tag> can see this
        </span>
        <el-tag v-permission="['safety']" class="permission-sourceCode" type="info">
          v-permission="['safety']"
        </el-tag>
      </div>

      <div>
        <span v-permission="['system','safety']" class="permission-alert">
          Both
          <el-tag class="permission-tag" size="small">system</el-tag> and
          <el-tag class="permission-tag" size="small">safety</el-tag> can see this
        </span>
        <el-tag v-permission="['system','safety']" class="permission-sourceCode" type="info">
          v-permission="['system','safety']"
        </el-tag>
      </div>
    </div>

    <div :key="'checkPermission'+key" style="margin-top:60px;">
      <aside>
        {{ $t('permission.tips') }}
        <br> e.g.
      </aside>

      <el-tabs type="border-card" style="width:550px;">
        <el-tab-pane v-if="checkPermission(['system'])" label="system">
          system can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['system'])"
          </el-tag>
        </el-tab-pane>

        <el-tab-pane v-if="checkPermission(['safety'])" label="safety">
          safety can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['safety'])"
          </el-tag>
        </el-tab-pane>

        <el-tab-pane v-if="checkPermission(['system','safety'])" label="system-OR-safety">
          Both system or safety can see this
          <el-tag class="permission-sourceCode" type="info">
            v-if="checkPermission(['system','safety'])"
          </el-tag>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import checkPermission from '@/utils/permission' // 权限判断函数
import SwitchRoles from './components/SwitchRoles'

export default {
  name: 'DirectivePermission',
  components: { SwitchRoles },
  directives: { permission },
  data() {
    return {
      key: 1 // 为了能每次切换权限的时候重新初始化指令
    }
  },
  methods: {
    checkPermission,
    handleRolesChange() {
      this.key++
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  /deep/ .permission-alert {
    width: 320px;
    margin-top: 15px;
    background-color: #f0f9eb;
    color: #67c23a;
    padding: 8px 16px;
    border-radius: 4px;
    display: inline-block;
  }
  /deep/ .permission-sourceCode {
    margin-left: 15px;
  }
  /deep/ .permission-tag {
    background-color: #ecf5ff;
  }
}
</style>

