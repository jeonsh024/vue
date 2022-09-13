<template>
  <div>
    <ul class="items-view">
      <li v-for="item in listItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">{{ item.points || 0 }}</div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="items-title">
            <template v-if="item.domain">
              <a :href="item.url"> {{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{
                item.title
              }}</router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-if="item.user"
              :to="`/user/${item.user}`"
              class="link-text"
              >{{ item.user }}</router-link
            >
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    listItems() {
      return this.$store.state.list
      // const name = this.$route.name
      // if (name === 'news') {
      //   return this.$store.state.news
      // } else if (name === 'ask') {
      //   return this.$store.state.ask
      // } else if (name === 'jobs') {
      //   return this.$store.state.jobs
      // }
    }
  }
}
</script>
<style scoped>
.items-list {
  margin: 0;
  padding: 0;
}
.post {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.items-title {
  margin: 0;
  font-weight: 500;
}
.link-text {
  color: #828282;
}
</style>
