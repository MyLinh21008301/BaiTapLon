//ShowSlide
const imgPosition = document.querySelectorAll(".bannerItem img");
              const imContainer = document.querySelector(".bannerItem");
              let index = 0;
              let sumImg = imgPosition.length;
              imgPosition.forEach(function (image, index) {
                image.style.left = index * 100 + "%";
              });
              function imgSlide() {
                index++;
                if (index >= sumImg) {
                  index = 0;
                }
                imContainer.style.left = "-" + index * 100 + "%";
              }
              setInterval(imgSlide,3000)


//ShowMenuPoster
const imgPosition1 =
                  document.querySelectorAll(".PosterBoxMenu img");
                const imContainer1 = document.querySelector(".PosterBoxMenu");
                const imgItem1 = document.querySelector(".poster1");
                const imgItem2 = document.querySelector(".poster2");
                const imgItem3 = document.querySelector(".poster3");
                let index1 = 0;
                let sumImg1 = imgPosition1.length;
                imgPosition1.forEach(function (image1, index1) {
                  image1.style.left = index1 * 100 + "%";
                });
                function imgSlide1() {
                  index1++;
                  if (index1 >= sumImg1) {
                    index1 = 0;
                  }
                  if (index1 === 1) {
                    imgItem1.style.opacity = 1;
                    imContainer1.style.left = "-" + index1 * 100 + "%";
                  } else if (index1 === 2) {
                    imgItem2.style.opacity = 1;
                    imContainer1.style.left = "-" + index1 * 100 + "%";
                  } else if (index1 === 3) {
                    imgItem3.style.opacity = 1;
                    imContainer1.style.left = "-" + index1 * 100 + "%";
                  } else {
                    imgItem1.style.opacity = 0;
                    imgItem2.style.opacity = 0;
                    imgItem3.style.opacity = 0;
                  }
                }
                setInterval(imgSlide1, 3000);




//chuyenTab
const listPane = document.querySelectorAll('.tabPane')
const listTab= document.querySelectorAll('.tabItem');

listTab.forEach((tab,index) => {
  const pane = listPane[index]
  tab.onclick = function () {
    document.querySelector('.tabItem.active').classList.remove('active')
    document.querySelector('.tabPane.active').classList.remove('active')
    this.classList.add('active')
    pane.classList.add('active')
  }
    
})


//ShowCart

const btnCart = document.querySelector(".cartBox");
        const x = document.querySelector(".myCart");

        btnCart.onclick= function (){
          if(x.classList.contains("addDisplay")){
            x.classList.remove("addDisplay")

         }else{
            x.classList.add("addDisplay")
          }
        }
//addToCart
const listProduct = document.querySelectorAll(".boxDrinkItem");
const quantity = document.querySelector(".quantity");
const addToCard = document.querySelectorAll(".fa-cart-plus");
const listProductInCart = document.querySelector(".listProduct");

let productsInCart = []; // Khởi tạo mảng chứa các sản phẩm đã thêm vào giỏ hàng
var img;
var productName;
var productPrice;
let count =0;

// Khởi tạo biến pro và prod
let pro = [];
let prod = [];

