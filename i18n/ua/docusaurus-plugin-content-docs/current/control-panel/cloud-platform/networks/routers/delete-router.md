---
sidebar_position: 4
title: Видалення маршрутизатора
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Видалення маршрутизатора

<Tabs>
<TabItem value="personal-area" label="Особистий кабінет" default>

1. Перейдіть до підрозділу **Маршрутизатори**.

![](../../img/routers/1.png)

2. Оберіть необхідний маршрутизатор, натисніть на трьокрапку у полі маршрутизатора, та у контекстному меню виберіть **Видалити**.

![](../../img/routers/20.png)

3. У вікні видалення натисніть **Видалити**.

![](../../img/routers/21.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Переконайтеся, що клієнт OpenStack [встановлений](#) і ви можете [авторизуватись](#) для його використання.
Виконайте потрібні команди.    

```
openstack router delete <router-name>
```

</TabItem>
</Tabs>