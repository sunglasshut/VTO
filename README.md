VTO Javascript Integration API 2.0
===============================

APIs used to integrate the VTO react application into WCS for both mobile and desktop.

## Assertions:
1. Every api call has two callback functions in order to control the flow of the application.
2. Every onError callback has an error parameter. Error parameter is an object with two properties: code and message.

## APIs

### init
This method creates a user or validates that a user exists.

```
VtoApp.init(
userId,
upc,
brandId,
locale,
branch,
analyticsConfig,
onSuccess(userId, supportedFeatures), // See notes below
onError(error)
)
```

###Notes:

**userId** parameter is optional and it is undefined when VTO user is not logged in or doesn't have a userId session variable set.

**upc** parameter is the universal product code for the glasses on a particular pdp page.

**brandId** parameter is the identifier for the client brand that is using VTO.

**locale** parameter is used to set the locale for the user. (en-US)

 * locale codes: https://support.crowdin.com/api/language-codes/

**branch** is a unique identifier specifying an alternate crowdin translation to be used throughout VTO. This can be used to specify alternate translations for purposes of A/B testing or if the brand wants to manage their own translations. If this is undefined or the translation resource cannot be found, the VTO component will use the default translation for the specified locale.

**analyticsConfig** is an object of callbacks relating to vto events for purposes of analytics

**supportedFeatures** is an object with these options: * Not Implemented yet

 * rendering : Does the client support rendering (e.g. if the browser doesn't support WebGL, the value would be false)?
 * webcamCapture : Does the client support webcam capture?

 ```
supportedFeatures: {
rendering: true|false,
webcamCapture: true|false
}
```


###Errors:

* Error: VtoError Code: 1, message: Failed to fetch If for some reason Vto failed to initialize and load. In VTO express, the "Toggle VTO" button will not show
up with this error.

* Error: InvalidUserIdError Code: 2, message: Not Found If an invalid UserId is passed to VTO then we return Code 2.


--------------


##startCapture

This API call initiates the video capture flow:

```
VtoApp.startCapture(
divId,
userId,
upc,
size: {
width: <pixels>,
height: <pixels>
},
options: {
captureMode: fileCapture | webcamCapture,
abTests,
},
onSaveToAccount(videoId),
onContinueWithoutSaving(videoId),
onError(error)
)
```

###Notes:

**divId** parameter is the html div where the startCapture flow will be rendered

**userId** parameter is optional and it is undefined when VTO user is not logged in or doesn't have a userId session variable set.

**upc** parameter is the universal product code for the glasses on a particular pdp page.

**size**

 * **width, height**: The desired dimensions of the rendered output 

**options**
 
 * **captureMode**  *Not Implemented yet*

  * **fileCapture** should be used for captureMode if a file should be uploaded or if the device can capture video but guided capture is not supported (e.g. on an iPad)
  
  * **webcamCapture** should be used for captureMode for guided capture.

  * **abTests** object option is intended to be used for A/B tests not related to text text strings (e.g. the VTOcomponent flow, visual styling, etc.) * *Not Implemented yet*

**onSaveToAccount** : The success callback invoked if the user clicks "Save to Account". This function should accept the parameter videoId.

**onContinueWithoutSaving** : The success callback invoked if the user clicks "Continue Without Saving". This function should accept the parameter videoId.

###Errors:

 * Error: UnexpectedError Code: 3 This is for errors out of our control such as AWS is down. Errors such as VTO processing errors are handled within our VTO component.


 --------------