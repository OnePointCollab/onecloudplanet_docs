---
sidebar_position: 2
title: Редагувати групи безпеки
---

# Редагувати групи безпеки

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="personal-area" label="Personal Area" default>

1. Перейдіть до підрозділу **Групи безпеки**.

![](../../img/security-group/17.png)

2. Оберіть необхідну групу безпеки, натисніть на трьокрапку у полі групи безпеки,та у контекстному меню виберіть **Редагувати**.

![](../../img/security-group/5.png)

3. Змініть назву групи безпеки у полі **Назва**.

![](../../img/security-group/6.png)

4. Змініть додатковий опис групи безпеки у полі **Опис**.

![](../../img/security-group/7.png)

5. Натисніть створити.

![](../../img/security-group/4.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Переконайтеся, що клієнт OpenStack [встановлений](#) і ви можете [авторизуватись](#) для його використання. Виконайте потрібні команди.    

```
openstack security group set --name <new-name> --description <description> <security-group-name>
```

`--name <new-name>` - Це нова назва групи безпеки.
`--description <description>` - New security group description.

</TabItem>
</Tabs>
