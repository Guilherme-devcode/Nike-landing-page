function imgSlider(slider){
    document.querySelector('.tenis').src = slider;
}
function changeBackground(color){
    const backgroundColor = document.querySelector('.tone-2');
    backgroundColor.style.background = color;
}
function changeTitle(Title){
    document.querySelector('.title-shoes').textContent = Title
}
function changePrice(price){
    document.querySelector('.price').textContent = price
}