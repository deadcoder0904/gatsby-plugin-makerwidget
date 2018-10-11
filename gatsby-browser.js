const injectMakerWidgetScript = (position, widget) => {
  function addJS(jsCode) {
    const s = document.createElement(`script`);
    s.type = `text/javascript`;
    s.innerText = jsCode;
    document.getElementsByTagName(`head`)[0].appendChild(s);
  }
  addJS(`
		(function(d, h, m){
			var js, fjs = d.getElementsByTagName(h)[0];
			if (d.getElementById(m)){return;}
			js = d.createElement(h); js.id = m;
			js.onload = function(){
					window.makerWidgetComInit({
					position: "${position}",
					widget: "${widget}"
			})};
			js.src = "https://makerwidget.com/js/embed.js";
			fjs.parentNode.insertBefore(js, fjs)
		}(document, "script", "dhm"))
	`);
};

exports.onClientEntry = (args, pluginOptions) => {
  const {
    position = `left`,
    widget = `2hc0aqfnigsyxkf5-aewnonydaddchdgj-vwoc6njlwhycxyw6`
  } = pluginOptions;
  injectMakerWidgetScript(position, widget);
};
