/* ATTENTION! This file was generated automatically! Don't change it!!!
----------------------------------------------------------------------- */
jQuery(document).ready(function() {
    "use strict";
    TRX_ADDONS_STORAGE['vc_init_counter'] = 0;
    trx_addons_init_actions();
});
jQuery(window).on('beforeunload', function() {
    "use strict";
    if (jQuery.browser && !jQuery.browser.safari) jQuery('#page_preloader').css({
        display: 'block',
        opacity: 0
    }).animate({
        opacity: 0.8
    }, 300);
});

function trx_addons_init_actions() {
    "use strict";
    if (TRX_ADDONS_STORAGE['vc_edit_mode'] > 0 && jQuery('.vc_empty-placeholder').length == 0 && TRX_ADDONS_STORAGE['vc_init_counter'] ++ < 30) {
        setTimeout(trx_addons_init_actions, 200);
        return;
    }
    jQuery('#page_preloader').animate({
        opacity: 0
    }, 800, function() {
        jQuery(this).css({
            display: 'none'
        });
    });
    if (trx_addons_is_retina()) {
        trx_addons_set_cookie('trx_addons_is_retina', 1, 365);
    }
    jQuery(document).on('action.init_hidden_elements', trx_addons_ready_actions);
    trx_addons_ready_actions();
    trx_addons_resize_actions();
    trx_addons_scroll_actions();
    jQuery(window).resize(function() {
        "use strict";
        trx_addons_resize_actions();
    });
    jQuery(document).on('vc-full-width-row', function(e, el) {
        trx_addons_resize_actions();
    });
    jQuery(window).scroll(function() {
        "use strict";
        trx_addons_scroll_actions();
    });
}

function trx_addons_ready_actions(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    if (container.find('.trx_addons_tabs:not(.inited)').length > 0 && jQuery.ui && jQuery.ui.tabs) {
        container.find('.trx_addons_tabs:not(.inited)').each(function() {
            "use strict";
            var init = jQuery(this).data('active');
            if (isNaN(init)) {
                init = 0;
                var active = jQuery(this).find('> ul > li[data-active="true"]').eq(0);
                if (active.length > 0) {
                    init = active.index();
                    if (isNaN(init) || init < 0) init = 0;
                }
            } else {
                init = Math.max(0, init);
            }
            jQuery(this).addClass('inited').tabs({
                active: init,
                show: {
                    effect: 'fadeIn',
                    duration: 300
                },
                hide: {
                    effect: 'fadeOut',
                    duration: 300
                },
                create: function(event, ui) {
                    if (ui.panel.length > 0) jQuery(document).trigger('action.init_hidden_elements', [ui.panel]);
                },
                activate: function(event, ui) {
                    if (ui.newPanel.length > 0) jQuery(document).trigger('action.init_hidden_elements', [ui.newPanel]);
                }
            });
        });
    }
    if (container.find('.trx_addons_accordion:not(.inited)').length > 0 && jQuery.ui && jQuery.ui.accordion) {
        container.find('.trx_addons_accordion:not(.inited)').each(function() {
            "use strict";
            var accordion = jQuery(this);
            var headers = accordion.data('headers');
            if (headers === undefined) headers = 'h5';
            var height_style = accordion.data('height-style');
            if (height_style === undefined) height_style = 'content';
            var init = accordion.data('active');
            var active = false;
            if (isNaN(init)) {
                init = 0;
                var active = accordion.find(headers + '[data-active="true"]').eq(0);
                if (active.length > 0) {
                    while (!active.parent().hasClass('trx_addons_accordion')) {
                        active = active.parent();
                    }
                    init = active.index();
                    if (isNaN(init) || init < 0) init = 0;
                }
            } else {
                init = Math.max(0, init);
            }
            accordion.addClass('inited').accordion({
                active: init,
                header: headers,
                heightStyle: height_style,
                create: function(event, ui) {
                    if (ui.panel.length > 0) {
                        jQuery(document).trigger('action.init_hidden_elements', [ui.panel]);
                    } else if (active !== false && active.length > 0) {
                        active.find('>' + headers).trigger('click');
                    }
                },
                activate: function(event, ui) {
                    if (ui.newPanel.length > 0) jQuery(document).trigger('action.init_hidden_elements', [ui.newPanel]);
                }
            });
        });
    }
    jQuery(document).trigger('action.init_sliders', [container]);
    jQuery(document).trigger('action.init_shortcodes', [container]);
    if (container.find('.trx_addons_video_player.with_cover .video_hover:not(.inited)').length > 0) {
        container.find('.trx_addons_video_player.with_cover .video_hover:not(.inited)').addClass('inited').on('click', function(e) {
            "use strict";
            jQuery(this).parents('.trx_addons_video_player').addClass('video_play').find('.video_embed').html(jQuery(this).data('video'));
            var slider = jQuery(this).parents('.slider_swiper');
            if (slider.length > 0) {
                var id = slider.attr('id');
                TRX_ADDONS_STORAGE['swipers'][id].stopAutoplay();
            }
            jQuery(window).trigger('resize');
            e.preventDefault();
            return false;
        });
    }
    if (TRX_ADDONS_STORAGE['popup_engine'] == 'pretty') {
        container.find("a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)").attr('rel', 'prettyPhoto[slideshow]');
        var images = container.find("a[rel*='prettyPhoto']:not(.inited):not(.esgbox):not([data-rel*='pretty']):not([rel*='magnific']):not([data-rel*='magnific'])").addClass('inited');
        try {
            images.prettyPhoto({
                social_tools: '',
                theme: 'facebook',
                deeplinking: false
            });
        } catch (e) {};
    } else if (TRX_ADDONS_STORAGE['popup_engine'] == 'magnific') {
        container.find("a[href$='jpg']:not(.inited),a[href$='jpeg']:not(.inited),a[href$='png']:not(.inited),a[href$='gif']:not(.inited)").attr('rel', 'magnific');
        var images = container.find("a[rel*='magnific']:not(.inited):not(.esgbox):not(.prettyphoto):not([rel*='pretty']):not([data-rel*='pretty'])").addClass('inited');
        try {
            images.magnificPopup({
                type: 'image',
                mainClass: 'mfp-img-mobile',
                closeOnContentClick: true,
                closeBtnInside: true,
                fixedContentPos: true,
                midClick: true,
                preloader: true,
                tLoading: TRX_ADDONS_STORAGE['msg_magnific_loading'],
                gallery: {
                    enabled: true
                },
                image: {
                    tError: TRX_ADDONS_STORAGE['msg_magnific_error'],
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300,
                    easing: 'ease-in-out',
                    opener: function(openerElement) {
                        if (!openerElement.is('img')) {
                            if (openerElement.parents('.trx_addons_hover').find('img').length > 0) openerElement = openerElement.parents('.trx_addons_hover').find('img');
                            else if (openerElement.siblings('img').length > 0) openerElement = openerElement.siblings('img');
                            else if (openerElement.parent().parent().find('img').length > 0) openerElement = openerElement.parent().parent().find('img');
                        }
                        return openerElement;
                    }
                },
                callbacks: {
                    beforeClose: function() {
                        jQuery('.mfp-figure figcaption').hide();
                        jQuery('.mfp-figure .mfp-arrow').hide();
                    }
                }
            });
        } catch (e) {};
    }
    if (container.find('.post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)').length > 0) {
        container.find('.post_counters_likes:not(.inited),.comment_counters_likes:not(.inited)').addClass('inited').on('click', function(e) {
            "use strict";
            var button = jQuery(this);
            var inc = button.hasClass('enabled') ? 1 : -1;
            var post_id = button.hasClass('post_counters_likes') ? button.data('postid') : button.data('commentid');
            var cookie_likes = trx_addons_get_cookie(button.hasClass('post_counters_likes') ? 'trx_addons_likes' : 'trx_addons_comment_likes');
            if (cookie_likes === undefined || cookie_likes === null) cookie_likes = '';
            jQuery.post(TRX_ADDONS_STORAGE['ajax_url'], {
                action: button.hasClass('post_counters_likes') ? 'post_counter' : 'comment_counter',
                nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
                post_id: post_id,
                likes: inc
            }).done(function(response) {
                "use strict";
                var rez = {};
                try {
                    rez = JSON.parse(response);
                } catch (e) {
                    rez = {
                        error: TRX_ADDONS_STORAGE['msg_ajax_error']
                    };
                    console.log(response);
                }
                if (rez.error === '') {
                    var counter = rez.counter;
                    if (inc == 1) {
                        var title = button.data('title-dislike');
                        button.removeClass('enabled trx_addons_icon-heart-empty').addClass('disabled trx_addons_icon-heart');
                        cookie_likes += (cookie_likes.substr(-1) != ',' ? ',' : '') + post_id + ',';
                    } else {
                        var title = button.data('title-like');
                        button.removeClass('disabled trx_addons_icon-heart').addClass('enabled trx_addons_icon-heart-empty');
                        cookie_likes = cookie_likes.replace(',' + post_id + ',', ',');
                    }
                    button.data('likes', counter).attr('title', title).find(button.hasClass('post_counters_likes') ? '.post_counters_number' : '.comment_counters_number').html(counter);
                    trx_addons_set_cookie(button.hasClass('post_counters_likes') ? 'trx_addons_likes' : 'trx_addons_comment_likes', cookie_likes, 365);
                } else {
                    alert(TRX_ADDONS_STORAGE['msg_error_like']);
                }
            });
            e.preventDefault();
            return false;
        });
    }
    if (container.find('.socials_share .socials_caption:not(.inited)').length > 0) {
        container.find('.socials_share .socials_caption:not(.inited)').each(function() {
            "use strict";
            jQuery(this).addClass('inited').on('click', function(e) {
                "use strict";
                jQuery(this).siblings('.social_items').fadeToggle();
                e.preventDefault();
                return false;
            });
        });
    }
    if (container.find('.socials_share .social_items:not(.inited)').length > 0) {
        container.find('.socials_share .social_items:not(.inited)').each(function() {
            "use strict";
            jQuery(this).addClass('inited').on('click', '.social_item_popup > a.social_icons', function(e) {
                "use strict";
                var url = jQuery(this).data('link');
                window.open(url, '_blank', 'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=480, height=400, toolbar=0, status=0');
                e.preventDefault();
                return false;
            });
        });
    }
    container.find('.widget ul > li').each(function() {
        "use strict";
        if (jQuery(this).find('ul').length > 0) {
            jQuery(this).addClass('has_children');
        }
    });
    container.find('.widget_archive a:not(.inited)').addClass('inited').each(function() {
        "use strict";
        var val = jQuery(this).html().split(' ');
        if (val.length > 1) {
            val[val.length - 1] = '<span>' + val[val.length - 1] + '</span>';
            jQuery(this).html(val.join(' '))
        }
    });
    container.find('.trx_addons_scroll_to_top:not(.inited)').addClass('inited').on('click', function(e) {
        "use strict";
        jQuery('html,body').animate({
            scrollTop: 0
        }, 'slow');
        e.preventDefault();
        return false;
    });
}

function trx_addons_scroll_actions() {
    "use strict";
    var scroll_offset = jQuery(window).scrollTop();
    var scroll_to_top_button = jQuery('.trx_addons_scroll_to_top');
    var adminbar_height = Math.max(0, jQuery('#wpadminbar').height());
    if (scroll_to_top_button.length > 0) {
        if (scroll_offset > 100) scroll_to_top_button.addClass('show');
        else scroll_to_top_button.removeClass('show');
    }
    jQuery('[data-animation^="animated"]:not(.animated)').each(function() {
        "use strict";
        if (jQuery(this).offset().top < scroll_offset + jQuery(window).height()) jQuery(this).addClass(jQuery(this).data('animation'));
    });
}

function trx_addons_resize_actions(cont) {
    "use strict";
    if (window.trx_addons_resize_sliders) trx_addons_resize_sliders(cont);
    trx_addons_resize_video(cont);
}

function trx_addons_resize_video(cont) {
    if (cont === undefined) cont = jQuery('body');
    cont.find('video').each(function() {
        "use strict";
        var video = jQuery(this).eq(0);
        var ratio = (video.data('ratio') != undefined ? video.data('ratio').split(':') : [16, 9]);
        ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
        var mejs_cont = video.parents('.mejs-video');
        var w_attr = video.data('width');
        var h_attr = video.data('height');
        if (!w_attr || !h_attr) {
            w_attr = video.attr('width');
            h_attr = video.attr('height');
            if (!w_attr || !h_attr) return;
            video.data({
                'width': w_attr,
                'height': h_attr
            });
        }
        var percent = ('' + w_attr).substr(-1) == '%';
        w_attr = parseInt(w_attr,10);
        h_attr = parseInt(h_attr,10);
        var w_real = Math.round(mejs_cont.length > 0 ? Math.min(percent ? 10000 : w_attr, mejs_cont.parents('div,article').width()) : video.width()),
            h_real = Math.round(percent ? w_real / ratio : w_real / w_attr * h_attr);
        if (parseInt(video.attr('data-last-width'),10) == w_real) return;
        if (mejs_cont.length > 0 && mejs) {
            trx_addons_set_mejs_player_dimensions(video, w_real, h_real);
        }
        if (percent) {
            video.height(h_real);
        } else {
            video.attr({
                'width': w_real,
                'height': h_real
            }).css({
                'width': w_real + 'px',
                'height': h_real + 'px'
            });
        }
        video.attr('data-last-width', w_real);
    });
    cont.find('.video_frame iframe').each(function() {
        "use strict";
        var iframe = jQuery(this).eq(0);
        if (iframe.attr('src').indexOf('soundcloud') > 0) return;
        var ratio = (iframe.data('ratio') != undefined ? iframe.data('ratio').split(':') : (iframe.parent().data('ratio') != undefined ? iframe.parent().data('ratio').split(':') : (iframe.find('[data-ratio]').length > 0 ? iframe.find('[data-ratio]').data('ratio').split(':') : [16, 9])));
        ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
        var w_attr = iframe.attr('width');
        var h_attr = iframe.attr('height');
        if (!w_attr || !h_attr) {
            return;
        }
        var percent = ('' + w_attr).substr(-1) == '%';
        w_attr = parseInt(w_attr,10);
        h_attr = parseInt(h_attr,10);
        var pw = iframe.parent().width(),
            ph = iframe.parent().height(),
            w_real = pw,
            h_real = Math.round(percent ? w_real / ratio : w_real / w_attr * h_attr);
        if (iframe.parent().css('position') == 'absolute' && h_real > ph) {
            h_real = ph;
            w_real = Math.round(percent ? h_real * ratio : h_real * w_attr / h_attr)
        }
        if (parseInt(iframe.attr('data-last-width'),10) == w_real) return;
        iframe.css({
            'width': w_real + 'px',
            'height': h_real + 'px'
        });
        iframe.attr('data-last-width', w_real);
    });
}

