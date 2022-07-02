<template>
  <div class="notes">
    <div class="wrapper">
      <ul class="notes__list">
        <li class="notes__item" v-for="(note, index) in notes" :key="index">
          <h3>{{ note.title }}</h3>
          <p>{{ note.description }}</p>
          <time> {{ note.date }} </time>
        </li>
      </ul>
    </div>
  </div>
</template>
    <script>
export default {
  props: {
    notes: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.notes {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
  &__item {
    width: calc(50% - 16px);
    padding: 18px 20px;
    background: #f4f8fb;
    border: 1px solid #d4d7db;

    h3 {
      margin-bottom: 12px;
      font-weight: 700;
    }

    p {
      font-style: italic;
      opacity: 0.7;
    }
    time {
      opacity: 0.5;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-size: 0.9rem;
      margin-top: 9px;
      display: block;
    }
  }
}
</style>
