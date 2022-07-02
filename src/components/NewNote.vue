<template>
  <div class="new-note">
    <label for="">Введите заголовок заметки</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="Ваше название"
      v-model="note.title"
    />

    <textarea name="" id="" cols="30" rows="10" v-model="note.description">
Текст заметки</textarea
    >
    <button type="submit" @click="addNote">Добавить заметку</button>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      require: true,
    },
  },
  methods: {
    addNote () {
      this.$emit('addNote', this.note);
    }
  },
};
</script>
<style  lang="scss" scoped>
.new-note {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 64px;
  max-width: 650px;

  label {
    opacity: 0.7;
    font-size: 0.95rem;
    font-style: italic;
  }

  input,
  textarea {
    opacity: 1;
    padding: 12px 20px;
    color: #000000;
  }

  button {
    background-color: #009688;
    padding: 12px 20px;
    font-weight: 700;
    color: #ffffff;
    border-radius: 5px;
    border: 1px solid #009688;
    cursor: pointer;
  }
}
</style>
