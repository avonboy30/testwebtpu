<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <script src="https://code.jquery.com/jquery-3.3.1.js" crossorigin="anonymous"></script>
    

    <LINK REL="SHORTCUT ICON" HREF="./favicon.png">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <!--
    <meta name="viewport" content="width=device-width, initial-scale=1">
    -->
    <title>CodePen - ( 已完成 ) Vue 入門 - 購物車試做</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel="stylesheet" href="./style.css">

    <script src="https://cdn.jsdelivr.net/npm/vue-loading-overlay@3"></script>
    <link href="https://cdn.jsdelivr.net/npm/vue-loading-overlay@3/dist/vue-loading.css" rel="stylesheet">
    <!---->
    <link rel="stylesheet" href="./dist/vuejs-dialog.min.css">
    <script type="text/javascript" src="./dist/vuejs-dialog.min.js"></script>
    <script type="text/javascript" src="./dist/vuejs-dialog-mixin.min.js"></script>


    <!--// Include vuejs-dialog plugin
    <link rel="stylesheet" href="https://cdn.rawgit.com/Godofbrowser/vuejs-dialog/v1.3.0/dist/vuejs-dialog.min.css">
    <script src="https://cdn.rawgit.com/Godofbrowser/vuejs-dialog/v1.3.0/dist/vuejs-dialog.min.js"></script>
    <script src="https://cdn.rawgit.com/Godofbrowser/vuejs-dialog/v1.3.0/dist/vuejs-dialog-mixin.min.js"></script> !--// only needed in custom components-->

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://cdn.staticfile.org/vue-resource/1.5.1/vue-resource.min.js"></script>

    <script src="./dist/vue-qrcode.min.js"></script>

    <!--<script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.1.13/sdk.js"></script>
    -->
    <script charset="utf-8" src="https://static.line-scdn.net/liff/edge/versions/2.19.0/sdk.js"></script>


    <!--
        
    <script>    
        liff.getVersion();
        function initializeApp(data) {
            $("#userid").val(data.context.userId);

            liff.getProfile().then(profile => {
                $("#UserInfo").val(profile.displayName);
                //alert("done");
            });
        }
        
        
        $(function() {
            
            liff.init(function(data) {
            initializeApp(data);
            });
        
            $("#ButtonGetProfile").click(function() {
            liff.getProfile().then(profile => {
                $("#UserInfo").val(profile.displayName);
                //alert("done");
            });
            });
        
            $("#ButtonSendMsg").click(function() {
            liff
                .sendMessages([
                {
                    type: "text",
                    text: $("#txtMenu").val()
                }
                ])
                .then(() => {
                alert("done");
                liff.closeWindow(); // 關掉頁面
                });
            });
        });
    </script>
-->


    <!-- <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://cdn.staticfile.org/popper.js/1.15.0/umd/popper.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <style>
        body {
            position: relative; 
        }
    </style> -->


</head>

