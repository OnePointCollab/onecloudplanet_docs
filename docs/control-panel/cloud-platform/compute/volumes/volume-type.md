---
sidebar_position: 2
title: Network volume
---

# Network volumes

These are scalable block devices that can be easily moved between cloud servers. They are suitable for expanding server volume space without changing the bootable volume. Triple replication of volumes ensures high data security.

You can either [create a network volume together with an instance](/control-panel/cloud-platform/compute/instances/create-an-instance) or [create one separately](/control-panel/cloud-platform/compute/volumes/create-volume), then create a server from it or attach it as an additional volume.

## volume Types

- **Basic HDD (Ukraine)** — HDD volume based on enterprise-class SATA drives. Suitable for storing large volumes of data that are frequently read or written.

- **Universal SSD (Ukraine/Poland)** — An SSD volume suitable for use as the boot volume of a cloud server.

- **Fast SSD (Poland)** — NVMe SSD volume with faster response times and higher read and write speeds compared to other types. Suitable for workloads that require high read and write speeds.

## Features of Network volumes

There are three types of network volumes available, each with different throughput capacities, IOPS limits, and recommended size limitations.

Network volumes can be used as bootable (system) volumes for instances or attached as additional volumes.

You can attach up to 255 network volumes to a single instance when using a standard volume with the virtio-scsi property (4 when using IDE, and 26 when using virtio-blk).

Network volumes can be detached from instances.

You can increase the size of a network volume.

You can create an image, snapshot, or another volume from a network volume and configure backups.

## Limits

> :warning: **The limits of bootable and additional network volume size, IOPS for read/write, and throughput values depend on the volume type.**

| Volume Type   | Availability Zone | Max Size | Read/Write Limits |
|---------------|-------------------|---------|-------------------------|
| Basic HDD     | UA1               | 10TB    | 200 IOPS / 100 IOPS     |
| Universal SSD | UA1, PL1       | 10TB    | 2000 IOPS / 1000 IOPS   |
| Fast SSD      | PL1                 | 10TB    | 20000 IOPS / 10000 IOPS |

## Factors Affecting Performance

Different volume types have different IOPS values, which represent the number of read and write operations per second. Creating and verifying a file system are procedures that require a certain number of read and write operations to the volume. The more performant the volume, the faster these data operations will complete.

When you initially launch a cloud server, the file system on the system volume "extends" according to the volume size. The larger the volume size and the lower the IOPS limits, the longer this process will take, resulting in a longer time to start the cloud instance.

The file system size affects the time it takes to check the server's status in the event of an emergency shutdown. Checking the status is enabled by default for bootable (system) volumes of all servers created from ready-made images.
