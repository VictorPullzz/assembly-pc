<template lang="html">
    <section class="section">
        <div class="page-inner page-inner--w1">
            <div class="contacts">
                <div class="page-title center">
                    <h1>Contacts</h1>
                </div>

                <div class="center">
                    <p>We are here to help you!</p>
                    <p>Use the form below to contact us.</p>
                    <p>Opening hours: 9:00 - 21:00</p>
                    <p><a href="mailto:info@acmg.store" class="link link--black_bottom">info@acmg.store</a></p>
                    <p><a href="tel:+79999999999" class="link link--yellow_color">+7 (999) 999-99-99</a></p>
                </div>

                <div class="contacts-form">
                    <form class="form" @submit.prevent="send" v-bind:action="form.action">
                        <div class="form-result">{{ form.answer }}</div>
                        <div class="form-row form-row--w1">
                            <div class="form-holder">
                                <label for="name" class="form-label"><span class="form-label-text">Name</span></label>
                                <input type="text" id="name" v-model="form.name" @input="validate" required data-error="Your name must not be less than three characters" aria-required="true" placeholder="Name" class="form-item form-item--text">
                            </div>
                        </div>
                        <div class="form-row form-row--w1">
                            <div class="form-holder">
                                <label for="mobile" class="form-label"><span class="form-label-text">Mobile</span></label>
                                <input type="text" id="mobile" v-model="form.mobile" required data-error="You mobile" aria-required="true" placeholder="+7 (000) 000-00-00" v-mask='"+7 (###) ###-##-##"' maxlength="18" class="form-item form-item--text">
                            </div>
                        </div>
                        <div class="form-row form-row--w1">
                            <div class="form-holder">
                                <label for="message" class="form-label"><span class="form-label-text">Message</span></label>
                                <textarea id="message" v-model="form.message" rows="10" @input="validate" placeholder="Message" data-error="Ваше сообщение слишком большое, было обрезано" class="form-item form-item--textarea"></textarea>
                            </div>
                        </div>
                        <div class="form-row form-row--w1">
                            <button type="submit" class="button button--white form-submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "contacts",
        data: function() {
            return {
                form: {
                    action: "/assets/answer.json",

                    name: null,
                    mobile: null,
                    message: null,

                    success: null,
                    answer: null,

                    templateError: '<label class="error" for="$id">$error</label>',
                }
            }
        },
        computed: {
            cName: function() {
                return this.$store.state.form.name
            },
            cMobile: function() {
                return this.$store.state.form.mobile
            }
        },
        created: function() {
            var self = this;

            self.form.name = this.cName;
            self.form.mobile = this.cMobile;
        },
        methods: {
            validate: function({ type, target }) {
                var self = this,
                    $el = $(target),
                    $container = $el.parent(),
                    $errorBlock = self.form.templateError.replace("$id", $el.attr("id")).replace("$error", $el.data("error"));

                if (target.id == "message") {
                    if (target.value.length > 250) {
                        if ($container.find("label.error").length == 0) {
                            addError($el, $container);
                        }

                        self.form.message = target.value.substr(0, 250);
                        return false;
                    }
                }

                if (target.id == "mobile") {
                    if (target.value.length < 11) {
                        if ($container.find("label.error").length == 0) {
                            addError($el, $container);
                        }
                        return false;
                    }
                }

                if (target.id == "name") {
                    if (target.value.length < 3) {
                        if ($container.find("label.error").length == 0) {
                            addError($el, $container);
                        }
                        return false;
                    }
                }

                function addError($el, $container) {
                    $el.addClass("error");
                    $container.append($errorBlock);

                    setTimeout(function() {
                        $container.find("label.error").addClass("show");
                    }, 300);

                    setTimeout(function() {
                        $el.removeClass("error");
                        $container.find("label.error").removeClass("show");
                    }, 1600);

                    setTimeout(function() {
                        $container.find("label.error").remove();
                    }, 1900);

                }

                return true;
            },

            send: function(event) {
                var self = this,
                    $formResult = $(this.$el).find(".form-result"),
                    $elems = $(this.$el).find("input"),
                    payload,
                    check = true,
                    params;

                $elems.each(function() {
                    var type = $(this).attr("type"),
                        target = this;

                    var result = self.validate({ type, target });

                    if (result == false) {
                        check = false;
                    }
                })

                if (check) {
                    params = {
                        name: self.form.name,
                        mobile: self.form.mobile.replace(/ /g, "").replace(/-/g, "").replace(/[()]/g, ""),
                        message: self.form.message
                    }

                    payload = {
                        name: self.form.name,
                        mobile: self.form.mobile.replace(/[ ()+7-]/g, ""),
                    }

                    $.ajax({
                        url: $(event.target).attr("action"),
                        method: "GET",
                        dataType: "json",
                        data: params,
                        success: function(data) {
                            var result = data;

                            if (result.answer == true) {
                                self.form.success = true;
                                self.form.answer = result.message;

                                $formResult.addClass("show-block");
                                setTimeout(function() {
                                    $formResult.addClass("show");
                                }, 300);

                                setTimeout(function() {
                                    $formResult.removeClass("show");
                                }, 1600);

                                setTimeout(function() {
                                    $formResult.removeClass("show-block");
                                }, 1850);

                                self.$store.dispatch("updateFormProp", payload);

                            }
                        }
                    });
                }

            }
        }
    }
</script>
