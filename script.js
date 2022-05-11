


Vue.component(VueQrcode.name, VueQrcode);


//Vue.use(VuejsDialog);
Vue.component('tab1', { 
  template: "<p></p>"
})
Vue.component('tab2', { 
  template: "<p></p>"
})

Vue.use(VuejsDialog.main.default);

Vue.use(VueLoading);



var app =new Vue({
  el: "#app",

  data: {
    qrtxt:'記得我們在第一篇的時候有提過如何將Vue.js的資料綁定到View上面嗎？如果忘記',
    ops: {
      errorCorrectionLevel: "M", //觉错级别 L M Q H 7_ 15_ 25_ 30_ 
      type: "image/jpeg", //渲染成的元素
      margin: 5, //间距
      width: 320, //二维码宽度
      color: {
          dark: "#000000", //前景色
          light: "#f3f3f3", //背景色
      },
    },
    index:0,
    product:'',
    isShowingCart: false,    
    LoaderVisiable: false,
    isLoading: true,
    //info: null,
    //loading: 0,
    //errored: false,   
    active:0,  
    currentView:'tab1',
    todo:0,
    todos:[
      {ID:'',OUT:'true',A:'備註區 _ 全部',B:'',C:'',D:'',E:'',F:'',G:'',H:'',I:'',J:'',K:''}
    ],
    tabs:[
      {
        type:'肉焿',
        view:'tab1'
      },
      {
        type:'魷焿',
        view:'tab2'
      },
      {
        type:'綜焿',
        view:'tab3'
      },
      {
        type:'清焿',
        view:'tab4'
      },
      {
        type:'乾拌',
        view:'tab5'
      },
      {
        type:'汆燙',
        view:'tab6'
      },
      {
        type:'其他',
        view:'tab7'
      },
      {
        type:'備註',
        view:'tab8'
      }
    ],

    sendBox:[
      {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": []
        },
        "styles": {
          "footer": {
            "separator": true
          }
        }
      }
    ],
    tolinebox:[
      {
        type: "box",
        layout: "horizontal",
        contents: [
          {
            type: "text",
            text: "1111111111Energy Drink11111111111111111111111",
            size: "sm",
            color: "#555555",
            flex: 3,
            wrap: true
          },
          {
            type: "text",
            text: "$2.99",
            size: "sm",
            color: "#111111",
            align: "end",
            flex: 2
          }
        ]
      }
    ],
    
    products: [
      {
        id: '0',
        name: '肉 焿',
        price: 45,
        name2: '肉 焿 (大)',
        price2: 60,
        thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '01',
        name: '肉 焿 麵',
        price: 45,
        name2: '肉 焿 麵(大)',
        price2: 60,
        thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '02',
        name: '肉 焿 飯',
        price: 45,
        name2: '肉 焿 飯(大)',
        price2: 60,
        thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '03',
        name: '肉 焿 米 粉',
        price: 45,
        name2: '肉 焿 米 粉(大)',
        price2: 60,
        thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '1',
        name: '魷 魚 焿',
        price: 45,
        name2: '魷 魚 焿 (大)',
        price2: 60,
        thumb: './image/13770280_1763158403925645_7096178154963564811_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '11',
        name: '魷 魚 焿 麵',
        price: 45,
        name2: '魷 魚 焿 麵(大)',
        price2: 60,
        thumb: './image/13770280_1763158403925645_7096178154963564811_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '12',
        name: '魷 魚 焿 飯',
        price: 45,
        name2: '魷 魚 焿 飯(大)',
        price2: 60,
        thumb: './image/13770280_1763158403925645_7096178154963564811_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '13',
        name: '魷 魚 焿 米 粉',
        price: 45,
        name2: '魷 魚 焿 米 粉(大)',
        price2: 60,
        thumb: './image/13770280_1763158403925645_7096178154963564811_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '2',
        name: '綜 合 焿 (大)',
        price: 60,
        name2: '綜 合 焿 (大)',
        price2: 60,
        thumb: './image/866870657_m.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '21',
        name: '綜 合 焿 麵(大)',
        price: 60,
        name2: '綜 合 焿 麵(大)',
        price2: 60,
        thumb: './image/866870657_m.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '22',
        name: '綜 合 焿 飯(大)',
        price: 60,
        name2: '綜 合 焿 飯(大)',
        price2: 60,
        thumb: './image/866870657_m.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '23',
        name: '綜 合 焿 米 粉(大)',
        price: 60,
        name2: '綜 合 焿 米 粉(大)',
        price2: 60,
        thumb: './image/866870657_m.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },

      {
        id: '3',
        name: '清 焿 湯 (大)',
        price: 35,
        name2: '清 焿 湯 (大)',
        price2: 35,
        thumb: 'https://s5.pimg.tw/album/styleme/element/16810585_1450092930-1717385843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
        sell_out_status: 0
      },
      {
        id: '31',
        name: '清 焿 湯 麵(大)',
        price: 45,
        name2: '清 焿 湯 麵(大)',
        price2: 45,
        thumb: 'https://s8.pimg.tw/album/styleme/element/89516838_1486096498-3741399352/sresize/380x380.png',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '32',
        name: '清 焿 湯 飯(大)',
        price: 45,
        name2: '清 焿 湯 飯(大)',
        price2: 45,
        thumb: 'https://s.pimg.tw/album/styleme/element/62038610_1471836809-2423849843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '33',
        name: '清 焿 湯 米 粉(大)',
        price: 45,
        name2: '清 焿 湯 米 粉(大)',
        price2: 45,
        thumb: 'https://s5.pimg.tw/album/styleme/element/16810585_1450092930-1717385843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },      
      {
        id: '4',
        name: '乾 麵',
        price: 35,
        name2: '乾 麵 (大)',
        price2: 50,
        thumb: 'https://s5.pimg.tw/album/styleme/element/16810585_1450092930-1717385843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '41',
        name: '乾 米 粉',
        price: 35,
        name2: '乾 米 粉 (大)',
        price2: 50,
        thumb: 'https://s8.pimg.tw/album/styleme/element/89516838_1486096498-3741399352/sresize/380x380.png',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '42',
        name: '魯 肉 飯',
        price: 25,
        name2: '魯 肉 飯 (大)',
        price2: 35,
        thumb: 'https://s.pimg.tw/album/styleme/element/62038610_1471836809-2423849843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '43',
        name: '魯 蛋',
        price: 10,
        name2: '魯 蛋(大)',
        price2: 10,
        thumb: 'https://s5.pimg.tw/album/styleme/element/16810585_1450092930-1717385843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },     
      {
        id: '5',
        name: '燙 魷 魚',
        price: 70,
        name2: '燙 魷 魚 (大)',
        price2: 100,
        thumb: 'https://s5.pimg.tw/album/styleme/element/16810585_1450092930-1717385843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '51',
        name: '燙 地 瓜 葉',
        price: 30,
        name2: '燙 地 瓜 葉 (大)',
        price2: 50,
        thumb: 'https://s8.pimg.tw/album/styleme/element/89516838_1486096498-3741399352/sresize/380x380.png',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '52',
        name: '燙 大 陸 妹',
        price: 30,
        name2: '燙 大 陸 妹 (大)',
        price2: 50,
        thumb: 'https://s.pimg.tw/album/styleme/element/62038610_1471836809-2423849843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '53',
        name: '燙 豆 芽 菜',
        price: 30,
        name2: '燙 豆 芽 菜 (大)',
        price2: 50,
        thumb: 'https://s5.pimg.tw/album/styleme/element/16810585_1450092930-1717385843/sresize/380x380.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      }, 
      {
        id: '6',
        name: '臭 豆 腐',
        price: 40,
        name2: '臭 豆 腐 (大)',
        price2: 55,
        thumb: './image/13775863_1763158417258977_2137202980052811764_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '61',
        name: '泡 菜',
        price: 30,
        name2: '泡 菜 (大)',
        price2: 50,
        thumb: './image/13775863_1763158417258977_2137202980052811764_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '62',
        name: '飲 料',
        price: 10,
        name2: '飲 料 (大)',
        price2: 30,
        thumb: './image/13775863_1763158417258977_2137202980052811764_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },
      {
        id: '63',
        name: '白 飯',
        price: 10,
        name2: '白 飯 (大)',
        price2: 20,
        thumb: './image/13775863_1763158417258977_2137202980052811764_n.jpg',
        amount: 0,
        amountShow: 0,
        amount2: 0,
        amountShow2: 0,
        showingIcon: false,
	      sell_out_status: 0
      },       

    ] 
    ,

  },

  components: {
      Loading: VueLoading,
    //tab1,tab2,tab3,tab4,tab5,tab6,tab7,tab8
  },

  methods: {
    hookimg(src){
      //var src= $(this).attr('src');
      if (src ==""){src='./favicon.png'};
      $('.imgPreview img').attr('src', src);
      $('.imgPreview').show()
    },

    hookimgPreview(){
      $('.imgPreview').hide()
    },

    toggle(i,v){
      //document.body.requestFullscreen();//全螢幕

      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      //let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      //document.documentElement.style.setProperty('--vh', `${vh}px`);
      this.active=i
      this.currentView=v
      this.isShowingCart=false
      if(i==7){
        document.getElementById("pjf").scrollIntoView()
      }else{
        document.getElementById(i).scrollIntoView()
      }
      
      
      
    },
    // 切換 產品列表 / 購物車 的 tab
    toggleTab(shouldShowCart) {
      this.isShowingCart = shouldShowCart;
      this.students1    //進到結帳頁面時，刷一下todos[]，按id排序
      this.updataTodos  //更新備註裡配對文字內容
    },

    formatTime() {  //20200503 下單時間
        //解決invalid date
        var date = new Date();
        console.log(date);
        Y = date.getFullYear(),
            m = date.getMonth() + 1,
            d = date.getDate(),
            H = date.getHours(),
            i = date.getMinutes(),
            s = date.getSeconds();
        if(m < 10) {
            m = '0' + m;
        };
        if(d < 10) {
            d = '0' + d;
        };
        if(H < 10) {
            H = '0' + H;
        };
        if(i < 10) {
            i = '0' + i;
        };
        if(s < 10) {
            s = '0' + s;
        };
        var t = Y + '-' + m + '-' + d + ' ' + H + ':' + i + ':' + s;
        document.getElementById("orderTime").value=t;
        document.getElementById("pickupTime").value=t;
        return t
    },

    // 點擊 - / + 後的動作
    minusOne(product) {
      if (product.amount>0){
        product.amountShow--;
        product.amountShow = product.amountShow < 0 ? 0 : product.amountShow;
        product.amount = product.amountShow;
        this.removeTodo(product);
      }
    },
    addOne(product) {
      if (product.sell_out_status==0){
        product.amountShow++;
        //product.amountShow = product.amountShow > 9 ? 9 : product.amountShow;
        product.amount = product.amountShow;
        this.addToCart(product);
        this.addTodo(product);
     }   
    },

    // 點擊 - / + 後的動作22
    minusOne2(product) {
      if (product.amount2>0){
        product.amountShow2--;
        product.amountShow2 = product.amountShow2 < 0 ? 0 : product.amountShow2;
        product.amount2 = product.amountShow2;
        this.removeTodo2(product);
      }
    },
    addOne2(product) {
      if ((product.name != product.name2) && (product.sell_out_status==0)){
        product.amountShow2++;
        //product.amountShow2 = product.amountShow2 > 9 ? 9 : product.amountShow2;
        product.amount2 = product.amountShow2;
        this.addToCart(product);
        this.addTodo2(product);
      }else if ((product.name == product.name2) && (product.sell_out_status==0)){ 
        product.amountShow++;
        //product.amountShow2 = product.amountShow2 > 9 ? 9 : product.amountShow2;
        product.amount = product.amountShow;
        this.addToCart(product);
        this.addTodo(product);
      }
    },

    // 點擊 add to cart 後的動作
    addToCart(product) {
      //product.amount += product.amountShow;

      product.showingIcon = true;
      setTimeout(() => {
        product.showingIcon = false;
      }, 500);
    },

    //add-Todo---------------------------單筆加備註
    addTodo(p) {
      this.todos.push({ID:p.id,A:p.name,B:p.amountShow,C:false,D:false,E:false,F:false,G:false,H:false,I:false,J:false,K:false});
    },
    addTodo2(p) {
      this.todos.push({ID:p.id + .1,A:p.name2,B:p.amountShow2,C:false,D:false,E:false,F:false,G:false,H:false,I:false,J:false,K:false});
    },

    //remove--Todo------------------------刪備註
    removeTodo(p) {
      var index=this.todos.findIndex((item)=>{ if((item.A == p.name)&&(item.B > p.amount)){
        return true;
      } }  )
      this.todos.splice(index,1)
    },
    removeTodo2(p) {
      var index=this.todos.findIndex((item)=>{ if((item.A == p.name2)&&(item.B > p.amount2)){
        return true;
      } }  )
      this.todos.splice(index,1)
    },   

    // 在購物車裡移除單一品項 ( 把數量設置成 0 )//product.amount = 0;//product.amountShow=0;
    remove(product) {
      for(var i=product.amountShow,len=0;i>len;i--){
        this.minusOne(product); //呼叫減一,並刪備註
      }
    } ,
    // 在購物車裡移除單一品項 ( 把數量設置成 0 )//product.amount2 = 0;//product.amountShow2=0;
    remove2(product) {
      for(var i=product.amountShow2,len=0;i>len;i--){
        this.minusOne2(product); //呼叫減一,並刪備註
      }
    } ,


    totalname :function(){
      this.formatTime();  //更新下單時間
      var s='---來賓點餐如下---\n' + document.getElementById("orderTime").value +'\n';
      var tmpsum=0;
  
      
      this.tolinebox.splice(0);
      //this.tolinebox.push(      {        "type": "separator",        "margin": "xs"      }      );
      this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":'來賓稱呼：'+document.getElementById("line_displayName").value,"size":"xl","color":"#111111","flex":5,"weight": "bold","wrap":true}]});
      this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":'訂單編號：'+document.getElementById("orderNumber").value,"size":"xl","color":"#111111","flex":5,"weight": "bold","wrap":true}]});
      this.tolinebox.push({"type": "separator","margin": "xxl","color": "#ffffff"});
      this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":'訂購時間：'+ document.getElementById("orderTime").value,"size":"md","color":"#111111","flex":5,"weight": "bold","wrap":true}]});
      this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":'取餐時間：'+ document.getElementById("pickupTime").value,"size":"md","color":"#111111","flex":5,"weight": "bold","wrap":true}]});
      
      this.tolinebox.push({"type": "separator","margin": "xxl","color": "#ffffff"});
  
      this.tolinebox.push({"type": "separator","margin": "xs"});
      this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":"商品","size":"md","color":"#111111","flex":3,"weight": "bold","wrap":true},{"type":"text","text":"數量 x 金額","size":"md","color":"#111111","align":"end","weight": "bold","flex":2}]});
      this.tolinebox.push({"type": "separator","margin": "xs"});
      
      for (var i = 0; i < this.products.length; i++) {
          var item = this.products[i];
          //if (item.amount>0){s=s +item.amount +"  x  " + item.name  +'\n'}
          //if (item.amount2>0){s=s +item.amount2 +"  x  " + item.name2  +'\n'}
          if (item.amount>0){
            tmpsum+=item.amount * item.price;
            s=s +item.amount +"  x  " + item.name  +'\n';
            this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":item.name,"size":"md","color":"#309924","flex":3,"weight": "bold","wrap":true},{"type":"text","text":item.amount +' x $'+ item.price,"size":"md","color":"#309924","align":"end","weight": "bold","flex":2}]});
          }
          if (item.amount2>0){
            tmpsum+=item.amount2 * item.price2;
            s=s +item.amount2 +"  x  " + item.name2  +'\n';
            this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":item.name2,"size":"md","color":"#309924","flex":3,"weight": "bold","wrap":true},{"type":"text","text":item.amount2 +' x $'+ item.price2,"size":"md","color":"#309924","align":"end","weight": "bold","flex":2}]});
          }
      }
  
      this.tolinebox.push({"type": "separator","margin": "xs"});
      //this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":"總計","size":"md","color":"#111111","flex":3,"wrap":true},{"type":"text","text":"$"+document.getElementById("orderAmount").value,"size":"md","color":"#111111","align":"end","flex":2}]});
      this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":"總計","size":"md","color":"#111111","flex":3,"weight": "bold","wrap":true},{"type":"text","text":"$"+ tmpsum,"size":"md","color":"#111111","align":"end","weight": "bold","flex":2}]});
      
      this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":"預估等待時間","size":"md","color":"#ffffff","flex":3,"weight": "bold","wrap":true},{"type":"text","text":"~測試中~無法點餐~","size":"md","color":"#ffffff","align":"end","weight": "bold","flex":4}],"backgroundColor": "#ff0000"});
      
      this.sendBox.splice(0);
      this.sendBox.push({"type": "flex","altText": "this is a flex message","contents":{"type":"bubble","body":{"type":"box","layout":"vertical","contents":this.tolinebox},"styles":{"footer":{"separator":true}}}});
      
      console.log(JSON.stringify(this.tolinebox));
      console.log(JSON.stringify(this.sendBox));
      document.getElementById("orderContent").value=s;
      document.getElementById("txtMenu").value=s;
       return s;  
  
    },

    
    // 送單付款
    checkout(product) {
      this.totalname();
      //this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":"總計","size":"md","color":"#111111","flex":3,"wrap":true},{"type":"text","text":"$"+document.getElementById("orderAmount").value,"size":"md","color":"#111111","align":"end","flex":2}]});
      //this.tolinebox.push({"type":"box","layout":"horizontal","contents":[{"type":"text","text":"預估等待時間","size":"md","color":"#ffffff","flex":3,"wrap":true},{"type":"text","text":"~測試中~無法點餐~","size":"md","color":"#ffffff","align":"end","flex":4}],"backgroundColor": "#ff0000"});
      
      //console.log(JSON.stringify(this.tolinebox));

      //console.log(JSON.stringify(this.sendBox));
      //this.sendBox.splice(0);
      //this.sendBox.push({"type":"bubble","body":{"type":"box","layout":"vertical","contents":this.tolinebox},"styles":{"footer":{"separator":true}}});
      //this.sendBox.push({"type": "flex","altText": "this is a flex message","contents":{"type":"bubble","body":{"type":"box","layout":"vertical","contents":this.tolinebox},"styles":{"footer":{"separator":true}}}});
      
      //console.log(JSON.stringify(this.sendBox));
      //var tmps =JSON.stringify(this.sendBox);
      //document.getElementById("txtMenu").value=JSON.stringify(this.sendBox);
      ////document.getElementById("txtMenu").value=tmps.substring(1,tmps.length-1);
      //document.getElementById("btnsend").click();
      console.log('open');
      let loader = this.$loading.show({        loader: 'spinner'    });
      var txturl = 'https://script.google.com/macros/s/AKfycbzh5sHD3sEms5LqY_2nL_CQ_k1F65kPvo3FtydiehjuHRLGNbQOrIcH/exec'
    


      //发送get请求
      this.$http.post(txturl, {
              "clientName": document.getElementById("clientName").value,
              "orderNumber": document.getElementById("orderNumber").value,
              "orderAmount": document.getElementById("orderAmount").value,
              "orderTime": document.getElementById("orderTime").value,
              "pickupTime": document.getElementById("pickupTime").value,
              "orderStatus": document.getElementById("orderStatus").value,
              "orderTaker": document.getElementById("orderTaker").value,
              //"orderContent": document.getElementById("orderContent").value,
              "orderContent": document.getElementById("txtMenu").value,
              //"orderRemarks": document.getElementById("orderRemarks").value,
              "orderRemarks": document.getElementById("txtRemarks").value,


              "phone": document.getElementById("phoneValue").value,
              "txtMenu": document.getElementById("txtMenu").value ,
              "userIP": document.getElementById("userIP").value ,

              "line_userid": document.getElementById("line_userid").value ,
              "line_displayName": document.getElementById("line_displayName").value 


              
        },{emulateJSON:true})
        
        .then(response => {
          console.log(response)
          //alert(response.body)
          //alert(document.getElementById("txtMenu").value)
          let message = {
            title: '下單'+response.body + ' 訂單編號：' +document.getElementById("orderNumber").value,
            body: document.getElementById("txtMenu").value
          };
          let options = {okText: '確定',};
          this.$dialog.alert(message,options);
          
          loader.hide();
          //document.getElementById("txtMenu").value=tmps.substring(1,tmps.length-1);
          liff
          .sendMessages(
            this.sendBox
          )
        .then(() => {
          //alert("done2");
          liff.closeWindow(); // 關掉頁面
        });
        
      })
      .catch(error => {
        console.log(error)
        //alert("出錯："+error);
        let message = {
          title: '發生錯誤 ~ 請重新下單',
          body: '錯誤代碼：' +error.text
        };
        let options = {okText: '確定',};
        this.$dialog.alert(message,options);
        loader.hide();
      

      })
      .finally(() => console.log("等待中…"))
  
    }

  },    


 
  computed: {


    // 購物車裡的品項
    productsInCart() {
      return this.products
      // 只顯示購買數量 > 0 的項目
      .filter(p => p.amount)
      // 算出每個產品的小計
      .map(p => {
        p.sum = p.amount * p.price;
        return p;
      });
    },

    // 購物車裡的品項
    productsInCart2() {
      return this.products
      // 只顯示購買數量 > 0 的項目
      .filter(p => p.amount2)
      // 算出每個產品的小計
      .map(p => {
        p.sum2 = p.amount2 * p.price2;
        return p;
      });
    },

    OrdernumLineName() {
      this.total  //當金額重計時
      return '來賓：'+document.getElementById("line_displayName").value
    },

    Ordernum() {
      this.total  //當金額重計時
      return '訂單編號：'+document.getElementById("orderNumber").value
    },

    // 木前購買的金額
    total() {
      sum=this.total1 +this.total2;
      //document.getElementById("phoneValue").value=sum;
      document.getElementById("orderAmount").value=sum;
      return sum
    },

    // 木前購買的金額
    total1() {
      return this.productsInCart.
      reduce((sum, p) => sum + p.sum , 0);
    },    
    // 木前購買的金額
    total2() {
      return this.productsInCart2.
      reduce((sum2, p) => sum2 + p.sum2, 0);
    },
    

    txtnow:function(){
      var dt = new Date();
      var hh =dt.getHours();
      var mm =dt.getMinutes();
      var ss =dt.getSeconds();
 
      //來客流水號 = 分鐘*60 + 秒
      
      document.getElementById("orderNumber").value= hh +  mm*60 + ss;
      if (document.getElementById("clientName").value==""){document.getElementById("clientName").value = document.getElementById("orderNumber").value;};
      //測試改數據
      //console.log(JSON.stringify(this.products));
      //this.products.splice(0);
      //console.log(JSON.stringify(this.products));
      /*
      this.products.push({ id: '0',
      sell_out_status: 0,
      name: '肉 焿',
      price: 45,
      name2: '肉 焿 (大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '01',
      sell_out_status: 0,
      name: '肉 焿 麵',
      price: 45,
      name2: '肉 焿 麵(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '02',
      sell_out_status: 0,
      name: '肉 焿 飯',
      price: 45,
      name2: '肉 焿 飯(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '03',
      sell_out_status: 0,
      name: '肉 焿 米 粉',
      price: 45,
      name2: '肉 焿 米 粉(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '1',
      sell_out_status: 0,
      name: '魷 魚 焿',
      price: 45,
      name2: '魷 魚 焿 (大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13770280_1763158403925645_7096178154963564811_n.jpg' },
    { id: '11',
      sell_out_status: 0,
      name: '魷 魚 焿 麵',
      price: 45,
      name2: '魷 魚 焿 麵(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13770280_1763158403925645_7096178154963564811_n.jpg' },
    { id: '12',
      sell_out_status: 0,
      name: '魷 魚 焿 飯',
      price: 45,
      name2: '魷 魚 焿 飯(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13770280_1763158403925645_7096178154963564811_n.jpg' },
    { id: '13',
      sell_out_status: 0,
      name: '魷 魚 焿 米 粉',
      price: 45,
      name2: '魷 魚 焿 米 粉(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13770280_1763158403925645_7096178154963564811_n.jpg' },
    { id: '2',
      sell_out_status: 0,
      name: '綜 合 焿 (大)',
      price: 60,
      name2: '綜 合 焿 (大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/866870657_m.jpg' },
    { id: '21',
      sell_out_status: 0,
      name: '綜 合 焿 麵(大)',
      price: 60,
      name2: '綜 合 焿 麵(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/866870657_m.jpg' },
    { id: '22',
      sell_out_status: 0,
      name: '綜 合 焿 飯(大)',
      price: 60,
      name2: '綜 合 焿 飯(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/866870657_m.jpg' },
    { id: '23',
      sell_out_status: 0,
      name: '綜 合 焿 米 粉(大)',
      price: 60,
      name2: '綜 合 焿 米 粉(大)',
      price2: 60,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/866870657_m.jpg' },
    { id: '3',
      sell_out_status: 0,
      name: '清 焿 湯 (大)',
      price: 35,
      name2: '清 焿 湯 (大)',
      price2: 35,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '31',
      sell_out_status: 0,
      name: '清 焿 湯 麵(大)',
      price: 45,
      name2: '清 焿 湯 麵(大)',
      price2: 45,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '32',
      sell_out_status: 0,
      name: '清 焿 湯 飯(大)',
      price: 45,
      name2: '清 焿 湯 飯(大)',
      price2: 45,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '33',
      sell_out_status: 0,
      name: '清 焿 湯 米 粉(大)',
      price: 45,
      name2: '清 焿 湯 米 粉(大)',
      price2: 45,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '4',
      sell_out_status: 0,
      name: '乾 麵',
      price: 35,
      name2: '乾 麵',
      price2: 50,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '41',
      sell_out_status: 0,
      name: '乾 米 粉',
      price: 35,
      name2: '乾 米 粉',
      price2: 50,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '42',
      sell_out_status: 0,
      name: '魯 肉 飯',
      price: 25,
      name2: '魯 肉 飯',
      price2: 35,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '43',
      sell_out_status: 2,
      name: '魯 蛋',
      price: 10,
      name2: '魯 蛋',
      price2: 10,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '5',
      sell_out_status: 0,
      name: '燙 魷 魚',
      price: 70,
      name2: '燙 魷 魚 (大)',
      price2: 100,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '51',
      sell_out_status: 0,
      name: '燙 地 瓜 葉',
      price: 30,
      name2: '燙 地 瓜 葉 (大)',
      price2: 50,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '52',
      sell_out_status: 2,
      name: '燙 大 陸 妹',
      price: 30,
      name2: '燙 大 陸 妹 (大)',
      price2: 50,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13620982_1763158517258967_3773896939171876395_n.jpg' },
    { id: '53',
      sell_out_status: 0,
      name: '燙 豆 芽 菜',
      price: 30,
      name2: '燙 豆 芽 菜 (大)',
      price2: 50,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13680939_1763158430592309_5052202306567640273_n.jpg' },
    { id: '6',
      sell_out_status: 0,
      name: '臭 豆 腐',
      price: 40,
      name2: '臭 豆 腐 (大)',
      price2: 55,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13775863_1763158417258977_2137202980052811764_n.jpg' },
    { id: '61',
      sell_out_status: 2,
      name: '泡 菜',
      price: 30,
      name2: '泡 菜 (大)',
      price2: 50,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13775863_1763158417258977_2137202980052811764_n.jpg' },
    { id: '62',
      sell_out_status: 0,
      name: '飲 料',
      price: 10,
      name2: '飲 料 (大)',
      price2: 30,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13775863_1763158417258977_2137202980052811764_n.jpg' },
    { id: '63',
      sell_out_status: 0,
      name: '白 飯',
      price: 10,
      name2: '白 飯 (大)',
      price2: 20,
      amount: 0,
      amountShow: 0,
      amount2: 0,
      amountShow2: 0,
      showingIcon: false,
      thumb: './image/13775863_1763158417258977_2137202980052811764_n.jpg' });

      */
      //this.getDetaupLoad();
    },

    getDetaupLoad:function(){
      var txturl = 'https://script.google.com/macros/s/AKfycbycanLFDoqkzExMDmwtU11DNIPyfsTTXgdL2F7GQXKPA_fcFqNu0bAITQQ-OYw86N0z/exec'

      //发送get请求
      this.$http.get(txturl, {
 
      })
      .then(response => {
        //console.log(response);
        //var tmpstr=JSON.stringify(response.body);
        
        //console.log(tmpstr.substring(1, (tmpstr.length -1)));
        //var tmpstr2=tmpstr.substring(1,(tmpstr.length-1));
        //console.log(tmpstr);
        
    
        this.todos.splice(0);//刪除備註陣列
        this.todos.push({ID:'',OUT:'true',A:'備註區 _ 全部',B:'',C:'',D:'',E:'',F:'',G:'',H:'',I:'',J:'',K:''});
        
        this.products.splice(0);
        //var data = JSON.parse(response.bodyText);
        //this.products = Array.from(data);
        this.products = JSON.parse(response.bodyText);
        
        
      })
      .catch(error => {
        console.log(error)
        alert("出錯："+error);
      })
      .finally(() => console.log("等待中…"))
  
    },

    

  





    updataTodos(){
      //不加香菜C : 不加蒜頭D : 不加沙茶E : 不加豆芽F : 不加烏醋G : 湯麵分開H : 加辣椒粉I : 加辣椒醬J : 魯蛋放這K : 
      
      var alls="";
      var s='';
      var b=0;  //0無備註略過 :1無備註也送出

      this.todos.forEach((item,index) => {
        if (this.todos[0].C==true){item.C=true}
        if (this.todos[0].D==true){item.D=true}
        if (this.todos[0].E==true){item.E=true}
        if (this.todos[0].F==true){item.F=true}
        if (this.todos[0].G==true){item.G=true}
        if (this.todos[0].H==true){item.H=true}        
        if (this.todos[0].I==true){item.I=true}
        if (this.todos[0].J==true){item.J=true}
        if (this.todos[0].K==true){item.K=true}
        b=1
        s=''
        //if ((item.C==true)||(this.todos[0].C==true)){s=s+"_不加香菜";b=1}
        if (item.C==true){s=s+"_不加香菜";b=1}
        if (item.D==true){s=s+"_不加蒜頭";b=1}
        if (item.E==true){s=s+"_不加沙茶";b=1}
        if (item.F==true){s=s+"_不加豆芽";b=1}
        if (item.G==true){s=s+"_不加烏醋";b=1}
        if (item.H==true){s=s+"_湯麵分開";b=1}
        if (item.I==true){s=s+"_加辣椒粉";b=1}
        if (item.J==true){s=s+"_加辣椒醬";b=1}
        if (item.K==true){s=s+"_魯蛋放這";b=1}
        if (b==1){b=0;alls = alls + item.A +'_'+item.B + s + "_\n"}
      });
      this.qrtxt=alls;
      //this.qrtxt= JSON.stringify(this.todos);//20220504
      document.getElementById("orderRemarks").value = JSON.stringify(this.todos);
                                                      
      return alls; 
    },

    //呼叫物件排序
    students1:function(){
      return sortKey(this.todos,'ID')
    },


       
  }


}



);

//物件排序
function sortKey(array,key){
  return array.sort(function(a,b){
   var x = a[key];
   var y = b[key];
   return ((x<y)?-1:(x>y)?1:0)
  })
 };
