// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function(){
	$("#input-field").focus();
// 			var count = <%= @count %>;
	
	// 入力項目上でShift + Enterキー押下時の処理
	$("#input-area").keypress(function(e){
		if (event.shiftKey){
			if(e.which == 13){
				console.log("test");
				$("#add-btn").click();
				return false;
			}
		}
	})
	
	//右クリックした場合、削除ボタンを表示する
	$(document).on("mouseup",".memo",function(e){
		if(e.which == 3){
			if($(this).hasClass("select")){
				$(this).removeClass("select");
				$(this).children(".destroy-btn").hide();
			}else{
				$(this).addClass("select");
				$(this).children(".destroy-btn").show();
			}
			return false;
		}
	})

	//スマホで投稿を長押しした場合、削除ボタンを表示する
	var isLongTap = false;
	$(document).on("touchstart",".memo",function(){
	  timerid = setTimeout(function() {
	    isLongTap = true;
	  },1200);
	});
	$(document).on('touchend touchcancel',".memo",function(){
	  clearTimeout(timerid);
	  if(isLongTap){
		if($(this).hasClass("select")){
			$(this).removeClass("select");
			$(this).children(".destroy-btn").hide();
		}else{
			$(this).addClass("select");
			$(this).children(".destroy-btn").show();
		}	
	  }
	  isLongTap = false;
	});

	//カテゴリー選択を表示する
	$(".category-select-show").click(function(){
		if($(".category-select-show").hasClass("close")){
			$(".category-select-show").addClass("open");
			$(".category-select-show").removeClass("close");
			$("#category-select").fadeIn();
		}else{
			$(".category-select-show").addClass("close");
			$(".category-select-show").removeClass("open")
			$("#category-select").fadeOut();
		}
		$(".input-show").toggle();
	})

	//入力項目を表示する
	$(".input-show").click(function(){
		if($(".input-show").hasClass("close")){
			$(".input-show").addClass("open");
			$(".input-show").removeClass("close");
			$("#input-area").fadeIn();
		}else{
			$(".input-show").addClass("close");
			$(".input-show").removeClass("open")
			$("#input-area").fadeOut();
		}
		$(".category-select-show").toggle();
	})

	//カテゴリー選択
	$("#category-select .all").click(function(){
		$("#memo-list .memo").each(function(){
			$(this).fadeIn();
		})
	})
	$("#category-select .category0").click(function(){
		$("#memo-list .memo").each(function(){
			if($(this).hasClass("category0")){
				$(this).fadeIn();
			}else{
				$(this).hide();	
			}
		})
	})
	$("#category-select .category1").click(function(){
		$("#memo-list .memo").each(function(){
			if($(this).hasClass("category1")){
				$(this).fadeIn();
			}else{
				$(this).hide();	
			}
		})
	})
	$("#category-select .category2").click(function(){
		$("#memo-list .memo").each(function(){
			if($(this).hasClass("category2")){
				$(this).fadeIn();
			}else{
				$(this).hide();	
			}
		})
	})
	$("#category-select .category3").click(function(){
		$("#memo-list .memo").each(function(){
			if($(this).hasClass("category3")){
				$(this).fadeIn();
			}else{
				$(this).hide();	
			}
		})
	})
	
	$("#category-select").click(function(){
		$(".category-select-show").click();
	})
	
	$(document).on("contextmenu",function(){
		return false;
	})
})