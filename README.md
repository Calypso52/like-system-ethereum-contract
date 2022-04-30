# like-system-ethereum-contract

## 1. Contract

Dependencies:

1. @truffle/hdwallet-provider

   `npm install @truffle/hdwallet-provider`

2. truffle-config.js

3. mnemonic，对应：红框

   ![image-20220429212006726](README.assets/image-20220429212006726.png)

4. Attention:

   check the migration file names like: 

   ![image-20220429213605171](README.assets/image-20220429213605171.png)

   必须要有一个Migrations.sol合约才能迁移。

5. deploy contract

   `truffle migrate --reset --network rsk`

6. 迁移好了之后，前端frontend文件里面会出现一个contract文件夹，包含两个json文件，也是前端找到contract钱包的方法。

## 2. frontend

首先安装几个dependencies：

`npm install ethers`

`npm install @metamask/detect-provider`

`npm install bootstrap`



## 3. Process

### 1. 初始状态

![image-20220430003204620](README.assets/image-20220430003204620.png)

### 2. 点赞确认

![image-20220430003241338](README.assets/image-20220430003241338.png)

### 3. 等待处理

![image-20220430003320112](README.assets/image-20220430003320112.png)

### 4. 处理完毕，点赞完成

![image-20220430003410547](README.assets/image-20220430003410547.png)

### 5. 取消点赞

![image-20220430003436979](README.assets/image-20220430003436979.png)

### 6. 等待处理

![image-20220430003459581](README.assets/image-20220430003459581.png)

### 7. 取消点赞完毕

![image-20220430003628424](README.assets/image-20220430003628424-16512945608627.png)

