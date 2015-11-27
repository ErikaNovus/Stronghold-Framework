;(function ($, window, document, undefined)
{
  var pluginName = "shrinking_navigation",
    defaults = 
    {
      breakpoint: '767',
      transitionSpeed: 'medium'
    };

  var windowOrigin = 0;

  function Main( element, config )
  {
    this.element = element;
    this.$elem = $(this.element);
    this.config = $.extend( {}, defaults, config );
    this.origin = 0;
    this.init();
  }

  Main.prototype = {

    init: function()
    {
      var $config = this.config,
          $navElement = this.$elem,
          $navi = '<div class="navigation"><div class="btn-shrink"><span class="fa fa-bars"></span></div></div>',
          $navigation;

      $navElement.before($navi);
      $navigation = $navElement.prev('.navigation');
      $navElement.on('click', 'child-navi', function(_)
      {
        _.preventDefault();
        _.stopPropagation();

        var $parent_li = $(this).closest('li');

        if ($(this).hasClass('expanded'))
        {
          $(this).removeClass('expanded');
          $(this).find('i').html('&#9660;');
          $parent_li.find('>ul').slideUp($config.transitionSpeed);
        } else {
          $(this).addClass('expanded');
          $(this).find('i').html('&#9650;');
          $parent_li.find('>ul').slideDown($config.transitionSpeed);
        }
      });

      $navigation.on('click', '.btn-shrink', function(_)
      {
        _.preventDefault();
        $navElement.slideToggle($config.transitionSpeed);
      });

      this.resizeMenu({ data: { el: this.element, config: this.config } });
      $(window).on('resize', { el: this.element, config: this.config }, this.resizeMenu);
      $(window).trigger("resize");
    },

    resizeMenu: function(event)
    {
      var $window = $(window),
          $config = event.data.config,
          $navElement = $(event.data.el),
          $navigation = $('body').find('.navigation');

      if (windowOrigin == $window.width())
      {
        return;
      }
      windowOrigin = $window.width();

      var windowWidth = $window.width();
      if(window['.innerWidth'] !== undefined)
      {
        if(window['.innerWidth'] > windowWidth)
        {
          windowWidth = window['.innerWidth'];
        }
      }

      if(windowWidth != this.origin)
      {
        this.origin = windowWidth;

        $navElement.find('li').each(function()
        {
          if ($(this).has('ul').length)
          {
            if ($(this).has('child-navi').length){
              $(this).children('.child-navi i').html('&#9660;');
            } else {
              $(this).append('<span class="child-navi><i>&#9660;</i></span>');
            }
          }

          $(this).children('ul').hide();
          $(this).find('.child-navi').removeClass('expanded').children('i').html('&#9660;');
        });

        if ($config.breakpoint >= windowWidth){
          $navElement.find('li').has('ul').off('mouseenter mouseleave');
          $navElement.addClass('shrink').hide();
          $navigation.show();
        } else {
          $navElement.find('li').has('ul').on('mouseenter', function()
          {
            $(this).find('>ul').stop().slideDown($config.transitionSpeed);
          })
          .on('mouseleave', function()
          {
            $(this).find('>ul').stop().slideUp($config.transitionSpeed);
          });

          $navElement.find('li > a > i').remove();
          $navElement.removeClass('shrink').show();
          $navigation.hide();
        }
      }
    }
  };

  $.fn[pluginName] = function (config)
  {
    return this.each(function ()
    {
      if (!$.data(this, "plugin_" + pluginName))
      {
        $.data(this, "plugin_" + pluginName,
          new Main( this, config ));
      }
    });
  };
})( jQuery, window, document );