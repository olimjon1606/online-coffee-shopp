let navbar = document.querySelector('.navbar');
let col = document.querySelector('.color');

function message() {
    alert("This product added to your cart!");
    col.classList.toggle("col")
    console.log(col.classList)
}
function message2() {
    alert("This product added to favourites!");
    col.classList.toggle("col")
}
function cart() {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.card-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let marker = document.querySelector('#marker');
let list = document.querySelectorAll('ul li ');
let marker2 = document.querySelector('#marker2')

function moveIndicator(e) {
    marker.style.left = e.offsetLeft + 'px';
    marker.style.right = e.offsetRight + 'px';
    marker.style.width = e.offsetWidth + 'px';
    marker2.style.top = e.offsetTop + 'px';
    marker2.style.bottom = e.offsetBottom + 'px';
    marker2.style.width = e.offsetWidth + 'px';
}

list.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        moveIndicator(e.target)
    })
})

function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active1'));
    this.classList.add('active1');
    list.forEach((item) =>
        item.addEventListener('mouseover', activeLink));
}
function cardclick() {
    var paylike = Paylike('your key');
    paylike.popup({
        currency: 'DKK',
        amount: 1000,
    }, function (err, res) {
        if (err)
            return console.log(err);
        console.log(res.transaction.id);
        alert('Thank you!');
    });
}
