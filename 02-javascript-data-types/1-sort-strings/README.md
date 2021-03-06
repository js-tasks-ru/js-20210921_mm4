# sortStrings

Необходимо реализовать функцию, которая на вход принимает массив строк и порядок сортировки: "asc" или "desc",
a возвращает новый отсортированный массив строк согласно заданному порядку.

**Пример:**

```js
sortStrings(['b', 'a', 'c'], 'asc'); // ['a', 'b', 'c']
sortStrings(['b', 'a', 'c'], 'desc'); // ['c', 'b', 'a']
```

Также функция должна учитывать регистр - строки в верхнем регистре должны идти первыми.

**Пример:**
```js
sortStrings(['абрикос', 'Абрикос', 'яблоко', 'Яблоко', 'ёжик', 'Ёжик'], 'asc'); // ['Абрикос', 'абрикос', 'Ёжик', 'ёжик', 'Яблоко', 'яблоко']
```

**Обратите внимание:**

Сортировка строк должна происходить с учётом правил языка. Поддерживаемые языки: английский и русский.
Буквы, имеющие [диакритические знаки](https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%B0%D0%BA%D1%80%D0%B8%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%B7%D0%BD%D0%B0%D0%BA%D0%B8),
должны быть отсортированы корректно.
