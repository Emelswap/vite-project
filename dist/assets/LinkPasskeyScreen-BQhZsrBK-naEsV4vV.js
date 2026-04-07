import{o as e}from"./chunk-CFjPhJqf.js";import{n as t,t as n}from"./jsx-runtime-QQLjLlGf.js";import{J as r,Q as i,Qt as a,Y as o,fn as s,pn as c,x as l,xn as u}from"./useActiveWallet-CLfuK4Fv-Dh_QcYZ1.js";import{t as d}from"./createLucideIcon-DWHIon1T.js";import{t as f}from"./circle-check-big-CSiOrNtc.js";import{t as p}from"./fingerprint-pattern-hHFSDymw.js";import{t as m}from"./ScreenLayout-CHf1S-9L-DQ-dL_56.js";import{n as h,t as g}from"./TodoList-CgrU7uwu-B1PhocmB.js";var _=d(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),v=n(),y=e(t(),1);i();var b=({passkeys:e,isLoading:t,errorReason:n,success:r,expanded:i,onLinkPasskey:a,onUnlinkPasskey:o,onExpand:s,onBack:c,onClose:l})=>(0,v.jsx)(m,r?{title:`Passkeys updated`,icon:f,iconVariant:`success`,primaryCta:{label:`Done`,onClick:l},onClose:l,watermark:!0}:i?{icon:p,title:`Your passkeys`,onBack:c,onClose:l,watermark:!0,children:(0,v.jsx)(S,{passkeys:e,expanded:i,onUnlink:o,onExpand:s})}:{icon:p,title:`Set up passkey verification`,subtitle:`Verify with passkey`,primaryCta:{label:`Add new passkey`,onClick:a,loading:t},onClose:l,watermark:!0,helpText:n||void 0,children:e.length===0?(0,v.jsx)(C,{}):(0,v.jsx)(x,{children:(0,v.jsx)(S,{passkeys:e,expanded:i,onUnlink:o,onExpand:s})})}),x=o.div`
  margin-bottom: 12px;
`,S=({passkeys:e,expanded:t,onUnlink:n,onExpand:r})=>{let[i,a]=(0,y.useState)([]),o=t?e.length:2;return(0,v.jsxs)(`div`,{children:[(0,v.jsx)(k,{children:`Your passkeys`}),(0,v.jsxs)(O,{children:[e.slice(0,o).map((e=>{return(0,v.jsxs)(M,{children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(A,{children:(t=e,t.authenticatorName?t.createdWithBrowser?`${t.authenticatorName} on ${t.createdWithBrowser}`:t.authenticatorName:t.createdWithBrowser?t.createdWithOs?`${t.createdWithBrowser} on ${t.createdWithOs}`:`${t.createdWithBrowser}`:`Unknown device`)}),(0,v.jsxs)(j,{children:[`Last used:`,` `,(e.latestVerifiedAt??e.firstVerifiedAt)?.toLocaleString()??`N/A`]})]}),(0,v.jsx)(P,{disabled:i.includes(e.credentialId),onClick:()=>(async e=>{a((t=>t.concat([e]))),await n(e),a((t=>t.filter((t=>t!==e))))})(e.credentialId),children:i.includes(e.credentialId)?(0,v.jsx)(l,{}):(0,v.jsx)(_,{size:16})})]},e.credentialId);var t})),e.length>2&&!t&&(0,v.jsx)(D,{onClick:r,children:`View all`})]})]})},C=()=>(0,v.jsxs)(g,{style:{color:`var(--privy-color-foreground)`},children:[(0,v.jsx)(h,{children:`Verify with Touch ID, Face ID, PIN, or hardware key`}),(0,v.jsx)(h,{children:`Takes seconds to set up and use`}),(0,v.jsx)(h,{children:`Use your passkey to verify transactions and login to your account`})]}),w={component:()=>{let{user:e,unlinkPasskey:t}=a(),{linkWithPasskey:n,closePrivyModal:r}=c(),i=e?.linkedAccounts.filter((e=>e.type===`passkey`)),[o,l]=(0,y.useState)(!1),[d,f]=(0,y.useState)(``),[p,m]=(0,y.useState)(!1),[h,g]=(0,y.useState)(!1);return(0,y.useEffect)((()=>{i.length===0&&g(!1)}),[i.length]),(0,v.jsx)(b,{passkeys:i,isLoading:o,errorReason:d,success:p,expanded:h,onLinkPasskey:()=>{l(!0),n().then((()=>m(!0))).catch((e=>{if(e instanceof u){if(e.privyErrorCode===s.CANNOT_LINK_MORE_OF_TYPE)return void f(`Cannot link more passkeys to account.`);if(e.privyErrorCode===s.PASSKEY_NOT_ALLOWED)return void f(`Passkey request timed out or rejected by user.`)}f(`Unknown error occurred.`)})).finally((()=>{l(!1)}))},onUnlinkPasskey:async e=>(l(!0),await t(e).then((()=>m(!0))).catch((e=>{e instanceof u&&e.privyErrorCode===s.MISSING_MFA_CREDENTIALS?f(`Cannot unlink a passkey enrolled in MFA`):f(`Unknown error occurred.`)})).finally((()=>{l(!1)}))),onExpand:()=>g(!0),onBack:()=>g(!1),onClose:()=>r()})}},T=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 90px;
  border-radius: 50%;
  svg + svg {
    margin-left: 12px;
  }
  > svg {
    z-index: 2;
    color: var(--privy-color-accent) !important;
    stroke: var(--privy-color-accent) !important;
    fill: var(--privy-color-accent) !important;
  }
`,E=r`
  && {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1rem;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    justify-content: center;

    padding: 6px 8px;
    background-color: var(--privy-color-background);
    transition: background-color 200ms ease;
    color: var(--privy-color-accent) !important;

    :focus {
      outline: none;
      box-shadow: none;
    }
  }
`,D=o.button`
  ${E}
`,O=o.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.8rem;
  padding: 0.5rem 0rem 0rem;
  flex-grow: 1;
  width: 100%;
`,k=o.div`
  line-height: 20px;
  height: 20px;
  font-size: 1em;
  font-weight: 450;
  display: flex;
  justify-content: flex-beginning;
  width: 100%;
`,A=o.div`
  font-size: 1em;
  line-height: 1.3em;
  font-weight: 500;
  color: var(--privy-color-foreground-2);
  padding: 0.2em 0;
`,j=o.div`
  font-size: 0.875rem;
  line-height: 1rem;
  color: #64668b;
  padding: 0.2em 0;
`,M=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1rem;
  text-align: left;
  border-radius: 8px;
  border: 1px solid #e2e3f0 !important;
  width: 100%;
  height: 5em;
`,N=r`
  :focus,
  :hover,
  :active {
    outline: none;
  }
  display: flex;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  svg {
    color: var(--privy-color-error);
  }
  svg:hover {
    color: var(--privy-color-foreground-3);
  }
`,P=o.button`
  ${N}
`;export{T as DoubleIconWrapper,D as LinkButton,w as LinkPasskeyScreen,w as default,b as LinkPasskeyView};