/**
 * Created by su on 2017/7/31.
 */
$(function () {
    /***********购物车特效***********/
    /*顶部的鼠标移入颜色变化*/
    //1.发生的目标元素 a
    //2.什么事件 mouseover, mouseout
    //3.改变链接颜色
    $('.top a').mouseover(function () {
        $(this).css('color', '#fff');
    })
    $('.top a').mouseout(function () {
        $(this).css('color', '#a4b094')
    })
    $('.shopCar').mouseover(function () {
        $('.goods').stop(true, false).slideDown();
    })
    $('.shopCar').mouseout(function () {
        $('.goods').stop(true, false).slideUp();
    })

    /***********头部特效***********/
    /*表单的输入框移入效果*/
    var flag = true;
    $('.ser1').mouseover(function () {
        if(flag) {
            $('.ser1 input').css('border', '1px solid #c0c0c0');
            $('.ser2').css('border', '1px solid #c0c0c0').css('borderLeft', 'none');
        }
    })
    $('.ser1').mouseout(function () {
        if(flag) {
            $('.ser1 input').css('border', '1px solid #ccc');
            $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
        }
    })
    /*热门搜索的移入效果*/
    $('.hot a').mouseover(function () {
        $(this).css({
            'color': '#fff',
            'background': 'orange',
        })
    }).mouseout(function () {
        $(this).css({
            'color': '#757575',
            'background': '#eee'
        })
    })
    /*按钮的移入效果*/
    $('.ser2').mouseover(function () {
        if(flag) {
            $('.ser1 input').css('border', '1px solid #aaa');
            $(this).css({
                'background': 'orange',
                'color': '#fff',
                'border': 'none'
            })
        }
    }).mouseout(function () {
        if(flag) {
            $('.ser1 input').css('border', '1px solid #ccc')
            $(this).css({
                'background': '#fff',
                'color': '#000',
                'border': '1px solid #ccc',
                'borderLeft': 'none'
            })
        }
    })
    /*表单获取焦点时*/
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color', 'orange');
        $('.hot').css('display', 'none');
        $('.ser2').css('border-color', 'orange');
        $('.keywordList').css('border-color', 'orange').css('display', 'block');
    }).blur(function () {
        flag = true;
        $(this).css('border-color', '#ccc');
        $('.hot').css('display', 'block');
        $('.ser2').css('border-color', '#ccc');
        $('.keywordList').css('border-color', '#ccc').css('display', 'none');
    })
    /*导航效果开始*/
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#ff6700');
        if($(this).index() < 7) {
            $('.select').removeClass('hide');
            $('.select').slideDown().finish();
            $('.select').find('ul').addClass('hide');
            $('.select').find('ul').eq($(this).index()).removeClass('hide');
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000');
    })
    $('.nav').mouseout(function () {
        $('.select').slideUp().finish();
    })
    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish();//停止当前动画和动画队列
    }).mouseout(function () {
        $('.select').slideUp();
    })
    /*二级结束*/

    /*轮播图的效果*/
    var num = 0;
    //自动
    var timer;
    timer = setInterval(autoPlay, 5000);
    $('.banner').mouseover(function () {
        clearInterval(timer);
    }).mouseout(function () {
        timer = setInterval(autoPlay, 5000);
    })
    function autoPlay() {
        num++;
      num > 4 ? num = 0 : num;
        displayImg();
    }
    //手动
    $('.round li').mouseover(function () {
        num = $(this).index();
        displayImg();
    })
    //点击
    $('.direcL').click(function () {
        //上一张
        num = num - 1;
       num<0 ? num=4:num;
        displayImg();
    })
    $('.direcR').click(function () {
        //下一张
        num = num + 1;
      num > 4 ? num = 0 : num;
        displayImg();
    })
    function displayImg() {
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
        $('.round li').eq(num).css('background', 'orange').siblings().css({
            'background': '#342416',
            'opacity': '0.8'
        });
    }
    /*隐藏的导航*/
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700');
        $('.navHide').removeClass('hide');
        $('.ulHide').addClass('hide');
        $('.ulHide').eq($(this).index()).removeClass('hide');
    }).mouseout(function () {
        $(this).css('background', 'transparent');
    })
    //鼠标移出二级导航的范围后消失
    $('.navL').mouseout(function () {
        $('.navHide').addClass('hide');
    })
    //用户移入三级导航的时候让它显示
    $('.ulHide').mouseover(function () {
        $('.navHide').removeClass('hide');
        $('.navL li').eq($(this).index()).css('background', '#ff6700');
    }).mouseout(function () {
        $('.navHide').addClass('hide');
        $('.navL li').eq($(this).index()).css('background', 'transparent');
    })
    /*小米明星单品特效*/
    var n = 0;
    var auto = setInterval(function() {
            n++;
      n>1? n=0 : n;
        $('.star .star-list ul').css('marginLeft', (-1225 * n) + 'px');
        if( n == 0) {
            $('.star .back').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        }
        else{
            $('.star .forward').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
        }
    },5000);
    //手动
    $('.star .back').click(function () {
        $('.star .star-list ul').css('marginLeft', '0');
        $('.star .back').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
    })
    $('.star .forward').click(function () {
        $('.star .star-list ul').css('marginLeft', '-1225px');
        $('.star .forward').css('color', '#dfdfe0').siblings().css('color', '#b0b4bc');
    })
    //    定义一个鼠标移上去出现阴影 移出阴影消失的函数
    function onLi(theLi) {
            $(theLi).css({
                  'transform': 'translate(0, -2px)',
                  'transition': 'transform .4s',
                  'box-shadow': '0 15px 30px #999999'
              })
    }
