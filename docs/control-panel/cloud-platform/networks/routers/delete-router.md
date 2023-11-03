---
sidebar_position: 4
title: Delete router
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete router

<Tabs>
<TabItem value="personal-area" label="Personal Area" default>

1. Go to the **Routers** subsection.

![](../../img/routers/1.png)

2. Select the necessary router, click on the ellipsis in the router field, and choose **Delete** from the context menu.
![](../../img/routers/20.png)

3. In the delete window, click **Delete**.

![](../../img/routers/21.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Make sure the OpenStack client is installed and you can authenticate to use it.
Execute the necessary commands.

```
openstack router delete <router-name>
```

</TabItem>
</Tabs>