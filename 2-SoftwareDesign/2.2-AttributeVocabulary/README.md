### Словник атрибутів об’єктів

| Об'єкт                      | Атрибут                  | Короткий опис                                      | Тип         | Обмеження                 |
|-----------------------------|--------------------------|----------------------------------------------------|-------------|---------------------------|
| Користувач                  | Імя                      | Як вас звати?                                      | текст       | довжина < 100 символів    |
| Користувач                  | Прізвище                 | Як ваше прізвище                                   | текст       | довжина < 100 символів    |
| Користувач                  | Вік                      | Скільки вже років?                                 | число       | значення > 0              |
| Користувач                  | Стать                    | чоловік чи жінка                                   | текст       | довжина < 8 символів      |
| Користувач                  | E-mail                   | Який у вас електроний адрес?                       | текст       | довжина < 100 символів    |
| Користувач                  | Телефон                  | Контактний номер телефону                          | текст       | довжина < 10 символів     |
| Договір з оренди            | Номер договору           | Ідентифікатор договору                             | число       | значення > 0              |
| Договір з оренди            | Текст                    | Опис усіх вимог за якими формується договір        | текст       | довжина < 100000 символів |
| Договір з оренди            | Дата                     | Дата, коли відбулося оформлення договору           | дата        | довжина < 25 символів     |
| Інформація про розташування | Країна                   | Як називається країна, де буде переглядатись житло | текст       | довжина < 50 символів     |
| Інформація про розташування | Місто                    | Як називається місто, де буде переглядатись житло  | текст       | довжина < 50 символів     |
| Інформація про розташування | Район                    | Як називається район, де буде переглядатись житло  | текст       | довжина < 50 символів     |
| Інформація про житло        | Тип                      | Квартира чи будинок                                | текст       | довжина < 20 символів     |
| Інформація про житло        | Фото                     | Як виглядає житло                                  | зоображення | Розмір зображення < 10МБ  |
| Інформація про житло        | Ціна                     | Скільки коштує житло                               | число       | Значення  > 0             |
| Інформація про житло        | Кількість кімнат         | Яка кількість кімнат в житлі                       | число       | Значення > 0              |
| Інформація про житло        | Наявність інфраструктури | Чи є поблизу школи, магазини, дитсадки             | текст       | довжина < 100 символів    |
| Online-замовлення           | ПІБ                      | Імя прізвище та побатькові замовника               | текст       | довжина < 100 символів    |
| Online-замовлення           | Адреса                   | Повний адрес місцезнаходження                      | текст       | довжина < 100 символів    |
| Online-замовлення           | Кількість                | Кількість води, яку замовляють                     | число       | значення > 0              |
| Online-замовлення           | Дата                     | День, місяць, рік на який робиться замовлення      | дата        | довжина < 25 символів     |
| E-сплата                    | ПІБ отримувача           | Прізвище імя побатькові отримувача                 | текст       | довжина < 100 символів    |
| E-сплата                    | ПІБ відправника          | Прізвище імя побатькові відправника                | текст       | довжина < 100 символів    |
| E-сплата                    | Номер рахунку            | Номер рахунку на який відправляється гроші         | текст       | довжина < 100 символів    |
| E-сплата                    | Сума                     | Гроші, які повино сплатити                         | число       | значення > 0              |