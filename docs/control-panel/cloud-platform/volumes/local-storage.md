---
sidebar_position: 1
title: Managing local disks.
---

# Managing Disks

A local disk is directly connected to the compute server through the PCIe NVMe protocol interface. Therefore, a local disk can only be created with a cloud instance and used as a boot (system) disk.

Local disks have no network-related delays, making them suitable for tasks that are sensitive to read and write speed.

## Features of a Local Disk

- SSD NVMe disk.
- Performance – 12,800 IOPS for reading and 6,400 IOPS for writing.
- Throughput - 300 MB/s.
- The recommended maximum disk size is 2 TB.
- The disk subsystem is configured in RAID 10.
- It can only be a boot disk for a cloud server and cannot be used as an additional disk. Only network disks can be attached as additional disks.
- A cloud instance can have only one local disk.
- It cannot be detached from the cloud server and attached to another server.
- It cannot be directly resized; you can only change the configuration of the cloud server.
- You cannot create another disk, snapshot, or backup from the local disk. However, you can create a disk image (for example, for quick server cloning).
- It will be deleted along with all data when the cloud server is deleted.