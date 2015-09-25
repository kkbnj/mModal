/*!
 * jQuery mModal v1.0
 * Copyright 2015 maam.inc
 * Contributing Author: Hiroki Homma
 * Require for jQuery v1.7 or above
 */
(function($) {
  $.mModal = function(options) {
    var default_options = {
        type: 'fade',
        scroll_top: true,
        duration: 260,
        easing: 'swing',

        velocity_js: true,
        css_animation: true,

        open_before: function(e) {},
        open_after: function(e) {},
        close_before: function(e) {},
        close_after: function(e) {},

        open_classname: 'mModal-open',
        close_classname: 'mModal-close',
        page_classname: 'mModal-page',
        modal_classname: 'mModal-modal',
        modal_cont_classname: 'mModal-modal_cont',
        opened_classname: 'mModal-opened'
      },

      params = $.extend({}, default_options, options),

      $body = $('body'),
      $open = $('.' + params.open_classname),
      $modal = $('.' + params.modal_classname),
      $modal_cont = $('.' + params.modal_cont_classname),
      $page = $('.' + params.page_classname),
      $close = $('.' + params.close_classname),

      open_timeout,
      animation_method = 'jquery_animate';

    //animation_methodの決定
    if(params.velocity_js === true && typeof $.fn.velocity !== 'undefined') {
      animation_method = 'velocity';

    } else if(params.css_animation === true) {
      (function() {
        var div = document.createElement('div'),
          prop = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition'],
          i;

        for (i = 0; i < prop.length; i++) {
          if (prop[i] in div.style) {
            animation_method = 'css_transition';
            break;
          }
        }
      }());
    }

    function open(e) {

      if (typeof params.open_before === 'function') {
        params.open_before(e);
      }

      setTimeout(function() {
        $body.addClass(params.opened_classname).css({
          overflow: 'hidden'
        });

        $modal.css({
          display: 'block'
        });

        if (params.scroll_top) {
          $modal_cont.scrollTop(0);
        }

        setTimeout(function() {
          switch(animation_method) {
            case 'velocity':
              $modal.velocity({
                opacity: 1
              },{
                duration: params.duration,
                easing: params.easing
              });

            break;
            case 'css_transition':
              $modal.css({
                opacity: 1
              });
              break;
            case 'jquery_animate':
              $modal.animate({
                opacity: 1
              },{
                duration: params.duration,
                easing: params.easing
              });
            break;
          }

          open_timeout = setTimeout(function() {
            // $page.css({
            //   visibility: 'hidden'
            // });

            if (typeof params.open_after === 'function') {
              params.open_after(e);
            }
          }, params.duration + 16);
        }, 16);
      }, 16);
    }

    function close(e) {
      if (typeof params.close_before === 'function') {
        params.close_before(e);
      }

      clearTimeout(open_timeout);
      // $page.css({
      //   visibility: 'visible'
      // });

      setTimeout(function() {
        switch(animation_method) {
          case 'velocity':
            $modal.velocity({
              opacity: 0
            },{
              duration: params.duration,
              easing: params.easing
            });

          break;
          case 'css_transition':
            $modal.css({
              opacity: 0
            });
            break;
          case 'jquery_animate':
            $modal.animate({
              opacity: 0
            },{
              duration: params.duration,
              easing: params.easing
            });
          break;
        }

        setTimeout(function() {
          $modal.css({
            display: 'none'
          });
          $body.css({
            overflow: 'visible'
          });

          $body.removeClass(params.opened_classname);

          if (typeof params.close_after === 'function') {
            params.close_after(e);
          }
        }, params.duration + 16);
      }, 16);
    }

    var init = (function() {
      //Open and Close Event
      $open.on('click.mModal', function(e) {
        e.stopPropagation ? e.stopPropagation() : '';
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        open(e);
      });
      $close.on('click.mModal', function(e) {
        e.stopPropagation ? e.stopPropagation() : '';
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        close(e);
      });

      //Set CSS
      $modal.css({
        opacity: 0,
        display: 'none',
        zIndex: '9000',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflowScrolling: 'touch'
      });
      if(animation_method === 'css_transition') {
        $modal.css({
          transition: 'opacity ' + params.duration + 'ms ease-in-out'
        });
      }
      $modal_cont.css({
        width: '100%',
        height: '100%',
        overflow: 'scroll'
      });
    }());
  };
}(jQuery));