function trx_addons_set_mejs_player_dimensions(video, w, h) {
    "use strict";
    if (mejs) {
        for (var pl in mejs.players) {
            if (mejs.players[pl].media.src == video.attr('src')) {
                if (mejs.players[pl].media.setVideoSize) {
                    mejs.players[pl].media.setVideoSize(w, h);
                }
                mejs.players[pl].setPlayerSize(w, h);
                mejs.players[pl].setControlsSize();
            }
        }
    }
}

function trx_addons_get_cookie(name) {
    "use strict";
    var defa = arguments[1] != undefined ? arguments[1] : null;
    var start = document.cookie.indexOf(name + '=');
    var len = start + name.length + 1;
    if ((!start) && (name != document.cookie.substring(0, name.length))) {
        return defa;
    }
    if (start == -1) return defa;
    var end = document.cookie.indexOf(';', len);
    if (end == -1) end = document.cookie.length;
    return unescape(document.cookie.substring(len, end));
}

function trx_addons_set_cookie(name, value, expires, path, domain, secure) {
    "use strict";
    var expires = arguments[2] != undefined ? arguments[2] : 0;
    var path = arguments[3] != undefined ? arguments[3] : '/';
    var domain = arguments[4] != undefined ? arguments[4] : '';
    var secure = arguments[5] != undefined ? arguments[5] : '';
    var today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    var expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + '=' + escape(value) + ((expires) ? ';expires=' + expires_date.toGMTString() : '') + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ((secure) ? ';secure' : '');
}

function trx_addons_del_cookie(name, path, domain) {
    "use strict";
    var path = arguments[1] != undefined ? arguments[1] : '/';
    var domain = arguments[2] != undefined ? arguments[2] : '';
    if (trx_addons_get_cookie(name)) document.cookie = name + '=' + ((path) ? ';path=' + path : '') + ((domain) ? ';domain=' + domain : '') + ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
}

function trx_addons_clear_listbox(box) {
    "use strict";
    for (var i = box.options.length - 1; i >= 0; i--) box.options[i] = null;
}

function trx_addons_add_listbox_item(box, val, text) {
    "use strict";
    var item = new Option();
    item.value = val;
    item.text = text;
    box.options.add(item);
}

function trx_addons_del_listbox_item_by_value(box, val) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].value == val) {
            box.options[i] = null;
            break;
        }
    }
}

function trx_addons_del_listbox_item_by_text(box, txt) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].text == txt) {
            box.options[i] = null;
            break;
        }
    }
}

function trx_addons_find_listbox_item_by_value(box, val) {
    "use strict";
    var idx = -1;
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].value == val) {
            idx = i;
            break;
        }
    }
    return idx;
}

function trx_addons_find_listbox_item_by_text(box, txt) {
    "use strict";
    var idx = -1;
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].text == txt) {
            idx = i;
            break;
        }
    }
    return idx;
}

function trx_addons_select_listbox_item_by_value(box, val) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        box.options[i].selected = (val == box.options[i].value);
    }
}

function trx_addons_select_listbox_item_by_text(box, txt) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        box.options[i].selected = (txt == box.options[i].text);
    }
}

function trx_addons_get_listbox_values(box) {
    "use strict";
    var delim = arguments[1] ? arguments[1] : ',';
    var str = '';
    for (var i = 0; i < box.options.length; i++) {
        str += (str ? delim : '') + box.options[i].value;
    }
    return str;
}

function trx_addons_get_listbox_texts(box) {
    "use strict";
    var delim = arguments[1] ? arguments[1] : ',';
    var str = '';
    for (var i = 0; i < box.options.length; i++) {
        str += (str ? delim : '') + box.options[i].text;
    }
    return str;
}

function trx_addons_sort_listbox(box) {
    "use strict";
    var temp_opts = new Array();
    var temp = new Option();
    for (var i = 0; i < box.options.length; i++) {
        temp_opts[i] = box.options[i].clone();
    }
    for (var x = 0; x < temp_opts.length - 1; x++) {
        for (var y = (x + 1); y < temp_opts.length; y++) {
            if (temp_opts[x].text > temp_opts[y].text) {
                temp = temp_opts[x];
                temp_opts[x] = temp_opts[y];
                temp_opts[y] = temp;
            }
        }
    }
    for (var i = 0; i < box.options.length; i++) {
        box.options[i] = temp_opts[i].clone();
    }
}

function trx_addons_get_listbox_selected_index(box) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].selected) return i;
    }
    return -1;
}

function trx_addons_get_listbox_selected_value(box) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].selected) {
            return box.options[i].value;
        }
    }
    return null;
}

function trx_addons_get_listbox_selected_text(box) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].selected) {
            return box.options[i].text;
        }
    }
    return null;
}

function trx_addons_get_listbox_selected_option(box) {
    "use strict";
    for (var i = 0; i < box.options.length; i++) {
        if (box.options[i].selected) {
            return box.options[i];
        }
    }
    return null;
}

function trx_addons_get_radio_value(radioGroupObj) {
    "use strict";
    for (var i = 0; i < radioGroupObj.length; i++)
        if (radioGroupObj[i].checked) return radioGroupObj[i].value;
    return null;
}

function trx_addons_set_radio_checked_by_num(radioGroupObj, num) {
    "use strict";
    for (var i = 0; i < radioGroupObj.length; i++)
        if (radioGroupObj[i].checked && i != num) radioGroupObj[i].checked = false;
        else if (i == num) radioGroupObj[i].checked = true;
}

function trx_addons_set_radio_checked_by_value(radioGroupObj, val) {
    "use strict";
    for (var i = 0; i < radioGroupObj.length; i++)
        if (radioGroupObj[i].checked && radioGroupObj[i].value != val) radioGroupObj[i].checked = false;
        else if (radioGroupObj[i].value == val) radioGroupObj[i].checked = true;
}

function trx_addons_form_validate(form, opt) {
    "use strict";
    if (typeof(opt.error_message_show) == 'undefined') opt.error_message_show = true;
    if (typeof(opt.error_message_time) == 'undefined') opt.error_message_time = 5000;
    if (typeof(opt.error_message_class) == 'undefined') opt.error_message_class = 'trx_addons_message_box_error';
    if (typeof(opt.error_message_text) == 'undefined') opt.error_message_text = 'Incorrect data in the fields!';
    if (typeof(opt.error_fields_class) == 'undefined') opt.error_fields_class = 'trx_addons_field_error';
    if (typeof(opt.exit_after_first_error) == 'undefined') opt.exit_after_first_error = false;
    var error_msg = '';
    form.find(":input").each(function() {
        "use strict";
        if (error_msg != '' && opt.exit_after_first_error) return;
        for (var i = 0; i < opt.rules.length; i++) {
            if (jQuery(this).attr("name") == opt.rules[i].field) {
                var val = jQuery(this).val();
                var error = false;
                if (typeof(opt.rules[i].min_length) == 'object') {
                    if (opt.rules[i].min_length.value > 0 && val.length < opt.rules[i].min_length.value) {
                        if (error_msg == '') jQuery(this).get(0).focus();
                        error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].min_length.message) != 'undefined' ? opt.rules[i].min_length.message : opt.error_message_text) + '</p>';
                        error = true;
                    }
                }
                if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].max_length) == 'object') {
                    if (opt.rules[i].max_length.value > 0 && val.length > opt.rules[i].max_length.value) {
                        if (error_msg == '') jQuery(this).get(0).focus();
                        error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].max_length.message) != 'undefined' ? opt.rules[i].max_length.message : opt.error_message_text) + '</p>';
                        error = true;
                    }
                }
                if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].mask) == 'object') {
                    if (opt.rules[i].mask.value != '') {
                        var regexp = new RegExp(opt.rules[i].mask.value);
                        if (!regexp.test(val)) {
                            if (error_msg == '') jQuery(this).get(0).focus();
                            error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].mask.message) != 'undefined' ? opt.rules[i].mask.message : opt.error_message_text) + '</p>';
                            error = true;
                        }
                    }
                }
                if ((!error || !opt.exit_after_first_error) && typeof(opt.rules[i].equal_to) == 'object') {
                    if (opt.rules[i].equal_to.value != '' && val != jQuery(jQuery(this).get(0).form[opt.rules[i].equal_to.value]).val()) {
                        if (error_msg == '') jQuery(this).get(0).focus();
                        error_msg += '<p class="trx_addons_error_item">' + (typeof(opt.rules[i].equal_to.message) != 'undefined' ? opt.rules[i].equal_to.message : opt.error_message_text) + '</p>';
                        error = true;
                    }
                }
                if (opt.error_fields_class != '') jQuery(this).toggleClass(opt.error_fields_class, error);
            }
        }
    });
    if (error_msg != '' && opt.error_message_show) {
        var error_message_box = form.find(".trx_addons_message_box");
        if (error_message_box.length == 0) error_message_box = form.parent().find(".trx_addons_message_box");
        if (error_message_box.length == 0) {
            form.append('<div class="trx_addons_message_box"></div>');
            error_message_box = form.find(".trx_addons_message_box");
        }
        if (opt.error_message_class) error_message_box.toggleClass(opt.error_message_class, true);
        error_message_box.html(error_msg).fadeIn();
        setTimeout(function() {
            error_message_box.fadeOut();
        }, opt.error_message_time);
    }
    return error_msg != '';
}

function trx_addons_document_animate_to(id, callback) {
    "use strict";
    var oft = !isNaN(id) ? Number(id) : 0;
    if (isNaN(id)) {
        if (id.indexOf('#') == -1) id = '#' + id;
        var obj = jQuery(id).eq(0);
        if (obj.length == 0) return;
        oft = obj.offset().top;
    }
    var st = jQuery(window).scrollTop();
    var speed = Math.min(1200, Math.max(300, Math.round(Math.abs(oft - st) / jQuery(window).height() * 300)));
    jQuery('body,html').stop(true).animate({
        scrollTop: oft - jQuery('#wpadminbar').height() + 1
    }, speed, 'linear', callback);
}

function trx_addons_document_set_location(curLoc) {
    "use strict";
    if (history.pushState === undefined || navigator.userAgent.match(/MSIE\s[6-9]/i) != null) return;
    try {
        history.pushState(null, null, curLoc);
        return;
    } catch (e) {}
    location.href = curLoc;
}

function trx_addons_add_to_url(prm) {
    "use strict";
    var ignore_empty = arguments[1] !== undefined ? arguments[1] : true;
    var loc = location.href;
    var q = loc.indexOf('?');
    var attr = {};
    if (q > 0) {
        var qq = loc.substr(q + 1).split('&');
        var parts = '';
        for (var i = 0; i < qq.length; i++) {
            var parts = qq[i].split('=');
            attr[parts[0]] = parts.length > 1 ? parts[1] : '';
        }
    }
    for (var p in prm) {
        attr[p] = prm[p];
    }
    loc = (q > 0 ? loc.substr(0, q) : loc) + '?';
    var i = 0;
    for (p in attr) {
        if (ignore_empty && attr[p] == '') continue;
        loc += (i++ > 0 ? '&' : '') + p + '=' + attr[p];
    }
    return loc;
}

