---
sidebar_position: 1
title: Create image
---

# Create image

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
   <TabItem value="personal-area" label="Personal Area" default>

1. Go to the **Images** section.

![](../img/images/2.png)

2. Click on **Create Image**.

![](../img/images/1.png)

3. Enter the name of the future image in the field labeled **Name Image**.

![](../img/images/3.png)

4. Choose the **image format** for the future image from the format field.

![](../img/images/4.png)

5. Choose the source type for image creation.

    5.1. Create an image by specifying a source URL.

    ![](../img/images/5.png)
    
    5.2. Create an image by uploading a disk file.
    
    ![](../img/images/6.png)

6. (Optional) You can further customize the image. Click on **Additional Settings**.

![](../img/images/7.png)

![](../img/images/8.png)

7. Choose the operating system that will be associated with the image in the **Operating system** field.

![](../img/images/9.png)

8. You can also enter the version that will be associated with the image in the **OS version** field.

![](../img/images/10.png)

9. Specify the minimum disk size.

![](../img/images/11.png)

10. Specify the minimum RAM size.

![](../img/images/12.png)

   </TabItem>
   <TabItem value="openstack" label="Openstack CLI">

   Make sure that the OpenStack client is installed and you are able to authenticate to use it. Execute the necessary commands.

   ```
   openstack image create
   --disk-format <disk-format> /
   --min-disk <disk-gb> /
   --min-ram <ram-mb> /
   --file <file> | --volume <volume>
   <image-name>
   ```

   `--disk-format <disk-format>` - Image disk format. The supported options are: ami, ari, aki, vhd, vmdk, raw, qcow2, vdi, iso. The default format is: raw.

   `--min-disk <disk-gb>` - Minimum disk size needed to boot image, in gigabytes.

   `--min-ram <ram-mb>` - Minimum RAM size needed to boot image, in megabytes.

   `--file <file>` - Upload image from local file.

   </TabItem>
</Tabs>

# Creating an Image from a **Volume**

<Tabs>
<TabItem value="personal-area" label="Personal Area" default>

1. Go to the **Volumes** section.

![](../img/volumes/i-vol1.png)

2. Select the required disk, click on the ellipsis in the disk field, and choose **Upload to image** from the context menu.

![](../img/images/13.png)

3. Enter the image name in the **Name** field.

![](../img/images/14.png)

4. Choose the image format in the **Image format** field.

![](../img/images/15.png)

5. After filling in the details, click **Create**.

![](../img/images/16.png)

</TabItem>
 <TabItem value="openstack" label="Openstack CLI">

Make sure that the OpenStack client is installed and you are able to authenticate to use it. Execute the necessary commands.

   
```
openstack image create --disk-format <disk-format> --volume <volume> <image-name>
```

`--disk-format <disk-format>` - Image disk format. The supported options are: ami, ari, aki, vhd, vmdk, raw, qcow2, vdi, iso. The default format is: raw.

`--volume <volume>` - Create image from a volume.

</TabItem>
</Tabs>


# Create image by duplicate an exist one image

1. Select the desired image, click on the ellipsis in the image field, and choose **Duplicate** from the context menu.

![](../img/images/17.png)

2. Enter the name of the future image in the **Name** field.

![](../img/images/18.png)

3. (Optional) Check the box with the description: **Delete the source image(move image)** to implement moving the image.

![](../img/images/19.png)

4. Click on **Restore image**

![](../img/images/20.png)
