<template>
  <div class="notes">
    <div class="wrapper">
      <header class="notes__header">
        <h2 class="title">Все заметки</h2>
        <ul class="notes__btn-list">
          <li>
            <button
              type="button"
              :class="{ active: grid }"
              @click="grid = true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h7v7H3zm11 0h7v7h-7zm0 11h7v7h-7zM3 14h7v7H3z" />
              </svg>
            </button>
          </li>
          <li>
            <button
              type="button"
              :class="{ active: !grid }"
              @click="grid = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 6h13M8 12h13M8 18h13M3 6h0m0 6h0m0 6h0" />
              </svg>
            </button>
          </li>
        </ul>
      </header>

      <ul class="notes__list">
        <li class="notes__item"  :grid="grid" :class="{ full: !grid }" v-for="(note, index) in notes" :key="index">
          <h3>{{ note.title }}</h3>
          <p>{{ note.description }}</p>
          <time> {{ note.date }} </time>

          <button
            class="notes__btn"
            type="button"
            title="Удалить заметку"
            @click="removeNote(index)"
          >
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
  data() {
    return {
      grid: true,
    }
  },
  props: {
    notes: {
      type: Array,
      require: true,
    }
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
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
    box-shadow: 0 30px 30px rgba(0,0,0,0.02);

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
    &.full {
      width: 100%;
    }

    &:hover {
      box-shadow: 0 30px 30px rgba(0,0,0,0.04);
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }
  }
  &__header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
    margin-bottom: 32px;
    .title {
      margin: 0;
      font-size: 21px;
      font-weight: 500;
      text-transform: uppercase;
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
      transition: all 0.3;
    }
  }
  &__btn-list {
    display: flex;
    gap: 12px;

    button {
      background-color: transparent;
      border: none;
      width: 42px;
      height: 42px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      svg {
        width: 90%;
        height: 90%;
        opacity: 0.4;
        pointer-events: none;
      }
      &.active {
        background-color: #009688;
        svg {
          stroke: #fff;
          opacity: 1;
        }
      }
    }
  }
}
</style>
