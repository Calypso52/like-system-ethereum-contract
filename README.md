# like-system-ethereum-contract

## 1. Contract

Dependencies:

1. @truffle/hdwallet-provider

   `npm install @truffle/hdwallet-provider`

   Usage: 

2. truffle-config.js 文件，是干嘛用的？

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

