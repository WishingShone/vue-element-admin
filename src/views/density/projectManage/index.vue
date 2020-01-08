<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>项目管理</span>
      </div>

      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.remark.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        max-height="800"
      >
        <el-table-column
          fixed="left"
          label="项目名称"
          width="120"
        >
          <template slot-scope="scope">
            <el-button type="text" icon="el-icon-document" @click="findByType(scope.row)">{{ scope.row.name }}</el-button>

          </template>
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注"
          width="150"
        />
        <el-table-column
          align="right"
          width="300"
        >
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"
            />
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'TemplateManage',
  data() {
    return {
      search: '',
      tableData: [
        {
          parentid: 0,
          id: 1,
          name: '陆航1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 0,
          id: 2,
          name: '陆航2',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 0,
          id: 3,
          name: '陆航3',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 0,
          id: 4,
          name: '陆航4',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 0,
          id: 5,
          name: '陆航5',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 1,
          id: 6,
          name: '陆航1-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 1,
          id: 7,
          name: '陆航1-2',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 1,
          id: 8,
          name: '陆航1-3',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 1,
          id: 9,
          name: '陆航1-4',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 2,
          id: 10,
          name: '陆航2-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 2,
          id: 11,
          name: '陆航2-2',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 3,
          id: 12,
          name: '陆航3-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 3,
          id: 13,
          name: '陆航3-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 3,
          id: 14,
          name: '陆航3-2',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 3,
          id: 15,
          name: '陆航3-3',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 4,
          id: 16,
          name: '陆航4-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 4,
          id: 17,
          name: '陆航4-2',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 4,
          id: 18,
          name: '陆航4-3',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 4,
          id: 19,
          name: '陆航4-4',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 4,
          id: 20,
          name: '陆航4-5',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 5,
          id: 21,
          name: '陆航5-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 5,
          id: 22,
          name: '陆航5-2',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 5,
          id: 23,
          name: '陆航5-4',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 5,
          id: 24,
          name: '陆航5-3',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 6,
          id: 25,
          name: '陆航1-1-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 7,
          id: 26,
          name: '陆航1-2-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 7,
          id: 27,
          name: '陆航1-2-2',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 8,
          id: 28,
          name: '陆航1-3-1',
          type: 'detail',
          remark: '备注'
        }, {
          parentid: 25,
          id: 29,
          name: '陆航1-1-1-1',
          type: 'detail',
          remark: '备注'
        }, {
          parentid: 26,
          id: 30,
          name: '陆航1-2-1-1',
          type: 'detail',
          remark: '备注'
        }, {
          parentid: 27,
          id: 31,
          name: '陆航1-2-2-1',
          type: 'detail',
          remark: '备注'
        }, {
          parentid: 9,
          id: 32,
          name: '陆航1-4-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 9,
          id: 33,
          name: '陆航1-4-2',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 33,
          id: 34,
          name: '陆航1-4-2-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 34,
          id: 35,
          name: '陆航1-4-2-1-1',
          type: 'detail',
          remark: '备注'
        }, {
          parentid: 32,
          id: 36,
          name: '陆航1-4-1-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 36,
          id: 37,
          name: '陆航1-4-1-1-1',
          type: 'detail',
          remark: '备注'
        }, {
          parentid: 10,
          id: 38,
          name: '陆航2-1-1',
          type: 'node',
          remark: '备注'
        }, {
          parentid: 10,
          id: 39,
          name: '陆航2-1-2',
          type: 'detail',
          remark: '备注'
        }, {
          parentid: 10,
          id: 40,
          name: '陆航2-1-3',
          type: 'node',
          remark: '备注'
        }]
    }
  },
  watch: {
    $route(to, from) {
      console.log('watch path = ' + to.path)
      this.changeValue(to.path)
      // this.requestData()
    }
  },
  created() {
    this.getParams()
    // this.requestData()
  },
  methods: {
    // 判断当前是否为节点或内容
    findByType(node) {
      console.log(node)
      if (node.type === 'node') {
        console.log('目录')
        this.gotoThisPage(node)
      } else {
        console.log('内容')
        this.gotoNextPage(node)
      }
    },
    // 跳转到详细页
    gotoNextPage(node) {
      console.log('gotoNextPage id = ' + node.parentid)
      this.$router.push({
        name: 'projectManageDetail',
        params: {
          id: node.parentid
        }
      })
    },
    // 跳转当前页
    gotoThisPage(node) {
      console.log(node.id)
      this.$router.push({
        path: '/project/index/' + node.id,
        params: {
          id: node.id,
          name: node.name
        }
      })
      console.log(this.$router.path)
    },
    getParams() {
      console.log('getParams()调用')
      // 初始化项目，只显示当前传入的id下的内容
      // 取到路由带过来的参数 this.$route.params
      var routerParams = this.$route.params.id
      // var routerParams_title_name = this.$route.params.name
      console.log(
        routerParams
      )
      if (typeof routerParams === 'undefined') {
        const itemdata = this.tableData.filter(item => item.parentid === 0)
        this.tableData = itemdata
        console.log(
          this.tableData
        )
      } else {
        const itemdata = this.tableData.filter(item => item.parentid === routerParams)
        this.tableData = itemdata
        console.log(
          this.tableData
        )
      }
      // 将数据放在当前组件的数据内
      // this.parentId = routerParams
      // this.title_name = routerParams_title_name
    },
    changeValue(str) {
      this.parentId = str.replace('/', '')
      console.log('changeValue parentId = ' + this.parentid)
      if (this.name) {
        document.title = this.name
      }
    }
  }
}
</script>
<style lang="scss" scoped></style>
