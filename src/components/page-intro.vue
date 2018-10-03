<template lang="html">
    <div class="page-intro">
        <img src="/assets/dummy/intro.jpg" alt="" class="page-intro-img">
        <div class="page-intro-text">
            <span v-html="intro_text"></span>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                intro_text: this.title
            }
        },
        props: ["title"],
    }
</script>

<style lang="css">
    .page-intro {
        position: relative;
        min-height: 80vh;
    }
    .page-intro-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-filter: brightness(30%);
        filter: brightness(30%);
    }
    .page-intro-text {
        position: absolute;
        z-index: 10;
        top: 50%;
        left: 20%;
        padding: 30px;
        box-sizing: border-box;
        font-size: 58px;
        line-height: 68px;
        color: #e9e8e8;
        background: rgba(40, 40, 40, 0.30);
        border-radius: 10px;
        transform: translateY(-50%);
    }
    .page-intro-text span.big {
        display: block;
        font-size: 64px;
        color: #c64747;
    }
    .page-intro-text span.big:last-child {
        padding-left: 35px;
    }
    .page-intro-text span:not(.big) {
        display: block;
        padding-left: 25px;
        box-sizing: border-box;
    }
</style>
