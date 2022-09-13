<template>
  <div>
    <div class="user-container">
      <div><i class="fas fa-user"></i></div>
      <div class="user-description">
        <slot name="username"></slot>
        <div class="time">
          <slot name="time"></slot>
          <slot name="karma"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    info: Object
  }
}
</script>
<style scoped>
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
