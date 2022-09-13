<template>
  <div class="detail-container">
    <section>
      <!-- 질문 상세 정보 -->
      <user-profile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">{{
          fetchedItem.user
        }}</router-link>
        <template slot="time">
          {{ 'Posted ' + fetchedItem.time_ago }}
        </template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>
<script>
import UserProfile from '@/components/UserProfile.vue'
import { mapGetters } from 'vuex'

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  }
}
</script>
<style scoped>
.detail-container {
  padding: 30px 40px;
  width: 80%;
  max-width: 850px;
}
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem 30px;
  border-bottom: 1px solid #ccc;
}
.user-container h2 {
  margin: 0 0 15px;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.user-description a {
  font-weight: 500;
}
.user-description a:hover {
  color: #42b883;
}
.time {
  font-size: 0.7rem;
}
</style>
