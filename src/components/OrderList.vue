<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="账号" width="120">
        <template slot-scope="scope">{{ scope.row.acount }}</template>
      </el-table-column>
      <el-table-column prop="group" label="用户组" width="120"></el-table-column>
      <el-table-column prop="date" label="创建时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="opera" label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      tableData: [
        {
          acount: "小凋残",
          group: "超级管理员",
          date: "2016-05-04"
        },
        {
          acount: "小凋残",
          group: "超级管理员",
          date: "2016-05-03"
        },
        {
          acount: "小凋残",
          group: "超级管理员",
          date: "2016-05-02"
        },
        {
          acount: "小凋残",
          group: "超级管理员",
          date: "2016-05-01"
        },
        {
          acount: "小凋残",
          group: "超级管理员",
          date: "2016-05-00"
        },
        {
          acount: "小凋残",
          group: "超级管理员",
          date: "2016-05-00"
        },
        {
          acount: "小凋残",
          group: "超级管理员",
          date: "2016-05-00"
        },
        {
          acount: "小凋残",
          group: "超级管理员",
          date: "2016-05-00"
        }
      ]
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index) {
      console.log(index);
    },
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>