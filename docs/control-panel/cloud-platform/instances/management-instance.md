---
sidebar_position: 3
title: Management Instance
---

# Management Instance

You can change the settings and status of your OneCloudPlanet platform instance in your account or through the OpenStack CLI.

## Start, stop, reboot Instance

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="personal-area" label="Personal Area" default>

1. Go to the **Instances**.

2. Change the state of the instance in one of the following ways.

**Using group operations - for multiple instances:**

- From the list, select the instances whose state you want to change.
- Above the list of instances, click the button with the desired action. The actionwill take place automatically.

**Through the context menu - for one instance:**

- In the list, find the instance whose state you want to change.
- Expand the context menu of the instance.
- Select the desired action.

**On the instance page:**

- In the list, click the name of the instance whose state you want to change.

- On the right above the table with the parameters of the instance, click on the icon of the desired action, to expand the large possible actions, press the **Menu** button.

**Confirm the action.**   

  </TabItem>

  <TabItem value="openstack" label="Openstack CLI">
    

Make sure the OpenStack client is installed and you can login to use it.

Do one of the following.

- If you know the name of the instance, get information about it and find the line with `id`:

```
openstack server show <Name Instance>
```

- If you don't know the exact instance name, display the list of instances and find the one you need:

```
openstack server list
```

  </TabItem>
</Tabs>