<template>
  <div>
    <ListItem />
  </div>
</template>
<script>
import ListItem from '@/components/ListItem.vue'
import ListMixin from '@/mixins/ListMixin'
// import bus from '@/utils/bus.js'
export default {
  components: { ListItem },
  // mounted() {
  //   bus.$emit('end:spinner')
  // },
  mixins: [ListMixin]
}
</script>
<style scoped>
/* .new-list {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
}
.new-list .post {
  width: 18%;
  padding: 30px;
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
  border-radius: 15px;
  margin: 1%;
}
.new-list .post:hover {
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 20%);
}
.new-list .points {
  margin-bottom: 15px;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #41b883;
}
.new-list .post .news-title {
  color: #333;
  display: block;
  font-weight: 500;
  font-size: 20px;
}
.new-list .post a:hover {
  color: #42b883;
}
.new-list .item-info {
  display: block;
  margin-top: 15px;
}
.new-list .item-info a {
  display: block;
  color: #666;
}

@media (max-width: 1024px) {
  .new-list .post {
    width: 23%;
    margin: 1%;
  }
}
@media (max-width: 768px) {
  .new-list .post {
    width: 31%;
    margin: 1%;
  }
}
@media (max-width: 420px) {
  .new-list .post {
    width: 46%;
    margin: 2%;
  }
} */
</style>
