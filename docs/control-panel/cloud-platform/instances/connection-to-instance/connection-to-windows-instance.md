---
sidebar_position: 1
title: Connecting to Windows instance
---

# Connecting to Linux Instance

The recommended way to connect to a Linux virtual machine is via SSH using a key pair.

## 1. Check the ability to connect via SSH

To connect via SSH, you must have an SSH server running on the virtual machine. Linux instances created on OneCloudPlanet have the OpenSSH server installed and running by default.

Before connecting, make sure the following conditions are met:

- the virtual machine is running and the OS boot process has ended;

- remote access via SSH protocol (TCP port 22) is allowed in the instance network settings; (Security groups)

- the instance has an external ("floating") IP address available for connection.

> :bulb: If SSH connection to the instance is not possible or available, use the VNC console.

## 2. Choose a login name

Determine the username (login) of the operating system that is deployed on the target instance.

In OneCloudPlanet images, the root account has been locked out for security reasons and a default account has been added:

| Operating System  | User name |
| ------- | ------- |
| AlmaLinux | almalinux |
|   ALT Linux   | altlinux |
|   Astra Linux   | astra |
|   CentOS   | centos |
|   Debian   | debian |
|   Fedora   | fedora |
|   FreeBSD   | freebsd |
|   openSUSE   | opensuse |
|   Ubuntu   | ubuntu |
|   RedOS   | redos |

## 3. Check for key pair

To connect to an instance via SSH using a key pair, the public key must be stored on the instance in the `~/.ssh/authorized_keys` file, and the private key file must be located on the computer from which you are connecting.

If one or both of the keys in a pair are lost, follow the [recovery instructions](#).

## 5. Connect to Linux instance 

1. (Optional) Set the access rights to the key file:

```
chmod 400 <path to key>
```

2. Run the command in a terminal.

- To connect by IP address:

```
ssh -i <path to key> <username>@<external IP address of instance>
```

- To connect using a fully qualified domain name:

```
ssh -i <path to key> <username>@<fully qualified domain name of the instance>
```

3. If this is the first connection to instance, a confirmation message will appear:

```
1. The authenticity of host '213.219.212.130 (213.219.212.130)' can't be established. 
2. ECDSA key fingerprint is SHA256:aYZIWs9N6KRtfFOuic6eoWcluhSp6+jha/DSBgd9McI. 
3. Are you sure you want to continue connecting (yes/no)?
```

Type `yes` in the terminal and press **Enter**.