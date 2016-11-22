# Betfair Package

Create automated betting systems or custom interfaces with the Exchange API. Read market data, place bets, check current bet details and more.

* Domain: betfair.com
* Credentials: appKey, sessionToken

## How to get credentials: 
0. Login into your Betfair account via [www.betfair.com](http://betfair.com)
1. Go to [Accounts API Demo Tool link](https://developer.betfair.com/exchange-api/accounts-api-demo/), ensure the Endpoint "UK"/"PROD" is selected.
2. Select the **createDeveloperAppKeys** operation from the list of Operations on the top left hand side of the Demo Tool. Your **sessionToken** will be automatically added to the 'Session Token (ssoid)' text box.
3. Enter your **Application Name** (this must be unique) in the '**Request**' column.
4. Press **Execute** at the bottom of the '**Request**' column.
5. Your **Application Key** will be returned in the right hand side panel of the Demo Tool under the Application Key column.  Please note:  You may need to expand the **Application Key** column to see the full **Application Key** value which is 16 characters in total. The assigned **Application Key** can be retrieved at anytime using the **getDeveloperAppKeys** request. 

The **Application Key** returned provides access to betting operations and delayed odds data - to be used for development and testing. Please apply for a live Application Key using the application form below once you have completed your development.


## TOC: 
* [listCompetitions](#listCompetitions)
* [listCountries](#listCountries)
* [listMarketBook](#listMarketBook)
* [listCurrentOrders](#listCurrentOrders)
* [listClearedOrders](#listClearedOrders)
* [listEvents](#listEvents)
* [listEventTypes](#listEventTypes)
* [listMarketCatalogue](#listMarketCatalogue)
* [listMarketProfitAndLoss](#listMarketProfitAndLoss)
* [listMarketTypes](#listMarketTypes)
* [listTimeRanges](#listTimeRanges)
* [listVenues](#listVenues)
* [placeOrders](#placeOrders)
* [cancelOrders](#cancelOrders)
* [replaceOrders](#replaceOrders)
* [updateOrders](#updateOrders)
* [createDeveloperAppKeys](#createDeveloperAppKeys)
* [getAccountDetails](#getAccountDetails)
* [getAccountFunds](#getAccountFunds)
* [getDeveloperAppKeys](#getDeveloperAppKeys)
* [getAccountStatement](#getAccountStatement)
* [listCurrencyRates](#listCurrencyRates)
* [cancelApplicationSubscription](#cancelApplicationSubscription)
* [getApplicationSubscriptionHistory](#getApplicationSubscriptionHistory)
* [getApplicationSubscriptionToken](#getApplicationSubscriptionToken)
* [listAccountSubscriptionTokens](#listAccountSubscriptionTokens)
* [listApplicationSubscriptionTokens](#listApplicationSubscriptionTokens)
* [updateApplicationSubscription](#updateApplicationSubscription)
* [getVendorClientId](#getVendorClientId)
* [getAffiliateRelation](#getAffiliateRelation)
* [getVendorDetails](#getVendorDetails)
* [checkAccountSubscriptionToWebApp](#checkAccountSubscriptionToWebApp)
* [revokeAccessToWebApp](#revokeAccessToWebApp)
* [generateVendorAccessToken](#generateVendorAccessToken)
* [startSession](#startSession)
* [endSession](#endSession)
* [extendSession](#extendSession)
* [startSslSession](#startSslSession)
* [listRaceDetails](#listRaceDetails)
* [heartbeat](#heartbeat)


<a name="listCompetitions"/>
## Betfair.listCompetitions
Returns a list of Competitions (i.e., World Cup 2013) associated with the markets selected by theMarketFilter. Currently only Football markets have an associated competition.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: JSON Object. The filter to selectdesired markets. Allmarkets that match thecriteria in the filter areselected.
| locale      | String     | The language used forthe response. If notspecified, the default isreturned.

<a name="listCountries"/>
## Betfair.listCountries
Returns a list of Countries associated with the markets selected by the MarketFilter.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       |  JSON Object. Required: The filter to selectdesired markets. Allmarkets that match thecriteria in the filter areselected.
| locale      | String     | The language used forthe response. If notspecified, the default isreturned.

<a name="listMarketBook"/>
## Betfair.listMarketBook
Returns a list of dynamic data about markets. Dynamic data includes prices, the status of the market, the status of selections, the traded volume, and the status of any orders you have placed in the market.

| Field                        | Type       | Description
|------------------------------|------------|----------
| appKey                       | credentials| Required: The Betfair Application Key.
| sessionToken                 | credentials| Required: The Betfair Session Token.
| marketIds                    | JSON       | Required: JSON Array. One or more market ids. The number of markets returned depends on the amount of data you request via the price projection.
| orderProjection              | String     | Optionally restricts the results to the specified order status. Valid values: `ALL`, `EXECUTABLE`, `EXECUTION_COMPLETE`
| priceProjection              | JSON([PriceProjection](#PriceProjection))| JSON Object. The projection of price data you want to receive in the response.
| matchProjection              | String     | If you ask for orders, specifies the representation of matches. Valid values: `NO_ROLLUP`, `ROLLED_UP_BY_PRICE`, `ROLLED_UP_BY_AVG_PRICE`
| includeOverallPosition       | String     | If you ask for orders, returns matches for each selection. Defaults to true if unspecified.
| partitionMatchedByStrategyRef| String     | If you ask for orders, returns the breakdown of matches by strategy for each selection. Defaults to false if unspecified.
| customerStrategyRefs         | JSON       | JSON Array. If you ask for orders, restricts the results to orders matching any of the specified set of customer defined strategies. Also filters which matches by strategy for selections are returned, if partitionMatchedByStrategyRef is true. An empty set will be treated as if the parameter has been omitted (or null passed).
| currencyCode                 | String     | A Betfair standard currency code. If not specified, the default currency code is used.
| locale                       | String     | The language used for the response. If not specified, the default is returned.
| matchedSince                 | Date       |  If you ask for orders, restricts the results to orders that have at least one fragment matched since the specified date (all matched fragments of such an order will be returned even if some were matched before the specified date). All EXECUTABLE orders will be returned regardless of matched date.
| locale                       | String     | The language used for the response. If not specified, the default is returned.
| betIds                       | JSON       | JSON Array. If you ask for orders, restricts the results to orders with the specified bet IDs.

<a name="listCurrentOrders"/>
## Betfair.listCurrentOrders
Returns a list of your current orders. Optionally you can filter and sort your current orders using thevarious parameters, setting none of the parameters will return all of your current orders up to a maximumof 1000 bets, ordered BY_BET and sorted EARLIEST_TO_LATEST. To retrieve more than 1000 orders,you need to make use of the fromRecord and recordCount parameters.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Required: The Betfair Application Key.
| sessionToken        | credentials| Required: The Betfair Session Token.
| betIds              | JSON       | JSON Array. Optionally restricts the results to the specified bet IDs. A maximum of 250 betId's, or a combination of 250 betId's & marketId's are permitted. `["bedIdExample1", "bedIdExample2"]`
| marketIds           | JSON       | JSON Array. Optionally restricts the results to the specified market IDs. A maximum of 250 marketId's, or a combination of 250 marketId's & betId's are permitted. `["marketIdExample1", "marketIdExample2"]`
| orderProjection     | String     | Optionally restricts the results to the specified order status. Valid values: `ALL`, `EXECUTABLE`, `EXECUTION_COMPLETE`
| customerOrderRefs   | JSON       | JSON Array. Optionally restricts the results to the specified customer order references.
| customerStrategyRefs| JSON       | JSON Array. Optionally restricts the results to the specified customer strategy references.
| dateRange           | JSON([TimeRange](#TimeRange)) |JSON Object. Optionally restricts the results to be from/to the specified date, these dates are contextual to the orders being returned and therefore the dates used to filter on will change to placed, matched, voided or settled dates depending on the orderBy. This date is inclusive, i.e. if an order was placed on exactly this date (to the millisecond) then it will be included in the results. If the from is later than the to, no results will be returned. See example at bottom. See `TimeRange` example in `JSON Objects` section.
| orderBy             | String     | Specifies how the results will be ordered. If no value is passed in, it defaults to BY_BET.  Also acts as a filter such that only orders with a valid value in the field being ordered by will be returned (i.e. BY_VOID_TIME returns only voided orders, BY_SETTLED_TIME (applies to partially settled markets) returns only settled orders and BY_MATCH_TIME returns only orders with a matched date (voided, settled, matched orders)). Note that specifying an orderBy parameter defines the context of the date filter applied by the dateRange parameter (placed, matched, voided or settled date) - see the dateRange parameter description (above) for more information. See also the OrderBy type definition. Valid values: `BY_BET`, `BY_MARKET`, `BY_MATCH_TIME`, `BY_PLACE_TIME`, `BY_SETTLED_TIME`, `BY_VOID_TIME`
| sortDir             | String     | Specifies the direction the results will be sorted in. If no value is passed in, it defaults to EARLIEST_TO_LATEST. Valid values: `EARLIEST_TO_LATEST`, `LATEST_TO_EARLIEST`.
| fromRecord          | Number     | Specifies the first record that will be returned. Records start at index zero, not at index one.
| recordCount         | Number     | Specifies how many records will be returned from the index position 'fromRecord'. Note that there is a page size limit of 1000. A value of zero indicates that you would like all records (including and from 'fromRecord') up to the limit.


<a name="listClearedOrders"/>
## Betfair.listClearedOrders
Returns a list of settled bets based on the bet status, ordered by settled date. To retrieve more than 1000 records, you need to make use of the fromRecord and recordCount parameters. By default the service will return all available data for the last 90 days (see Best Practice note below). 

| Field                 | Type       | Description
|-----------------------|------------|----------
| appKey                | credentials| Required: The Betfair Application Key.
| sessionToken          | credentials| Required: The Betfair Session Token.
| betStatus             | String     | Required: Restricts the results to the specified status. Valid values: `SETTLED`, `VOIDED`, `LAPSED`, `CANCELLED`.
| eventTypeIds          | JSON       | JSON Array. Optionally restricts the results to the specified Event Type IDs. `["idExample1", "idExample2"]`
| eventIds              | JSON       | JSON Array. Optionally restricts the results to the specified Event IDs. `["idExample1", "idExample2"]`
| marketIds             | JSON       | JSON Array. Optionally restricts the results to the specified market IDs. `["idExample1", "idExample2"]`
| runnerIds             | JSON       | JSON Array. Optionally restricts the results to the specified Runners. `["idExample1", "idExample2"]`
| betIds                | JSON       | JSON Array. Optionally restricts the results to the specified bet IDs. `["idExample1", "idExample2"]`
| customerOrderRefs     | JSON       | JSON Array. Optionally restricts the results to the specified customer order references. `["idExample1", "idExample2"]`
| customerStrategyRefs  | JSON       | JSON Array. Optionally restricts the results to the specified customer strategy references. `["idExample1", "idExample2"]`
| side                  | String     | Optionally restricts the results to the specified side. Valid values: `BACK`, `LAY`.
| settledDateRange      | JSON([TimeRange](#TimeRange))     | JSON Object. Optionally restricts the results to be from/to the specified settled date. This date is inclusive, i.e. if an order was cleared on exactly this date (to the millisecond) then it will be included in the results. If the from is later than the to, no results will be returned. See `TimeRange` example in `JSON Objects` section.
| groupBy               | String     | How to aggregate the lines, if not supplied then the lowest level is returned, i.e. bet by bet This is only applicable to SETTLED BetStatus. Valid values: `EVENT_TYPE`, `EVENT`, `MARKET`, `SIDE`, `BET`
| includeItemDescription| String     | If true then an ItemDescription object is included in the response.
| locale                | String     | The language used for the itemDescription. If not specified, the customer account default is returned.
| fromRecord            | String     | Specifies the first record that will be returned. Records start at index zero.
| recordCount           | String     | Specifies how many records will be returned, from the index position 'fromRecord'. Note that there is a page size limit of 1000. A value of zero indicates that you would like all records (including and from 'fromRecord') up to the limit.

<a name="listEvents"/>
## Betfair.listEvents
Returns a list of Events (i.e, Reading vs. Man United) associated with the markets selected by the MarketFilter.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: JSON Object. The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listEventTypes"/>
## Betfair.listEventTypes
Returns a list of Event Types (i.e. Sports) associated with the markets selected by the MarketFilter.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       | Required:  JSON Object. The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listMarketCatalogue"/>
## Betfair.listMarketCatalogue
Returns a list of information about published (ACTIVE/SUSPENDED) markets that does not change (or changes very rarely). You use listMarketCatalogue to retrieve the name of the market, the names of selections and other information about markets.  Market Data Request Limits apply to requests made to listMarketCatalogue. Please note: listMarketCatalogue does not return markets that are CLOSED.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Required: The Betfair Application Key.
| sessionToken    | credentials| Required: The Betfair Session Token.
| filter          | JSON([MarketFilter](#MarketFilter))       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| marketProjection| JSON       | JSON Array. The type and amount of data returned about the market. Valid values: `COMPETITION`, `EVENT`, `EVENT_TYPE`, `MARKET_START_TIME`, `MARKET_DESCRIPTION`, `RUNNER_DESCRIPTION`, `RUNNER_METADATA`. Example: `["COMPETITION", "MARKET_DESCRIPTION"]`
| sort            | String     | Valid Values: `MINIMUM_TRADED` <br>, `MAXIMUM_TRADED` <br> `MINIMUM_AVAILABLE`<br> `MAXIMUM_AVAILABLE` <br> `FIRST_TO_START` <br> `LAST_TO_START`.
| maxResults      | Number     | Required: limit on the total number of results returned, must be greater than 0 and less than or equal to 1000.
| locale          | String     | The language used for the response. If not specified, the default is returned.

<a name="listMarketProfitAndLoss"/>
## Betfair.listMarketProfitAndLoss
Retrieve profit and loss for a given list of OPEN markets. The values are calculated using matched bets and optionally settled bets. Only odds (MarketBettingType = ODDS) markets  are implemented, markets of other types are silently ignored. To retrieve your profit and loss for CLOSED markets, please use the listClearedOrders request. 

| Field             | Type       | Description
|-------------------|------------|----------
| appKey            | credentials| Required: The Betfair Application Key.
| sessionToken      | credentials| Required: The Betfair Session Token.
| marketIds         | JSON       | Required: JSON Array. List of markets to calculate profit and loss. `["idExample1", "idExample2"]`
| includeSettledBets| Boolean    | Option to include settled bets (partially settled markets only). Defaults to false if not specified.
| includeBspBets    | Boolean    | Option to include BSP bets. Defaults to false if not specified.
| netOfCommission   | Boolean    | Option to return profit and loss net of users current commission rate for this market including any special tariffs. Defaults to false if not specified.

<a name="listMarketTypes"/>
## Betfair.listMarketTypes
Returns a list of market types (i.e. MATCH_ODDS, NEXT_GOAL) associated with the markets selected by the MarketFilter. The market types are always the same, regardless of locale.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       | Required:  JSON Object. The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listTimeRanges"/>
## Betfair.listTimeRanges
Returns a list of time ranges in the granularity specified in the request (i.e. 3PM to 4PM, Aug 14th to Aug 15th) associated with the markets selected by the MarketFilter.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| granularity | String     | Required: The granularity of time periods that correspond to markets selected by the market filter. Valid values: `DAYS`, `HOURS`, `MINUTES`.

<a name="listVenues"/>
## Betfair.listVenues
Returns a list of Venues (i.e. Cheltenham, Ascot) associated with the markets selected by the MarketFilter. Currently, only Horse Racing markets are associated with a Venue.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))    | Required: JSON Object. The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="placeOrders"/>
## Betfair.placeOrders
Place new orders into market. This operation is atomic in that all orders will be placed or none will be placed. Please note that additional bet sizing rules apply to bets placed into the Italian Exchange.

| Field              | Type       | Description
|--------------------|------------|----------
| appKey             | credentials| Required: The Betfair Application Key.
| sessionToken       | credentials| Required: The Betfair Session Token.
| marketId           | String     | Required: The market id these orders are to be placed on
| instructions       | JSON([PlaceInstruction](#PlaceInstruction))       | Required: JSON Object. The number of place instructions. The limit of place instructions per request is 200 for the UK/AUS Exchange and 50 for the Italian Exchange.
| customerRef        | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.   CustomerRef can contain: upper/lower chars, digits, chars : - . _ + * : ; ~ only. Please note: There is a time window associated with the de-duplication of duplicate submissions which is 60 seconds.
| marketVersion      | JSON([MarketVersion](#MarketVersion))        |  JSON Object. Optional parameter allowing the client to specify which version of the market the orders should be placed on. If the current market version is higher than that sent on an order, the bet will be lapsed.
| customerStrategyRef| String     | An optional reference customers can use to specify which strategy has sent the order. The reference will be returned on order change messages through the stream API. The string is limited to 15 characters. If an empty string is provided it will be treated as null.
| async              | String     | An optional flag (not setting equates to false) which specifies if the orders should be placed asynchronously. Orders can be tracked via the Exchange Stream API or or the API-NG by providing a customerOrderRef for each place order. An order's status will be PENDING and no bet ID will be returned. 

<a name="cancelOrders"/>
## Betfair.cancelOrders
Cancel all bets OR cancel all bets on a market OR fully or partially cancel particular orders on a market. Only LIMIT orders can be cancelled or partially cancelled once placed.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| marketId    | String     | If marketId and betId aren't supplied all bets are cancelled
| instructions| JSON([CancelInstruction](#CancelInstruction))       |  JSON Array of Objects. All instructions need to be on the same market. If not supplied all bets on the market (if market id is passed) are fully cancelled.  The limit of cancel instructions per request is 60
| customerRef | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.

<a name="replaceOrders"/>
## Betfair.replaceOrders
This operation is logically a bulk cancel followed by a bulk place. The cancel is completed first then the new orders are placed. The new orders will be placed atomically in that they will all be placed or none will be placed. In the case where the new orders cannot be placed the cancellations will not be rolled back. See ReplaceInstruction.

| Field        | Type       | Description
|--------------|------------|----------
| appKey       | credentials| Required: The Betfair Application Key.
| sessionToken | credentials| Required: The Betfair Session Token.
| marketId     | String     | Required: The market id these orders are to be placed on
| instructions | JSON([ReplaceInstruction](#ReplaceInstruction))       | Required: JSON Array of Objects The number of replace instructions. The limit of replace instructions per request is 60.
| customerRef  | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.
| marketVersion      | JSON([MarketVersion](#MarketVersion))        |  JSON Object. Optional parameter allowing the client to specify which version of the market the orders should be placed on. If the current market version is higher than that sent on an order, the bet will be lapsed.
| async        | String     | An optional flag (not setting equates to false) which specifies if the orders should be replaced asynchronously. Orders can be tracked via the Exchange Stream API or the API-NG by providing a customerOrderRef for each replace order. Not available for MOC or LOC bets.

<a name="updateOrders"/>
## Betfair.updateOrders
Update non-exposure changing fields

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| marketId    | String     | Required: The market id these orders are to be placed on
| instructions| JSON([UpdateInstruction](#UpdateInstruction))     | Required: JSON Array of Objects. The number of update instructions. The limit of update instructions per request is 60
| customerRef | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.

<a name="createDeveloperAppKeys"/>
## Betfair.createDeveloperAppKeys
Create 2 Application Keys for given user; one 'Delayed and the other 'Live'. You must apply to have your 'Live' App Key activated.

| Field       | Type       | Description
|-------------|------------|----------
| sessionToken| credentials| Required: The Betfair Session Token.
| appName     | String     | Required: A Display name for the application.

<a name="getAccountDetails"/>
## Betfair.getAccountDetails
Returns the details relating your account, including your discount rate and Betfair point balance.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.

<a name="getAccountFunds"/>
## Betfair.getAccountFunds
Get available to bet amount. The getAccounts service will return the UK wallet balance by default from either the UK or AUS Accounts API endpoint if the wallet parameter is not specified.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| wallet      | String     | Name of the wallet in question. Please Note: To return the the Australian Exchange wallet balance you must specify AUSTRALIAN as the Wallet parameter.

<a name="getDeveloperAppKeys"/>
## Betfair.getDeveloperAppKeys
Get all application keys owned by the given developer/vendor

| Field       | Type       | Description
|-------------|------------|----------
| sessionToken| credentials| Required: The Betfair Session Token.

<a name="getAccountStatement"/>
## Betfair.getAccountStatement
Get account statement

| Field        | Type       | Description
|--------------|------------|----------
| appKey       | credentials| Required: The Betfair Application Key.
| sessionToken | credentials| Required: The Betfair Session Token.
| locale       | String     | The language to be used where applicable. If not specified, the customer account default is returned.
| fromRecord   | Number     | Specifies the first record that will be returned. Records start at index zero. If not specified then it will default to 0.
| recordCount  | Number     | Specifies the maximum number of records to be returned. Note that there is a page size limit of 100.
| itemDateRange| JSON([TimeRange](#TimeRange))       | JSON Array of Objects. Return items with an itemDate within this date range. Both from and to date times are inclusive. If from is not specified then the oldest available items will be in range. If to is not specified then the latest items will be in range. nb. This itemDataRange is currently only applied when includeItem is set to ALL or not specified, else items are NOT bound by itemDate. See `TimeRange` example in `JSON Objects` section.
| includeItem  | String     | Which items to include, if not specified then defaults to ALL. Valid values: `ALL`, `DEPOSITS_WITHDRAWALS`, `EXCHANGE`, `POKER_ROOM`
| wallet       | String     | Name of the wallet in question. Please Note: To return the the Australian Exchange wallet balance you must specify AUSTRALIAN as the Wallet parameter.

<a name="listCurrencyRates"/>
## Betfair.listCurrencyRates
Returns a list of currency rates based on given currency. Please note: the currency rates are updated once every hour a few seconds after the hour.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| fromCurrency| String     | The currency from which the rates are computed. Please note: GBP is currently the only based currency support

<a name="cancelApplicationSubscription"/>
## Betfair.cancelApplicationSubscription
Cancel the subscription token. The customers subscription will no longer be active once cancelled.

| Field            | Type       | Description
|------------------|------------|----------
| appKey           | credentials| Required: The Betfair Application Key.
| sessionToken     | credentials| Required: The Betfair Session Token.
| subscriptionToken| String     | Required: Subscription token for activation.

<a name="getApplicationSubscriptionHistory"/>
## Betfair.getApplicationSubscriptionHistory
Returns a list of subscriptions tokens that have been associated with the customers account.  This allows a vendor to identify if a customer has a previous subscription to their application and the status of each subscription.

| Field         | Type       | Description
|---------------|------------|----------
| appKey        | credentials| Required: The Betfair Application Key.
| sessionToken  | credentials| Required: The Betfair Session Token.
| vendorClientId| String     | The unique customer identifier
| applicationKey| String     | The unique application identifier

<a name="getApplicationSubscriptionToken"/>
## Betfair.getApplicationSubscriptionToken
Used to create new subscription tokens for an application. Returns the newly generated subscription token which can be provided to the end user. Please note: A maximum number of 15,000 subscription UNACTIVATED subscriptions tokens can be created at any one time. Attempts to create more subscription tokens will return the error TOO_MANY_REQUESTS error which will restrict creation of further tokens until existing UNACTIVATED subscription tokens have been ACTIVATED or CANCELLED

| Field             | Type       | Description
|-------------------|------------|----------
| appKey            | credentials| Required: The Betfair Application Key.
| sessionToken      | credentials| Required: The Betfair Session Token.
| subscriptionLength| Number     | How many days the subscription should last. Open ended if value not supplied. Expiry time will be rounded up to midnight on the date of expiry.
| clientReference   | String     | Any client reference for this subscription token request.

<a name="listAccountSubscriptionTokens"/>
## Betfair.listAccountSubscriptionTokens
List of subscription tokens associated with the account

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.

<a name="listApplicationSubscriptionTokens"/>
## Betfair.listApplicationSubscriptionTokens
Returns a list of subscription tokens for an application based on the subscription status passed in the request. Returns all subscription token details, including the client reference and vendor client Id associated with the subscription token.

| Field             | Type       | Description
|-------------------|------------|----------
| appKey            | credentials| Required: The Betfair Application Key.
| sessionToken      | credentials| Required: The Betfair Session Token.
| subscriptionStatus| String     | Optionally filter response by Subscription status of the token. Valid values: `ALL`, `ACTIVATED`, `UNACTIVATED`, `CANCELLED`, `EXPIRED`

<a name="updateApplicationSubscription"/>
## Betfair.updateApplicationSubscription
Update an application subscription with a new expiry date. Please note: A subscription token created by this operation *doesn't* need to be activated via activateApplicationSubscription as the token is automatically associated with the customers vendorClientId when the request is made.

| Field             | Type       | Description
|-------------------|------------|----------
| appKey            | credentials| Required: The Betfair Application Key.
| sessionToken      | credentials| Required: The Betfair Session Token.
| vendorClientId    | String     | Required: The vendor client id for which to update the subscription for
| subscriptionLength| String     | Required: How many days the subscription should last. Expiry time will be rounded up to midnight on the date of expiry. Any change to the subscription length will override the customers existing subscription.

<a name="getVendorClientId"/>
## Betfair.getVendorClientId
Returns the vendor client id for customer account which is a unique identifier for that customer.  The vendor client Id can be used to obtain the customers application subscription history via getApplicationSubscriptionHistory.  The request requires the X-Authentication header only

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.

<a name="getAffiliateRelation"/>
## Betfair.getAffiliateRelation
Return relation between a list of users and an affiliate

| Field          | Type       | Description
|----------------|------------|----------
| appKey         | credentials| Required: The Betfair Application Key.
| sessionToken   | credentials| Required: The Betfair Session Token.
| vendorClientIds| JSON       | JSON Array. List of client ids to check affiliation on. `["idExample1", "idExample2"]`

<a name="getVendorDetails"/>
## Betfair.getVendorDetails
Return details about a vendor from its identifier. Response includes Vendor Name and URL.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| vendorId    | String     | Required: The vendor's public identifier

<a name="checkAccountSubscriptionToWebApp"/>
## Betfair.checkAccountSubscriptionToWebApp
Return details about a vendor from its identifier. Response includes Vendor Name and URL.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| vendorId    | String     | Required: The id of the vendor to check subscription for

<a name="revokeAccessToWebApp"/>
## Betfair.revokeAccessToWebApp
Remove the link between an account and a vendor web app. This will remove the refreshToken for this user-vendor pair subscription.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| vendorId    | String     | Required: Returns whether the request was successful or not

<a name="generateVendorAccessToken"/>
## Betfair.generateVendorAccessToken
Generate web vendor session based on a standard session identifiable by auth code, vendor secret and app key

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| clientId    | String     | Required: The vendor's vendorId
| grantType   | String     | Required: Whether the vendor is using an authorisation code or a refresh token to get a session. Valid values: `AUTHORISATION_CODE`, `REFRESH_TOKEN`, `REFRESH_TOKEN`
| code        | String     | The authorisation code used to lookup the session to be returned
| clientSecret| String     | Required: The vendor's private key used to verify their identity
| refreshToken| String     | The vendor's refresh token if the grant_type is refresh_token

<a name="startSession"/>
## Betfair.startSession
The API login endpoint is the simplest method of integration for most applications in terms of expected development time but comes at the cost of being less flexible to edge-cases than the embedded Betfair embedded login page. It will allow a user to provide a username and password or a username and (password + 2 factor auth code) if they have strong authentication enabled.

| Field   | Type       | Description
|---------|------------|----------
| appKey  | credentials| Required: The Betfair Application Key.
| username| String     | Required: The username to be used for the login
| password| String     | The password to be used for the login. For strong auth customers, this should be their password with a 2 factor auth code appended to the password string.

<a name="endSession"/>
## Betfair.endSession
You can use Logout to terminate your existing session.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.

<a name="extendSession"/>
## Betfair.extendSession
You can use Keep Alive to extend the session timeout period. The minimum session time is currently 20 minutes (Italian Exchange). On the international (.com) Exchange the current session time is 4 hours. Therefore, you should request Keep Alive within this time to prevent session expiry. If you don't call Keep Alive within the specified timeout period, the session will expire. Please note:  Session times aren't determined or extended based on API activity.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.

<a name="startSslSession"/>
## Betfair.startSslSession
The non-interactive login method for API-NG requires that you create and upload a self-signed certificate which will be used, alongside your username and password to authenticate your credentials and generate a session token.

| Field   | Type       | Description
|---------|------------|----------
| appKey  | credentials| Required: The Betfair Application Key.
| password| String     | Required: The password of the user logging in.
| username| String     | Required: The username to be used for the login
| cert    | String     | Required: cert file
| key     | String     | Required: key file


<a name="listRaceDetails"/>
## Betfair.listRaceDetails
Search for races to get their details.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| meetingIds  | JSON       | JSON Array. Optionally restricts the results to the specified meeting IDs. The unique Id for the meeting equivalent to the eventId for that specific race as returned by listEvents.  Optionally restricts the results to the specified meeting IDs. Example: `["meetid1", "meetid2"]`
| raceIds     | JSON       | JSON Array. Optionally restricts the results to the specified race IDs. The unique Id for the race in the format meetingid.raceTime (hhmm). raceTime is in GMT.  Optionally restricts the results to the specified race IDs. Example: `["meetid1", "meetid2"]`

<a name="heartbeat"/>
## Betfair.heartbeat
This heartbeat operation is provided to help customers have their positions managed automatically in the event of their API clients losing connectivity with the Betfair API. If a heartbeat request is not received within a prescribed time period, then Betfair will attempt to cancel all 'LIMIT' type bets for the given customer on the given exchange. There is no guarantee that this service will result in all bets being cancelled as there are a number of circumstances where bets are unable to be cancelled. Manual intervention is strongly advised in the event of a loss of connectivity to ensure that positions are correctly managed. If this service becomes unavailable for any reason, then your heartbeat will be unregistered automatically to avoid bets being inadvertently cancelled upon resumption of service. you should manage your position manually until the service is resumed. Heartbeat data may also be lost in the unlikely event of nodes failing within the cluster, which may result in your position not being managed until a subsequent heartbeat request is received.

| Field                  | Type       | Description
|------------------------|------------|----------
| appKey                 | credentials| Required: The Betfair Application Key.
| sessionToken           | credentials| Required: The Betfair Session Token.
| preferredTimeoutSeconds| Number     | Maximum period in seconds that may elapse (without a subsequent heartbeat request), before a cancellation request is automatically submitted on your behalf. The minimum value is 10, the maximum value permitted is 300. Passing 0 will result in your heartbeat being unregistered (or ignored if you have no current heartbeat registered). You will still get an actionPerformed value returned when passing 0, so this may be used to determine if any action was performed since your last heartbeat, without actually registering a new heartbeat. Passing a negative value will result in an error being returned, INVALID_INPUT_DATA. Any errors while registering your heartbeat will result in a error being returned, UNEXPECTED_ERROR. Passing a value that is less than the minimum timeout will result in your heartbeat adopting the minimum timeout. Passing a value that is greater than the maximum timeout will result in your heartbeat adopting the maximum timeout. The minimum and maximum timeouts are subject to change, so your client should utilise the returned actualTimeoutSeconds to set an appropriate frequency for your subsequent heartbeat requests.



___

# JSON Objects

<a name="MarketFilter"/>
## MarketFilter 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>textQuery</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by any text associated with the market such as the Name, Event, Competition, etc. You can include a wildcard (*) character as long as it is not the first character.</p></td>
</tr>
<tr class="even">
<td align="left"><p>exchangeIds</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p><strong>DEPRECATED</strong></p></td>
</tr>
<tr class="odd">
<td align="left"><p>eventTypeIds</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by event type associated with the market. (i.e., Football, Hockey, etc). Example: `["exampleType", "exampleType2"]`</p></td>
</tr>
<tr class="even">
<td align="left"><p>eventIds</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by the event id associated with the market.  Example: `["exampleId1", "exampleId2"]`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>competitionIds</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by the competitions associated with the market. Example: `["exampleId1", "exampleId2"]`.</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketIds</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by the market id associated with the market. Example: `["exampleId1", "exampleId2"]`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>venues</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by the venue associated withthe market. Currently only Horse Racing markets have venues. Example: `["venue1", "venue2"]`</p></td>
</tr>
<tr class="even">
<td align="left"><p>bspOnly</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to bsp markets only, if True or non-bsp markets if False. If not specified then returns both BSP and non-BSP markets</p></td>
</tr>
<tr class="odd">
<td align="left"><p>turnInPlayEnabled</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that will turn in play ifTrue or will not turn in play if false. If not specified, returns both.</p></td>
</tr>
<tr class="even">
<td align="left"><p>inPlayOnly</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that are currently in play if True or are not currently in play if false. If not specified, returns both.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketBettingTypes</p></td>
<td align="left"><p>JSON Array</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that match the betting type of the market (i.e. Odds, Asian Handicap Singles, or Asian Handicap Doubles. Valid values: `ODDS`, `LINE`, `RANGE`, `ASIAN_HANDICAP_DOUBLE_LINE`, `ASIAN_HANDICAP_SINGLE_LINE`, `FIXED_ODDS`. Example: `["ODDS", "LINE"]`</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCountries</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that are in the specifiedcountry or countries. Example: `["GBR"]`</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketTypeCodes</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that match the type of the market (i.e., MATCH_ODDS, HALF_TIME_SCORE) . You should use this instead of relying on the market name as the market type codes are the same in all locales. Example: `["MATCH_ODDS", "HALF_TIME_SCORE"]`</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketStartTime</p></td>
<td align="left"><p>JSON Object(<a href="#TimeRange">TimeRange)</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets with a market start time before or after the specified date. SEe example bellow. </p></td>
</tr>
<tr class="odd">
<td align="left"><p>withOrders</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that I have one or more orders in these status. Valid values: `PENDING`, `EXECUTION_COMPLETE`, `EXECUTABLE`, `EXPIRED`. Example: `["PENDING", "EXECUTION_COMPLETE"]`</p></td>
</tr>
</tbody>
</table>

Example:
```json
{
	"textQuery": "Test bet"
}
```

<a name="TimeRange"/>
## TimeRange 

```json
{
	"from": "2013-08-16T12:33:00.335Z",
	"to": "2017-08-16T12:33:00.335Z"
}
```
<a name="PriceProjection"/>
## PriceProjection 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>priceData</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The basic price data you want to receive in the response. Valid values: `SP_AVAILABLE`, `SP_TRADED`, `EX_BEST_OFFERS`, `EX_ALL_OFFERS`, `EX_TRADED`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>exBestOffersOverrides</p></td>
<td align="left"><p>JSON([ExBestOffersOverrides](#ExBestOffersOverrides))</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Options to alter the default representation of best offer prices Applicable to EX_BEST_OFFERS priceData selection</p></td>
</tr>
<tr class="odd">
<td align="left"><p>virtualise</p></td>
<td align="left"><p>Boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Indicates if the returned prices should include virtual prices. Applicable to EX_BEST_OFFERS and EX_ALL_OFFERS priceData selections, default value is false.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>rolloverStakes</p></td>
<td align="left"><p>Boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Indicates if the volume returned at each price point should be the absolute value or a cumulative sum of volumes available at the price and all better prices. If unspecified defaults to false. Applicable to EX_BEST_OFFERS and EX_ALL_OFFERS price projections. Not supported as yet.</p></td>
</tr>
</tbody>
</table>

Example:
```json
{

}
```

<a name="ExBestOffersOverrides"/>
## ExBestOffersOverrides 
Options to alter the default representation of best offer prices

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>bestPricesDepth</p></td>
<td align="left"><p>Number</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The maximum number of prices to return on each side for each runner. If unspecified defaults to 3. Maximum returned price depth returned is 10.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>rollupModel</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The model to use when rolling up available sizes. If unspecified defaults to STAKE rollup model with rollupLimit of minimum stake in the specified currency. Valid values: `STAKE`, `PAYOUT`, `MANAGED_LIABILITY`, `NONE`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>rollupLimit</p></td>
<td align="left"><p>Number</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The volume limit to use when rolling up returned sizes. The exact definition of the limit depends on the rollupModel. If no limit is provided it will use minimum stake as default the value. Ignored if no rollup model is specified.
</p></td>
<tr class="odd">
<td align="left"><p>rollupLiabilityThreshold</p></td>
<td align="left"><p>Double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Only applicable when rollupModel is MANAGED_LIABILITY. The rollup model switches from being stake based to liability based at the smallest lay price which is >= rollupLiabilityThreshold.service level default (TBD). Not supported as yet.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>rollupLiabilityFactor</p></td>
<td align="left"><p>Number</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Only applicable when rollupModel is MANAGED_LIABILITY. (rollupLiabilityFactor * rollupLimit) is the minimum liabilty the user is deemed to be comfortable with. After the rollupLiabilityThreshold price subsequent volumes will be rolled up to minimum value such that the liability >= the minimum liability.service level default (5). Not supported as yet.</p></td>
</tr>
</tbody>
</table>

Example:
```json
{

}
```

<a name="PlaceInstruction"/>
## PlaceInstruction 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>orderType</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Valid values: `LIMIT`, `LIMIT_ON_CLOSE`, `MARKET_ON_CLOSE`.</p></td>
</tr>
<tr class="even">
<td align="left"><p>selectionId</p></td>
<td align="left"><p>long</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The selection_id.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>handicap</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p><span>The handicap associated with the runnerin case of Asian handicap markets, null otherwise.</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>side</p></td>
<td align="left"><p>String</td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Valid values: `BACK`, `LAY`.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>limitOrder</p></td>
<td align="left"><p>JSON Object(<a href="#LimitOrder">LimitOrder</a>)</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>A simple exchange bet for immediate execution. See example & description bellow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>limitOnCloseOrder</p></td>
<td align="left"><p>JSON Object(<a href="#LimitOnCloseOrder">LimitOnCloseOrder</a>)</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Bets are matched if, and only if, the returned starting price is better than a specified price. In the case of back bets, LOC bets are matched if the calculated starting price is greater than the specified price. In the case of lay bets, LOC bets are matched if the starting price is less than the specified price. If the specified limit is equal to the starting price, then it may be matched, partially matched, or may notbe matched at all, depending on how much is needed to balance all bets against each other (MOC, LOC and normal exchange bets). See example & description bellow.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketOnCloseOrder</p></td>
<td align="left"><p>JSON Object(<a href="#MarketOnCloseOrder">MarketOnCloseOrder)</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Bets remain unmatched until the market is reconciled. They are matched and settled at a price that is representative of the market at the point the market is turned in-play. The market is reconciled to find a starting price and MOC bets are settled at whatever starting price is returned. MOC bets are always matched and settled, unless a starting price is not available for the selection. Market on Close bets can only be placed before the starting price is determined. See example & description bellow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>customerOrderRef</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>An optional reference customers can set to identify instructions.. No validation will be done on uniqueness and the string is limited  ters. If an empty string is provided it will be treated as null.</p></td>
</tr>
</tbody>
</table>

Example:
```json
{
	"orderType": "LIMIT",
	"selectionId": 1
}
```

<a name="LimitOrder"/>
## LimitOrder 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>size</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The size of the bet. <strong>Please note</strong>: For market type EACH_WAY. The total stake size x 2</p></td>
</tr>
<tr class="even">
<td align="left"><p>price</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The limit price</p></td>
</tr>
<tr class="odd">
<td align="left"><p>persistenceType</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>What to do with the order at turn-in-play. Valid values: `LAPSE`, `PERSIST`, `MARKET_ON_CLOSE`.</p></td>
</tr>
<tr class="even">
<td align="left"><p>timeInForce</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left">The type of TimeInForce value to use. This value takes precedence over any PersistenceType value chosen. Valid value: FILL_OR_KILL<br />
</td>
</tr>
<tr class="odd">
<td align="left"><p>minFillSize</p></td>
<td align="left"><p>Size</p></td>
<td align="left"><p>No</p></td>
<td align="left">An optional field used if the TimeInForce attribute is populated. <br />
</td>
</tr>
<tr class="even">
<td align="left"><p>betTargetType</p></td>
<td align="left"><p>BetTargetType</p></td>
<td align="left"><p>No</p></td>
<td align="left">An optional field to allow betting to a targeted PAYOUT or BACKERS_PROFIT. <br />
</td>
</tr>
<tr class="odd">
<td align="left"><p>betTargetSize</p></td>
<td align="left"><p>Size</p></td>
<td align="left"><p>No</p></td>
<td align="left">An optional field which must bespecified if BetTargetType is specified for this order <br />
</td>
</tr>
</tbody>
</table>

Example: 
```json
{
	"size": 12.99,
	"price": 15,
	"persistenceType": "LAPSE"
}
```

<a name="LimitOnCloseOrder"/>
## LimitOnCloseOrder 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>liability</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The size of the bet.</p></td>
</tr>
<tr class="even">
<td align="left"><p>price</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The limit price of the bet if LOC</p></td>
</tr>
</tbody>
</table>

Example: 
```json
{
	"liability": 12.99,
	"price": 15
}
```

<a name="MarketOnCloseOrder"/>
## MarketOnCloseOrder 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>liability</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The size of the bet.</p></td>
</tr>
</tbody>
</table>

Example: 
```json
{
	"liability": 12.99,
}
```

<a name="CancelInstruction"/>
## CancelInstruction 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>betId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The betId</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeReduction</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>If supplied then this is a partial cancel.  Should be set to 'null' if no size reduction is required.</p></td>
</tr>
</tbody>
</table>

Example:
```json
{
	"betId": "1"
}
```

<a name="ReplaceInstruction"/>
## ReplaceInstruction 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>betId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Unique identifier for the bet</p></td>
</tr>
<tr class="even">
<td align="left"><p>newPrice</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The price to replace the bet at</p></td>
</tr>
</tbody>
</table>

Example:
```json
{
	"betId": "1",
	"newPrice": 0.99
}
```

<a name="UpdateInstruction"/>
## UpdateInstruction 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>betId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Unique identifier for the bet</p></td>
</tr>
<tr class="even">
<td align="left"><p>newPersistenceType</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Valid values: `LAPSE`, `PERSIST`, `MARKET_ON_CLOSE`.</p></td>
</tr>
</tbody>
</table>

Example:
```json
{
	"betId": "1",
	"newPersistenceType": "LAPSE" 	
}
```

<a name="MarketVersion"/>
## MarketVersion 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field name</th>
<th align="left">Type</th>
<th align="left">Required</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="even">
<td align="left"><p>version</p></td>
<td align="left"><p>Long</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>A non-monotonically increasing number indicating market changes</p></td>
</tr>
</tbody>
</table>


Example:
```json
{
	"version": "..."
}
```
