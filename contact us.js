/*alert for the user is formed when their query is successfully submitted*/
function dofunction(){
	 alert('Thank you for contacting us');
}	


/*Whats app logo*/
var url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?55046';
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = url;
        var options = {
      "enabled":true,
      "chatButtonSetting":{
          "backgroundColor":"#4dc247",
          "ctaText":"Message Us",
          "borderRadius":"25",
          "marginLeft":"0",
          "marginBottom":"50",
          "marginRight":"50",
          "position":"left",
      },
      "brandSetting":{
          "brandName":"Origin group Pvt Ltd",
          "brandSubTitle":"Typically replies within a day",
          "brandImg":"https://live.staticflickr.com/8821/17074861125_399f3f78a4_n.jpg",
          "welcomeText":"Hi there!\nHow can I help you?",
          "messageText":"Hello, I have a question about",
          "backgroundColor":"#0a5f54",
          "ctaText":"Start Chat",
          "borderRadius":"25",
          "autoShow":false,
          "phoneNumber":"6000090000"
      }
    };
        s.onload = function() {
            CreateWhatsappChatWidget(options);
        };
        var x = document.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);