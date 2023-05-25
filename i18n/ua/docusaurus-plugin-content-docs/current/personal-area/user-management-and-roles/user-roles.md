---
sidebar_position: 3
---

# User roles

Only users with the Account Owner or User Administrator role can add or edit users.

A user can be assigned one or more roles.


| Role | Description |
| ------------- | ------------- |
| Account Owner  | The user who registered the account. You cannot change the role of an Account Owner or assign that role to another user  |
| Account Administrator  | User with access to account management, services and billing  |
| Billing Administrator  | User with access to billing management and without access to service management  |
| User's Administrator  | A user with access to user management and no access to services and billing. The first User Administrator is created by the Account Owner.  |
| Account Observer | A user with access to view all services, billing and account data and no management access. The Account Viewer can view everything that the Account Admin manages  |


# Role Comparison

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="account" label="Account" default>

| Access  | Account Owner | Account Administrator | Billing Administrator | User's Administrator | Account Observer |
| ------- | ------------- | --------------------- | --------------------- | -------------------- | ---------------- |
|   Two-factor authentication   | ✓ | ✓ | ✓ | ✓ | ✓ |
|   User Management   | ✓ | ✓ | ✗ | ✓ | ✗ |
|   Receiving notifications   | ✓ | ✓ | ✓ | ✓ | ✓ |
|   Notification management   | ✓ | ✓ | ✗ | ✓ | ✗ |
|   Create tickets   | ✓ | ✓ | ✓ | ✓ | ✓ |
|   View all tickets   | ✓ | ✓ | ✓ | ✓ | ✓ |


  </TabItem>
  <TabItem value="billing" label="Billing">

| Access  | Account Owner | Account Administrator | Billing Administrator | User's Administrator | Account Observer |
| ------- | ------------- | --------------------- | --------------------- | -------------------- | ---------------- |
|   View balance status   | ✓ | ✓ | ✓ | ✗ | ✓ |
|   Add Credit   | ✓ | ✓ | ✓ | ✗ | ✗ |
|   Payment for services   | ✓ | ✓ | ✗ | ✗ | ✗ |
|   View service statuses   | ✓ | ✓ | ✓ | ✗ | ✗ |
|   View reporting documents   | ✓ | ✓ | ✓ | ✗ | ✓ |

  </TabItem>
  <TabItem value="services" label="Services">

| Access  | Account Owner | Account Administrator | Billing Administrator | User's Administrator | Account Observer |
| ------- | ------------- | --------------------- | --------------------- | -------------------- | ---------------- |
|   Connecting services / creating cloud resources   | ✓ | ✓ | ✗ | ✗ | ✓ |
|   View connected services / created resources   | ✓ | ✓ | ✓ | ✗ | ✓ |

  </TabItem>
</Tabs>