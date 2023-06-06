---
sidebar_position: 1
title: Connecting to Windows instance
---

# Connecting to Windows Instance

The recommended way to connect to a Windows virtual machine is via RDP (Remote Desktop Protocol).

## 1. Check the ability to connect via SSH

Check RDP connectivity
Make sure the following conditions are met:

- the instance is started and the OS boot process is completed;

- after launching the instance, go to the VNC console and set a password on the OS. This will be your root password.

- the instance has an external ("floating") IP address available for connection.