import"./main-CyC-Ec_t.js";let r=[];const o="https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json",l=document.querySelector(".ticketCard-area"),s=document.querySelector("#searchResult-text");function n(e){let t="";e.forEach(function(c){t+=` <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${c.imgUrl}" alt="">
      </a>
      <div class="ticketCard-region">${c.area}</div>
      <div class="ticketCard-rank">${c.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>${c.name}</h3>
        <p>
          ${c.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">剩下最後 <span>${c.group}</span> 組</p>
        <p class="ticketCard-price">TWD <span>$${c.price}</span></p>
      </div>
    </div>
  </li>`}),l.innerHTML=t,s.textContent=`本次搜尋共 ${e.length} 筆資料`}const i=document.querySelector(".regionSearch"),a=document.querySelector(".cantFind-area");function u(){let e=[];r.forEach(function(t){t.area===i.value?e.push(t):i.value||e.push(t)}),e.length>0?a.style.display="none":a.style.display="block",n(e)}i.addEventListener("change",function(){u()});const d=document.querySelector("#ticketName"),m=document.querySelector("#ticketImgUrl"),k=document.querySelector("#ticketRegion"),p=document.querySelector("#ticketPrice"),f=document.querySelector("#ticketNum"),g=document.querySelector("#ticketRate"),v=document.querySelector("#ticketDescription"),h=document.querySelector(".addTicket-btn"),y=document.querySelector(".addTicket-form");function S(){let e={id:r.length,name:d.value.trim(),imgUrl:m.value.trim(),area:k.value.trim(),description:v.value.trim(),group:Number(f.value.trim()),price:Number(p.value.trim()),rate:Number(g.value.trim())},t="";if(e.name?e.imgUrl?e.area?e.price<=0?t="套票金額必須大於 0!":e.group<1?t="套票組數必須至少為 1!":e.rate<1||e.rate>10?t="套票星級必須在 1 至 10 之間!":e.description.length>100&&(t="套票描述必填，且不能超過 100 字!"):t="請選擇地區!":t="圖片網址為必填!":t="套票名稱為必填!",t){alert(t);return}r.push(e),i.value="",n(r),y.reset()}h.addEventListener("click",function(){S()});function q(){axios.get(o).then(function(e){r=e.data.data,console.log(r),n(r)}).catch(function(){console.log("資料有誤，無法取得資料")})}q();
