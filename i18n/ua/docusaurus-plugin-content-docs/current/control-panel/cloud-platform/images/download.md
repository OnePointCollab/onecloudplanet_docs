---
sidebar_position: 3
title: Завантаження образу
---

# Завантаження(Експорт) образу

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="personal-area" label="Особистий кабінет" default>

1. Оберіть необхідний образ, нажміть на трьокрапку у полі образу,та у контекстному меню виберіть **Завантажити образ**.

![](../img/images/33.png)

2. Дочекайтесь завантаження образу.

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Переконайтеся, що клієнт OpenStack встановлений і ви можете авторизуватись для його використання.
Виконайте потрібні команди.
```
openstack image save <image-name>
```

</TabItem>
</Tabs>
