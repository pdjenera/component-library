/*! For license information please see components-Hamburger-Hamburger-stories.ad4e4c9d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkpdjenera_component_library=self.webpackChunkpdjenera_component_library||[]).push([[667],{"./src/components/Hamburger/Hamburger.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Closed:()=>Closed,Default:()=>Default,Open:()=>Open,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Hamburger__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Hamburger/Hamburger.tsx"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconMenu.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Hamburger",component:_Hamburger__WEBPACK_IMPORTED_MODULE_1__.A,args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.A,{}),menuItems:[{name:"Home",clickHandler:()=>console.log("Home Clicked")},{name:"About",clickHandler:()=>console.log("About Clicked")},{name:"Contact",clickHandler:()=>console.log("Contact Clicked")}]},argTypes:{icon:{description:"Icon to display on the button"},menuItems:{description:"Menu items to display in the menu"}},tags:["autodocs"]},Default={args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.A,{}),menuItems:[{name:"Home",clickHandler:()=>console.log("Home Clicked")},{name:"About",clickHandler:()=>console.log("About Clicked")},{name:"Contact",clickHandler:()=>console.log("Contact Clicked")}]}},Open={args:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.A,{}),menuItems:[{name:"Home",clickHandler:()=>console.log("Home Clicked")},{name:"About",clickHandler:()=>console.log("About Clicked")},{name:"Contact",clickHandler:()=>console.log("Contact Clicked")}]}},Closed={},__namedExportsOrder=["Default","Open","Closed"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <IconMenu />,\n    menuItems: [{\n      name: 'Home',\n      clickHandler: () => console.log('Home Clicked')\n    }, {\n      name: 'About',\n      clickHandler: () => console.log('About Clicked')\n    }, {\n      name: 'Contact',\n      clickHandler: () => console.log('Contact Clicked')\n    }]\n  }\n} satisfies Story",...Default.parameters?.docs?.source}}},Open.parameters={...Open.parameters,docs:{...Open.parameters?.docs,source:{originalSource:"{\n  args: {\n    icon: <IconMenu />,\n    menuItems: [{\n      name: 'Home',\n      clickHandler: () => console.log('Home Clicked')\n    }, {\n      name: 'About',\n      clickHandler: () => console.log('About Clicked')\n    }, {\n      name: 'Contact',\n      clickHandler: () => console.log('Contact Clicked')\n    }]\n  }\n} satisfies Story",...Open.parameters?.docs?.source}}},Closed.parameters={...Closed.parameters,docs:{...Closed.parameters?.docs,source:{originalSource:"{} satisfies Story",...Closed.parameters?.docs?.source}}}},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconMenu.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconMenu});var IconMenu=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("outline","menu","IconMenu",[["path",{d:"M4 8l16 0",key:"svg-0"}],["path",{d:"M4 16l16 0",key:"svg-1"}]])},"./src/components/Hamburger/Hamburger.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Hamburger_Hamburger});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var HamburgerMenu=styled_components_browser_esm.Ay.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 100%;\n    cursor: pointer;\n"]))),HamburgerMenuContainer=styled_components_browser_esm.Ay.div(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    display: block;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    left: 0;\n    top: ",";\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n"])),(function(props){return props.theme.sizes.headerHeight})),HamburgerMenuItem=styled_components_browser_esm.Ay.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    width: 100px;\n    height: 50px;\n    line-height: 50px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    cursor: pointer;\n    display: block;\n    padding: 0 10px;\n    font-family: ",";\n    font-size: ",";\n    background-color: ",";\n    &:hover {\n        background-color: ",";\n    }\n"])),(function(props){return props.theme.font}),(function(props){return props.theme.fontSizes.small}),(function(props){return props.theme.colors.hamburgerMenuItemBackground}),(function(props){return props.theme.colors.hamburgerMenuItemHoverColor})),HamburgerButton=(styled_components_browser_esm.Ay.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    width: 100%;\n    height: 1px;\n\n    background-color: #333;\n    border-radius: 2px;\n    transition: all 0.3s ease;\n\n    &:nth-child(1) {\n        transform-origin: top left;\n    }\n\n    &:nth-child(3) {\n        transform-origin: bottom left;\n    }\n\n    &.open:nth-child(1) {\n        transform: rotate(45deg);\n    }\n\n    &.open:nth-child(2) {\n        opacity: 0;\n    }\n\n    &.open:nth-child(3) {\n        transform: rotate(-45deg);\n    }\n"]))),styled_components_browser_esm.Ay.div(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    display: block;\n    background-color: #fff;\n    position: absolute;\n    width: 30px;\n    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);\n    border-radius: 2px;\n"])))),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var Hamburger=function Hamburger(_ref){var icon=_ref.icon,menuItems=_ref.menuItems,_useState2=_slicedToArray((0,react.useState)(!1),2),isOpen=_useState2[0],setIsOpen=_useState2[1];return(0,jsx_runtime.jsxs)(HamburgerMenu,{children:[(0,jsx_runtime.jsx)(HamburgerButton,{className:"hamburger ".concat(isOpen?"open":""),onClick:function toggleMenu(){setIsOpen(!isOpen)},"data-testid":"hamburgerButton",children:icon}),isOpen&&(0,jsx_runtime.jsx)(HamburgerMenuContainer,{children:menuItems.map((function(item,index){return(0,jsx_runtime.jsx)(HamburgerMenuItem,{onClick:item.clickHandler,children:item.name},index)}))})]})};const Hamburger_Hamburger=Hamburger;try{Hamburger.displayName="Hamburger",Hamburger.__docgenInfo={description:"",displayName:"Hamburger",props:{icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},menuItems:{defaultValue:null,description:"",name:"menuItems",required:!0,type:{name:"MenuItem[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Hamburger/Hamburger.tsx#Hamburger"]={docgenInfo:Hamburger.__docgenInfo,name:"Hamburger",path:"src/components/Hamburger/Hamburger.tsx#Hamburger"})}catch(__react_docgen_typescript_loader_error){}}}]);