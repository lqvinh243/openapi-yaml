window.addEventListener('DOMContentLoaded', async function () {
    var g = document.getElementsByTagName("body")[0];
    g.style.display= "flex";
    var swagger_ui = g.childNodes[1];
    swagger_ui.style.width = "100%";
    swagger_ui.style.marginLeft = "20%";
    var parent_menu =document.createElement("div");
    var menu = document.createElement("div");
    parent_menu.appendChild(menu);
    g.insertBefore(menu,g.firstElementChild.nextElementSibling);
    menu.style.width = "20%";
    menu.style.position = "fixed"
    menu.style.top = 0;
    menu.style.bottom = 0;
    menu.style.overflowY = "scroll";
    menu.style.overflowX = "hidden";


    await fetch("/dist/common/listapi.json").
    then(async data=>{ 
        jsonob = await data.json();
        var listUrl = `<ul class="list-group">`;
        jsonob.routers.forEach((value)=>{
            
            listUrl +=`<li class="list-group-item">`;
             listUrl +=`<a href="/${jsonob.prefix}/${value.router}"> ${value.router} <br> </a>`;
            listUrl +=` </li>`;
            
        });
        
        listUrl +=` </ul>`;
        menu.innerHTML = listUrl;
    });    
});