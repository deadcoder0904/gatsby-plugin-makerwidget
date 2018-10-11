const injectMakerWidgetScript = options => {
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
					position: ${options.position},
					widget: ${options.widget}
			})};
			js.src = "https://makerwidget.com/js/embed.js";
			fjs.parentNode.insertBefore(js, fjs)
		}(document, "script", "dhm"))
	`);
};

exports.onClientEntry = (args, pluginOptions) => {
  let options;
  if (!pluginOptions)
    options = {
      position: "left",
      widget: "2hc0aqfnigsyxkf5-aewnonydaddchdgj-vwoc6njlwhycxyw6"
    };
  injectMakerWidgetScript(options);
};
