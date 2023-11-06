---
sidebar_position: 3
title: Manage Security Groups
---

# Add a Rule

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="personal-area" label="Personal Area" default>

1. Navigate to the **Security Groups** section.

![](../../img/security-group/17.png)

2. Select the desired security group, click on the three dots in the security group field, and choose **Add Rule** from the context menu.

![](../../img/security-group/8.png)

3. Choose the protocol of the rule in the **Rule Protocol** field.

![](../../img/security-group/9.png)

4. Select the direction of the rule in the **Direction** field.

![](../../img/security-group/10.png)

5. Specify the range of IP addresses in the **CIDR** field.

![](../../img/security-group/11.png)

6. Optionally, add a description for the rule in the **Description** field.

![](../../img/security-group/12.png)

7. Click **Create**.

![](../../img/security-group/4.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Make sure that the OpenStack client is installed and you are able to authenticate to use it. Execute the necessary commands.
    
```
openstack security group rule create --remote-ip <ip-address> /
                                     --protocol <protocol> /
                                     --description <description> /
                                     --ingress /
                                     --egress /
                                     <security-group-name>    
```

`--remote-ip` - Remote IP address block (may use CIDR notation; default for IPv4 rule: 0.0.0.0/0)
`--protocol` - IP protocol (ah, dccp, egp, esp, gre, icmp, igmp, ipv6-encap, ipv6-frag, ipv6-icmp, ipv6-nonxt, ipv6-opts, ipv6-route, ospf, pgm, rsvp, sctp, tcp, udp, udplite, vrrp and integer representations [0-255]; default: tcp)
`--ingress` - Rule applies to incoming network traffic (default)
`--egress` - Rule applies to outgoing network traffic

</TabItem>
</Tabs>

<Tabs>
<TabItem value="personal-area" label="Personal Area" default>

# Delete a Rule

1. Go to the **Security Groups** section.

![](../../img/security-group/17.png)

2. Click on the name of the desired security group.

![](../../img/security-group/18.png)

3. The detailed information page will display a list of rules.

![](../../img/security-group/15.png)

4. Select the rule you want to delete, click on the three dots in the rule field, and choose **Delete** from the context menu.

![](../../img/security-group/16.png)

5. In the delete window, select **Delete**.

![](../../img/security-group/19.png)

</TabItem>
<TabItem value="openstack" label="Openstack CLI">

Make sure that the OpenStack client is installed and you are able to authenticate to use it. Execute the necessary commands.
    
```
openstack security group rule delete <rule>
```

</TabItem>
</Tabs>
