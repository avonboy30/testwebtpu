

//ar liffID = '1657009153-92GwV16y';

/*
liff.init({
    liffId: '1657009153-92GwV16y'
  }) .then(() => {
    if (!liff.isLoggedIn()) {
     alert("用戶未登入");
     liff.login();
    } else {
     //alert("用戶已登入");
     liff.getProfile()
     .then(profile => {
      const context = liff.getContext();
      console.log(context);
      //const name = profile.displayName;
      document.querySelector('#line_userid').value= profile.userId;
      //document.querySelector('#line_userid').value= profile.pictureUrl;
      document.querySelector('#line_displayName').value= profile.displayName;
      document.querySelector('#clientName').value= profile.displayName;
 
     })
     .catch((err) => {
      console.log('error', err);
      liff.closeWindow(); // 關掉頁面
     });
    }
  }
  ).catch((err) => {
   console.log('初始化失敗')
  });


  

$(function() {

    $("#ButtonSendMsg").click(function() {
    liff
        .sendMessages([
        {
            type: "text",
            text: $("#txtMenu").val()
        }
        ])
        .then(() => {
        //alert("done");
        //liff.closeWindow(); // 關掉頁面
        });
    });
});


/*
liff.init({
  liffId: liffID
}).then(function() {
  console.log('LIFF init');
  console.log(liff.getVersion());
  var accessToken = liff.getAccessToken();
    console.log(accessToken);
  // 取得使用者類型資料
  var context = liff.getContext();
  console.log(context);
  alert(context);

  document.querySelector('#line_userid').value= context;

  liff.sendMessages([{
    type: 'text',
    text: 'Hello world'
  }]);

  //console.log(liff.getProfile());


  // 這邊開始寫使用其他功能
  
}).catch(function(error) {
  console.log(error);
});
*/

$.ajax({
  url: "https://ipinfo.io/json",
  
  success: function(response) {
    var s=[];
    s=response;
    document.querySelector('#userIP').value="hostname: "+s["hostname"];
  },
});



// $(function() {
//     $('.img').on('click', function () {

//         var src= $(this).attr('src');
//         $('.imgPreview img').attr('src', src);
//         $('.imgPreview').show()
//     });

//     $('.maskmap').on('click', function () {

//       var src= $(this).attr('src');
//       $('.imgPreview img').attr('src', src);
//       $('.imgPreview').show()
//     });

//     $('.imgPreview').on('click', function () {

//         $('.imgPreview').hide()
//     });

// });






/*


        liff.sendMessages([{
          type: 'text',
          text: "登入後發送測試訊息"
        }]).then(function () {
            window.alert("Message sent");
            //liff.closeWindow(); // 關掉頁面
        }).catch(function (error) {
            window.alert("Error sending message: " + error);
            //liff.closeWindow(); // 關掉頁面
        });


var s=[]
$.get('http://ipinfo.io/json', function(data) {
    console.log(data)
	  s=data
});



let sendButton = document.querySelector('button');

function send() {

      



  let name = document.querySelector('#orderNumber').value;
  document.querySelector('#orderNumber').value="hostname: "+s["hostname"];

  let phone = document.querySelector('#phoneValue').value;
  //let demand = document.querySelector('#demandValue').value;
  let demand = document.querySelector('#txtMenu').value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzh5sHD3sEms5LqY_2nL_CQ_k1F65kPvo3FtydiehjuHRLGNbQOrIcH/exec",
    data: {
        "name": name,
        "phone": phone,
        "demand": demand,
        "userstr": "hostname: "+s["hostname"]
    },
    success: function(response) {
      if(response == "成功"){
        alert("成功"+demand);
      }
    },
  });
};

sendButton.addEventListener('click', send);

*/
