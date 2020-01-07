<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="addList">添加</button>
    <ul>
      <li v-for="(item,index) in listData" :key="index">{{item.type}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      listData:[{type:'taobao'},{type:'jd'},{type:'tianmao'}]
    }
  },
  props: {
    msg: String
  },
  methods:{
    addList(){
      this.listData.push({type:"add"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
