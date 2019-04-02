$(function(){
    // 记录是否移动端
    var bol=true
    function init(){
        $.ajax({
            type:'get',
            url:'./data/imgData.json',
            dataType:'json',
            success:function(result){
                if($(window).width()>768){
                    bol=true
                    console.log('pc端');      
                }else{
                    bol=false
                    console.log('移动端');           
                }
                // 调用模板引擎渲染轮播图
                var html=template('bannerTemp',{'list':result,'bol':bol})   
                $('.carousel-inner').html(html)
                
                // 调用模板引擎渲染所有的分页器
                var htmlLi=template('bannerLi',{'list':result})
                $('.carousel-indicators').html(htmlLi)
            }
        })
    }
    init()


    $(window).on('resize',function(){
        var width = $(window).width()
        console.log(bol,width);
        if((!bol && width > 768) || (bol && width < 768)){
            console.log('分界点触发');   
            bol = width > 768 ? true:false
            init()ww
        }
    })

    // 计算所有的li宽度设置给ul
    var allLi=$('.product_nav .nav li');
    var allLiW=0
    allLi.each(function(index,value){
        allLiW+=$(value).outerWidth()
    })
    $('.product_nav .nav').width(allLiW)

    //iscroll初始化
    var myScroll =  new  IScroll('.product_nav',{
        scrollX: true, //支持水平滑动
        scrollY: false //设置不支持垂直滑动
    })
})