<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>模板管理</span>
      </div>
      <el-container style="height: 800px">
        <el-aside width="25%" style="background-color: rgb(255, 255, 255)">
          <el-input
            v-model="filterText"
            placeholder="输入关键字进行过滤"
          />

          <el-tree
            ref="tree"
            class="filter-tree"
            :data="data"
            accordion
            :expand-on-click-node="false"
            :props="defaultProps"
            :filter-node-method="filterNode"
            @node-click="handleSwitchNode"
          >
            <span slot-scope="{ node, data }" class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => append(data)"
                >
                  添加
                </el-button>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)"
                >
                  删除
                </el-button>
              </span>
            </span>
          </el-tree>
        </el-aside>

        <el-container>
          <el-main style="padding-top:8px;">
            <!-- <el-tabs v-model="activeName" type="border-card">
              <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
                <keep-alive>
                  <tab-pane v-if="activeName===item.key" :type="item.key" @create="showCreatedTimes" />
                </keep-alive>
              </el-tab-pane>
            </el-tabs> -->
            <el-tabs type="border-card">
              <el-tab-pane label="模板信息"><INFO :templateid="tempId" /></el-tab-pane>
              <el-tab-pane label="文件管理"><FILE :templateid="tempId" /></el-tab-pane>
              <el-tab-pane label="涉密事项关联"><ISSUE :templateid="tempId" /></el-tab-pane>
              <el-tab-pane label="项目关联"><PROJ :templateid="tempId" /></el-tab-pane>
            </el-tabs>
          </el-main>
        </el-container>
      </el-container>
    </el-card>
  </div>
</template>

<script>
import { fetchList, createtemplate } from '@/api/template'
import FILE from './components/File'
import INFO from './components/Info'
import ISSUE from './components/Issue'
import PROJ from './components/Proj'

export default {
  name: 'TemplateManage',
  components: {
    FILE,
    INFO,
    ISSUE,
    PROJ
  },
  data() {
    return {
      createdTimes: 0,
      filterText: '',
      data: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    tempId() {
      console.log('XXXXXXXX')
      console.log(this.$route.params.id)
      return typeof this.$route.params.id === 'undefined' ? 1 : this.$route.params.id
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取当前树形结构
    getList() {
      fetchList().then(response => {
        this.data = response.data
      })
    },
    // 过滤树形结构数据
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    },
    // 添加子节点
    append(data) {
      const newChild = { label: '默认子节点', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      // 向服务器添加后返回新增的id
      createtemplate(newChild).then(response => {
        Object.assign(newChild, { id: response.data })
        data.children.push(newChild)
        this.$notify({
          title: '成功',
          message: '添加成功',
          type: 'success',
          duration: 2000
        })
      }).catch(e => {
        this.$notify({
          title: '失败',
          message: '添加失败',
          type: 'error',
          duration: 2000
        })
      })
    },
    // 移除子节点
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      setTimeout(() => {
        children.splice(index, 1)
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
      }, 1.5 * 1000)

      // console.log({data, parent, children })
      // if (children.length === 0) {
      //   children.splice(index, 1)
      //   this.$notify({
      //     title: '成功',
      //     message: '删除成功',
      //     type: 'success',
      //     duration: 2000
      //   })
      // } else {
      //   this.$notify({
      //     title: '失败',
      //     message: '包含子节点，无法删除',
      //     type: 'warning',
      //     duration: 2000
      //   })
      // }
      // console.log(children.length)
      //
    },
    // 切换节点显示
    handleSwitchNode() {
      console.log(this.$refs.tree.getCurrentNode().id)
      const id = this.$refs.tree.getCurrentNode().id
      this.$router.push({
        path: '/template/index/' + id,
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
