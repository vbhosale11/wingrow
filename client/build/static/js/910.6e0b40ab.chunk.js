"use strict";(self.webpackChunkwingrow=self.webpackChunkwingrow||[]).push([[910],{7910:function(e,s,a){a.r(s),a.d(s,{default:function(){return P}});var l=a(4942),t=a(1413),o=a(3433),n=a(9439),r=a(2791),i=a(7205),c=a(5017),m=a(5953),d=a(4565),p=a(9365),u=a(4020),h=a(8055),f=a(988),x=a(7689),g=a(1087),y=a(6457),j=a(8704),Z=a(1840),v=a(5206),b=(a(5462),a(184)),S=y.Z.getCurrentUser(),w=[188,13];function P(){(0,r.useEffect)((function(){S&&(y.Z.logout(),window.location.reload())}),[]);var e=(0,x.s0)(),s=(0,r.useState)(!1),a=(0,n.Z)(s,2),P=a[0],F=a[1],N=(0,r.useState)({phone:"",password:"",firstname:"",lastname:"",type:"",farmertype:"",address:""}),C=(0,n.Z)(N,2),z=C[0],O=C[1],W=r.useState([]),k=(0,n.Z)(W,2),T=k[0],A=k[1],I=(0,r.useState)(""),q=(0,n.Z)(I,2),L=q[0],R=q[1],U=function(e){var s=e.target,a=s.name,o=s.value;O((function(e){return(0,t.Z)((0,t.Z)({},e),{},(0,l.Z)({},a,o))}))};return(0,b.jsxs)("div",{className:"authContainer",children:[(0,b.jsx)(v.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",color:"success"}),(0,b.jsx)(v.Ix,{}),P?(0,b.jsx)(Z.Z,{}):(0,b.jsxs)("div",{className:"authbox",children:[(0,b.jsx)("img",{className:"login_image",src:"./images/2.png",alt:"logo"}),(0,b.jsxs)("form",{className:"register_details",component:"form",noValidate:!0,onSubmit:function(s){R(""),s.preventDefault();var a=z.phone,l=z.firstname,t=z.lastname,o=z.farmertype,n=z.type,r=z.password;a.match("[0-9]{10}")?0===l.length&&0===t.length?R("Please provide valid first and last name"):0===n.length?R("Please select type"):r.length<6?R("password must be greater than 6 characters"):"farmer"===n&&0===o.length?R("select producer type"):"farmer"===n&&0===T.length?R("select atleast one commodity and press enter"):(R("no error"),F(!0),y.Z.register(z.phone,z.password,z.firstname,z.lastname,z.type,z.farmertype,z.address,T).then((function(){v.Am.success("Registration successful!",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),setTimeout((function(){e("/registeration-successfull"),window.location.reload()}),1e3)}),(function(s){v.Am.warn("User Already Exists",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),O({phone:"",password:"",firstname:"",lastname:"",type:"",farmertype:"",address:""}),setTimeout((function(){e("/login"),window.location.reload()}),1e3)}))):R("Please provide valid phone number")},sx:{mt:3},children:[(0,b.jsx)("img",{className:"form-logo",src:"./logo.png",alt:"form-logo"}),(0,b.jsx)(d.Z,{className:"form-heading",component:"h1",variant:"h5",children:"Welcome to Wingrowagritech"}),(0,b.jsx)(d.Z,{className:"form-heading",mt:2,component:"h1",variant:"h5",children:"Signup with us"}),(0,b.jsxs)(m.ZP,{className:"input-div-holder",container:!0,spacing:2,children:[(0,b.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"monospace"}},autoComplete:"given-name",name:"firstname",value:z.firstname,onChange:U,required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,color:"success",className:"textfield"})}),(0,b.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"monospace"}},required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastname",value:z.lastname,onChange:U,autoComplete:"family-name",color:"success",className:"textfield"})}),(0,b.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"monospace"}},required:!0,fullWidth:!0,id:"phone",label:"Mobile Number",name:"phone",value:z.phone,onChange:U,color:"success",className:"textfield"})}),(0,b.jsx)(m.ZP,{item:!0,xs:12,sm:6,children:(0,b.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"monospace"}},required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:z.password,onChange:U,autoComplete:"new-password",color:"success",className:"textfield"})}),(0,b.jsx)(m.ZP,{item:!0,xs:12,children:(0,b.jsxs)(h.Z,{className:"textfield",sx:{width:"100%",fontSize:14},children:[(0,b.jsx)(p.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"monospace"}},id:"demo-simple-select-helper-label",children:"Type"}),(0,b.jsxs)(f.Z,{sx:{fontSize:"1.2rem"},labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:z.type,label:"Type",name:"type",onChange:U,color:"success",children:[(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"",children:(0,b.jsx)("em",{children:"Select"})}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"farmer",children:"Producer"}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"customer",children:"Consumer"})]})]})}),"farmer"===z.type&&(0,b.jsx)(m.ZP,{item:!0,xs:12,children:(0,b.jsxs)(h.Z,{className:"textfield",color:"success",sx:{width:"100%"},children:[(0,b.jsx)(p.Z,{id:"demo-simple-select-helper-label",children:"Producer Type"}),(0,b.jsxs)(f.Z,{sx:{fontSize:"1.3rem"},labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:z.farmertype,label:"farmertype",name:"farmertype",onChange:U,children:[(0,b.jsx)(u.Z,{value:"",children:(0,b.jsx)("em",{children:"None"})}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"farmers",children:"Farmer"}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"Organic farmers",children:"Organic Farmer"}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"FPO/FPC",children:"FPO/FPC"}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"Retailer",children:"Retailer"}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"Wholesaler",children:"Wholesaler"}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"Start-up",children:"Start Up"}),(0,b.jsx)(u.Z,{sx:{fontSize:"1.3rem",fontFamily:"monospace"},value:"Vocal for local producers",children:"Vocal for Local Producers"})]})]})}),(0,b.jsx)(m.ZP,{item:!0,xs:12,children:(0,b.jsx)(c.Z,{inputlabelprops:{style:{fontSize:14,fontFamily:"monospace"}},fullWidth:!0,name:"address",label:"address (optional)",type:"address",id:"address",value:z.address,onChange:U,autoComplete:"new-address",color:"success",className:"textfield"})}),"farmer"===z.type&&(0,b.jsx)(m.ZP,{item:!0,xs:12,children:(0,b.jsx)(j.V,{InputProps:{style:{fontSize:15}},inputlabelprops:{style:{fontSize:15}},tags:T,delimiters:w,handleDelete:function(e){A(T.filter((function(s,a){return a!==e})))},handleAddition:function(e){A([].concat((0,o.Z)(T),[e]))},handleDrag:function(e,s,a){var l=T.slice();l.splice(s,1),l.splice(a,0,e),A(l)},inputFieldPosition:"bottom",autocomplete:!0,color:"success",className:"textfield",placeholder:"Add Selling Products Names and press enter"})})]}),"no error"!==L&&(0,b.jsx)("h3",{style:{alignSelf:"center",color:"red",marginTop:"10px"},children:L}),(0,b.jsx)(i.Z,{type:"submit",fullWidth:!0,className:"signup-btn",variant:"contained",color:"success",size:"large",sx:{mt:3,mb:2},children:"Register"}),(0,b.jsx)(m.ZP,{container:!0,justifyContent:"center",children:(0,b.jsx)(m.ZP,{item:!0,children:(0,b.jsxs)(g.rU,{className:"form-link",to:"/login",variant:"body2",children:["Already have an account? ",(0,b.jsx)("span",{className:"login",children:"Log In"})]})})})]})]})]})}}}]);
//# sourceMappingURL=910.6e0b40ab.chunk.js.map