1. Запуск приложения:

    - npm start запускает приложение;
    - npm run server запускает сервер;
    - npm run devServer запускает сервер в режиме разработки.

    1. Подключите сервер к БД в файле db.js:
        - заполните 'user';
        - заполните 'password';
        - измените номер 'port' на номер своего порта;
        - заполните название базы данных 'database';
        - В папке ./src/server/controller в файле table.controller.js в 8 строке измените название таблицы после слова "FROM" на название своей таблицы.

    2. Запустите сервер при помощи команды npm run server;
    3. Запустите клиент при помощи команды npm start;

2. Клиент:

Изначально я думал сделать логику по сортировке/фильтрации на сервере. Я хотел делать новый запрос, чтобы в случае изменения данных отрисовывались актуальные данные.
Но так, как в приложении нет логики для добавления/удаления данных, я предположил, что данные вряд ли будут меняться, а если и будут, то нечасто.
Поэтому, чтобы не нагружать приложение лишними запросами на сервер и на БД, я решил всю логику оставить на клиенте и работать со state-ом.

В логике я использовал функцию sort, а не самописную, так как все современные браузеры используют либо быструю сортировку, либо сортировку слиянием.

На клиенте работает пагинация, сортировка и фильтрация. Работают друг с другом в любом порядке. После фильтрации для отмены нужно нажать на кнопку 'Cancel'.
Так же присутствует адаптив.

3. Сервер:

Сервер запускается на 5000 порту.
Настройки подключения сервера к ДБ находятся в файле db.js;

4. База данных:

В качестве базы данных использована PostgreSQL.
Сервер БД запущен на порту 8080.
Данные хранятся в виде таблицы со столбцами:
    -date;
    -name;
    -amount;
    -distance.

5. Принцип работы приложения:

При запуске приложения происходит GET запрос клиента на сервер по адресу "http://localhost:5000/rows", по этому запросу сервер берет данные из БД.
После данные поступают с сервера на клиент, где тот отрисовывает их.

По умолчанию использована сортировка по названию.
