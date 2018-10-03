<template>
    <nav itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" class="header-menu">
        <ul class="header-menu-inner">
            <li v-for="(url, name) in menu" class="header-menu-item-holder">
                <router-link :to="url" title="home" itemprop="url" class="header-menu-item link button button--yellow">
                    <span itemprop="name" class="header-menu-item-name">{{ name }}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data: function() {
            return {
                menu: {
                    "Home" : "/",
                    "About Us" : "about.html",
                    "Contact Us" : "contacts.html",
                }
            }
        },
    }
</script>

<style lang="css">
    .header-menu .header-menu-inner {
        display: -webkit-box;
        display: -moz-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: box;
        display: flex;
        -webkit-box-pack: justify;
        -moz-box-pack: justify;
        -o-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -moz-box-align: center;
        -o-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        background: #252525;
        padding: 10px 0;
    }
    .header-menu .header-menu-item-holder {
        margin-right: 15px;
    }
    .header-menu .header-menu-item-holder:last-child {
        margin-right: 0px;
    }
    .header-menu .header-menu-item {
        padding: 10px 30px;
        box-sizing: border-box;
    }
    .header-menu .header-menu-item .header-menu-item-name {
        position: relative;
        letter-spacing: 1px;
        white-space: nowrap;
        text-transform: uppercase;
        font-size: 20px;
        z-index: 10;
    }
    .header-menu .header-menu-item .header-menu-item-name:hover {
        color: #252525;
    }
</style>
