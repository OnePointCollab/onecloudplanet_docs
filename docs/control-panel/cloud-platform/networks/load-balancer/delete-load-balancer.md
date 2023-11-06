---
sidebar_position: 1
title: Delete load balancer
---

# Delete load balancer

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="personal-area" label="Personal Area" default>

1. Go to the section **Load Balancers**.

![](../../img/load-balancer/1.png)

2. Select the desired load balancer, click on the ellipsis in the load balancer field, and choose **Delete** from the context menu.

![](../../img/load-balancer/27.png)

3. In the deletion window, click **Delete**.

![](../../img/load-balancer/31.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Make sure the OpenStack client is [installed](#) and you can [authenticate](#) to use it.
Execute the required commands.

```
openstack loadbalancer delete --cascade <load_balancer>
```

`--cascade` - Cascade the delete to all child elements of the load balancer..

`loadbalancer` - Load balancers to delete (name or ID).

</TabItem>
</Tabs>