function trx_addons_browser_is_mobile() {
    "use strict";
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

function trx_addons_browser_is_ios() {
    "use strict";
    return navigator.userAgent.match(/iPad|iPhone|iPod/i) != null || navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
}

function trx_addons_is_retina() {
    "use strict";
    var mediaQuery = '(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
    return (window.devicePixelRatio > 1) || (window.matchMedia && window.matchMedia(mediaQuery).matches);
}

function trx_addons_get_file_name(path) {
    "use strict";
    path = path.replace(/\\/g, '/');
    var pos = path.lastIndexOf('/');
    if (pos >= 0) path = path.substr(pos + 1);
    return path;
}

function trx_addons_get_file_ext(path) {
    "use strict";
    var pos = path.lastIndexOf('.');
    path = pos >= 0 ? path.substr(pos + 1) : '';
    return path;
}

function trx_addons_check_images_complete(cont) {
    "use strict";
    var complete = true;
    cont.find('img').each(function() {
        if (!complete) return;
        if (!jQuery(this).get(0).complete) complete = false;
    });
    return complete;
}

function trx_addons_replicate(str, num) {
    "use strict";
    var rez = '';
    for (var i = 0; i < num; i++) {
        rez += str;
    }
    return rez;
}

function trx_addons_serialize(mixed_val) {
    "use strict";
    var obj_to_array = arguments.length == 1 || argument[1] === true;
    switch (typeof(mixed_val)) {
        case "number":
            if (isNaN(mixed_val) || !isFinite(mixed_val)) return false;
            else return (Math.floor(mixed_val) == mixed_val ? "i" : "d") + ":" + mixed_val + ";";
        case "string":
            return "s:" + mixed_val.length + ":\"" + mixed_val + "\";";
        case "boolean":
            return "b:" + (mixed_val ? "1" : "0") + ";";
        case "object":
            if (mixed_val == null) return "N;";
            else if (mixed_val instanceof Array) {
                var idxobj = {
                    idx: -1
                };
                var map = [];
                for (var i = 0; i < mixed_val.length; i++) {
                    idxobj.idx++;
                    var ser = trx_addons_serialize(mixed_val[i]);
                    if (ser) map.push(trx_addons_serialize(idxobj.idx) + ser);
                }
                return "a:" + mixed_val.length + ":{" + map.join("") + "}";
            } else {
                var class_name = trx_addons_get_class(mixed_val);
                if (class_name == undefined) return false;
                var props = new Array();
                for (var prop in mixed_val) {
                    var ser = trx_addons_serialize(mixed_val[prop]);
                    if (ser) props.push(trx_addons_serialize(prop) + ser);
                }
                if (obj_to_array) return "a:" + props.length + ":{" + props.join("") + "}";
                else return "O:" + class_name.length + ":\"" + class_name + "\":" + props.length + ":{" + props.join("") + "}";
            }
        case "undefined":
            return "N;";
    }
    return false;
}

function trx_addons_get_class(obj) {
    "use strict";
    if (obj instanceof Object && !(obj instanceof Array) && !(obj instanceof Function) && obj.constructor) {
        var arr = obj.constructor.toString().match(/function\s*(\w+)/);
        if (arr && arr.length == 2) return arr[1];
    }
    return false;
}

function trx_addons_sc_fullheight_init(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    if (container === undefined || container.length === undefined || container.length == 0) return;
    container.find('.trx_addons_stretch_height').each(function() {
        "use strict";
        var fullheight_item = jQuery(this);
        if (jQuery(this).parents('div:hidden,article:hidden').length > 0) {
            return;
        }
        var wh = 0;
        var fullheight_row = jQuery(this).parents('.vc_row-o-full-height');
        if (fullheight_row.length > 0) {
            wh = fullheight_row.css('height') != 'auto' ? fullheight_row.height() : 'auto';
        } else {
            if (screen.height > 1000) {
                var adminbar = jQuery('#wpadminbar');
                wh = jQuery(window).height() - (adminbar.length > 0 ? adminbar.height() : 0);
            } else wh = 'auto';
        }
        if (wh == 'auto' || wh > 0) fullheight_item.height(wh);
    });
}
jQuery(document).ready(function() {
    "use strict";
    jQuery('.sc_recent_news_header_category_item_more').on('click', function() {
        "use strict";
        jQuery(this).toggleClass('opened').find('.sc_recent_news_header_more_categories').slideToggle();
    });
});
jQuery(document).on('action.init_sliders', trx_addons_init_sliders);
jQuery(document).on('action.init_hidden_elements', trx_addons_init_hidden_sliders);

function trx_addons_init_sliders(e, container) {
    "use strict";
    if (container.find('.sc_slider_controller:not(.inited)').length > 0) {
        container.find('.sc_slider_controller:not(.inited)').each(function() {
            "use strict";
            var controller = jQuery(this).addClass('inited');
            var slider_id = controller.data('slider-id');
            if (!slider_id) return;
            var controller_id = controller.attr('id');
            if (controller_id == undefined) {
                controller_id = 'sc_slider_controller_' + Math.random();
                controller_id = controller_id.replace('.', '');
                controller.attr('id', controller_id);
            }
            jQuery('#' + slider_id + ' .slider_swiper').attr('data-controller', controller_id);
            var controller_style = controller.data('style');
            var controller_effect = controller.data('effect');
            var controller_interval = controller.data('interval');
            var controller_height = controller.data('height');
            var controller_per_view = controller.data('slides-per-view');
            var controller_space = controller.data('slides-space');
            var controller_controls = controller.data('controls');
            var controller_html = '';
            jQuery('#' + slider_id + ' .swiper-slide').each(function(idx) {
                "use strict";
                var slide = jQuery(this);
                var image = slide.data('image');
                var title = slide.data('title');
                var cats = slide.data('cats');
                var date = slide.data('date');
                controller_html += '<div class="swiper-slide"' + ' style="' + (image !== undefined ? 'background-image: url(' + image + ');' : '') + '"' + '>' + '<div class="sc_slider_controller_info">' + '<span class="sc_slider_controller_info_number">' + (idx < 9 ? '0' : '') + (idx + 1) + '</span>' + '<span class="sc_slider_controller_info_title">' + title + '</span>' + '</div>' + '</div>';
            });
            controller.html('<div id="' + controller_id + '_outer"' + ' class="slider_swiper_outer slider_style_controller' + ' slider_outer_' + (controller_controls == 1 ? 'controls slider_outer_controls_side' : 'nocontrols') + ' slider_outer_nopagination' + ' slider_outer_' + (controller_per_view == 1 ? 'one' : 'multi') + '"' + '>' + '<div id="' + controller_id + '_swiper"' + ' class="slider_swiper swiper-slider-container' + ' slider_' + (controller_controls == 1 ? 'controls slider_controls_side' : 'nocontrols') + ' slider_nopagination' + ' slider_notitles' + ' slider_noresize' + ' slider_' + (controller_per_view == 1 ? 'one' : 'multi') + '"' + ' data-slides-min-width="100"' + ' data-controlled-slider="' + slider_id + '"' + (controller_effect !== undefined ? ' data-effect="' + controller_effect + '"' : '') + (controller_interval !== undefined ? ' data-interval="' + controller_interval + '"' : '') + (controller_per_view !== undefined ? ' data-slides-per-view="' + controller_per_view + '"' : '') + (controller_space !== undefined ? ' data-slides-space="' + controller_space + '"' : '') + (controller_height !== undefined ? ' style="height:' + controller_height + '"' : '') + '>' + '<div class="swiper-wrapper">' + controller_html + '</div>' + '</div>' + (controller_controls == 1 ? '<div class="slider_controls_wrap"><a class="slider_prev swiper-button-prev" href="#"></a><a class="slider_next swiper-button-next" href="#"></a></div>' : '') + '</div>');
        });
    }
    if (container.find('.slider_swiper:not(.inited)').length > 0) {
		setTimeout (function(){
			container.find('.slider_swiper:not(.inited)').each(function() {
				"use strict";
				if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
				var slider = jQuery(this);
				var id = slider.attr('id');
				if (id == undefined) {
					id = 'swiper_' + Math.random();
					id = id.replace('.', '');
					slider.attr('id', id);
				}
				var cont = slider.parent().hasClass('slider_swiper_outer') ? slider.parent().attr('id', id + '_outer') : slider;
				var cont_id = cont.attr('id');
				var is_controller = slider.parents('.sc_slider_controller').length > 0;
				var controller_id = slider.data('controller');
				slider.find('.swiper-slide').each(function(idx) {
					jQuery(this).attr('data-slide-number', idx);
				});
				slider.css({
					'display': 'block',
					'opacity': 0
				}).addClass(id).addClass('inited').data('settings', {
					mode: 'horizontal'
				});
				var smw = slider.data('slides-min-width');
				if (smw == undefined) {
					smw = 250;
					slider.attr('data-slides-min-width', smw);
				}
				var width = slider.width();
				if (width == 0) width = slider.parent().width();
				var spv = slider.data('slides-per-view');
				if (spv == undefined) {
					spv = 1;
					slider.attr('data-slides-per-view', spv);
				}
				if (width / spv < smw) spv = Math.max(1, Math.floor(width / smw));
				var space = slider.data('slides-space');
				if (space == undefined) space = 0;
				var interval = slider.data('interval');
				if (isNaN(interval)) interval = 0;
				if (TRX_ADDONS_STORAGE['swipers'] === undefined) TRX_ADDONS_STORAGE['swipers'] = {};
				TRX_ADDONS_STORAGE['swipers'][id] = new Swiper('.' + id, {
					calculateHeight: !slider.hasClass('slider_height_fixed'),
					resizeReInit: true,
					autoResize: true,
					effect: slider.data('effect') ? slider.data('effect') : 'slide',
					pagination: slider.hasClass('slider_pagination') ? '#' + cont_id + ' .slider_pagination_wrap' : false,
					paginationClickable: slider.hasClass('slider_pagination') ? '#' + cont_id + ' .slider_pagination_wrap' : false,
					paginationType: slider.hasClass('slider_pagination') && slider.data('pagination') ? slider.data('pagination') : 'bullets',
					nextButton: slider.hasClass('slider_controls') ? '#' + cont_id + ' .slider_next' : false,
					prevButton: slider.hasClass('slider_controls') ? '#' + cont_id + ' .slider_prev' : false,
					autoplay: slider.hasClass('slider_noautoplay') || interval == 0 ? false : parseInt(interval,10),
					autoplayDisableOnInteraction: true,
					initialSlide: 0,
					slidesPerView: spv,
					loopedSlides: spv,
					spaceBetween: space,
					speed: 600,
					centeredSlides: false,
					loop: true,
					grabCursor: !is_controller,
					slideToClickedSlide: is_controller,
					touchRatio: is_controller ? 0.2 : 1,
					onSlideChangeStart: function(swiper) {
						cont.find('.slider_titles_outside_wrap .active').removeClass('active').fadeOut();
						var controlled_slider = jQuery('#' + slider.data(is_controller ? 'controlled-slider' : 'controller') + ' .slider_swiper');
						var controlled_id = controlled_slider.attr('id');
						if (TRX_ADDONS_STORAGE['swipers'][controlled_id] && jQuery('#' + controlled_id).attr('data-busy') != 1) {
							slider.attr('data-busy', 1);
							setTimeout(function() {
								slider.attr('data-busy', 0);
							}, 300);
							var slide_number = jQuery(swiper.slides[swiper.activeIndex]).data('slide-number');
							var slide_idx = controlled_slider.find('[data-slide-number="' + slide_number + '"]').index();
							TRX_ADDONS_STORAGE['swipers'][controlled_id].slideTo(slide_idx);
						}
					},
					onSlideChangeEnd: function(swiper) {
						var titles = cont.find('.slider_titles_outside_wrap .slide_info');
						if (titles.length == 0) return;
						titles.eq(jQuery(swiper.slides[swiper.activeIndex]).data('slide-number')).addClass('active').fadeIn(300);
						cont.find('.trx_addons_video_player.with_cover.video_play').removeClass('video_play').find('.video_embed').remove();
						slider.attr('data-busy', 0);
					}
				});
				slider.attr('data-busy', 1).animate({
					'opacity': 1
				}, 'fast');
				setTimeout(function() {
					slider.attr('data-busy', 0);
				}, 300);
			});
		},500);
	}
}

function trx_addons_init_hidden_sliders(e, container) {
    "use strict";
    trx_addons_init_sliders(e, container);
    trx_addons_resize_sliders(container);
}

function trx_addons_resize_sliders(container) {
    "use strict";
    if (container === undefined) container = jQuery('body');
    container.find('.slider_swiper.inited').each(function() {
        "use strict";
        if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
        var id = jQuery(this).attr('id');
        var slider_width = jQuery(this).width();
        var slide = jQuery(this).find('.swiper-slide').eq(0);
        var slide_width = slide.width();
        var slide_height = slide.height();
        var last_width = jQuery(this).data('last-width');
        if (isNaN(last_width)) last_width = 0;
        var ratio = jQuery(this).data('ratio');
        if (ratio === undefined || ('' + ratio).indexOf(':') < 1) {
            ratio = slide_height > 0 ? slide_width + ':' + slide_height : "16:9";
            jQuery(this).attr('data-ratio', ratio);
        }
        ratio = ratio.split(':');
        var ratio_x = !isNaN(ratio[0]) ? Number(ratio[0]) : 16;
        var ratio_y = !isNaN(ratio[1]) ? Number(ratio[1]) : 9;
        if (!jQuery(this).hasClass('slider_noresize')) {
            jQuery(this).height(Math.floor(slide_width / ratio_x * ratio_y));
        }
        if (TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != 'auto') {
            if (last_width == 0 || last_width != slider_width) {
                var smw = jQuery(this).data('slides-min-width');
                var spv = jQuery(this).data('slides-per-view');
                if (slider_width / spv < smw) spv = Math.max(1, Math.floor(slider_width / smw));
                jQuery(this).data('last-width', slider_width);
                if (TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView != spv) {
                    TRX_ADDONS_STORAGE['swipers'][id].params.slidesPerView = spv;
                    TRX_ADDONS_STORAGE['swipers'][id].params.loopedSlides = spv;
                }
                TRX_ADDONS_STORAGE['swipers'][id].onResize();
            }
        }
    });
}
jQuery(document).on('action.init_shortcodes', function(e, container) {
    "use strict";
    var toc_menu = jQuery('#toc_menu');
    if (toc_menu.length == 0) trx_addons_build_page_toc();
    toc_menu = jQuery('#toc_menu:not(.inited)');
    if (toc_menu.length == 0) return;
    var toc_menu_items = toc_menu.addClass('inited').find('.toc_menu_item');
    trx_addons_detect_active_toc();
    var wheel_busy = false,
        wheel_time = 0;
    jQuery('.toc_menu_item > a').on('click', function(e) {
        "use strict";
        var href = jQuery(this).attr('href');
        if (href === undefined) return;
        var pos = href.indexOf('#');
        if (pos < 0 || href.length == 1) return;
        if (jQuery(href.substr(pos)).length > 0) {
            var loc = window.location.href;
            var pos2 = loc.indexOf('#');
            if (pos2 > 0) loc = loc.substring(0, pos2);
            var now = pos == 0;
            if (!now) now = loc == href.substring(0, pos);
            if (now) {
                wheel_busy = true;
                setTimeout(function() {
                    wheel_busy = false;
                }, trx_addons_browser_is_ios() ? 1200 : 100);
                trx_addons_document_animate_to(href.substr(pos), function() {
                    if (TRX_ADDONS_STORAGE['update_location_from_anchor'] == 1) trx_addons_document_set_location(pos == 0 ? loc + href : href);
                });
                e.preventDefault();
                return false;
            }
        }
    });
    jQuery(window).on('scroll', function() {
        "use strict";
        trx_addons_mark_active_toc();
    });
    trx_addons_mark_active_toc();
    if (TRX_ADDONS_STORAGE['scroll_to_anchor'] == 1) {
        var wheel_stop = false;
        jQuery(document).on('action.stop_wheel_handlers', function(e) {
            "use strict";
            wheel_stop = true;
        });
        jQuery(document).on('action.start_wheel_handlers', function(e) {
            "use strict";
            wheel_stop = false;
        });
        jQuery(window).bind('mousewheel DOMMouseScroll', function(e) {
            if (screen.width < 960 || jQuery(window).width() < 960 || wheel_stop || trx_addons_browser_is_ios()) {
                return;
            }
            if (wheel_busy || wheel_time == e.timeStamp) {
                e.preventDefault();
                return false;
            }
            wheel_time = e.timeStamp;
            var wheel_dir = e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? -1 : 1;
            var items = trx_addons_detect_active_toc();
            var doit = false;
            if (wheel_dir == -1) {
                doit = true;
                setTimeout(function() {
                    if (items.prev >= 0) toc_menu_items.eq(items.prev).find('a').trigger('click');
                    else trx_addons_document_animate_to(0);
                }, 10);
            } else {
                if (items.next >= 0) {
                    doit = true;
                    setTimeout(function() {
                        toc_menu_items.eq(items.next).find('a').trigger('click');
                    }, 10);
                }
            }
            if (doit) {
                wheel_busy = true;
                setTimeout(function() {
                    wheel_busy = false;
                }, trx_addons_browser_is_ios() ? 1200 : 100);
                e.preventDefault();
                return false;
            }
        });
    }

    function trx_addons_detect_active_toc() {
        "use strict";
        var items = {
            loc: '',
            current: [],
            prev: -1,
            next: -1
        };
        toc_menu_items.each(function(idx) {
            "use strict";
            var id = jQuery(this).find('a').attr('href');
            var pos = id.indexOf('#');
            if (pos < 0 || id.length == 1) return;
            var loc = window.location.href;
            var pos2 = loc.indexOf('#');
            if (pos2 > 0) loc = loc.substring(0, pos2);
            var now = pos == 0;
            if (!now) now = loc == href.substring(0, pos);
            if (!now) return;
            var off = jQuery(id).offset().top;
            var id_next = jQuery(this).next().find('a').attr('href');
            var off_next = id_next ? jQuery(id_next).offset().top : 1000000;
            var scroll_offset = jQuery(window).scrollTop();
            if (off > scroll_offset + 50) {
                if (items.next < 0) items.next = idx;
            } else if (off < scroll_offset - 50) items.prev = idx;
            if (off < scroll_offset + jQuery(window).height() * 0.8 && scroll_offset < off_next - 50) {
                items.current.push(idx);
                if (items.loc == '') items.loc = pos == 0 ? loc + id : id;
            }
        });
        return items;
    }

    function trx_addons_mark_active_toc() {
        "use strict";
        var items = trx_addons_detect_active_toc();
        toc_menu_items.removeClass('toc_menu_item_active');
        for (var i = 0; i < items.current.length; i++) {
            toc_menu_items.eq(items.current[i]).addClass('toc_menu_item_active');
            if (items.loc != '' && TRX_ADDONS_STORAGE['update_location_from_anchor'] == 1 && !trx_addons_browser_is_mobile() && !trx_addons_browser_is_ios() && !wheel_busy) trx_addons_document_set_location(items.loc);
        }
    }
});

function trx_addons_build_page_toc() {
    "use strict";
    var toc = '',
        toc_count = 0;
    jQuery('[id^="toc_menu_"],.sc_anchor').each(function(idx) {
        "use strict";
        var obj = jQuery(this);
        var obj_id = obj.attr('id') || ('sc_anchor_' + Math.random()).replace('.', '');
        var row = obj.parents('.wpb_row');
        if (row.length == 0) row = obj.parent();
        var row_id = row.length > 0 && row.attr('id') != undefined && row.attr('id') != '' ? row.attr('id') : '';
        var id = row_id || obj_id.substr(10);
        if (row.length > 0 && row_id == '') {
            row.attr('id', id);
        }
        var url = obj.data('url');
        var icon = obj.data('icon') || 'toc_menu_icon_default';
        var title = obj.attr('title');
        var description = obj.data('description');
        var separator = obj.data('separator');
        toc_count++;
        toc += '<div class="toc_menu_item' + (separator == 'yes' ? ' toc_menu_separator' : '') + '">' + (title || description ? '<a href="' + (url ? url : '#' + id) + '" class="toc_menu_description">' + (title ? '<span class="toc_menu_description_title">' + title + '</span>' : '') + (description ? '<span class="toc_menu_description_text">' + description + '</span>' : '') + '</a>' : '') + '<a href="' + (url ? url : '#' + id) + '" class="toc_menu_icon ' + icon + '">' + '</a>' + '</div>';
    });
    if (toc_count > 0) jQuery('body').append('<div id="toc_menu" class="toc_menu"><div class="toc_menu_inner">' + toc + '</div></div>');
}(function() {
    var initializing = false;
    window.JQClass = function() {};
    JQClass.classes = {};
    JQClass.extend = function extender(prop) {
        var base = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;
        for (var name in prop) {
            prototype[name] = typeof prop[name] == 'function' && typeof base[name] == 'function' ? (function(name, fn) {
                return function() {
                    var __super = this._super;
                    this._super = function(args) {
                        return base[name].apply(this, args || []);
                    };
                    var ret = fn.apply(this, arguments);
                    this._super = __super;
                    return ret;
                };
            })(name, prop[name]) : prop[name];
        }

        function JQClass() {
            if (!initializing && this._init) {
                this._init.apply(this, arguments);
            }
        }
        JQClass.prototype = prototype;
        JQClass.prototype.constructor = JQClass;
        JQClass.extend = extender;
        return JQClass;
    };
})();
(function($) {
	"use strict";
    JQClass.classes.JQPlugin = JQClass.extend({
        name: 'plugin',
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function() {
            return 'is-' + this.name;
        },
        _init: function() {
            $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
            var jqName = camelCase(this.name);
            $[jqName] = this;
            $.fn[jqName] = function(options) {
                var otherArgs = Array.prototype.slice.call(arguments, 1);
                if ($[jqName]._isNotChained(options, otherArgs)) {
                    return $[jqName][options].apply($[jqName], [this[0]].concat(otherArgs));
                }
                return this.each(function() {
                    if (typeof options === 'string') {
                        if (options[0] === '_' || !$[jqName][options]) {
                            throw 'Unknown method: ' + options;
                        }
                        $[jqName][options].apply($[jqName], [this].concat(otherArgs));
                    } else {
                        $[jqName]._attach(this, options);
                    }
                });
            };
        },
        setDefaults: function(options) {
            $.extend(this.defaultOptions, options || {});
        },
        _isNotChained: function(name, otherArgs) {
            if (name === 'option' && (otherArgs.length === 0 || (otherArgs.length === 1 && typeof otherArgs[0] === 'string'))) {
                return true;
            }
            return $.inArray(name, this._getters) > -1;
        },
        _attach: function(elem, options) {
            elem = $(elem);
            if (elem.hasClass(this._getMarker())) {
                return;
            }
            elem.addClass(this._getMarker());
            options = $.extend({}, this.defaultOptions, this._getMetadata(elem), options || {});
            var inst = $.extend({
                name: this.name,
                elem: elem,
                options: options
            }, this._instSettings(elem, options));
            elem.data(this.name, inst);
            this._postAttach(elem, inst);
            this.option(elem, options);
        },
        _instSettings: function(elem, options) {
            return {};
        },
        _postAttach: function(elem, inst) {},
        _getMetadata: function(elem) {
            try {
                var data = elem.data(this.name.toLowerCase()) || '';
                data = data.replace(/'/g, '"');
                data = data.replace(/([a-zA-Z0-9]+):/g, function(match, group, i) {
                    var count = data.substring(0, i).match(/"/g);
                    return (!count || count.length % 2 === 0 ? '"' + group + '":' : group + ':');
                });
                data = $.parseJSON('{' + data + '}');
                for (var name in data) {
                    var value = data[name];
                    if (typeof value === 'string' && value.match(/^new Date\((.*)\)$/)) {
                        data[name] = eval(value);
                    }
                }
                return data;
            } catch (e) {
                return {};
            }
        },
        _getInst: function(elem) {
            return $(elem).data(this.name) || {};
        },
        option: function(elem, name, value) {
            elem = $(elem);
            var inst = elem.data(this.name);
            if (!name || (typeof name === 'string' && value == null)) {
                var options = (inst || {}).options;
                return (options && name ? options[name] : options);
            }
            if (!elem.hasClass(this._getMarker())) {
                return;
            }
            var options = name || {};
            if (typeof name === 'string') {
                options = {};
                options[name] = value;
            }
            this._optionsChanged(elem, inst, options);
            $.extend(inst.options, options);
        },
        _optionsChanged: function(elem, inst, options) {},
        destroy: function(elem) {
            elem = $(elem);
            if (!elem.hasClass(this._getMarker())) {
                return;
            }
            this._preDestroy(elem, this._getInst(elem));
            elem.removeData(this.name).removeClass(this._getMarker());
        },
        _preDestroy: function(elem, inst) {}
    });

    function camelCase(name) {
        return name.replace(/-([a-z])/g, function(match, group) {
            return group.toUpperCase();
        });
    }
    $.JQPlugin = {
        createPlugin: function(superClass, overrides) {
            if (typeof superClass === 'object') {
                overrides = superClass;
                superClass = 'JQPlugin';
            }
            superClass = camelCase(superClass);
            var className = camelCase(overrides.name);
            JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
            new JQClass.classes[className]();
        }
    };
})(jQuery);
(function($) {
	"use strict";
    var pluginName = 'countdown';
    var Y = 0;
    var O = 1;
    var W = 2;
    var D = 3;
    var H = 4;
    var M = 5;
    var S = 6;
    $.JQPlugin.createPlugin({
        name: pluginName,
        defaultOptions: {
            until: null,
            since: null,
            timezone: null,
            serverSync: null,
            format: 'dHMS',
            layout: '',
            compact: false,
            padZeroes: false,
            significant: 0,
            description: '',
            expiryUrl: '',
            expiryText: '',
            alwaysExpire: false,
            onExpiry: null,
            onTick: null,
            tickInterval: 1
        },
        regionalOptions: {
            '': {
                labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
                labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
                compactLabels: ['y', 'm', 'w', 'd'],
                whichLabels: null,
                digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
                timeSeparator: ':',
                isRTL: false
            }
        },
        _getters: ['getTimes'],
        _rtlClass: pluginName + '-rtl',
        _sectionClass: pluginName + '-section',
        _amountClass: pluginName + '-amount',
        _periodClass: pluginName + '-period',
        _rowClass: pluginName + '-row',
        _holdingClass: pluginName + '-holding',
        _showClass: pluginName + '-show',
        _descrClass: pluginName + '-descr',
        _timerElems: [],
        _init: function() {
            var self = this;
            this._super();
            this._serverSyncs = [];
            var now = (typeof Date.now == 'function' ? Date.now : function() {
                return new Date().getTime();
            });
            var perfAvail = (window.performance && typeof window.performance.now == 'function');

            function timerCallBack(timestamp) {
                var drawStart = (timestamp < 1e12 ? (perfAvail ? (performance.now() + performance.timing.navigationStart) : now()) : timestamp || now());
                if (drawStart - animationStartTime >= 1000) {
                    self._updateElems();
                    animationStartTime = drawStart;
                }
                requestAnimationFrame(timerCallBack);
            }
            var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
            var animationStartTime = 0;
            if (!requestAnimationFrame || $.noRequestAnimationFrame) {
                $.noRequestAnimationFrame = null;
                setInterval(function() {
                    self._updateElems();
                }, 980);
            } else {
                animationStartTime = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || now();
                requestAnimationFrame(timerCallBack);
            }
        },
        UTCDate: function(tz, year, month, day, hours, mins, secs, ms) {
            if (typeof year == 'object' && year.constructor == Date) {
                ms = year.getMilliseconds();
                secs = year.getSeconds();
                mins = year.getMinutes();
                hours = year.getHours();
                day = year.getDate();
                month = year.getMonth();
                year = year.getFullYear();
            }
            var d = new Date();
            d.setUTCFullYear(year);
            d.setUTCDate(1);
            d.setUTCMonth(month || 0);
            d.setUTCDate(day || 1);
            d.setUTCHours(hours || 0);
            d.setUTCMinutes((mins || 0) - (Math.abs(tz) < 30 ? tz * 60 : tz));
            d.setUTCSeconds(secs || 0);
            d.setUTCMilliseconds(ms || 0);
            return d;
        },
        periodsToSeconds: function(periods) {
            return periods[0] * 31557600 + periods[1] * 2629800 + periods[2] * 604800 + periods[3] * 86400 + periods[4] * 3600 + periods[5] * 60 + periods[6];
        },
        resync: function() {
            var self = this;
            $('.' + this._getMarker()).each(function() {
                var inst = $.data(this, self.name);
                if (inst.options.serverSync) {
                    var serverSync = null;
                    for (var i = 0; i < self._serverSyncs.length; i++) {
                        if (self._serverSyncs[i][0] == inst.options.serverSync) {
                            serverSync = self._serverSyncs[i];
                            break;
                        }
                    }
                    if (serverSync[2] == null) {
                        var serverResult = ($.isFunction(inst.options.serverSync) ? inst.options.serverSync.apply(this, []) : null);
                        serverSync[2] = (serverResult ? new Date().getTime() - serverResult.getTime() : 0) - serverSync[1];
                    }
                    if (inst._since) {
                        inst._since.setMilliseconds(inst._since.getMilliseconds() + serverSync[2]);
                    }
                    inst._until.setMilliseconds(inst._until.getMilliseconds() + serverSync[2]);
                }
            });
            for (var i = 0; i < self._serverSyncs.length; i++) {
                if (self._serverSyncs[i][2] != null) {
                    self._serverSyncs[i][1] += self._serverSyncs[i][2];
                    delete self._serverSyncs[i][2];
                }
            }
        },
        _instSettings: function(elem, options) {
            return {
                _periods: [0, 0, 0, 0, 0, 0, 0]
            };
        },
        _addElem: function(elem) {
            if (!this._hasElem(elem)) {
                this._timerElems.push(elem);
            }
        },
        _hasElem: function(elem) {
            return ($.inArray(elem, this._timerElems) > -1);
        },
        _removeElem: function(elem) {
            this._timerElems = $.map(this._timerElems, function(value) {
                return (value == elem ? null : value);
            });
        },
        _updateElems: function() {
            for (var i = this._timerElems.length - 1; i >= 0; i--) {
                this._updateCountdown(this._timerElems[i]);
            }
        },
        _optionsChanged: function(elem, inst, options) {
            if (options.layout) {
                options.layout = options.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            }
            this._resetExtraLabels(inst.options, options);
            var timezoneChanged = (inst.options.timezone != options.timezone);
            $.extend(inst.options, options);
            this._adjustSettings(elem, inst, options.until != null || options.since != null || timezoneChanged);
            var now = new Date();
            if ((inst._since && inst._since < now) || (inst._until && inst._until > now)) {
                this._addElem(elem[0]);
            }
            this._updateCountdown(elem, inst);
        },
        _updateCountdown: function(elem, inst) {
            elem = elem.jquery ? elem : $(elem);
            inst = inst || this._getInst(elem);
            if (!inst) {
                return;
            }
            elem.html(this._generateHTML(inst)).toggleClass(this._rtlClass, inst.options.isRTL);
            if ($.isFunction(inst.options.onTick)) {
                var periods = inst._hold != 'lap' ? inst._periods : this._calculatePeriods(inst, inst._show, inst.options.significant, new Date());
                if (inst.options.tickInterval == 1 || this.periodsToSeconds(periods) % inst.options.tickInterval == 0) {
                    inst.options.onTick.apply(elem[0], [periods]);
                }
            }
            var expired = inst._hold != 'pause' && (inst._since ? inst._now.getTime() < inst._since.getTime() : inst._now.getTime() >= inst._until.getTime());
            if (expired && !inst._expiring) {
                inst._expiring = true;
                if (this._hasElem(elem[0]) || inst.options.alwaysExpire) {
                    this._removeElem(elem[0]);
                    if ($.isFunction(inst.options.onExpiry)) {
                        inst.options.onExpiry.apply(elem[0], []);
                    }
                    if (inst.options.expiryText) {
                        var layout = inst.options.layout;
                        inst.options.layout = inst.options.expiryText;
                        this._updateCountdown(elem[0], inst);
                        inst.options.layout = layout;
                    }
                    if (inst.options.expiryUrl) {
                        window.location = inst.options.expiryUrl;
                    }
                }
                inst._expiring = false;
            } else if (inst._hold == 'pause') {
                this._removeElem(elem[0]);
            }
        },
        _resetExtraLabels: function(base, options) {
            for (var n in options) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
                    base[n] = options[n];
                }
            }
            for (var n in base) {
                if (n.match(/[Ll]abels[02-9]|compactLabels1/) && typeof options[n] === 'undefined') {
                    base[n] = null;
                }
            }
        },
        _adjustSettings: function(elem, inst, recalc) {
            var serverEntry = null;
            for (var i = 0; i < this._serverSyncs.length; i++) {
                if (this._serverSyncs[i][0] == inst.options.serverSync) {
                    serverEntry = this._serverSyncs[i][1];
                    break;
                }
            }
            if (serverEntry != null) {
                var serverOffset = (inst.options.serverSync ? serverEntry : 0);
                var now = new Date();
            } else {
                var serverResult = ($.isFunction(inst.options.serverSync) ? inst.options.serverSync.apply(elem[0], []) : null);
                var now = new Date();
                var serverOffset = (serverResult ? now.getTime() - serverResult.getTime() : 0);
                this._serverSyncs.push([inst.options.serverSync, serverOffset]);
            }
            var timezone = inst.options.timezone;
            timezone = (timezone == null ? -now.getTimezoneOffset() : timezone);
            if (recalc || (!recalc && inst._until == null && inst._since == null)) {
                inst._since = inst.options.since;
                if (inst._since != null) {
                    inst._since = this.UTCDate(timezone, this._determineTime(inst._since, null));
                    if (inst._since && serverOffset) {
                        inst._since.setMilliseconds(inst._since.getMilliseconds() + serverOffset);
                    }
                }
                inst._until = this.UTCDate(timezone, this._determineTime(inst.options.until, now));
                if (serverOffset) {
                    inst._until.setMilliseconds(inst._until.getMilliseconds() + serverOffset);
                }
            }
            inst._show = this._determineShow(inst);
        },
        _preDestroy: function(elem, inst) {
            this._removeElem(elem[0]);
            elem.empty();
        },
        pause: function(elem) {
            this._hold(elem, 'pause');
        },
        lap: function(elem) {
            this._hold(elem, 'lap');
        },
        resume: function(elem) {
            this._hold(elem, null);
        },
        toggle: function(elem) {
            var inst = $.data(elem, this.name) || {};
            this[!inst._hold ? 'pause' : 'resume'](elem);
        },
        toggleLap: function(elem) {
            var inst = $.data(elem, this.name) || {};
            this[!inst._hold ? 'lap' : 'resume'](elem);
        },
        _hold: function(elem, hold) {
            var inst = $.data(elem, this.name);
            if (inst) {
                if (inst._hold == 'pause' && !hold) {
                    inst._periods = inst._savePeriods;
                    var sign = (inst._since ? '-' : '+');
                    inst[inst._since ? '_since' : '_until'] = this._determineTime(sign + inst._periods[0] + 'y' + sign + inst._periods[1] + 'o' + sign + inst._periods[2] + 'w' + sign + inst._periods[3] + 'd' + sign + inst._periods[4] + 'h' + sign + inst._periods[5] + 'm' + sign + inst._periods[6] + 's');
                    this._addElem(elem);
                }
                inst._hold = hold;
                inst._savePeriods = (hold == 'pause' ? inst._periods : null);
                $.data(elem, this.name, inst);
                this._updateCountdown(elem, inst);
            }
        },
        getTimes: function(elem) {
            var inst = $.data(elem, this.name);
            return (!inst ? null : (inst._hold == 'pause' ? inst._savePeriods : (!inst._hold ? inst._periods : this._calculatePeriods(inst, inst._show, inst.options.significant, new Date()))));
        },
        _determineTime: function(setting, defaultTime) {
            var self = this;
            var offsetNumeric = function(offset) {
                var time = new Date();
                time.setTime(time.getTime() + offset * 1000);
                return time;
            };
            var offsetString = function(offset) {
                offset = offset.toLowerCase();
                var time = new Date();
                var year = time.getFullYear();
                var month = time.getMonth();
                var day = time.getDate();
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();
                var pattern = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
                var matches = pattern.exec(offset);
                while (matches) {
                    switch (matches[2] || 's') {
                        case 's':
                            second += parseInt(matches[1], 10);
                            break;
                        case 'm':
                            minute += parseInt(matches[1], 10);
                            break;
                        case 'h':
                            hour += parseInt(matches[1], 10);
                            break;
                        case 'd':
                            day += parseInt(matches[1], 10);
                            break;
                        case 'w':
                            day += parseInt(matches[1], 10) * 7;
                            break;
                        case 'o':
                            month += parseInt(matches[1], 10);
                            day = Math.min(day, self._getDaysInMonth(year, month));
                            break;
                        case 'y':
                            year += parseInt(matches[1], 10);
                            day = Math.min(day, self._getDaysInMonth(year, month));
                            break;
                    }
                    matches = pattern.exec(offset);
                }
                return new Date(year, month, day, hour, minute, second, 0);
            };
            var time = (setting == null ? defaultTime : (typeof setting == 'string' ? offsetString(setting) : (typeof setting == 'number' ? offsetNumeric(setting) : setting)));
            if (time) time.setMilliseconds(0);
            return time;
        },
        _getDaysInMonth: function(year, month) {
            return 32 - new Date(year, month, 32).getDate();
        },
        _normalLabels: function(num) {
            return num;
        },
        _generateHTML: function(inst) {
            var self = this;
            inst._periods = (inst._hold ? inst._periods : this._calculatePeriods(inst, inst._show, inst.options.significant, new Date()));
            var shownNonZero = false;
            var showCount = 0;
            var sigCount = inst.options.significant;
            var show = $.extend({}, inst._show);
            for (var period = Y; period <= S; period++) {
                shownNonZero |= (inst._show[period] == '?' && inst._periods[period] > 0);
                show[period] = (inst._show[period] == '?' && !shownNonZero ? null : inst._show[period]);
                showCount += (show[period] ? 1 : 0);
                sigCount -= (inst._periods[period] > 0 ? 1 : 0);
            }
            var showSignificant = [false, false, false, false, false, false, false];
            for (var period = S; period >= Y; period--) {
                if (inst._show[period]) {
                    if (inst._periods[period]) {
                        showSignificant[period] = true;
                    } else {
                        showSignificant[period] = sigCount > 0;
                        sigCount--;
                    }
                }
            }
            var labels = (inst.options.compact ? inst.options.compactLabels : inst.options.labels);
            var whichLabels = inst.options.whichLabels || this._normalLabels;
            var showCompact = function(period) {
                var labelsNum = inst.options['compactLabels' + whichLabels(inst._periods[period])];
                return (show[period] ? self._translateDigits(inst, inst._periods[period]) + (labelsNum ? labelsNum[period] : labels[period]) + ' ' : '');
            };
            var minDigits = (inst.options.padZeroes ? 2 : 1);
            var showFull = function(period) {
                var labelsNum = inst.options['labels' + whichLabels(inst._periods[period])];
                return ((!inst.options.significant && show[period]) || (inst.options.significant && showSignificant[period]) ? '<span class="' + self._sectionClass + '">' + '<span class="' + self._amountClass + '">' + self._minDigits(inst, inst._periods[period], minDigits) + '</span>' + '<span class="' + self._periodClass + '">' + (labelsNum ? labelsNum[period] : labels[period]) + '</span></span>' : '');
            };
            return (inst.options.layout ? this._buildLayout(inst, show, inst.options.layout, inst.options.compact, inst.options.significant, showSignificant) : ((inst.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (inst._hold ? ' ' + this._holdingClass : '') + '">' + showCompact(Y) + showCompact(O) + showCompact(W) + showCompact(D) + (show[H] ? this._minDigits(inst, inst._periods[H], 2) : '') + (show[M] ? (show[H] ? inst.options.timeSeparator : '') + this._minDigits(inst, inst._periods[M], 2) : '') + (show[S] ? (show[H] || show[M] ? inst.options.timeSeparator : '') + this._minDigits(inst, inst._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (inst.options.significant || showCount) + (inst._hold ? ' ' + this._holdingClass : '') + '">' + showFull(Y) + showFull(O) + showFull(W) + showFull(D) + showFull(H) + showFull(M) + showFull(S)) + '</span>' + (inst.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + inst.options.description + '</span>' : '')));
        },
        _buildLayout: function(inst, show, layout, compact, significant, showSignificant) {
            var labels = inst.options[compact ? 'compactLabels' : 'labels'];
            var whichLabels = inst.options.whichLabels || this._normalLabels;
            var labelFor = function(index) {
                return (inst.options[(compact ? 'compactLabels' : 'labels') + whichLabels(inst._periods[index])] || labels)[index];
            };
            var digit = function(value, position) {
                return inst.options.digits[Math.floor(value / position) % 10];
            };
            var subs = {
                desc: inst.options.description,
                sep: inst.options.timeSeparator,
                yl: labelFor(Y),
                yn: this._minDigits(inst, inst._periods[Y], 1),
                ynn: this._minDigits(inst, inst._periods[Y], 2),
                ynnn: this._minDigits(inst, inst._periods[Y], 3),
                y1: digit(inst._periods[Y], 1),
                y10: digit(inst._periods[Y], 10),
                y100: digit(inst._periods[Y], 100),
                y1000: digit(inst._periods[Y], 1000),
                ol: labelFor(O),
                on: this._minDigits(inst, inst._periods[O], 1),
                onn: this._minDigits(inst, inst._periods[O], 2),
                onnn: this._minDigits(inst, inst._periods[O], 3),
                o1: digit(inst._periods[O], 1),
                o10: digit(inst._periods[O], 10),
                o100: digit(inst._periods[O], 100),
                o1000: digit(inst._periods[O], 1000),
                wl: labelFor(W),
                wn: this._minDigits(inst, inst._periods[W], 1),
                wnn: this._minDigits(inst, inst._periods[W], 2),
                wnnn: this._minDigits(inst, inst._periods[W], 3),
                w1: digit(inst._periods[W], 1),
                w10: digit(inst._periods[W], 10),
                w100: digit(inst._periods[W], 100),
                w1000: digit(inst._periods[W], 1000),
                dl: labelFor(D),
                dn: this._minDigits(inst, inst._periods[D], 1),
                dnn: this._minDigits(inst, inst._periods[D], 2),
                dnnn: this._minDigits(inst, inst._periods[D], 3),
                d1: digit(inst._periods[D], 1),
                d10: digit(inst._periods[D], 10),
                d100: digit(inst._periods[D], 100),
                d1000: digit(inst._periods[D], 1000),
                hl: labelFor(H),
                hn: this._minDigits(inst, inst._periods[H], 1),
                hnn: this._minDigits(inst, inst._periods[H], 2),
                hnnn: this._minDigits(inst, inst._periods[H], 3),
                h1: digit(inst._periods[H], 1),
                h10: digit(inst._periods[H], 10),
                h100: digit(inst._periods[H], 100),
                h1000: digit(inst._periods[H], 1000),
                ml: labelFor(M),
                mn: this._minDigits(inst, inst._periods[M], 1),
                mnn: this._minDigits(inst, inst._periods[M], 2),
                mnnn: this._minDigits(inst, inst._periods[M], 3),
                m1: digit(inst._periods[M], 1),
                m10: digit(inst._periods[M], 10),
                m100: digit(inst._periods[M], 100),
                m1000: digit(inst._periods[M], 1000),
                sl: labelFor(S),
                sn: this._minDigits(inst, inst._periods[S], 1),
                snn: this._minDigits(inst, inst._periods[S], 2),
                snnn: this._minDigits(inst, inst._periods[S], 3),
                s1: digit(inst._periods[S], 1),
                s10: digit(inst._periods[S], 10),
                s100: digit(inst._periods[S], 100),
                s1000: digit(inst._periods[S], 1000)
            };
            var html = layout;
            for (var i = Y; i <= S; i++) {
                var period = 'yowdhms'.charAt(i);
                var re = new RegExp('\\{' + period + '<\\}([\\s\\S]*)\\{' + period + '>\\}', 'g');
                html = html.replace(re, ((!significant && show[i]) || (significant && showSignificant[i]) ? '$1' : ''));
            }
            $.each(subs, function(n, v) {
                var re = new RegExp('\\{' + n + '\\}', 'g');
                html = html.replace(re, v);
            });
            return html;
        },
        _minDigits: function(inst, value, len) {
            value = '' + value;
            if (value.length >= len) {
                return this._translateDigits(inst, value);
            }
            value = '0000000000' + value;
            return this._translateDigits(inst, value.substr(value.length - len));
        },
        _translateDigits: function(inst, value) {
            return ('' + value).replace(/[0-9]/g, function(digit) {
                return inst.options.digits[digit];
            });
        },
        _determineShow: function(inst) {
            var format = inst.options.format;
            var show = [];
            show[Y] = (format.match('y') ? '?' : (format.match('Y') ? '!' : null));
            show[O] = (format.match('o') ? '?' : (format.match('O') ? '!' : null));
            show[W] = (format.match('w') ? '?' : (format.match('W') ? '!' : null));
            show[D] = (format.match('d') ? '?' : (format.match('D') ? '!' : null));
            show[H] = (format.match('h') ? '?' : (format.match('H') ? '!' : null));
            show[M] = (format.match('m') ? '?' : (format.match('M') ? '!' : null));
            show[S] = (format.match('s') ? '?' : (format.match('S') ? '!' : null));
            return show;
        },
        _calculatePeriods: function(inst, show, significant, now) {
            inst._now = now;
            inst._now.setMilliseconds(0);
            var until = new Date(inst._now.getTime());
            if (inst._since) {
                if (now.getTime() < inst._since.getTime()) {
                    inst._now = now = until;
                } else {
                    now = inst._since;
                }
            } else {
                until.setTime(inst._until.getTime());
                if (now.getTime() > inst._until.getTime()) {
                    inst._now = now = until;
                }
            }
            var periods = [0, 0, 0, 0, 0, 0, 0];
            if (show[Y] || show[O]) {
                var lastNow = this._getDaysInMonth(now.getFullYear(), now.getMonth());
                var lastUntil = this._getDaysInMonth(until.getFullYear(), until.getMonth());
                var sameDay = (until.getDate() == now.getDate() || (until.getDate() >= Math.min(lastNow, lastUntil) && now.getDate() >= Math.min(lastNow, lastUntil)));
                var getSecs = function(date) {
                    return (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();
                };
                var months = Math.max(0, (until.getFullYear() - now.getFullYear()) * 12 + until.getMonth() - now.getMonth() + ((until.getDate() < now.getDate() && !sameDay) || (sameDay && getSecs(until) < getSecs(now)) ? -1 : 0));
                periods[Y] = (show[Y] ? Math.floor(months / 12) : 0);
                periods[O] = (show[O] ? months - periods[Y] * 12 : 0);
                now = new Date(now.getTime());
                var wasLastDay = (now.getDate() == lastNow);
                var lastDay = this._getDaysInMonth(now.getFullYear() + periods[Y], now.getMonth() + periods[O]);
                if (now.getDate() > lastDay) {
                    now.setDate(lastDay);
                }
                now.setFullYear(now.getFullYear() + periods[Y]);
                now.setMonth(now.getMonth() + periods[O]);
                if (wasLastDay) {
                    now.setDate(lastDay);
                }
            }
            var diff = Math.floor((until.getTime() - now.getTime()) / 1000);
            var extractPeriod = function(period, numSecs) {
                periods[period] = (show[period] ? Math.floor(diff / numSecs) : 0);
                diff -= periods[period] * numSecs;
            };
            extractPeriod(W, 604800);
            extractPeriod(D, 86400);
            extractPeriod(H, 3600);
            extractPeriod(M, 60);
            extractPeriod(S, 1);
            if (diff > 0 && !inst._since) {
                var multiplier = [1, 12, 4.3482, 7, 24, 60, 60];
                var lastShown = S;
                var max = 1;
                for (var period = S; period >= Y; period--) {
                    if (show[period]) {
                        if (periods[lastShown] >= max) {
                            periods[lastShown] = 0;
                            diff = 1;
                        }
                        if (diff > 0) {
                            periods[period] ++;
                            diff = 0;
                            lastShown = period;
                            max = 1;
                        }
                    }
                    max *= multiplier[period];
                }
            }
            if (significant) {
                for (var period = Y; period <= S; period++) {
                    if (significant && periods[period]) {
                        significant--;
                    } else if (!significant) {
                        periods[period] = 0;
                    }
                }
            }
            return periods;
        }
    });
})(jQuery);
jQuery(document).on('action.init_hidden_elements', trx_addons_sc_countdown_init);
jQuery(document).on('action.init_shortcodes', trx_addons_sc_countdown_init);

function trx_addons_sc_countdown_init(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    container.find('.sc_countdown:not(.inited)').each(function() {
        "use strict";
        jQuery(this).addClass('inited');
        var id = jQuery(this).attr('id');
        var curDate = new Date();
        var curDateTimeStr = curDate.getFullYear() + '-' + (curDate.getMonth() < 9 ? '0' : '') + (curDate.getMonth() + 1) + '-' + (curDate.getDate() < 10 ? '0' : '') + curDate.getDate() + ' ' + (curDate.getHours() < 10 ? '0' : '') + curDate.getHours() + ':' + (curDate.getMinutes() < 10 ? '0' : '') + curDate.getMinutes() + ':' + (curDate.getSeconds() < 10 ? '0' : '') + curDate.getSeconds();
        var interval = 1;
        var endDateStr = jQuery(this).data('date');
        var endDateParts = endDateStr.split('-');
        var endTimeStr = jQuery(this).data('time');
        var endTimeParts = endTimeStr.split(':');
        if (endTimeParts.length < 3) endTimeParts[2] = '00';
        var endDateTimeStr = endDateStr + ' ' + endTimeStr;
        if (curDateTimeStr < endDateTimeStr) {
            jQuery(this).find('.sc_countdown_placeholder').countdown({
                until: new Date(endDateParts[0], endDateParts[1] - 1, endDateParts[2], endTimeParts[0], endTimeParts[1], endTimeParts[2]),
                tickInterval: interval,
                onTick: trx_addons_sc_countdown
            });
        } else {
            jQuery(this).find('.sc_countdown_placeholder').countdown({
                since: new Date(endDateParts[0], endDateParts[1] - 1, endDateParts[2], endTimeParts[0], endTimeParts[1], endTimeParts[2]),
                tickInterval: interval,
                onTick: trx_addons_sc_countdown
            });
        }
    });
}

function trx_addons_sc_countdown(dt) {
    "use strict";
    var counter = jQuery(this).parent();
    for (var i = 3; i < dt.length; i++) {
        var v = (dt[i] < 10 ? '0' : '') + dt[i];
        var item = counter.find('.sc_countdown_item').eq(i - 3);
        var digits = item.find('.sc_countdown_digits span').addClass('hide');
        for (var ch = v.length - 1; ch >= 0; ch--) {
            digits.eq(ch + (i == 3 && v.length < 3 ? 1 : 0)).removeClass('hide').text(v.substr(ch, 1));
        }
        trx_addons_sc_countdown_update_canvas(item, dt[i]);
    }
}

function trx_addons_sc_countdown_update_canvas(item, value) {
	"use strict";
    var canvas = item.find('canvas');
    if (canvas.length == 0) return;
    var digits = canvas.next();
    var brd = parseInt(digits.css('border-top-width'),10);
    var w = Math.ceil(digits.width() + 2 * brd);
    var needRepaint = false;
    if (canvas.attr('width') != w) {
        needRepaint = true;
        canvas.attr({
            'width': w,
            'height': w
        });
    }
    if (item.data('old-value') == value && !needRepaint) return;
    item.data('old-value', value);
    var percent = value * 100 / canvas.data('max-value');
    var angle = 360 * percent / 100;
    var Ar = angle * Math.PI / 180;
    var canvas_dom = canvas.get(0);
    var context = canvas_dom.getContext('2d');
    var r = (w - brd) / 2;
    var cx = w / 2;
    var cy = w / 2;
    context.beginPath();
    context.clearRect(0, 0, w, w);
    context.arc(cx, cy, r, 0, Ar, false);
    context.imageSmoothingEnabled = true;
    context.lineWidth = brd;
    context.strokeStyle = canvas.data('color');
    context.stroke();
}
// jQuery(document).on('action.init_shortcodes', function(e, container) {
//     "use strict";
//     if (container.find('.sc_form_form:not(.inited)').length > 0) {
//         container.find('.sc_form_form:not(.inited)').addClass('inited').submit(function(e) {
//             "use strict";
//             sc_form_validate(jQuery(this));
//             e.preventDefault();
//             return false;
//         });
//     }
//     jQuery('[class*="sc_input_hover_"] input, [class*="sc_input_hover_"] textarea').each(function() {
//         "use strict";
//         sc_form_mark_filled(jQuery(this));
//     });
//     jQuery('[class*="sc_input_hover_"] input, [class*="sc_input_hover_"] textarea').on('blur change', function() {
//         "use strict";
//         sc_form_mark_filled(jQuery(this));
//     });
//     jQuery('input, textarea, select').on('change', function() {
//         "use strict";
//         jQuery(this).removeClass('trx_addons_field_error');
//     });
// });

function sc_form_mark_filled(field) {
    "use strict";
    if (field.val() != '') field.addClass('filled');
    else field.removeClass('filled');
}

function sc_form_validate(form) {
    "use strict";
    var url = form.attr('action');
    if (url == '') return false;
    form.find('input').removeClass('trx_addons_error_field');
    var error = trx_addons_form_validate(form, {
        rules: [{
            field: "name",
            min_length: {
                value: 1,
                message: TRX_ADDONS_STORAGE['msg_field_name_empty']
            },
        }, {
            field: "email",
            min_length: {
                value: 1,
                message: TRX_ADDONS_STORAGE['msg_field_email_empty']
            },
            mask: {
                value: TRX_ADDONS_STORAGE['email_mask'],
                message: TRX_ADDONS_STORAGE['msg_field_email_not_valid']
            }
        }, {
            field: "message",
            min_length: {
                value: 1,
                message: TRX_ADDONS_STORAGE['msg_field_text_empty']
            },
        }]
    });
    if (!error && url != '#') {
        jQuery.post(url, {
            action: "send_sc_form",
            nonce: TRX_ADDONS_STORAGE['ajax_nonce'],
            data: form.serialize()
        }).done(function(response) {
            "use strict";
            var rez = {};
            try {
                rez = JSON.parse(response);
            } catch (e) {
                rez = {
                    error: TRX_ADDONS_STORAGE['msg_ajax_error']
                };
                console.log(response);
            }
            var result = form.find(".trx_addons_message_box").toggleClass("trx_addons_message_box_error", false).toggleClass("trx_addons_message_box_success", false);
            if (rez.error === '') {
                form.get(0).reset();
                result.addClass("trx_addons_message_box_success").html(TRX_ADDONS_STORAGE['msg_send_complete']);
            } else {
                result.addClass("trx_addons_message_box_error").html(TRX_ADDONS_STORAGE['msg_send_error'] + ' ' + rez.error);
            }
            result.fadeIn().delay(3000).fadeOut();
        });
    }
    return !error;
}
jQuery(document).on('action.init_hidden_elements', trx_addons_sc_googlemap_init);
jQuery(document).on('action.init_shortcodes', trx_addons_sc_googlemap_init);

function trx_addons_sc_googlemap_init(e, container) {
	"use strict";
    if (arguments.length < 2) var container = jQuery('body');
    if (container.find('.sc_googlemap:not(.inited)').length > 0) {
        container.find('.sc_googlemap:not(.inited)').each(function() {
            "use strict";
            if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
            var map = jQuery(this).addClass('inited');
            var map_id = map.attr('id');
            var map_zoom = map.data('zoom');
            var map_style = map.data('style');
            var map_markers = [];
            map.find('.sc_googlemap_marker').each(function() {
                "use strict";
                var marker = jQuery(this);
                map_markers.push({
                    icon: marker.data('icon'),
                    address: marker.data('address'),
                    latlng: marker.data('latlng'),
                    description: marker.data('description'),
                    title: marker.data('title')
                });
            });
            trx_addons_sc_googlemap_create(jQuery('#' + map_id).get(0), {
                style: map_style,
                zoom: map_zoom,
                markers: map_markers
            });
        });
    }
}

function trx_addons_sc_googlemap_create(dom_obj, coords) {
    "use strict";
    if (typeof TRX_ADDONS_STORAGE['googlemap_init_obj'] == 'undefined') trx_addons_sc_googlemap_init_styles();
    TRX_ADDONS_STORAGE['googlemap_init_obj'].geocoder = '';
    try {
        var id = dom_obj.id;
        TRX_ADDONS_STORAGE['googlemap_init_obj'][id] = {
            dom: dom_obj,
            markers: coords.markers,
            geocoder_request: false,
            opt: {
                zoom: coords.zoom,
                center: null,
                scrollwheel: false,
                scaleControl: false,
                disableDefaultUI: false,
                panControl: true,
                zoomControl: true,
                mapTypeControl: false,
                streetViewControl: false,
                overviewMapControl: false,
                styles: TRX_ADDONS_STORAGE['googlemap_styles'][coords.style ? coords.style : 'default'],
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        };
        trx_addons_sc_googlemap_build(id);
    } catch (e) {
        console.log(TRX_ADDONS_STORAGE['msg_sc_googlemap_not_avail']);
    };
}

function trx_addons_sc_googlemap_refresh() {
    "use strict";
    for (id in TRX_ADDONS_STORAGE['googlemap_init_obj']) {
        trx_addons_sc_googlemap_build(id);
    }
}

function trx_addons_sc_googlemap_build(id) {
    "use strict";
    TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map = new google.maps.Map(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].dom, TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt);
    for (var i in TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers) TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].inited = false;
    trx_addons_sc_googlemap_add_markers(id);
    jQuery(window).resize(function() {
        if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map) TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map.setCenter(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt.center);
    });
}

function trx_addons_sc_googlemap_add_markers(id) {
    "use strict";
    for (var i in TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers) {
        if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].inited) continue;
        if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].latlng == '') {
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].geocoder_request !== false) continue;
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'].geocoder == '') TRX_ADDONS_STORAGE['googlemap_init_obj'].geocoder = new google.maps.Geocoder();
            TRX_ADDONS_STORAGE['googlemap_init_obj'][id].geocoder_request = i;
            TRX_ADDONS_STORAGE['googlemap_init_obj'].geocoder.geocode({
                address: TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].address
            }, function(results, status) {
                "use strict";
                if (status == google.maps.GeocoderStatus.OK) {
                    var idx = TRX_ADDONS_STORAGE['googlemap_init_obj'][id].geocoder_request;
                    if (results[0].geometry.location.lat && results[0].geometry.location.lng) {
                        TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[idx].latlng = '' + results[0].geometry.location.lat() + ',' + results[0].geometry.location.lng();
                    } else {
                        TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[idx].latlng = results[0].geometry.location.toString().replace(/\(\)/g, '');
                    }
                    TRX_ADDONS_STORAGE['googlemap_init_obj'][id].geocoder_request = false;
                    setTimeout(function() {
                        trx_addons_sc_googlemap_add_markers(id);
                    }, 200);
                } else dcl(TRX_ADDONS_STORAGE['msg_sc_googlemap_geocoder_error'] + ' ' + status);
            });
        } else {
            var latlngStr = TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].latlng.split(',');
            var markerInit = {
                map: TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map,
                position: new google.maps.LatLng(latlngStr[0], latlngStr[1]),
                clickable: TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].description != ''
            };
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].icon) markerInit.icon = TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].icon;
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].title) markerInit.title = TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].title;
            TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].marker = new google.maps.Marker(markerInit);
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt.center == null) {
                TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt.center = markerInit.position;
                TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map.setCenter(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].opt.center);
            }
            if (TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].description != '') {
                TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].infowindow = new google.maps.InfoWindow({
                    content: TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].description
                });
                google.maps.event.addListener(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].marker, "click", function(e) {
                    var latlng = e.latLng.toString().replace("(", '').replace(")", "").replace(" ", "");
                    for (var i in TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers) {
                        if (trx_addons_googlemap_compare_latlng(latlng, TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].latlng)) {
                            TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].infowindow.open(TRX_ADDONS_STORAGE['googlemap_init_obj'][id].map, TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].marker);
                            break;
                        }
                    }
                });
            }
            TRX_ADDONS_STORAGE['googlemap_init_obj'][id].markers[i].inited = true;
        }
    }
}

