var analyticsConfig = {
    instructions: {
        onPageLoad: function () {
            showAnalyticsAlert('instructions', 'onPageLoad');
        },
        takeVideoElementClass: 'vto-take-video'
    },
    uploadingVideo: {
        onPageLoad: function () {
            showAnalyticsAlert('uploadingVideo', 'onPageLoad');
        }
    },
    genderSelect: {
        onPageLoad: function () {
            showAnalyticsAlert('genderSelect', 'onPageLoad');
        },
        genderMensElementClass: 'vto-mens',
        genderWomensElementClass: 'vto-womens',
        genderNextElementContentBox: 'vto-gender-next'
    },
    sizeSelect: {
        onPageLoad: function () {
            showAnalyticsAlert('sizeSelect', 'onPageLoad');
        },
        sizeSmallElementClass: 'vto-small',
        sizeAverageElementClass: 'vto-average',
        sizeLargeElementClass: 'vto-large',
        sizeNextElementContentBox: 'vto-size-next'
    },
    analyzingVideo: {
        onPageLoad: function () {
            showAnalyticsAlert('analyzingVideo', 'onPageLoad');
        }
    },
    reviewWithoutGlasses: {
        onPageLoad: function () {
            showAnalyticsAlert('reviewWithoutGlasses', 'onPageLoad');
        },
        retakeElementClass: 'without-glasses-retake',
        continueElementClass: 'without-glasses-continue',
        onFaceSwipe: function () {
            showAnalyticsAlert('reviewWithoutGlasses', 'onFaceSwipe');
        }
    },
    mappingGlasses: {
        onPageLoad: function () {
            showAnalyticsAlert('mappingGlasses', 'onPageLoad');
        }
    },
    reviewWithGlasses: {
        onPageLoad: function () {
            showAnalyticsAlert('reviewWithGlasses', 'onPageLoad');
        },
        retakeElementClass: 'with-glasses-retake',
        continueElementClass: 'with-glasses-continue',
        onFaceSwipe: function () {
            showAnalyticsAlert('reviewWithGlasses', 'onFaceSwipe');
        }
    },
    uploadFailed: {
        onPageLoad: function () {
            showAnalyticsAlert('uploadFailed', 'onPageLoad');
        },
        uploadRetryClass: 'upload-failed-retry'
    },
    videoTooLong: {
        onPageLoad: function () {
            showAnalyticsAlert('videoTooLong', 'onPageLoad');
        },
        uploadRetryClass: 'video-too-long-retry'
    },
    processingError: {
        onPageLoad: function () {
            showAnalyticsAlert('processingError', 'onPageLoad');
        },
        uploadRetryClass: 'processing-error-retry'
    }
} 