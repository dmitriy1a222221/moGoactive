let wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);


class Talk {
    constructor(items) {
        this.items = document.querySelectorAll(`.${items}`);
        console.log();
    }
    logicAccordion() {
        this.items.forEach(elem => {
            elem.addEventListener('click', () => {
                this.items.forEach(elem => {
                    elem.classList.remove('active');
                });
                elem.classList.toggle('active')
            })
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {

});



class Slider {
    constructor(sliderWrapItem, sliderItem, arrowPrev, arrowNext){
        this.btnPrev = document.querySelector(`.${arrowPrev}`),
        this.btnNext = document.querySelector(`.${arrowNext}`),
        this.wrapSlide = document.querySelector(`.${sliderWrapItem}`),
        this.slideItem = document.querySelectorAll(`.${sliderItem}`),
        this.lengthAllItem = this.slideItem.length,
        this.sliderItemWidth = Number(100 / this.lengthAllItem),
        this.wrapSlideWidth = Number(this.lengthAllItem * 100),
        this.arrPush = [],
        this.wrapSlide.style.width = `${this.wrapSlideWidth}%`;
        this.slideItem.forEach(item => {
            item.style.width = `${this.sliderItemWidth}%`;
        });
        for (let i = this.sliderItemWidth; i <= 100 ; i += this.sliderItemWidth) {
            this.arrPush.push(Number(i))
        }
    };

    sliderLogic() {
        let position = [0, ...this.arrPush],
            delEl = position.pop(),
            counter = 0;
        let set = (pos) => {
            this.wrapSlide.style.transform = `translate(-${pos}%)`;
        };
        let init = () => {
            set(position[counter]);
        };
        let prev = () => {
            counter--;
            if(counter < 0 ) counter = position.length-1;
            set(position[counter]);
        };
        let next = () => {
            counter++;
            if(counter === position.length) counter = 0;
            set(position[counter]);
        };

        this.btnPrev.addEventListener('click', prev);
        this.btnNext.addEventListener('click', next);

        return init();
    }
}

class NavToggler {
    constructor(burger, navList) {
        this.burger = document.querySelector(`.${burger}`);
        this.navList = document.querySelector(`.${navList}`);
    }
    togglerLogic() {
        this.burger.addEventListener('click', () => {
            this.burger.classList.toggle('active');
            this.navList.classList.toggle('active')
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    wow.init();

    let talk = new Talk('our-talk__item');
    talk.logicAccordion();

    let slider1 = new Slider('slider-wrap-item', 'slider-item', 'arrow-prev__wrap', 'arrow-next__wrap');
    slider1.sliderLogic();

    let slider2 = new Slider('slider-wrap-item-work', 'slider-item-work', 'arrow-prev__wrap-work', 'arrow-next__wrap-work');
    slider2.sliderLogic();

    let navToggler = new NavToggler('burger', 'nav__list');
    navToggler.togglerLogic()
});

