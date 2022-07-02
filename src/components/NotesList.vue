<template>
  <div class="notes">
    <div class="wrapper">
      <ul class="notes__list">
        <li class="notes__item" v-for="(note, index) in notes" :key="index">
          <h3>{{ note.title }}</h3>
          <p>{{ note.description }}</p>
          <time> {{ note.date }} </time>

          <button class="notes__btn" type="button" title="Удалить заметку" @click="removeNote(index)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                fill="#FF3D3D"
                d="M20 2.308 17.692 0 10 7.692 2.308 0 0 2.308 7.692 10 0 17.692 2.308 20 10 12.308 17.692 20 20 17.692 12.308 10 20 2.308Z"
              />
            </svg>
          </button>
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
  methods: {
    removeNote(index) {
      console.log(`Note id - ${index} removed`);
      this.$emit("removeNote", index);
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
    position: relative;
    border-radius: 5px;

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
  &__btn {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 25px;
      height: 25px;
      opacity: 0.4;
      border: none;
      background-color: transparent;
      cursor: pointer;

      display: flex;
      align-items: center;

      svg {
        pointer-events: none;
        position: absolute;
        width: 15px;
        height: 15px;
      }
    }
}
</style>
