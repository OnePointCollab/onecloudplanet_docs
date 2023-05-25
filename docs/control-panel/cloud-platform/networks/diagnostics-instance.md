---
sidebar_position: 4
title: Diagnostics Instance

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

## Delete Instance

On the OneCloudPlanet platform, the instance is deleted by default along with the main disk (root disk).

> :warning: **The delete operation is irreversible! Save the required data before deleting the instance.**

1. Prepare the instance for deletion. Detach additional volumes from the instance that you want to keep.

2. After saving the required data, delete the instance.

3. Remove the instance using one of the following methods.

To delete an instance through your personal account, you need to:

1. Go to the **Instances**.

2. Delete the instance using one of the following methods.

**Using group operations - for multiple instances:**

- From the list, select the instances whose state you want to delete.
- Above the list of instances, click the button **Delete**. The actionwill take place automatically.

**Through the context menu - for one instance:**

- In the list, find the instance whose state you want to delete.
- Expand the context menu of the instance.
- Click the **Delete**

**On the instance page:**

- In the list, click the name of the instance whose state you want to delete.

- On the right above the table with the parameters of the instance, click on the **Delete**, to expand the large possible actions, press the **Menu** button.

**Confirm the action.**

## Rename Instance

On the OneCloudPlanet platform, you can rename an instance.

1. Go to the **Instances**.

2. Change the instance name in one of the following ways.

**Via context menu:**

- In the list of instances, find the desired instance.
- Expand the context menu of the instance.
- Select the **Rename** action.
- Fill in the input field and click the **Save** button.

**On the instance page:**

- In the list of instances, click on the name of the instance whose state you want to change.
- Above the table with instance parameters, click the **More** button.
- Select the **Rename** action.
- Fill in the input field and click the **Save**.

## Change Instance type

On the OneCloudPlanet platform, you can change the type of instance - the number of processors (vCPU) and the amount of random access memory (RAM).

> :warning: **When you change the instance type, the instance will be reloaded.**

1. Go to the **Instances**.

2. Change the instance type in one of the following ways.

**Via context menu:**

- In the list of instances, find the desired instance.
- Expand the context menu of the instance.
- Select the **Resize** action.
- Choose which instance type you want to migrate to and click the **Save**.

**On the instance page:**

- In the list of instances, click on the name of the instance whose state you want to change.
- Above the table with instance parameters, click the **Resize** button.
- Choose which instance type you want to migrate to and click the **Save**.