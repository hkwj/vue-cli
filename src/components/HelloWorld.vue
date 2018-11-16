<template>
    <div class="wrap">
      HELLO WORLD


    </div>
</template>

<script>
export default {
    name: 'helloWorld',
    data () {
        return {
            
        }
    },
    created(){
      

    },
    mounted(){
      this.test();
      // promise 封装1

    },
    methods: {
      test(){
        let obj2 = {
          age: 9,
          name: 'jw'
        };
        let obj = {
          name: 'zfpx',
          getPName(){
            return super.name;
          },
          __proto__: obj2
        };
        
        console.log(obj.__proto__);
        console.log(obj.getPName());
      }
      
    }
}
</script>


<style scoped>






</style>
