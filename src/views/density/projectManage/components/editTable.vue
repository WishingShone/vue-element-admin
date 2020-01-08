<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>关联涉密事项</span>
      </div>
      <div class="filter-container">
        <el-input v-model="listQuery" placeholder="涉密事项名称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter(listQuery)" />
        <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter(listQuery)">
          {{ $t('table.search') }}
        </el-button>
        <el-button v-waves class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
          {{ $t('table.add') }}
        </el-button>
        <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
          {{ $t('table.export') }}
        </el-button>
      </div>
      <!-- <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
      >
        <el-table-column label="涉密事项名称" min-width="150px">
          <template slot-scope="{row}">
            <span class="link-type" @click="handleUpdate(row)">{{ row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('table.importance')" width="80px">
          <template slot-scope="scope">
            <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
          </template>
        </el-table-column>
        <el-table-column :label="$t('table.actions')" align="center" width="230" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button type="primary" size="mini" @click="handleUpdate(row)">
              {{ $t('table.edit') }}
            </el-button>
            <el-button size="mini" type="danger" @click="handleModifyStatus(row,'deleted')">
              {{ $t('table.delete') }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" /> -->
    </el-card>
  </div>
</template>

<script>
import { fetchSecretList } from '@/api/project'
import waves from '@/directive/waves/index.js' // 水波纹指令
export default {
  name: 'Projectmanage',
  directives: { waves },
  data() {
    return {

    }
  },
  methods: {
    handleFilter(data) {

    },
    handleCreate() {},
    handleDownload() {}
  }
}
</script>
<style lang="scss" scoped></style>
