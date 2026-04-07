import{o as e}from"./chunk-CFjPhJqf.js";import{n as t,t as n}from"./jsx-runtime-QQLjLlGf.js";import{Y as r,gt as i}from"./useActiveWallet-CLfuK4Fv-Dh_QcYZ1.js";import{b as a,r as o}from"./index-DbvclLf3.js";import{t as s}from"./ScreenLayout-CHf1S-9L-DQ-dL_56.js";var c=n(),l=e(t(),1),u=async({operation:e,until:t,delay:n,interval:r,attempts:a,signal:o})=>{let s,c,l=0;for(;l<a;){if(o?.aborted)return{status:`aborted`,result:s,attempts:l,error:c};l++;try{if(c=void 0,s=await e(),t(s))return{status:`success`,result:s,attempts:l};l<a&&await i(r)}catch(e){e instanceof Error&&(c=e),l<a&&await i(r)}}return{status:`max_attempts`,result:s,attempts:l,error:c}},d=({currency:e=`usd`,value:t,onChange:n,inputMode:r=`decimal`,autoFocus:i})=>{let[o,s]=(0,l.useState)(`0`),u=(0,l.useRef)(null),d=t??o,f=a[e]?.symbol??`$`,h=(0,l.useCallback)((e=>{let t=e.target.value,r=(t=t.replace(/[^\d.]/g,``)).split(`.`);r.length>2&&(t=r[0]+`.`+r.slice(1).join(``)),r.length===2&&r[1].length>2&&(t=`${r[0]}.${r[1].slice(0,2)}`),t.length>1&&t[0]===`0`&&t[1]!==`.`&&(t=t.slice(1)),(t===``||t===`.`)&&(t=`0`),n?n(t):s(t)}),[n]),g=(0,l.useCallback)((e=>{!([`Delete`,`Backspace`,`Tab`,`Escape`,`Enter`,`.`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)||(e.ctrlKey||e.metaKey)&&[`a`,`c`,`v`,`x`].includes(e.key.toLowerCase()))&&(e.key>=`0`&&e.key<=`9`||e.preventDefault())}),[]),_=(0,l.useMemo)((()=>(d.includes(`.`),d)),[d]);return(0,c.jsxs)(p,{onClick:()=>u.current?.focus(),children:[(0,c.jsx)(m,{children:f}),_,(0,c.jsx)(`input`,{ref:u,type:`text`,inputMode:r,value:_,onChange:h,onKeyDown:g,autoFocus:i,placeholder:`0`,style:{width:1,height:`1rem`,opacity:0,alignSelf:`center`,fontSize:`1rem`}}),(0,c.jsx)(m,{style:{opacity:0},children:f})]})},f=({selectedAsset:e,onEditSourceAsset:t})=>{let{icon:n}=a[e];return(0,c.jsxs)(h,{onClick:t,children:[(0,c.jsx)(g,{children:n}),(0,c.jsx)(_,{children:e.toLocaleUpperCase()}),(0,c.jsx)(v,{children:(0,c.jsx)(o,{})})]})},p=r.span`
  background-color: var(--privy-color-background);
  width: 100%;
  text-align: center;
  border: none;
  font-kerning: none;
  font-feature-settings: 'calt' off;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    color: var(--privy-color-foreground);
    font-size: 3.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 5.375rem;
  }
`,m=r.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  margin-top: 0.75rem;
`,h=r.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  gap: 0.5rem;
  border: 1px solid var(--privy-color-border-default);
  border-radius: var(--privy-border-radius-full);

  && {
    margin: auto;
    padding: 0.5rem 1rem;
  }
`,g=r.div`
  svg {
    width: 1rem;
    height: 1rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
  }
`,_=r.span`
  color: var(--privy-color-foreground);
  font-kerning: none;
  font-feature-settings: 'calt' off;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.375rem;
`,v=r.div`
  color: var(--privy-color-foreground);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,y=({opts:e,isLoading:t,onSelectSource:n})=>(0,c.jsx)(s,{showClose:!1,showBack:!0,onBack:()=>n(e.source.selectedAsset),title:`Select currency`,children:(0,c.jsx)(b,{children:e.source.assets.map((e=>{let{icon:r,name:i}=a[e];return(0,c.jsx)(x,{onClick:()=>n(e),disabled:t,children:(0,c.jsxs)(S,{children:[(0,c.jsx)(C,{children:r}),(0,c.jsxs)(w,{children:[(0,c.jsx)(T,{children:i}),(0,c.jsx)(E,{children:e.toLocaleUpperCase()})]})]})},e)}))})}),b=r.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,x=r.button`
  border-color: var(--privy-color-border-default);
  border-width: 1px;
  border-radius: var(--privy-border-radius-mdlg);
  border-style: solid;
  display: flex;

  && {
    padding: 0.75rem 1rem;
  }
`,S=r.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`,C=r.div`
  svg {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: var(--privy-border-radius-full);
    overflow: hidden;
  }
`,w=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.125rem;
`,T=r.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`,E=r.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
`;export{u as i,f as n,d as r,y as t};