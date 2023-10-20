---
sidebar_position: 4
title: Create a disk.
---

# Create a Disk

You can create a network disk together with an instance or create it separately and then attach it to an instance.

A local disk is created only when an instance is created.

A network disk can be created from different sources:

- **Empty**: Initially, this type of disk does not contain any data. You can use it to scale the storage space in an instance.
- **From an image**: Prepared by OneCloudPlanet or your own uploaded image. You can use this for replacing the boot disk during instance recovery or for cloning instances.
- **From another disk, snapshot, or backup**: To create a copy of an existing disk.

The cost of a network disk depends on the [disk type](#). You can calculate the cost during instance creation.

<Tabs>
 <TabItem value="personal-area" label="Personal Area" default>

On the OneCloudPlanet platform, you can change the instance type, which includes the number of processors (vCPU) and the amount of RAM.

1. Go to **Instances**.

Change the instance type using one of the methods below.

**Using the context menu:**

Find the instance you want to modify in the list of instances.

Expand the context menu for the instance.

Select the **Resize action**.

Choose the instance type to which you want to switch and click **Resize**.

**On the instance page:**

In the list of instances, click on the name of the instance you want to modify.

To the right, above the instance parameter table, click the icon for the action you want to perform to expand the larger possible actions, and click the **Menu** button.

Select the **Resize** action.

Fill in the input field and click **Resize**.

</TabItem>

<TabItem value="openstack" label="Openstack CLI">

Ensure that the OpenStack client is [installed](#) and you can [authenticate](#) to use it.

Execute the required command.

- To change the instance type

Get the list of available flavors and copy the flavor ID:
```
openstack flavor list --all
```

Initiate the instance type change and wait for the process to complete:
```
openstack server resize --flavor <ID типу><ID інстансу>
```

</TabItem> 
</Tabs>