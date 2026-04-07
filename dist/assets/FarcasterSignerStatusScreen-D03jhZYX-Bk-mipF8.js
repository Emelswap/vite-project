import{o as e}from"./chunk-CFjPhJqf.js";import{n as t,t as n}from"./jsx-runtime-QQLjLlGf.js";import{$t as r,E as i,Gn as a,Q as o,Y as s,er as c,pn as l}from"./useActiveWallet-CLfuK4Fv-Dh_QcYZ1.js";import{t as u}from"./ScreenLayout-CHf1S-9L-DQ-dL_56.js";import{n as d,t as f}from"./QrCode-DoSGd0gd-D_fFL4pN.js";import{t as p}from"./farcaster-DPlSjvF5-Bs8mJX_D.js";import{t as m}from"./OpenLink-DZHy38vr-CxKd_yzp.js";import{t as h}from"./CopyToClipboard-DSTf_eKU-D8RT8Fl_.js";var g=n(),_=e(t(),1),v=e(o(),1);d();var y=`#8a63d2`,b=({appName:e,loading:t,success:n,errorMessage:r,connectUri:a,onBack:o,onClose:s,onOpenFarcaster:c})=>(0,g.jsx)(u,v.isMobile||t?v.isIOS?{title:r?r.message:`Add a signer to Farcaster`,subtitle:r?r.detail:`This will allow ${e} to add casts, likes, follows, and more on your behalf.`,icon:p,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},primaryCta:a&&c?{label:`Open Farcaster app`,onClick:c}:void 0,onBack:o,onClose:s,watermark:!0}:{title:r?r.message:`Requesting signer from Farcaster`,subtitle:r?r.detail:`This should only take a moment`,icon:p,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},onBack:o,onClose:s,watermark:!0,children:a&&v.isMobile&&(0,g.jsx)(x,{children:(0,g.jsx)(m,{text:`Take me to Farcaster`,url:a,color:y})})}:{title:`Add a signer to Farcaster`,subtitle:`This will allow ${e} to add casts, likes, follows, and more on your behalf.`,onBack:o,onClose:s,watermark:!0,children:(0,g.jsxs)(S,{children:[(0,g.jsx)(C,{children:a?(0,g.jsx)(f,{url:a,size:275,squareLogoElement:p}):(0,g.jsx)(E,{children:(0,g.jsx)(i,{})})}),(0,g.jsxs)(w,{children:[(0,g.jsx)(T,{children:`Or copy this link and paste it into a phone browser to open the Farcaster app.`}),a&&(0,g.jsx)(h,{text:a,itemName:`link`,color:y})]})]})}),x=s.div`
  margin-top: 24px;
`,S=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,C=s.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,w=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,T=s.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,E=s.div`
  position: relative;
  width: 82px;
  height: 82px;
`,D={component:()=>{let{lastScreen:e,navigateBack:t,data:n}=r(),i=c(),{requestFarcasterSignerStatus:o,closePrivyModal:s}=l(),[u,d]=(0,_.useState)(void 0),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),v=(0,_.useRef)([]),y=n?.farcasterSigner;(0,_.useEffect)((()=>{let e=Date.now(),t=setInterval((async()=>{if(!y?.public_key)return clearInterval(t),void d({retryable:!0,message:`Connect failed`,detail:`Something went wrong. Please try again.`});y.status===`approved`&&(clearInterval(t),p(!1),h(!0),v.current.push(setTimeout((()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0})),1400)));let n=await o(y?.public_key),r=Date.now()-e;n.status===`approved`?(clearInterval(t),p(!1),h(!0),v.current.push(setTimeout((()=>s({shouldCallAuthOnSuccess:!1,isSuccess:!0})),a))):r>3e5?(clearInterval(t),d({retryable:!0,message:`Connect failed`,detail:`The request timed out. Try again.`})):n.status===`revoked`&&(clearInterval(t),d({retryable:!0,message:`Request rejected`,detail:`The request was rejected. Please try again.`}))}),2e3);return()=>{clearInterval(t),v.current.forEach((e=>clearTimeout(e)))}}),[]);let x=y?.status===`pending_approval`?y.signer_approval_url:void 0;return(0,g.jsx)(b,{appName:i.name,loading:f,success:m,errorMessage:u,connectUri:x,onBack:e?t:void 0,onClose:s,onOpenFarcaster:()=>{x&&(window.location.href=x)}})}};export{D as FarcasterSignerStatusScreen,D as default,b as FarcasterSignerStatusView};