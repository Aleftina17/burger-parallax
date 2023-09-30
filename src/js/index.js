const mySwiper = new Swiper('.mySwiper', {
	speed: 1500,
	parallax: true,
	spaceBetween: 0,
	mousewheel: {
	  enabled: true,
	  sensitivity: 9
	}
  });
  
  mySwiper.on('slideChange', function () {
	const currentSlide = mySwiper.activeIndex;
	const previousSlide = mySwiper.previousIndex;
  
	if (currentSlide > previousSlide) {
	  handleSwipeRight();
	} else if (currentSlide < previousSlide) {
	  handleSwipeLeft();
	}
  });
  
  let burgerTop = document.querySelector('.burger__top-wrapper');
  let burgerSalad = document.querySelector('.burger__salad-wrapper');
  let burgerMeat = document.querySelector('.burger__meat-wrapper');
  let burgerBottom = document.querySelector('.burger__bottom-wrapper');
  let burgerIngredients = document.querySelectorAll('.burger__ingredients')

  function handleSwipeRight() {
	burgerTop.style.transform = 'translateY(-110px) translateX(-50%)';
	burgerSalad.style.transform = 'translateY(-110px) translateX(-40%)';
	burgerMeat.style.transform = 'translateY(-110px) translateX(-40%)';
	burgerBottom.style.transform = 'translateY(-110px) translateX(-40%)';
	burgerIngredients.forEach((el) => {
		el.style.opacity = '1'
	})
  }
  
  function handleSwipeLeft() {
	burgerTop.style.transform = 'translateY(0)';
	burgerSalad.style.transform = 'translateY(-65px)';
	burgerMeat.style.transform = 'translateY(-130px)';
	burgerBottom.style.transform = 'translateY(-205px)';
	burgerIngredients.forEach((el) => {
		el.style.opacity = '0'
	})
  }

  let orderInput = document.querySelector('#orderInput')
  let plusBtn = document.querySelector('#plus')
  let minusBtn = document.querySelector('#minus')
  

  plusBtn.addEventListener('click', function(){
	let currentValue = parseInt(orderInput.value);
	orderInput.value = currentValue + 1;
  })

  minusBtn.addEventListener('click', function(){
	let currentValue = parseInt(orderInput.value);

	if (currentValue > 1) {
		orderInput.value = currentValue - 1;
	}
  })
  
