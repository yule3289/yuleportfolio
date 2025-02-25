// ScrollTrigger를 gsap에 등록
gsap.registerPlugin(ScrollTrigger);
$(function(){
    // 네비 아이콘토글
    $(".nav_icon").click(function(){
        $("body").toggleClass("on")
    })
        // gsap
        circle()
        function circle(){
    // gsap애니메이션
            let tl =gsap.timeline();
            tl.to("#main .inner .circle>*",{
                opacity:1,
                stagger:0.5,
                transform: "scale(1.2)",
                x:50,
                y:50,
                duration:1,
            });
        }
        // main 화면 넘어가기
        gsap.timeline({
            scrollTrigger:{
                scrub:3,
                trigger:'#about',
                start:'20% 80%',
                end:'80% 100%',
                // markers:true,
            },
        })
        .to('#main',{backgroundColor:"#F0F8FF",ease:'easeOutQuint',duration:5},0)    
        .fromTo('#about .inner .subtitle',{x:'-100%'},{x:"0%", ease:'easeInOutElastic',duration:5},0)
        // 텍스트 떨어지는 효과
        gsap.timeline({
            scrollTrigger:{
                scrub:3,
                trigger:'#text',
                start:'0% 50%',
                end:'50% 70%',
                // markers:true,
            }
        })
        .fromTo('.txt_effect_wrap .txt_portfolio',{y:"-100%", opacity:0},{y:'0%',opacity:1, ease:"ease-in-out",duration:5,zIndex:1},0)
        .fromTo('.txt_effect_wrap .txt_yule',{y:"-100%", opacity:0},{y:'0%',opacity:1, ease:"ease-in-out",duration:5,zIndex:1},1)
        .fromTo('.txt_effect_wrap .txt_design',{y:"-100%", opacity:0},{y:'0%',opacity:1, ease:"ease-in-out",duration:5,zIndex:1},2)
        .fromTo('.txt_effect_wrap .txt_publishing',{y:"-100%", opacity:0},{y:'0%',opacity:1, ease:"ease-in-out",duration:5,zIndex:1},3)
        .fromTo('.txt_effect_wrap .txt_personal',{y:"-100%", opacity:0},{y:'0%',opacity:1, ease:"ease-in-out",duration:5,zIndex:1},4)

        // 텍스트 고정, 카드 위에서 올라오기기
        gsap.timeline({
            scrollTrigger:{
                scrub:3,
                trigger:'#work .publishing_list',
                start:'5% 50%',
                end:'5% 50%',
                // markers:true,
            }
        })
        .to('.txt_effect_wrap',{opacity:0, ease:"ease-in-out",duration:5},0)
       
        $(".list").each(function () {
            let target = $(this);
      
            gsap.to(target, {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              scrollTrigger: {
                trigger: target,
                start: "top 70%",
                end: "bottom 40%",
                duration: 0.3,
                toggleActions: "play reverse play reverse", // 보이면 실행, 사라지면 원래대로
              },
            });
        });
       
        // design 화면
        gsap.timeline({
            scrollTrigger:{
                scrub:3,
                trigger:'#design',
                start:'20% 80%',
                end:'80% 100%',
                // markers:true,
            },
        })
        .fromTo('#design .inner .subtitle',{x:'-100%'},{x:"0%", ease:'easeInOutElastic',duration:5},0)
        
        // contact 화면
        gsap.timeline({
            scrollTrigger:{
                scrub:3,
                trigger:'#contact',
                start:'20% 80%',
                end:'80% 100%',
                // markers:true,
            },
        })
        
        .fromTo('#contact .inner .subtitle',{x:'-100%'},{x:"0%", ease:'easeInOutElastic',duration:5},0)
})