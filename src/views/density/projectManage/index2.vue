<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>项目管理</span>
      </div>
      <el-row align="middle">
        <div class="filter-container">
          <el-row type="flex">
            <el-col :span="16">
              <!-- <el-input v-model="listQuery.title" class="filter-item" :placeholder="$t('table.title')" style="width: 200px;" />
              <el-button v-waves type="primary" icon="el-icon-search" class="filter-item">{{ $t('table.search') }}</el-button> -->
              <el-button v-waves class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
                {{ $t('table.add') }}
              </el-button>
              <el-button v-waves type="primary" icon="el-icon-upload2" class="filter-item">{{ $t('table.import') }}</el-button>
              <el-button v-waves type="primary" icon="el-icon-download" class="filter-item">{{ $t('table.export') }}</el-button>
            </el-col>

          </el-row>
        </div>
        <el-table
          v-loading="listLoading"
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.remark.toLowerCase().includes(search.toLowerCase()))"
          fit
          empty-text="暂无数据"
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column
            fixed="left"
            label="项目名称"
          >
            <template slot-scope="scope">
              <el-button type="text" icon="el-icon-document" @click="findByType(scope.row)">{{ scope.row.name }}</el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="密级"
            width="150"
          >
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ computedDenseLevel(scope.row.level) }}</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="备注"
          >
            <template slot-scope="scope">
              {{ scope.row.remark }}
            </template>
          </el-table-column>
          <el-table-column
            label="关联涉密事项"
          >
            <template slot-scope="scope">
              <router-link :to="'/project/edit/'+scope.row.id">
                <mallki class-name="mallki-text el-icon-view" text="详细" />
              </router-link>
            </template>
          </el-table-column>
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
              <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">
                {{ $t('table.edit') }}
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 编辑本页内容 -->
        <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
          <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="120px" style="width: 400px; margin-left:50px;margin-left:50px;">
            <el-form-item label="项目名称" prop="name">
              <el-input v-model="temp.name" />
            </el-form-item>
            <el-form-item label="密级" prop="level">
              <el-select v-model="temp.level" class="filter-item" placeholder="请选择">
                <el-option v-for="item in LevelOptions" :key="item.key" :label="item.label" :value="item.key" />
              </el-select>
            </el-form-item>
            <el-form-item label="类型">
              <el-select v-model="temp.type" class="filter-item" placeholder="请选择">
                <el-option v-for="item in typeOptions" :key="item.key" :label="item.label" :value="item.key" />
              </el-select>
            </el-form-item>
            <el-form-item label="备注" prop="remark">
              <el-input v-model="temp.remark" />
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">
              取消
            </el-button>
            <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
              确定
            </el-button>
          </div>
        </el-dialog>

      </el-row>
    </el-card>
    <el-tooltip v-show="isShow" placement="top" content="返回上一层">
      <back-to-upper @handleBack="handleBack" />
    </el-tooltip>
  </div>
</template>

<script>
import { fetchList, createProject, updateProject, getParentid } from '@/api/project'
import Mallki from '@/components/TextHoverEffect/Mallki'
import BackToUpper from '@/components/BackToUpper'
import waves from '@/directive/waves/index.js' // 水波纹指令
export default {
  name: 'TemplateManage',
  components: { BackToUpper, Mallki },
  directives: {
    waves
  },
  data() {
    return {
      search: '',
      isShow: false,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 2
      },
      typeOptions: [
        { label: '分支', key: 'node' },
        { label: '内容', key: 'detail' }
      ],
      LevelOptions: [
        { label: '非密', key: 0 },
        { label: '秘密', key: 1 },
        { label: '机密', key: 2 }
      ],
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '新建'
      },
      temp: {
        parentid: undefined,
        id: undefined,
        name: '',
        remark: '',
        level: 0,
        type: 'node'
      },
      originaltableData: [],
      tableData: [],
      rules: {
        name: [{ required: true, message: '项目名称为必填项', trigger: 'blur' }]
      }
    }
  },
  computed: {
    // 控制显示的内容
    computedDenseLevel() {
      return function(value) {
        return this.transDenseLevel(value)
      }
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
    // 重置内容
    resetTemp() {
      this.temp = {
        parentid: undefined,
        id: undefined,
        name: '',
        remark: '',
        level: 0,
        type: 'node'
      }
    },
    // 转换密级
    transDenseLevel(level) {
      switch (parseInt(level)) {
        case 0: return '非密★'
        case 1: return '秘密★★'
        case 2: return '机密★★★'
      }
    },
    // 创建项目
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = '创建'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          var routerParams = this.$route.params.id
          this.temp.id = parseInt(Math.random() * 100) + 512 // mock a id
          this.temp.parentid = parseInt(routerParams)
          createProject(this.temp).then(() => {
            this.tableData.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    // 更新项目
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = '编辑'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          updateProject(tempData).then(() => {
            for (const v of this.tableData) {
              if (v.id === this.temp.id) {
                const index = this.tableData.indexOf(v)
                this.tableData.splice(index, 1, this.temp)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          }).catch((err) => { console.log(err) })
        }
      })
    },
    // 返回上一层
    handleBack() {
      const routerParams = this.$route.params.id
      const routerid = routerParams.toString()
      console.log('前端验证类型')
      console.log(typeof routerid)
      console.log(routerid)
      getParentid(routerid).then(response => {
        this.$router.push({
          path: '/project/index/' + response.data,
          params: {
            id: response.data
          }
        })
      })
    },
    // 判断当前是否为节点或内容
    findByType(node) {
      if (node.type === 'node') {
        this.gotoThisPage(node)
      } else {
        this.gotoNextPage(node)
      }
    },
    // 跳转到详细页
    gotoNextPage(node) {
      this.$router.push({
        name: 'projectManageDetail',
        params: {
          id: node.id
        }
      })
    },
    // 跳转当前页
    gotoThisPage(node) {
      this.$router.push({
        path: '/project/index/' + node.id,
        params: {
          id: node.id,
          name: node.name,
          parentid: node.parentid
        }
      })
    },
    getParams() {
      this.listLoading = true
      // 初始化项目，只显示当前传入的id下的内容
      // 取到路由带过来的参数 this.$route.params
      var routerParams = this.$route.params.id
      if (typeof routerParams === 'undefined') {
        var id = '0'
      } else {
        id = routerParams
      }
      console.log(id)
      // var routerParams_title_name = this.$route.params.name
      fetchList(id).then(response => {
        id === '0' ? this.isShow = false : this.isShow = true
        this.tableData = response.data.map(v => {
          this.$set(v, 'edit', false) // https://vuejs.org/v2/guide/reactivity.html
          v.originalRemark = v.remark //  will be used when user click the cancel botton
          return v
        })
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 500)
      })
    },
    changeValue(str) {
      this.parentId = str.replace('/', '')
      console.log('changeValue parentId = ' + this.parentid)
      if (this.name) {
        document.title = this.name
      }
    },
    // 查看详细涉密事项
    viewDetails(data) {

    }
  }
}
</script>
<style lang="scss" scoped></style>
