(function() {
    "use strict";
    var e = {
    	/* Your Global Var
    	   To call - this.settings.yourVariableHere
    	*/
        currentVideo: "",
        currentUserId: "",
        glassesUpc: $('#upc').text()
    };
    var i = {
        settings: e,
        vtoElements: function() {
            var obj = this;
            $('<a class="button black sgh-vto-overlay-open vto-hide" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><defs><path id="a" d="M1.1 9.1c0-.1 0-.1 0 0 .4.8.7 1.7.9 1.9V9.8h.4v.1l.2.8c.1.3.2.6.4.8.2.2.6.3.9.3h1.3c.2 0 .5-.1.7-.2.3-.1.5-.3.6-.6.1-.1.1-.3.1-.4.1-.4.2-.7.2-.9h1c0 .2.1.5.2.9 0 .1.1.3.1.4.1.3.3.5.6.6.2.1.5.2.7.2h1.3c.3 0 .6-.1.9-.3.2-.2.4-.5.5-.7l.2-.8v-.1h.3l.1.8c.3-.5.5-1.1.7-1.7.1 0 .1.1.2.1.3.1.4.3.4.5v.2c0 .6-.1 1.1-.4 1.6-.1.2-.2.4-.4.6-.1.1-.2.2-.4.3l-.2.1-.1.2c-.3 1.4-.9 2.6-1.9 3.7-.9.9-2 1.4-3.3 1.4s-2.3-.4-3.2-1.3c-.9-1.1-1.6-2.3-1.9-3.7l-.1-.2-.1-.1c-.2-.1-.3-.2-.4-.3-.2-.3-.4-.7-.5-1-.1-.4-.2-.8-.2-1.2v-.2c0-.3 0-.5.2-.6zm2.7-4.2s.9-1.6 2.3-.5 3 3.1 6.4 3.1l.2 1.7h-.3s0-.5-.9-.6H8.8c-.4 0-.7.2-.8.5H6.8c-.1-.3-.4-.5-.7-.5H3.3c-.9.1-.9.6-.9.6h-.3c.1-1.8.5-4.3 1.7-4.3zM.9 12.7c.2.2.3.3.6.4.3 1.4 1 2.8 2 3.9s2.4 1.7 3.9 1.7 2.9-.6 3.9-1.7 1.7-2.4 2-3.9c.2-.1.4-.3.6-.4.3-.4.6-.8.7-1.3.2-.5.2-1 .2-1.5v-.3c0-.4-.2-.8-.4-1.1-.2-.2-.3-.3-.6-.4 0-.2.1-.4.1-.6.4-2.1-.1-5.9-4.4-7.2C7.2-.5 4.7.2 3.1 2c0 0-3 .9-2.2 6.2-.2 0-.3.1-.4.3-.3.3-.5.7-.5 1v.3c0 .7.2 1.3.4 2 .2.3.3.6.5.9z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-126-581h375v1740h-375z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" fill="#FFF" d="M-5-5h24.8v28.7H-5z"/></g></svg> <span></span</a>').appendTo('#update_cart_total .container')
            $(
                $('<div/>')
                    .attr('id', 'sgh_vto_overlay')
                    //.addClass('vto-hide')
                   
                    .append(
                        $('<div/>')
                        .attr('id', 'sgh-vto-overlay_video')
                        .append('<span id="user-id">c4a6953b-986c-4549-a927-a7c5d4ea1054</span>')
                        .append(
                            $('<div/>')
                            .attr('id', 'sgh-vto-video-container')
                            .append('<div id="vto_app_root" class="vto-hide">vto_app_root</div></div>')
                        )
                        .append(
                            $('<div/>')
                            .attr('id', 'sgh-vto-vtomodel-container')
                            //.addClass('vto-hide')
                            .append('<div id="vto_modal_app_root" ></div>')
                            .prepend(
                                $('<div/>')
                                .attr('id', 'sgh-vto-overlay-video-buttons')
                                .append('<a class="button sgh-vto-overlay-close  white button_back-arrow"><svg class="back-bar-arrow" width="8px" height="14px" viewBox="0 0 8 14" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Ray-Ban-Mobile-VTO"><g id="6.0-Reveal---Without-Sunglasses" transform="translate(-70.000000, -553.000000)"><g id="Icons/Ray-Ban-Arrow-(Black)" transform="translate(70.000000, 553.000000)"><path d="M5.18269231,14 L-3.51718654e-13,14 L-3.51718654e-13,13.9230769 L4.71153846,7 L-3.5199621e-13,0.0769230769 L-3.51718654e-13,0 L5.18269231,0 L2.82692308,0 L2.82692308,0.0769230769 L7.53846154,7 L2.82692308,13.9230769 L2.82692308,14 L5.18269231,14 Z" id="Combined-Shape" transform="translate(3.769231, 7.000000) rotate(-180.000000) translate(-3.769231, -7.000000) "></path></g></g></g></svg> Back to Product Page</a>')
                                .append('<a id="vto-open-edit" class="vto-hide" >Options</a> ')
                            )
                        )
                        //.append('<div id="sgh-vto-video-edit" class="vto-hide sgh-vto-video-edit-modal"><i class="modal-close vto-delete-cancel">&#10006;</i><p>Are you sure you want to delete your virtual model</p> <a class="vto-start-button outlineButton" >RETAKE MY VIDEO</a><a class="vto-delete-button outlineButton">REMOVE MY VIRTUAL MODEL</a></div> ')
                        .append(
                            $('<div/>')
                            .attr('id', 'sgh-vto-video-edit-container')
                            .addClass('vto-hide vto-video-edit-modal-initial')
                            .append(
                                $('<div/>')
                                .attr('id', 'sgh-vto-video-edit')
                                .addClass('sgh-vto-video-edit-modal')
                                .append('<i class="modal-close vto-option-cancel">&#10006;</i>')
                                .append(
                                    $('<div/>')
                                    .addClass('vto-edit-page vto-edit-initial')
                                    .append('<p>VIRTUAL MODEL OPTIONS</p>')
                                    .append('<a class="vto-retake-button outlineButton" >RETAKE MY VIDEO</a>')
                                    .append('<a class="vto-delete-button outlineButton">REMOVE MY VIRTUAL MODEL</a>')
                                )
                                .append(
                                    $('<div/>')
                                    .addClass('vto-edit-page vto-edit-retake')
                                    .append('<p>RETAKING YOUR VIDEO WILL REMOVE YOUR CURRENT ONE </p>')
                                    .append('<a class="vto-retake-cancel button black" >CANCEL</a>')
                                    .append('<a class="vto-retake-confirm outlineButton">RETAKE</a>')
                                )
                                .append(
                                    $('<div/>')
                                    .addClass('vto-edit-page vto-edit-delete')
                                    .append('<p>ARE YOU SURE YOU WANT TO REMOVE YOUR VIRTUAL MODEL? </p>')
                                    .append('<a class="vto-delete-cancel button black" >CANCEL</a>')
                                    .append('<a class="vto-delete-confirm outlineButton">REMOVE</a>')
                                )
                            )
                            .append('<div class="sgh-vto-video-edit-background vto-option-cancel"></div>')
                        )
                        //.append('<div id="sgh-vto-video-delete" class="vto-hide sgh-vto-video-edit-modal"><i class="modal-close vto-delete-cancel">&#10006;</i><p>Are you sure you want to delete your virtual model</p> <a class="vto-delete-cancel button black ">KEEP MY VIRTUAL MODEL</a> <a class="vto-delete-confirm outlineButton">REMOVE MY VIRTUAL MODEL</a></div>')
                        .append('<div class="vto-hide" id="render-success"><span id="video-id">video-id</span> <span id="render-success-time">&quot;video-id</span> <span id="render-success-time"><!--render--></span> <span id="video-id">video-id</span></div>')
                    )
                    /*.append(
                         $('<div/>')
                            .attr('id', 'sgh-vto-overlay_container')
                            .append('<a class="button black vto-start-button" id="vto_start_button">VTO GET STARTED</a>')
                    )*/
                ).appendTo('#pageContainer')

            $('.sgh-vto-overlay-close').on( "click", function() {
                obj.vtoClose()
            });
           
            console.log('vtoElements()');
        },
        vtoClose: function() {
            $('#pageContainer').removeClass('vto-disable-scrolling').bind("touchmove")
            $( "#sgh_vto_overlay" ).removeClass('active').hide()
            if(  $('#sgh-vto-video-edit-container').is(":visible") == true ){ 
                $('#sgh-vto-video-edit-container')
                    .hide()
                    .addClass('vto-video-edit-modal-initial')
                    .removeClass('vto-video-edit-modal-delete')
                    .removeClass('vto-video-edit-modal-retake')
            }
            $('html').removeClass('hide-body')
            $('body').removeClass('fullscreen-open')
            $('html').css('top','')
            console.log('onCloseVto')
        },
        analyticsTrack: function(linkName) {
            var obj = this
            var videoId = obj.settings.currentVideo
            var user = 'new'
            if(videoId){
                user = 'returning'
                //console.log('returning')
            }
            var products = [{
                'upc': obj.settings.glassesUpc
            }];
            var track = {
                'link_name': 'sgh: vto: '+user+': '+linkName,
                'site_events': {
                    'see_their_shades': true
                },
                'prd_upc': [obj.settings.glassesUpc],
                'products': products,
                "authenticated_status": utag_data.authenticated_status || "",
                'language': utag_data.language || "",
                'cntry': utag_data.country || ""
            };
            _trackAnalytics(track);
        },
        onSupportedUPC: function(isSupported, data) {
            console.log('isSupported: '+isSupported)
        },
        genericErrorHandler:  function(error) {
            var obj = this
            console.log('error: '+error);
            $('#vto_app_root').hide();
            $('#sgh-vto-overlay_video').hide();
            $("#vto_start_button").addClass('hide')
            //obj.analyticsTrack('error: generic')
        },
        vtoApplication: function(data) {
            var obj = this
            var glassesUpc = obj.settings.glassesUpc
            var vtoRoot = "#vto_app_root"
            var currentUserId = "";
            var currentVideoId = "";
            //var currentUserId = "8A9C9D28-5C67-49FD-91D8-CDDFE7AF56AA";
            //var currentVideoId = "4CC97D29-9A26-4B26-A4B1-53EF42D5BDD3";
            //var currentUserId = "77560126-d27d-4ff6-afb3-bd1cbb90d887";
            //var currentVideoId = "05049d1a-f37a-417c-95d8-374cf68b9fa9";
            var renderedGlasses = "";
            var pageType = utag.data.page_type
            var rendererSuccess = false

            if ($.cookie('vtoId')){
                var vtoCookie = JSON.parse($.cookie('vtoId'))
                currentUserId = vtoCookie.userId
                currentVideoId = vtoCookie.videoId
            }
            
            function getProductInfo(){
                if($('.fullscreenable .info-container').length < 1){
                    $('.fullscreenable div.renderer:not(.preview-page)').after('<div class="info-container vto-hide"></div>')
                }
                var brand = $('#update_cart_total .info-container').find('.brand').text()
                var price = $('#update_cart_total .info-container').find('.price').text()
                var style = $('#update_cart_total .info-container').find('.style').first().text()
                var swatch = $('.swatchesTitle').find('h3').html()
                var polar = $('#update_cart_total .info-container > .catalog-polarized').length
                var polarIcon = (polar) ? '<p class="catalog-polarized">Polarized</p>':'';
               // console.log('polor: '+polarIcon);

                $('#sgh_vto_overlay .info-container').html(
                    '<p class="brand">'+brand+'</p>'+
                    polarIcon +
                    '<p class="price">'+price+'</p>'+
                    '<p class="style">'+style+'</p>'+
                    '<p class="swatch">'+swatch+'</p>'
                      
                )
            }

            function deleteSucceeded() {
                if ($.cookie('vtoId')){
                    $.cookie("vtoId", null, {expires: 1, path: '/', domain: 'sunglasshut.com'});
                }
                closeVTOModelWindow()
                
                if(  $('.fullscreenable div.renderer').find('.sgh-vto-rotate').is(":visible") == true ){  
                    $('.fullscreenable div.renderer').find('.sgh-vto-rotate').hide();     
                }
                $('a.sgh-vto-overlay-open').find('span').text('TRY THEM ON')
                $( '#sgh-vto-overlay_video' ).hide( );
                $( '#sgh_vto_overlay .info-container' ).hide( );
                $('#sgh-vto-overlay_container').show();
                $('#vto-open-edit').hide();
                                
                $('#sgh-vto-video-edit-container')
                        .hide()
                        .addClass('vto-video-edit-modal-initial')
                        .removeClass('vto-video-edit-modal-delete')
                        .removeClass('vto-video-edit-modal-retake')
                currentUserId = "";
                currentVideoId = "";
                obj.settings.currentVideo = ""
                obj.settings.currentUserId = ""
                obj.analyticsTrack('option modal: delete modal: confirmed')
                //console.log('deleteSucceeded() '+currentVideoId)
            }

            function closeVTOModelWindow() {
                $( "#sgh-vto-vtomodel-container" ).animate({
                     right: "-100%",
                }, 300 , function() {
                    $(this).addClass('vto-hide')
                    obj.vtoClose()
                });
                console.log("closeVTOModelWindow")
            }

            function renderSucceeded() {

                var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "'+currentVideoId+'" }' );
                $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
                obj.settings.currentVideo = currentVideoId
                obj.settings.currentUserId = currentUserId
                var cookie = $.cookie("vtoId")
                $('#sgh-vto-overlay-video-buttons.vto-hide').removeClass('vto-hide')
                             
                $( "#sgh-vto-vtomodel-container" ).removeClass('vto-hide').animate({
                    right: "0",
                }, 300, function() {
                    $('#vto-open-edit').delay( 300 ).fadeIn( 300 );
                    if($('.fullscreenable .sgh-vto-rotate').length < 1){
                        $('.fullscreenable div.renderer:not(.preview-page)').prepend('<div class="sgh-vto-rotate vto-hide"><svg width="62px" height="39px" viewBox="0 0 62 39" version="1.1" class="rotate-icon"><g id="Ray-Ban-Mobile-VTO" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="7.0-Reveal---Final-Output-v1" transform="translate(-157.000000, -487.000000)" fill="#000000"><g id="Rotate-Icon" transform="translate(157.000000, 487.000000)"><g id="Group"><g id="Group-2"><polygon id="Fill-1" points="55.3812997 -0.000202399732 55.3812997 1.68848603 59.7993295 1.68848603 59.7993295 8.32112524 61.1156405 8.32112524 61.1156405 -0.000202399732"></polygon><polygon id="Fill-2" points="0 -0.000202399732 0 8.70501007 1.31578509 8.70501007 1.31578509 1.68848603 6.48636822 1.68848603 6.48636822 -0.000202399732"></polygon><path d="M31.2754017,12.672652 C26.7337869,12.672652 22.622353,12.0276715 19.1351544,11.154654 C8.18079649,8.41146299 1.06914112,3.03572611 0.772011395,2.80768908 L1.57925764,1.06975005 C1.65025324,1.12372331 8.79556579,6.51632684 19.4953913,9.18260597 C29.3369589,11.6356907 44.2991497,12.216578 59.6873142,1.05828073 L60.4640586,2.81983306 C50.0908129,10.3416818 39.9084664,12.672652 31.2754017,12.672652" id="Fill-3"></path></g><path d="M6.33754041,25.7398486 L7.23997334,25.7398486 C8.61413259,25.7398486 9.12687858,26.2525946 9.12687858,28.0164408 C9.12687858,29.780287 8.61413259,30.2930329 7.23997334,30.2930329 L6.33754041,30.2930329 L6.33754041,25.7398486 Z M6.33754041,32.3850366 C6.78875687,32.3850366 7.3220127,32.3645267 7.65017013,32.3235071 L9.45503601,38.4559491 L12.0392758,38.4559491 L9.88574264,31.7492315 C10.7471559,31.3595446 11.6700987,30.3955821 11.6700987,28.0164408 C11.6700987,24.8579255 10.2139001,23.6478449 7.36303238,23.6478449 L3.79432031,23.6478449 L3.79432031,38.4559491 L6.33754041,38.4559491 L6.33754041,32.3850366 Z M14.0492401,34.8667272 C14.0492401,36.9587308 15.2798304,38.6610475 17.9461096,38.6610475 C20.6123887,38.6610475 21.8429791,36.9587308 21.8429791,34.8667272 L21.8429791,27.2370669 C21.8429791,25.1450632 20.6123887,23.4427465 17.9461096,23.4427465 C15.2798304,23.4427465 14.0492401,25.1450632 14.0492401,27.2370669 L14.0492401,34.8667272 Z M16.5924602,27.2985964 C16.5924602,26.191065 16.9206176,25.6578092 17.9461096,25.6578092 C18.9716015,25.6578092 19.299759,26.191065 19.299759,27.2985964 L19.299759,34.8051976 C19.299759,35.912729 18.9716015,36.4459848 17.9461096,36.4459848 C16.9206176,36.4459848 16.5924602,35.912729 16.5924602,34.8051976 L16.5924602,27.2985964 Z M25.7808683,38.4559491 L28.3240883,38.4559491 L28.3240883,25.8629076 L30.7852691,25.8629076 L30.7852691,23.6478449 L23.3196875,23.6478449 L23.3196875,25.8629076 L25.7808683,25.8629076 L25.7808683,38.4559491 Z M35.5845715,26.6012618 L35.6255912,26.6012618 L36.6305733,32.9593121 L34.5795894,32.9593121 L35.5845715,26.6012618 Z M34.2104123,35.1743747 L36.9997505,35.1743747 L37.4509669,38.4559491 L39.9121477,38.4559491 L37.184339,23.6478449 L34.0258237,23.6478449 L31.2980151,38.4559491 L33.7591958,38.4559491 L34.2104123,35.1743747 Z M42.8655646,38.4559491 L45.4087847,38.4559491 L45.4087847,25.8629076 L47.8699654,25.8629076 L47.8699654,23.6478449 L40.4043838,23.6478449 L40.4043838,25.8629076 L42.8655646,25.8629076 L42.8655646,38.4559491 Z M56.4635881,38.4559491 L56.4635881,36.2408864 L51.9104038,36.2408864 L51.9104038,31.8928004 L55.1919781,31.8928004 L55.1919781,29.6777378 L51.9104038,29.6777378 L51.9104038,25.8629076 L56.1764504,25.8629076 L56.1764504,23.6478449 L49.3671837,23.6478449 L49.3671837,38.4559491 L56.4635881,38.4559491 Z" id="ROTATE-Copy"></path></g></g></g></g></svg></div>')
                    }
                    if(rendererSuccess != true){
                        getProductInfo()
                       
                        $('#vto-open-edit').on( "click", function() {
                           $('#sgh-vto-video-edit-container').fadeIn( 300 );
                           obj.analyticsTrack('option modal:')//
                        });

                        $('.vto-option-cancel').on( "click", function() {
                            $('#sgh-vto-video-edit-container').fadeOut( 300 );
                            $('#sgh-vto-video-edit-container')
                            .addClass('vto-video-edit-modal-initial')
                            .removeClass('vto-video-edit-modal-delete')
                            .removeClass('vto-video-edit-modal-retake')
                            obj.analyticsTrack('option modal: cancel' )
                           // console.log('option modal: cancel')
                        });

                        $('.vto-retake-button').on( "click", function() {
                            $('#sgh-vto-video-edit-container')
                            .addClass('vto-video-edit-modal-retake')
                            .removeClass('vto-video-edit-modal-delete')
                            .removeClass('vto-video-edit-modal-initial')
                            obj.analyticsTrack('option modal: retake modal:' )
                        });

                        $('.vto-retake-cancel').on( "click", function() {
                            $('#sgh-vto-video-edit-container')
                            .addClass('vto-video-edit-modal-initial')
                            .removeClass('vto-video-edit-modal-delete')
                            .removeClass('vto-video-edit-modal-retake')
                            obj.analyticsTrack('option modal: retake modal: cancel' )
                         });
                        $('.vto-retake-confirm').on( "click", function() {
                            closeVTOModelWindow()
                            startCaptureFlow()
                            obj.analyticsTrack('option modal: retake modal: confirmed' )
                            $( '#sgh_vto_overlay .info-container' ).hide( );
                            $('#vto-open-edit').hide();
                            if(  $('.fullscreenable div.renderer').find('.sgh-vto-rotate').is(":visible") == true ){  
                                $('.fullscreenable div.renderer').find('.sgh-vto-rotate').hide();     
                            }
                            if(  $('#sgh-vto-video-edit-container').is(":visible") == true ){ 
                                $('#sgh-vto-video-edit-container')
                                    .hide()
                                    .addClass('vto-video-edit-modal-initial')
                                    .removeClass('vto-video-edit-modal-delete')
                                    .removeClass('vto-video-edit-modal-retake')
                            }
                         });
                        $('.vto-delete-cancel').on( "click", function() {
                            $('#sgh-vto-video-edit-container')
                            .addClass('vto-video-edit-modal-initial')
                            .removeClass('vto-video-edit-modal-delete')
                            .removeClass('vto-video-edit-modal-retake')
                            obj.analyticsTrack('option modal: delete modal: cancel')
                         });
                        $('.vto-delete-confirm').on( "click", function() {
                            VtoApp.deleteUser(
                                obj.settings.currentUserId,
                                deleteSucceeded(),
                                obj.genericErrorHandler
                            )
                            //deleteSucceeded()
                           
                         });
                        $('.vto-delete-button').on( "click", function() {
                           $('#sgh-vto-video-edit-container')
                            .removeClass('vto-video-edit-modal-initial')
                            .removeClass('vto-video-edit-modal-retake')
                            .addClass('vto-video-edit-modal-delete')
                           // VtoApp.deleteUser(videoId, deleteSucceeded, genericErrorHandler)
                           obj.analyticsTrack('option modal: delete modal:')
                           // console.log('CLick Delete'+videoId)
                        });
                        rendererSuccess = true
                      //  console.log('click events '+rendererSuccess)
                    }
                    $('.fullscreenable div.renderer:not(.preview-page)').find('.sgh-vto-rotate').delay( 800 ).fadeIn( 300 );
                    $('#sgh_vto_overlay .info-container').delay( 300 ).fadeIn( 300 );
                    $('sgh-vto-overlay_container').hide();
                    obj.analyticsTrack('vto pdp:' )
                });
                console.log('cookie: '+cookie) 
               console.log('render-success')
            }
            
            

            var analyticsConfig = {
                instructions: {
                    onPageLoad: function () {
                       obj.analyticsTrack('step 1: instructions')
                       console.log('analyticsConfig - instructions')
                        //showAnalyticsAlert('instructions', 'onPageLoad');
                    },
                    //takeVideoElementClass: 'vto-take-video'
                },
                uploadingVideo: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 2: uploaded video')
                        console.log('analyticsConfig - uploadingVideo')
                       // showAnalyticsAlert('uploadingVideo', 'onPageLoad');
                    }
                },
                genderSelect: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: select gender')
                        console.log('analyticsConfig - genderSelect')
                       // showAnalyticsAlert('genderSelect', 'onPageLoad');
                    },
                    //genderMensElementClass: 'vto-mens',
                    //genderWomensElementClass: 'vto-womens',
                   // genderNextElementContentBox: 'vto-gender-next'
                },
                sizeSelect: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: select size')
                        console.log('analyticsConfig - sizeSelect')
                       // showAnalyticsAlert('sizeSelect', 'onPageLoad');
                    },
                   // sizeSmallElementClass: 'vto-small',
                   // sizeAverageElementClass: 'vto-average',
                   // sizeLargeElementClass: 'vto-large',
                   // sizeNextElementContentBox: 'vto-size-next'
                },
                analyzingVideo: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 3: analyzing video')
                        console.log('analyticsConfig - analyzingVideo')
                       // showAnalyticsAlert('analyzingVideo', 'onPageLoad');
                    }
                },
                reviewWithoutGlasses: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 4: review without glasses')
                        console.log('analyticsConfig - reviewWithoutGlasses')
                       // showAnalyticsAlert('reviewWithoutGlasses', 'onPageLoad');
                    },
                   // retakeElementClass: 'without-glasses-retake',
                   // continueElementClass: 'without-glasses-continue',
                    onFaceSwipe: function () {
                       // showAnalyticsAlert('reviewWithoutGlasses', 'onFaceSwipe');
                    }
                },
                mappingGlasses: {
                    onPageLoad: function () {
                        obj.analyticsTrack('step 4: mapping glasses')
                        console.log('analyticsConfig - mappingGlasses')
                      //  showAnalyticsAlert('mappingGlasses', 'onPageLoad');
                    }
                },
                reviewWithGlasses: {
                    onPageLoad: function () {
                        
                        obj.analyticsTrack('step 5: review with glasses')
                        console.log('analyticsConfig - reviewWithGlasses - reviewTakeToModel()')
                       
                        //showAnalyticsAlert('reviewWithGlasses', 'onPageLoad');
                    },
                    //retakeElementClass: 'with-glasses-retake',
                    //continueElementClass: 'with-glasses-continue',
                    onFaceSwipe: function () {
                        $('.sgh-vto-rotate').delay( 1000 ).fadeOut( 500 );
                        obj.analyticsTrack('step 5: review with glasses : swipe face')
                        //console.log('swipe');
                       // showAnalyticsAlert('reviewWithGlasses', 'onFaceSwipe');
                    }
                },
                saveToAccount: {
                    onPageLoad: function() {
                        obj.analyticsTrack('step 6: save to account')
                        console.log('step 6: save to account')
                        //takeToModel()
                    },
                    onSave: function() {console.log('step 6: save to account')},
                    onContinueNoSave: function() {console.log('step 6: save to account')},
                },
                uploadFailed: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: uploading failed')
                        console.log('analyticsConfig - uploadFailed')
                        //showAnalyticsAlert('uploadFailed', 'onPageLoad');
                    },
                   // uploadRetryClass: 'upload-failed-retry'
                },
                videoTooLong: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: video too long')
                        console.log('analyticsConfig - videoTooLong')
                        //showAnalyticsAlert('videoTooLong', 'onPageLoad');
                    },
                    //uploadRetryClass: 'video-too-long-retry'
                },
                processingError: {
                    onPageLoad: function () {
                        obj.analyticsTrack('error: video processing')
                        console.log('analyticsConfig - processingError')
                       // showAnalyticsAlert('processingError', 'onPageLoad');
                    },
                   // uploadRetryClass: 'processing-error-retry'
                }

            }
            function takeToModel() {
                //var videoId = currentUserId;
                //createCookie(videoId)
                console.log('takeToModel:' +videoId)
                
            }

            function renderGlassesFlow(upc) {
                if (renderedGlasses !== upc && currentVideoId) {
                    $("#video-id").text(currentVideoId);
                    VtoApp.renderGlasses('vto_modal_app_root',
                          currentVideoId,
                          glassesUpc,
                          {width:$(window).width(), height:$(window).width()},
                          renderSucceeded,
                          obj.genericErrorHandler,
                          generateOptions());
                    renderedGlasses = upc;
                    console.log('renderGlassesFlow')
                }
            }

            function generateOptions() {
                console.log('generateOptions');
            }


            function createCookie(videoId) {
                currentVideoId = videoId;
                //$("#vto_toggle_button").show();
                //$("#mainImageContainer").hide();
                VtoApp.renderGlasses('vto_modal_app_root',
                                  currentVideoId,
                                  glassesUpc,
                                  {width:$(window).width(), height:$(window).width()},
                                  renderSucceeded,
                                  obj.genericErrorHandler,
                                  generateOptions
                                  );
                console.log('createCookie')
            }

            function onPrivacyPolicy() {
                console.log('onPrivacyPolicy')
            }

            function startCaptureFlow() {
               // $(vtoRoot).hide();
                console.log("glassesUpc:"+glassesUpc+" vtoRoot: "+vtoRoot+" currentUserId: "+currentUserId)
                $(".vto-try-them-on").hide();
                
                VtoApp.startCapture(
                    'vto_app_root',
                    currentUserId,
                    glassesUpc,
                    {width:$(window).width(), height:$(window).width()},
                    {
                        onCloseVto: obj.vtoClose,
                        onPrivacyPolicy: onPrivacyPolicy,
                        showWelcomePage: false,
                        showScalingQuestions: true
                    },
                    createCookie,
                    createCookie,
                    obj.genericErrorHandler);
                
                $(vtoRoot).removeClass('vto-hide').show();
                $('#sgh-vto-overlay_video').show();
                $('#sgh-vto-overlay_container').hide();
                console.log('startCaptureFlow1');
            }

            function loadVtoApp(data) {
                console.log('loadVtoApp '+currentUserId);
                var $overlayOpen = $('a.sgh-vto-overlay-open')
                VtoApp.init(
                    currentUserId,
                    glassesUpc,
                    'sunglasshut', 
                    'en-US', 
                    'master',
                     analyticsConfig,
                    function (userId) {
                    
                        $("#user-id").text("#user-id "+userId);
                        currentUserId = userId;
                        
                        if (currentVideoId) {
                            $overlayOpen.find('span').text('VIEW YOUR VIRTUAL MODEL')
                            $overlayOpen.removeClass('vto-hide').addClass('vto-show')
                        }else{
                            $overlayOpen.find('span').text('TRY THEM ON')
                            $overlayOpen.removeClass('vto-hide').addClass('vto-show')
                        }

                        $overlayOpen.on( "click", function() {
                            $('#pageContainer').addClass('vto-disable-scrolling').unbind("touchmove")
                            if (currentVideoId) {
                                $(".vto-try-them-on").hide();
                                $("#vto_toggle_button").show();
                                $('#my_vto_div').show();
                                $('#sgh-vto-overlay_video').show();
                                $('#sgh-vto-overlay_container').hide();
                                obj.settings.currentVideo = currentVideoId
                                $( "#sgh_vto_overlay" ).addClass('active').show();
                                renderGlassesFlow(glassesUpc);
                            }else{
                                $( "#sgh_vto_overlay" ).addClass('active').show()
                                    startCaptureFlow();
                            }
                            $('html').css('top',$(window).scrollTop() * -1);
                            $("html").addClass("hide-body")
                        });
                    }, 
                    obj.genericErrorHandler
                );

                $(".vto-start-button").on( "click", function() {
                    startCaptureFlow()
                    if(  $('.fullscreenable div.renderer').find('.sgh-vto-rotate').is(":visible") == true ){  
                        $('.fullscreenable div.renderer').find('.sgh-vto-rotate').hide();     
                    }
                    if(  $('#sgh-vto-video-edit-container').is(":visible") == true ){ 
                        $('#sgh-vto-video-edit-container')
                            .hide()
                            .addClass('vto-video-edit-modal-initial')
                            .removeClass('vto-video-edit-modal-delete')
                            .removeClass('vto-video-edit-modal-retake')
                    }
                    

                 });

            }
            loadVtoApp(data)
  
        	
           console.log('vtoApplication');
        },
        vtoAPI: function() {
            var obj = this
            var isSupported
            var url = 'https://s3.amazonaws.com/vto-react-staging/vto-mobile-application.js'
            window.jQuery.ajax(url, {
                type: 'get',
                dataType: 'script',
                cache: true,
                async: true,
                crossDomain: true,
                success: function(data) {
                    console.log('UPC: '+obj.settings.glassesUpc)
                    function onSupportedUPC(isSupported) {
                        if (isSupported === true){
                            obj.vtoElements(),
                            obj.vtoApplication(data)
                        }
                        console.log('onSupportedUPC:'+isSupported)
                    }
                    VtoApp.isUpcSupported(
                        obj.settings.glassesUpc,
                        onSupportedUPC,
                        obj.genericErrorHandler
                    )
                   
                    console.log('LOADED' );
                },
                complete: function(){
                    $('.ajax-loader-wrap, #ajax-container').show();
                },
                error: function() {
                  console.log( "error");
                }
            })
             console.log( "vtoAPI 2.0");
        },
        init: function() {
            return this.vtoAPI(), this;
        }
    };
    window.sghVTO = i;

}()), $(function() {
    sghVTO.init();
});
