var Rtorrent = require('./index.js');

var yaml = require('js-yaml');
var fs   = require('fs');
var config = yaml.safeLoad(fs.readFileSync(__dirname+'/config.yml', 'utf8'));


var rtorrent = new Rtorrent({
    mode: config.mode,
    host: config.host,
    port: config.port,
    path: config.path,
    user: config.user,
    pass: config.pass
});


rtorrent.getAll(function (err, hashes) {
    if (err) return console.log('err: ', err);

    console.log(hashes);
});


/*
// manual mode
rtorrent.get('download_list', [], function (err, hashes) {
    if (err) return console.log('err: ', err);

    console.log(hashes);

    if (hashes.length)
    {
        // get the name of the first torrent
        rtorrent.get('d.name', [hashes[0]], function (err, data) {
            if (err) return console.log('err: ', err);

            console.log(data);
        });
    }
});

// multicall
rtorrent.getMulticall('d.multicall', ['main'], ['d.name=', 'd.get_hash'], function (err, data) {
    if (err) return console.log('err: ', err);

    console.log(data);
});


// everything in one shot
rtorrent.getAll(function (err, data) {
    if (err) return console.log('err: ', err);

    console.log(data);
});


// start a torrent which is already registered in rtorrent
rtorrent.start('XXXXXXXX', function (err, data) {
    if (err) return console.log('err: ', err);

    console.log(data);
});

*/
