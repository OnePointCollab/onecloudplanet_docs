---
sidebar_position: 1
title: Create a Router
---

# Create a Router

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="personal-area" label="Personal Area" default>

1. Go to the **Routers** section.

![](../../img/routers/1.png)

2. Click on **Create Router**.

![](../../img/routers/2.png)

3. Enter the name of the future router in the **Name Router** field.

![](../../img/routers/3.png)

4. Allow or deny the router's access to the internet using the **Internet Access** switch. It is enabled by default.

![](../../img/routers/4.png)

5. Choose a subnet from the existing ones, or leave the field empty to create a router without interfaces. You can add interfaces at any time.

![](../../img/routers/5.png)

6. Select the router's state as "enabled" or "disabled." It is set to "enabled" by default.

![](../../img/routers/6.png)

7. Click **Create**.

![](../../img/routers/18.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Make sure the OpenStack client is [installed](#) and you can [authenticate](#) to use it.
Execute the necessary commands.

```
openstack router create --enable | --disable / <name>          
```

`--enable` - Enable the router (default).

`--disable` - Disable the router.

</TabItem>
</Tabs>
