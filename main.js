!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){this.name=e,this.taskArray=[],this.editName=function(e){this.name=e},this.addTask=function(e){this.taskArray.push(e)}}function a(e,t,n,r){this.name=e,this.description=t,this.priority=n,this.dueDate=r}function i(e){function t(t){t.style.backgroundColor=["darkolivegreen","gold","maroon"][e],t.innerHTML=["Low","Medium","High"][e]}return{createButton:function(){let n=document.createElement("button");return t(n),n.className="priority-button form-item",n.addEventListener("click",(function(r){++e>2&&(e=0),e=e,t(n)})),n.setAttribute("type","button"),n},getPriority:function(){return e}}}n.r(t);const l=()=>{let e=!1;function t(e,t,a){let l=document.createElement("div");l.className="task-container";let c=document.createElement("div");c.className="task-props";let d=document.createElement("input");d.setAttribute("type","checkbox"),d.className="task-status";let o=document.createElement("div");o.className="task-name",o.innerHTML=e.name;let u=document.createElement("div");u.className="task-description",u.innerHTML=e.description;let m=i(e.priority),s=document.createElement("input");s.setAttribute("type","date"),s.value=e.dueDate,s.className="task-duedate";let p=document.createElement("div");p.className="task-options";let f=document.createElement("img");f.src="styling/images/trash.png",f.className="menu-project-del",f.addEventListener("click",(function(e){let r=document.querySelector("#tasks-container"),i=Array.from(r.children).indexOf(e.target.parentElement.parentElement)-2;console.log(i),t.taskArray.splice(i,1),n(t,a)}));let h=document.createElement("img");return h.src="styling/images/edit.png",h.className="menu-project-edit",h.addEventListener("click",(function(e){let n=Array.from(e.target.parentElement.parentElement.parentElement.children).slice(2).indexOf(e.target.parentElement.parentElement);r(t,a,n)})),p.appendChild(f),p.appendChild(h),c.appendChild(d),c.appendChild(o),c.appendChild(u),c.appendChild(m.createButton()),c.appendChild(s),l.appendChild(c),l.appendChild(p),l}function n(e,a){document.querySelector("#tasks-container").innerHTML="",function(e,t){let n=JSON.parse(window.localStorage.getItem("projects"));n[t].taskArray=e.taskArray,window.localStorage.setItem("projects",JSON.stringify(n))}(e,a);let i=document.querySelector("#tasks-container"),l=document.createElement("div");l.id="task-title";let c=document.createElement("div");c.id="task-header";let d=document.createElement("h3");c.appendChild(d);let o=document.createElement("h3");o.innerHTML="Task",c.appendChild(o);let u=document.createElement("h3");u.innerHTML="Description",c.appendChild(u);let m=document.createElement("h3");m.innerHTML="Priority",c.appendChild(m);let s=document.createElement("h3");s.innerHTML="Due Date",c.appendChild(s);let p=document.createElement("h2");p.innerHTML=e.name,p.id="interface-project-name";let f=document.createElement("button");f.id="add-task",f.innerHTML="Clear Tasks",f.addEventListener("click",(function(){e.taskArray=[],n(e,a)}));let h=document.createElement("button");h.id="add-task",h.innerHTML="Add Task",h.addEventListener("click",(function(){let t=document.querySelector("#interface");if(i.clientHeight+100>t.clientHeight)return alert("Maxiumum number of tasks reached."),!1;r(e,a)}));let E=document.createElement("div");E.id="buttons",E.appendChild(f),E.appendChild(h),l.appendChild(p),l.appendChild(E),i.appendChild(l),i.appendChild(c);for(let n of e.taskArray)i.appendChild(t(n,e,a))}function r(t,r,l){if(!0===e)return!1;let c=document.querySelector("#container"),d=document.createElement("div"),o=document.createElement("form");d.id="task-form-container",o.id="task-form",o.onsubmit=function(){return!1};let u=document.createElement("input");u.setAttribute("type","text"),u.placeholder="Name",u.id="task-name",u.classList.add("form-item"),void 0!==l&&(u.value=t.taskArray[l].name),o.appendChild(u);let m=document.createElement("input");m.setAttribute("type","text"),m.placeholder="Description",m.id="task-description",m.classList.add("form-item"),void 0!==l&&(m.value=t.taskArray[l].description),o.appendChild(m);let s=document.createElement("input");s.setAttribute("type","date"),s.id="task-due-date",s.classList.add("form-item"),void 0!==l&&(s.value=t.taskArray[l].dueDate),o.appendChild(s);let p=i(0);if(void 0!==l){let e=t.taskArray[l].priority;p=i(e)}o.appendChild(p.createButton());let f=document.createElement("input");f.setAttribute("type","submit"),f.id="add-task-submit",f.classList.add("form-item"),f.innerHTML="Add Task",f.addEventListener("click",(function(){if(void 0===l){let i=new a(u.value,m.value,p.getPriority(),s.value);t.taskArray.push(i),n(t,r),f.parentElement.parentElement.parentElement.removeChild(f.parentElement.parentElement),e=!1}else if(void 0!==l){let a=t.taskArray[l];a.name=u.value,a.description=m.value,a.priority=p.getPriority(),a.dueDate=s.value,n(t,r),f.parentElement.parentElement.parentElement.removeChild(f.parentElement.parentElement),e=!1}})),o.appendChild(f),d.appendChild(o),c.appendChild(d),e=!0}return{populateInterface:n}},c=()=>{let e=!1,t=[],n=new r("Default Project");t.push(n),"undefined"!=typeof Storage&&(t=JSON.parse(window.localStorage.getItem("projects"))),c();const a=l();function i(e,n=!1){let r=document.querySelector("#tasks-container"),i=document.getElementById("menu-content"),l=document.createElement("div");l.className="menu-project";let o=document.createElement("div");o.className="menu-project-options";let u=document.createElement("h4");u.className="menu-project-title",u.innerHTML=e.name,u.addEventListener("click",(function(n){let i=t.indexOf(e);r.style.display="block",a.populateInterface(e,i)})),l.appendChild(u);let m=document.createElement("img");m.className="menu-project-edit",m.src="styling/images/edit.png",m.addEventListener("click",(function(){d(!1,e)})),o.appendChild(m);let s=document.createElement("img");return s.className="menu-project-del",s.src="styling/images/trash.png",s.addEventListener("click",(function(e){let n=Array.from(i.children).indexOf(e.target.parentElement.parentElement);t.splice(n,1),window.localStorage.setItem("projects",JSON.stringify(t)),c()})),o.appendChild(s),n?n&&l.classList.add("all-projects"):l.appendChild(o),l}function c(){window.localStorage.setItem("projects",JSON.stringify(t));let n=document.getElementById("menu-content");document.getElementById("menu-content").innerHTML="";for(let e of t)n.appendChild(i(e));e=!1}function d(t,n){if(!0===e)return;let r=document.getElementById("menu-content"),a=0;if(t)for(let e of r.children)if(a+=e.clientHeight,a>r.clientHeight-25)return alert("Max number of projects reached."),!1;let i=document.querySelector("#container"),l=document.createElement("div");l.id="project-form-container";let c=document.createElement("form");c.id="project-form",c.onsubmit=function(){return!1};let d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","project-name"),d.setAttribute("required",t),d.id="project-name",t?d.placeholder="Project Name":t||(d.value=n.name,d.placeholder="New Name"),c.appendChild(d);let u=document.createElement("input");u.setAttribute("type","button"),u.id="submit-project",t?(u.value="Create Project",u.addEventListener("click",(function(){o(t)}))):t||(u.value="Change Name",u.addEventListener("click",(function(){o(t,n)}))),d.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),u.click())})),c.appendChild(u),l.appendChild(c),i.appendChild(l),e=!0}function o(n,a){let i=document.getElementById("submit-project"),l=document.querySelector("#project-name").value;if(n){if(""!=l.trim()){let e=new r(l);console.log(e),t.push(e),window.localStorage.setItem("projects",JSON.stringify(t)),c(),i.parentElement.parentElement.parentElement.removeChild(i.parentElement.parentElement)}}else""==!l.trim()&&(a.name=l,window.localStorage.setItem("projects",JSON.stringify(t)),c(),i.parentElement.parentElement.parentElement.removeChild(i.parentElement.parentElement));e=!1}return{menuButtonFunctionality:function(){document.getElementById("hamburger-menu").addEventListener("click",(function(){let e=document.getElementById("menu");"none"===e.style.display?e.style.display="block":e.style.display="none"}))},addProject:function(){document.getElementById("add-project").addEventListener("click",(function(){d(!0)}))},projects:t,updateMenu:c}};!function(){const e=c();e.menuButtonFunctionality(),e.addProject();let t=document.querySelector("#menu-content");t.children.length>0&&t.children[0].children[0].click()}()}]);