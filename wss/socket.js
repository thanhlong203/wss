var _websocket;
var time_stamp = [];
var quote = [];
var bid_price= [];
	function wsConnect() {
	  if (_websocket) {
		_websocket.close(3001);
	  } else {
		_websocket = new WebSocket("wss://www.bitmex.com/realtime?subscribe=quote");
		_websocket.onopen = function() {
		  console.log('connected');
		};
		_websocket.onmessage = function(msg) {
			var data = JSON.parse(msg.data).data;
			for (var i = 0; i < data.length; i++) {
				if (data[i].symbol == 'XBTU18') {
					if (time_stamp.length > 30) time_stamp.remove(time_stamp[0]);
					if (quote.length > 30) quote.remove(quote[0]);
					if (bid_price.length > 30) bid_price.remove(bid_price[0]);
					time_stamp.push(data[i].timestamp);
					quote.push(data[i].askPrice);
					bid_price.push(data[i].bidPrice);
					draw(time_stamp, quote, bid_price);
				}
			}
		  console.log(data);
		};

		_websocket.onclose = function(evt) {
		  if (evt.code == 3001) {
			console.log('ws closed');
			_websocket = null;
		  } else {
			_websocket = null;
			console.log('ws connection error');
		  }
		};

		_websocket.onerror = function(evt) {
		  if (_websocket.readyState == 1) {
			console.log('ws normal error: ' + evt.type);
		  }
		};
	  }
	}
$(document).ready(function(){
	wsConnect();
});