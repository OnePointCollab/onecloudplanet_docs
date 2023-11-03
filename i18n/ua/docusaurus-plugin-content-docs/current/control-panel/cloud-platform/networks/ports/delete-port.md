---
sidebar_position: 4
title: Видалення порту
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Видалення порту

<Tabs>
<TabItem value="personal-area" label="Особистий кабінет" default>

1. Перейдіть до підрозділу **Порти**.

![](../../img/ports/1.png)

2. Оберіть необхідний порт, натисніть на трьокрапку у полі порту, та у контекстному меню виберіть **Видалити**.

![](../../img/ports/27.png)

3. У вікні видалення натисніть **Видалити**.

![](../../img/ports/28.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Переконайтеся, що клієнт OpenStack [встановлений](#) і ви можете [авторизуватись](#) для його використання.
Виконайте потрібні команди.    

```
openstack port delete <port>
```

`port` - Порт для видалення (ім’я або ідентифікатор)

</TabItem>
</Tabs>