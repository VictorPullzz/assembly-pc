<template lang="html">
    <div>
        <intro :title="intro"></intro>

        <section class="section">
            <div class="section-title">SERVICE</div>
            <slider :slider="slider"></slider>
        </section>
    </div>
</template>

<script>
    import intro  from "./page-intro";
    import slider from "./slider";

    export default {
        name: "home",
        data: function() {
            return {
                intro: "<span class='big'>We</span> <span>will collect a computer <br> for any price for</span><span class='big'>You</span>",
                slider: {
                    countShow: 3,
                    slides: {
                        slide_1: {
                            title: "What can we do?",
                            img: "/assets/dummy/slider_1.jpg",
                            text: "We can assemble any computer for the price that you set!"
                        },
                        slide_2: {
                            title: "Why us?",
                            img: "/assets/dummy/slider_2.jpg",
                            text: "Only in A-P-C, you can give a full guarantee and provide a full report in the form of checks and all documents."
                        },
                        slide_3: {
                            title: "What is the benefit to us?",
                            img: "/assets/dummy/slider_3.jpg",
                            text: "The benefit is to get interest from assemblies, as well as from advertising."
                        },
                        slide_3: {
                            title: "Are there any errors in the assembly?",
                            img: "/assets/dummy/slider_4.jpg",
                            text: "Completely excluded, the assembly is handled by a whole team of professionals!"
                        },
                        slide_4: {
                            title: "What are the advantages?",
                            img: "/assets/dummy/slider_5.jpg",
                            text: "First of all, you only need to make a contract, which shows the price of the assembly, your contacts and all. Secondly, cost recovery, in case of unforeseen situations. Third, an additional guarantee from us!"
                        },
                        slide_5: {
                            title: "What do I get in the end?",
                            img: "/assets/dummy/slider_6.jpg",
                            text: "You will get the assembled PC, with the installed licensed OS, and a set of free programs. Installing free software is free!"
                        },
                        slide_6: {
                            title: "How to contact you?",
                            img: "/assets/dummy/slider_7.jpg",
                            text: "You just fill out the form and wait for the call of our manager!"
                        },
                    }
                },
            }
        },
        components: {
            "intro"   :   intro,
            "slider"  :   slider
        },
    }
</script>
