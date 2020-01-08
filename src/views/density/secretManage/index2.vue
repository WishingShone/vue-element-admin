<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>涉密事项管理</span>
      </div>
      <el-row align="middle">
        <div class="filter-container">
          <el-row type="flex">
            <el-col :span="16">
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
          :data="secretPoint.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          fit
          stripe="true"
          empty-text="暂无数据"
          highlight-current-row
          style="width: 100%"
        >
          <el-table-column
            fixed="left"
            label="涉密事项名称"
          >
            <template slot-scope="scope">
              <el-button type="text" icon="el-icon-document" @click="findByType(scope.row)">{{ scope.row.name }}</el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="密级"
            width="300"
          >
            <template slot-scope="scope">
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ computedDenseLevel(scope.row.level) }}</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="备注"
            min-width="300px"
          >
            <template slot-scope="scope">
              {{ scope.row.remark }}
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

        <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" /> -->
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import waves from '@/directive/waves/index.js' // 水波纹指令
export default {
  name: 'SecretManage',
  components: { Pagination },
  directives: { waves },
  data() {
    return {
      secretPoint: [
        {
          id: 1,
          name: '涉密事项1'
        },
        {
          id: 2,
          name: '涉密事项2'
        },
        {
          id: 3,
          name: '涉密事项3'
        },
        {
          id: 4,
          name: '涉密事项4'
        }, {
          id: 5,
          name: '涉密事项5'
        }, {
          id: 6,
          name: '涉密事项6'
        }, {
          id: 7,
          name: '涉密事项7'
        }, {
          id: 8,
          name: '涉密事项8'
        }, {
          id: 9,
          name: '涉密事项9'
        }, {
          id: 10,
          name: '涉密事项10'
        }, {
          id: 11,
          name: '涉密事项11'
        }, {
          id: 12,
          name: '涉密事项12'
        }, {
          id: 13,
          name: '涉密事项13'
        }, {
          id: 14,
          name: '涉密事项14'
        }, {
          id: 15,
          name: '涉密事项15'
        }, {
          id: 16,
          name: '涉密事项16'
        }, {
          id: 17,
          name: '涉密事项17'
        }, {
          id: 18,
          name: '涉密事项18'
        }, {
          id: 19,
          name: '涉密事项19'
        }, {
          id: 20,
          name: '涉密事项20'
        }, {
          id: 21,
          name: '涉密事项21'
        }, {
          id: 22,
          name: '涉密事项22'
        }, {
          id: 23,
          name: '涉密事项23'
        }, {
          id: 24,
          name: '涉密事项24'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
