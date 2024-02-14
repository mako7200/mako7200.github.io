/*===========================================================*/
/*【】*/
/*===========================================================*/






/*===========================================================*/
/*【SVGアニメーションの描画】*/
/*===========================================================*/

var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 10,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
},
function(){
    $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
}
);


$(window).on('load',function(){
    $("#splash").delay(5000).fadeOut('slow');//ローディング画面を3秒（3000ms）待機してからフェイドアウト
	$("#splash_logo").delay(5000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェイドアウト
    stroke.play();//SVGアニメーションの実行
});




/*===========================================================*/
/*【グローバルナビゲーション】*/
/*===========================================================*/

$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});



