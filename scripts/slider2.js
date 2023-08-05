$(document).ready(function(){
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.slider-container2');
    const track = $('.slider-track2');
    const item = $('.slider-item2');
    const itemCount=item.length;
    const btn = $('.slider-button2');
    const itemWidth = container.width() + 10;
    const movePosition = slidesToScroll*itemWidth;
    let count = 1;

   item.each(function (index, item){
        $(item).css({
            minWidth: itemWidth,
        })
    });

    btn.click(function(){
        if(count == itemCount ){
            position += itemWidth *(itemCount-slidesToShow);
            track.css({
                transform: `translateX(${position}px)`
            });
            position = 0;
            count = 1;
        }
        else{
            position-=movePosition
            track.css({
                transform: `translateX(${position}px)`
            });
            ++count;
            console.log(count);
            console.log(itemCount);
        }
    });
    
});
