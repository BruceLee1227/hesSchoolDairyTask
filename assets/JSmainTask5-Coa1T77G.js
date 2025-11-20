import"./main-ciEVoxAm.js";let i=[{id:0,name:"肥宅心碎賞櫻3日",imgUrl:"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",area:"高雄",description:"賞櫻花最佳去處。肥宅不得不去的超讚景點！",group:87,price:1400,rate:10},{id:1,name:"貓空纜車雙程票",imgUrl:"https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台北",description:"乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",group:99,price:240,rate:2},{id:2,name:"台中谷關溫泉會1日",imgUrl:"https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",area:"台中",description:"全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",group:20,price:1765,rate:7}];const o=document.querySelector(".ticketCard-area"),l=document.querySelector("#searchResult-text");function a(e){let t="";e.forEach(function(r){t+=` <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${r.imgUrl}" alt="">
      </a>
      <div class="ticketCard-region">${r.area}</div>
      <div class="ticketCard-rank">${r.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>${r.name}</h3>
        <p>
          ${r.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">剩下最後 <span>${r.group}</span> 組</p>
        <p class="ticketCard-price">TWD <span>$${r.price}</span></p>
      </div>
    </div>
  </li>`}),o.innerHTML=t,l.textContent=`本次搜尋共 ${e.length} 筆資料`}a(i);const c=document.querySelector(".regionSearch"),n=document.querySelector(".cantFind-area");function s(){let e=[];i.forEach(function(t){t.area===c.value?e.push(t):c.value||e.push(t)}),e.length>0?n.style.display="none":n.style.display="block",a(e)}c.addEventListener("change",function(){s()});const d=document.querySelector("#ticketName"),u=document.querySelector("#ticketImgUrl"),p=document.querySelector("#ticketRegion"),m=document.querySelector("#ticketPrice"),f=document.querySelector("#ticketNum"),k=document.querySelector("#ticketRate"),g=document.querySelector("#ticketDescription"),h=document.querySelector(".addTicket-btn"),v=document.querySelector(".addTicket-form");function y(){let e={id:i.length,name:d.value.trim(),imgUrl:u.value.trim(),area:p.value.trim(),description:g.value.trim(),group:Number(f.value.trim()),price:Number(m.value.trim()),rate:Number(k.value.trim())},t="";if(e.name?e.imgUrl?e.area?e.price<=0?t="套票金額必須大於 0!":e.group<1?t="套票組數必須至少為 1!":e.rate<1||e.rate>10?t="套票星級必須在 1 至 10 之間!":e.description.length>100&&(t="套票描述必填，且不能超過 100 字!"):t="請選擇地區!":t="圖片網址為必填!":t="套票名稱為必填!",t){alert(t);return}i.push(e),c.value="",a(i),v.reset()}h.addEventListener("click",function(){y()});
