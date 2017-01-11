Sentient Aware UI
===============================

Sentient Aware UI is a library to offer prebuilt Angular 2 components that can be easily dropped into an existing web application.


## Embedding on the host page

### Imports

To import the code to host page just add references to the Sentient js file:

  ```
  <script type="text/javascript" src="https://static.sentientawareapi.com/{customerName}/sentient-bootstrapper.min.js"/>
  ```

### Launch Location

The Sentient Experience will be launched full screen by default. If the page it launches on contains a div called 'sentient-ui-container', it will be launched within there. This div will be auto hidden until the Sentient Experience is launched.

  ```
  <div id="sentient-ui-container"/>
  ```

### Launch Points

'Sentient.init' must be called to set up Sentient. 

The Sentient Experience can then be launched programatically with 'Sentient.show'.

For more details on the available function calls see below:

### Sentient Methods

  ```
  /**
  * Initialises Sentient, ready for launch
  * @param {Object} basicConfiguration - containing: 'baseUrl' of the sentient files, 'customerName' -- the same value appended to the import strings, 'customerUserSessionId' -- the same session id used in the current site
  * @param {Object} functionConfigurations - set of functions describing the interaction between Sentient and the host site. These functions govern product info retrieval and cart process (addToCart, goToCart, getDetails, getHeroImages, getProductOptions, getReviews)
  * @param {Object} extraConfiguration - more detailed configuration of the experience
  ** @param {boolean} noIframe - embed directly into page with no iframe
  ** @param {Array} fields - extra fields to be passed through from the product info in the feed
  ** @param {String} jQueryNamespace - if you've changed the jQuery namespace, pass the namespace in here so we can reuse it
  ** @param {boolean} disableQuantitySelector - set to true to remove the quantity selector on the pdp page
  ** @param {boolean} useDomainForCookies - set to true to create the cookies on the domain when they are written in a subdomain
  ** @param {boolean} showGoToCart - set to true to show a button in the header to take the user to the cart. goToCart must be implemented
  * @param {Function} readyCallback -- called upon completion with a boolean argument - true if succeeded
  **/
  Sentient.init(basicConfiguration, functionConfigurations, extraConfigurations, readyCallback)

  /**
   * Searches the page for elements to enable with the Sentient Experience UI. This can be called after Sentient.init if the page has loaded further elements that need to be enabled
   */
  Sentient.refresh()

  /**
   * Hide the Sentient Experience
   */
  Sentient.hide()

  /**
   * Show the Sentient Experience
   * @param {String} sentientId - id provided to Sentient identifying a visually distinct item
   * @param {String} modelUnitName - string identifying the model unit the sentientId belongs to
   */
   Sentient.show(sentientId, modelUnitName, filters)
   
  /**
   * Set the filters to apply to the suggestions
   * @param {FilterValue[]} Array of filter values
   * @param {FilterDefinition[]} Array of definitions for the filters
   *
   * FilterValue -
   ** @param {String} id - identifier for the filter (matches filter value id)
   ** @param {String | String[]} values - selected filter values -- these match the options id 
   *
   * FilterDefinition -
   ** @param {String} id - identifier for the filter (matches filter definition id)
   ** @param {String} displayName - name to display
   ** @param {Boolean} multiselect - allow multiselction of the filter,
   ** @params options: Array of options
   *** @params {String} id - id of the possible filter value
   *** @params {String} displayName - name to display
   *** @params {String[]} aliases - Array of values that the Sentient backend can recognize
   *
   **/
   Sentient.setFilters(filterValues, filterDefinitions)
  ```

