Highcharts.theme = {
	chart: {
		pinchType: 'x',
		backgroundColor: '#FAFAFA'
	},
	xAxis: {
		gridLineWidth: 1,
		lineColor: '#000000',
		lineWidth: 1,
		tickWidth: 0,
		tickColor: '#000000'
	},
	yAxis: {
		lineColor: '#000',
		lineWidth: 1,
		tickWidth: 0,
		tickColor: '#000'
	},
	legend: {
		itemStyle: {
			color: '#000'

		},
		itemHoverStyle: {
			color: '#000'
		},
		itemHiddenStyle: {
			color: '#000'
		}
	},
	labels: {
		style: {
			color: '#000'
		}
	},

	navigation: {
		buttonOptions: {
			theme: {
				stroke: '#000'
			}
		}
	}
};

function draw(time_stamp, quote, bid_price) {
	// Data retrieved from http://vikjavev.no/ver/index.php?spenn=2d&sluttid=16.06.2015.

Highcharts.chart('container', {
    chart: {
        type: 'line',
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: time_stamp
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
		 series: {
            marker: {
                enabled: false
            }
        },
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Ask Price',
        data: quote
    }, {
        name: 'Bid Price',
        data: bid_price
    }]
});
}