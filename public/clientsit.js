//YSoSlow/ClientSit
//put this code right after <head>

(function(w, report_to){
  w.onerror=function(a,b,c){
    if(!w._clientsit){
      w._clientsit={pipe:0,log:[]}
      if(w.localStorage._clientsitlog){
        var parsed = JSON.parse(w.localStorage._clientsitlog);
        if(parsed.length>0){
          w._clientsit.log = parsed;         
        }
      }
    }
    if(w._clientsit.log.indexOf(a)==-1){
      w._clientsit.log.push(a);
      w.localStorage._clientsitlog = JSON.stringify(w._clientsit.log);
      var i = document.createElement('script');
      i.src = report_to+'report?report[user_id]=1'+
      '&report[agent]='+encodeURI(w.navigator.userAgent)+
      '&report[etype]='+encodeURI(a)+
      '&report[efile]='+encodeURI(b)+
      '&report[eline]='+encodeURI(c);

      var to=(document.head || document.body);
      if(to){
        to.appendChild(i);
      }else{
        window.onload = (function(){
          (document.body || document.head).appendChild(i);              
        })
      }
    }
  }
})(window, 'http://lh:3000/');



// FAKE BUGS e.g.
setTimeout(function(){
  alert(some_undefined_value)
}, 1000);
setTimeout(function(){
  some_undefined_fun(1)
}, 3000);
