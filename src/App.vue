<template>

  <div class="wrapper">
    <h1 class="title">{{ title }}</h1>

    <!-- сообщение об ошибке  -->
    <message v-if="message" :message="message"></message>

    <!-- добавление новой заметки  -->
    <newNote :note="note" @addNote="addNote"></newNote>
    <!-- список заметок  -->
    <noteList :notes="notes"></noteList>
  </div>
</template>

<script>
import message from '@/components/MessageStatus.vue'
import noteList from '@/components/NotesList.vue'
import newNote from '@/components/NewNote.vue'


export default {
  name: "App",
  components: {
    message: message,
    noteList: noteList,
    newNote: newNote,

},
  data() {
    return {
      title: "Мои заметки",
      message: null,
      note: {
        title: "",
        description: "",
        date: "",
      },
      notes: [
        {
          title: "SvelteJS - набирает обороты",
          description:
            "Сегодня он проще и быстрее чем любой другой JS фреймворк для веба.И на нем можно делать все - сайты, виджеты, мобильные приложения или десктоп приложения",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Пробую реанимировать канал",
          description:
            "переосмыслить? пока планирую писать заметки, больше для себя, чтобы структурировать мысли, если кому то понравится - хорошо, если что то получится - еще лучше...",
          date: new Date(Date.now()).toLocaleString(),
        },
        {
          title: "Создание favicon для сайта",
          description:
            "Favicon играет важную роль в веб-приложениях. Он может улучшить внешний вид сайта в выдаче, повышает узнаваемость вашего сайта, помогает пользователю быстро найти...",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
    };
  },
  methods: {
    addNote() {
      let { title, description } = this.note;

      if (title === "") {
        this.message = "Заголовок заметки не может быть пустым!";
        return false;
      }

      this.notes.push({
        title,
        description,
        date: new Date(Date.now()).toLocaleString(),
      });

      this.message = null;
      this.note.title = "";
      this.note.description = "";
    },
  },
};
</script>

<style>
</style>
