---
sidebar_position: 1
title: Managing local Volumes.
---

# Managing volumes

A local volume is directly connected to the compute server through the PCIe NVMe protocol interface. Therefore, a local volume can only be created with a cloud instance and used as a boot (system) volume.

Local volume have no network-related delays, making them suitable for tasks that are sensitive to read and write speed.

## Features of a Local Volume

- SSD NVMe volume.
- Performance – 12800 IOPS for reading and 6400 IOPS for writing.
- Throughput - 300 MB/s.
- The recommended maximum volume size is 2 TB.
- The volume subsystem is configured in RAID 10.
- It can only be a boot volume for a cloud server and cannot be used as an additional volume. Only network volumes can be attached as additional volumes.
- A cloud instance can have only one local volume.
- It cannot be detached from the cloud server and attached to another server.
- It cannot be directly resized; you can only change the configuration of the cloud server.
- You cannot create another volume, snapshot, or backup from the local volume. However, you can create a volume image (for example, for quick server cloning).
- It will be deleted along with all data when the cloud server is deleted.