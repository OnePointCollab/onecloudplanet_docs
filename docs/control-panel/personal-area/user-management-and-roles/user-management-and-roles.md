---
sidebar_position: 3
---

# User Management And Roles

Only users with the Account Owner or User Administrator role can add or edit users.

# User Roles

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
|   View balance status   | ✓ | ✓ | ✓ | ✗ | ✓ |


  </TabItem>
  <TabItem value="billing" label="Billing">
    This is an orange 🍊
  </TabItem>
  <TabItem value="services" label="Services">
    This is a banana 🍌
  </TabItem>
</Tabs>


# Role Combination

If a role has all the permissions of another role, the roles are not combined.

| Access  | Account Owner | Account Administrator | Billing Administrator | User's Administrator | Account Observer |
| ------- | ------------- | --------------------- | --------------------- | -------------------- | ---------------- |
|   View balance status   | ✓ | ✓ | ✓ | ✗ | ✓ |
| Account Administrator  | User with access to account management, services and billing  |
| Billing Administrator  | User with access to billing management and without access to service management  |
| User's Administrator  | A user with access to user management and no access to services and billing. The first User Administrator is created by the Account Owner.  |
| Account Observer | A user with access to view all services, billing and account data and no management access. The Account Viewer can view everything that the Account Admin manages  |