class Slider {
    constructor(options) {
        this.slider = options.slider;
        this.sliderList = this.slider.querySelector('.slider__list');
        this.sliderItems = this.slider.querySelectorAll('.slider__item');
        this.btnPrev = this.slider.querySelector('.prev');
        this.btnNext = this.slider.querySelector('.next');
        this.width = this.sliderItems[0].clientWidth;
        this.height = this.sliderItems[0].clientHeight;
        this.activeSlide = 0;
        this.timeMove = 1000;
        this.dir = options.direction.toUpperCase() == 'X' ? 'X' : 'Y';
        this.moveSlide = this.dir == 'X' ? this.width : this.height;
        this.dotsDisable = options.dotsDisable;
        this.interval = options.interval == undefined ? this.timeMove + 1000 : options.interval;

        if (this.dotsDisable == 'false') {
            this.active = true;
            this.ul = document.createElement('ul');
            this.ul.classList.add('slider__dots');
            this.sliderItems.forEach(() => {
                const li = document.createElement('li');
                this.ul.appendChild(li)
            })

            this.slider.appendChild(this.ul);
            this.dots = this.slider.querySelectorAll('.slider__dots li');
            this.dots[this.activeSlide].classList.add('active');

            this.dots.forEach((dot, key) => {
                dot.addEventListener('click', () => {
                    this.controlsDots(key)
                })
            })
        }

        if (options.play == 'true') {
            let autoPlay = setInterval(() => {
                this.move(this.btnNext);
            }, this.interval);
            this.slider.addEventListener('mouseenter', () => {
                clearInterval(autoPlay);
            })
            this.slider.addEventListener('mouseleave', () => {
                autoPlay = setInterval(() => {
                    this.move(this.btnNext);
                }, this.interval);
            })
        }

        this.sliderList.style = `width: ${this.width}px;
        height: ${this.height}px;
        `
        this.sliderItems.forEach((slide, num) => {
            slide.style = `position: absolute;
            top: 0;
            left: 0;`
        })


        this.sliderItems.forEach((slide, num) => {
            if (num != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${this.moveSlide}px)`;
            }
            if (num == this.sliderItems.length - 1) {
                slide.style.transform = `translate${this.dir}(${-this.moveSlide}px)`;
            }
        })

        this.btnNext.addEventListener('click', () => {
            this.move(this.btnNext);
        })
        this.btnPrev.addEventListener('click', () => {
            this.move(this.btnPrev)
        })

    }
    move(btn) {
        this.btnNext.disabled = true;
        this.btnPrev.disabled = true;
        setTimeout(() => {
            this.btnNext.disabled = false;
            this.btnPrev.disabled = false;
        }, this.timeMove + 200);
        let btnPrevOrNext = btn == this.btnNext ? -this.moveSlide : this.moveSlide;
        // let btnPrevOrNext;
        // if (btn == btnNext) { btnPrevOrNext = -moveSlide} else {
        //     btnPrevOrNext = moveSlide
        // }

        this.sliderItems.forEach((slide, num) => {
            if (num != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${-btnPrevOrNext}px)`;
                slide.style.transition = `0ms`;
            }
        })

        this.sliderItems[this.activeSlide].style.transform = `translate${this.dir}(${btnPrevOrNext}px)`;
        this.sliderItems[this.activeSlide].style.transition = `${this.timeMove}ms`;
        if (this.dotsDisable == 'false') {
            this.dots[this.activeSlide].classList.remove('active')
        };

        if (btn == this.btnNext) {
            this.activeSlide++;
            if (this.activeSlide >= this.sliderItems.length) {
                this.activeSlide = 0;
            }
        } else if (btn == this.btnPrev) {
            this.activeSlide--;
            if (this.activeSlide < 0) {
                this.activeSlide = this.sliderItems.length - 1;
            }
        }

        this.sliderItems[this.activeSlide].style.transform = `translate${this.dir}(${0}px)`;
        this.sliderItems[this.activeSlide].style.transition = `${this.timeMove}ms`;
        if (this.dotsDisable == 'false') {
            this.dots[this.activeSlide].classList.add('active')
        };
    }
    controlsDots(dotKey) {

        if (this.active && dotKey != this.activeSlide) {
            this.sliderItems.forEach((slide) => {
                slide.style.transition = `0ms`;
            })
            this.active = false;
            this.dots.forEach((dot) => {
                dot.classList.remove('active');
            })
            let moveLeftOrRight = dotKey > this.activeSlide ? this.moveSlide : -this.moveSlide;
            this.sliderItems[dotKey].style.transform = `translate${this.dir}(${moveLeftOrRight}px)`;
            setTimeout(() => {
                this.sliderItems[this.activeSlide].style.transform = `translate${this.dir}(${-moveLeftOrRight}px)`;
                this.sliderItems[this.activeSlide].style.transition = `${this.timeMove}ms`;
                this.dots[this.activeSlide].classList.remove('active');
                this.activeSlide = dotKey;
                this.sliderItems[this.activeSlide].style.transform = `translate${this.dir}(${0}px`;
                this.sliderItems[this.activeSlide].style.transition = `${this.timeMove}ms`;
                this.dots[this.activeSlide].classList.add('active');
            }, 100);
            setTimeout(() => {
                this.active = true;
            }, this.timeMove + 200);
        }
    }
}

const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
    const direction = slider.getAttribute('data-direction') == 'Y' ? 'Y' : 'X';
    const dotsDisable = slider.hasAttribute('dots-disabled') ? 'true' : 'false';
    const autoPlay = slider.hasAttribute('auto-play') ? 'true' : 'false';
    const timeInterval = Number(slider.getAttribute('interval'));
    const interval = timeInterval != 0 ? timeInterval : undefined;
    new Slider({
        slider: slider,
        timeMove: 1000,
        direction: direction,
        dotsDisable: dotsDisable,
        play: autoPlay,
        interval: interval,
    })
});