!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){this.name=e,this.taskArray=[],this.editName=function(e){this.name=e},this.addTask=function(e){this.taskArray.push(e)}}function i(e,t,n,r){this.name=e,this.description=t,this.priority=n,this.dueDate=r,this.editTask=function(e,t,n,r){this.name=e,this.description=t,this.priority=n,this.dueDate=r}}function a(e){function t(t){t.style.backgroundColor=["darkolivegreen","gold","maroon"][e],t.innerHTML=["Low","Medium","High"][e]}return{createButton:function(){let n=document.createElement("button");return t(n),n.className="priority-button form-item",n.addEventListener("click",(function(r){++e>2&&(e=0),e=e,t(n)})),n.setAttribute("type","button"),n},getPriority:function(){return e}}}n.r(t);const l=()=>{let e=!1;function t(e,t){let i=document.createElement("div");i.className="task-container";let l=document.createElement("div");l.className="task-props";let c=document.createElement("input");c.setAttribute("type","checkbox"),c.className="task-status";let d=document.createElement("div");d.className="task-name",d.innerHTML=e.name;let o=document.createElement("div");o.className="task-description",o.innerHTML=e.description;let u=a(e.priority),m=document.createElement("input");m.setAttribute("type","date"),m.value=e.dueDate,m.className="task-duedate";let s=document.createElement("div");s.className="task-options";let p=document.createElement("img");p.src="styling/images/trash.png",p.className="menu-project-del",p.addEventListener("click",(function(e){let r=document.querySelector("#tasks-container"),i=Array.from(r.children).indexOf(e.target.parentElement)-1;t.taskArray.splice(i,1),n(t)}));let f=document.createElement("img");return f.src="styling/images/edit.png",f.className="menu-project-edit",f.addEventListener("click",(function(e){let n=Array.from(e.target.parentElement.parentElement.parentElement.children).slice(2).indexOf(e.target.parentElement.parentElement);r(t,n)})),s.appendChild(p),s.appendChild(f),l.appendChild(c),l.appendChild(d),l.appendChild(o),l.appendChild(u.createButton()),l.appendChild(m),i.appendChild(l),i.appendChild(s),i}function n(e,i){if(document.querySelector("#tasks-container").innerHTML="",void 0!==i){let t=JSON.parse(window.localStorage.getItem("projects"));t[i].taskArray=e.taskArray,console.log(i),window.localStorage.setItem("projects",JSON.stringify(t))}let a=document.querySelector("#tasks-container"),l=document.createElement("div");l.id="task-title";let c=document.createElement("div");c.id="task-header";let d=document.createElement("h3");c.appendChild(d);let o=document.createElement("h3");o.innerHTML="Task",c.appendChild(o);let u=document.createElement("h3");u.innerHTML="Description",c.appendChild(u);let m=document.createElement("h3");m.innerHTML="Priority",c.appendChild(m);let s=document.createElement("h3");s.innerHTML="Due Date",c.appendChild(s);let p=document.createElement("h2");p.innerHTML=e.name,p.id="interface-project-name";let f=document.createElement("button");f.id="add-task",f.innerHTML="Clear Tasks",f.addEventListener("click",(function(){e.taskArray=[],n(e)}));let h=document.createElement("button");h.id="add-task",h.innerHTML="Add Task",h.addEventListener("click",(function(){let t=document.querySelector("#interface");if(a.clientHeight+100>t.clientHeight)return alert("Maxiumum number of tasks reached."),!1;r(e)}));let E=document.createElement("div");E.id="buttons",E.appendChild(f),E.appendChild(h),l.appendChild(p),l.appendChild(E),a.appendChild(l),a.appendChild(c);for(let n of e.taskArray)a.appendChild(t(n,e))}function r(t,r){if(!0===e)return!1;let l=document.querySelector("#container"),c=document.createElement("div"),d=document.createElement("form");c.id="task-form-container",d.id="task-form",d.onsubmit=function(){return!1};let o=document.createElement("input");o.setAttribute("type","text"),o.placeholder="Name",o.id="task-name",o.classList.add("form-item"),void 0!==r&&(o.value=t.taskArray[r].name),d.appendChild(o);let u=document.createElement("input");u.setAttribute("type","text"),u.placeholder="Description",u.id="task-description",u.classList.add("form-item"),void 0!==r&&(u.value=t.taskArray[r].description),d.appendChild(u);let m=document.createElement("input");m.setAttribute("type","date"),m.id="task-due-date",m.classList.add("form-item"),void 0!==r&&(m.value=t.taskArray[r].dueDate),d.appendChild(m);let s=a(0);if(void 0!==r){let e=t.taskArray[r].priority;s=a(e)}d.appendChild(s.createButton());let p=document.createElement("input");p.setAttribute("type","submit"),p.id="add-task-submit",p.classList.add("form-item"),p.innerHTML="Add Task",p.addEventListener("click",(function(){if(void 0===r){let r=new i(o.value,u.value,s.getPriority(),m.value);t.taskArray.push(r),n(t),p.parentElement.parentElement.parentElement.removeChild(p.parentElement.parentElement),e=!1}else if(void 0!==r){t.taskArray[r].editTask(o.value,u.value,s.getPriority(),m.value),n(t),p.parentElement.parentElement.parentElement.removeChild(p.parentElement.parentElement),e=!1}})),d.appendChild(p),c.appendChild(d),l.appendChild(c),e=!0}return{populateInterface:n}},c=()=>{let e=!1,t=[],n=new r("Default Project");t.push(n),"undefined"!=typeof Storage&&(t=JSON.parse(window.localStorage.getItem("projects"))),c();const i=l();function a(e,n=!1){let r=document.querySelector("#tasks-container"),a=document.getElementById("menu-content"),l=document.createElement("div");l.className="menu-project";let o=document.createElement("div");o.className="menu-project-options";let u=document.createElement("h4");u.className="menu-project-title",u.innerHTML=e.name,u.addEventListener("click",(function(t){let n=Array.from(t.target.parentElement.parentElement.children).indexOf(t.target.parentElement);console.log(n),r.style.display="block",i.populateInterface(e,n)})),l.appendChild(u);let m=document.createElement("img");m.className="menu-project-edit",m.src="styling/images/edit.png",m.addEventListener("click",(function(){d(!1,e)})),o.appendChild(m);let s=document.createElement("img");return s.className="menu-project-del",s.src="styling/images/trash.png",s.addEventListener("click",(function(e){let n=Array.from(a.children).indexOf(e.target.parentElement.parentElement);t.splice(n,1),window.localStorage.setItem("projects",JSON.stringify(t)),c()})),o.appendChild(s),n?n&&l.classList.add("all-projects"):l.appendChild(o),l}function c(){window.localStorage.setItem("projects",JSON.stringify(t));let n=document.getElementById("menu-content");document.getElementById("menu-content").innerHTML="";for(let e of t)n.appendChild(a(e));e=!1}function d(t,n){if(!0===e)return;let r=document.getElementById("menu-content"),i=0;if(t)for(let e of r.children)if(i+=e.clientHeight,i>r.clientHeight-25)return alert("Max number of projects reached."),!1;let a=document.querySelector("#container"),l=document.createElement("div");l.id="project-form-container";let c=document.createElement("form");c.id="project-form",c.onsubmit=function(){return!1};let d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("name","project-name"),d.setAttribute("required",t),d.id="project-name",t?d.placeholder="Project Name":t||(d.value=n.name,d.placeholder="New Name"),c.appendChild(d);let u=document.createElement("input");u.setAttribute("type","button"),u.id="submit-project",t?(u.value="Create Project",u.addEventListener("click",(function(){o(t)}))):t||(u.value="Change Name",u.addEventListener("click",(function(){o(t,n)}))),d.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),u.click())})),c.appendChild(u),l.appendChild(c),a.appendChild(l),e=!0}function o(n,i){let a=document.getElementById("submit-project"),l=document.querySelector("#project-name").value;if(n){if(""!=l.trim()){let e=new r(l);t.push(e),window.localStorage.setItem("projects",JSON.stringify(t)),c(),a.parentElement.parentElement.parentElement.removeChild(a.parentElement.parentElement)}}else""==!l.trim()&&(i.name=l,window.localStorage.setItem("projects",JSON.stringify(t)),c(),a.parentElement.parentElement.parentElement.removeChild(a.parentElement.parentElement));e=!1}return{menuButtonFunctionality:function(){document.getElementById("hamburger-menu").addEventListener("click",(function(){let e=document.getElementById("menu");"none"===e.style.display?e.style.display="block":e.style.display="none"}))},addProject:function(){document.getElementById("add-project").addEventListener("click",(function(){d(!0)}))},projects:t,updateMenu:c}};!function(){const e=c();e.menuButtonFunctionality(),e.addProject();let t=document.querySelector("#menu-content");t.children.length>0&&t.children[0].children[0].click()}()}]);