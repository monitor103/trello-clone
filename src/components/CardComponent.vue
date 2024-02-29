<template>
  <div class="card">
    <h3>{{ card.title }}</h3>
    <p>{{ card.description }}</p>
  </div>
</template>

<script>
export default {
  props: ['card']
}
</script>

<style>
.card {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
