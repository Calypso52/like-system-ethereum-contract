import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import Like from '../contracts/Like.json';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const like_contract = new Contract(
        Like.networks[networkId].address,
        Like.abi,
        signer
      );
      resolve({like_contract});
      return;
    }
    reject('Install Metamask');
  });

export default getBlockchain;
