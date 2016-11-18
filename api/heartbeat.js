const lib       = require('../lib');
const request   = require('request');

module.exports = (req, res) => {
    let r = {
        callback     : "",
        contextWrites: {}
    };
    let response,
        args = lib.clearArgs(req.body.args);

    if(Object.keys(args).length < 3) {
        r.callback            = 'error';
        r.contextWrites['to'] = {
            status_code: 'REQUIRED_FIELDS',
            status_msg:  'Please, check and fill in required fields.',
            fields:      ['appKey', 'sessionToken', 'preferredTimeoutSeconds']
        }

        res.status(200).send(r);    
        return;
    }

    let options = {
        headers: {
            'Accept':           'application/json',
            'X-Application':    req.body.args['appKey'],
            'X-Authentication': req.body.args['sessionToken']
        },
        uri: 'https://api.betfair.com/exchange/heartbeat/json-rpc/v1',
        body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'HeartbeatAPING/v1.0/heartbeat',
            params: {
                preferredTimeoutSeconds: parseInt(args.preferredTimeoutSeconds)
            }
        })
    }

    request.post(options, (err, response, reslut) => {
        if(!err && (/20.*/).test(response.statusCode)) {
            r.callback            = 'success';
            r.contextWrites['to'] = JSON.parse(reslut);
        } else {
            r.callback            = 'error';
            r.contextWrites['to'] = {
                status_code: "API_ERROR",
                status_msg:  err.message || err
            };
        }

        res.status(200).send(r);
    })
}