addToCard.forEach((item, i) => {
  const product = listProduct[i];
  
  item.onclick = function() {
    
    img = product.children[0].getAttribute("src");
    productName = product.children[1].children[0].innerText;
    productPrice = product.children[1].children[1].children[0].innerText;

    // Kiểm tra xem sản phẩm đã được thêm vào giỏ hàng hay chưa
    const productInCartIndex = productsInCart.findIndex(
      p => p.name === productName
    );

    if (productInCartIndex !== -1) {
      // Sản phẩm đã có trong giỏ hàng, cập nhật số lượng và hiển thị trên giao diện
      productsInCart[productInCartIndex].qty+=1;
      const productItem = document.querySelector(
        `.listProduct .ProductItem:nth-child(${productInCartIndex + 1})`
      );
      productItem.querySelector(".input-qty").value = productsInCart[productInCartIndex].qty;
      listProductInCart.children[productInCartIndex].children[2].value=prod[productInCartIndex];
    } else {
      // Sản phẩm chưa có trong giỏ hàng, thêm vào giỏ hàng và đẩy vào mảng
      const qty = 1;
      count++;
      quantity.innerHTML = "" + count;
      productsInCart.push({
        name: productName,
        qty: qty,
        price: productPrice,
        img: img
      });
      pro.push(qty);
      prod.push(qty);
  
      listProductInCart.innerHTML += `<div class="ProductItem">
        <img src="${img}" alt="" style="width: 55px;">
        <p class="NameOfProduct">${productName}</p>
        <div class="buttons_added">
          <input aria-label="quantity" class="input-qty" max="20" min="0" name="" type="number" value="${qty}">
        </div>
        <p class="priceOfProduct">${productPrice}</p>
        <button class="Delete"><i class="fa-solid fa-trash-can"></i></button>
      </div>`;
        }
    cartTotal();
    deleteProduct();
    
  };
});


function cartTotal(){
  var subtotal =0;
  for(var i=0;i<productsInCart.length;i++){
    var price = parseFloat(productsInCart[i].price)
    var qty =  productsInCart[i].qty
    var totalItem = price*qty;
    subtotal+=totalItem;
  }
  total = document.querySelector(".Total")
  stotal = total.children[1]
  stotal.innerHTML="$"+subtotal

  // console.log(subtotal)

}

function deleteProduct(){
  const deleteButtons = document.querySelectorAll(".Delete");

  deleteButtons.forEach((button, index) => {
    button.onclick = function() {
      // Xóa sản phẩm khỏi mảng productsInCart và các mảng liên quan
      productsInCart.splice(index, 1);
      pro.splice(index, 1);
      prod.splice(index, 1);
  
      // Xóa phần tử tương ứng trên giao diện
      const productItem = document.querySelector(
        `.listProduct .ProductItem:nth-child(${index + 1})`
      );
      productItem.remove();

      // Cập nhật lại số lượng product trong giỏ hàng (quantity)
      count--;
      quantity.innerHTML = "" + count;
  
      // Cập nhật lại tổng giá trị giỏ hàng
      cartTotal();
    };
  });
}

// Phần menu
var flagActiveMainMenu = 0;
var flagActiveFrapcappuccinoMenu = 0;
var flagActiveTeaMenu = 0;
var flagActiveOthersMenu = 0;

const pagingLeft = document.querySelector('.menu__paging--left');
const pagingRight = document.querySelector('.menu__paging--right');

const pagingLeftFrappuccino = document.querySelector('.menu__paging--Frappuccino-left');
const pagingRightFrappuccino = document.querySelector('.menu__paging--Frappuccino-right');

const pagingLeftTea = document.querySelector('.menu__paging--Tea-left');
const pagingRightTea = document.querySelector('.menu__paging--Tea-right');

const pagingLeftOthers = document.querySelector('.menu__paging--Others-left');
const pagingRightOthers = document.querySelector('.menu__paging--Others-right');

const listMenu = document.querySelectorAll('.Main-Menu');
const listMenuNumber= document.querySelectorAll('.menu__paging--number');

const listMenuFrappuccino = document.querySelectorAll('.Main-Menu.Menu-Frappuccino');
const listMenuFrappuccinoNumber= document.querySelectorAll('.menu__paging--Frappuccino-number');

const listMenuTea = document.querySelectorAll('.Main-Menu.Menu-Tea');
const listMenuTeaNumber= document.querySelectorAll('.menu__paging--Tea-number');

const listMenuOthers = document.querySelectorAll('.Main-Menu.Menu-Others');
const listMenuOthersNumber = document.querySelectorAll('.menu__paging--Others-number');

const allInput = document.querySelector('#All');
allInput.checked = true;
const coffeeInput = document.querySelector('#Coffee');
const cocoaInput = document.querySelector('#Cocoa');
const frappuccinoInput = document.querySelector('#Frappuccino');
const teaInput = document.querySelector('#Tea');
const orthersInput = document.querySelector('#Others');