function trx_addons_googlemap_compare_latlng(l1, l2) {
    "use strict";
    var l1 = l1.replace(/\s/g, '', l1).split(',');
    var l2 = l2.replace(/\s/g, '', l2).split(',');
    var m0 = Math.min(l1[0].length, l2[0].length);
    var m1 = Math.min(l1[1].length, l2[1].length);
    return l1[0].substring(0, m0) == l2[0].substring(0, m0) && l1[1].substring(0, m1) == l2[1].substring(0, m1);
}

function trx_addons_sc_googlemap_init_styles() {
	"use strict";
    TRX_ADDONS_STORAGE['googlemap_init_obj'] = {};
    TRX_ADDONS_STORAGE['googlemap_styles'] = {
        'default': [],
        'greyscale': [{
            "stylers": [{
                "saturation": -100
            }]
        }],
        'inverse': [{
            "stylers": [{
                "invert_lightness": true
            }, {
                "visibility": "on"
            }]
        }],
        'melanie': [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#444444"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative.locality",
            "elementType": "labels",
            "stylers": [{
                "hue": "#ffe500"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.landcover",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.attraction",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.place_of_worship",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "poi.school",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
            }, {
                "lightness": 45
            }, {
                "visibility": "on"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit.station",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
            }]
        }, {
            "featureType": "transit.station.airport",
            "elementType": "all",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#9bdffb"
            }, {
                "visibility": "on"
            }]
        }],
        'simple': [{
            stylers: [{
                hue: "#00ffe6"
            }, {
                saturation: -20
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: 100
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "off"
            }]
        }]
    };
    jQuery(document).trigger('action.add_googlemap_styles');
}
'use strict';
(function(window, document) {
    'use strict';

    function Pathformer(element) {
        if (typeof element === 'undefined') {
            throw new Error('Pathformer [constructor]: "element" parameter is required');
        }
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
            }
        }
        if (element.constructor instanceof window.SVGElement || /^svg$/i.test(element.nodeName)) {
            this.el = element;
        } else {
            throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        }
        this.scan(element);
    }
    Pathformer.prototype.TYPES = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect'];
    Pathformer.prototype.ATTR_WATCH = ['cx', 'cy', 'points', 'r', 'rx', 'ry', 'x', 'x1', 'x2', 'y', 'y1', 'y2'];
    Pathformer.prototype.scan = function(svg) {
        var fn, element, pathData, pathDom, elements = svg.querySelectorAll(this.TYPES.join(','));
        for (var i = 0; i < elements.length; i++) {
            element = elements[i];
            fn = this[element.tagName.toLowerCase() + 'ToPath'];
            pathData = fn(this.parseAttr(element.attributes));
            pathDom = this.pathMaker(element, pathData);
            element.parentNode.replaceChild(pathDom, element);
        }
    };
    Pathformer.prototype.lineToPath = function(element) {
        var newElement = {};
        newElement.d = 'M' + element.x1 + ',' + element.y1 + 'L' + element.x2 + ',' + element.y2;
        return newElement;
    };
    Pathformer.prototype.rectToPath = function(element) {
        var newElement = {},
            x = parseFloat(element.x) || 0,
            y = parseFloat(element.y) || 0,
            width = parseFloat(element.width) || 0,
            height = parseFloat(element.height) || 0;
        newElement.d = 'M' + x + ' ' + y + ' ';
        newElement.d += 'L' + (x + width) + ' ' + y + ' ';
        newElement.d += 'L' + (x + width) + ' ' + (y + height) + ' ';
        newElement.d += 'L' + x + ' ' + (y + height) + ' Z';
        return newElement;
    };
    Pathformer.prototype.polylineToPath = function(element) {
        var i, path;
        var newElement = {};
        var points = element.points.trim().split(' ');
        if (element.points.indexOf(',') === -1) {
            var formattedPoints = [];
            for (i = 0; i < points.length; i += 2) {
                formattedPoints.push(points[i] + ',' + points[i + 1]);
            }
            points = formattedPoints;
        }
        path = 'M' + points[0];
        for (i = 1; i < points.length; i++) {
            if (points[i].indexOf(',') !== -1) {
                path += 'L' + points[i];
            }
        }
        newElement.d = path;
        return newElement;
    };
    Pathformer.prototype.polygonToPath = function(element) {
        var newElement = Pathformer.prototype.polylineToPath(element);
        newElement.d += 'Z';
        return newElement;
    };
    Pathformer.prototype.ellipseToPath = function(element) {
        var startX = element.cx - element.rx,
            startY = element.cy;
        var endX = parseFloat(element.cx) + parseFloat(element.rx),
            endY = element.cy;
        var newElement = {};
        newElement.d = 'M' + startX + ',' + startY + 'A' + element.rx + ',' + element.ry + ' 0,1,1 ' + endX + ',' + endY + 'A' + element.rx + ',' + element.ry + ' 0,1,1 ' + startX + ',' + endY;
        return newElement;
    };
    Pathformer.prototype.circleToPath = function(element) {
        var newElement = {};
        var startX = element.cx - element.r,
            startY = element.cy;
        var endX = parseFloat(element.cx) + parseFloat(element.r),
            endY = element.cy;
        newElement.d = 'M' + startX + ',' + startY + 'A' + element.r + ',' + element.r + ' 0,1,1 ' + endX + ',' + endY + 'A' + element.r + ',' + element.r + ' 0,1,1 ' + startX + ',' + endY;
        return newElement;
    };
    Pathformer.prototype.pathMaker = function(element, pathData) {
        var i, attr, pathTag = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        for (i = 0; i < element.attributes.length; i++) {
            attr = element.attributes[i];
            if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
                pathTag.setAttribute(attr.name, attr.value);
            }
        }
        for (i in pathData) {
            pathTag.setAttribute(i, pathData[i]);
        }
        return pathTag;
    };
    Pathformer.prototype.parseAttr = function(element) {
        var attr, output = {};
        for (var i = 0; i < element.length; i++) {
            attr = element[i];
            if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf('%') !== -1) {
                throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
            }
            output[attr.name] = attr.value;
        }
        return output;
    };
    'use strict';
    var requestAnimFrame, cancelAnimFrame, parsePositiveInt;

    function Vivus(element, options, callback) {
        this.isReady = false;
        this.setElement(element, options);
        this.setOptions(options);
        this.setCallback(callback);
        if (this.isReady) {
            this.init();
        }
    }
    Vivus.LINEAR = function(x) {
        return x;
    };
    Vivus.EASE = function(x) {
        return -Math.cos(x * Math.PI) / 2 + 0.5;
    };
    Vivus.EASE_OUT = function(x) {
        return 1 - Math.pow(1 - x, 3);
    };
    Vivus.EASE_IN = function(x) {
        return Math.pow(x, 3);
    };
    Vivus.EASE_OUT_BOUNCE = function(x) {
        var base = -Math.cos(x * (0.5 * Math.PI)) + 1,
            rate = Math.pow(base, 1.5),
            rateR = Math.pow(1 - x, 2),
            progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI))) + 1;
        return (1 - rateR) + (progress * rateR);
    };
    Vivus.prototype.setElement = function(element, options) {
        if (typeof element === 'undefined') {
            throw new Error('Vivus [constructor]: "element" parameter is required');
        }
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
            }
        }
        this.parentEl = element;
        if (options && options.file) {
            var objElm = document.createElement('object');
            objElm.setAttribute('type', 'image/svg+xml');
            objElm.setAttribute('data', options.file);
            objElm.setAttribute('built-by-vivus', 'true');
            element.appendChild(objElm);
            element = objElm;
        }
        switch (element.constructor) {
            case window.SVGSVGElement:
            case window.SVGElement:
                this.el = element;
                this.isReady = true;
                break;
            case window.HTMLObjectElement:
                var onLoad, self;
                self = this;
                onLoad = function(e) {
                    if (self.isReady) {
                        return;
                    }
                    self.el = element.contentDocument && element.contentDocument.querySelector('svg');
                    if (!self.el && e) {
                        throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
                    } else if (self.el) {
                        if (element.getAttribute('built-by-vivus')) {
                            self.parentEl.insertBefore(self.el, element);
                            self.parentEl.removeChild(element);
                            self.el.setAttribute('width', '100%');
                            self.el.setAttribute('height', '100%');
                        }
                        self.isReady = true;
                        self.init();
                        return true;
                    }
                };
                if (!onLoad()) {
                    element.addEventListener('load', onLoad);
                }
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
        }
    };
    Vivus.prototype.setOptions = function(options) {
        var allowedTypes = ['delayed', 'async', 'oneByOne', 'scenario', 'scenario-sync'];
        var allowedStarts = ['inViewport', 'manual', 'autostart'];
        if (options !== undefined && options.constructor !== Object) {
            throw new Error('Vivus [constructor]: "options" parameter must be an object');
        } else {
            options = options || {};
        }
        if (options.type && allowedTypes.indexOf(options.type) === -1) {
            throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
        } else {
            this.type = options.type || allowedTypes[0];
        }
        if (options.start && allowedStarts.indexOf(options.start) === -1) {
            throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
        } else {
            this.start = options.start || allowedStarts[0];
        }
        this.isIE = (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1);
        this.duration = parsePositiveInt(options.duration, 120);
        this.delay = parsePositiveInt(options.delay, null);
        this.dashGap = parsePositiveInt(options.dashGap, 1);
        this.forceRender = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
        this.selfDestroy = !!options.selfDestroy;
        this.onReady = options.onReady;
        this.frameLength = this.currentFrame = this.map = this.delayUnit = this.speed = this.handle = null;
        this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;
        this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
        this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;
        if (this.delay >= this.duration) {
            throw new Error('Vivus [constructor]: delay must be shorter than duration');
        }
    };
    Vivus.prototype.setCallback = function(callback) {
        if (!!callback && callback.constructor !== Function) {
            throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        }
        this.callback = callback || function() {};
    };
    Vivus.prototype.mapping = function() {
        var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
        timePoint = totalLength = lengthMeter = 0;
        paths = this.el.querySelectorAll('path');
        for (i = 0; i < paths.length; i++) {
            path = paths[i];
            if (this.isInvisible(path)) {
                continue;
            }
            pathObj = {
                el: path,
                length: Math.ceil(path.getTotalLength())
            };
            if (isNaN(pathObj.length)) {
                if (window.console && console.warn) {
                    console.warn('Vivus [mapping]: cannot retrieve a path element length', path);
                }
                continue;
            }
            this.map.push(pathObj);
            path.style.strokeDasharray = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
            path.style.strokeDashoffset = pathObj.length + this.dashGap;
            pathObj.length += this.dashGap;
            totalLength += pathObj.length;
            this.renderPath(i);
        }
        totalLength = totalLength === 0 ? 1 : totalLength;
        this.delay = this.delay === null ? this.duration / 3 : this.delay;
        this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);
        for (i = 0; i < this.map.length; i++) {
            pathObj = this.map[i];
            switch (this.type) {
                case 'delayed':
                    pathObj.startAt = this.delayUnit * i;
                    pathObj.duration = this.duration - this.delay;
                    break;
                case 'oneByOne':
                    pathObj.startAt = lengthMeter / totalLength * this.duration;
                    pathObj.duration = pathObj.length / totalLength * this.duration;
                    break;
                case 'async':
                    pathObj.startAt = 0;
                    pathObj.duration = this.duration;
                    break;
                case 'scenario-sync':
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = timePoint + (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
                    pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
                    timePoint = pAttrs['data-async'] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
                    this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
                    break;
                case 'scenario':
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
                    pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
                    this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
                    break;
            }
            lengthMeter += pathObj.length;
            this.frameLength = this.frameLength || this.duration;
        }
    };
    Vivus.prototype.drawer = function() {
        var self = this;
        this.currentFrame += this.speed;
        if (this.currentFrame <= 0) {
            this.stop();
            this.reset();
            this.callback(this);
        } else if (this.currentFrame >= this.frameLength) {
            this.stop();
            this.currentFrame = this.frameLength;
            this.trace();
            if (this.selfDestroy) {
                this.destroy();
            }
            this.callback(this);
        } else {
            this.trace();
            this.handle = requestAnimFrame(function() {
                self.drawer();
            });
        }
    };
    Vivus.prototype.trace = function() {
        var i, progress, path, currentFrame;
        currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
        for (i = 0; i < this.map.length; i++) {
            path = this.map[i];
            progress = (currentFrame - path.startAt) / path.duration;
            progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
            if (path.progress !== progress) {
                path.progress = progress;
                path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
                this.renderPath(i);
            }
        }
    };
    Vivus.prototype.renderPath = function(index) {
        if (this.forceRender && this.map && this.map[index]) {
            var pathObj = this.map[index],
                newPath = pathObj.el.cloneNode(true);
            pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
            pathObj.el = newPath;
        }
    };
    Vivus.prototype.init = function() {
        this.frameLength = 0;
        this.currentFrame = 0;
        this.map = [];
        new Pathformer(this.el);
        this.mapping();
        this.starter();
        if (this.onReady) {
            this.onReady(this);
        }
    };
    Vivus.prototype.starter = function() {
        switch (this.start) {
            case 'manual':
                return;
            case 'autostart':
                this.play();
                break;
            case 'inViewport':
                var self = this,
                    listener = function() {
                        if (self.isInViewport(self.parentEl, 1)) {
                            self.play();
                            window.removeEventListener('scroll', listener);
                        }
                    };
                window.addEventListener('scroll', listener);
                listener();
                break;
        }
    };
    Vivus.prototype.getStatus = function() {
        return this.currentFrame === 0 ? 'start' : this.currentFrame === this.frameLength ? 'end' : 'progress';
    };
    Vivus.prototype.reset = function() {
        return this.setFrameProgress(0);
    };
    Vivus.prototype.finish = function() {
        return this.setFrameProgress(1);
    };
    Vivus.prototype.setFrameProgress = function(progress) {
        progress = Math.min(1, Math.max(0, progress));
        this.currentFrame = Math.round(this.frameLength * progress);
        this.trace();
        return this;
    };
    Vivus.prototype.play = function(speed) {
        if (speed && typeof speed !== 'number') {
            throw new Error('Vivus [play]: invalid speed');
        }
        this.speed = speed || 1;
        if (!this.handle) {
            this.drawer();
        }
        return this;
    };
    Vivus.prototype.stop = function() {
        if (this.handle) {
            cancelAnimFrame(this.handle);
            this.handle = null;
        }
        return this;
    };
    Vivus.prototype.destroy = function() {
        this.stop();
        var i, path;
        for (i = 0; i < this.map.length; i++) {
            path = this.map[i];
            path.el.style.strokeDashoffset = null;
            path.el.style.strokeDasharray = null;
            this.renderPath(i);
        }
    };
    Vivus.prototype.isInvisible = function(el) {
        var rect, ignoreAttr = el.getAttribute('data-ignore');
        if (ignoreAttr !== null) {
            return ignoreAttr !== 'false';
        }
        if (this.ignoreInvisible) {
            rect = el.getBoundingClientRect();
            return !rect.width && !rect.height;
        } else {
            return false;
        }
    };
    Vivus.prototype.parseAttr = function(element) {
        var attr, output = {};
        if (element && element.attributes) {
            for (var i = 0; i < element.attributes.length; i++) {
                attr = element.attributes[i];
                output[attr.name] = attr.value;
            }
        }
        return output;
    };
    Vivus.prototype.isInViewport = function(el, h) {
        var scrolled = this.scrollY(),
            viewed = scrolled + this.getViewportH(),
            elBCR = el.getBoundingClientRect(),
            elHeight = elBCR.height,
            elTop = scrolled + elBCR.top,
            elBottom = elTop + elHeight;
        h = h || 0;
        return (elTop + elHeight * h) <= viewed && (elBottom) >= scrolled;
    };
    Vivus.prototype.docElem = window.document.documentElement;
    Vivus.prototype.getViewportH = function() {
        var client = this.docElem.clientHeight,
            inner = window.innerHeight;
        if (client < inner) {
            return inner;
        } else {
            return client;
        }
    };
    Vivus.prototype.scrollY = function() {
        return window.pageYOffset || this.docElem.scrollTop;
    };
    requestAnimFrame = (function() {
        return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1000 / 60);
        });
    })();
    cancelAnimFrame = (function() {
        return (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(id) {
            return window.clearTimeout(id);
        });
    })();
    parsePositiveInt = function(value, defaultValue) {
        var output = parseInt(value, 10);
        return (output >= 0) ? output : defaultValue;
    };
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return Vivus;
        });
    } else if (typeof exports === 'object') {
        module.exports = Vivus;
    } else {
        window.Vivus = Vivus;
    }
}(window, document));
jQuery(document).on('action.init_shortcodes', function(e, container) {
    "use strict";
    var time = 50;
    container.find('.sc_icon_type_svg:not(.inited)').each(function(idx) {
        "use strict";
        var cont = jQuery(this);
        var id = cont.addClass('inited').attr('id');
        if (id === undefined) {
            id = 'sc_icons_' + Math.random();
            id = id.replace('.', '');
        } else id += '_' + idx;
        cont.find('svg').attr('id', id);
        setTimeout(function() {
            cont.css('visibility', 'visible');
            var obj = new Vivus(id, {
                type: 'async',
                duration: 20
            });
            cont.data('svg_obj', obj);
            cont.parent().hover(function() {
                cont.data('svg_obj').reset().play();
            }, function() {});
        }, time);
        time += 300;
    });
});
jQuery(document).on('action.init_hidden_elements', trx_addons_sc_skills_init);
jQuery(document).on('action.init_shortcodes', trx_addons_sc_skills_init);
jQuery(window).on('scroll', trx_addons_sc_skills_init);

