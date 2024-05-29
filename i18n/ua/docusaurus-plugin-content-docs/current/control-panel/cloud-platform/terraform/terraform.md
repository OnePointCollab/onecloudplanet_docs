---
sidebar_position: 3
---

# Terraform


## Підготовлення

1. Створити [OpenAPI](./openapi-token) та [OpenStack](./OpenStack-token) токени, за посиланням.

2. Створити openrc файл.

3. Управління ресурсами, доступними через OpenStack API, використовуйте [OpenStack Terraform provider](https://registry.terraform.io/providers/terraform-provider-openstack/openstack/latest/docs).

4. Використовуйте [Onecloud provider](https://registry.terraform.io/providers/OnePointCollab/ocp/latest/docs) для управління Kubernetes Clusters.



## Ініціалізація Terraform

У директорії, з якої ви плануєте прцювати з проектом, виконайте наступну комаду:
```
terraform init
```
Після чого будуть створені додаткові файли, необхідні для роботи Terraform.


## Створення ресурсів з допомогою Terraform

1. Створіть конфігурацію ресурсів в робочій директорії.
2. Виконайте наступну команду:
```
terraform apply
# У разі запиту на підтвердження введіть yes
```

3. Дочекайтесь завершення роботи.


## Оновлення Terraform

Якщо версія провайдера у файлі ocp_provider.tf нижчий за необхідний для створення ресурсу - при валідації 
конфігурації винекне помилка. Для її запобігання, оновіть провайдер:

1. Відкрийте файл ocp_provider.tf та змініть версію на необхідну, наприклад: ```version = "~> 0.1.3"```.
2. У терміналі виконайте наступну команду:
```
terraform init --upgrade
```
