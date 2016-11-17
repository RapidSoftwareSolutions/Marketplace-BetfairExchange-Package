const lib       = require('../lib');
const request   = require('request');
const fs        = require('fs');
const path      = require('path');
const spawn     = require('child_process').spawnSync

module.exports = (req, res) => {
    let r = {
        callback     : "",
        contextWrites: {}
    };
    let response,
        args = lib.clearArgs(req.body.args);

    let download = (file) => {
        let attach = spawn(process.execPath, [require.resolve('../lib/download.js'), file]);
    
        if(!attach.stderr.toString()) {
            let response = JSON.parse(attach.stdout.toString());
            var fn       = path.resolve('./lib', response.message);

            if(!response.success) {
                throw new Error('Bad file!');
                return;
            }

            return [fn, fs.readFileSync(fn)];

        } else {
            console.log('Error with download.js!', attach.stderr.toString());
            throw new Error('Error. Please, call support.');
        }
    }

    if(Object.keys(args).length < 5) {
        r.callback            = 'error';
        r.contextWrites['to'] = {
            status_code: 'REQUIRED_FIELDS',
            status_msg:  'Please, check and fill in required fields.',
            fields:      ['appKey', 'sessionToken', 'username', 'cert', 'key']
        }

        res.status(200).send(r);    
        return;
    }

    try {
        var [keypath,  key]  = download(args.key);
        var [certpath, cert] = download(args.cert); 
    } catch(e) {
        r.callback            = 'error';
        r.contextWrites['to'] = {
            status_code: 'INTERNAL_PACKAGE_ERROR',
            status_msg:  e.message,
        }

        res.status(200).send(r);
        return;
    }
    let options = {
        headers: {
            'X-Application': args['appKey'],
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        agentOptions: {
            key, cert
        },
        requestCert:        true,
        rejectUnauthorized: false,
        uri:  'https://identitysso.betfair.com/api/certlogin',
        body: 'username=' + args.username + '&password=' + args.password
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

        fs.unlink(keypath, () => {});
        fs.unlink(certpath, () => {});
    })
}