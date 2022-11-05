const addTicketBtn = document.querySelector('.addTicket-btn');
const cardList = document.querySelector('.ticketCard-area');

let card = "";
let data
const dataUrl = "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";

function getData() {
  axios.get(dataUrl)
    .then((res) => {
      data = res.data.data;
      data.forEach((item) => {
        card += `
          <li class="ticketCard">
            <div class="ticketCard-img">
              <a href="#">
                <img
                  src="${item.imgUrl}"
                  alt=""
                />
              </a>
              <div class="ticketCard-region">${item.area}</div>
              <div class="ticketCard-rank">${item.rate}</div>
            </div>
            <div class="ticketCard-content">
              <div>
                <h3>
                  <a href="#" class="ticketCard-name">${item.name}</a>
                </h3>
                <p class="ticketCard-description">
                  ${item.description}
                </p>
              </div>
              <div class="ticketCard-info">
                <p class="ticketCard-num">
                  <span><i class="fas fa-exclamation-circle"></i></span>
                  剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                </p>
                <p class="ticketCard-price">
                  TWD <span id="ticketCard-price">$${item.price}</span>
                </p>
              </div>
            </div>
          </li>
        `;
      })
      cardList.innerHTML = card;
    })
}

getData(); // 初始渲染頁面

addTicketBtn.addEventListener('click', () => {
  return alert("第六週 API 沒有 post");
});