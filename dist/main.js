!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){this.name=e,this.taskArray=[],this.editName=function(e){this.name=e},this.addTask=function(e){this.taskArray.push(e)}}function i(e,t,n,r){this.name=e,this.description=t,this.priority=n,this.dueDate=r,this.editTask=function(e,t,n,r){this.name=e,this.description=t,this.priority=n,this.dueDate=r}}function a(e){function t(t){t.style.backgroundColor=["darkolivegreen","gold","maroon"][e],t.innerHTML=["Low","Medium","High"][e]}return{createButton:function(){let n=document.createElement("button");return t(n),n.className="priority-button",n.addEventListener("click",(function(){++e>2&&(e=0),e=e,t(n)})),n},getPriority:function(){return e}}}n.r(t);const c=()=>{function e(e,n){let r=document.createElement("div");r.className="task-container";let i=document.createElement("div");i.className="task-props";let c=document.createElement("input");c.setAttribute("type","checkbox"),c.className="task-status";let l=document.createElement("div");l.className="task-name",l.innerHTML=e.name;let d=document.createElement("div");d.className="task-description",d.innerHTML=e.description;let o=a(e.priority),u=document.createElement("input");u.setAttribute("type","date"),u.value=e.dueDate,u.className="task-duedate";let m=document.createElement("div");m.className="task-options";let p=document.createElement("img");p.src="styling/images/trash.png",p.className="menu-project-del",p.addEventListener("click",(function(e){let r=document.querySelector("#tasks-container"),i=Array.from(r.children).indexOf(e.target.parentElement)-1;n.taskArray.splice(i,1),t(n)}));let s=document.createElement("img");return s.src="styling/images/edit.png",s.className="menu-project-edit",m.appendChild(p),m.appendChild(s),i.appendChild(c),i.appendChild(l),i.appendChild(d),i.appendChild(o.createButton()),i.appendChild(u),r.appendChild(i),r.appendChild(m),r}function t(n){console.log(n),document.querySelector("#tasks-container").innerHTML="";let r=document.querySelector("#tasks-container"),c=document.createElement("div");c.id="task-title";let l=document.createElement("div");l.id="task-header";let d=document.createElement("h3");l.appendChild(d);let o=document.createElement("h3");o.innerHTML="Task",l.appendChild(o);let u=document.createElement("h3");u.innerHTML="Description",l.appendChild(u);let m=document.createElement("h3");m.innerHTML="Priority",l.appendChild(m);let p=document.createElement("h3");p.innerHTML="Due Date",l.appendChild(p);let s=document.createElement("h2");s.innerHTML=n.name,s.id="interface-project-name";let f=document.createElement("button");f.id="add-task",f.innerHTML="Add Task",f.addEventListener("click",(function(){!function(e){let n=document.querySelector("#container"),r=document.createElement("div"),c=document.createElement("form");r.id="task-form-container",c.id="task-form",c.onsubmit=function(){return!1};let l=document.createElement("input");l.setAttribute("type","text"),l.id="task-name",c.appendChild(l);let d=document.createElement("input");d.setAttribute("type","text"),d.id="task-description",c.appendChild(d);let o=a(0);c.appendChild(o.createButton());let u=document.createElement("input");u.setAttribute("type","date"),u.id="task-due-date",c.appendChild(u);let m=document.createElement("button");m.id="add-task-submit",m.innerHTML="Add Task",m.addEventListener("click",(function(){let n=new i(l.value,d.value,o.getPriority(),u.value);e.addTask(n),t(e),m.parentElement.parentElement.parentElement.removeChild(m.parentElement.parentElement)})),c.appendChild(m),r.appendChild(c),n.appendChild(r)}(n)})),c.appendChild(s),c.appendChild(f),r.appendChild(c),r.appendChild(l);for(let t of n.taskArray)r.appendChild(e(t,n))}return{populateInterface:t}},l=()=>{let e=[],t=!1;const n=c();function i(t,r=!1){let i=document.querySelector("#tasks-container"),c=document.getElementById("menu-content"),d=document.createElement("div");d.className="menu-project";let o=document.createElement("div");o.className="menu-project-options";let u=document.createElement("h4");u.className="menu-project-title",u.innerHTML=t.name,u.addEventListener("click",(function(){i.style.display="block",n.populateInterface(t)})),d.appendChild(u);let m=document.createElement("img");m.className="menu-project-edit",m.src="styling/images/edit.png",m.addEventListener("click",(function(){l(!1,t)})),o.appendChild(m);let p=document.createElement("img");return p.className="menu-project-del",p.src="styling/images/trash.png",p.addEventListener("click",(function(t){let n=Array.from(c.children).indexOf(t.target.parentElement.parentElement);e.splice(n,1),a()})),o.appendChild(p),r?r&&d.classList.add("all-projects"):d.appendChild(o),d}function a(){let n=document.getElementById("menu-content");document.getElementById("menu-content").innerHTML="";for(let t of e)n.appendChild(i(t));t=!1}function l(e,n){if(!0===t)return;let r=document.getElementById("menu-content"),i=0;if(e)for(let e of r.children)if(i+=e.clientHeight,i>r.clientHeight-25)return alert("Max number of projects reached."),!1;let a=document.querySelector("#container"),c=document.createElement("div");c.id="project-form-container";let l=document.createElement("form");l.id="project-form",l.onsubmit=function(){return!1};let o=document.createElement("input");o.setAttribute("type","text"),o.setAttribute("name","project-name"),o.setAttribute("required",e),o.id="project-name",e?o.placeholder="Project Name":e||(o.value=n.name,o.placeholder="New Name"),l.appendChild(o);let u=document.createElement("input");u.setAttribute("type","button"),u.id="submit-project",e?(u.value="Create Project",u.addEventListener("click",(function(){d(e)}))):e||(u.value="Change Name",u.addEventListener("click",(function(){d(e,n)}))),o.addEventListener("keyup",(function(e){13===event.keyCode&&(event.preventDefault(),u.click())})),l.appendChild(u),c.appendChild(l),a.appendChild(c),t=!0}function d(n,i){let c=document.getElementById("submit-project"),l=document.querySelector("#project-name").value;if(n){if(""!=l.trim()){let t=new r(l);e.push(t),a(),c.parentElement.parentElement.parentElement.removeChild(c.parentElement.parentElement)}}else""==!l.trim()&&(i.name=l,a(),c.parentElement.parentElement.parentElement.removeChild(c.parentElement.parentElement));t=!1}return{menuButtonFunctionality:function(){document.getElementById("hamburger-menu").addEventListener("click",(function(){let e=document.getElementById("menu");"none"===e.style.display?e.style.display="block":e.style.display="none"}))},addProject:function(){document.getElementById("add-project").addEventListener("click",(function(){l(!0)}))},projects:e,updateMenu:a}};!function(){const e=l();e.menuButtonFunctionality(),e.addProject();let t=new r("Default Project");e.projects.push(t),e.updateMenu();let n=document.querySelector("#tasks-container");0===e.projects[0].taskArray.length&&(n.style.display="none")}()}]);