### Method Integration Interface

  ```
  /**
  * Retrieve the product details for a given id. 'callback' or 'errorHandler' must be called. 
  *
  * @param {Object} product -- object containing 'id' and info returned from kss endpoint
  * @param {Function} callback -- called once data retrieved. Expects {Object} with format:
  * {price:'$5',
  * originalPrice: '$50',
  * productName: 'Great Shoes',
  * productMake: 'Adidas',
  * productDescription: '',
  * percentOff: '90% Off', // Required if price and OriginalPrice are different
  * promotionalText: 'Ships for free'  // Optional
  * }
  * @param {Function} errorHandler -- call if data unsuccessfully retrieved. Expects {String} message
  **/
  getDetails(product, callback, errorHandler) {
      //Customer makes call to api to retrieve details
      if (ERROR) {
          errorHandler('Something went wrong');
      } else {
          callback(FORMATTED_DATA);
      }
  }

  /**
   * Retrieve the product reviews for a given id. 'callback' or 'errorHandler' must be called.
   *
   * @param  {Object} product -- object containing 'id' and info returned from kss endpoint
   * @param  {Number} page           -- number of the page to fetch
   * @param  {Number} offset         -- number of reviews offset for the fetch
   * @param  {Function} callback     -- called once data retrieved. Expects {Object} with format:
   * [{
   *   comfortRating: '5',
   *   overallRating: '4',
   *   lookRating: '4',
   *   date: 'Jul 22, 2016 9:00:00 AM',
   *   location: 'Test location',
   *   name: 'Test author',
   *   summary: 'Test review'
   * }]
   * @param  {Function} errorHandler -- call if data unsuccessfully retrieved. Expects {String} message
   */
  getReviews(product, page, offset, callback, errorHandler) {
    //Customer makes call to api to retrieve reviews
    if (ERROR) {
        errorHandler('Something went wrong');
    } else {
        callback(FORMATTED_DATA);
    }
  }

  /**
  * Retrieve the hero images for a given id. 'callback' or 'errorHandler' must be called.
  *
  * @param {Object} product -- object containing 'id' and info returned from kss endpoint
  * @param {String} color -- selected color
  * @param {Function} callback -- called once data retrieved. Expects {Array} with format:
  * ['IMAGE_URL_1, IMAGE_URL_2,...]
  * It also supports thumbnails with the following format:
  * [{mainImage: 'MAIN_IMAGE_URL_1', thumbnailImage: 'THUMB_IMAGE_URL_1'},
     {mainImage: 'MAIN_IMAGE_URL_2', thumbnailImage: 'THUMB_IMAGE_URL_2'},
     ...
    ]
  * @param {Function} errorHandler -- call if data unsuccessfully retrieved. Expects {String} message
  **/
  getHeroImages(product, color, callback, errorHandler) {
      //Customer makes call to api to retrieve details
      if (ERROR) {
          errorHandler('Something went wrong');
      } else {
          callback(FORMATTED_DATA);
      }
  }

  /**
  * Retrieve the product options and availability for a given id. 'callback' or 'errorHandler' must be called.
  *
  * @param {Object} product -- object containing 'id' and info returned from kss endpoint
  * @param {Object} options -- current selected product options in (example data) format:
  * {
  *   color: 'yellow',
  *   size: '5.5'
  * }
  * @param {Function} callback -- called once data retrieved. Expects {Array} with format:
  * [
  * {
  *   id: 'size',              //This is an example option for data required to add the product to the cart
  *   displayName: 'SIZE',
  *   noTooltips: true,
  *   emptyOptionLabel: "Override to empty option label", //OPTIONAL This is only applicable for 'combo-select' configs. Specifying false removes the empty option
  *   values: ['5', '5.5', ...],   //OR [{value: '5.5', displayName: 'Small Shoe', url: 'URL_TO_IMAGE'}] -- this is intended for use with 'image-select' carousel type
  *   unavailable: ['5.5'],
  *   required: false,         //Set this to true if the product details page must have this option selected, and the empty selection option should be removed
  *   type: 'carousel-select', //Options - carousel-select and combo-select
  *   selected: false,          //Set this to true if the spid of the item implies one of the values is already selected -- e.g. the selected shoe means we know the color
  *   selectedIdOverride: 'OVERIDE_ID'  //OPTIONAL Set this if the selection made by the user means we need to display information about a shoe with a different spid -- e.g. a different color means a different shoe's information (price, etc) needs to be displayed
  * }, ...
  * ]
  * @param {Function} errorHandler -- call if data unsuccessfully retrieved. Expects {String} message
  **/
  getProductOptions(product, options, callback, errorHandler) {
      //Customer makes call to api to retrieve details
      if (ERROR) {
          errorHandler('Something went wrong');
      } else {
          callback(FORMATTED_DATA);
      }
  }

  /**
  * Add the selected product to customer cart. 'callback' or 'errorHandler' must be called.
  *
  * @param {Object} product -- object containing 'id' and info returned from kss endpoint
  * @param {Object} options -- current selected product options in (example data) format:
  * {
  *   color: 'yellow',
  *   size: '5.5'
  * }
  * @param {Number} quantity -- number to add to cart
  * @param {Function} callback -- called once successfully added to cart. Expects the upcs {String} of the added item, this MUST be called
  * @param {Function} errorHandler -- call if unsuccessfully added to cart. Expects {String} message
  **/
  addToCart(product, options, quantity, callback, errorHandler) {
      //Customer makes call to api to add to cart
      if (ERROR) {
          errorHandler('Something went wrong');
      } else {
          callback('upcs');
      }
  }

  /**
  *
  * @return {Boolean} closeExperience -- true to close the Sentient experience
  **/
  goToCart() {
    //Customer navigates user to cart
    var closeExperience = true;
    return closeExperience;
  }

  /**
  *	@param {Number} rating -- rating sent by the user, received as a numeral value in a range from 1 to 5
  * @return {Boolean} closeExperience -- true to close the sentient experience
  **/
  feedbackSent(rating) {
    //Customer selects his feedback rating
    var closeExperience = true;
    return closeExperience;
  }
  ```