function trx_addons_sc_skills_init(e, container) {
    "use strict";
    if (arguments.length < 2) var container = jQuery('body');
    var scrollPosition = jQuery(window).scrollTop() + jQuery(window).height();
    container.find('.sc_skills_item:not(.inited)').each(function() {
        "use strict";
        var skillsItem = jQuery(this);
        if (jQuery(this).parents('div:hidden,article:hidden').length > 0) {
            return;
        }
        var scrollSkills = skillsItem.offset().top;
        if (scrollPosition > scrollSkills) {
            var init_ok = true;
            var skills = skillsItem.parents('.sc_skills').eq(0);
            var type = skills.data('type');
            var total = (type == 'pie' && skills.hasClass('sc_skills_compact_on')) ? skillsItem.find('.sc_skills_data .pie') : skillsItem.find('.sc_skills_total').eq(0);
            var start = parseInt(total.data('start'),10);
            var stop = parseInt(total.data('stop'),10);
            var maximum = parseInt(total.data('max'),10);
            var startPercent = Math.round(start / maximum * 100);
            var stopPercent = Math.round(stop / maximum * 100);
            var ed = total.data('ed');
            var speed = parseInt(total.data('speed'),10);
            var step = parseInt(total.data('step'),10);
            var duration = parseInt(total.data('duration'),10);
            if (isNaN(duration)) duration = Math.ceil(maximum / step) * speed;
            if (type == 'bar') {
                var dir = skills.data('dir');
                var count = skillsItem.find('.sc_skills_count').eq(0);
                if (dir == 'horizontal') count.css('width', startPercent + '%').animate({
                    width: stopPercent + '%'
                }, duration);
                else if (dir == 'vertical') count.css('height', startPercent + '%').animate({
                    height: stopPercent + '%'
                }, duration);
                trx_addons_sc_skills_animate_counter(start, stop, speed, step, ed, total);
            } else if (type == 'counter') {
                trx_addons_sc_skills_animate_counter(start, stop, speed, step, ed, total);
            } else if (type == 'pie') {
                if (window.Chart) {
                    var steps = parseInt(total.data('steps'),10);
                    var bg_color = total.data('bg_color');
                    var border_color = total.data('border_color');
                    var cutout = parseInt(total.data('cutout'),10);
                    var easing = total.data('easing');
                    var options = {
                        segmentShowStroke: border_color != '',
                        segmentStrokeColor: border_color,
                        segmentStrokeWidth: border_color != '' ? 1 : 0,
                        percentageInnerCutout: cutout,
                        animationSteps: steps,
                        animationEasing: easing,
                        animateRotate: true,
                        animateScale: false,
                    };
                    var pieData = [];
                    total.each(function() {
                        "use strict";
                        var color = jQuery(this).data('color');
                        var stop = parseInt(jQuery(this).data('stop'),10);
                        var stopPercent = Math.round(stop / maximum * 100);
                        pieData.push({
                            value: stopPercent,
                            color: color
                        });
                    });
                    if (total.length == 1) {
                        trx_addons_sc_skills_animate_counter(start, stop, Math.round(1500 / steps), step, ed, total);
                        pieData.push({
                            value: 100 - stopPercent,
                            color: bg_color
                        });
                    }
                    var canvas = skillsItem.find('canvas');
                    canvas.attr({
                        width: skillsItem.width(),
                        height: skillsItem.width()
                    }).css({
                        width: skillsItem.width(),
                        height: skillsItem.height()
                    });
                    new Chart(canvas.get(0).getContext("2d")).Doughnut(pieData, options);
                } else init_ok = false;
            }
            if (init_ok) skillsItem.addClass('inited');
        }
    });
}

function trx_addons_sc_skills_animate_counter(start, stop, speed, step, ed, total) {
    "use strict";
    start = Math.min(stop, start + step);
    total.text(start + ed);
    if (start < stop) {
        setTimeout(function() {
            trx_addons_sc_skills_animate_counter(start, stop, speed, step, ed, total);
        }, speed);
    }
}