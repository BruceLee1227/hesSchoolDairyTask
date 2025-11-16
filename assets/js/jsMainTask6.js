let data = [];
const url =
  "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
const ticketCardArea = document.querySelector(".ticketCard-area");
const searchResultText = document.querySelector("#searchResult-text");
//lv1 渲染資料
function renderData(data) {
  let str = "";
  data.forEach(function (item) {
    str += ` <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img src="${item.imgUrl}" alt="">
      </a>
      <div class="ticketCard-region">${item.area}</div>
      <div class="ticketCard-rank">${item.rate}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>${item.name}</h3>
        <p>
          ${item.description}
        </p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">剩下最後 <span>${item.group}</span> 組</p>
        <p class="ticketCard-price">TWD <span>$${item.price}</span></p>
      </div>
    </div>
  </li>`;
  });
  ticketCardArea.innerHTML = str;
  searchResultText.textContent = `本次搜尋共 ${data.length} 筆資料`;
}
// renderData(data);
// LV3篩選
const regionSearch = document.querySelector(".regionSearch");
// console.log(regionSearch.value);
const cantFindArea = document.querySelector(".cantFind-area");
// 篩選資料
function filterData() {
  //建立filterResult陣列
  let filterResult = [];
  //如果regionSearch.value和data.area相同就push到filterResult陣列
  data.forEach(function (item) {
    if (item.area === regionSearch.value) {
      filterResult.push(item);
    } //如果regionSearch.value是全部就push全部data到filterResult陣列
    else if (!regionSearch.value) {
      filterResult.push(item);
    }
  });
  // 判斷篩選結果是否有資料
  if (filterResult.length > 0) {
    cantFindArea.style.display = "none";
  } else {
    cantFindArea.style.display = "block";
  }
  renderData(filterResult);
}
regionSearch.addEventListener("change", function () {
  filterData();
});
// LV3 新增套票
//取到表單元素
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketBtn = document.querySelector(".addTicket-btn");
const addTicketForm = document.querySelector(".addTicket-form");
//新增套票函式
function addTicket() {
  //建立物件
  let obj = {
    id: data.length,
    name: ticketName.value.trim(),
    imgUrl: ticketImgUrl.value.trim(),
    area: ticketRegion.value.trim(),
    description: ticketDescription.value.trim(),
    group: Number(ticketNum.value.trim()),
    price: Number(ticketPrice.value.trim()),
    rate: Number(ticketRate.value.trim()),
  };
  //   驗證
  let errMsg = "";
  if (!obj.name) {
    errMsg = "套票名稱為必填!";
  } else if (!obj.imgUrl) {
    errMsg = "圖片網址為必填!";
  } else if (!obj.area) {
    errMsg = "請選擇地區!";
  } else if (obj.price <= 0) {
    errMsg = "套票金額必須大於 0!";
  } else if (obj.group < 1) {
    errMsg = "套票組數必須至少為 1!";
  } else if (obj.rate < 1 || obj.rate > 10) {
    errMsg = "套票星級必須在 1 至 10 之間!";
  } else if (obj.description.length > 100) {
    errMsg = "套票描述必填，且不能超過 100 字!";
  }
  if (errMsg) {
    alert(errMsg);
    return;
  }
  //建立完物件後將物件加入data陣列
  data.push(obj);
  //將下拉選單設為預設值
  regionSearch.value = "";
  renderData(data);
  // 清空表單
  addTicketForm.reset();
}
addTicketBtn.addEventListener("click", function () {
  addTicket();
});
// axios 取得遠端資料
function getData() {
  axios
    .get(url)
    .then(function (response) {
      //   取到資料後放進data陣列
      data = response.data.data;
      console.log(data);
      //   渲染資料
      renderData(data);
    })
    .catch(function () {
      console.log("資料有誤，無法取得資料");
    });
}

// async await 取得遠端資料
// async function getData() {
//   try {
//     const response = await axios.get(url);
//     data = response.data.data;
//     renderData(data);
//   } catch {
//     console.log("資料有誤，無法取得資料");
//   }
// }
getData();
