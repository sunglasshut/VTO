(function() {
    "use strict";
    var e = {
    	/* Your Global Var
    	   To call - this.settings.yourVariableHere
    	*/
        //LFWLinkPrefixftp: "/SearchDisplay"
    };
    var i = {
        settings: e,
        setEmail: function() {
           console.log('this.settings.LFW_Link_Prefix_ftp,'+this.settings.LFWLinkPrefixftp);
        },
         setEmail: function() {
           console.log('this.settings.LFW_Link_Prefix_ftp,'+this.settings.LFWLinkPrefixftp);
        },
        vtoApplication: function() {
            var obj = this
            var glassesUpc = $('#upc').text();
            var currentUserId = "";
            var currentVideoId = "";
            var renderedGlasses = "";
            var pageType = utag.data.page_type
            var url = 'https://d1phjbsp802ne8.cloudfront.net/application.js'
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

            function renderSucceeded() {
                $("#render-success").show();
                $("#render-success-time").text(currentTime());
                console.log('render-success')
            }

            function genericErrorHandler(error) {
                console.error(error);
                $('#my_vto_div').hide();
                 $("#vto_start_button").addClass('hide')
                //$('#display-error').css('display', 'block');
                //$('#error-code').text(error.code);
                //$('#error-message').text(error.message);
                //$('#error-name').text(error.name);
            }

            function renderGlassesFlow(upc) {
                if (renderedGlasses !== upc && currentVideoId) {
                    $("#video-id").text(currentVideoId);
                    VtoApp.renderGlasses(currentVideoId, upc, renderSucceeded, genericErrorHandler);
                    renderedGlasses = upc;
                }
            }

            function startCaptureFlow() {
                $(".vto-try-them-on").hide();

                function onComplete(videoId) {
                    $("#video-id").text(videoId);
                    $("#vto_toggle_button").show();
                    $("#mainImageContainer").hide();
                    currentVideoId = videoId;
                    VtoApp.renderGlasses(currentVideoId, glassesUpc, renderSucceeded, genericErrorHandler);
                    
                    var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "'+currentVideoId+'" }' );
                    $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
                    var cookie = $.cookie("vtoId")
                    console.log('cookie: '+cookie)
                    console.log('onComplete videoId '+currentVideoId);
                    console.log('onComplete currentUserId: '+currentUserId);
                    console.log('onComplete');
                }

                VtoApp.startCapture(glassesUpc, onComplete, genericErrorHandler);
                $('#my_vto_div').show();
                console.log('startCaptureFlow');
            }



            window.jQuery.ajax(url, {
                type: 'get',
                dataType: 'script',
                cache: true,
                async: true,
                crossDomain: true,
                success: function(data) {
                    VtoApp.init('my_vto_div', currentUserId, 'luxdeepblue', 'en-us', function (userId) {
                        $("#user-id").text(userId);
                        //$('#vto_start_button').show();
                        currentUserId = userId;
                        if (currentVideoId) {
                            renderGlassesFlow(glassesUpc);
                            $(".vto-try-them-on").hide();
                            $("#vto_toggle_button").show();
                            $('#my_vto_div').show();
                            console.log('currentVideoId '+currentVideoId)
                        }
                       // console.log('currentVideoId '+ currentVideoId)
                        console.log('currentUserId '+ currentUserId)
                        console.log('userId '+ userId)
                    }, genericErrorHandler, analyticsConfig);
                   
                    $("#vto_start_button").removeClass('hide').click(startCaptureFlow);

                    console.log('LOADED' );
                },
                complete: function(){
                    $('.ajax-loader-wrap, #ajax-container').show();
                },
                error: function() {
                  console.log( "error");
                }
            })
        	
           console.log('vtoApplication');
        },
        init: function() {
            return this.vtoApplication(), this;
        }
    };
    window.sghVTO = i;

}()), $(function() {
    sghVTO.init();
});