<body data-spy="scroll" data-target=".nav__tab" data-offset="1">

    
        

    <!--
    <link href="https://cdn.jsdelivr.net/npm/vuejs-dialog@1.4.2/dist/vuejs-dialog.min.css" rel="stylesheet">
    

        <div class="container" style="display:none">
    -->

    <div class="container"  >

        <div>
            <span>客戶名稱：</span><input id="clientName" type="text">
        </div>
        <div>
            <span>訂單編號：</span><input id="orderNumber" type="text">
        </div>
        <div>
            <span>訂單金額：</span><input id="orderAmount" type="text">
        </div>
        <div>
            <span>下單時間：</span><input id="orderTime" type="text">
        </div>
        <div>
            <span>取餐時間：</span><input id="pickupTime" type="text">
        </div>
        <div>
            <span>訂單狀態：</span><input id="orderStatus" type="text">
        </div>
        <div>
            <span>接單人員：</span><input id="orderTaker" type="text">
        </div>
        <div>
            <span>訂單內容：</span><input id="orderContent" type="text">
        </div>
        <div>
            <span>訂單備註：</span><input id="orderRemarks" type="text">
        </div>
        <!-- 以上20220503新增 -->

        <div>
            <span>您的電話：</span><input id="phoneValue" type="text">
        </div>
        <div>
            <span>您的IP：</span><input id="userIP" type="text">
        </div>
        <div>
            <span>line_userid：</span><input id="line_userid" type="text">
        </div>
        <div>
            <span>line_displayName：</span><input id="line_displayName" type="text">
        </div>
        <button id="btnsend">送出</button>


    </div>
    <script type="text/javascript" src="index.js"></script>








    <div class="phone" id="app">



        <textarea style="display:none" id="txtMenu" rows="200" cols="30">{{totalname}}{{txtnow}}{{getDetaupLoad}}</textarea>
        <loading :active.sync="LoaderVisiable" :can-cancel="true"></loading>

        <!-- 導航列 -->
        <nav>

            <ul class="nav__tab">

                <li v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" :class={active:active==index}  >
                    {{tab.type}}
                    
                </li>

                <!-- <li v-for="(tab,index) in tabs" @click="toggle(index,tab.view)" class='nav-item'  >
                    <A class="nav-link" :href="'#A' + index"> {{tab.type}}</A>
                    
                </li> -->

                <!-- 
                <li :class="{ active: !isShowingCart }"
                @click="toggleTab(false)">products</li>
                 -->


                <li :class="{ active: isShowingCart }" @click="toggleTab(true)">結帳</li>

            </ul>
            <!--:is实现多个组件实现同一个挂载点
                <component :is="currentView"></component>
            -->
        </nav>

        <!-- 主要展示區塊 -->
        <main :class="{ shift: isShowingCart }">
            <!-- 瀏覽產品 -->
            <div class="content">
                <!-- 範例 HTML -->

                <div class="product" v-for="product in products" :id=product.id>
                    <div class="imgPreview">
                        <img src="./favicon3.png" alt="" id="imgPreview" @click="hookimgPreview()">
                    </div>
                    <div class="info-box">


                        <img :src="product.thumb" class="img" @click="hookimg(product.thumb)">
                        
                        <!-- 1店休 -->
                        <img v-if="product.sell_out_status===1" class="maskmap" src="./favicon1.png" @click="hookimg('./favicon1.png')">
                        <!-- 2暫停供應 -->
                        <img v-if="product.sell_out_status===2" class="maskmap" src="./favicon2.png" @click="hookimg('./favicon2.png')" >
                        <!-- 3尚未開賣 -->
                        <img v-if="product.sell_out_status===3" class="maskmap" src="./favicon3.png" @click="hookimg('./favicon3.png')" >





                        <div :id="'tchar_nav_'+index" class="positionTo"></div>
                        <div>
                            <div>
                                <h2>{{ product.name }}</h2>
                                <p>{{ product.price }}</p>
                                <div class="action-box">
                                    <div>
                                        <button class="round" @click="minusOne(product)">-</button>
                                        <span>{{ product.amountShow }}</span>
                                        <button class="round" @click="addOne(product)">+</button>
                                    </div>
                                </div>
                            </div>

                            <hr>
                            <!-- 20220504改 -->
                            <!-- <div v-if="product.name != product.name2" style="display:block" class="bs"> -->
                            <div class="bs">     
                                <h2>{{ product.name2 }}</h2>
                                <p>{{ product.price2 }}</p>
                                <div class="action-box">
                                    <div>
                                        <button class="round" @click="minusOne2(product)">-</button>
                                        <span>{{ product.amountShow2 }}</span>
                                        <button class="round" @click="addOne2(product)">+</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <!--
                <div class="action-box">
                    <div>
                        <button class="round" @click="minusOne(product)">-</button>
                        <span>{{ product.amountShow }}</span>
                        <button class="round" @click="addOne(product)">+</button>

                        <button class="round" @click="minusOne2(product)">-</button>
                        <span>{{ product.amountShow2 }}</span>
                        <button class="round" @click="addOne2(product)">+</button>
                    </div>
                    !--<button @click="addToCart(product)">add to cart</button>--
                </div>
                -->

                    <!-- 購物成功的 icon -->
                    <div class="icon-container" :class="{ showing: product.showingIcon }">
                        <svg class="icon" viewBox="0 0 100 100" width="80" height="80">
                            <circle class="circle" cx="50" cy="50" r="48"></circle>
                            <polyline class="check" points="28,53 42,66 74,34"></polyline>
                        </svg>
                        <p>成功加入</p>
                    </div>
                    <!-- 購物成功的- icon 
                <div class="icon-container" :class="{ showing: product.showingIcon2 }">
                    <svg class="icon" viewBox="0 0 100 100" width="80" height="80">
                        <circle class="circle" cx="50" cy="50" r="48"></circle>
                        <polyline class="check" points="28,53 42,66 74,34"></polyline>
                    </svg>
                    <p>---</p>
                </div>
                -->
                
                </div>
                <!--菜單-備註區-->
                <hr>
                <h1 id='pjf'></h1>
                <h1 id='A7'></h1>
                <hr>
                <div class="product" v-for="product in todos">
                    <h1>
                        <label class="label-checkbox" v-text="product.A"></label>
                        <label class="label-checkbox" v-text="'-'+product.B"></label>
                    </h1>

                    <h3>
                        <input class="checkbox" type="checkbox" v-model="product.C" :id=product.A+product.B+1>
                        <label :for=product.A+product.B+1>不加香菜</label>
                        <input class="checkbox" type="checkbox" v-model="product.D" :id=product.A+product.B+2>
                        <label :for=product.A+product.B+2>不加蒜頭</label>
                        <input class="checkbox" type="checkbox" v-model="product.E" :id=product.A+product.B+3>
                        <label :for=product.A+product.B+3>不加沙茶</label>
                    </h3>
                    <h3>
                        <input class="checkbox" type="checkbox" v-model="product.F" :id=product.A+product.B+4>
                        <label :for=product.A+product.B+4>不加豆芽</label>
                        <input class="checkbox" type="checkbox" v-model="product.G" :id=product.A+product.B+5>
                        <label :for=product.A+product.B+5>不加烏醋</label>
                        <input class="checkbox" type="checkbox" v-model="product.H" :id=product.A+product.B+6>
                        <label :for=product.A+product.B+6>湯麵分開</label>
                    </h3>
                    <h3>
                        <input class="checkbox" type="checkbox" v-model="product.I" :id=product.A+product.B+7>
                        <label :for=product.A+product.B+7>加辣椒粉</label>
                        <input class="checkbox" type="checkbox" v-model="product.J" :id=product.A+product.B+8>
                        <label :for=product.A+product.B+8>加辣椒醬</label>
                        <input class="checkbox" type="checkbox" v-model="product.K" :id=product.A+product.B+9>
                        <label :for=product.A+product.B+9>魯蛋放這</label>
                    </h3>
                    <!-- 
                不加香菜C : 不加蒜頭D : 不加沙茶E : 不加豆芽F : 不加烏醋G : 湯麵分開H : 加辣椒粉I : 加辣椒醬J : 魯蛋放這K : 
                -->
                    <hr>
                </div>
                <button @click="toggleTab(true)" class="checkout">前往付款</button>
                <textarea style="display:none" id="txtRemarks" rows="20" cols="50">{{updataTodos}}</textarea>
                <pre>
            <!--
             {{this.todos}}  
            -->    
            </pre>



                <!--菜單-備註區-->
            </div>

            <!-- 購物清單 -->
            <div class="content" id="contEND">
                <table>
                    <thead>
                        <tr>
                            <th colspan="5" id="guestLineName">{{OrdernumLineName}}</th>
                        </tr>
                        <tr>
                            <th colspan="5">{{Ordernum}} 餐點如下</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-title">
                            <td>品項</td>
                            <td>數量</td>
                            <td>單價</td>
                            <td>小計</td>
                            <td></td>
                        </tr>
                        <tr v-for="product in productsInCart">
                            <td>{{ product.name }}</td>
                            <td>{{ product.amount }}</td>
                            <td>{{ product.price }}</td>
                            <td>{{ product.sum }}</td>
                            <td>
                                <button class="button-del" @click="remove(product)">×</button>
                            </td>
                        </tr>
                        <tr v-for="product in productsInCart2">
                            <td>{{ product.name2 }}</td>
                            <td>{{ product.amount2 }}</td>
                            <td>{{ product.price2 }}</td>
                            <td>{{ product.sum2 }}</td>
                            <td>
                                <button class="button-del" @click="remove2(product)">×</button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <!--<td colspan="3">總計： <span class="total-price">$ {{ total }} = {{ total1 }}+ {{ total2 }} </span></td>-->
                            <td colspan="3">總計： <span class="total-price">$ {{ total }} </span></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
                <!--<button class="checkout">前往付款</button> -->
                <button class="checkout"  id="ButtonSendMsg" @click="checkout(product)">送單付款</button>

                
                <qrcode  :value="qrtxt" :options="ops"></qrcode> 
                
                



                <!---->
                <div class="product" v-for="product in todos">

                    <div v-if="product.OUT===true" style="background-color: rgb(6, 228, 36)">
                        <hr>
                        <h1>
                            <label class="label-checkbox" v-text="product.A"></label>
                            <label class="label-checkbox" v-text="'-'+product.B"></label>

                            <input class="checkbox" type="checkbox" v-model="product.OUT" :id=product.A+product.B+0
                                style="position: absolute;  right: 0">
                            <label :for=product.A+product.B+0 style="position: absolute;  right: 0">完成!</label>
                        </h1>
                        <h3>
                            <label v-if=product.C style="background-color:rgb(255, 37, 70) ;color:white">不加香菜</label>
                            <label v-if=product.D style="background-color:rgb(255, 37, 70) ;color:white">不加蒜頭</label>
                            <label v-if=product.E style="background-color:rgb(255, 37, 70) ;color:white">不加沙茶</label>

                            <label v-if=product.F style="background-color:rgb(255, 37, 70)  ;color:white">不加豆芽</label>
                            <label v-if=product.G
                                style="background-color:rgb(178, 96, 111) ;color:rgb(0, 0, 0)">不加烏醋</label>
                            <label v-if=product.H style="background-color:rgb(255, 251, 0) ;color:#d01b1b">湯麵分開</label>

                            <label v-if=product.I style="background-color:rgb(255, 0, 0) ;color:white">加辣椒粉</label>
                            <label v-if=product.J style="background-color:rgb(170, 0, 0) ;color:white">加辣椒醬</label>
                            <label v-if=product.K style="background-color:rgb(12, 102, 6) ;color:white">魯蛋放這</label>
                        </h3>
                        <hr>

                    </div>

                    <div v-else="product.OUT===false" style="background-color: rgb(235, 214, 214)">
                        <hr>
                        <h1>
                            <label class="label-checkbox" v-text="product.A"></label>
                            <label class="label-checkbox" v-text="'-'+product.B"></label>

                            <input class="checkbox" type="checkbox" v-model="product.OUT" :id=product.A+product.B+0
                                style="position: absolute;  right: 0">
                            <label :for=product.A+product.B+0 style="position: absolute;  right: 0">完成!</label>
                        </h1>
                        <h3>
                            <label v-if=product.C style="background-color:rgb(255, 37, 70) ;color:white">不加香菜</label>
                            <label v-if=product.D style="background-color:rgb(255, 37, 70) ;color:white">不加蒜頭</label>
                            <label v-if=product.E style="background-color:rgb(255, 37, 70) ;color:white">不加沙茶</label>

                            <label v-if=product.F style="background-color:rgb(255, 37, 70)  ;color:white">不加豆芽</label>
                            <label v-if=product.G
                                style="background-color:rgb(178, 96, 111) ;color:rgb(0, 0, 0)">不加烏醋</label>
                            <label v-if=product.H style="background-color:rgb(255, 251, 0) ;color:#d01b1b">湯麵分開</label>

                            <label v-if=product.I style="background-color:rgb(255, 0, 0) ;color:white">加辣椒粉</label>
                            <label v-if=product.J style="background-color:rgb(170, 0, 0) ;color:white">加辣椒醬</label>
                            <label v-if=product.K style="background-color:rgb(12, 102, 6) ;color:white">魯蛋放這</label>
                        </h3>
                        <hr>

                    </div>


                </div>
                <!-- 
            <pre>
                {{this.todos}} 
            </pre>  

            -->
                <!-- 
                不加香菜C : 不加蒜頭D : 不加沙茶E : 不加豆芽F : 不加烏醋G : 湯麵分開H : 加辣椒粉I : 加辣椒醬J : 魯蛋放這K : 
                -->

            </div>
        </main>


    </div>
    <!-- partial -->

    <script src="./script.js"></script>




    <!--
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>   

    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js'></script>

    <script src="https://unpkg.com/vue@2.4.2/dist/vue.min.js"></script>
    https://unpkg.com/vue/dist/vue.js, 會保持和 npm 發佈的最新的版本一致。
    -->



</body>

</html>


<!-- 
                    <div>
                    <ul>
                        <li>
                            <input type="checkbox" id="CC">
                            <label for="CC">不加香菜</label>
                        </li>
                        <li>
                            <input type="checkbox" id="DD" value="">
                            <label for="DD">不加蒜頭</label>                              
                        </li>
                        <li>
                            <input type="checkbox" id="EE" value="">
                            <label for="EE">不加沙茶</label>                              
                        </li>
                        <li>
                            <input type="checkbox" id="FF" value="">
                            <label for="FF">不加豆芽</label>                              
                        </li>                        
                    </ul>
                </div>     
-->