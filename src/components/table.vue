<template>
    <div class="wrap">
      <select name="supply" v-model="supply" @change="selectSupplyChange">
        <option value="liting">丽婷</option>
        <option value="weiguan">卫冠</option>
        <option value="lvlifang">绿立方</option>
      </select>

      <div class="tableWrap">
        <button @click="add">新增一行</button>
        <table class="table">
          <thead>
            <tr>
              <th width="80">序号</th>
              <th width="180">物料编码</th>
              <th width="300">物料名称</th>
              <th width="80">采购单位</th>
              <th width="100">采购数量</th>
              <th width="100">交货日期</th>
              <th width="120">单价</th>
              <th width="100">折扣</th>
              <th width="80">删除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in data">
              <td>{{index}}</td>
              <td> <input type="text" :value="item.materialCode"> </td>
              <td>{{item.name}}</td>
              <td> <input type="text" :value="item.unit"></td>
              <td> <input type="text" :value="item.amount"> </td>
              <td> <input type="text" :value="item.date"> </td>
              <td> <input type="text" :value="item.price"> </td>
              <td> <input type="text" :value="item.discount"></td>
              <td><a href="javascript:void(0)" @click="deleteThisRow(index)">delete</a></td>
            </tr>
          </tbody>
          
        </table>
      </div>
     
    </div>
</template>

<script>
export default {
    name: 'table',
    data () {
        return {
            supply: 'liting',
            data: [],
            litingData: [],
            weiguanData: []
        }
    },
    created(){
      this.litingData = [
        {materialCode: 'liting00001',name: '大白菜', unit: '斤',amount: 0,date:'2018-10-31' ,price:'0.6',discount:'0.8'},
        {materialCode: 'liting00002',name: '大白菜', unit: '斤',amount: 0,date:'2018-10-31' ,price:'0.6',discount:'0.8'},
        {materialCode: 'liting00003',name: '大白菜', unit: '斤',amount: 0,date:'2018-10-31' ,price:'0.6',discount:'0.8'},
        {materialCode: 'liting00004',name: '大白菜', unit: '斤',amount: 0,date:'2018-10-31' ,price:'0.6',discount:'0.8'},
      ];
      this.weiguanData = [
        {materialCode: 'weiguan1',name: '大白菜', unit: '斤',amount: 100,date:'2018-10-31' ,price:'0.6',discount:'0.8'},
        {materialCode: 'weiguan2',name: '大白菜', unit: '斤',amount: 100,date:'2018-10-31' ,price:'0.6',discount:'0.8'},
        {materialCode: 'weiguan3',name: '大白菜', unit: '斤',amount: 100,date:'2018-10-31' ,price:'0.6',discount:'0.8'},
        {materialCode: 'weiguan4',name: '大白菜', unit: '斤',amount: 100,date:'2018-10-31' ,price:'0.6',discount:'0.8'},
      ];

    },
    mounted(){
      
      this.getDate();
    },
    methods: {
      getDate(){
        switch (this.supply){
          case 'liting':
            this.data = this.litingData;

        }
      },
      selectSupplyChange(item){
        console.log('change',item);
        switch (item.target.value) {
          case 'liting':
            console.log('liting');
            this.data = this.litingData;
            break;
          case 'weiguan':
            console.log('weiguan');
            this.data = this.weiguanData;
            break;
          case 'lvlifang': 
            console.log('lvlifang');
          default: 
            //...
        }
      
      },
      add(){
        this.data.push({materialCode: '',name: '', unit: '',amount: '',date:'' ,price:'',discount:''})
      },
      deleteThisRow(rowNo){
        console.log(rowNo);
        this.data.splice(rowNo,1);
      }
    }
}
</script>


<style scoped>
select{
  width: 200px;
}
.tableWrap{
  min-width: 1300px;
  overflow-x: auto;
  border: 1px solid #ccc;
  min-height: 300px;
  margin-top:10px;
}
.table{
  border-collapse:collapse;
}
.table,th, td {
  border: 1px solid #ccc;
}
</style>
