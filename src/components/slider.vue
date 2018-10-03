<template lang="html">

    <div class="home-slider slider">
        <div class="slider-list">
            <div class="slider-item" v-for="slide in this.params.slides">
                <div class="slider-title">{{ slide.title }}</div>
                <div class="slider-text">{{ slide.text }}</div>
                <a href="service.html" class="link button button--white slider-link"><span>More</span></a>
                <div class="slider-holder">
                    <img :src="slide.img" alt="">
                </div>
            </div>
        </div>
        <div class="slider-arrow-container">
            <div class="slick-arrow slick-arrow--prev">
                <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 120"><path d="M7.66 65.66l50.91 50.91 5.66-5.66L13.31 60 64.23 9.09l-5.66-5.66L2 60z" fill="#252525"/><path d="M194.57 64h-184v-8h184z" fill="#252525"/></svg>
            </div>
            <div class="slick-arrow slick-arrow--next">
                <svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 120"><path d="M188.91 54.34L138 3.43l-5.66 5.66L183.25 60l-50.91 50.91 5.66 5.66L194.57 60z" fill="#252525"/><path d="M2 56h184v8H2z" fill="#252525"/></svg>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data: function() {
            return {
                params: this.slider
            }
        },
        props: ["slider"],
        mounted: function() {
            this.$nextTick(function () {
                APC.slider();
            })
        }
    }
</script>

<style lang="css">
    .slider {
        position: relative;
    }
    .slider .slider-arrow-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 150px;
        margin: 20px auto 0 auto;
    }
    .slider .slider-arrow-container .slick-arrow {
        width: 50px;
        cursor: pointer;
    }
    .slider .slider-arrow-container .slick-arrow svg {
        display: block;
        width: 100%;
    }
    .slider .slider-arrow-container .slick-arrow svg path {
        -webkit-transition: fill 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -moz-transition: fill 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -o-transition: fill 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -ms-transition: fill 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: fill 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .slider .slider-arrow-container .slick-arrow:hover svg path {
        fill: #d3e351;
    }
    .slider-list .slider-item {
        position: relative;
        height: 100%;
        margin: 0 10px;
    }
    .slider-list .slider-item:before {
        content: "";
        display: block;
        padding-top: 500px;
    }
    .slider-list .slider-item .slider-title {
        position: absolute;
        top: 80px;
        display: inline-block;
        left: 50%;
        margin: 0 auto;
        box-sizing: border-box;
        font-size: 34px;
        line-height: 44px;
        text-transform: uppercase;
        text-align: center;
        color: #e9e8e8;
        border-bottom: 1px solid transparent;
        transform: translateX(-50%);
        -webkit-transition: border-bottom-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -moz-transition: border-bottom-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -o-transition: border-bottom-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -ms-transition: border-bottom-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: border-bottom-color 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 20;
    }
    .slider-list .slider-item .slider-title::after {
        content: '/';
        position: absolute;
        padding-left: 20px;
        font-size: 34px;
        line-height: 44px;
    }
    .slider-list .slider-item .slider-text {
        position: absolute;
        bottom: 20px;
        left: -10px;
        right: -10px;
        display: block;
        padding: 20px;
        box-sizing: border-box;
        background: #252525;
        color: #e9e8e8;
        opacity: 0;
        text-align: center;
        font-size: 22px;
        line-height: 32px;
        -webkit-transition: bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -moz-transition: bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -o-transition: bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -ms-transition: bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: bottom 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 20;
    }
    .slider-list .slider-item .slider-text:before {
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        width: 0;
        height: 0;
        border-bottom: 10px solid #000000;
        border-left: 10px solid transparent;
    }
    .slider-list .slider-item .slider-text:after {
        content: "";
        position: absolute;
        top: -10px;
        right: 0;
        width: 0;
        height: 0;
        border-bottom: 10px solid #000000;
        border-right: 10px solid transparent;
    }
    .slider-list .slider-item .slider-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        padding: 10px 60px;
        transform: translateX(-50%);
        font-size: 22px;
        opacity: 0;
        -webkit-transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -moz-transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -o-transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -ms-transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 20;
    }
    .slider-list .slider-item .slider-link span {
        position: relative;
        z-index: 25;
    }
    .slider-list .slider-item .slider-link:hover span {
        color: #e9e8e8;
        z-index: 20;
    }
    .slider-list .slider-item .slider-holder {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 100%;
    }
    .slider-list .slider-item .slider-holder:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: block;
        width: 100%;
        height: 100%;

        background: rgba(0, 0, 0, 0.8);
        -webkit-transition: background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -moz-transition: background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -o-transition: background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        -ms-transition: background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transition: background 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

        z-index: 10;
    }
    .slider-list .slider-item:hover .slider-title {
        color: #252525;
        border-bottom-color: #252525;
    }
    .slider-list .slider-item:hover .slider-holder:before {
        background: rgba(211, 227, 81, 0.9);
    }
    .slider-list .slider-item:hover .slider-text {
        bottom: 104px;
        opacity: 1;
    }
    .slider-list .slider-item:hover .slider-link {
        opacity: 1;
    }
    .slider-list .slider-item .slider-holder img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