//    移出
    function outLi(theLi) {
        $(theLi).css({
            'transform': 'translate(0, 0)',
            'transition': 'transform .4s',
            'box-shadow': ''
        })
    }
    //智能硬件阴影
    $('.hardware .goodsList li').add('.recommend .goodsList li').mouseover(function () {
        onLi(this);
    }).mouseout(function () {
        outLi(this);
    })
 //   搭配、配件、周边、热评产品、视频 阴影特效
    $('.hardware .goodsList li').add('.collocation .goodsList li').add('.mountings .goodsList li')
        .add('.perimeter .goodsList li').add('.hotComments .goodsList li')
        .add('.video .goodsList li').mouseover(function () {
        if($(this).index() < 7) {
            onLi(this);
        }
    }).mouseout(function () {
        // if($(this).index() < 7) {
            outLi(this);
    })
//  tab切换
  function tabCut(titleLi) {
      $(titleLi).css({
          'color':'#ff6700',
          'border-bottom':'2px solid #ff6700'
      }).siblings().css({
          'color':'#000',
          'border-bottom':'none'
      })
  }
  $('.title-list li').mouseover(function () {
      tabCut(this);
      $(this).parents('section').children('.goodsList').children('.secondList').eq($(this).index()).removeClass('hide')
          .siblings('.secondList').addClass('hide');
  })
//   鼠标移入li显示评价效果
    $('.secondList > li').mouseover(function () {
        $(this).children('.evaluate').stop(true,false).slideDown('fast');
    }).mouseout(function () {
        $(this).children('.evaluate').stop(true,false).slideUp('fast');
    })
//    为您推荐切换
    var num = 0;
    $('.recommend .forward').click(function () {
        num++;
    num > 3 ? num = 3 : num;
        cut(num);
    })
    $('.recommend .back').click(function () {
        num--;
      num < 0 ? num = 0 : num;
        cut(num);
    })
    function cut() {
        $('.recommend .goodsList ul').css('margin-left', (-1230 * num) + 'px');
        if( num == 0) {
            $('.recommend .back').css({'color':'#dfdfe0',cursor:'default'}).siblings().css('color', '#b0b4bc');
        }
        else if(num == 3) {
            $('.recommend .forward').css({'color':'#dfdfe0',cursor:'default'}).siblings().css('color', '#b0b4bc');
        }
        else {
            $('.recommend .back').add('.recommend .forward').css('color', '#b0b4bc');
        }
    };
//    鼠标放在点击按钮上的颜色
    $('.recommend .forward').mouseover(function () {
        if(num <3 ) {
            $(this).css('color', '#ff6700')
        }
    }).mouseout(function () {
            $(this).css('color', '#b0b4bc');
    })
    $('.recommend .back').mouseover(function () {
        if(num >0) {
            $(this).css('color', '#ff6700')
        }
    }).mouseout(function () {
            $(this).css('color', '#b0b4bc');
    })
//    内容切换
    $('.content .bottom span').click(function () {
        $(this).parents('ul').css('marginLeft', (-295 * $(this).index()) + 'px');
        $(this).addClass('active').siblings().removeClass('active');
    })
    var i = 0;
    $('.content .next').click(function () {
        i++;
         i > 3 ? i=3 : i;
        $(this).parent().css('margin-left', (-295 * i) + 'px');
        $(this).parent().children(' .bottom').children('span').eq(i).addClass('active').siblings().removeClass('active');
    })
    $('.content .prev').click(function () {
        i--;
       i<0 ? i=0 : i;
        $(this).parent().css('margin-left', (-295 * i) + 'px');
        $(this).parent().children(' .bottom').children('span').eq(i).addClass('active').siblings().removeClass('active');
    })
})