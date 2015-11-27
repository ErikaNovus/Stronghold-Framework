;( function( $, window, undefined ) {
  
  'use strict';

 
  var Modernizr = window.Modernizr;

  $.slider = function (options, element) {
    this.$el = $(element);
    this._init(options);
  };

  
  $.slider.defaults = {    
    speed: 500,    
    easing: 'ease',
    navigation_on: true
  };

  $.slider.prototype = {
    _init : function(options) {
    
      this.options = $.extend(true, {}, $.slider.defaults, options);
    
      this._config();
    
      this._initEvents();
    },
    _config : function() {
    

      this.$list = this.$el.children('ul');
    
      this.$items = this.$list.children('li');
    
      this.itemsCount = this.$items.length;
    
      this.support = Modernizr.csstransitions && Modernizr.csstransforms;
      this.support3d = Modernizr.csstransforms3d;

      var transEndEventNames = {
          'WebkitTransition' : 'webkitTransitionEnd',
          'MozTransition' : 'transitionend',
          'OTransition' : 'oTransitionEnd',
          'msTransition' : 'MSTransitionEnd',
          'transition' : 'transitionend'
        },
        transformNames = {
          'WebkitTransform' : '-webkit-transform',
          'MozTransform' : '-moz-transform',
          'OTransform' : '-o-transform',
          'msTransform' : '-ms-transform',
          'transform' : 'transform'
        };
      if( this.support ) {
        this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.slider';
        this.transformName = transformNames[ Modernizr.prefixed( 'transform' ) ];
      }

      this.current = 0;
      this.old = 0;

      this.isAnimating = false;

      this.$list.css('width', 100 * this.itemsCount + '%');

      if(this.support) {
        this.$list.css('transition',this.transformName + ' ' + this.options.speed + 'ms ' + this.options.easing);
      }

      this.$items.css('width', 100 / this.itemsCount + '%');

      if(this.itemsCount > 1) {
        this.$navPrev = $('<span class="slider-prev"><</span>').hide();
        this.$navNext = $('<span class="slider-next">></span>');
        $('<nav/>').append(this.$navPrev, this.$navNext).appendTo(this.$el);

        var dots = '';
        for(var i = 0; i < this.itemsCount; ++i) {

          var dot = i === this.current ? '<span class="slider-current"></span>' : '<span></span>';
          dots += dot;
        }
        var navDots = $('<div class="slider-dots"/>').append(dots).appendTo(this.$el);
        this.$navDots = navDots.children('span');
      }

    },
    _initEvents : function() {

      var self = this;
      if(this.itemsCount > 1) {
        this.$navPrev.on('click.slider', $.proxy(this._navigate, this, 'previous'));
        this.$navNext.on('click.slider', $.proxy(this._navigate, this, 'next'));
        this.$navDots.on('click.slider', function() { self._jump($(this).index());});
      }

    },
    _navigate : function(direction) {


      if(this.isAnimating) {
        return false;
      }

      this.isAnimating = true;

      this.old = this.current;
      if(direction === 'next' && this.current < this.itemsCount - 1) {
        ++this.current;
      }
      else if(direction === 'previous' && this.current > 0) {
        --this.current;
      }

      this._slide();
    
    },
    _slide : function() {


      this._toggleNavControls();

      var transVal = -1 * this.current * 100 / this.itemsCount;
      if(this.support) {
        this.$list.css('transform',this.support3d ? 'translate3d(' + transVal + '%,0,0)' : 'translate(' + transVal + '%)');
      }
      else {
        this.$list.css('margin-left', -1 * this.current * 100 + '%');
      }

      var transitionEnd = $.proxy(function() {
        this.isAnimating = false;
      }, this);

      if(this.support) {
        this.$list.on(this.transEndEventName, $.proxy(transitionEnd, this));
      }
      else {
        transitionEnd.call();
      }

    },
    _toggleNavControls : function() {

      switch(this.current) {
        case 0 : this.$navNext.show(); this.$navPrev.hide(); break;
        case this.itemsCount - 1 : this.$navNext.hide(); this.$navPrev.show(); break;
        default: this.$navNext.show(); this.$navPrev.show(); break;
      }

      this.$navDots.eq(this.old).removeClass('slider-current').end().eq(this.current).addClass('slider-current');

    },
    _jump : function(position) {


      if(position === this.current || this.isAnimating) {
        return false;
      }
      this.isAnimating = true;

      this.old = this.current;
      this.current = position;

      this._slide();
      
    },
    destroy : function() {

      if(this.itemsCount > 1) {
        this.$navPrev.parent().remove();
        this.$navDots.parent().remove();
      }
      this.$list.css('width','auto');
      if(this.support) {
        this.$list.css('transition','none');
      }
      this.$items.css('width','auto');

    }
  };

  var logError = function(message) {
    if(window.console) {
      window.console.error(message);
    }
  };

  $.fn.slider = function(options) {
    if(typeof options === 'string') {
      var args = Array.prototype.slice.call(arguments, 1);
      this.each(function() {
        var instance = $.data(this, 'slider');
        if(!instance) {
          logError("cannot call methods on slider prior to initialisation; " + "attempted to call method '" + options + "'");
          return;
        }
        if(!$.isFunction(instance[options])||options.charAt(0) === "_") {
          logError("no such method '" + options + "' for slider instance");
          return;
        }
        instance[options].apply(instance, args);
      });
    }
    else {
      this.each(function() {
        var instance = $.data(this, 'slider');
        if(instance){
          instance._init();
        }
        else {
          instance = $.data(this, 'slider', new $.slider(options, this));
        }
      });
    }
    return this;
  };
})(jQuery, window);