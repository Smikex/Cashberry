// togle nav
var mobileBtn = $(".mobileBtn");
var menu = $(".header__menu");

mobileBtn.on('click',  function(event) {
 event.preventDefault();
 $(this).toggleClass('active');
 menu.toggleClass('active');
});

// tabs

$('.walletButtons__link_mobile').click(function(){
$('.walletButtons__link_desktop').removeClass('walletButtons__link_active');
$('.walletButtons__link_mobile').addClass('walletButtons__link_active');
$('.walletBlock_desktop').addClass('walletBlock_none');
$('.walletBlock_mobile').removeClass('walletBlock_none');
$('.walletBlock__img_desktop').addClass('hidden');
$('.walletBlock__img_mobile').removeClass('hidden')
});


$('.walletButtons__link_desktop').click(function(){
    $('.walletButtons__link_mobile').removeClass('walletButtons__link_active');
    $('.walletButtons__link_desktop').addClass('walletButtons__link_active');
    $('.walletBlock_mobile').addClass('walletBlock_none');
    $('.walletBlock_desktop').removeClass('walletBlock_none');
    $('.walletBlock__img_mobile').addClass('hidden');
    $('.walletBlock__img_desktop').removeClass('hidden')
    });

// highcharts
 
    // spline
Highcharts.chart('highchart', {
  chart: {
      type: 'areaspline',
      width: 1170
  },
  title: {
    margin: 40,
      text: 'Cashbery Coin Value Dynamics',
      align: 'left',
      style: {
        "color": "#222222",
        "fontSize": "35px",
        "fontWeight": "300"
      }
  },
  credits: {
    enabled: false
  },
  navigator: {
    enabled: false
  },
  rangeSelector: {
    selected: 0,
    inputEnabled: false
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 900,
      y: 10,
      floating: true,
      borderWidth: 0,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
  },
  plotOptions: {
    series: {
      marker: {
        enabled: true,
        radius: 4,

      }
    }
  },
  colors: ['#6e52ba','#27bbc0', '#6e52ba' ],
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
crosshair: true
  },

  yAxis: [{
    title: '',
    opposite: false,
    offset: 60,
    labels: {
      align: 'left',
      x: 0,
      style: {
        "fontSize": "12px",
        "color": "#28292b",

      }
    }
  },{
    opposite: true,
    title: ''}], 

  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  marker: {
    fillColor: '#FFFFFF',
    lineWidth: 1,
    lineColor: null,
    symbol: 'circle',
    states: {
      hover: {
        radiusPlus: 1,
        lineWidthPlus: 2,
      }
    },
  },
  series: [{
    name: 'CBC/USD',
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    marker: {
      fillColor: '#FFFFFF',
      lineWidth: 1,
      lineColor: null,
      symbol: 'circle',
      states: {
        hover: {
          radiusPlus: 1,
          lineWidthPlus: 2,
        }
      },
    }
}, {
    name: 'CBC/BTC',
    data: [144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 29.9, 71.5, 106.4, 129.2],
    yAxis: 1,
    marker: {
      fillColor: '#FFFFFF',
      lineWidth: 1,
      lineColor: null,
      symbol: 'circle',
      states: {
        hover: {
          radiusPlus: 1,
          lineWidthPlus: 2,
        }
      },
    }
}]
});

