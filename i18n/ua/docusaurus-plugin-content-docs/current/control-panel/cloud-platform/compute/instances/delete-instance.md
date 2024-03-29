---
sidebar_position: 6
title: Видалення інстансу
---

# Видалення інстансу

<Tabs>
  <TabItem value="personal-area" label="Особистий кабінет" default>

На платформі OneCloudPlanet інстанс видаляється за замовчуванням разом із основним диском (кореневим диском).

> :warning: **Операція видалення незворотна! Збережіть необхідні дані перед видаленням інстансу.**

1. Підготуйте інстанс до видалення. Продублюйте диски від інстансу, який потрібно зберегти.

2. Після збереження необхідних даних видаліть інстанс.

3. Видаліть інстанс одним із наведених нижче методів.

**Щоб видалити інстанс через особистий кабінет, необхідно:**

1. Перейдіть до **Інстансів**.

![](../../img/ic-instance-1-ua.svg)

2. Видаліть інстанс одним із наведених нижче методів.

**Використання групових операцій - для кількох інстансів:**

- Зі списку виберіть інстанси, стан яких потрібно видалити.

![](img/i-m1-ua.svg)

- Над списком інстансів натисніть кнопку **Видалити**. Дія відбудеться автоматично.

**Через контекстне меню - для одного інстансу:**

- У списку інстансів натисніть на ім'я інстансу, яку потрібно видалити.

- Розгорніть контекстне меню інстансу.

![](img/i-inst-1-ua.svg)

- Нажміть на **Видалити**

**На сторінці інстансу:**

- У списку інстансів натисніть на ім'я інстансу, яку потрібно видалити.

- Праворуч над таблицею з параметрами інстансу натисніть кнопку **Меню**.

![](img/i-inst-2-ua.svg)

- Нажміть на **Видалити**.

</TabItem>

<TabItem value="openstack" label="Openstack CLI">

Переконайтеся, що клієнт OpenStack [встановлений](#) і ви можете [авторизуватись](#) для його використання.

Виконайте потрібну команду.

- Запустити інстанс
```
openstack server delete <ID інстансу>
```

</TabItem> 
</Tabs>