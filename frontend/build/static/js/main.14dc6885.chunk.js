(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{170:function(e,t,n){},193:function(e,t){},195:function(e,t){},207:function(e,t,n){},240:function(e,t){},242:function(e,t){},275:function(e,t){},276:function(e,t){},281:function(e,t){},283:function(e,t){},290:function(e,t){},309:function(e,t){},332:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(77),i=n.n(s),r=(n(170),n(22)),l=n(6),o=n(7),u=n(9),d=n(8),j=n(78),h=n.n(j),g=!!String("production").includes("production")?"":"http://localhost:5000",b=new(n(188).Agent)({rejectUnauthorized:!1});function m(e,t,n){for(var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]&&arguments[5],i=Object.keys(t),r=Object.values(t),l=new FormData,o=0;o<i.length;o++){var u=i[o],d=r[o];l.append(u,d)}h.a.post(g+e,l,{httpsAgent:b,headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return JSON.parse(e.request.responseText)})).then((function(t){s&&console.log(e,t),t.success?n(t):(console.log(t.message),a&&a(t.message))})).catch((function(e){"Network Error"===e.message&&a&&a(e.message,e)})).finally((function(){c&&c()}))}n(207),n(208),n(209);var p=n(0),f=(a.Component,n(46)),O=n.n(f),v=(n(211),n(47)),x=n.n(v),k=x.a.ExcelFile,C=x.a.ExcelFile.ExcelSheet,S=x.a.ExcelFile.ExcelColumn;O.a.lang("id");var y=O.a.unix(parseInt((new Date).getTime())/1e3).format("YYYY-MM-DD_HH-m-s_dddd"),w=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{class:"layout layout-nav-side",children:Object(p.jsx)("div",{class:"main-container",children:Object(p.jsx)("div",{class:"container",children:Object(p.jsx)("div",{class:"row justify-content-center",children:Object(p.jsxs)("div",{class:"col-lg-11 col-xl-10",children:[Object(p.jsxs)("div",{class:"page-header",children:[Object(p.jsx)("h1",{children:"Tambang Emas Printing"}),Object(p.jsx)("p",{class:"lead",children:"project anti lupa :v"})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{class:"tab-content",children:Object(p.jsx)("div",{class:"tab-pane fade active show",id:"projects",role:"tabpanel","data-filter-list":"content-list-body",children:Object(p.jsxs)("div",{class:"content-list",children:[Object(p.jsxs)("div",{class:"row content-list-head",children:[Object(p.jsxs)("div",{class:"col-auto",children:[Object(p.jsx)("h3",{children:"Stok Barang"}),0===this.props.item.length?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{class:"btn btn-round","data-toggle":"modal","data-target":"#project-add-modal",style:{padding:0},onClick:function(){e.props.add()},children:Object(p.jsx)("i",{class:"material-icons",children:"add"})})}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{class:"btn btn-round","data-toggle":"modal","data-target":"#project-add-modal",style:{padding:0},onClick:function(){e.props.add()},children:Object(p.jsx)("i",{class:"material-icons",children:"add"})}),Object(p.jsx)(k,{element:Object(p.jsx)("button",{class:"btn btn-round","data-toggle":"modal","data-target":"#project-add-modal",style:{padding:0,marginLeft:10},children:Object(p.jsx)("i",{class:"material-icons",children:"download"})}),filename:"Rekap_"+y,children:Object(p.jsxs)(C,{data:this.props.item.sort((function(e,t){return e.nama<t.nama?-1:e.nama>t.nama?1:0})).map((function(e,t){return e.no=t+1,e.harga_jual=parseInt(e.harga)+parseInt(e.keuntungan),e})),name:"Rekap",children:[Object(p.jsx)(S,{label:"No",value:"no"}),Object(p.jsx)(S,{label:"Nama Item",value:"nama"}),Object(p.jsx)(S,{label:"Harga Asli",value:"harga"}),Object(p.jsx)(S,{label:"Keuntungan",value:"keuntungan"}),Object(p.jsx)(S,{label:"Harga Jual",value:"harga_jual"})]})})]})]}),Object(p.jsx)("form",{class:"col-md-auto",children:Object(p.jsxs)("div",{class:"input-group input-group-round",children:[Object(p.jsx)("div",{class:"input-group-prepend",children:Object(p.jsx)("span",{class:"input-group-text",children:Object(p.jsx)("i",{class:"material-icons",children:"search"})})}),Object(p.jsx)("input",{type:"text",class:"form-control",placeholder:"Cari...","aria-label":"Cari...",onChange:function(t){e.props.search(t.target.value)}})]})})]}),Object(p.jsx)("div",{class:"content-list-body row filter-list-1633571277024",children:this.props.children})]})})})]})})})})})}}]),n}(a.Component),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"col-md-6 col-lg-4 mt-4",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h5",{className:"card-header text-center",onClick:function(){e.props.onClick()},children:this.props.nama}),Object(p.jsx)("div",{className:"card-body",children:this.props.children})]})})})}}]),n}(a.Component);function B(e,t){var n=String(parseInt(e)).replace(/[^,\d]/g,"").split(","),a=n[0].length%3,c=n[0].substr(0,a),s=n[0].substr(a).match(/\d{3}/gi);s&&(c+=(a?".":"")+s.join("."));return c=void 0!==n[1]?c+","+n[1]:c,void 0===t?c:c?t+c:""}var N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.harga,a=t.keuntungan;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[Object(p.jsx)("p",{className:"text-danger",onClick:function(){e.props.onClick()},children:B(n,"Rp.")}),Object(p.jsx)("i",{class:"bi bi-arrow-right"}),Object(p.jsx)("p",{className:"text-success",onClick:function(){e.props.onClick()},children:B(n+a,"Rp.")})]})}),Object(p.jsx)("div",{className:"col-6 text-center",children:Object(p.jsx)("a",{href:"!#",className:"btn btn-secondary",onClick:function(t){t.preventDefault(),e.props.onUpdate()},children:"Edit"})}),Object(p.jsx)("div",{className:"col-6 text-center",children:Object(p.jsx)("a",{href:"!#",className:"btn btn-danger",onClick:function(t){t.preventDefault(),e.props.onDelete()},children:"Hapus"})})]})})}}]),n}(a.Component),D=n(79),F=function(e){var t=Object(D.b)({loading:!0,indicator:Object(p.jsx)(D.a,{width:e.size})}),n=t.containerProps,a=t.indicatorEl;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{style:{textAlign:"center"},children:[Object(p.jsxs)("section",Object(r.a)(Object(r.a)({},n),{},{children:[a," "]})),Object(p.jsx)("h2",{style:{marginTop:"10px",fontSize:e.fontSize},children:e.message})]})})},_=n(164),E=n.n(_),T=n(165),z=n.n(T)()(E.a),A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:600;z.fire({title:Object(p.jsx)("p",{children:e}),html:t,width:n,showConfirmButton:!1,showCancelButton:!1,showCloseButton:!0,allowOutsideClick:!1,didOpen:function(){},didClose:function(){}})},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];z.fire({title:Object(p.jsx)("p",{children:e}),icon:"success",showConfirmButton:!1,showCancelButton:!1,showCloseButton:!0,willClose:function(){n&&n()},timer:t})};a.Component;a.Component;var R=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={nama_item:null,harga:null,keuntungan:null,loading:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.nama_item,a=t.harga,c=t.keuntungan;return t.loading?Object(p.jsx)(F,{size:50,fontSize:20,message:"Request..."}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{class:"mb-3",children:Object(p.jsx)("input",{type:"text",class:"form-control",placeholder:"Nama Item",value:n,onChange:function(t){String(t.target.value).length>0?e.setState({nama_item:t.target.value}):e.setState({nama_item:null})}})}),Object(p.jsx)("div",{class:"mb-3",children:Object(p.jsx)("input",{type:"text",class:"form-control",placeholder:"Harga",value:a,onChange:function(t){t.target.value=t.target.value.replace(/[^0-9\.]+/g,""),String(t.target.value).length>0?e.setState({harga:parseInt(t.target.value)}):e.setState({harga:null})}})}),Object(p.jsx)("div",{class:"mb-3",children:Object(p.jsx)("input",{type:"text",class:"form-control",placeholder:"Keuntungan",value:c,onChange:function(t){t.target.value=t.target.value.replace(/[^0-9\.]+/g,""),String(t.target.value).length>0?e.setState({keuntungan:parseInt(t.target.value)}):e.setState({keuntungan:null})}})}),n&&String(n).length>0&&a&&String(a).length>0&&c&&String(c).length>0?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{class:"btn btn-success",onClick:function(){e.setState({loading:!0}),setTimeout((function(){e.props.onSubmit({nama:n,harga:a,keuntungan:c})}),400)},children:"Submit"})}):null]})}}]),n}(a.Component),H=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;Object(l.a)(this,n);var c=(a=t.call(this,e)).props,s=c.nama,i=c.harga,r=c.keuntungan;return a.state={nama_item:s,harga:i,keuntungan:r,loading:!1},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.nama_item,a=t.harga,c=t.keuntungan;return t.loading?Object(p.jsx)(F,{size:50,fontSize:20,message:"Request..."}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{class:"mb-3",children:[Object(p.jsx)("label",{for:"input-nama-item",class:"form-label",children:"Nama Item"}),Object(p.jsx)("input",{type:"text",class:"form-control",id:"input-nama-item",placeholder:"Ketik...",value:n,onChange:function(t){String(t.target.value).length>0?e.setState({nama_item:t.target.value}):e.setState({nama_item:null})}})]}),Object(p.jsxs)("div",{class:"mb-3",children:[Object(p.jsx)("label",{for:"input-harga",class:"form-label",children:"Harga"}),Object(p.jsx)("input",{type:"text",class:"form-control",id:"input-harga",placeholder:"Ketik...",value:a,onChange:function(t){t.target.value=t.target.value.replace(/[^0-9\.]+/g,""),String(t.target.value).length>0?e.setState({harga:parseInt(t.target.value)}):e.setState({harga:null})}})]}),Object(p.jsxs)("div",{class:"mb-3",children:[Object(p.jsx)("label",{for:"input-keuntungan",class:"form-label",children:"Keuntungan"}),Object(p.jsx)("input",{type:"text",class:"form-control",id:"input-keuntungan",placeholder:"Ketik...",value:c,onChange:function(t){t.target.value=t.target.value.replace(/[^0-9\.]+/g,""),String(t.target.value).length>0?e.setState({keuntungan:parseInt(t.target.value)}):e.setState({keuntungan:null})}})]}),n&&String(n).length>0&&n!==this.props.nama||a&&String(a).length>0&&parseInt(a)!==this.props.harga||c&&String(c).length>0&&parseInt(c)!==this.props.keuntungan?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("button",{class:"btn btn-success",onClick:function(){e.setState({loading:!0}),setTimeout((function(){e.props.onSubmit({_id:e.props._id,nama:n,harga:a,keuntungan:c})}),400)},children:"Submit"})}):null]})}}]),n}(a.Component),K=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.harga,n=e.keuntungan;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("table",{class:"table table-striped",children:Object(p.jsxs)("tbody",{children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{textAlign:"left"},children:"Harga Asli"}),Object(p.jsx)("td",{children:B(t,"Rp.")})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{style:{textAlign:"left"},children:"Keuntungan"}),Object(p.jsx)("td",{children:B(n,"Rp.")})]})]})})})}}]),n}(a.Component),U=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isLoaded:!1,error:!1,item:[],view:[]},a}return Object(o.a)(n,[{key:"refreshData",value:function(){var e=this;!function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],c=arguments.length>4&&void 0!==arguments[4]&&arguments[4];h.a.get(g+e,{httpsAgent:b}).then((function(e){return JSON.parse(e.request.responseText)})).then((function(a){c&&console.log(e,a),a.success?t(a):(console.log(a.message),n&&n(a.message))})).catch((function(e){"Network Error"===e.message&&n&&n(e.message,e)})).finally((function(){a&&a()}))}("/api/refresh-item",(function(t){console.log({hasil:t}),e.setState({item:t.data,view:t.data,isLoaded:!0})}))}},{key:"componentDidMount",value:function(){this.refreshData(),document.addEventListener("click",(function(e){e.preventDefault();var t=e.target.closest("a");if(t){var n=t.getAttribute("href"),a=t.getAttribute("target");if(String(n).startsWith("#")){var c=String(n).replaceAll("#","");document.getElementById(c)&&document.getElementById(c).scrollIntoView({behavior:"smooth"})}else"_blank"===a&&window.open(n,"_blank").focus()}}))}},{key:"addItem",value:function(e){var t=this;m("/api/insert-item",e,(function(e){t.refreshData(),L(e.message)}))}},{key:"updateItem",value:function(e){var t=this;m("/api/update-item",e,(function(e){t.refreshData(),L(e.message)}))}},{key:"deleteItem",value:function(e){var t,n=this;t="sedang menghapus...",z.fire({html:Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(F,{message:t,size:60,fontSize:20})}),showConfirmButton:!1,showCancelButton:!1,showCloseButton:!1,allowOutsideClick:!1}),m("/api/delete-item",{_id:e._id},(function(e){n.refreshData(),L(e.message)}))}},{key:"modalView",value:function(e){var t=e.nama;A(t,Object(p.jsx)(K,Object(r.a)({},e)))}},{key:"modalInsert",value:function(){var e=this;A("Tambah Item",Object(p.jsx)(R,{onSubmit:function(t){e.addItem(t)}}))}},{key:"modalUpdate",value:function(e){var t=this;console.log({data:e}),A("Ubah Item",Object(p.jsx)(H,Object(r.a)(Object(r.a)({},e),{},{onSubmit:function(e){t.updateItem(e)}})))}},{key:"modalDelete",value:function(e){var t,n,a=this,c=e.nama;t=function(){a.deleteItem(e)},n=Object(p.jsxs)(p.Fragment,{children:["apakah kamu yakin ingin menghapus data ",Object(p.jsx)("b",{children:c})," ??"]}),z.fire({html:n,showConfirmButton:!0,confirmButtonText:Object(p.jsx)("span",{children:"Ya"}),confirmButtonColor:"#dc3545",showCancelButton:!0,cancelButtonText:Object(p.jsx)("span",{children:"Batal"}),cancelButtonColor:"#6c757d",reverseButtons:!1,showCloseButton:!0,allowOutsideClick:!1}).then((function(e){e.isConfirmed?t():e.isDenied&&z.close()}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.isLoaded,a=t.error,c=t.item,s=t.view;return a||(n?Object(p.jsx)(w,{item:c,add:function(){e.modalInsert()},search:function(t){String(t).length>0?e.setState({view:c.filter((function(e){return String(e.nama).toLowerCase().includes(String(t).toLowerCase())}))}):e.setState({view:c})},children:Object(p.jsx)("div",{className:"row",children:s.sort((function(e,t){return e.nama<t.nama?-1:e.nama>t.nama?1:0})).map((function(t){var n=t.nama,a=t.harga,c=t.keuntungan;return Object(p.jsx)(I,{nama:n,onClick:function(){e.modalView(t)},children:Object(p.jsx)(N,{harga:a,keuntungan:c,onClick:function(){e.modalView(t)},onUpdate:function(){e.modalUpdate(t)},onDelete:function(){e.modalDelete(t)}})})}))})}):Object(p.jsx)("div",{className:"auto-center",children:Object(p.jsx)(F,{size:50,fontSize:20,message:"Request..."})}))}}]),n}(a.Component),q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,333)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(U,{})}),document.getElementById("root")),q()}},[[332,1,2]]]);
//# sourceMappingURL=main.14dc6885.chunk.js.map