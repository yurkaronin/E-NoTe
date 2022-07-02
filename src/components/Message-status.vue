<template>
  <div class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  background-color: rgba(255, 192, 203, 0.651);

  p {
    color: red;
    font-style: italic;
    padding: 12px 20px;
    font-size: 0.95rem;
  }
}
</style>
