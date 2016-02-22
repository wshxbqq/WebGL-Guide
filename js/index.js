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
          { "name": "2. 最简单的WebGL程序", "url": "lessons/lesson1/chapter2/index.html" }
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