allInput.addEventListener('change', function(e) {
  if (this != null) {
    menuActive(0);
    document.querySelector('.menu__paging--Frappuccino').style.display = 'none';
    document.querySelector('.menu__paging--Tea').style.display = 'none';
    document.querySelector('.menu__paging--Others').style.display = 'none';
    document.querySelector('.menu__paging').style.display = 'block';
  }
});
coffeeInput.addEventListener('change', function(e) {
  if (this != null) {
    document.querySelector('.Main-Menu.active').classList.remove('active');
    document.querySelector('.menu__paging').style.display = 'none';
    document.querySelector('.Main-Menu.Menu-Coffee').classList.add('active');
    document.querySelector('.menu__paging--Frappuccino').style.display = 'none';
    document.querySelector('.menu__paging--Tea').style.display = 'none';
    document.querySelector('.menu__paging--Others').style.display = 'none';
  }
});
frappuccinoInput.addEventListener('change', function(e) {
  if (this != null) {
    menuFrappuccinoActive(0);
    document.querySelector('.Main-Menu.active').classList.remove('active');
    document.querySelector('.menu__paging').style.display = 'none';
    document.querySelector('.Main-Menu.Menu-Frappuccino').classList.add('active');
    document.querySelector('.menu__paging--Tea').style.display = 'none';
    document.querySelector('.menu__paging--Others').style.display = 'none';
    document.querySelector('.menu__paging--Frappuccino').style.display = 'block';
  }
});
cocoaInput.addEventListener('change', function(e) {
  if (this != null) {
    document.querySelector('.Main-Menu.active').classList.remove('active');
    document.querySelector('.menu__paging').style.display = 'none';
    document.querySelector('.Main-Menu.Menu-Cocoa').classList.add('active');
    document.querySelector('.menu__paging--Frappuccino').style.display = 'none';
    document.querySelector('.menu__paging--Tea').style.display = 'none';
    document.querySelector('.menu__paging--Others').style.display = 'none';

  }
});
teaInput.addEventListener('change', function(e) {
  if (this != null) {
    menuTeaActive(0);
    document.querySelector('.Main-Menu.active').classList.remove('active');
    document.querySelector('.menu__paging').style.display = 'none';
    document.querySelector('.Main-Menu.Menu-Tea').classList.add('active');
    document.querySelector('.menu__paging--Frappuccino').style.display = 'none';
    document.querySelector('.menu__paging--Others').style.display = 'none';
    document.querySelector('.menu__paging--Tea').style.display = 'block';
  }
});

orthersInput.addEventListener('change', function(e) {
  if (this != null) {
    menuOthersActive(0);
    document.querySelector('.Main-Menu.active').classList.remove('active');
    document.querySelector('.menu__paging').style.display = 'none';
    document.querySelector('.Main-Menu.Menu-Others').classList.add('active');
    document.querySelector('.menu__paging--Frappuccino').style.display = 'none';
    document.querySelector('.menu__paging--Tea').style.display = 'none';
    document.querySelector('.menu__paging--Others').style.display = 'block';
  }
});

listMenuNumber.forEach((number, index) => {
  const flag = listMenu[index];
  number.onclick = function() {
    flagActiveMainMenu = index;
    menuActive(index);
  }
})

function menuActive(index) {
  document.querySelector('.Main-Menu.active').classList.remove('active');
  document.querySelector('.menu__paging--number.active').classList.remove('active');
  listMenuNumber[index].classList.add('active');
  listMenu[index].classList.add('active');
}

pagingLeft.onclick = function() {
  if (flagActiveMainMenu > 0) {
    flagActiveMainMenu -= 1;
    menuActive(flagActiveMainMenu);
  } else if (flagActiveMainMenu == 0) {
    flagActiveMainMenu = 4;
    menuActive(flagActiveMainMenu);
  }
}

pagingRight.onclick = function() {
  if (flagActiveMainMenu < 4) {
    flagActiveMainMenu += 1;
    menuActive(flagActiveMainMenu);
  } else if (flagActiveMainMenu == 4) {
    flagActiveMainMenu = 0;
    menuActive(flagActiveMainMenu);
  }
}


