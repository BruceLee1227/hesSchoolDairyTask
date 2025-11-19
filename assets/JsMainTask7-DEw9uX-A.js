import"./main-CyC-Ec_t.js";let r=[];const u="https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json",d=document.querySelector(".ticketCard-area"),f=document.querySelector("#searchResult-text");function o(t){let e="";t.forEach(function(c){e+=` <li class="ticketCard">
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
  </li>`}),d.innerHTML=e,f.textContent=`本次搜尋共 ${t.length} 筆資料`}const i=document.querySelector(".regionSearch"),l=document.querySelector(".cantFind-area");function m(){let t=[];r.forEach(function(e){e.area===i.value?t.push(e):i.value||t.push(e)}),t.length>0?l.style.display="none":l.style.display="block",o(t)}i.addEventListener("change",function(){m()});const h=document.querySelector("#ticketName"),p=document.querySelector("#ticketImgUrl"),k=document.querySelector("#ticketRegion"),g=document.querySelector("#ticketPrice"),v=document.querySelector("#ticketNum"),y=document.querySelector("#ticketRate"),S=document.querySelector("#ticketDescription"),q=document.querySelector(".addTicket-btn"),C=document.querySelector(".addTicket-form");function b(){let t={id:r.length,name:h.value.trim(),imgUrl:p.value.trim(),area:k.value.trim(),description:S.value.trim(),group:Number(v.value.trim()),price:Number(g.value.trim()),rate:Number(y.value.trim())},e="";if(t.name?t.imgUrl?t.area?t.price<=0?e="套票金額必須大於 0!":t.group<1?e="套票組數必須至少為 1!":t.rate<1||t.rate>10?e="套票星級必須在 1 至 10 之間!":t.description.length>100&&(e="套票描述必填，且不能超過 100 字!"):e="請選擇地區!":e="圖片網址為必填!":e="套票名稱為必填!",e){alert(e);return}r.push(t),i.value="",o(r),C.reset()}q.addEventListener("click",function(){b(),s(r)});function $(){axios.get(u).then(function(t){r=t.data.data,console.log(r),o(r),s(r)}).catch(function(){console.log("資料有誤，無法取得資料")})}$();function s(t){let e={};t.forEach(function(a){e[a.area]==null?e[a.area]=1:e[a.area]+=1});let c=[];Object.keys(e).forEach(function(a){let n=[];n.push(a),n.push(e[a]),c.push(n)}),c3.generate({bindto:"#chart",size:{width:200,height:200},data:{type:"donut",columns:c,colors:{高雄:"#E68618",台中:"#5151D3",台北:"#26BFC7"}},donut:{title:"套票地區比重",width:10,label:{show:!1}}})}
