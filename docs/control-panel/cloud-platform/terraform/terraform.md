---
sidebar_position: 3
---

# Terraform


## Preparation

1. Create an [OpenAPI](./openapi-token) and [OpenStack](./OpenStack-token) tokens using the provided link.

2. Create an openrc file.

3. To manage resources available through the OpenStack API, use the [OpenStack Terraform provider](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs).

4. Use the [Onecloud provider](https://registry.terraform.io/providers/OnePointCollab/ocp/latest/docs) to manage Kubernetes Clusters.



## Initializing Terraform

In the directory where you plan to work on the project, execute the following command:
```
terraform init
```
This will create additional files necessary for Terraform to operate.


## Creating Resources with Terraform

1. Create the resource configuration in the working directory.
2. Execute the following command:
```
terraform apply
# When prompted for confirmation, enter yes
```

3. Wait for the process to complete.


## Updating Terraform

If the provider version in the ocp_provider.tf file is lower than required to create the resource, 
 validation error will occur. To prevent this, update the provider:

1. Open the ocp_provider.tf file and change the version to the required one, for example: ```version = "~> 0.1.3"```.
2. In the terminal, execute the following command:
```
terraform init --upgrade
```
