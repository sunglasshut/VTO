(function() {
    "use strict";
    var e = {
    	/* Your Global Var
    	   To call - this.settings.yourVariableHere
    	*/

        /*  "viewBy"   - for VTO CTA below feature image next to zoom icon: 
            "leftSide" - for VTO cta on left side: 
            "belowImg" - for VTO cat directly under the main image
        */
        ctaTest: "viewBy", 

        currentVideo: "",
        currentUserId: "",
        userGender: "",
        userSize: "",
        noVTOModel: true,
        glassesUpc: $('.product-upc').find('.upc').text()
    };
    var i = {
        settings: e,
        vtoElements: function() {
            var obj = this;

            if (obj.settings.ctaTest === 'viewBy'){
            
                $('<a class="icon pdp-vto sgh-vto-overlay-open button__vto button__vto--below vto-hide" data-cta="viewBy" ><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><defs><path id="a" d="M1.1 9.1c0-.1 0-.1 0 0 .4.8.7 1.7.9 1.9V9.8h.4v.1l.2.8c.1.3.2.6.4.8.2.2.6.3.9.3h1.3c.2 0 .5-.1.7-.2.3-.1.5-.3.6-.6.1-.1.1-.3.1-.4.1-.4.2-.7.2-.9h1c0 .2.1.5.2.9 0 .1.1.3.1.4.1.3.3.5.6.6.2.1.5.2.7.2h1.3c.3 0 .6-.1.9-.3.2-.2.4-.5.5-.7l.2-.8v-.1h.3l.1.8c.3-.5.5-1.1.7-1.7.1 0 .1.1.2.1.3.1.4.3.4.5v.2c0 .6-.1 1.1-.4 1.6-.1.2-.2.4-.4.6-.1.1-.2.2-.4.3l-.2.1-.1.2c-.3 1.4-.9 2.6-1.9 3.7-.9.9-2 1.4-3.3 1.4s-2.3-.4-3.2-1.3c-.9-1.1-1.6-2.3-1.9-3.7l-.1-.2-.1-.1c-.2-.1-.3-.2-.4-.3-.2-.3-.4-.7-.5-1-.1-.4-.2-.8-.2-1.2v-.2c0-.3 0-.5.2-.6zm2.7-4.2s.9-1.6 2.3-.5 3 3.1 6.4 3.1l.2 1.7h-.3s0-.5-.9-.6H8.8c-.4 0-.7.2-.8.5H6.8c-.1-.3-.4-.5-.7-.5H3.3c-.9.1-.9.6-.9.6h-.3c.1-1.8.5-4.3 1.7-4.3zM.9 12.7c.2.2.3.3.6.4.3 1.4 1 2.8 2 3.9s2.4 1.7 3.9 1.7 2.9-.6 3.9-1.7 1.7-2.4 2-3.9c.2-.1.4-.3.6-.4.3-.4.6-.8.7-1.3.2-.5.2-1 .2-1.5v-.3c0-.4-.2-.8-.4-1.1-.2-.2-.3-.3-.6-.4 0-.2.1-.4.1-.6.4-2.1-.1-5.9-4.4-7.2C7.2-.5 4.7.2 3.1 2c0 0-3 .9-2.2 6.2-.2 0-.3.1-.4.3-.3.3-.5.7-.5 1v.3c0 .7.2 1.3.4 2 .2.3.3.6.5.9z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-126-581h375v1740h-375z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" d="M-5-5h24.8v28.7H-5z"/></g></svg> <span></span</a>').appendTo('#pdp-display .viewBy')
            
            } else if (obj.settings.ctaTest === 'belowImg'){
            
                $(
                    $('<a/>')
                        .addClass(' sgh-vto-overlay-open button__vto button__vto--grey-button vto-hide')
                        .attr('data-cta', 'belowImg')
                        .prepend('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><defs><path id="a" d="M1.1 9.1c0-.1 0-.1 0 0 .4.8.7 1.7.9 1.9V9.8h.4v.1l.2.8c.1.3.2.6.4.8.2.2.6.3.9.3h1.3c.2 0 .5-.1.7-.2.3-.1.5-.3.6-.6.1-.1.1-.3.1-.4.1-.4.2-.7.2-.9h1c0 .2.1.5.2.9 0 .1.1.3.1.4.1.3.3.5.6.6.2.1.5.2.7.2h1.3c.3 0 .6-.1.9-.3.2-.2.4-.5.5-.7l.2-.8v-.1h.3l.1.8c.3-.5.5-1.1.7-1.7.1 0 .1.1.2.1.3.1.4.3.4.5v.2c0 .6-.1 1.1-.4 1.6-.1.2-.2.4-.4.6-.1.1-.2.2-.4.3l-.2.1-.1.2c-.3 1.4-.9 2.6-1.9 3.7-.9.9-2 1.4-3.3 1.4s-2.3-.4-3.2-1.3c-.9-1.1-1.6-2.3-1.9-3.7l-.1-.2-.1-.1c-.2-.1-.3-.2-.4-.3-.2-.3-.4-.7-.5-1-.1-.4-.2-.8-.2-1.2v-.2c0-.3 0-.5.2-.6zm2.7-4.2s.9-1.6 2.3-.5 3 3.1 6.4 3.1l.2 1.7h-.3s0-.5-.9-.6H8.8c-.4 0-.7.2-.8.5H6.8c-.1-.3-.4-.5-.7-.5H3.3c-.9.1-.9.6-.9.6h-.3c.1-1.8.5-4.3 1.7-4.3zM.9 12.7c.2.2.3.3.6.4.3 1.4 1 2.8 2 3.9s2.4 1.7 3.9 1.7 2.9-.6 3.9-1.7 1.7-2.4 2-3.9c.2-.1.4-.3.6-.4.3-.4.6-.8.7-1.3.2-.5.2-1 .2-1.5v-.3c0-.4-.2-.8-.4-1.1-.2-.2-.3-.3-.6-.4 0-.2.1-.4.1-.6.4-2.1-.1-5.9-4.4-7.2C7.2-.5 4.7.2 3.1 2c0 0-3 .9-2.2 6.2-.2 0-.3.1-.4.3-.3.3-.5.7-.5 1v.3c0 .7.2 1.3.4 2 .2.3.3.6.5.9z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-126-581h375v1740h-375z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" d="M-5-5h24.8v28.7H-5z"/></g></svg>')
                        .append('<span class="button__vto__text--grey-button"></span>')
                    ).prependTo('.viewBy')      
                    $('#pdp').addClass('vto__belowImg')      
            
            } else {
             
                $(
                    $('<a/>')
                        .addClass('black-button sgh-vto-overlay-open button__vto button__vto--left-side vto-hide')
                        .attr('data-cta', 'leftSide')
                        .prepend('<i class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><defs><path id="a" d="M1.1 9.1c0-.1 0-.1 0 0 .4.8.7 1.7.9 1.9V9.8h.4v.1l.2.8c.1.3.2.6.4.8.2.2.6.3.9.3h1.3c.2 0 .5-.1.7-.2.3-.1.5-.3.6-.6.1-.1.1-.3.1-.4.1-.4.2-.7.2-.9h1c0 .2.1.5.2.9 0 .1.1.3.1.4.1.3.3.5.6.6.2.1.5.2.7.2h1.3c.3 0 .6-.1.9-.3.2-.2.4-.5.5-.7l.2-.8v-.1h.3l.1.8c.3-.5.5-1.1.7-1.7.1 0 .1.1.2.1.3.1.4.3.4.5v.2c0 .6-.1 1.1-.4 1.6-.1.2-.2.4-.4.6-.1.1-.2.2-.4.3l-.2.1-.1.2c-.3 1.4-.9 2.6-1.9 3.7-.9.9-2 1.4-3.3 1.4s-2.3-.4-3.2-1.3c-.9-1.1-1.6-2.3-1.9-3.7l-.1-.2-.1-.1c-.2-.1-.3-.2-.4-.3-.2-.3-.4-.7-.5-1-.1-.4-.2-.8-.2-1.2v-.2c0-.3 0-.5.2-.6zm2.7-4.2s.9-1.6 2.3-.5 3 3.1 6.4 3.1l.2 1.7h-.3s0-.5-.9-.6H8.8c-.4 0-.7.2-.8.5H6.8c-.1-.3-.4-.5-.7-.5H3.3c-.9.1-.9.6-.9.6h-.3c.1-1.8.5-4.3 1.7-4.3zM.9 12.7c.2.2.3.3.6.4.3 1.4 1 2.8 2 3.9s2.4 1.7 3.9 1.7 2.9-.6 3.9-1.7 1.7-2.4 2-3.9c.2-.1.4-.3.6-.4.3-.4.6-.8.7-1.3.2-.5.2-1 .2-1.5v-.3c0-.4-.2-.8-.4-1.1-.2-.2-.3-.3-.6-.4 0-.2.1-.4.1-.6.4-2.1-.1-5.9-4.4-7.2C7.2-.5 4.7.2 3.1 2c0 0-3 .9-2.2 6.2-.2 0-.3.1-.4.3-.3.3-.5.7-.5 1v.3c0 .7.2 1.3.4 2 .2.3.3.6.5.9z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><g clip-path="url(#b)"><defs><path id="c" d="M-126-581h375v1740h-375z"/></defs><clipPath id="d"><use xlink:href="#c" overflow="visible"/></clipPath><path clip-path="url(#d)" d="M-5-5h24.8v28.7H-5z"/></g></svg></i>')
                        .append('<span class="button__vto__text"></span>')
                    ).appendTo('.cart-button')
            }
            $(
                $('<div/>')
                    .attr('id', 'sgh-vto-overlay_model')
                    .addClass('vto-hide')
                    .append('<span id="user-id">c4a6953b-986c-4549-a927-a7c5d4ea1054</span>')
                    .append(
                        $('<div/>')
                        .attr('id', 'sgh-vto-vtomodel-container')
                        //.addClass('vto-hide')
                        .append('<div id="vto_modal_app_root" ></div>')
                        .prepend(
                            $('<div/>')
                            .attr('id', 'sgh-vto-overlay-video-buttons')
                           // .append('<i class="model-close sgh-vto-model-close">CLOSE <span>&#10006;</span></i>')
                            .append('<a id="vto-open-edit" class="vto-hide" >Options</a> ')
                        )
                    )
                    .append('<div class="vto-hide" id="render-success"><span id="video-id">video-id</span> <span id="render-success-time">&quot;video-id</span> <span id="render-success-time"><!--render--></span> <span id="video-id">video-id</span></div>')

                ).appendTo('#pdp-display >#product')

                 $(
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
                                .append('<a class="vto-retake-button button black-button bordered" >RETAKE MY VIDEO</a>')
                                .append('<a class="vto-delete-button button black-button bordered">REMOVE MY VIRTUAL MODEL</a>')
                            )
                            .append(
                                $('<div/>')
                                .addClass('vto-edit-page vto-edit-retake')
                                .append('<p>RETAKING YOUR VIDEO WILL REMOVE YOUR CURRENT ONE </p>')
                                .append('<a class="button black-button vto-option-cancel" >CANCEL</a>')
                                .append('<a class="vto-retake-confirm button black-button bordered">RETAKE</a>')
                            )
                            .append(
                                $('<div/>')
                                .addClass('vto-edit-page vto-edit-delete')
                                .append('<p>ARE YOU SURE YOU WANT TO REMOVE YOUR VIRTUAL MODEL? </p>')
                                .append('<a class="vto-option-cancel button button black-button" >CANCEL</a>')
                                .append('<a class="vto-delete-confirm button black-button bordered">REMOVE</a>')
                            )
                        )
                        .append('<div class="sgh-vto-video-edit-background vto-option-cancel"></div>')
                    ).appendTo('#page')

                $(
                    $('<div/>')
                        .attr('id', 'sgh_vto_overlay')
                        .addClass('vto-hide')
                        .append(
                            $('<div/>')
                            .attr('id', 'sgh-vto-overlay_video')
                            .append('<span id="user-id">c4a6953b-986c-4549-a927-a7c5d4ea1054</span>')
                            .append('<i class="modal-close sgh-vto-overlay-close">&#10006; Close</i>')
                            .append('<h3 class="vto-create-header">CREATE YOUR VIRTUAL MODEL</h3>')
                            .append(
                                $('<div/>')
                                .attr('id', 'sgh-vto-video-container')
                                .append('<div id="vto_app_root" class="vto-hide">vto_app_root</div>')
                            )
                        )
                        .append('<div class="vto-overlay-background"></div>')
                ).appendTo('#pdp')

            $('.sgh-vto-overlay-close').on( "click", function() {
                obj.vtoClose()
            });

            $('.sgh-vto-model-close').on( "click", function() {
                obj.closeVTOModelWindow()
            });
           
           // console.log('vtoElements()');
        },
        analyticsTrack: function(linkName) {
            var obj = this
            var videoId = obj.settings.currentVideo
            var noVTOModel = obj.settings.noVTOModel;
            var gender = obj.settings.userGender;
            var fit = obj.settings.userSize;
            var user = 'new'
           //console.log('gender: '+gender+ " fit "+fit)
            if(videoId && noVTOModel !== true){
                user = 'returning'
                //console.log('returning')
            } 
            if (gender !== '' && gender !== 'undefined'){
                    gender = gender+': '
                }else{
                    gender = ''
                }
            if (fit !== '' && fit !== 'undefined'){
                fit = fit+': '
            }else{
                fit = ''
            }
            var products = [{
                'upc': obj.settings.glassesUpc
            }];
            var track = {
                'link_name': 'sgh: vto: '+user+': ' + gender + fit + linkName,
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
          // console.log('track: sgh: vto: '+user+': ' + gender + fit + linkName);
        },
        vtoClose: function() {
            var obj = this
            $('#page-wrapper').removeClass('vto-disable-scrolling').bind("touchmove")
            $( "#sgh_vto_overlay" ).removeClass('active').hide()
            $('body').removeClass('vto-disable-scrolling')
           
            obj.analyticsTrack('closed vto');            
           // console.log('onCloseVto');
        },
        closeVTOModelWindow: function () {
            var obj = this
            $('#pdp-container').removeClass('show-vto');
            $('body').removeClass('show-vto')
            $( '#sgh-vto-overlay_model' ).addClass('vto-hide').removeClass('active');
            obj.analyticsTrack('closed vto model');
            //console.log("closeVTOModelWindow")
        },
        genericErrorHandler:  function(error) {
            
            $('#vto_app_root').hide();
            $('#sgh-vto-overlay_video').hide();
            $("#vto_start_button").addClass('hide')
            var track = {
                'link_name': 'sgh: vto: generic error: '+error,
                'site_events': {
                    'see_their_shades': true
                },
                "authenticated_status": utag_data.authenticated_status || "",
                'language': utag_data.language || "",
                'cntry': utag_data.country || ""
            };
            _trackAnalytics(track);
          console.log('track: sgh: vto: generic error'+error);
        },
        getVtoSize: function(divide) {
            var size = $(window).width() / divide, // size is the window width by default
                height = $(window).height() / divide;
            // landscape
            if (size > height) {
                size = height;
            }
            return {
                width: size,
                height: size
            };
        },
        vtoApplication: function(data) {
            var obj = this
            var glassesUpc = obj.settings.glassesUpc
            var vtoRoot = "#vto_app_root"
            var currentUserId = obj.settings.currentUserId;
            var currentVideoId = obj.settings.currentVideo;
            var videoRetake = false;
            var noVTOModel = obj.settings.noVTOModel;
            //var currentUserId = "8A9C9D28-5C67-49FD-91D8-CDDFE7AF56AA";
            //var currentVideoId = "4CC97D29-9A26-4B26-A4B1-53EF42D5BDD3";
            //var currentUserId = "77560126-d27d-4ff6-afb3-bd1cbb90d887";
            //var currentVideoId = "05049d1a-f37a-417c-95d8-374cf68b9fa9";
            var renderedGlasses = "";
            var pageType = utag.data.page_type
            var rendererSuccess = false

            
            
            function getProductInfo(){
                if($('.fullscreenable .info-container').length < 1){
                    $('.fullscreenable div.renderer:not(.preview-page)').after('<div class="info-container vto-hide"></div>')
                }
                var brand = $('#update_cart_total .info-container').find('.brand').text()
                var price = $('#update_cart_total .info-container').find('.price').text()
                var style = $('#update_cart_total .info-container').find('.style').first().text()
                var fit   = $('.styleInfo ').find('li:eq(5)').html()
                var swatch = $('.swatchesTitle').find('h3').html()
                var polar = $('#update_cart_total .info-container > .catalog-polarized').length
                var polarIcon = (polar) ? '<p class="catalog-polarized">Polarized</p>':'';
               // console.log('polor: '+polarIcon);

                $('#sgh_vto_overlay .info-container').html(
                    '<p class="brand">'+brand+'</p>'+
                    polarIcon +
                    '<p class="price">'+price+'</p>'+
                    '<p class="style">'+style+'</p>'+
                    '<p class="swatch">'+swatch+'</p>'+
                    '<p class="fit">'+fit+'</p>'
                )
            }

            function deleteSucceeded() {
                
                if ($.cookie('vtoId')){
                    $.cookie("vtoId", 'deleted', {expires: 1, path: '/', domain: 'sunglasshut.com'});
                }
                currentVideoId = "";
                obj.settings.currentVideo = ""
                obj.analyticsTrack('option modal: delete modal: confirmed')
                var vtoUrl = 'http://' + window.location.host + window.location.pathname
                location.href = vtoUrl;
                obj.closeVTOModelWindow();
                $('#sgh-vto-video-container').addClass('active')             
                $( "#sgh-vto-vtomodel-container" ).removeClass('active')
                $('a.sgh-vto-overlay-open').find('span').text('TRY THEM ON')
               // $( '#sgh-vto-overlay_video' ).hide( );
                $('#sgh-vto-overlay_container').show();
                $('#vto-open-edit').hide();           
                $('#sgh-vto-video-edit-container')
                        .hide()
                        .addClass('vto-video-edit-modal-initial')
                        .removeClass('vto-video-edit-modal-delete')
                        .removeClass('vto-video-edit-modal-retake')
                $('#vto_modal_app_root').html('')
               // $('#vto_app_root').html('')
                videoRetake = false;        
                currentVideoId = "";
                obj.settings.currentVideo = ""
               
                noVTOModel = true;
                //console.log('deleteSucceeded() '+currentVideoId)
            }
            function captureCookie(videoRetake){
               //console.log("captureCookie: "+videoRetake)
                var cookieValue = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "retake": "'+videoRetake+'", "upc": "'+glassesUpc+'"}' );
                $.cookie("vtoCapture", JSON.stringify(cookieValue), {path: '/', domain: 'sunglasshut.com'});
   
            }
            function checkForCaptureCookie(){
               
                if ($.cookie('vtoCapture')){ 
                    var vtoCaptureCookie = JSON.parse($.cookie('vtoCapture'));
                    obj.settings.currentUserId = vtoCaptureCookie.userId
                    
                    if (vtoCaptureCookie.retake === 'true' ){
                        videoRetake = true
                    }
                    return vtoCaptureCookie.userId;
                }else{
                    return undefined;
                }

            }

            function renderSucceeded() {
               // obj.settings.userGender = gender.gender;
                //obj.settings.userSize = gender.fit;
                var id = jQuery.parseJSON( '{ "userId": "'+currentUserId+'", "videoId": "'+currentVideoId+'", "cat": "'+ obj.settings.userGender+'", "style": "'+obj.settings.userSize+'" }' );
               $.cookie("vtoId", JSON.stringify(id), {expires: 300, path: '/', domain: 'sunglasshut.com'});
                obj.settings.currentVideo = currentVideoId
                obj.settings.currentUserId = currentUserId
                var cookie = $.cookie("vtoId")
                $('#sgh-vto-overlay-video-buttons.vto-hide').removeClass('vto-hide')
                $('#sgh-vto-video-container').removeClass('active')             
                $('#vto-open-edit').delay( 300 ).fadeIn( 300 );
                if(rendererSuccess != true){
                    getProductInfo()
                   
                    $('#vto-open-edit').on( "click", function() {
                       $('#sgh-vto-video-edit-container').fadeIn( 300 );
                       obj.analyticsTrack('option modal:')//
                    });

                    $('.p3dzoom-icon-link, .viewBy .fit, .viewBy .pdp-zoom').on( "click", function() {
                        if($('#pdp-container.show-vto').length > 0) {
                         obj.closeVTOModelWindow();
                        }
                    });

                    /*$('.redesignPdp-fit-active').on( "click", function() {
                        $(".pdpZoom.lazy-container").css("opacity", 0)
                    });*/

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
                        var vtoUrl;
                        obj.analyticsTrack('option modal: retake modal: confirmed' )
                        videoRetake = true;  
                        captureCookie(videoRetake)
                        vtoUrl = 'https://' + window.location.host + window.location.pathname
                        location.href = vtoUrl;                            
                     });
                    $('.vto-delete-cancel').on( "click", function() {
                        $('#sgh-vto-video-edit-container')
                        .addClass('vto-video-edit-modal-initial')
                        .removeClass('vto-video-edit-modal-delete')
                        .removeClass('vto-video-edit-modal-retake')
                        obj.analyticsTrack('option modal: delete modal: cancel')
                     });
                    $('.vto-delete-confirm').on( "click", function() {
                        /*VtoApp.deleteUser(
                            obj.settings.currentUserId,
                            deleteSucceeded(),
                            obj.genericErrorHandler
                        )*/
                        deleteSucceeded()
                       
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
                    
                    $('a.sgh-vto-overlay-open').find('span').text('VIRTUAL MODEL')
                    rendererSuccess = true
                   // console.log('analyticsTrack - vto pdp '+rendererSuccess)
                }
                $('#sgh_vto_overlay .info-container').delay( 200 ).fadeIn( 300 );
                $('#sgh-vto-overlay_container').hide();
                obj.analyticsTrack('vto pdp:' )
                videoRetake = false;
                noVTOModel = false;
               //console.log('cookie: '+cookie) 
              // console.log('render-success')
            }

            var analyticsConfig = {
                demo: {
                    onPageLoad: function() {obj.analyticsTrack('step 1: instructions')},
                    onFaceSwipe: function() {},
                    onCreateModel: function() {},
                    //createModelClass: ''
                },
                capture: {
                    onPageLoad: function() {obj.analyticsTrack('step 2: capture')},
                    onValidHeadtrack: function() {obj.analyticsTrack('step 2: capture: valid head track')},
                    onWebcamAllowed: function() {}
                },
                browsererror: {
                    onPageLoad: function() {obj.analyticsTrack('error: browser ')}
                },
                deviceerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: device')}
                },
                permissionerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: permission')}
                },
                processingerror: {
                    onPageLoad: function() {obj.analyticsTrack('error: processing')},
                    onRetry: function() {},
                    //processingErrorRetryClass: ''
                },
                uploaderror: {
                    onPageLoad: function() {obj.analyticsTrack('error: upload')},
                    onRetry: function() {},
                    //uploadErrorRetryClass: ''
                },
                upload: {
                    onPageLoad: function() {obj.analyticsTrack('step 3: select size and gender:')}
                },
                processing: {
                    onPageLoad: function() {obj.analyticsTrack('step 4: uploaded video: processing')}
                },
                preview: {
                    onPageLoad: function() {obj.analyticsTrack('step 4: preview')},
                    onFaceSwipe: function() {obj.analyticsTrack('step 4: preview: face swipe')},
                    //previewRetakeClass: '',
                    onRetake: function() {obj.analyticsTrack('step 4: preview: retake')},
                   // previewSaveClass: '',
                    onSave: function() {obj.analyticsTrack('step 4: preview: save')},
                   // previewContinueClass: '',
                    onContinue: function() {obj.analyticsTrack('step 4: preview: on continue')}
                },
                render: {
                    onPageLoad: function() {},
                    onFaceSwipe: function() {obj.analyticsTrack('vto pdp: face swipe')},
                    onRenderGlasses: function() {}
                },
                comingsoon: {
                    onPageLoad: function() {obj.analyticsTrack('coming soon')}
                },
                rendererror: {
                    onPageLoad: function() {obj.analyticsTrack('error: render')}
                }
            }

            
            function renderGlassesFlow(upc) {
               // console.log('renderedGlasses" '+renderedGlasses+ " upc: "+upc+" currentVideoId: "+currentVideoId)
               // console.log('self.supportedFeatures.rendering'+this.supportedFeatures.rendering)
                if (renderedGlasses !== upc && currentVideoId || videoRetake === true ) {
                    $('#pdp-container').addClass('show-vto')  
                    $('body').addClass('show-vto')   
                    $( "#sgh-vto-vtomodel-container" ).addClass('active').removeClass('vto-hide')
                    $("#video-id").text(currentVideoId);
                    VtoApp.renderGlasses('vto_modal_app_root',
                          currentVideoId,
                          glassesUpc,
                          {width: 480, height: 480},
                          renderSucceeded,
                          obj.genericErrorHandler,
                          {showRotateBar: true}
                        );
                    renderedGlasses = upc;
                    videoRetake = false; 
                    //console.log('renderGlassesFlow')
                }else{
                    $( "#sgh-vto-vtomodel-container" ).addClass('active').removeClass('vto-hide')
                    $('#pdp-container').addClass('show-vto')
                    $('body').addClass('show-vto')
                    $('#vto-open-edit').fadeIn( 200 );
                    obj.analyticsTrack('vto pdp: reopened' )
                }
                $('#sgh-vto-video-container').removeClass('active')      
            }


            function createCookie(videoId, gender) {
                currentVideoId = videoId;
                obj.settings.userGender = gender.gender;
                obj.settings.userSize = gender.fit;
                // console.log('createCookie: '+gender.fit)
                $('#pdp-container').addClass('show-vto')  
                $('body').addClass('show-vto')
                $('#sgh_vto_overlay').removeClass('active').addClass('vto-hide').hide();
                $( "#sgh-vto-overlay_model" ).addClass('active').removeClass('vto-hide')
                VtoApp.renderGlasses('vto_modal_app_root',
                      currentVideoId,
                      glassesUpc,
                      {width: 480, height: 480},
                      renderSucceeded,
                      obj.genericErrorHandler,
                      {showRotateBar: true}
                    );
               // console.log('createCookie')
            }

            function onPrivacyPolicy() {
               // console.log('onPrivacyPolicy')
            }

            function startCaptureFlow() {
                $('#sgh_vto_overlay').addClass('active').removeClass('vto-hide').show();
                $('body').addClass('show-vto')
               // console.log("glassesUpc:"+glassesUpc+" vtoRoot: "+vtoRoot+" currentUserId: "+currentUserId)
                $(".vto-try-them-on").hide();
                
                VtoApp.startCapture(
                    'vto_app_root',
                    currentUserId,
                    glassesUpc,
                    {width: 480, height: 480},
                    {
                        onCloseVto: obj.vtoClose,
                        showWelcomePage: false,
                        showScalingQuestions: true,
                        showReviewWithGlasses: false,
                        showSaveToAccount: false
                    },
                    createCookie,
                    createCookie,
                    obj.genericErrorHandler);
                
                $(vtoRoot).removeClass('vto-hide').show();
                $('#sgh-vto-overlay_video').show();
                $('#sgh-vto-overlay_container').hide();
                //console.log('startCaptureFlow1');
            }

            function getUrlParameter(sParam) {
                var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : sParameterName[1];
                    }
                }

                return undefined;
            };
            function vtoActive() {
                $(".pdpZoom.lazy-container").css("opacity", "")
                $("#product").removeClass("showingRotator")
                $(".p3dzoom-icon-link").removeClass("redesignPdp-rotate-active active").addClass("redesignPdp-rotate-inactive")
                $("#pdpImage img").remove()
                $(".iviewer_toggle").children().remove()
                $("#zoomViewer").hide().removeClass("open")
                $(".close", "#right-nav").show();
                $(".fit", ".viewBy").removeClass("redesignPdp-fit-active active").addClass("redesignPdp-fit-inactive"), 
                $("#fit-overlay").hide();
                $("#p3dzoom-image").unreel(), $(".p3dzoom-rotate-btn").unbind();
            }

            function loadVtoApp(data) {
                //console.log('loadVtoApp '+currentUserId);
                var $overlayOpen = $('a.sgh-vto-overlay-open')
                VtoApp.init(
                    currentUserId,
                    glassesUpc,
                    'sunglasshut', 
                    'en-US', 
                    'master',
                     analyticsConfig,
                    function (userId, supportedFeatures) {
                       //console.log('VtoApp.init: ' + checkForCaptureCookie())
                        //console.log('currentVideoId: '+checkForCaptureCookie())
                        $("#user-id").text("#user-id "+userId);
                        currentUserId = userId;
                        if (supportedFeatures.webcamCapture !== false && supportedFeatures.rendering !== false){
                            if (currentVideoId) {
                                $overlayOpen.find('span').text('VIRTUAL MODEL')
                                $overlayOpen.removeClass('vto-hide').addClass('vto-show')
                            }else{
                                $overlayOpen.find('span').text('TRY THEM ON')
                                $overlayOpen.removeClass('vto-hide').addClass('vto-show')
                            }
                            // Chech to see if vtoCapture has a vtoID & doesn't have video ID or user wants to retake
                            if (!currentVideoId && checkForCaptureCookie() !== undefined || videoRetake === true) {
                                startCaptureFlow(obj.settings.currentUserId);
                                // PDP Try Them On button
                                $overlayOpen.on( "click", function() {
                                    //If no video id open onboarding overlay
                                    var ctaAttr = $(this).attr('data-cta')
                                    vtoActive()
                                    if (currentVideoId && $('.show-vto').length < 1) {
                                        $( "#sgh-vto-overlay_model" ).addClass('active').removeClass('vto-hide')
                                        renderGlassesFlow(glassesUpc);
                                        obj.settings.currentVideo = currentVideoId
                                        noVTOModel = true;
                                        //console.log('Yes Video - Open Overlay')
                                       // noVTOModel = true;
                                    } else if ($('.show-vto').length > 0){
                                        obj.closeVTOModelWindow();
                                    }else{
                                        $('#sgh_vto_overlay').addClass('active').removeClass('vto-hide').show();
                                      //  console.log('No Video - Open Overlay')
                                    }
                                  //  console.log('click to open')
                                  if ($('body.show-vto').length > 0){
                                    obj.analyticsTrack('clicked try on: '+ctaAttr )
                                    }
                                })
                                // Remove vtoCapture Cookie is exists
                                if($.cookie("vtoCapture")){
                                    $.cookie("vtoCapture", null, {path: '/', domain: 'sunglasshut.com'});
                                }
                               // console.log("vtoId: "+ checkForCaptureCookie())
                            } else {
                                $overlayOpen.on( "click", function() {
                                    var ctaAttr = $(this).attr('data-cta')
                                    vtoActive()
                                    var vtoUrl
                                    if (!currentVideoId) {
                                        // Check to protocal doesn't equal HTTPs already
                                        if(location.protocol !== 'https:'){
                                            obj.analyticsTrack('clicked try on: '+ctaAttr )
                                            vtoUrl = 'https://' + window.location.host + window.location.pathname
                                            captureCookie(videoRetake)
                                            location.href = vtoUrl;
                                        }else{
                                            startCaptureFlow(currentUserId);
                                          //  console.log("HTTPS URLS: "+currentUserId)     
                                        }
                                    }else if ($('.show-vto').length > 0){
                                        obj.closeVTOModelWindow();
                                    } else{
                                        $( "#sgh-vto-overlay_model" ).addClass('active').removeClass('vto-hide')
                                        renderGlassesFlow(glassesUpc);
                                        obj.settings.currentVideo = currentVideoId
                                        noVTOModel = true;
                                      //  console.log("currentVideo: "+currentVideoId) 
                                    }
                                     if ($('body.show-vto').length > 0){
                                    obj.analyticsTrack('clicked try on: '+ctaAttr )
                                    }
                                });
                            }
                        }else{
                            obj.analyticsTrack('no webcam support' )
                        }
                        
                    }, 
                    obj.genericErrorHandler
                );

            }
            loadVtoApp(data)
  
        	
          console.log('vtoApplication');
        },
        vtoAPI: function() {
            var obj = this
            var isSupported
            var url = 'https://d1phjbsp802ne8.cloudfront.net/vto-desktop-application.js?v=01'
            $('.ajax-loader-wrap, #ajax-container').hide();
            window.jQuery.ajax(url, {
                type: 'get',
                dataType: 'script',
                cache: true,
                async: true,
                crossDomain: true,
                success: function(data) {
                    //console.log('UPC: '+obj.settings.glassesUpc)
                    function onSupportedUPC(isSupported) {
                        if ($.cookie('vtoId') && $.cookie('vtoId') !== 'deleted'){
                            var vtoCookie = JSON.parse($.cookie('vtoId'))
                                obj.settings.currentUserId = vtoCookie.userId
                                obj.settings.currentVideo = vtoCookie.videoId
                                obj.settings.userGender = vtoCookie.cat;
                                obj.settings.userSize = vtoCookie.style;
                                if (obj.settings.currentVideo){
                                    obj.settings.noVTOModel = false
                                }
                        }
                      // console.log('onSupportedUPC:'+isSupported)
                        if (isSupported === true){
                            
                            obj.vtoElements()
                            obj.vtoApplication(data)

                            obj.analyticsTrack('supported upc:')
                        }else{
                             obj.analyticsTrack('not supported upc:')
                        }
                       //console.log('onSupportedUPC:'+isSupported)
                    }
                    VtoApp.isUpcSupported(
                        obj.settings.glassesUpc,
                        onSupportedUPC,
                        obj.genericErrorHandler
                    )
                   
                   // console.log('LOADED' );
                },
                complete: function(){
                    $('.ajax-loader-wrap, #ajax-container').show();
                },
                error: function() {
                    obj.analyticsTrack('error: loading script: ')
                  console.log( "error");
                }
            })
           // console.log( "vtoAPI 2.0");
        },
        init: function() {
            return this.vtoAPI(), this;
        }
    };
    window.sghVTO = i;

}()), $(function() {
    sghVTO.init();
   // console.log('sghVTO.init()')
});
