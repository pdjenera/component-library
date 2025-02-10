/*! For license information please see components-Button-Button-stories.f48651fc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpdjenera_component_library=self.webpackChunkpdjenera_component_library||[]).push([[721],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Secondary:()=>Secondary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Theme=__webpack_require__("./src/types/Theme.tsx");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var backgroundStyle={primary:Theme.z.colors.buttonPrimary,secondary:Theme.z.colors.buttonSecondary},size={sm:"100px",lg:"200px"},Container=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    background-color:",";\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: row;\n    height: 40px;\n    margin: 0;\n    padding: 4px;\n    text-align: left;\n    text-decoration: none;\n    width: ",";\n"])),(function(props){return backgroundStyle[props.buttonStyle?props.buttonStyle:"primary"]}),(function(props){return size[props.size?props.size:"sm"]})),Icon=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    align-self: center;\n"]))),Text=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    align-self: center;\n    font-size: ",";\n    font-style: italic;\n    font-weight: bold;\n    font-family: Arial, sans-serif;\n"])),(function(props){return props.theme.fontSizes.small})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Button=function Button(_ref){var _onClick=_ref.onClick,icon=_ref.icon,text=_ref.text,buttonStyle=_ref.buttonStyle,size=_ref.size;return(0,jsx_runtime.jsxs)(Container,{"data-testid":"button",buttonStyle,size,onClick:function onClick(){return _onClick()},children:[(0,jsx_runtime.jsx)(Icon,{children:icon}),(0,jsx_runtime.jsx)(Text,{children:text})]})};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"() => void"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},buttonStyle:{defaultValue:null,description:"",name:"buttonStyle",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"error"'},{value:'"warning"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}var IconLogin=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("outline","login","IconLogin",[["path",{d:"M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M21 12h-13l3 -3",key:"svg-1"}],["path",{d:"M11 15l-3 -3",key:"svg-2"}]]);const Button_stories={title:"Components/Button",component:Button_Button,args:{onClick:()=>console.log("Button Clicked"),icon:(0,jsx_runtime.jsx)(IconLogin,{}),text:"Click Me",buttonStyle:"primary",size:"sm"},argTypes:{onClick:{description:"Function to call when the button is clicked"},icon:{description:"Icon to display on the button"},text:{description:"Text to display on the button"},buttonStyle:{description:"Color of the card you'd like to set",options:["primary","secondary"],table:{defaultValue:{summary:"primary"}}},size:{description:"Size of the card you'd like to set",options:["sm","lg"],table:{defaultValue:{summary:"sm"}}}},tags:["autodocs"]},Primary={args:{onClick:()=>console.log("Button Clicked"),icon:(0,jsx_runtime.jsx)(IconLogin,{}),text:"Click Me",buttonStyle:"primary",size:"sm"}},Secondary={args:{onClick:()=>console.log("Button Clicked"),icon:(0,jsx_runtime.jsx)(IconLogin,{}),text:"Click Me Secondary",buttonStyle:"secondary",size:"lg"}},__namedExportsOrder=["Primary","Secondary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClick: () => console.log('Button Clicked'),\n    icon: <IconLogin />,\n    text: 'Click Me',\n    buttonStyle: 'primary',\n    size: 'sm'\n  }\n} satisfies Story",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClick: () => console.log('Button Clicked'),\n    icon: <IconLogin />,\n    text: 'Click Me Secondary',\n    buttonStyle: 'secondary',\n    size: 'lg'\n  }\n} satisfies Story",...Secondary.parameters?.docs?.source}}}},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}}}]);