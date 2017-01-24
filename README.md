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

**userId** parameter is optional and it is undefined when VTO user is not logged in or doesn't have a userId session
variable set.
**upc** parameter is the universal product code for the glasses on a particular pdp page.
**brandId** parameter is the identifier for the client brand that is using VTO.
**locale** parameter is used to set the locale for the user. (en-US)
 * locale codes: https://support.crowdin.com/api/language-codes/
**branch** is a unique identifier specifying an alternate crowdin translation to be used throughout VTO. This can be used
to specify alternate translations for purposes of A/B testing or if the brand wants to manage their own translations. If
this is undefined or the translation resource cannot be found, the VTO component will use the default translation for
the specified locale.
**analyticsConfig** is an object of callbacks relating to vto events for purposes of analytics
**supportedFeatures** is an object with these options: * Not Implemented yet
 * rendering : Does the client support rendering (e.g. if the browser doesn't support WebGL, the value would
be false)?

 * webcamCapture : Does the client support webcam capture?

 ```
supportedFeatures: {
rendering: true|false,
webcamCapture: true|false
}
```