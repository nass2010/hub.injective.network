var be=Object.defineProperty;var _e=(t,o,e)=>o in t?be(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var y=(t,o,e)=>(_e(t,typeof o!="symbol"?o+"":o,e),e);import{aj as ee,O as te,ak as re,m as f,a5 as U,w as ne}from"./axelar.f734343d.js";import{B as Ie,M as L,U as $,E as F,C as Re,i as b,a as _,b as A,P as v,G as a,p as Ne,c as Pe,t as ke,d as se,e as oe,g as ae,f as J,h as k,j as q,k as xe,s as Y,r as Oe,l as Be,m as j,n as Ue,o as ie,q as Me,u as je,v as R,w as H,x as W,y as He,N as G,z as ce,A as We,D as Ee,F as ve,H as Ve,I as de,J as Le,K as P,L as $e,O as E,Q as we,R as he,S as Fe,T as Ge,V as Ke,W as De,X as Je,Y as I,Z as B,_ as ue,$ as qe,a0 as Ye,a1 as ze,a2 as Xe,a3 as Qe,a4 as Ze,a5 as et,a6 as tt,a7 as rt}from"./injective.5ec62b21.js";const It="0x4F4495243837681061C4743b74B3eEdf548D56A5",Rt="0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",nt=1284,le=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"}];class Nt{constructor({environment:o,gatewayAddress:e}){y(this,"axelarJsSDK");y(this,"axelarGatewayAddress");this.axelarJsSDK=new ee.AxelarAssetTransfer({environment:o,auth:"metamask"}),this.axelarGatewayAddress=e}async getDepositAddress({sourceChain:o,destinationChain:e,address:r,asset:n}){return this.axelarJsSDK.getDepositAddress(o,e,r,n)}async sendTokens(o){const{axelarGateway:e,signer:r}=await this.getAxelarGateway();return await(await e.createSendTokenTx(o)).send(r)}async approveAllowance(o){const{axelarGateway:e,signer:r}=await this.getAxelarGateway();return(await e.createApproveTx({tokenAddress:o})).send(r)}async transferTokens({receiver:o,amount:e,contractAddress:r}){await this.validateNetwork();const{signer:n}=await this.getAxelarGateway(),s=new te(r,le,n),i=await n.getFeeData();return(await s.transfer(o,e,{maxFeePerGas:i.gasPrice||i.maxFeePerGas,maxPriorityFeePerGas:i.maxPriorityFeePerGas||"0x77359400"})).wait()}async getBalance(o,e){const{provider:r}=await this.getAxelarGateway(),s=await new te(e,le,r).balanceOf(o);return new Ie(s.toNumber()).toString()}async getTokenAddress(o){const{axelarGateway:e}=await this.getAxelarGateway();return e.getTokenAddress(o)}async getAxelarGateway(){const{axelarGatewayAddress:o}=this,e=window.ethereum;if(!e)throw new L(new Error("Please install Metamask extension"),{code:$,type:F.WalletNotInstalledError});await this.validateNetwork();const r=new re(e,"any"),n=r.getSigner();return{axelarGateway:new ee.AxelarGateway(o,r),provider:r,signer:n}}async validateNetwork(){const o=window.ethereum;if(!o)throw new L(new Error("Please install Metamask extension"),{code:$,type:F.WalletNotInstalledError});if((await new re(o,"any").getNetwork()).chainId!==nt)throw new L(new Error("Please switch to the Moonbeam network in Metamask"),{code:$,type:F.WalletError})}}var w;(function(t){t.Ethereum="ethereum",t.Arbitrum="arbitrum",t.Solana="solana",t.Polygon="polygon",t.Sui="sui",t.Klaytn="klaytn",t.Aptos="aptos"})(w||(w={}));const N=t=>b(t)||_(t)?A.TESTNET.injective:A.MAINNET.injective,st=t=>b(t)||_(t)?A.TESTNET.solana:A.MAINNET.solana,ot=t=>b(t)||_(t)?A.TESTNET.ethereum:A.MAINNET.ethereum,at=t=>b(t)||_(t)?A.TESTNET.arbitrum:A.MAINNET.arbitrum,it=t=>b(t)||_(t)?A.TESTNET.polygon:A.MAINNET.polygon,ct=t=>b(t)||_(t)?A.TESTNET.sui:A.MAINNET.sui,dt=t=>b(t)||_(t)?A.TESTNET.klaytn:A.MAINNET.klaytn,wt=t=>b(t)||_(t)?A.TESTNET.aptos:A.MAINNET.aptos,g=Re,K=t=>b(t)||_(t)?{}:{[w.Ethereum]:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",[w.Polygon]:"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"},M=async(t,o)=>{for(let n=0;n<=3e4/5e3;n+=1){try{const s=await o.getTransaction(t);if(s)return s}catch{}await new Promise(s=>setTimeout(s,5e3))}return null},ht=t=>{const o=ot(t),e=N(t);if(!e)throw new a(new Error(`Contracts for ${t} on Injective not found`));if(!o)throw new a(new Error(`Contracts for ${t} on Solana not found`));if(!e.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Injective not found`));if(!o.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Ethereum not found`));return{injectiveContractAddresses:e,associatedChainContractAddresses:o}},fe=t=>{const o=st(t),e=N(t);if(!e)throw new a(new Error(`Contracts for ${t} on Injective not found`));if(!o)throw new a(new Error(`Contracts for ${t} on Solana not found`));if(!e.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Injective not found`));if(!o.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Solana not found`));return{injectiveContractAddresses:e,associatedChainContractAddresses:o}},ut=t=>{const o=at(t),e=N(t);if(!e)throw new a(new Error(`Contracts for ${t} on Injective not found`));if(!o)throw new a(new Error(`Contracts for ${t} on Arbitrum not found`));if(!e.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Injective not found`));if(!o.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Arbitrum not found`));return{injectiveContractAddresses:e,associatedChainContractAddresses:o}},lt=t=>{const o=it(t),e=N(t);if(!e)throw new a(new Error(`Contracts for ${t} on Injective not found`));if(!o)throw new a(new Error(`Contracts for ${t} on Polygon not found`));if(!e.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Injective not found`));if(!o.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Polygon not found`));return{injectiveContractAddresses:e,associatedChainContractAddresses:o}},ft=t=>{const o=ct(t),e=N(t);if(!e)throw new a(new Error(`Contracts for ${t} on Injective not found`));if(!o)throw new a(new Error(`Contracts for ${t} on Sui not found`));if(!e.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Injective not found`));if(!o.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Sui not found`));return{injectiveContractAddresses:e,associatedChainContractAddresses:o}},gt=t=>{const o=dt(t),e=N(t);if(!e)throw new a(new Error(`Contracts for ${t} on Injective not found`));if(!o)throw new a(new Error(`Contracts for ${t} on Klaytn not found`));if(!e.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Injective not found`));if(!o.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Klaytn not found`));return{injectiveContractAddresses:e,associatedChainContractAddresses:o}},pt=t=>{const o=wt(t),e=N(t);if(!e)throw new a(new Error(`Contracts for ${t} on Injective not found`));if(!o)throw new a(new Error(`Contracts for ${t} on Aptos not found`));if(!e.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Injective not found`));if(!o.token_bridge)throw new a(new Error(`Token Bridge Address for ${t} on Aptos not found`));return{injectiveContractAddresses:e,associatedChainContractAddresses:o}},l=(t,o=w.Solana)=>{switch(o){case w.Solana:return fe(t);case w.Ethereum:return ht(t);case w.Arbitrum:return ut(t);case w.Sui:return ft(t);case w.Polygon:return lt(t);case w.Klaytn:return gt(t);case w.Aptos:return pt(t);default:return fe(t)}},mt=(t=w.Solana)=>{switch(t){case w.Solana:return g.solana;case w.Ethereum:return g.ethereum;case w.Arbitrum:return g.arbitrum;case w.Sui:return g.sui;case w.Polygon:return g.polygon;case w.Klaytn:return g.klaytn;case w.Aptos:return g.aptos;default:return g.solana}},At=(t,o=w.Solana)=>{switch(o){case w.Solana:return new v(t).toString();case w.Ethereum:return t;case w.Arbitrum:return t;case w.Polygon:return t;case w.Klaytn:return t;case w.Aptos:throw Error("Aptos not yet implemented");case w.Sui:throw Error("Sui not yet implemented");default:return new v(t).toString()}},yt=t=>{switch(t){case 1:return"Ethereum";case 42161:return"Arbitrum";case 137:return"Polygon";default:return"Ethereum"}};class V{constructor({network:o,wormholeRpcUrl:e}){y(this,"network");y(this,"wormholeRpcUrl");this.network=o,this.wormholeRpcUrl=e}parseSignedVAA(o){return Ne(f.Buffer.from(o,"base64"))}getTransferDetailsFromSignedVAA(o){const e=this.parseSignedVAA(o),r=Pe(e.payload),n=ke(r.originAddress,r.originChain);return{...r,originAddress:n,amount:r.amount.toString()}}}const ge=5e3;class D extends V{constructor({network:e,wormholeRpcUrl:r,wormholeSource:n,provider:s}){super({network:e,wormholeRpcUrl:r});y(this,"wormholeSource",w.Ethereum);y(this,"provider");y(this,"singletonProvider");this.wormholeSource=n,this.provider=s}get wormholeChainId(){const{wormholeSource:e}=this;switch(e){case w.Ethereum:return g.ethereum;case w.Arbitrum:return g.arbitrum;case w.Polygon:return g.polygon;default:return g.ethereum}}get evmChainId(){const{wormholeSource:e}=this;switch(e){case w.Ethereum:return 1;case w.Arbitrum:return 42161;case w.Polygon:return 137;default:return 1}}async getAddress(){return(await this.getProviderAndChainIdCheck()).getAddress()}async getBalance(e,r){const n=await this.getProviderAndChainIdCheck();try{return r?pe(r)?(await n.provider.getBalance(e)).toString():(await se.connect(r,n).balanceOf(e)).toString():(await n.provider.getBalance(e)).toString()}catch{return"0"}}async transfer(e){return e.tokenAddress&&!pe(e.tokenAddress)?this.transferToken(e):this.transferNative(e)}async getTxResponse(e){const r=await this.getProviderAndChainIdCheck();try{const n=await r.provider.getTransactionReceipt(e);if(!n)throw new a(new Error("An error occurred while fetching the transaction info"));return{...n,txHash:n.transactionHash}}catch{throw new a(new Error("An error occurred while fetching the transaction info"))}}async getSignedVAA(e){const{network:r,wormholeSource:n,wormholeRpcUrl:s,wormholeChainId:i}=this;if(!s)throw new a(new Error("Please provide wormholeRpcUrl"));const{associatedChainContractAddresses:c}=l(r,n),d=oe(e,c.core),h=await ae(c.token_bridge);try{const{vaaBytes:u}=await J([s],i,h,d,{transport:k()},ge);return f.Buffer.from(u).toString("base64")}catch{throw new a(new Error("Could not get the signed VAA. Is the transaction confirmed?"))}}async getSignedVAANoRetry(e){const{network:r,wormholeSource:n,wormholeRpcUrl:s,wormholeChainId:i}=this;if(!s)throw new a(new Error("Please provide wormholeRpcUrl"));const{associatedChainContractAddresses:c}=l(r,n),d=oe(e,c.core),h=await ae(c.token_bridge);try{const{vaaBytes:u}=await q(s,i,h,d,{transport:k()});return f.Buffer.from(u).toString("base64")}catch{throw new a(new Error("Could not get the signed VAA. Is the transaction confirmed?"))}}async getIsTransferCompleted(e){const{network:r,wormholeSource:n}=this,s=await this.getProviderAndChainIdCheck(),{associatedChainContractAddresses:i}=l(r,n);return xe(i.token_bridge,s,f.Buffer.from(e,"base64"))}async getIsTransferCompletedRetry(e){for(let n=0;n<2;n+=1){if(await this.getIsTransferCompleted(e))return!0;await Y(ge)}return!1}async redeem({signedVAA:e}){const{network:r,wormholeSource:n,wormholeChainId:s}=this,i=await this.getProviderAndChainIdCheck(),{associatedChainContractAddresses:c}=l(r,n);return Oe(c.token_bridge,i,f.Buffer.from(e,"base64"),{...s===ce&&{gasLimit:"300000",type:0}})}async redeemNative({signedVAA:e}){const{network:r,wormholeSource:n,wormholeChainId:s}=this,i=await this.getProviderAndChainIdCheck(),{associatedChainContractAddresses:c}=l(r,n);return Be(c.token_bridge,i,f.Buffer.from(e,"base64"),{...s===ce&&{gasLimit:"300000",type:0}})}async getForeignAsset(e,r){const{network:n,wormholeSource:s}=this,i=await this.getProviderAndChainIdCheck(),{associatedChainContractAddresses:c}=l(n,s),d=j(r,e);return await Ue(c.token_bridge,i,e,d)||""}async getTokenAllowance({address:e,tokenAddress:r}){const{network:n,wormholeSource:s}=this,{associatedChainContractAddresses:i}=l(n,s),c=await this.getProviderAndChainIdCheck();return(await se.connect(r,c).allowance(e,i.token_bridge)).toString()}async transferToken(e){const{network:r,wormholeRpcUrl:n,wormholeSource:s}=this,{amount:i,recipient:c,tokenAddress:d}=e;if(!n)throw new a(new Error("Please provide wormholeRpcUrl"));if(!d)throw new a(new Error("Please provide tokenAddress"));if(!c)throw new a(new Error("Please provide recipient"));const h=await this.getProviderAndChainIdCheck(),{associatedChainContractAddresses:u}=l(r,s),m=await this.getTokenAllowance({address:await h.getAddress(),tokenAddress:d});new ie(m).lt(i)&&await Me(u.token_bridge,d,h,new ie(2).pow(256).minus(1).toFixed());const p=await je(u.token_bridge,h,d,i,g.injective,R(H(U.zeroPad(W(c),32))));if(!p)throw new a(new Error("An error occurred while fetching the transaction info"));return{txHash:p.transactionHash,...p}}async transferNative(e){const{network:r,wormholeRpcUrl:n,wormholeSource:s}=this,{amount:i,recipient:c}=e;if(!n)throw new a(new Error("Please provide wormholeRpcUrl"));if(!c)throw new a(new Error("Please provide recipient"));const d=await this.getProviderAndChainIdCheck(),{associatedChainContractAddresses:h}=l(r,s),u=await He(h.token_bridge,d,i,g.injective,R(H(U.zeroPad(W(c),32))));if(!u)throw new a(new Error("An error occurred while fetching the transaction info"));return{txHash:u.transactionHash,...u}}async getProvider(){const{provider:e}=this;return this.singletonProvider?this.singletonProvider:(this.singletonProvider=e instanceof Function?await e():e,this.singletonProvider)}async getProviderAndChainIdCheck(){const r=(await this.getProvider()).getSigner();if(await r.getChainId()!==this.evmChainId){const s=this.evmChainId.toString(16);try{const i=window.ethereum;return await Promise.race([i.request({method:"wallet_switchEthereumChain",params:[{chainId:`0x${s}`}]}),new Promise(c=>i.on("change",({chain:d})=>{(d==null?void 0:d.id)===s&&c()}))]),r}catch{throw new a(new Error(`Please switch to the ${yt(this.evmChainId)} Network on Metamask`))}}return r}}const pe=t=>{const o={...K(G.Mainnet),...K(G.Testnet),...K(G.Devnet)},e=Object.values(o);return t&&e.includes(t)};w.Ethereum+"",w.Polygon+"",w.Arbitrum+"";const z=t=>{const o=t.data||"";try{return JSON.parse(We(o))}catch{return typeof o=="string"?o:JSON.parse(f.Buffer.from(o).toString())}};function me(t){let o="";return(t.logs||JSON.parse(t.rawLog)).map(r=>{r.events.map(n=>{n.attributes.map(s=>{s.key==="message.sequence"&&(o=s.value)})})}),o.toString()}async function Ae(t){return f.Buffer.from(U.zeroPad(ne.fromWords(ne.decode(t).words),32)).toString("hex")}async function Ce(t,o,e,r){try{const n=await o.fetchSmartContractState(t,f.Buffer.from(JSON.stringify({wrapped_registry:{chain:Ee(e),address:ve(r)}})).toString("base64"));return z(n).address}catch{return null}}async function Et(t,o){const e=Le;if(Ve(e,t))return{isWrapped:!1,chainId:e,assetAddress:R(de(e,t))};try{const r=await o.fetchSmartContractState(t,f.Buffer.from(JSON.stringify({wrapped_asset_info:{}})).toString("base64")),n=z(r);return{isWrapped:!0,chainId:n.asset_chain,assetAddress:new Uint8Array(f.Buffer.from(n.asset_address,"base64"))}}catch{}return{isWrapped:!1,chainId:e,assetAddress:R(de(e,t))}}async function vt(t,o,e){const r=await e.fetchSmartContractState(t,f.Buffer.from(JSON.stringify({is_vaa_redeemed:{vaa:ve(o)}})).toString("base64"));return z(r).is_redeemed}async function Ct(t,o,e,r,n,s,i="0",c=null){const d=Ee(n),h=Math.round(Math.random()*1e5),u=$e(e),m=c?"initiate_transfer_with_payload":"initiate_transfer",p=C=>c?{asset:{amount:r,info:C},recipient_chain:d,recipient:f.Buffer.from(s).toString("base64"),fee:i,nonce:h,payload:c}:{asset:{amount:r,info:C},recipient_chain:d,recipient:f.Buffer.from(s).toString("base64"),fee:i,nonce:h};return u?[P.fromJSON({contractAddress:o,sender:t,exec:{msg:{},action:"deposit_tokens"},funds:{denom:e,amount:r}}),P.fromJSON({contractAddress:o,sender:t,exec:{msg:p({native_token:{denom:e}}),action:m}})]:[P.fromJSON({contractAddress:e,sender:t,exec:{msg:{spender:o,amount:r,expires:{never:{}}},action:"increase_allowance"}}),P.fromJSON({contractAddress:o,sender:t,exec:{msg:p({token:{contract_addr:e}}),action:m}})]}const Tt=5e3;class Pt extends V{constructor({network:e,provider:r,solanaHostUrl:n,wormholeRpcUrl:s}){super({network:e,wormholeRpcUrl:s});y(this,"solanaHostUrl");y(this,"provider");this.solanaHostUrl=n,this.provider=r}async getAddress(){var e;try{return((e=(await this.getProvider()).publicKey)==null?void 0:e.toString())||""}catch{return""}}async getBalance(e,r){if(r)throw new a(new Error("SPL tokens not supported yet"));try{const{solanaHostUrl:n}=this;return(await new E(n||"").getBalance(new v(e))).toString()}catch{return"0"}}async transfer(e){return e.tokenAddress?this.transferToken(e):this.transferNative(e)}async getTxResponse(e){var n,s;const{solanaHostUrl:r}=this;if(!r)throw new a(new Error("Please provide solanaHostUrl"));try{const c=await new E(r,"confirmed").getTransaction(e);if(!c)throw new a(new Error("An error occurred while fetching the transaction info"));if((n=c.meta)!=null&&n.err)throw new a(new Error((s=c.meta)==null?void 0:s.err.toString()));return c}catch{throw new a(new Error("An error occurred while fetching the transaction info"))}}async getSignedVAA(e){const{network:r,wormholeRpcUrl:n}=this;if(!n)throw new a(new Error("Please provide wormholeRpcUrl"));const{associatedChainContractAddresses:s}=l(r),i=we(e),c=await he(s.token_bridge);try{const{vaaBytes:d}=await J([n],g.solana,c,i,{transport:k()},Tt);return f.Buffer.from(d).toString("base64")}catch{throw new a(new Error("Could not get the signed VAA. Is the transaction confirmed?"))}}async getSignedVAANoRetry(e){const{network:r,wormholeRpcUrl:n}=this;if(!n)throw new a(new Error("Please provide wormholeRpcUrl"));const{associatedChainContractAddresses:s}=l(r),i=we(e),c=await he(s.token_bridge);try{const{vaaBytes:d}=await q(n,g.solana,c,i,{transport:k()});return f.Buffer.from(d).toString("base64")}catch{throw new a(new Error("Could not get the signed VAA. Is the transaction confirmed?"))}}async getIsTransferCompleted(e){const{solanaHostUrl:r,network:n}=this;if(!r)throw new a(new Error("Please provide solanaHostUrl"));const s=new E(r,"confirmed"),{associatedChainContractAddresses:i}=l(n,w.Solana);return Fe(i.token_bridge,f.Buffer.from(e,"base64"),s)}async getIsTransferCompletedRetry(e){for(let s=0;s<2;s+=1){if(await this.getIsTransferCompleted(e))return!0;await Y(2e3)}return!1}async redeem({signedVAA:e,recipient:r}){const{network:n,solanaHostUrl:s}=this;if(!s)throw new a(new Error("Please provide solanaHostUrl"));const{associatedChainContractAddresses:i}=l(n),c=new E(s,"confirmed");return Ge(c,i.core,i.token_bridge,new v(r),f.Buffer.from(e,"base64"))}async redeemNative({signedVAA:e,recipient:r}){const{network:n,solanaHostUrl:s}=this;if(!s)throw new a(new Error("Please provide solanaHostUrl"));const{associatedChainContractAddresses:i}=l(n),c=new E(s,"confirmed");return Ke(c,i.core,i.token_bridge,new v(r),f.Buffer.from(e,"base64"))}async getForeignAsset(e,r){const{network:n,solanaHostUrl:s}=this,{associatedChainContractAddresses:i}=l(n),c=new E(s,"confirmed"),d=j(r,e);return await De(c,i.token_bridge,e,d)||""}async postVAAWithRetry({solanaPubKey:e,signedVAA:r}){const{network:n,solanaHostUrl:s}=this,i=5;if(!s)throw new a(new Error("Please provide solanaHostUrl"));const c=await this.getProvider(),{associatedChainContractAddresses:d}=l(n),h=new E(s,"confirmed");return Je(h,c.signTransaction.bind(c),d.core,new v(e),f.Buffer.from(r,"base64"),i)}async createAssociatedTokenAddress(e){const{solanaHostUrl:r,network:n}=this,s=I(n);if(!r)throw new a(new Error("Please provide solanaHostUrl"));const i=await this.getProvider(),c=new B(s.grpc),d=new E(r,"confirmed"),h=new v(i.publicKey||""),u=await Et(e,c),m=new v(u.assetAddress),p=await ue(m,h);if(!await d.getAccountInfo(p)){const T=new qe().add(await Ye(h,p,h,m)),{blockhash:S}=await d.getLatestBlockhash();T.recentBlockhash=S,T.feePayer=h;const x=await i.signTransaction(T),O=await d.sendRawTransaction(x.serialize());if(!await M(O,d))throw new a(new Error("An error occurred while fetching the transaction info"))}return p.toString()}async signSendAndConfirmTransaction(e){const{solanaHostUrl:r}=this;if(!r)throw new a(new Error("Please provide solanaHostUrl"));const n=await this.getProvider(),s=new E(r,"confirmed"),i=await n.signTransaction(e),c=await s.sendRawTransaction(i.serialize()),d=await M(c,s);if(!d)throw new a(new Error("An error occurred while fetching the transaction info"));return{txHash:c,...d}}async transferToken(e){const{network:r,solanaHostUrl:n,wormholeRpcUrl:s}=this,{amount:i,recipient:c,signer:d}=e,h=I(r),u=await this.getProvider(),m=u.publicKey||new v(d||"");if(!n)throw new a(new Error("Please provide solanaHostUrl"));if(!s)throw new a(new Error("Please provide wormholeRpcUrl"));if(!e.tokenAddress)throw new a(new Error("Please provide tokenAddress"));if(m.toBuffer().length===0)throw new a(new Error("Please provide signerPubKey"));const{injectiveContractAddresses:p,associatedChainContractAddresses:C}=l(r),T=new B(h.grpc),S=ze(e.tokenAddress,g.solana);if(!await Ce(p.token_bridge,T,g.solana,R(S)))throw new a(new Error("Foreign Injective asset not found"));const O=new E(n,"confirmed"),X=(await ue(new v(e.tokenAddress),m)).toString(),Te=await Xe(O,C.core,C.token_bridge,m,X,e.tokenAddress,BigInt(i),R(H(U.zeroPad(W(c),32))),g.injective),Se=await u.signTransaction(Te),Q=await O.sendRawTransaction(Se.serialize()),Z=await M(Q,O);if(!Z)throw new a(new Error("An error occurred while fetching the transaction info"));return{txHash:Q,...Z}}async transferNative(e){const{network:r,solanaHostUrl:n,wormholeRpcUrl:s}=this,{amount:i,recipient:c,signer:d}=e,h=await this.getProvider(),u=h.publicKey||new v(d||"");if(!n)throw new a(new Error("Please provide solanaHostUrl"));if(u.toBuffer().length===0)throw new a(new Error("Please provide signerPubKey"));if(!s)throw new a(new Error("Please provide wormholeRpcUrl"));const{associatedChainContractAddresses:m}=l(r),p=new E(n,"confirmed"),C=await Qe(p,m.core,m.token_bridge,u,BigInt(i),R(H(U.zeroPad(W(c),32))),g.injective),T=await h.signTransaction(C),S=await p.sendRawTransaction(T.serialize()),x=await M(S,p);if(!x)throw new a(new Error("An error occurred while fetching the transaction info"));return{txHash:S,...x}}async getProvider(){try{return await new Promise((e,r)=>{this.provider.connect().then(()=>{e(this.provider)}).catch(r)})}catch(e){throw new a(new Error(e))}}}const ye=5e3;class kt extends V{constructor({network:e,wormholeRpcUrl:r,provider:n}){super({network:e,wormholeRpcUrl:r});y(this,"provider");this.provider=n}async getAddress(){const{provider:e}=this,[r]=await e.walletStrategy.getAddresses();return r.startsWith("0x")?Ze(r):r}async getBalance(e,r){const{network:n}=this,s=I(n),i=new et(s.grpc),{balances:c}=await i.fetchBalances(e),d=c.find(h=>r?h.denom.includes(r):h.denom===tt);return(d==null?void 0:d.amount)||"0"}async transfer(e){const{network:r,wormholeRpcUrl:n,provider:s}=this,{amount:i,signer:c,additionalMsgs:d=[],recipient:h,destination:u=w.Solana}=e,m=mt(u),p=At(h,u);if(!e.tokenAddress)throw new a(new Error("Please provide tokenAddress"));if(!n)throw new a(new Error("Please provide wormholeRpcUrl"));if(!p)throw new a(new Error("Please provide the associatedChain provider"));if(!s)throw new a(new Error("Please provide Injective wallet provider"));if(!c)throw new a(new Error("Please provide signer"));const{injectiveContractAddresses:C}=l(r,u),T=await Ct(c,C.token_bridge,e.tokenAddress,i,m,j(p,m)),S=await s.msgBroadcaster.broadcastOld({msgs:[...d,...T],injectiveAddress:c});if(!S)throw new a(new Error("Transaction can not be found!"));return S}async getTxResponse(e){const{network:r}=this,n=I(r),s=new rt(n.indexer);try{const i=await s.fetchTransaction(e);if(!i)throw new a(new Error("An error occurred while fetching the transaction info"));return{...i,txHash:i.hash,height:i.blockNumber,rawLog:JSON.stringify(i.logs||[]),timestamp:i.blockTimestamp}}catch{throw new a(new Error("An error occurred while fetching the transaction info"))}}async getSignedVAA(e){const{network:r,wormholeRpcUrl:n}=this;if(!n)throw new a(new Error("Please provide wormholeRpcUrl"));const{injectiveContractAddresses:s}=l(r),i=me(e),c=await Ae(s.token_bridge);try{const{vaaBytes:d}=await J([n],g.injective,c,i,{transport:k()},ye);return f.Buffer.from(d).toString("base64")}catch{throw new a(new Error("Could not get the signed VAA. Is the transaction confirmed?"))}}async getSignedVAANoRetry(e){const{network:r,wormholeRpcUrl:n}=this;if(!n)throw new a(new Error("Please provide wormholeRpcUrl"));const{injectiveContractAddresses:s}=l(r),i=me(e),c=await Ae(s.token_bridge);try{const{vaaBytes:d}=await q(n,g.injective,c,i,{transport:k()});return f.Buffer.from(d).toString("base64")}catch{throw new a(new Error("Could not get the signed VAA. Is the transaction confirmed?"))}}async getIsTransferCompleted(e){const{network:r}=this,n=I(r),{injectiveContractAddresses:s}=l(r);return vt(s.token_bridge,f.Buffer.from(e,"base64"),new B(n.grpc))}async getIsTransferCompletedRetry(e){for(let n=0;n<2;n+=1){if(await this.getIsTransferCompleted(e))return!0;await Y(ye)}return!1}async getForeignAsset(e,r){const{network:n}=this,s=I(n),{injectiveContractAddresses:i}=l(n),c=new B(s.grpc),d=j(r,e);return await Ce(i.token_bridge,c,e,d)||""}async redeem({signedVAA:e,recipient:r}){const{network:n}=this,{injectiveContractAddresses:s}=l(n);return P.fromJSON({contractAddress:s.token_bridge,sender:r,msg:{submit_vaa:{data:e}}})}async redeemNative(e){return this.redeem(e)}async createWrapped(e,r){const{network:n}=this,{injectiveContractAddresses:s}=l(n);return P.fromJSON({contractAddress:s.token_bridge,sender:e,msg:{submit_vaa:{data:r}}})}async getBridgedAssetBalance(e,r){const{network:n}=this,s=I(n),c=await new B(s.grpc).fetchSmartContractState(r,f.Buffer.from(JSON.stringify({balance:{address:e}})).toString("base64"));if(c.data){const d=JSON.parse(f.Buffer.from(c.data).toString());return{address:r,balance:d.balance}}throw new a(new Error("Could not get the balance from the token bridge contract"))}}class xt extends V{constructor(e){super(e);y(this,"wormholeSource",w.Ethereum);y(this,"strategies");this.wormholeSource=e.wormholeSource||w.Ethereum,this.strategies={[w.Ethereum]:new D({...e,wormholeSource:w.Ethereum}),[w.Polygon]:new D({...e,wormholeSource:w.Polygon}),[w.Arbitrum]:new D({...e,wormholeSource:w.Arbitrum})}}setWormholeSource(e){this.wormholeSource=e}get strategy(){const{wormholeSource:e,strategies:r}=this;if(!e||!r[e])throw new a(new Error(`The strategy for ${e} not found.`));return r[e]}async getAddress(){return this.strategy.getAddress()}async getBalance(e,r){return this.strategy.getBalance(e,r)}async transfer(e){return this.strategy.transfer(e)}async getTxResponse(e){return this.strategy.getTxResponse(e)}async getSignedVAA(e){return this.strategy.getSignedVAA(e)}async getSignedVAANoRetry(e){return this.strategy.getSignedVAANoRetry(e)}async getIsTransferCompleted(e){return this.strategy.getIsTransferCompleted(e)}async getIsTransferCompletedRetry(e){return this.strategy.getIsTransferCompletedRetry(e)}async redeem(e){return this.strategy.redeem(e)}async redeemNative(e){return this.strategy.redeemNative(e)}parseSignedVAA(e){return this.strategy.parseSignedVAA(e)}async getForeignAsset(e,r){return await this.strategy.getForeignAsset(e,r)}}export{Nt as A,xt as E,kt as I,It as M,Pt as S,w as W,Rt as a,pe as i};
