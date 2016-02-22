/*
 * initMenu
 * 读取demo列表json数据
 * 
 * @parma {Object} date demo列表json数据
 */
function initMenu(date) {

    var navTemp = $('<ul></ul>');

    for (i in date) {

        var liTemp = $('<li></li>'),
            childTemp = $('<div class="child"></div>');

        liTemp.append('<a>' + date[i].name + '</a>');

        for (j in date[i].child) {

            var childItem = $('<a target="mainFrame"></a>')

            childItem.text(date[i].child[j].name);
            childItem.attr('href', date[i].child[j].url);
            childItem.attr('title', date[i].child[j].describe);

            childTemp.append(childItem);

        }

        liTemp.append(childTemp);
        navTemp.append(liTemp);

    }

    $('.slidebar ul').replaceWith(navTemp);

}


//侧边栏绑定 li > a
$('.slidebar').delegate('li > a', 'click', function () {

    var pItem = $(this).parent('li');

    if (!pItem.hasClass('open')) {
        pItem.find('.child').slideDown(200, function () {
            setTimeout(function () {
                pItem.addClass('open');
            }, 10);

        });

    } else {
        pItem.find('.child').slideUp(200, function () {
            pItem.removeClass('open');
        });
    }
});


$('.slidebar').delegate('.child > a', 'click', function () {

    $('.child > a').each(function () {
        $(this).removeClass('selected');
    });

    $(this).addClass('selected');

});
 


var jsonDATA = [
    {
        "name": "前言",
        "child": [
          { "name": "写在前面的话", "url": "lessons/lesson0/index.html" },
          { "name": "简单了解浏览器的绘图的几种方式", "url": "lessons/lesson0/chaper1.html" },
          { "name": "如何学习WebGL", "url": "lessons/lesson0/chaper2.html" }
        ]
    }, {
        "name": "课程一: 基础知识",
        "child": [
          { "name": "1. 从canvas 2d API说起", "url": "lessons/lesson1/chapter1/index.html" },
          { "name": "2. 简单的WebGL程序", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "3. WebGL的坐标系", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "4. 做一个简单的画板程序", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "5. uniform 变量", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "6. 画板程序 v2.0", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "7. 总结", "url": "lessons/lesson1/chapter2/index.html" }
        ]
    },
    {
        "name": "课程二: 绘制基本图形",
        "child": [
          { "name": "1. 绘制最简单的三角形", "url": "lessons/lesson1/chapter1/index.html" },
          { "name": "2. 使用缓冲区一次性传入多个点", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "3. javascript的类型数组", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "4. 如何自定义图形", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "5. 总结", "url": "lessons/lesson1/chapter2/index.html" }
        ]
    }, {
        "name": "课程三: 平移 旋转 缩放 ",
        "child": [
          { "name": "1. 变换矩阵：平移", "url": "lessons/lesson1/chapter1/index.html" },
          { "name": "2. 变换矩阵：旋转", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "3. 变换矩阵：缩放", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "4. 复合变化", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "5. 总结", "url": "lessons/lesson1/chapter2/index.html" }
        ]
    },
    {
        "name": "课程四: 基本动画实现",
        "child": [
          { "name": "1. 封装draw函数", "url": "lessons/lesson1/chapter1/index.html" },
          { "name": "2. 周期定调用draw", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "3. 一些优化", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "4. 总结", "url": "lessons/lesson1/chapter2/index.html" }
        ]
    },
    {
        "name": "课程四: 使用贴图",
        "child": [
          { "name": "1. 多彩三角形", "url": "lessons/lesson1/chapter1/index.html" },
          { "name": "2. 混合顶点数据和片元数据", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "3. 光栅化", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "4. 在多边形体上附加2D素材", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "5. 总结", "url": "lessons/lesson1/chapter2/index.html" }
 
        ]
    },

    {
        "name": "课程五: 一些基本的数学知识",
        "child": [
          { "name": "1. 向量的运算", "url": "lessons/lesson1/chapter1/index.html" },
          { "name": "2. 矩阵的运算", "url": "lessons/lesson1/chapter2/index.html" }

        ]
    },

    {
        "name": "课程六: 进入3D世界",
        "child": [
          { "name": "1. 三角形是3D世界的最基本元素", "url": "lessons/lesson1/chapter1/index.html" },
          { "name": "1. 视角概念", "url": "lessons/lesson1/chapter1/index.html" },
          { "name": "2. 透视概念", "url": "lessons/lesson1/chapter2/index.html" },
          { "name": "2. 总结", "url": "lessons/lesson1/chapter2/index.html" }


        ]
    },



]

initMenu(jsonDATA);
$('.slidebar li').eq(0).addClass("open");
$('.slidebar li:first .child').show();
$('.slidebar li:first .child a:first').addClass("selected");



function goPrev() {
    var current = $(".child a.selected");
    var all = $(".child a");

    

    var index = all.index(current);
    index--;

    
    if (index >= 0) {
        current.removeClass("selected");
        var target = all.eq(index);
        target.addClass("selected");
        target.parent().show();
        target.parent().parent().addClass("open");

        $("#editor").attr("src", target.attr("href"))
    }
}

function goNext() {
    var current = $(".child a.selected");
    var all = $(".child a");

    

    var index = all.index(current);
    index++;

    var target = all.eq(index);
    if (target.size()) {
        current.removeClass("selected");
        target.addClass("selected");
        target.parent().show();
        target.parent().parent().addClass("open");

        $("#editor").attr("src", target.attr("href"))
    }

}
