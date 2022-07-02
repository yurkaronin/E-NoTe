# Разборка на компоненты

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
