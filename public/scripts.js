const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards){
  card.addEventListener("click", function(){
    const cardId = card.getAttribute("id");
    const title = card.querySelector(".title_card").innerHTML;
    const chef = card.querySelector(".chef_card").innerHTML;

    modalOverlay.classList.add('active');
    modalOverlay.querySelector("img").src=`assets/${cardId}`;
    modalOverlay.querySelector(".title_modal").innerHTML=`${title}`
    modalOverlay.querySelector(".chef_modal").innerHTML=`${chef}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active");
  modalOverlay.querySelectorAll('img').src="";
})