---
sidebar_position: 1
title: Створення групи безпеки
---

# Створення групи безпеки

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="personal-area" label="Personal Area" default>

1. Перейдіть до підрозділу **Групи безпеки**.

![](../../img/security-group/17.png)

2. Натисніть на **Створити групу безпеки**.

![](../../img/security-group/1.png)

3. Введіть назву майбутньої групи безпеки у полі **Назва**.

![](../../img/security-group/2.png)

4. Можете ввести додатковий опис групи безпеки у поле **Опис**.

![](../../img/security-group/3.png)

5. Натисніть **Створити**.

![](../../img/security-group/4.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Переконайтеся, що клієнт OpenStack [встановлений](#) і ви можете [авторизуватись](#) для його використання.
Виконайте потрібні команди.

```
openstack security group create --description <description> <security-group-name>
```

`--description <description>` - Визначає опис групи безпеки.
`<security-group-name>` - Це назва нової групи безпеки.

</TabItem>
</Tabs>
