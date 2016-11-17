# Betfair Package

DEVELOP CUSTOM APPS & TURBO CHARGE YOUR BETTING STRATEGY

* Domain: betfair.com
* Credentials: appKey, sessionToken

## How to get credentials: 
0. Item one 
1. Item two

## TOC: 
* [listCompetitions](#listCompetitions)
* [listCountries](#listCountries)
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
 
<a name="listCompetitions"/>
## Betfair.listCompetitions
Returns a list of Competitions (i.e., World Cup 2013) associated with the markets selected by theMarketFilter. Currently only Football markets have an associated competition.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: The filter to selectdesired markets. Allmarkets that match thecriteria in the filter areselected.
| locale      | String     | The language used forthe response. If notspecified, the default isreturned.

<a name="listCountries"/>
## Betfair.listCountries
Returns a list of Countries associated with the markets selected by the MarketFilter.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON       | Required: The filter to selectdesired markets. Allmarkets that match thecriteria in the filter areselected.
| locale      | String     | The language used forthe response. If notspecified, the default isreturned.

<a name="listCurrentOrders"/>
## Betfair.listCurrentOrders
Returns a list of your current orders. Optionally you can filter and sort your current orders using thevarious parameters, setting none of the parameters will return all of your current orders up to a maximumof 1000 bets, ordered BY_BET and sorted EARLIEST_TO_LATEST. To retrieve more than 1000 orders,you need to make use of the fromRecord and recordCount parameters.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Required: The Betfair Application Key.
| sessionToken        | credentials| Required: The Betfair Session Token.
| betIds              | JSON       | JSON Array. Optionally restricts the results to the specified bet IDs. A maximum of 250 betId's, or a combination of 250 betId's & marketId's are permitted.
| marketIds           | JSON       | JSON Array. Optionally restricts the results to the specified market IDs. A maximum of 250 marketId's, or a combination of 250 marketId's & betId's are permitted.
| orderProjection     | String     | Optionally restricts the results to the specified order status.
| customerOrderRefs   | JSON       | Optionally restricts the results to the specified customer order references.
| customerStrategyRefs| JSON       | Optionally restricts the results to the specified customer strategy references.
| dateRange           | String     | Optionally restricts the results to be from/to the specified date, these dates are contextual to the orders being returned and therefore the dates used to filter on will change to placed, matched, voided or settled dates depending on the orderBy. This date is inclusive, i.e. if an order was placed on exactly this date (to the millisecond) then it will be included in the results. If the from is later than the to, no results will be returned.
| orderBy             | String     | Specifies how the results will be ordered. If no value is passed in, it defaults to BY_BET.  Also acts as a filter such that only orders with a valid value in the field being ordered by will be returned (i.e. BY_VOID_TIME returns only voided orders, BY_SETTLED_TIME (applies to partially settled markets) returns only settled orders and BY_MATCH_TIME returns only orders with a matched date (voided, settled, matched orders)). Note that specifying an orderBy parameter defines the context of the date filter applied by the dateRange parameter (placed, matched, voided or settled date) - see the dateRange parameter description (above) for more information. See also the OrderBy type definition.
| sortDir             | String     | Specifies the direction the results will be sorted in. If no value is passed in, it defaults to EARLIEST_TO_LATEST.
| fromRecord          | Number     | Specifies the first record that will be returned. Records start at index zero, not at index one.
| recordCount         | Number     | Specifies how many records will be returned from the index position 'fromRecord'. Note that there is a page size limit of 1000. A value of zero indicates that you would like all records (including and from 'fromRecord') up to the limit.

<a name="listClearedOrders"/>
## Betfair.listClearedOrders
Returns a list of settled bets based on the bet status, ordered by settled date. To retrieve more than 1000 records, you need to make use of the fromRecord and recordCount parameters. By default the service will return all available data for the last 90 days (see Best Practice note below). 

| Field                 | Type       | Description
|-----------------------|------------|----------
| appKey                | credentials| Required: The Betfair Application Key.
| sessionToken          | credentials| Required: The Betfair Session Token.
| betStatus             | String     | Required: Restricts the results to the specified status.
| eventTypeIds          | JSON       | Optionally restricts the results to the specified Event Type IDs.
| eventIds              | String     | Optionally restricts the results to the specified Event IDs.
| marketIds             | JSON       | Optionally restricts the results to the specified market IDs.
| runnerIds             | String     | Optionally restricts the results to the specified Runners.
| betIds                | String     | Optionally restricts the results to the specified bet IDs.
| customerOrderRefs     | String     | Optionally restricts the results to the specified customer order references.
| customerStrategyRefs  | String     | Optionally restricts the results to the specified customer strategy references.
| side                  | String     | Optionally restricts the results to the specified side.
| settledDateRange      | String     | Optionally restricts the results to be from/to the specified settled date. This date is inclusive, i.e. if an order was cleared on exactly this date (to the millisecond) then it will be included in the results. If the from is later than the to, no results will be returned.
| groupBy               | String     | How to aggregate the lines, if not supplied then the lowest level is returned, i.e. bet by bet This is only applicable to SETTLED BetStatus.
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
| filter      | JSON       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listEventTypes"/>
## Betfair.listEventTypes
Returns a list of Event Types (i.e. Sports) associated with the markets selected by the MarketFilter.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listMarketCatalogue"/>
## Betfair.listMarketCatalogue
Returns a list of information about published (ACTIVE/SUSPENDED) markets that does not change (or changes very rarely). You use listMarketCatalogue to retrieve the name of the market, the names of selections and other information about markets.  Market Data Request Limits apply to requests made to listMarketCatalogue. Please note: listMarketCatalogue does not return markets that are CLOSED.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Required: The Betfair Application Key.
| sessionToken    | credentials| Required: The Betfair Session Token.
| filter          | JSON       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| marketProjection| String     | The type and amount of data returned about the market.
| sort            | String     | The order of the results. Will default to RANK if not passed. RANK is an assigned priority that is determined by our Market Operations team in our back-end system. A result's overall rank is derived from the ranking given to the flowing attributes for the result. EventType, Competition, StartTime, MarketType, MarketId. For example, EventType is ranked by the most popular sports types and marketTypes are ranked in the following order: ODDS ASIAN LINE RANGE If all other dimensions of the result are equal, then the results are ranked in MarketId order.
| maxResults      | Number     | Required: limit on the total number of results returned, must be greater than 0 and less than or equal to 1000.
| locale          | String     | The language used for the response. If not specified, the default is returned.

<a name="listMarketProfitAndLoss"/>
## Betfair.listMarketProfitAndLoss
Retrieve profit and loss for a given list of OPEN markets. The values are calculated using matched bets and optionally settled bets. Only odds (MarketBettingType = ODDS) markets  are implemented, markets of other types are silently ignored. To retrieve your profit and loss for CLOSED markets, please use the listClearedOrders request. 

| Field             | Type       | Description
|-------------------|------------|----------
| appKey            | credentials| Required: The Betfair Application Key.
| sessionToken      | credentials| Required: The Betfair Session Token.
| marketIds         | JSON       | Required: JSON Array. List of markets to calculate profit and loss
| includeSettledBets| String     | Option to include settled bets (partially settled markets only). Defaults to false if not specified.
| includeBspBets    | String     | Option to include BSP bets. Defaults to false if not specified.
| netOfCommission   | String     | Option to return profit and loss net of users current commission rate for this market including any special tariffs. Defaults to false if not specified.

<a name="listMarketTypes"/>
## Betfair.listMarketTypes
Method description

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listTimeRanges"/>
## Betfair.listTimeRanges
Method description

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| granularity | String     | Required: The granularity of time periods that correspond to markets selected by the market filter.

<a name="listVenues"/>
## Betfair.listVenues
Method description

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="placeOrders"/>
## Betfair.placeOrders
Method description

| Field              | Type       | Description
|--------------------|------------|----------
| appKey             | credentials| Required: The Betfair Application Key.
| sessionToken       | credentials| Required: The Betfair Session Token.
| marketId           | String     | Required: The market id these orders are to be placed on
| instructions       | JSON       | Required: The number of place instructions. The limit of place instructions per request is 200 for the UK/AUS Exchange and 50 for the Italian Exchange.
| customerRef        | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.   CustomerRef can contain: upper/lower chars, digits, chars : - . _ + * : ; ~ only. Please note: There is a time window associated with the de-duplication of duplicate submissions which is 60 seconds.
| marketVersion      | JSON       | Optional parameter allowing the client to specify which version of the market the orders should be placed on. If the current market version is higher than that sent on an order, the bet will be lapsed.
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
| instructions| JSON       | All instructions need to be on the same market. If not supplied all bets on the market (if market id is passed) are fully cancelled.  The limit of cancel instructions per request is 60
| customerRef | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.

<a name="replaceOrders"/>
## Betfair.replaceOrders
This operation is logically a bulk cancel followed by a bulk place. The cancel is completed first then the new orders are placed. The new orders will be placed atomically in that they will all be placed or none will be placed. In the case where the new orders cannot be placed the cancellations will not be rolled back. See ReplaceInstruction.

| Field        | Type       | Description
|--------------|------------|----------
| appKey       | credentials| Required: The Betfair Application Key.
| sessionToken | credentials| Required: The Betfair Session Token.
| marketId     | String     | Required: The market id these orders are to be placed on
| instructions | JSON       | Required: The number of replace instructions. The limit of replace instructions per request is 60.
| customerRef  | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.
| marketVersion| String     | Optional parameter allowing the client to specify which version of the market the orders should be placed on. If the current market version is higher than that sent on an order, the bet will be lapsed.
| async        | String     | An optional flag (not setting equates to false) which specifies if the orders should be replaced asynchronously. Orders can be tracked via the Exchange Stream API or the API-NG by providing a customerOrderRef for each replace order. Not available for MOC or LOC bets.

<a name="updateOrders"/>
## Betfair.updateOrders
Update non-exposure changing fields

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| marketId    | String     | Required: The market id these orders are to be placed on
| instructions| String     | Required: The number of update instructions. The limit of update instructions per request is 60
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
| itemDateRange| JSON       | Return items with an itemDate within this date range. Both from and to date times are inclusive. If from is not specified then the oldest available items will be in range. If to is not specified then the latest items will be in range. nb. This itemDataRange is currently only applied when includeItem is set to ALL or not specified, else items are NOT bound by itemDate.
| includeItem  | String     | Which items to include, if not specified then defaults to ALL.
| wallet       | String     | 

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
Method description

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
Method description

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
| subscriptionStatus| String     | Optionally filter response by Subscription status of the token

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
| vendorClientIds| JSON       | JSON Array. List of client ids to check affiliation on

<a name="getVendorDetails"/>
## Betfair.getVendorDetails
Method description

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| vendorId    | String     | Required: The vendor's public identifier

<a name="checkAccountSubscriptionToWebApp"/>
## Betfair.checkAccountSubscriptionToWebApp
Method description

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
| grantType   | String     | Required: Whether the vendor is using an authorisation code or a refresh token to get a session
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

___

# Data structures
<a name="MarketFilter"/>

| Field   | Type       | Description
|---------|------------|----------
| textQuery  | String| Restrict markets by any text associated with the market such as the Name, Event, Competition, etc. You can include a wildcard (*) character as long as it is not the first character.
| eventTypeIds | JSON | JSON Array of Strings. Restrict markets by event type associated with the market. (i.e., Football, Hockey, etc)
| eventIds | JSON | JSON Array of Strings. Restrict markets by the event id associated with the market.
| competitionIds | JSON | JSON Array of Strings. Restrict markets by the competitions associated with the market.
| marketIds | JSON | JSON Array of Strings. Restrict markets by the market id associated with the market.
| venues | JSON | JSON Array of Strings. Restrict markets by the venue associated with the market. Currently only Horse Racing markets have venues.
| bspOnly | Bool | Restrict to bsp markets only, if True or non-bsp markets if False. If not specified then returns both BSP and non-BSP markets
