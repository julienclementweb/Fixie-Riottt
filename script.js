$(document).ready(function(){

    $("#mainTitle, #1, #2, #3, #4, #5, #6, #7, #8, #9, #10, #11, #12, #13, #14, #15, #16, #17, #18, #19, #20, #more").hide();

    $("#start").click(function() {


        $("#mainTitle").animate({
            opacity: 1
        });


        $("#mainTitle").fadeIn(1500, function(){
            $("#more").fadeIn(1000);
            $("#1").show();
            $("#5").show();
            $("#18").show();
            $("#12").show();
            $("#20").show(1000);
            $("#19").show(1000);
            $("#7").show();
            $("#3").show();
            $("#10").show();
            $("#15").show();
            $("#6").show();
            $("#16").show(1000);
            $("#8").show();
            $("#11").show();
            $("#17").show(1000);
            $("#13").show();
            $("#4").show();
            $("#9").show();
            $("#14").show();

             // $("#1").show(function(){
             //     $("#5").show(function(){
             //         $("#18").show(function(){
             //             $("#12").show(function(){
             //                 $("#2").show(function(){
             //                     $("#20").show(function(){
             //                         $("#7").show(function(){
             //                             $("#19").show(function(){
             //                                 $("#3").show(function(){
             //                                     $("#10").show(function(){
             //                                         $("#15").show(function(){
             //                                             $("#6").show(function(){
             //                                                 $("#16").show(function(){
             //                                                     $("#8").show(function(){
             //                                                         $("#11").show(function(){
             //                                                             $("#17").show(function(){
             //                                                                 $("#13").show(function(){
             //                                                                     $("#4").show(function(){
             //                                                                         $("#9").show(function(){
             //                                                                             $("#14").show(function(){
             //                                                                                 $("#more").show();
             //                                                                             });
             //                                                                         });
             //                                                                     });
             //                                                                 });
             //                                                             });
             //                                                         });
             //                                                     });
             //                                                 });
             //                                             });
             //                                         });
             //                                     });
             //                                 });
             //                             });
             //                         });
             //                     });
             //                 });
             //             });
             //         });
             //     });
             // });
        });
        $("#start").hide();

    });
});
