<template>
    <div>

        <vuedraggable class="wrapper" v-model="list"  :options="{group:{name: 'article',pull:'clone'}}">
            <div v-for="item in list" :key="item.name" class="item">
                <p >{{item.name}}</p>
                <p v-if="item.name == '图片'">{{item.number}}</p>
            </div>
        </vuedraggable>

        <!-- <vuedraggable class="wrapper" :group="{ name: 'people' }"> -->
        <vuedraggable  class="wrapper" v-model="list2" :options="{group:{name: 'article',pull:'clone'}}" @add="addDraggable($event)">
            <div v-for="item in list2" :key="item.name" >
                <p v-if="item.name == '输入框'"><el-input v-model="input" placeholder="请输入内容"></el-input></p>
                <p v-else  class="item">{{item.name}}</p>
            </div>
        </vuedraggable>

        <div class="wrapper">
            <div v-if="inputHandle">
                <p>输入框要展示的内容</p>
                <p><el-input v-model="input" placeholder="请输入内容"></el-input></p>
            </div>
        </div>

    </div>
</template>

<script>
import vuedraggable from 'vuedraggable'
export default {
    name: 'HelloWorld',
    components: {vuedraggable},
    data(){
        return{
            list: [{
                name:'图片'
                ,number:9
            },{
                name:'按钮'
            },{
                name:'轮播图'
            },{
                name:'输入框'
            }],
            list2:[],
            input:'',
            inputHandle: false
        }
    },
    mounted(){

    },
    methods:{
        addDraggable(e){
            // console.log('e:::',e)
            if(e.item.innerText == '输入框'){
                this.inputHandle = true
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 30%;
  border:1px solid #ebe9e9;
  margin-right:3%;
  min-height: 400px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  padding:20px;
  float: left;
//   display: flex;
//   flex-wrap: wrap;
}
.item{
  width: 100px;
  margin: 0 10px 10px 0;
  float: left;
  height: 100px;
  text-align: center;
  background-color: #ebe9e9;
  border:1px solid #888;
  color: #000;
  display: block;
}
</style>