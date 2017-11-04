import secrets from '../../Secret';
(<any>window).fbAsyncInit = () => {
    FB.init({
        appId: secrets.facebookAppId,
        //autoLogAppEvents : true,
        xfbml: false,
        version: 'v2.9'
    });
    FB.AppEvents.logPageView();
}

(function(){
    let js,
        id = 'facebook-jssdk';
    let ref = document.getElementsByTagName('script')[0];

    if (document.getElementById(id)) {
      return;
    }

    js = document.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/sdk.js";

    ref.insertBefore(js, ref);
   
  }());
console.log("f");