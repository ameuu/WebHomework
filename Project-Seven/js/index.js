$(document).ready(function(){

    /**
     * control
     */
    $('div.jquery').hide();
    $('div.js').hide();
    $('button.Jquery').click(function () {
        $('div.jquery').show();
        $('div.control').hide();
    });
    $('button.JS').click(function () {
        $('div.js').show();
        $('div.control').hide();
    });

    /**
     * control-jquery
     */
    $('div.index-one').hide();
    $('div.index-two').hide();
    $('div.index-three').hide();
    $('button.Index-One').click(function () {
        $('button.re').hide();
        $('div.index-one').show();
        $('div.control-jquery').hide();
    });
    $('button.Index-Two').click(function () {
        $('button.re').hide();
        $('div.index-two').show();
        $('div.control-jquery').hide();
    });
    $('button.Index-Three').click(function () {
        $('button.re').hide();
        $('div.index-three').show();
        $('div.control-jquery').hide();
    });

    /**
     * index-one
     */
    $("div.index-bg").hide();
    $("img.max-img").hide();
    $("div.img img").click(function(){
        $("div.index-bg").show();
        var val=$(this).attr("src");
        $("img.max-img").attr("src",val);
        $("img.max-img").fadeIn('slow');
    });
    $("img.max-img").click(function () {
        $("div.index-bg").hide();
        $("img.max-img").hide();
        // 
    });


    /**
     * index-two
     */
    $('div.view').hide();
    $('div.selected').show();
    $('div.select>button').click(function () {
        $(this).addClass('active').siblings('button').removeClass('active');
        var index = $(this).index();
        console.log(index);
        $('div.view').eq(index).show().siblings('div').hide();
        $('div.view').eq(index).addClass('selected').siblings('div').removeClass('selected');
    });


    /**
     * index-three
     */
    var n = $('div.data').children().length;
    $('button.add').click(function () {
        $('div.data').append(function () {
            return '<div class="info">' +
                '<span class="order">'+(n+1)+'</span>' +
                '<span class="information"></span>' +
                '<button class="delete">Delete</button></div>'
        });
        n++;
    });
    
    $('div.data').on('click','.delete',function () {
        $(this).parent().remove();
    })
    
    /**
     * Return Button
     */
    $('button.Return').click(function () {
        $('div.index-one').hide();
        $('div.index-two').hide();
        $('div.index-three').hide();
        $('div.control-jquery').show();
        $('button.re').show();
    });

    $('button.re').click(function () {
        $('div.jquery').hide();
        $('div.js').hide();
        $('div.control').show();
    });
});