listMenuFrappuccinoNumber.forEach((number, index) => {
  const flag = listMenuFrappuccino[index];
  number.onclick = function() {
    flagActiveFrapcappuccinoMenu = index;
    menuFrappuccinoActive(index);
  }
})

function menuFrappuccinoActive(index) {
  document.querySelector('.Main-Menu.active').classList.remove('active');
  document.querySelector('.menu__paging--Frappuccino-number.active').classList.remove('active');
  listMenuFrappuccinoNumber[index].classList.add('active');
  listMenuFrappuccino[index].classList.add('active');
}

pagingLeftFrappuccino.onclick = function() {
  if (flagActiveFrapcappuccinoMenu > 0) {
    flagActiveFrapcappuccinoMenu -= 1;
    menuFrappuccinoActive(flagActiveFrapcappuccinoMenu);
  } else if (flagActiveFrapcappuccinoMenu == 0) {
    flagActiveFrapcappuccinoMenu = 1;
    menuFrappuccinoActive(flagActiveFrapcappuccinoMenu);
  }
}

pagingRightFrappuccino.onclick = function() {
  if (flagActiveFrapcappuccinoMenu < 1) {
    flagActiveFrapcappuccinoMenu += 1;
    menuFrappuccinoActive(flagActiveFrapcappuccinoMenu);
  } else if (flagActiveFrapcappuccinoMenu == 1) {
    flagActiveFrapcappuccinoMenu = 0;
    menuFrappuccinoActive(flagActiveFrapcappuccinoMenu);
  }
}



listMenuTeaNumber.forEach((number, index) => {
  const flag = listMenuTea[index];
  number.onclick = function() {
    flagActiveTeaMenu = index;
    menuTeaActive(index);
  }
})

function menuTeaActive(index) {
  document.querySelector('.Main-Menu.active').classList.remove('active');
  document.querySelector('.menu__paging--Tea-number.active').classList.remove('active');
  listMenuTeaNumber[index].classList.add('active');
  listMenuTea[index].classList.add('active');
}

pagingLeftTea.onclick = function() {
  if (flagActiveTeaMenu > 0) {
    flagActiveTeaMenu -= 1;
    menuTeaActive(flagActiveTeaMenu);
  } else if (flagActiveTeaMenu == 0) {
    flagActiveTeaMenu = 1;
    menuTeaActive(flagActiveTeaMenu);
  }
}

pagingRightTea.onclick = function() {
  if (flagActiveTeaMenu < 1) {
    flagActiveTeaMenu += 1;
    menuTeaActive(flagActiveTeaMenu);
  } else if (flagActiveTeaMenu == 1) {
    flagActiveTeaMenu = 0;
    menuTeaActive(flagActiveTeaMenu);
  }
}

//

listMenuOthersNumber.forEach((number, index) => {
  const flag = listMenuOthers[index];
  number.onclick = function() {
    flagActiveOthersMenu = index;
    menuOthersActive(index);
  }
})

function menuOthersActive(index) {
  document.querySelector('.Main-Menu.active').classList.remove('active');
  document.querySelector('.menu__paging--Others-number.active').classList.remove('active');
  listMenuOthersNumber[index].classList.add('active');
  listMenuOthers[index].classList.add('active');
}

pagingLeftOthers.onclick = function() {
  if (flagActiveOthersMenu > 0) {
    flagActiveOthersMenu -= 1;
    menuOthersActive(flagActiveOthersMenu);
  } else if (flagActiveOthersMenu == 0) {
    flagActiveOthersMenu = 1;
    menuOthersActive(flagActiveOthersMenu);
  }
}

pagingRightOthers.onclick = function() {
  if (flagActiveOthersMenu < 1) {
    flagActiveOthersMenu += 1;
    menuOthersActive(flagActiveOthersMenu);
  } else if (flagActiveOthersMenu == 1) {
    flagActiveOthersMenu = 0;
    menuOthersActive(flagActiveOthersMenu);
  }
}

