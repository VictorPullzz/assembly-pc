<template>
    <div>
        <div class="page">
            <header itemscope itemtype="http://schema.org/WPHeader" class="page-header">
                <div class="header-col">
                    <div class="header-logo"><svg-logo></svg-logo></div>
                    <div class="header-name">A-P-C company</div>
                </div>
                <div class="header-col">
                    <div class="header-burger-holder">
                        <div class="header-burger"></div>
                    </div>
                    <header-menu></header-menu>
                </div>
            </header>
            <main class="page-content">
                <router-view></router-view>
            </main>
        </div>
        <div class="mobile-menu-container">
            <header-menu></header-menu>
            <div class="close-menu"><svg data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.66 50.66"><path d="M5.63 0l45 45L45 50.66 0 5.63z" fill="#4a4a4a"></path><path d="M50.66 5.63l-45 45L0 45 45 0z" fill="#4a4a4a"></path></svg>
            </div>
        </div>
        <footer itemscope itemtype="http://schema.org/WPFooter" class="page-footer"></footer>
    </div>
</template>

<script>
    import headerMenu from './components/header-menu.vue';
    import svgLogo    from './components/svg-logo.vue';

    export default {
        name: 'app',
        components: {
            "header-menu"   :   headerMenu,
            "svg-logo"      :   svgLogo
        },
        mounted: function() {
            this.$nextTick(function () {
                APC.miniScripts.init();
                APC.menu.init();
            })
        },
        updated: function() {
            APC.menu.hide();
        }
    }
</script>
