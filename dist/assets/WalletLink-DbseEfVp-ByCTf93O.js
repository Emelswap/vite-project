import{t as e}from"./jsx-runtime-QQLjLlGf.js";import{rn as t}from"./ccip-B0s9EJQ8.js";import{Y as n,lt as r}from"./useActiveWallet-CLfuK4Fv-Dh_QcYZ1.js";import{t as i}from"./getFormattedUsdFromLamports-B6EqSEho-D-CldCqP.js";import{n as a}from"./transaction-CnfuREWo-VXhRTgiD.js";import{i as o,n as s,o as c,t as l}from"./ethers-CljtMjlx-CjuU0Fah.js";var u=e(),d=({weiQuantities:e,tokenPrice:t,tokenSymbol:n})=>{let r=o(e),i=t?c(r,t):void 0,a=l(r,n);return(0,u.jsx)(m,{children:i||a})},f=({weiQuantities:e,tokenPrice:t,tokenSymbol:n})=>{let r=o(e),i=t?c(r,t):void 0,a=l(r,n);return(0,u.jsx)(m,{children:i?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(h,{children:`USD`}),i===`<$0.01`?(0,u.jsxs)(_,{children:[(0,u.jsx)(g,{children:`<`}),`$0.01`]}):i]}):a})},p=({quantities:e,tokenPrice:n,tokenSymbol:r=`SOL`,tokenDecimals:o=9})=>{let s=e.reduce(((e,t)=>e+t),0n),c=n&&r===`SOL`&&o===9?i(s,n):void 0,l=r===`SOL`&&o===9?a(s):`${t(s,o)} ${r}`;return(0,u.jsx)(m,{children:c?(0,u.jsx)(u.Fragment,{children:c===`<$0.01`?(0,u.jsxs)(_,{children:[(0,u.jsx)(g,{children:`<`}),`$0.01`]}):c}):l})},m=n.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,h=n.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,g=n.span`
  font-size: 10px;
`,_=n.span`
  display: flex;
  align-items: center;
`;function v(e,t){return`https://explorer.solana.com/account/${e}?chain=${t}`}var y=e=>(0,u.jsx)(b,{href:e.chainType===`ethereum`?s(e.chainId,e.walletAddress):v(e.walletAddress,e.chainId),target:`_blank`,children:r(e.walletAddress)}),b=n.a`
  &:hover {
    text-decoration: underline;
  }
`;export{y as i,f as n,d as r,p as t};