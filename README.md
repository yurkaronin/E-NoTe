# Разборка на компоненты c последующим подключением и настройкой

## Сообщение об ошибке

1. создаём файл компонента Message.vue в соответствующей папке для компонентов
2. в файле App.vue импортируем новый компонент - запись в теге script в файле App.vue (указывая путь к файлу компонента)

       import message from '@/components/Message-status.vue'

   При этом используем префикс @

3. В параметрах приложения в основном файле App.vue объявляем наш компонент

        export default {
          name: "App",
          components: {
            message: message,
          },
        };

4. Переносим разметку компонента в файл компонента

        <template>
        <div class="message">
            <p>{{ message }}</p>
          </div>
        </template>

5. Настраиваем его параметры:

        <script>
        export default {
          props: {
            message: {
              type: String,
              require: true,
            }
          }

        }
        </script>

6. В основном файле программы App.vue вставляем новый компонент:

        <!-- сообщение об ошибке  -->
        <message v-if="message" :message="message"></message>

   При этом мы настраиваем передачу данных от родителя к потомку - к нашему компоненту.
  Реализуем через props (в файле компонента пишем):

        export default {
            props: {
              message: {
                type: String,
                require: true,
              }
            }

          }

      В props описываем что именно мы принимаем от родителя - объект message c двумя параметрами:
      - type: String,
      - require: true,

    Тип объекта и отмечаем опцию require - передача параметров обязательна.

7. Переносим все персональные стили в компонент и тегу \<style> добавляем атрибут scoped (параметр ограничивает область видимости css-стилей - они будут применяться ТОЛЬКО для этого компонента).

## Добавление новой заметки

1. Аналогично предыдущему компоненту создаём новый файл для компонента, переносим туда разметку, стили.
  В параметрах мы указали что параметры (данные полей и методы отправки данных) будут передаваться от родителя к потомку через props. Указываем что тип передаваемых данных - объект, со всеми своими свойствами и методами.
  Так как мы перенести всю конструкцию в отдельный компонент, указанный в кнопке метод @click="addNote" отсутствует в компоненте. Он описан в родителе. Следовательно нам нужно добавить недостающий метод для нового компонента, что бы всё работало.
  Используем метод $emit().

  > $emit() может генерировать пользовательские события непосредственно в выражениях шаблона.

  Этот метод будет передавать родителю два параметра (сам объект, и возвращать её обратно).
  Наш новый компонент теперь будет выглядеть вот так:

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

            <textarea name="" id="" cols="30" rows="10" v-model="note.description">Текст заметки</textarea>
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

   При подключении компонента в основном файле приложения(App.vue):

       import newNote from '@/components/NewNote.vue'
    мы прописали параметры:

        <newNote :note="note" @addNote="addNote"></newNote>

## Список сохранённых заметок

