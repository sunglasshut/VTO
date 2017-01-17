(function() {
    "use strict";
    var e = {
    	/* Your Global Var
    	   To call - this.settings.yourVariableHere
    	*/
        currentVideo: ""
        // console.log('this.settings.LFW_Link_Prefix_ftp,'+this.settings.LFWLinkPrefixftp);
    };
    var i = {
        settings: e,
        vtoElements: function() {
            $('<a class="button black sgh-vto-overlay-open" >TRY THEM ON</a>').appendTo('#update_cart_total .container')
            $(
                $('<div/>')
                    .attr('id', 'sgh_vto_overlay')
                    .addClass('vto-hide')
                    .prepend('<a class="button sgh-vto-overlay-close  white button_back-arrow">&lsaquo; Back</a>')
                     .append(
                        $('<div/>')
                        .attr('id', 'sgh-vto-overlay_video')
                        .append('<span  id="user-id">c4a6953b-986c-4549-a927-a7c5d4ea1054</span> <div class="vto-hide" id="my_vto_div">my_vto_div</div> ')
                        .append('<div id="sgh-vto-overlay-video-buttons" class="vto-hide"><a class="vto-start-button " >RETAKE</a><a class="vto-delete-button ">DELETE VIDEO</a></div> ')
                        .append('<div class="vto-hide" id="render-success"><span id="video-id">video-id</span> <span id="render-success-time">&quot;video-id</span> <span id="render-success-time"><!--render--></span> <span id="video-id">video-id</span></div>')
                    )
                    .append(
                         $('<div/>')
                            .attr('id', 'sgh-vto-overlay_container')
                            .append('<a class="button black vto-start-button" id="vto_start_button">VTO GET STARTED</a>')
                    )
                ).appendTo('#pageContainer')
            $('.sgh-vto-overlay-close').on( "click", function() {
                $( '#sgh_vto_overlay' ).hide( );
                //$('sgh-vto-overlay_container').show();
            });
           
            console.log('vtoElements()');
        },
        vtoApplication: function(data) {
            var obj = this
            var glassesUpc = $('#upc').text();
            var currentUserId = "";
            var currentVideoId = "";
            //var currentUserId = "8A9C9D28-5C67-49FD-91D8-CDDFE7AF56AA";
            //var currentVideoId = "4CC97D29-9A26-4B26-A4B1-53EF42D5BDD3";
            //var currentUserId = "77560126-d27d-4ff6-afb3-bd1cbb90d887";
            //var currentVideoId = "05049d1a-f37a-417c-95d8-374cf68b9fa9";
            var renderedGlasses = "";
            var pageType = utag.data.page_type
            var analyticsConfig = {} 

            if ($.cookie('vtoId')){
                var vtoCookie = JSON.parse($.cookie('vtoId'))
                currentUserId = vtoCookie.userId
                currentVideoId = vtoCookie.videoId
                console.log('cookie currentUserId = '+currentUserId)
                console.log('cookie currentVideoId  = '+currentVideoId)
            }

            console.log('currentVideoId = '+currentVideoId)

            function currentTime() {
                var date = new Date()
                var seconds = date.getSeconds();
                var minutes = date.getMinutes();
                var hour = date.getHours();

                return hour + ":" + minutes + ":" + seconds;
            }
            function deleteSucceeded() {
                $( '#sgh_vto_overlay' ).hide( );
                console.log('deleteSucceeded()')
            }
            function renderSucceeded() {
                var videoId = obj.settings.currentVideo
               // $("#render-success").show();
                //$("#video-id").text(currentVideoId+" "+videoId);
                $('#sgh-vto-overlay-video-buttons.vto-hide').removeClass('vto-hide')
                $('sgh-vto-overlay_container').hide();
                $('.vto-delete-button').on( "click", function() {
                    if ($.cookie('vtoId')){
                        $.removeCookie('vtoId');
                    }
                    $( '#sgh_vto_overlay' ).hide( );
                   // VtoApp.deleteUser(videoId, deleteSucceeded, genericErrorHandler)
                    console.log('CLick Delete'+videoId)
                });
                console.log('render-success')
            }


            function genericErrorHandler(error) {
                console.error(error);
                $('#my_vto_div').hide();
                $('#sgh-vto-overlay_video').hide();
                 $("#vto_start_button").addClass('hide')
                //$('#display-error').css('display', 'block');
                //$('#error-code').text(error.code);
                //$('#error-message').text(error.message);
                //$('#error-name').text(error.name);
            }

            function renderGlassesFlow(upc) {
                var videoId = obj.settings.currentVideo
                if (renderedGlasses !== upc && currentVideoId) {
                    $("#video-id").text(currentVideoId);
                    VtoApp.renderGlasses(currentVideoId, upc, renderSucceeded, genericErrorHandler);

                    renderedGlasses = upc;
                }
            }

            function startCaptureFlow() {
                $(".vto-try-them-on").hide();

                function onComplete(videoId) {
                    $("#video-id").text('#video-id '+videoId);
                    $("#vto_toggle_button").show();
                    $("#mainImageContainer").hide();
                    currentVideoId = videoId;
                    VtoApp.renderGlasses(currentVideoId, glassesUpc, renderSucceeded, genericErrorHandler);
                    
                    var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "'+currentVideoId+'" }' );
                    $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
                    obj.settings.currentVideo = currentVideoId
                    var cookie = $.cookie("vtoId")
                    $('#sgh-vto-overlay-video-buttons.vto-hide').removeClass('vto-hide')
                    console.log('cookie: '+cookie)
                    console.log('onComplete videoId '+currentVideoId);
                    console.log('onComplete currentUserId: '+currentUserId);
                    console.log('onComplete');
                }

                VtoApp.startCapture(glassesUpc, onComplete, genericErrorHandler);
                $('#my_vto_div').removeClass('vto-hide').show();
                $('#sgh-vto-overlay_video').show();
                $('#sgh-vto-overlay_container').hide();
                console.log('startCaptureFlow');
            }

            function loadVtoApp(data) {
                VtoApp.init('my_vto_div', currentUserId, 'luxdeepblue', 'en-us', function (userId) {
                    $("#user-id").text("#user-id "+userId);
                    //$('#vto_start_button').show();
                    currentUserId = userId;
                     $('.sgh-vto-overlay-open').on( "click", function() {
                        if (currentVideoId) {
                            obj.settings.currentVideo = currentVideoId
                            renderGlassesFlow(glassesUpc);
                            $(".vto-try-them-on").hide();
                            $("#vto_toggle_button").show();
                            $('#my_vto_div').show();
                            $('#sgh-vto-overlay_video').show();
                            $('#sgh-vto-overlay_container').hide();
                            console.log('currentVideoId '+currentVideoId)
                        }
                        $( '#sgh_vto_overlay' ).show( );
                        //$('sgh-vto-overlay_container').show();
                    });
                    
                   // console.log('currentVideoId '+ currentVideoId)
                    console.log('currentUserId '+ currentUserId)
                    console.log('userId '+ userId)
                }, genericErrorHandler, analyticsConfig);
                $(".vto-start-button").click(startCaptureFlow);
            }

            loadVtoApp(data)
        	
           console.log('vtoApplication');
        },
        vtoAPI: function() {
            var obj = this
            var url = 'https://d1phjbsp802ne8.cloudfront.net/application.js'
            window.jQuery.ajax(url, {
                type: 'get',
                dataType: 'script',
                cache: true,
                async: true,
                crossDomain: true,
                success: function(data) {
                    obj.vtoElements(),
                    obj.vtoApplication(data)
                    console.log('LOADED' );
                },
                complete: function(){
                    $('.ajax-loader-wrap, #ajax-container').show();
                },
                error: function() {
                  console.log( "error");
                }
            })
        },
        init: function() {
            return this.vtoAPI(), this;
        }
    };
    window.sghVTO = i;

}()), $(function() {
    sghVTO.init();
});
