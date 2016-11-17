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
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: The filter to selectdesired markets. Allmarkets that match thecriteria in the filter areselected.
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
| orderProjection     | String([OrderProjection](#OrderProjection))     | Optionally restricts the results to the specified order status.
| customerOrderRefs   | JSON       | JSON Array. Optionally restricts the results to the specified customer order references.
| customerStrategyRefs| JSON       | JSON Array. Optionally restricts the results to the specified customer strategy references.
| dateRange           | String([TimeRange](#TimeRange))      | Optionally restricts the results to be from/to the specified date, these dates are contextual to the orders being returned and therefore the dates used to filter on will change to placed, matched, voided or settled dates depending on the orderBy. This date is inclusive, i.e. if an order was placed on exactly this date (to the millisecond) then it will be included in the results. If the from is later than the to, no results will be returned.
| orderBy             | String([OrderBy](#OrderBy))     | Specifies how the results will be ordered. If no value is passed in, it defaults to BY_BET.  Also acts as a filter such that only orders with a valid value in the field being ordered by will be returned (i.e. BY_VOID_TIME returns only voided orders, BY_SETTLED_TIME (applies to partially settled markets) returns only settled orders and BY_MATCH_TIME returns only orders with a matched date (voided, settled, matched orders)). Note that specifying an orderBy parameter defines the context of the date filter applied by the dateRange parameter (placed, matched, voided or settled date) - see the dateRange parameter description (above) for more information. See also the OrderBy type definition.
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
| betStatus             | String([BetStatus](#BetStatus))     | Required: Restricts the results to the specified status.
| eventTypeIds          | JSON       | JSON Array. Optionally restricts the results to the specified Event Type IDs.
| eventIds              | String     | JSON Array. Optionally restricts the results to the specified Event IDs.
| marketIds             | JSON       | JSON Array. Optionally restricts the results to the specified market IDs.
| runnerIds             | String     | JSON Array. Optionally restricts the results to the specified Runners.
| betIds                | String     | JSON Array. Optionally restricts the results to the specified bet IDs.
| customerOrderRefs     | String     | JSON Array. Optionally restricts the results to the specified customer order references.
| customerStrategyRefs  | String     | JSON Array. Optionally restricts the results to the specified customer strategy references.
| side                  | String([Side](#Side))      | Optionally restricts the results to the specified side.
| settledDateRange      | String([TimeRange](#TimeRange))     | Optionally restricts the results to be from/to the specified settled date. This date is inclusive, i.e. if an order was cleared on exactly this date (to the millisecond) then it will be included in the results. If the from is later than the to, no results will be returned.
| groupBy               | String([GroupBy](#GroupBy))     | How to aggregate the lines, if not supplied then the lowest level is returned, i.e. bet by bet This is only applicable to SETTLED BetStatus.
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
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listEventTypes"/>
## Betfair.listEventTypes
Returns a list of Event Types (i.e. Sports) associated with the markets selected by the MarketFilter.

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listMarketCatalogue"/>
## Betfair.listMarketCatalogue
Returns a list of information about published (ACTIVE/SUSPENDED) markets that does not change (or changes very rarely). You use listMarketCatalogue to retrieve the name of the market, the names of selections and other information about markets.  Market Data Request Limits apply to requests made to listMarketCatalogue. Please note: listMarketCatalogue does not return markets that are CLOSED.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Required: The Betfair Application Key.
| sessionToken    | credentials| Required: The Betfair Session Token.
| filter          | JSON([MarketFilter](#MarketFilter))       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| marketProjection| JSON([MarketProjection](#MarketProjection))      | JSON Array. The type and amount of data returned about the market.
| sort            | String([MarketSort](#MarketSort))       | The order of the results. Will default to RANK if not passed. RANK is an assigned priority that is determined by our Market Operations team in our back-end system. A result's overall rank is derived from the ranking given to the flowing attributes for the result. EventType, Competition, StartTime, MarketType, MarketId. For example, EventType is ranked by the most popular sports types and marketTypes are ranked in the following order: ODDS ASIAN LINE RANGE If all other dimensions of the result are equal, then the results are ranked in MarketId order.
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
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="listTimeRanges"/>
## Betfair.listTimeRanges
Method description

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))       | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| granularity | String([TimeGranularity](#TimeGranularity))     | Required: The granularity of time periods that correspond to markets selected by the market filter.

<a name="listVenues"/>
## Betfair.listVenues
Method description

| Field       | Type       | Description
|-------------|------------|----------
| appKey      | credentials| Required: The Betfair Application Key.
| sessionToken| credentials| Required: The Betfair Session Token.
| filter      | JSON([MarketFilter](#MarketFilter))    | Required: The filter to select desired markets. All markets that match the criteria in the filter are selected.
| locale      | String     | The language used for the response. If not specified, the default is returned.

<a name="placeOrders"/>
## Betfair.placeOrders
Method description

| Field              | Type       | Description
|--------------------|------------|----------
| appKey             | credentials| Required: The Betfair Application Key.
| sessionToken       | credentials| Required: The Betfair Session Token.
| marketId           | String     | Required: The market id these orders are to be placed on
| instructions       | JSON([PlaceInstruction](#PlaceInstruction))       | Required: The number of place instructions. The limit of place instructions per request is 200 for the UK/AUS Exchange and 50 for the Italian Exchange.
| customerRef        | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.   CustomerRef can contain: upper/lower chars, digits, chars : - . _ + * : ; ~ only. Please note: There is a time window associated with the de-duplication of duplicate submissions which is 60 seconds.
| marketVersion      | JSON([MarketVersion](#MarketVersion))        | Optional parameter allowing the client to specify which version of the market the orders should be placed on. If the current market version is higher than that sent on an order, the bet will be lapsed.
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
| instructions| JSON([CancelInstruction](#CancelInstruction))       | All instructions need to be on the same market. If not supplied all bets on the market (if market id is passed) are fully cancelled.  The limit of cancel instructions per request is 60
| customerRef | String     | Optional parameter allowing the client to pass a unique string (up to 32 chars) that is used to de-dupe mistaken re-submissions.

<a name="replaceOrders"/>
## Betfair.replaceOrders
This operation is logically a bulk cancel followed by a bulk place. The cancel is completed first then the new orders are placed. The new orders will be placed atomically in that they will all be placed or none will be placed. In the case where the new orders cannot be placed the cancellations will not be rolled back. See ReplaceInstruction.

| Field        | Type       | Description
|--------------|------------|----------
| appKey       | credentials| Required: The Betfair Application Key.
| sessionToken | credentials| Required: The Betfair Session Token.
| marketId     | String     | Required: The market id these orders are to be placed on
| instructions | JSON([ReplaceInstruction](#ReplaceInstruction))       | Required: The number of replace instructions. The limit of replace instructions per request is 60.
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
| instructions| JSON([UpdateInstruction](#UpdateInstruction))     | Required: The number of update instructions. The limit of update instructions per request is 60
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
| wallet      | String([Wallet](#Wallet))      | Name of the wallet in question. Please Note: To return the the Australian Exchange wallet balance you must specify AUSTRALIAN as the Wallet parameter.

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
| itemDateRange| JSON([TimeRange](#TimeRange))       | Return items with an itemDate within this date range. Both from and to date times are inclusive. If from is not specified then the oldest available items will be in range. If to is not specified then the latest items will be in range. nb. This itemDataRange is currently only applied when includeItem is set to ALL or not specified, else items are NOT bound by itemDate.
| includeItem  | String([IncludeItem](#IncludeItem))     | Which items to include, if not specified then defaults to ALL.
| wallet       | String([Wallet](#Wallet))     | 

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
| subscriptionStatus| String([SubscriptionStatus](#SubscriptionStatus))     | Optionally filter response by Subscription status of the token

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
| grantType   | String([GrantType](#GrantType))     | Required: Whether the vendor is using an authorisation code or a refresh token to get a session
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
<td align="left"><p>Restrict markets by event type associated with the market. (i.e., Football, Hockey, etc)</p></td>
</tr>
<tr class="even">
<td align="left"><p>eventIds</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by the event id associated with the market.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>competitionIds</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by the competitions associated with the market.</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketIds</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by the market id associated with the market.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>venues</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict markets by the venue associated withthe market. Currently only Horse Racing markets have venues.</p></td>
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
<td align="left"><p>JSON <a href="#MarketBettingType">MarketBettingType</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that match the betting type of the market (i.e. Odds, Asian Handicap Singles, or Asian Handicap Doubles</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCountries</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that are in the specifiedcountry or countries</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketTypeCodes</p></td>
<td align="left"><p>JSON Array</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that match the type of the market (i.e., MATCH_ODDS, HALF_TIME_SCORE) . You should use this instead of relying on the market name as the market type codes are the same in all locales</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketStartTime</p></td>
<td align="left"><p><a href="#TimeRange">TimeRange</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets with a market start time before or after the specified date</p></td>
</tr>
<tr class="odd">
<td align="left"><p>withOrders</p></td>
<td align="left"><p>JSON <a href="#OrderStatus">OrderStatus</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Restrict to markets that I have one or more orders in these status.</p></td>
</tr>
</tbody>
</table>

<a name="MarketCatalogue"/>
## MarketCatalogue 

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
<td align="left"><p>marketId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The unique identifier for the market. <span>MarketId's are prefixed with '1.' or '2.' 1. =3D UK Exchange 2. =3D AUS Exchange.</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>marketName</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The name of the market</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketStartTime</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The time this market starts at, only returnedwhen the MARKET_START_TIM E enum is passed in the marketProjections</p></td>
</tr>
<tr class="even">
<td align="left"><p>description</p></td>
<td align="left"><p><a href="#MarketDescription">MarketDescription</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Details about the market</p></td>
</tr>
<tr class="odd">
<td align="left"><p>totalMatched</p></td>
<td align="left"><p>Double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The total amount of money matched =on the market</p></td>
</tr>
<tr class="even">
<td align="left"><p>runners</p></td>
<td align="left"><p>List <a href="#RunnerCatalog">RunnerCatalog</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The runners (selections) contained in the market</p></td>
</tr>
<tr class="odd">
<td align="left"><p>eventType</p></td>
<td align="left"><p><a href="#EventType">EventType</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The Event Type the market is contained within=</p></td>
</tr>
<tr class="even">
<td align="left"><p>competition</p></td>
<td align="left"><p><a href="#Competition">Competition</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The competition the market is contained within. Usually only applies to Football competitions</p></td>
</tr>
<tr class="odd">
<td align="left"><p>event</p></td>
<td align="left"><p><a href="#Event">Event</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The event the market is contained within</p>
<pre><code>=/td</code></pre></td>
</tr>
</tbody>
</table>

<a name="MarketBook"/>
## MarketBook 

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
<td align="left"><p>marketId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The unique identifier for the market. MarketId's are prefixed with '1.' or '2.' 1. =3D UK Exchange 2. =3D AUS Exchange.</p></td>
</tr>
<tr class="even">
<td align="left"><p>isMarketDataDelaye d</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>True if the data returned by listMarketBook will be delayed. The data may be delayed because you are not logged in with a funded account or you are using an Application Key that does not allow upto date data.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#MarketStatus">MarketStatus</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The status of the market, for example OPEN, SUSPENDED, CLOSED (settled), etc.</p></td>
</tr>
<tr class="even">
<td align="left"><p>betDelay</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The number of seconds an order is held until it is submitted into the market. Orders are usually delayed when the marketis in-play</p></td>
</tr>
<tr class="odd">
<td align="left"><p>bspReconciled</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>True if the market starting price has been reconciled</p></td>
</tr>
<tr class="even">
<td align="left"><p>complete</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>If false, runners may be added to the market</p></td>
</tr>
<tr class="odd">
<td align="left"><p>inplay</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>True if the market is currently in play</p></td>
</tr>
<tr class="even">
<td align="left"><p>numberOfWinners</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The number of selections that could be settled as winners</p></td>
</tr>
<tr class="odd">
<td align="left"><p>numberOfRunners</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The number of runners in the market</p></td>
</tr>
<tr class="even">
<td align="left"><p>numberOfActiveRunn ers</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The number of runners that are currently active. An active runner is a selection available for betting</p></td>
</tr>
<tr class="odd">
<td align="left"><p>lastMatchTime</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The most recent time an order was executed</p></td>
</tr>
<tr class="even">
<td align="left"><p>totalMatched</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The total amount matched</p></td>
</tr>
<tr class="odd">
<td align="left"><p>totalAvailable</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The total amount of orders that remain unmatched</p></td>
</tr>
<tr class="even">
<td align="left"><p>crossMatching</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>True if cross matching is enabled for this market.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>runnersVoidable</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>True if runners in the market can be voided</p></td>
</tr>
<tr class="even">
<td align="left"><p>version</p></td>
<td align="left"><p>long</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The version of the market. The version increments whenever the market status changes, for example, turning in-play, or suspended when a goal is scored.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>runners</p></td>
<td align="left"><p>List <a href="#Runner">Runner</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Information about the runners (selections) inthe market.</p></td>
</tr>
</tbody>
</table>

<a name="RunnerCatalog"/>
## RunnerCatalog 

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
<td align="left"><p>selectionId</p></td>
<td align="left"><p>long</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The unique id for the selection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>runnerName</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The name of the runner</p></td>
</tr>
<tr class="odd">
<td align="left"><p>handicap</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The handicap</p></td>
</tr>
<tr class="even">
<td align="left"><p>sortPriority</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The sort priority of this runner</p></td>
</tr>
<tr class="odd">
<td align="left"><p>metadata</p></td>
<td align="left"><p>Map String,Stri ng</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Metadata associated with the runner.  For a description of this data for Horse Racing, please see <a href="#Runner Metadata Description">Runner Metadata Description</a></p></td>
</tr>
</tbody>
</table>

<a name="Runner"/>
## Runner 

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
<td align="left"><p>selectionId</p></td>
<td align="left"><p>long</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The unique id of the runner (selection)</p></td>
</tr>
<tr class="even">
<td align="left"><p>handicap</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The handicap.  Enter the specific handicap value (returned by RUNNER in <a href="#listMaketBook)">listMaketBook)</a> if the market is an Asian handicap market.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#RunnerStatus">RunnerStatus</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The status of the selection (i.e., ACTIVE, REMOVED, WINNER, PLACED, LOSER, HIDDEN) Runner status information is available for 90 days following market settlement.</p></td>
</tr>
<tr class="even">
<td align="left"><p>adjustmentFactor</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The adjustment factor applied if the selection is removed</p></td>
</tr>
<tr class="odd">
<td align="left"><p>lastPriceTraded</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The price of the most recent bet matched on this selection</p></td>
</tr>
<tr class="even">
<td align="left"><p>totalMatched</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The total amount matched on this runner</p></td>
</tr>
<tr class="odd">
<td align="left"><p>removalDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>If date and time the runner was removed</p></td>
</tr>
<tr class="even">
<td align="left"><p>sp</p></td>
<td align="left"><p><a href="#StartingPrices">StartingPrices</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The BSP related prices for this runner</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ex</p></td>
<td align="left"><p><a href="#ExchangePrices">ExchangePrices</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The Exchange prices available for this runner=</p></td>
</tr>
<tr class="even">
<td align="left"><p>orders</p></td>
<td align="left"><p>List <a href="#Order">Order</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>List of orders in the market</p></td>
</tr>
<tr class="odd">
<td align="left"><p>matches</p></td>
<td align="left"><p>List <a href="#Match">Match</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>List of matches (i.e, orders that have been fully or partially executed)</p></td>
</tr>
<tr class="even">
<td align="left"><p>matchesByStrategy</p></td>
<td align="left"><p>Map String,<a href="#Mat ches">Mat ches</a> =</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>List of matches for each strategy, ordered by matched data</p></td>
</tr>
</tbody>
</table>

<a name="StartingPrices"/>
## StartingPrices 

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
<td align="left"><p>nearPrice</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>What the starting price would be if the market was reconciled now taking into account the SP bets as well as unmatched exchange bets on the same selection in the exchange. This data is cached andupdate every 60 seconds. <strong>Please note:</strong><span>Type Double may contain numbers, INF, -INF, and NaN.</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>farPrice</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>What the starting price would be if the market was reconciled now taking into account only the currently place SP bets. The Far Price is not as complicated but not as accurate and only accounts for money on the exchange at SP. This data is cached and updated every 60 seconds. <strong>Please note:</strong><span> &lt;/sp an&gt;<span>Type Double may contain numbers, INF, -INF, and NaN.</span></p></td>
</tr>
<tr class="odd">
<td align="left"><p>backStakeTaken</p></td>
<td align="left"><p>List <a href="#PriceSize">PriceSize</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The total amount of back bets matched at the actual Betfair Starting Price.</p></td>
</tr>
<tr class="even">
<td align="left"><p>layLiabilityTaken</p></td>
<td align="left"><p>List <a href="#PriceSize">PriceSize</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The lay amount matched at the actual Betfair Starting Price.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>actualSP</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The final BSP price for this runner. Only available for a BSP market that has been reconciled.</p></td>
</tr>
</tbody>
</table>

<a name="ExchangePrices"/>
## ExchangePrices 

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
<td align="left"><p>availableToBack</p></td>
<td align="left"><p>List <a href="#PriceSize">PriceSize</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="even">
<td align="left"><p>availableToLay</p></td>
<td align="left"><p>List <a href="#PriceSize">PriceSize</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="odd">
<td align="left"><p>tradedVolume</p></td>
<td align="left"><p>List <a href="#PriceSize">PriceSize</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
</tbody>
</table>

<a name="Event"/>
## Event 

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
<td align="left"><p>id</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The unique id for the event</p></td>
</tr>
<tr class="even">
<td align="left"><p>name</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The name of the event</p></td>
</tr>
<tr class="odd">
<td align="left"><p>countryCode</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The ISO-2 code for the event.  A list ofISO-2 codes is available via</p></td>
</tr>
<tr class="even">
<td align="left"><p>timezone</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>This is</p></td>
</tr>
<tr class="odd">
<td align="left"><p>venue</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>venue</p></td>
</tr>
<tr class="even">
<td align="left"><p>openDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The scheduled start date and time of the event. <span>This is </span><span>Europ e/London (GMT) by default</span></p></td>
</tr>
</tbody>
</table>

<a name="EventResult"/>
## EventResult 

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
<td align="left"><p>event</p></td>
<td align="left"><p><a href="#Event">Event</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Event</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCount</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Count of markets associated with this event</p></td>
</tr>
</tbody>
</table>

<a name="Competition"/>
## Competition 

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
<td align="left"><p>id</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>id</p></td>
</tr>
<tr class="even">
<td align="left"><p>name</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>name</p></td>
</tr>
</tbody>
</table>

<a name="CompetitionResult"/>
## CompetitionResult 

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
<td align="left"><p>competition</p></td>
<td align="left"><p><a href="#Competition">Competition</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Competition</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCount</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Count of markets associated with this competition</p></td>
</tr>
<tr class="odd">
<td align="left"><p>competitionRegion</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Region in which this competition is happening=</p></td>
</tr>
</tbody>
</table>

<a name="EventType"/>
## EventType 

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
<td align="left"><p>id</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>id</p></td>
</tr>
<tr class="even">
<td align="left"><p>name</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>name</p></td>
</tr>
</tbody>
</table>

<a name="EventTypeResult"/>
## EventTypeResult 

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
<td align="left"><p>eventType</p></td>
<td align="left"><p><a href="#EventType">EventType</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The ID identifying the Event Type</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCount</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Count of markets associated with this eventType</p></td>
</tr>
</tbody>
</table>

<a name="MarketTypeResult"/>
## MarketTypeResult 

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
<td align="left"><p>marketType</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Market Type</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCount</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Count of markets associated with this marketType</p></td>
</tr>
</tbody>
</table>

<a name="CountryCodeResult"/>
## CountryCodeResult 

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
<td align="left"><p>countryCode</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The ISO-2 code for the event.  A list ofISO-2 codes is available via</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCount</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Count of markets associated with this CountryCode</p></td>
</tr>
</tbody>
</table>

<a name="VenueResult"/>
## VenueResult 

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
<td align="left"><p>venue</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Venue</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCount</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Count of markets associated with this Venue</p></td>
</tr>
</tbody>
</table>

<a name="TimeRange"/>
## TimeRange 

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
<td align="left"><p>from</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>from</p></td>
</tr>
<tr class="even">
<td align="left"><p>to</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>to</p></td>
</tr>
</tbody>
</table>

<a name="TimeRangeResult"/>
## TimeRangeResult 

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
<td align="left"><p>timeRange</p></td>
<td align="left"><p><a href="#TimeRange">TimeRange</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>TimeRange</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketCount</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Count of markets associated with this TimeRange</p></td>
</tr>
</tbody>
</table>

<a name="Order"/>
## Order 

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
<td align="left"><p>No</p></td>
</tr>
<tr class="even">
<td align="left"><p>orderType</p></td>
<td align="left"><p><a href="#OrderType">OrderType</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>BSP Order type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#OrderStatus">OrderStatus</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Either EXECUTABLE (an unmatched amount remains) or EXECUTION_COMPLET E (no unmatched amount remains).</p></td>
</tr>
<tr class="even">
<td align="left"><p>persistenceType</p></td>
<td align="left"><p><a href="#PersistenceType">PersistenceType</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>What to do with the order at turn-in-play</p>
<p>=</p></td>
</tr>
<tr class="odd">
<td align="left"><p>side</p></td>
<td align="left"><p><a href="#Side">Side</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Indicates if the bet is a Back or a LAY</p></td>
</tr>
<tr class="even">
<td align="left"><p>price</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The price of the bet.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>size</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The size of the bet.</p></td>
</tr>
<tr class="even">
<td align="left"><p>bspLiability</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Not to be confused with size. This is the liability of a given BSP bet.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>placedDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The date, to the second, the bet was placed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>avgPriceMatched</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The average price matched at. Voided match fragments are removed from this average calculation. For MARKET_ON_CLOSE BSP bets this reports the matched SP price following the SP reconciliation process.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>sizeMatched</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that was matched.</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeRemaining</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that is unmatched.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>sizeLapsed</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that was lapsed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeCancelled</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that was cancelled.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>sizeVoided</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that was voided.</p></td>
</tr>
</tbody>
</table>

<a name="Match"/>
## Match 

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
<td align="left"><p>No</p></td>
<td align="left"><p>Only present if no rollup</p></td>
</tr>
<tr class="even">
<td align="left"><p>matchId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Only present if no rollup</p></td>
</tr>
<tr class="odd">
<td align="left"><p>side</p></td>
<td align="left"><p><a href="#Side">Side</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Indicates if the bet is a Back or a LAY</p></td>
</tr>
<tr class="even">
<td align="left"><p>price</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Either actual match price or avg match price depending on rollup.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>size</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Size matched at in this fragment, or at this price or avg price depending on rollup</p></td>
</tr>
<tr class="even">
<td align="left"><p>matchDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Only present if no rollup</p></td>
</tr>
</tbody>
</table>

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
<th align="left"><div>
<p>Field name</p>
</div></th>
<th align="left"><div>
<p>Type</p>
</div></th>
<th align="left"><div>
<p>Required</p>
</div></th>
<th align="left"><div>
<p>Description</p>
</div></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>version</p></td>
<td align="left"><p>long</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>A non-monotonically increasing number indicating market changes</p></td>
</tr>
</tbody>
</table>

<a name="MarketDescription"/>
## MarketDescription 

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
<td align="left"><p>persistenceEnabled</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>If 'true' the market supports 'Keep' bets if the market is to be turned in-play</p></td>
</tr>
<tr class="even">
<td align="left"><p>bspMarket</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>If 'true' the market supports Betfair SP betting=</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketTime</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The market start time</p></td>
</tr>
<tr class="even">
<td align="left"><p>suspendTime</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The market suspend time</p></td>
</tr>
<tr class="odd">
<td align="left"><p>settleTime</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>settled time</p></td>
</tr>
<tr class="even">
<td align="left"><p>bettingType</p></td>
<td align="left"><p><a href="#MarketBettingType">MarketBettingType</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>See <a href="#MarketBettingType">MarketBettingType</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p>turnInPlayEnabled</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>If 'true' the market is set to turn in-play</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketType</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Market base type</p></td>
</tr>
<tr class="odd">
<td align="left"><p>regulator</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The market regulator</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketBaseRate</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The commission rate applicable to the market</p></td>
</tr>
<tr class="odd">
<td align="left"><p>discountAllowed</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Indicates whether or not the user's discount rat=e is taken into account on this market. If =E2=80=98false=E2= 80=99 all user=s will be charged the same commission rate, regardless of discount rate.</p></td>
</tr>
<tr class="even">
<td align="left"><p>wallet</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The wallet to which the market belongs (UK/AUS) =/td&amp;g t;</p></td>
</tr>
<tr class="odd">
<td align="left"><p>rules</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The market rules.</p></td>
</tr>
<tr class="even">
<td align="left"><p>rulesHasDate</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="odd">
<td align="left"><p>eachWayDivisor</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The divisor is returned for the ma=rketType EACH_WAY only and refers to the f<span>raction of the win odds at =which the place portion of an <a href="#each way bet">each way bet</a> is settled</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>clarifications</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Any additional information regarding the market =/td</p></td>
</tr>
</tbody>
</table>

<a name="MarketRates"/>
## MarketRates 

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
<td align="left"><p>marketBaseRate</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>marketBaseRate</p></td>
</tr>
<tr class="even">
<td align="left"><p>discountAllowed</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>discountAllowed</p></td>
</tr>
</tbody>
</table>

<a name="MarketLicence"/>
## MarketLicence 

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
<td align="left"><p>wallet</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The wallet from which funds will be taken when betting on this market</p></td>
</tr>
<tr class="even">
<td align="left"><p>rules</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The rules for this market</p></td>
</tr>
<tr class="odd">
<td align="left"><p>rulesHasDate</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The market's start date and time are relevantto the rules.</p></td>
</tr>
<tr class="even">
<td align="left"><p>clarifications</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Clarifications to the rules for the market</p></td>
</tr>
</tbody>
</table>

<a name="MarketLineRangeInfo"/>
## MarketLineRangeInfo 

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
<td align="left"><p>maxUnitValue</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>maxPrice</p></td>
</tr>
<tr class="even">
<td align="left"><p>minUnitValue</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>minPrice</p></td>
</tr>
<tr class="odd">
<td align="left"><p>interval</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>interval</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketUnit</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>unit</p></td>
</tr>
</tbody>
</table>

<a name="PriceSize"/>
## PriceSize 

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
<td align="left"><p>price</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The price available</p></td>
</tr>
<tr class="even">
<td align="left"><p>size</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The stake available</p></td>
</tr>
</tbody>
</table>

<a name="ClearedOrderSummary"/>
## ClearedOrderSummary 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><div>
<p>Field name</p>
</div></th>
<th align="left"><div>
<p>Type</p>
</div></th>
<th align="left"><div>
<p>Required</p>
</div></th>
<th align="left"><div>
<p>Description</p>
</div></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>eventTypeId</p></td>
<td align="left"><p><a href="#EventTypeId">EventTypeId</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The id of the event type bet on. Available atEVENT_TYPE groupBy level or lower.</p></td>
</tr>
<tr class="even">
<td align="left"><p>eventId</p></td>
<td align="left"><p><a href="#EventId">EventId</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The id of the event bet on. Available at EVENT groupBy level or lower.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketId</p></td>
<td align="left"><p><a href="#MarketId">MarketId</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The id of the market bet on. Available at MARKET groupBy level or lower.</p></td>
</tr>
<tr class="even">
<td align="left"><p>selectionId</p></td>
<td align="left"><p><a href="#SelectionId">SelectionId</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The id of the selection bet on. Available at RUNNER groupBy level or lower.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>handicap</p></td>
<td align="left"><p><a href="#Handicap">Handicap</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p><span>The handicap.  Enter the specific handicap value (returned by RUNNER in </span><a href="#listMaketB ook)<span>">listMaketB ook)<span></a> if the marketis an Asian handicap market.</span> Available at MARKET groupBy level or lower.</p></td>
</tr>
<tr class="even">
<td align="left"><p>betId</p></td>
<td align="left"></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The id of the bet. Available at BET groupBy level.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>placedDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The date the bet order was placed by the customer. Only available at BET groupBy level.</p></td>
</tr>
<tr class="even">
<td align="left"><p>persistenceType</p></td>
<td align="left"><p><a href="#PersistenceType">PersistenceType</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The turn in play persistence state of the order at bet placement time. This field will be empty or omitted on true SP bets. Only available at BET groupBy level.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>orderType</p></td>
<td align="left"><p><a href="#OrderType">OrderType</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The type of bet (e.g standard limited-liability Exchange bet (LIMIT), a standard BSP bet (MARKET_ON_CLOSE ), or a minimum-accepted-p rice BSP bet (LIMIT_ON_CLOSE) ). If the bet has a OrderType of MARKET_ON_CLOSE and a persistenceType of MARKET_ON_CLOSE then it is a bet which has transitioned from LIMIT to MARKET_ON_CLOSE. Only available at BET groupBy level.</p></td>
</tr>
<tr class="even">
<td align="left"><p>side</p></td>
<td align="left"><p><a href="#Side">Side</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Whether the bet was a back or lay bet. Available at SIDE groupBy level or lower.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>itemDescription</p></td>
<td align="left"><p><a href="#ItemDescription">ItemDescription</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>A container for all the ancillary data and localised text valid for this Item</p></td>
</tr>
<tr class="even">
<td align="left"><p>betOutcome</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p><span>The settlement outcome of th=e bet. Tri-state (WIN/LOSE/PLACE) to account for Each Way bets where the pl=ace portion of the bet won but the win portion lost. The profit/loss amount=in this case could be positive or negative depending on the price matched =at. Only available at BET groupBy level.</span></p></td>
</tr>
<tr class="odd">
<td align="left"><p>priceRequested</p></td>
<td align="left"><p><a href="#Price">Price</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The average requested price across all settled bet orders under this Item. Available at SIDE groupBy level or lower.</p>
<p>=</p></td>
</tr>
<tr class="even">
<td align="left"><p>settledDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The date and time the bet order was settled by Betfair. Available at SIDE groupBy level or lower.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>lastMatchedDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p><span>The date and time the last b=et order was matched by Betfair. Available on Settled orders only.</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>betCount</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The number of actual bets within this grouping (will be 1 for BET groupBy)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>commission</p></td>
<td align="left"><p><a href="#Size">Size</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The cumulative amount of commission paid by t= he customer across all bets under this Item, in the account currency. Avail= able at EXCHANGE, EVENT_TYPE, EVENT and MARKET level groupings only.</p></td>
</tr>
<tr class="even">
<td align="left"><p>priceMatched</p></td>
<td align="left"><p><a href="#Price">Price</a> | N</p></td>
<td align="left"><p>o | T</p></td>
<td align="left"><p>he average matched price across all settled = bets or bet fragments under this Item. Available at SIDE groupBy level or l= ower.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>priceReduced</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>If true, then the matched price was affected by a reduction factor due to of a runner removal from this Horse Racing market.</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeSettled</p></td>
<td align="left"><p><a href="#Size">Size</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The cumulative bet size that was settled as matched or voided under this Item, in the account currency. Available at SIDE groupBy level or lower.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>profit</p></td>
<td align="left"><p><a href="#Size">Size</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The profit or loss (negative profit) gained on this line, in the account currency</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeCancelled</p></td>
<td align="left"><p><a href="#Size">Size</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The amount of the bet that was available to be matched, before cancellation or lapsing, in the account currency</p></td>
</tr>
<tr class="odd">
<td align="left"><p>customerOrderRef</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The order reference defined by the customer for the bet order</p></td>
</tr>
<tr class="even">
<td align="left"><p>customerStrategyRe f</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The strategy reference defined by the customer for the bet order</p></td>
</tr>
</tbody>
</table>

<a name="ClearedOrderSummaryReport"/>
## ClearedOrderSummaryReport 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><div>
<p>Field name</p>
</div></th>
<th align="left"><div>
<p>Type</p>
</div></th>
<th align="left"><div>
<p>Required</p>
</div></th>
<th align="left"><div>
<p>Description</p>
</div></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>clearedOrders</p></td>
<td align="left"><p>List <a href="#ClearedOr derSummary">ClearedOr derSummary</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The list of cleared orders returned by your query. This will be a valid list (i.e. empty or non-empty but never 'null').=</p></td>
</tr>
<tr class="even">
<td align="left"><p>moreAvailable</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Indicates whether there are further items beyond this page. Note that underlying data is highly time-dependent and the subsequent search orders query might return</p></td>
</tr>
</tbody>
</table>

<a name="ItemDescription"/>
## ItemDescription 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><div>
<p>Field name</p>
</div></th>
<th align="left"><div>
<p>Type</p>
</div></th>
<th align="left"><div>
<p>Required</p>
</div></th>
<th align="left"><div>
<p>Description</p>
</div></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>eventTypeDesc</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The event type name, translated into the requested locale. Available at EVENT_TYPE groupBy or lower.</p></td>
</tr>
<tr class="even">
<td align="left"><p>eventDesc</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The eventName, or openDate + venue, translated into the requested locale. Available at EVENT groupBy or lower.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketDesc</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The market name or racing market type (&quot;Win&quot;,&quot;To Be Placed (2 places)&quot;, &quot;To Be Placed (5 places)&quot; etc) translated into the requested locale. Available at MARKET groupBy or lower.</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketType</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p><span>The market type e.g. MATCH_O=DDS, PLACE, WIN etc.</span></p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketStartTime</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The start time of the market (in ISO-8601 format, not translated). Available at MARKET groupBy or lower.</p></td>
</tr>
<tr class="even">
<td align="left"><p>runnerDesc</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The runner name, maybe including the handicap, translated into the requested locale. Available at BET groupBy.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>numberOfWinners</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The number of winners on a market. Available at BET groupBy.</p></td>
</tr>
<tr class="even">
<td align="left"><p>eachWayDivisor</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p><span>The divisor is returned for =the marketType EACH_WAY only and refers to the f</span><span>ract ion of the=win odds at which the place portion of an <a href="#each way bet">each way bet</a> is settled</span></p></td>
</tr>
</tbody>
</table>

<a name="CurrentOrderSummaryReport"/>
## CurrentOrderSummaryReport 

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
<td align="left"><p>currentOrders</p></td>
<td align="left"><p>List <a href="#CurrentOrderSumma ry">CurrentOrderSumma ry</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The list of current orders returned by your query. This will be a valid list (i.e. empty or non-empty but never 'null').=</p></td>
</tr>
<tr class="even">
<td align="left"><p>moreAvailable</p></td>
<td align="left"><p>boolean</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Indicates whether there are further items beyond this page. Note that underlying data is highly time-dependent and the subsequent search orders query might return</p></td>
</tr>
</tbody>
</table>

<a name="CurrentOrderSummary"/>
## CurrentOrderSummary 

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
<td align="left"><p>The bet ID of the original place order.</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The market id the order is for.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>selectionId</p></td>
<td align="left"><p>long</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The selection id the order is for.</p></td>
</tr>
<tr class="even">
<td align="left"><p>handicap</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p><span>The handicap associated with the runnerin case of Asian handicap markets, null otherwise.</span></p></td>
</tr>
<tr class="odd">
<td align="left"><p>priceSize</p></td>
<td align="left"><p><a href="#PriceSize">PriceSize</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The price and size of the bet.</p></td>
</tr>
<tr class="even">
<td align="left"><p>bspLiability</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Not to be confused with size. This is the liability of a given BSP bet.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>side</p></td>
<td align="left"><p><a href="#Side">Side</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>BACK/LAY</p></td>
</tr>
<tr class="even">
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#OrderStatus">OrderStatus</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Either EXECUTABLE (an unmatched amount remains) or EXECUTION_COMPLET E (no unmatched amount remains).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>persistenceType</p></td>
<td align="left"><p><a href="#PersistenceType">PersistenceType</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>What to do with the order at turn-in-play.</p></td>
</tr>
<tr class="even">
<td align="left"><p>orderType</p></td>
<td align="left"><p><a href="#OrderType">OrderType</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>BSP Order type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>placedDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The date, to the second, the bet was placed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>matchedDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"></td>
<td align="left"><p>The date, to the second, of the la=st matched bet fragment (where applicable)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>averagePriceMatche d</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The average price matched at. Voided match fragments are removed from this average calculation. <span>The price is automatically adjusted in the event of non runners being declared with applicable reduction factors.</span></p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeMatched</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that was matched.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>sizeRemaining</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that is unmatched.</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeLapsed</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that was lapsed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>sizeCancelled</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that was cancelled.</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeVoided</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The current amount of this bet that was voided.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>regulatorAuthCode</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The regulator authorisation code.</p></td>
</tr>
<tr class="even">
<td align="left"><p>regulatorCode</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The regulator Code.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>customerOrderRef</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The order reference defined by the customer for this bet</p></td>
</tr>
<tr class="even">
<td align="left"><p>customerStrategyRe f</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The strategy reference defined by the customer for this bet</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><a href="#OrderType">OrderType</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>No</p></td>
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
<td align="left"><p><a href="#Side">Side</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>Back or Lay</p></td>
</tr>
<tr class="odd">
<td align="left"><p>limitOrder</p></td>
<td align="left"><p><a href="#LimitOrder">LimitOrder</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>A simple exchange bet for immediate execution</p></td>
</tr>
<tr class="even">
<td align="left"><p>limitOnCloseOrder</p></td>
<td align="left"><p><a href="#LimitOnCloseOrder">LimitOnCloseOrder</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Bets are matched if, and only if, the returned s=tarting price is better than a specified price. In the case of back bets, L=OC bets are matched if the calculated starting price is greater than the sp=ecified price. In the case of lay bets, LOC bets are matched if the startin=g price is less than the specified price. If the specified limit is equal t=o the starting price, then it may be matched, partially matched, or may not=be matched at all, depending on how much is needed to balance all bets aga=inst each other (MOC, LOC and normal exchange bets)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>marketOnCloseOrder</p></td>
<td align="left"><p><a href="#MarketOnCloseOrde r">MarketOnCloseOrde r</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Bets remain unmatched until the market is reconc=iled. They are matched and settled at a price that is representative of the=market at the point the market is turned in-play. The market is reconciled=to find a starting price and MOC bets are settled at whatever starting pri=ce is returned. MOC bets are always matched and settled, unless a starting =price is not available for the selection. Market on Close bets can only be =placed before the starting price is determined</p></td>
</tr>
<tr class="even">
<td align="left"><p>customerOrderRef</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>&amp;nbs=p;</p></td>
<td align="left"><p>An optional reference customers ca=n set to identify instructions.. No validation will be done on uniqueness a=nd the string is limited <br />
ters. If an empty string is provided it will be treated as null.</p></td>
</tr>
</tbody>
</table>

<a name="PlaceExecutionReport"/>
## PlaceExecutionReport 

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
<td align="left"><p>customerRef</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Echo of the customerRef if passed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#ExecutionReportSt atus">ExecutionReportSt atus</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="odd">
<td align="left"><p>errorCode</p></td>
<td align="left"><p><a href="#ExecutionReportEr rorCode">ExecutionReportEr rorCode</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Echo of marketId passed</p></td>
</tr>
<tr class="odd">
<td align="left"><p>instructionReports</p></td>
<td align="left"><p>List <a href="#PlaceInstructionR eport">PlaceInstructionR eport</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>The size of the bet. <strong>Please note</strong>: For market type EACH_WAY. The total stake =3D size x 2</p></td>
</tr>
<tr class="even">
<td align="left"><p>price</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The limit price</p></td>
</tr>
<tr class="odd">
<td align="left"><p>persistenceType</p></td>
<td align="left"><p><a href="#PersistenceType">PersistenceType</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>What to do with the order at turn-in-play</p>
<p>=</p></td>
</tr>
<tr class="even">
<td align="left"><p>timeInForce</p></td>
<td align="left"><p><a href="#TimeInForce">TimeInForce</a>=</p></td>
<td align="left"><p>No</p></td>
<td align="left">The type of TimeInForce value to use. This value takes precedence over any PersistenceType value chosen. <br />
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

<a name="PlaceInstructionReport"/>
## PlaceInstructionReport 

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
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#InstructionReport Status">InstructionReport Status</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>whether the command succeeded or failed</p></td>
</tr>
<tr class="even">
<td align="left"><p>errorCode</p></td>
<td align="left"><p><a href="#InstructionReport ErrorCode">InstructionReport ErrorCode</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>cause of failure, or null if command succeeds=</p></td>
</tr>
<tr class="odd">
<td align="left"><p>orderStatus</p></td>
<td align="left"></td>
<td align="left"><p>No</p></td>
<td align="left">The status of the order, if theinstruction succeeded. <br />
</td>
</tr>
<tr class="even">
<td align="left"><p>instruction</p></td>
<td align="left"><p>[PlaceInstruction] ()</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The instruction that was requested</p></td>
</tr>
<tr class="odd">
<td align="left"><p>betId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The bet ID of the new bet. Will be null on failure or if order was placed asynchronously.</p></td>
</tr>
<tr class="even">
<td align="left"><p>placedDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Will be null if order was placed asynchronously</p></td>
</tr>
<tr class="odd">
<td align="left"><p>averagePriceMatche d</p></td>
<td align="left"></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Will be null if order was placed asynchronously</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeMatched</p></td>
<td align="left"></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Will be null if order was placed asynchronously</p></td>
</tr>
</tbody>
</table>

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

<a name="CancelExecutionReport"/>
## CancelExecutionReport 

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
<td align="left"><p>customerRef</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Echo of the customerRef if passed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#ExecutionReportSt atus">ExecutionReportSt atus</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="odd">
<td align="left"><p>errorCode</p></td>
<td align="left"><p><a href="#ExecutionReportEr rorCode">ExecutionReportEr rorCode</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Echo of marketId passed</p></td>
</tr>
<tr class="odd">
<td align="left"><p>instructionReports</p></td>
<td align="left"><p>List <a href="#CancelInstruction Report">CancelInstruction Report</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
</tbody>
</table>

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

<a name="ReplaceExecutionReport"/>
## ReplaceExecutionReport 

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
<td align="left"><p>customerRef</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Echo of the customerRef if passed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#ExecutionReportSt atus">ExecutionReportSt atus</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="odd">
<td align="left"><p>errorCode</p></td>
<td align="left"><p><a href="#ExecutionReportEr rorCode">ExecutionReportEr rorCode</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Echo of marketId passed</p></td>
</tr>
<tr class="odd">
<td align="left"><p>instructionReports</p></td>
<td align="left"><p>List <a href="#ReplaceInstructio nReport">ReplaceInstructio nReport</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
</tbody>
</table>

<a name="ReplaceInstructionReport"/>
## ReplaceInstructionReport 

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
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#InstructionReport Status">InstructionReport Status</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>whether the command succeeded or failed</p></td>
</tr>
<tr class="even">
<td align="left"><p>errorCode</p></td>
<td align="left"><p><a href="#InstructionReport ErrorCode">InstructionReport ErrorCode</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>cause of failure, or null if command succeeds=</p></td>
</tr>
<tr class="odd">
<td align="left"><p>cancelInstructionR eport</p></td>
<td align="left"><p><a href="#CancelInstruction Report">CancelInstruction Report</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Cancelation report for the original order</p>
<p>=</p></td>
</tr>
<tr class="even">
<td align="left"><p>placeInstructionRe port</p></td>
<td align="left"><p><a href="#PlaceInstructionR eport">PlaceInstructionR eport</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Placement report for the new order</p></td>
</tr>
</tbody>
</table>

<a name="CancelInstructionReport"/>
## CancelInstructionReport 

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
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#InstructionReport Status">InstructionReport Status</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>whether the command succeeded or failed</p></td>
</tr>
<tr class="even">
<td align="left"><p>errorCode</p></td>
<td align="left"><p><a href="#InstructionReport ErrorCode">InstructionReport ErrorCode</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>cause of failure, or null if command succeeds=</p></td>
</tr>
<tr class="odd">
<td align="left"><p>instruction</p></td>
<td align="left"><p><a href="#CancelInstruction">CancelInstruction</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The instruction that was requested</p></td>
</tr>
<tr class="even">
<td align="left"><p>sizeCancelled</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="odd">
<td align="left"><p>cancelledDate</p></td>
<td align="left"><p>Date</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><a href="#PersistenceType">PersistenceType</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The new persistence type to update this bet to</p></td>
</tr>
</tbody>
</table>

<a name="UpdateExecutionReport"/>
## UpdateExecutionReport 

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
<td align="left"><p>customerRef</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Echo of the customerRef if passed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#ExecutionReportSt atus">ExecutionReportSt atus</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="odd">
<td align="left"><p>errorCode</p></td>
<td align="left"><p><a href="#ExecutionReportEr rorCode">ExecutionReportEr rorCode</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
<tr class="even">
<td align="left"><p>marketId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Echo of marketId passed</p></td>
</tr>
<tr class="odd">
<td align="left"><p>instructionReports</p></td>
<td align="left"><p>List <a href="#UpdateInstruction Report">UpdateInstruction Report</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>No</p></td>
</tr>
</tbody>
</table>

<a name="UpdateInstructionReport"/>
## UpdateInstructionReport 

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
<td align="left"><p>status</p></td>
<td align="left"><p><a href="#InstructionReport Status">InstructionReport Status</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>whether the command succeeded or failed</p></td>
</tr>
<tr class="even">
<td align="left"><p>errorCode</p></td>
<td align="left"><p><a href="#InstructionReport ErrorCode">InstructionReport ErrorCode</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>cause of failure, or null if command succeeds=</p></td>
</tr>
<tr class="odd">
<td align="left"><p>instruction</p></td>
<td align="left"><p><a href="#UpdateInstruction">UpdateInstruction</a></p></td>
<td align="left"><p>Yes</p></td>
<td align="left"><p>The instruction that was requested</p></td>
</tr>
</tbody>
</table>

<a name="ExBestOffersOverrides"/>
## ExBestOffersOverrides 

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
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The maximum number of prices to return on each side for each runner. If unspecified defaults to 3. Maximum returned price depth returned is 10.</p></td>
</tr>
<tr class="even">
<td align="left"><p>rollupModel</p></td>
<td align="left"><p><a href="#RollupModel">RollupModel</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The model to use when rolling up available sizes. If unspecified defaults to STAKE rollup model with rollupLimit of minimum stake in the specified currency.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>rollupLimit</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The volume limit to use when rolling up returned sizes. The exact definition of the limit depends on the rollupModel. Ifno limit is provided it will use minimum stake as default the value. Ignored if no rollup model is specified.</p></td>
</tr>
<tr class="even">
<td align="left"><p>rollupLiabilityThr eshold</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Only applicable when rollupModel is MANAGED_LIABILITY . The rollup model switches from being stake based to liability based at the smallest lay price which is =3D rollupLiabilityThr eshold.service level default (TBD). Not supported as yet.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>rollupLiabilityFac tor</p></td>
<td align="left"><p>int</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Only applicable when rollupModel is MANAGED_LIABILITY . (rollupLiabilityFa ctor * rollupLimit) is the minimum liabilty theuser is deemed to be comfortable with. After the rollupLiabilityThr eshold price subsequent volumes will be rolled up to minimum value such that the liability =3D the minimum liability.service level default (5). Not supported as yet.</p></td>
</tr>
</tbody>
</table>

<a name="MarketProfitAndLoss"/>
## MarketProfitAndLoss 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><div>
<p>Field name</p>
</div></th>
<th align="left"><div>
<p>Type</p>
</div></th>
<th align="left"><div>
<p>Required</p>
</div></th>
<th align="left"><div>
<p>Description</p>
</div></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>marketId</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The unique identifier for the market</p></td>
</tr>
<tr class="even">
<td align="left"><p>commissionApplied</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The commission rate applied to P&amp;L values. Only returned if netOfCommision option is requested</p></td>
</tr>
<tr class="odd">
<td align="left"><p>profitAndLosses</p></td>
<td align="left"><p>List <a href="#RunnerPro fitAndLoss">RunnerPro fitAndLoss</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Calculated profit and loss data.</p></td>
</tr>
</tbody>
</table>

<a name="RunnerProfitAndLoss"/>
## RunnerProfitAndLoss 

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><div>
<p>Field name</p>
</div></th>
<th align="left"><div>
<p>Type</p>
</div></th>
<th align="left"><div>
<p>Required</p>
</div></th>
<th align="left"><div>
<p>Description</p>
</div></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>selectionId</p></td>
<td align="left"><p><a href="#SelectionId">SelectionId</a></p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>The unique identifier for the selection</p></td>
</tr>
<tr class="even">
<td align="left"><p>ifWin</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Profit or loss for the market if this selection is the winner.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ifLose</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p>Profit or loss for the market if this selection is the loser. Only returned for multi-winner odds markets.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ifPlace</p></td>
<td align="left"><p>double</p></td>
<td align="left"><p>No</p></td>
<td align="left"><p><span>Profit or loss for the marke=t if this selection is placed. Applies to marketType EACH_WAY only.</span> =/ td</p></td>
</tr>
</tbody>
</table>

<a name="Type Aliases"/>
## Type Aliases 

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Alias</th>
<th align="left">Type</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>MarketType</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Venue</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MarketId</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="even">
<td align="left"><p>SelectionId</p></td>
<td align="left"><p>long</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Handicap</p></td>
<td align="left"><p>double</p></td>
</tr>
<tr class="even">
<td align="left"><p>EventId</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EventTypeId</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="even">
<td align="left"><p>CountryCode</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ExchangeId</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="even">
<td align="left"><p>CompetitionId</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Price</p></td>
<td align="left"><p>double</p></td>
</tr>
<tr class="even">
<td align="left"><p>Size</p></td>
<td align="left"><p>double</p></td>
</tr>
<tr class="odd">
<td align="left"><p>BetId</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="even">
<td align="left"><p>MatchId</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CustomerOrderRef</p></td>
<td align="left"><p>String</p></td>
</tr>
<tr class="even">
<td align="left"></td>
<td align="left">String</td>
</tr>
</tbody>
</table>

___

#Enums

<a name="MarketProjection"/>
## MarketProjection

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>COMPETITION</p></td>
<td align="left"><p>If not selected then the competition will not be returned with marketCatalogue</p></td>
</tr>
<tr class="even">
<td align="left"><p>EVENT</p></td>
<td align="left"><p>If not selected then the event will not be returned with marketCatalogue</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EVENT_TYPE</p></td>
<td align="left"><p>If not selected then the eventType will not be returned with marketCatalogue</p></td>
</tr>
<tr class="even">
<td align="left"><p>MARKET_START_TIME</p></td>
<td align="left"><p>If not selected then the start time will not be returned with marketCatalogue</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MARKET_DESCRIPTION</p></td>
<td align="left"><p>If not selected then the description will not be returned with marketCatalogue</p></td>
</tr>
<tr class="even">
<td align="left"><p>RUNNER_DESCRIPTION</p></td>
<td align="left"><p>If not selected then the runners will not be returned with marketCatalogue</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RUNNER_METADATA</p></td>
<td align="left"><p>If not selected then the runner metadata will not be returned with marketCatalogue. If selected then RUNNER_DESCRIPTION will also be returned regardless of whether it is included as a market projection.</p></td>
</tr>
</tbody>
</table>

<a name="PriceData"/>
## PriceData

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SP_AVAILABLE</p></td>
<td align="left"><p>Amount available for the BSP auction.</p></td>
</tr>
<tr class="even">
<td align="left"><p>SP_TRADED</p></td>
<td align="left"><p>Amount traded in the BSP auction.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EX_BEST_OFFERS</p></td>
<td align="left"><p>Only the best prices available for each runner, to requested price depth.</p></td>
</tr>
<tr class="even">
<td align="left"><p>EX_ALL_OFFERS</p></td>
<td align="left"><p>EX_ALL_OFFERS trumps EX_BEST_OFFERS if both settings are present</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EX_TRADED</p></td>
<td align="left"><p>Amount traded on the exchange.</p></td>
</tr>
</tbody>
</table>

<a name="MatchProjection"/>
## MatchProjection

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>NO_ROLLUP</p></td>
<td align="left"><p>No rollup, return raw fragments</p></td>
</tr>
<tr class="even">
<td align="left"><p>ROLLED_UP_BY_PRICE</p></td>
<td align="left"><p>Rollup matched amounts by distinct matched prices per side.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ROLLED_UP_BY_AVG_PRICE</p></td>
<td align="left"><p>Rollup matched amounts by average matched price per side</p></td>
</tr>
</tbody>
</table>

<a name="OrderProjection"/>
## OrderProjection

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>ALL</p></td>
<td align="left"><p>EXECUTABLE and EXECUTION_COMPLETE orders</p></td>
</tr>
<tr class="even">
<td align="left"><p>EXECUTABLE</p></td>
<td align="left"><p>An order that has a remaining unmatched portion</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EXECUTION_COMPLETE</p></td>
<td align="left"><p>An order that does not have any remaining unmatched portion</p></td>
</tr>
</tbody>
</table>

<a name="MarketStatus"/>
## MarketStatus

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>INACTIVE</p></td>
<td align="left"><p>The market has been created but isn't yet available.</p></td>
</tr>
<tr class="even">
<td align="left"><p>OPEN</p></td>
<td align="left"><p>The market is open for betting.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SUSPENDED</p></td>
<td align="left"><p>The market is suspended and not available for betting.</p></td>
</tr>
<tr class="even">
<td align="left"><p>CLOSED</p></td>
<td align="left"><p>The market has been settled and is no longer available for betting.</p></td>
</tr>
</tbody>
</table>

<a name="RunnerStatus"/>
## RunnerStatus

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>ACTIVE</p></td>
<td align="left"><p>ACTIVE</p></td>
</tr>
<tr class="even">
<td align="left"><p>WINNER</p></td>
<td align="left"><p>WINNER</p></td>
</tr>
<tr class="odd">
<td align="left"><p>LOSER</p></td>
<td align="left"><p>LOSER</p></td>
</tr>
<tr class="even">
<td align="left"><p>PLACED</p></td>
<td align="left"><p>The runner was placed, applies to EACH_WAY marketTypes only.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>REMOVED_VACANT</p></td>
<td align="left"><p>REMOVED_VACANT applies to Greyhounds. Greyhound markets always return a fixed number of runners (traps). If a dog has been removed, the trap is shown as vacant.</p></td>
</tr>
<tr class="even">
<td align="left"><p>REMOVED</p></td>
<td align="left"><p>REMOVED</p></td>
</tr>
<tr class="odd">
<td align="left"><p>HIDDEN</p></td>
<td align="left"><p>The selection is hidden from the market.  This occurs in Horse Racing markets were runners is hidden when it is doesn=E2=80=99t hold an official entry following an entry stage. This could be because the horse was never entered or because they have been scratched from a race at a declaration stage. All matched customer bet prices are set to 1.0 even if there are later supplementary stages.</p></td>
</tr>
</tbody>
</table>

<a name="TimeGranularity"/>
## TimeGranularity

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>DAYS</p></td>
<td align="left"><p> </p></td>
</tr>
<tr class="even">
<td align="left"><p>HOURS</p></td>
<td align="left"><p> </p></td>
</tr>
<tr class="odd">
<td align="left"><p>MINUTES</p></td>
<td align="left"><p> </p></td>
</tr>
</tbody>
</table>

<a name="Side"/>
## Side

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>BACK</p></td>
<td align="left"><p>To back a team, horse or outcome is to bet on the selection to win.</p></td>
</tr>
<tr class="even">
<td align="left"><p>LAY</p></td>
<td align="left"><p>To lay a team, horse, or outcome is to bet on the selection to lose.</p></td>
</tr>
</tbody>
</table>

 

<a name="OrderStatus"/>
## OrderStatus

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>PENDING</p></td>
<td align="left"><p>Not a valid search criteria on MarketFilter</p></td>
</tr>
<tr class="even">
<td align="left"><p>EXECUTION_COMPLETE</p></td>
<td align="left"><p>An order that does not have any remaining unmatched portion.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EXECUTABLE</p></td>
<td align="left"><p>An order that has a remaining unmatched portion.</p></td>
</tr>
<tr class="even">
<td align="left"><p>EXPIRED</p></td>
<td align="left"><p>Not a valid search criteria on MarketFilter</p></td>
</tr>
</tbody>
</table>

<a name="SortDir"/>
## SortDir

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>EARLIEST_TO_LATEST</p></td>
<td align="left"><p>Order from earliest value to latest e.g. lowest betId is first in the results.</p></td>
</tr>
<tr class="even">
<td align="left"><p>LATEST_TO_EARLIEST</p></td>
<td align="left"><p>Order from the latest value to the earliest e.g. highest betId is first in the results.</p></td>
</tr>
</tbody>
</table>

<a name="OrderType"/>
## OrderType

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>LIMIT</p></td>
<td align="left"><p>A normal exchange limit order for immediate execution</p></td>
</tr>
<tr class="even">
<td align="left"><p>LIMIT_ON_CLOSE</p></td>
<td align="left"><p>Limit order for the auction (SP)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MARKET_ON_CLOSE</p></td>
<td align="left"><p>Market order for the auction (SP)</p></td>
</tr>
</tbody>
</table>

<a name="MarketSort"/>
## MarketSort

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>MINIMUM_TRADED</p></td>
<td align="left"><p>Minimum traded volume</p></td>
</tr>
<tr class="even">
<td align="left"><p>MAXIMUM_TRADED</p></td>
<td align="left"><p>Maximum traded volume</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MINIMUM_AVAILABLE</p></td>
<td align="left"><p>Minimum available to match</p></td>
</tr>
<tr class="even">
<td align="left"><p>MAXIMUM_AVAILABLE</p></td>
<td align="left"><p>Maximum available to match</p></td>
</tr>
<tr class="odd">
<td align="left"><p>FIRST_TO_START</p></td>
<td align="left"><p>The closest markets based on their expected start time</p></td>
</tr>
<tr class="even">
<td align="left"><p>LAST_TO_START</p></td>
<td align="left"><p>The most distant markets based on their expected start time</p></td>
</tr>
</tbody>
</table>

<a name="MarketBettingType"/>
## MarketBettingType

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>ODDS</p></td>
<td align="left"><p>Odds Market - Any market that doesn't fit any any of the below categories.</p></td>
</tr>
<tr class="even">
<td align="left"><p>LINE</p></td>
<td align="left"><p>Line Market - <strong>Now Deprecated</strong></p></td>
</tr>
<tr class="odd">
<td align="left"><p>RANGE</p></td>
<td align="left"><p>Range Market <span>- <strong>Now Deprecated</strong></span></p></td>
</tr>
<tr class="even">
<td align="left"><p>ASIAN_HANDICAP_DOUBLE_LINE</p></td>
<td align="left"><p>Asian Handicap Market - A traditional Asian handicap market. Can be</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ASIAN_HANDICAP_SINGLE_LINE</p></td>
<td align="left"><p>Asian Single Line Market - A market in which there can be 0 or multiple winners. e,.g marketType TOTAL_GOALS</p></td>
</tr>
<tr class="even">
<td align="left"><p>FIXED_ODDS</p></td>
<td align="left"><p>Sportsbook Odds Market. This type is deprecated and will be removed in future releases, when Sportsbook markets will be represented as ODDS market but with a different product type.</p></td>
</tr>
</tbody>
</table>

<a name="ExecutionReportStatus"/>
## ExecutionReportStatus

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SUCCESS</p></td>
<td align="left"><p>Order processed successfully</p></td>
</tr>
<tr class="even">
<td align="left"><p>FAILURE</p></td>
<td align="left"><p>Order failed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PROCESSED_WITH_ERRORS</p></td>
<td align="left"><p>The order itself has been accepted, but at least one (possibly all) actions have generated errors. This error only occurs for <strong>replaceOrders</strong>, <strong>cancelOrders</strong> and <strong>updateOrders</strong> operations. The <strong>placeOrders</strong> operation will not return PROCESSED_WITH_ERRORS status as it is an atomic operation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>TIMEOUT</p></td>
<td align="left"><p>Order timed out.</p></td>
</tr>
</tbody>
</table>

<a name="ExecutionReportErrorCode"/>
## ExecutionReportErrorCode

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>ERROR_IN_MATCHER</p></td>
<td align="left"><p>The matcher is not healthy</p></td>
</tr>
<tr class="even">
<td align="left"><p>PROCESSED_WITH_ERRORS</p></td>
<td align="left"><p>The order itself has been accepted, but at least one (possibly all) actions have generated errors</p></td>
</tr>
<tr class="odd">
<td align="left"><p>BET_ACTION_ERROR</p></td>
<td align="left"><p>There is an error with an action that has caused the entire order to be rejected. Check the instructionReports errorCode for the reason for the rejection of the order.</p></td>
</tr>
<tr class="even">
<td align="left"><p>INVALID_ACCOUNT_STATE</p></td>
<td align="left"><p>Order rejected due to the account's status (suspended, inactive, dup cards)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>INVALID_WALLET_STATUS</p></td>
<td align="left"><p>Order rejected due to the account's wallet's status</p></td>
</tr>
<tr class="even">
<td align="left"><p>INSUFFICIENT_FUNDS</p></td>
<td align="left"><p>Account has exceeded its exposure limit or available to bet limit</p></td>
</tr>
<tr class="odd">
<td align="left"><p>LOSS_LIMIT_EXCEEDED</p></td>
<td align="left"><p>The account has exceed the self imposed loss limit</p></td>
</tr>
<tr class="even">
<td align="left"><p>MARKET_SUSPENDED</p></td>
<td align="left"><p>Market is suspended</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MARKET_NOT_OPEN_FOR_BETTING</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>DUPLICATE_TRANSACTION</p></td>
<td align="left"><p>Duplicate customer reference data submitted - <strong>Please note</strong>: There is a time window associated with the de-duplication of duplicate submissions which is 60 second</p></td>
</tr>
<tr class="odd">
<td align="left"><p>INVALID_ORDER</p></td>
<td align="left"><p>Order cannot be accepted by the matcher due to the combination of actions. For example, bets being edited are not on the same market, or order includes both edits and placement</p></td>
</tr>
<tr class="even">
<td align="left"><p>INVALID_MARKET_ID</p></td>
<td align="left"><p>Market doesn't exist</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PERMISSION_DENIED</p></td>
<td align="left"><p>Delayed Application Key or from a restricted jurisdiction (i.e. USA)</p></td>
</tr>
<tr class="even">
<td align="left"><p>DUPLICATE_BETIDS</p></td>
<td align="left"><p>duplicate bet ids found</p></td>
</tr>
<tr class="odd">
<td align="left"><p>NO_ACTION_REQUIRED</p></td>
<td align="left"><p>Order hasn't been passed to matcher as system detected there will be no state change</p></td>
</tr>
<tr class="even">
<td align="left"><p>SERVICE_UNAVAILABLE</p></td>
<td align="left"><p>The requested service is unavailable</p></td>
</tr>
<tr class="odd">
<td align="left"><p>REJECTED_BY_REGULATOR</p></td>
<td align="left"><p>The regulator rejected the order. On the <strong>Italian Exchange</strong> this error will occur if more than 50 bets are sent in a single placeOrders request.</p></td>
</tr>
<tr class="even">
<td align="left"><p>NO_CHASING</p></td>
<td align="left"><p>A specific error code that relates to Spanish Exchange markets only which indicates that the bet placed contravenes the Spanish regulatory rules relating to loss chasing.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>REGULATOR_IS_NOT_AVAILABLE</p></td>
<td align="left"><p>The underlying regulator service is not available.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span>TOO_MANY_INSTRUCTIONS</span></p></td>
<td align="left"><p><span>The amount of orders exceeded the maximum amount allowed to be executed</span></p></td>
</tr>
<tr class="odd">
<td align="left"><p> </p></td>
<td align="left"><p> </p></td>
</tr>
</tbody>
</table>

<a name="PersistenceType"/>
## PersistenceType

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>LAPSE</p></td>
<td align="left"><p>Lapse the order when the market is turned in-play</p></td>
</tr>
<tr class="even">
<td align="left"><p>PERSIST</p></td>
<td align="left"><p>Persist the order to in-play. The bet will be place automatically into the in-play market at the start of the event.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MARKET_ON_CLOSE</p></td>
<td align="left"><p>Put the order into the auction (SP) at turn-in-play</p></td>
</tr>
</tbody>
</table>

<a name="InstructionReportStatus"/>
## InstructionReportStatus

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SUCCESS</p></td>
<td align="left"><p> </p></td>
</tr>
<tr class="even">
<td align="left"><p>FAILURE</p></td>
<td align="left"><p> </p></td>
</tr>
<tr class="odd">
<td align="left"><p>TIMEOUT</p></td>
<td align="left"><p> </p></td>
</tr>
</tbody>
</table>

<a name="InstructionReportErrorCode"/>
## InstructionReportErrorCode

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>INVALID_BET_SIZE</p></td>
<td align="left"><p>bet size is invalid for your currency or your regulator</p></td>
</tr>
<tr class="even">
<td align="left"><p>INVALID_RUNNER</p></td>
<td align="left"><p>Runner does not exist, includes vacant traps in greyhound racing</p></td>
</tr>
<tr class="odd">
<td align="left"><p>BET_TAKEN_OR_LAPSED</p></td>
<td align="left"><p>Bet cannot be cancelled or modified as it has already been taken or has been cancelled/lapsed Includes attempts to cancel/modify market on close BSP bets and cancelling limit on close BSP bets</p></td>
</tr>
<tr class="even">
<td align="left"><p>BET_IN_PROGRESS</p></td>
<td align="left"><p>No result was received from the matcher in a timeout configured for the system</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RUNNER_REMOVED</p></td>
<td align="left"><p>Runner has been removed from the event</p></td>
</tr>
<tr class="even">
<td align="left"><p>MARKET_NOT_OPEN_FOR_BETTING</p></td>
<td align="left"><p>Attempt to edit a bet on a market that has closed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>LOSS_LIMIT_EXCEEDED</p></td>
<td align="left"><p>The action has caused the account to exceed the self imposed loss limit</p></td>
</tr>
<tr class="even">
<td align="left"><p>MARKET_NOT_OPEN_FOR_BSP_BETTING</p></td>
<td align="left"><p>Market now closed to bsp betting. Turned in-play or has been reconciled</p></td>
</tr>
<tr class="odd">
<td align="left"><p>INVALID_PRICE_EDIT</p></td>
<td align="left"><p>Attempt to edit down the price of a bsp limit on close lay bet, or edit up the price of a limit on close back bet</p></td>
</tr>
<tr class="even">
<td align="left"><p>INVALID_ODDS</p></td>
<td align="left"><p>Odds not on price ladder - either edit or placement</p></td>
</tr>
<tr class="odd">
<td align="left"><p>INSUFFICIENT_FUNDS</p></td>
<td align="left"><p>Insufficient funds available to cover the bet action. Either the exposure limit or available to bet limit would be exceeded</p></td>
</tr>
<tr class="even">
<td align="left"><p>INVALID_PERSISTENCE_TYPE</p></td>
<td align="left"><p>Invalid persistence type for this market, e.g. KEEP for a non bsp market</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ERROR_IN_MATCHER</p></td>
<td align="left"><p>A problem with the matcher prevented this action completing successfully</p></td>
</tr>
<tr class="even">
<td align="left"><p>INVALID_BACK_LAY_COMBINATION</p></td>
<td align="left"><p>The order contains a back and a lay for the same runner at overlapping prices. This would guarantee a self match. This also applies to BSP limit on close bets</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ERROR_IN_ORDER</p></td>
<td align="left"><p>The action failed because the parent order failed</p></td>
</tr>
<tr class="even">
<td align="left"><p>INVALID_BID_TYPE</p></td>
<td align="left"><p>Bid type is mandatory</p></td>
</tr>
<tr class="odd">
<td align="left"><p>INVALID_BET_ID</p></td>
<td align="left"><p>Bet for id supplied has not been found</p></td>
</tr>
<tr class="even">
<td align="left"><p>CANCELLED_NOT_PLACED</p></td>
<td align="left"><p>Bet cancelled but replacement bet was not placed</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RELATED_ACTION_FAILED</p></td>
<td align="left"><p>Action failed due to the failure of a action on which this action is dependent</p></td>
</tr>
<tr class="even">
<td align="left"><p>NO_ACTION_REQUIRED</p></td>
<td align="left"><p>the action does not result in any state change. eg changing a persistence to it's current value</p></td>
</tr>
<tr class="odd">
<td align="left"><p>TIME_IN_FORCE_CONFLICT</p></td>
<td align="left"><p>You may only specify a time in force on either the place request OR on individual limit order instructions (not both), <br />
since the implied behaviors are incompatible.</p></td>
</tr>
<tr class="even">
<td align="left"><p>UNEXPECTED_PERSISTENCE_TYPE</p></td>
<td align="left"><p>You have specified a persistence type for a FILL_OR_KILL order, which is nonsensical because no umatched portion <br />
can remain after the order has been placed.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>INVALID_ORDER_TYPE</p></td>
<td align="left"><p>You have specified a time in force of FILL_OR_KILL, but have included a non-LIMIT order type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>UNEXPECTED_MIN_FILL_SIZE</p></td>
<td align="left"><p>You have specified a minFillSize on a limit order, where the limit order's time in force is not FILL_OR_KILL. <br />
Using minFillSize is not supported where the time in force of the request (as opposed to an order) is FILL_OR_KILL.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>INVALID_CUSTOMER_ORDER_REF</p></td>
<td align="left"><p>The supplied customer order reference is too long.</p></td>
</tr>
<tr class="even">
<td align="left"><p>INVALID_MIN_FILL_SIZE</p></td>
<td align="left"><p>The minFillSize cannot be less than the minimum bet size for your currency</p></td>
</tr>
</tbody>
</table>

<a name="RollupModel"/>
## RollupModel

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>STAKE</p></td>
<td align="left"><p>The volumes will be rolled up to the minimum value which is &gt;=3D rollupLimit.</p></td>
</tr>
<tr class="even">
<td align="left"><p>PAYOUT</p></td>
<td align="left"><p>The volumes will be rolled up to the minimum value where the payout( price * volume ) is &gt;=3D rollupLimit.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>MANAGED_LIABILITY</p></td>
<td align="left"><p>The volumes will be rolled up to the minimum value which is &gt;=3D rollupLimit, until a lay price threshold. There after, the volumes will be rolled up to the minimum value such that the liability &gt;=3D a minimum liability. Not supported as yet.</p></td>
</tr>
<tr class="even">
<td align="left"><p>NONE</p></td>
<td align="left"><p>No rollup will be applied. However the volumes will be filtered by currency specific minimum stake unless overridden specifically for the channel.</p></td>
</tr>
</tbody>
</table>

<a name="TimeInForce"/>
## TimeInForce

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>FILL_OR_KILL</p></td>
<td align="left"><p>Execute the transaction immediately and completely (filled to size or between minFillSize and size) or not at all (cancelled)</p></td>
</tr>
</tbody>
</table>

<a name="BetTargetType"/>
## BetTargetType

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Value</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>BACKERS_PROFIT</p></td>
<td align="left"><p>The payout requested minus the calculated size at which this LimitOrder is to be placed</p></td>
</tr>
<tr class="even">
<td align="left"><p>PAYOUT</p></td>
<td align="left"><p>The total payout requested on a LimitOrder</p></td>
</tr>
</tbody>
</table>