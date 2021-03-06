export default [
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleGetRequest',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 8,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9153',
    request: {
      method: 'GET',
      url: 'http://localhost:3001/',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 624,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'text/html; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '12'
        },
        {
          name: 'ETag',
          value: 'W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:17 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 12,
        mimeType: 'text/html',
        compression: 0
      },
      redirectURL: '',
      headersSize: 236,
      bodySize: 12,
      _transferSize: 248,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:17.837Z',
    time: 10.771000003311784,
    timings: {
      blocked: 6.598000004121102,
      dns: 0.01499999999999968,
      ssl: -1,
      connect: 0.532,
      send: 0.23299999999999965,
      wait: 2.721999997587875,
      receive: 0.6710000016028062,
      _blocked_queueing: 1.9250000041211024
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handlePutRequest',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 15,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9153',
    request: {
      method: 'PUT',
      url: 'http://localhost:3001/put-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Content-Length',
          value: '0'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 646,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'text/html; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '3'
        },
        {
          name: 'ETag',
          value: 'W/"3-CRsM5C6wvZYWnqALFt2Tj21jrJU"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:18 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 3,
        mimeType: 'text/html',
        compression: 0
      },
      redirectURL: '',
      headersSize: 235,
      bodySize: 3,
      _transferSize: 238,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:18.405Z',
    time: 13.470999998389743,
    timings: {
      blocked: 8.115999998223968,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.124,
      wait: 4.45099999804236,
      receive: 0.7800000021234155,
      _blocked_queueing: 7.817999998223968
    }
  },
  {
    _initiator: {
      type: 'preflight',
      url: 'http://localhost:3001/put-request'
    },
    _priority: 'High',
    _resourceType: 'preflight',
    cache: {},
    connection: '9153',
    request: {
      method: 'OPTIONS',
      url: 'http://localhost:3001/put-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Access-Control-Request-Method',
          value: 'PUT'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 539,
      bodySize: 0
    },
    response: {
      status: 204,
      statusText: 'No Content',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Access-Control-Allow-Methods',
          value: 'GET,HEAD,PUT,PATCH,POST,DELETE'
        },
        {
          name: 'Vary',
          value: 'Access-Control-Request-Headers'
        },
        {
          name: 'Content-Length',
          value: '0'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:18 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: 'x-unknown',
        compression: 262
      },
      redirectURL: '',
      headersSize: 262,
      bodySize: -262,
      _transferSize: 0,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:18.422Z',
    time: 4.534999997355044,
    timings: {
      blocked: -0.75,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.09999999999999998,
      wait: 3.86700000151759,
      receive: 0.5679999958374538,
      _blocked_queueing: -1
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handlePatchRequest',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 29,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9153',
    request: {
      method: 'PATCH',
      url: 'http://localhost:3001/patch-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 631,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'text/html; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '7'
        },
        {
          name: 'ETag',
          value: 'W/"7-NeB8nxQYpuf32UWX5sjV9GoZABE"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:19 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 7,
        mimeType: 'text/html',
        compression: 0
      },
      redirectURL: '',
      headersSize: 235,
      bodySize: 7,
      _transferSize: 242,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:19.014Z',
    time: 15.326000000641216,
    timings: {
      blocked: 9.300000000021885,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15200000000000014,
      wait: 5.326999997339211,
      receive: 0.5470000032801181,
      _blocked_queueing: 7.286000000021886
    }
  },
  {
    _initiator: {
      type: 'preflight',
      url: 'http://localhost:3001/patch-request'
    },
    _priority: 'High',
    _resourceType: 'preflight',
    cache: {},
    connection: '9153',
    request: {
      method: 'OPTIONS',
      url: 'http://localhost:3001/patch-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Access-Control-Request-Method',
          value: 'PATCH'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 543,
      bodySize: 0
    },
    response: {
      status: 204,
      statusText: 'No Content',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Access-Control-Allow-Methods',
          value: 'GET,HEAD,PUT,PATCH,POST,DELETE'
        },
        {
          name: 'Vary',
          value: 'Access-Control-Request-Headers'
        },
        {
          name: 'Content-Length',
          value: '0'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:19 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: 'x-unknown',
        compression: 262
      },
      redirectURL: '',
      headersSize: 262,
      bodySize: -262,
      _transferSize: 0,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:19.022Z',
    time: 4.13900000243308,
    timings: {
      blocked: -0.33899999999999997,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14300000000000002,
      wait: 3.5870000022151505,
      receive: 0.4090000002179295,
      _blocked_queueing: -1
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleDeleteRequest',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 22,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'DELETE',
      url: 'http://localhost:3001/delete-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 633,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'text/html; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '7'
        },
        {
          name: 'ETag',
          value: 'W/"7-fQkv+iSXqsgGs6ryo7Ol4WZ1XHE"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:20 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 7,
        mimeType: 'text/html',
        compression: 0
      },
      redirectURL: '',
      headersSize: 235,
      bodySize: 7,
      _transferSize: 242,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:20.907Z',
    time: 17.01600000524195,
    timings: {
      blocked: 10.608999998921995,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.0860000000000003,
      wait: 5.85800000237301,
      receive: 0.46300000394694507,
      _blocked_queueing: 5.154999998921994
    }
  },
  {
    _initiator: {
      type: 'preflight',
      url: 'http://localhost:3001/delete-request'
    },
    _priority: 'High',
    _resourceType: 'preflight',
    cache: {},
    connection: '9191',
    request: {
      method: 'OPTIONS',
      url: 'http://localhost:3001/delete-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Access-Control-Request-Method',
          value: 'DELETE'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 545,
      bodySize: 0
    },
    response: {
      status: 204,
      statusText: 'No Content',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Access-Control-Allow-Methods',
          value: 'GET,HEAD,PUT,PATCH,POST,DELETE'
        },
        {
          name: 'Vary',
          value: 'Access-Control-Request-Headers'
        },
        {
          name: 'Content-Length',
          value: '0'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:20 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: 'x-unknown',
        compression: 262
      },
      redirectURL: '',
      headersSize: 262,
      bodySize: -262,
      _transferSize: 0,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:20.912Z',
    time: 2.7570000059367157,
    timings: {
      blocked: -0.787,
      dns: 0.008000000000000007,
      ssl: -1,
      connect: 0.24800000000000003,
      send: 0.15299999999999997,
      wait: 1.8749999986044132,
      receive: 0.47300000733230263,
      _blocked_queueing: -1
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleCustomHeader',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 46,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'GET',
      url: 'http://localhost:3001/custom-headers-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'x-majid-sajadi',
          value: 'salam'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 661,
      bodySize: 0
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'application/json; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '680'
        },
        {
          name: 'ETag',
          value: 'W/"2a8-JWe6hWsLYEy2Z1OjZjirnaxrggI"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:22 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 680,
        mimeType: 'application/json',
        compression: 0
      },
      redirectURL: '',
      headersSize: 246,
      bodySize: 680,
      _transferSize: 926,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:22.134Z',
    time: 12.188000000605825,
    timings: {
      blocked: 8.830000000001863,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.09299999999999997,
      wait: 2.7229999990165235,
      receive: 0.5420000015874393,
      _blocked_queueing: 4.277000000001863
    }
  },
  {
    _initiator: {
      type: 'preflight',
      url: 'http://localhost:3001/custom-headers-request'
    },
    _priority: 'High',
    _resourceType: 'preflight',
    cache: {},
    connection: '9191',
    request: {
      method: 'OPTIONS',
      url: 'http://localhost:3001/custom-headers-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Access-Control-Request-Method',
          value: 'GET'
        },
        {
          name: 'Access-Control-Request-Headers',
          value: 'x-majid-sajadi'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 598,
      bodySize: 0
    },
    response: {
      status: 204,
      statusText: 'No Content',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Access-Control-Allow-Methods',
          value: 'GET,HEAD,PUT,PATCH,POST,DELETE'
        },
        {
          name: 'Vary',
          value: 'Access-Control-Request-Headers'
        },
        {
          name: 'Access-Control-Allow-Headers',
          value: 'x-majid-sajadi'
        },
        {
          name: 'Content-Length',
          value: '0'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:22 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: 'x-unknown',
        compression: 308
      },
      redirectURL: '',
      headersSize: 308,
      bodySize: -308,
      _transferSize: 0,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:22.138Z',
    time: 2.0460000038184227,
    timings: {
      blocked: -0.821,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.07600000000000001,
      wait: 1.4700000018975699,
      receive: 0.5000000019208528,
      _blocked_queueing: -1
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleInternalError',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 60,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'GET',
      url: 'http://localhost:3001/internal-error',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 638,
      bodySize: 0
    },
    response: {
      status: 500,
      statusText: 'Internal Server Error',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:22 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Content-Length',
          value: '0'
        }
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: 'x-unknown',
        compression: 0
      },
      redirectURL: '',
      headersSize: 173,
      bodySize: 0,
      _transferSize: 173,
      _error: 'net::ERR_ABORTED'
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:22.820Z',
    time: 11.6379999963101,
    timings: {
      blocked: 4.891999997319654,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.09099999999999975,
      wait: 2.328999996952247,
      receive: 4.3260000020381995,
      _blocked_queueing: 1.6469999973196536
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleInvalidUrl',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 74,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9224',
    request: {
      method: 'GET',
      url: 'http://localhost:3000/invalid-url-error',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3000'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-origin'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        },
        {
          name: 'Cookie',
          value: 'csrftoken=RPMCliUNBxGJGA6dXT0BkEB37AWSnaRlWN0i7ZX67wos9AiPiiYQRKqwO7FefMrT'
        }
      ],
      queryString: [],
      cookies: [
        {
          name: 'csrftoken',
          value: 'RPMCliUNBxGJGA6dXT0BkEB37AWSnaRlWN0i7ZX67wos9AiPiiYQRKqwO7FefMrT',
          path: '/',
          domain: 'localhost',
          expires: '2022-09-04T11:08:37.577Z',
          httpOnly: false,
          secure: false,
          sameSite: 'Lax'
        }
      ],
      headersSize: 690,
      bodySize: 0
    },
    response: {
      status: 404,
      statusText: 'Not Found',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Content-Type',
          value: 'text/plain; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '9'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:23 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 9,
        mimeType: 'text/plain',
        compression: 0
      },
      redirectURL: '',
      headersSize: 147,
      bodySize: 9,
      _transferSize: 156,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:23.615Z',
    time: 13.324000000400469,
    timings: {
      blocked: 6.1609999986351465,
      dns: 0.018999999999999684,
      ssl: -1,
      connect: 0.35799999999999965,
      send: 0.25300000000000056,
      wait: 6.145000001380685,
      receive: 0.3880000003846362,
      _blocked_queueing: 2.7469999986351468
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleValidationError',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 53,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'GET',
      url: 'http://localhost:3001/validation-error',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 640,
      bodySize: 0
    },
    response: {
      status: 400,
      statusText: 'Bad Request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:24 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Content-Length',
          value: '0'
        }
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: 'x-unknown',
        compression: 0
      },
      redirectURL: '',
      headersSize: 163,
      bodySize: 0,
      _transferSize: 163,
      _error: 'net::ERR_ABORTED'
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:24.578Z',
    time: 10.680999999749474,
    timings: {
      blocked: 4.62399999679625,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14300000000000002,
      wait: 1.8950000029820948,
      receive: 4.018999999971129,
      _blocked_queueing: 2.9349999967962503
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleNotFoundError',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 67,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'GET',
      url: 'http://localhost:3001/not-found-error',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 633,
      bodySize: 0
    },
    response: {
      status: 404,
      statusText: 'Not Found',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Security-Policy',
          value: "default-src 'none'"
        },
        {
          name: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          name: 'Content-Type',
          value: 'text/html; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '148'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:25 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 148,
        mimeType: 'text/html',
        compression: 0
      },
      redirectURL: '',
      headersSize: 281,
      bodySize: 148,
      _transferSize: 429,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:25.187Z',
    time: 11.00600000063423,
    timings: {
      blocked: 6.561999993667472,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.12199999999999989,
      wait: 3.717999998942018,
      receive: 0.604000008024741,
      _blocked_queueing: 2.237999993667472
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleJsonBody',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 96,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'POST',
      url: 'http://localhost:3001/post-json-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Content-Length',
          value: '125'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'content-type',
          value: 'application/json'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 682,
      bodySize: 125,
      postData: {
        mimeType: 'application/json',
        text: '{"name":"majid","last":"sajad","age":28,"single":false,"friends":["ahmad","meisam"],"job":{"title":"developer","free":false}}'
      }
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'application/json; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '125'
        },
        {
          name: 'ETag',
          value: 'W/"7d-Rg+E8J5G6AG4mV9utz5on0+89fc"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:25 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 125,
        mimeType: 'application/json',
        compression: 0
      },
      redirectURL: '',
      headersSize: 245,
      bodySize: 125,
      _transferSize: 370,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:25.942Z',
    time: 47.6870000056806,
    timings: {
      blocked: 6.136000001550652,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.12299999999999997,
      wait: 41.07700000171922,
      receive: 0.3510000024107285,
      _blocked_queueing: 5.915000001550652
    }
  },
  {
    _initiator: {
      type: 'preflight',
      url: 'http://localhost:3001/post-json-request'
    },
    _priority: 'High',
    _resourceType: 'preflight',
    cache: {},
    connection: '9191',
    request: {
      method: 'OPTIONS',
      url: 'http://localhost:3001/post-json-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Access-Control-Request-Method',
          value: 'POST'
        },
        {
          name: 'Access-Control-Request-Headers',
          value: 'content-type'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 587,
      bodySize: 0
    },
    response: {
      status: 204,
      statusText: 'No Content',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Access-Control-Allow-Methods',
          value: 'GET,HEAD,PUT,PATCH,POST,DELETE'
        },
        {
          name: 'Vary',
          value: 'Access-Control-Request-Headers'
        },
        {
          name: 'Access-Control-Allow-Headers',
          value: 'content-type'
        },
        {
          name: 'Content-Length',
          value: '0'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:25 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 0,
        mimeType: 'x-unknown',
        compression: 306
      },
      redirectURL: '',
      headersSize: 306,
      bodySize: -306,
      _transferSize: 0,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:25.952Z',
    time: 3.06399999686284,
    timings: {
      blocked: -0.5700000000000001,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.197,
      wait: 2.3929999964679594,
      receive: 0.47400000039488077,
      _blocked_queueing: -1
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleJsonBodyWithoutContentType',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 115,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'POST',
      url: 'http://localhost:3001/post-text-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Content-Length',
          value: '125'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Content-Type',
          value: 'text/plain;charset=UTF-8'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 690,
      bodySize: 125,
      postData: {
        mimeType: 'text/plain;charset=UTF-8',
        text: '{"name":"majid","last":"sajad","age":28,"single":false,"friends":["ahmad","meisam"],"job":{"title":"developer","free":false}}'
      }
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'application/json; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '2'
        },
        {
          name: 'ETag',
          value: 'W/"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:26 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 2,
        mimeType: 'application/json',
        compression: 0
      },
      redirectURL: '',
      headersSize: 242,
      bodySize: 2,
      _transferSize: 244,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:26.695Z',
    time: 6.114000003435649,
    timings: {
      blocked: 3.642000002087094,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.14100000000000001,
      wait: 1.9260000024847685,
      receive: 0.40499999886378646,
      _blocked_queueing: 3.316000002087094
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleUrlEncodedWithoutContentType',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 144,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'POST',
      url: 'http://localhost:3001/form-urlencoded-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Content-Length',
          value: '42'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Content-Type',
          value: 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 712,
      bodySize: 42,
      postData: {
        mimeType: 'application/x-www-form-urlencoded;charset=UTF-8',
        text: 'name=majid&last=sajadi&age=28&single=false',
        params: [
          {
            name: 'name',
            value: 'majid'
          },
          {
            name: 'last',
            value: 'sajadi'
          },
          {
            name: 'age',
            value: '28'
          },
          {
            name: 'single',
            value: 'false'
          }
        ]
      }
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'application/json; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '60'
        },
        {
          name: 'ETag',
          value: 'W/"3c-IuVqX1Pvo9R43zSJ9fSR09qGeiw"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:28 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 60,
        mimeType: 'application/json',
        compression: 0
      },
      redirectURL: '',
      headersSize: 244,
      bodySize: 60,
      _transferSize: 304,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:28.047Z',
    time: 6.40199999907054,
    timings: {
      blocked: 2.2299999980325813,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.12899999999999995,
      wait: 3.5639999989503997,
      receive: 0.47900000208755955,
      _blocked_queueing: 1.949999998032581
    }
  },
  {
    _initiator: {
      type: 'script',
      stack: {
        callFrames: [
          {
            functionName: 'handleForm',
            scriptId: '21',
            url: 'http://localhost:3000/src/App.jsx',
            lineNumber: 158,
            columnNumber: 4
          },
          {
            functionName: 'callCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5255,
            columnNumber: 13
          },
          {
            functionName: 'invokeGuardedCallbackDev',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5304,
            columnNumber: 15
          },
          {
            functionName: 'invokeGuardedCallback',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5366,
            columnNumber: 30
          },
          {
            functionName: 'invokeGuardedCallbackAndCatchFirstError',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5380,
            columnNumber: 24
          },
          {
            functionName: 'executeDispatch',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9553,
            columnNumber: 2
          },
          {
            functionName: 'processDispatchQueueItemsInOrder',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9585,
            columnNumber: 6
          },
          {
            functionName: 'processDispatchQueue',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9598,
            columnNumber: 4
          },
          {
            functionName: 'dispatchEventsForPlugins',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9609,
            columnNumber: 2
          },
          {
            functionName: '',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9817,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23692,
            columnNumber: 11
          },
          {
            functionName: 'batchedEventUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5055,
            columnNumber: 11
          },
          {
            functionName: 'dispatchEventForPluginEventSystem',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 9816,
            columnNumber: 2
          },
          {
            functionName: 'attemptToDispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7315,
            columnNumber: 2
          },
          {
            functionName: 'dispatchEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7234,
            columnNumber: 18
          },
          {
            functionName: 'unstable_runWithPriority',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 462,
            columnNumber: 11
          },
          {
            functionName: 'runWithPriority$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 12583,
            columnNumber: 9
          },
          {
            functionName: 'discreteUpdates$1',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 23709,
            columnNumber: 13
          },
          {
            functionName: 'discreteUpdates',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 5066,
            columnNumber: 11
          },
          {
            functionName: 'dispatchDiscreteEvent',
            scriptId: '19',
            url: 'http://localhost:3000/@modules/react-dom.js',
            lineNumber: 7199,
            columnNumber: 2
          }
        ]
      }
    },
    _priority: 'High',
    _resourceType: 'fetch',
    cache: {},
    connection: '9191',
    request: {
      method: 'POST',
      url: 'http://localhost:3001/form-data-request',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'Host',
          value: 'localhost:3001'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        },
        {
          name: 'Content-Length',
          value: '427'
        },
        {
          name: 'Pragma',
          value: 'no-cache'
        },
        {
          name: 'Cache-Control',
          value: 'no-cache'
        },
        {
          name: 'sec-ch-ua',
          value: '" Not A;Brand";v="99", "Chromium";v="98", "Google Chrome";v="98"'
        },
        {
          name: 'sec-ch-ua-mobile',
          value: '?0'
        },
        {
          name: 'User-Agent',
          value:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36'
        },
        {
          name: 'sec-ch-ua-platform',
          value: '"macOS"'
        },
        {
          name: 'Content-Type',
          value: 'multipart/form-data; boundary=----WebKitFormBoundaryRXuSd5WIBTwXRZTR'
        },
        {
          name: 'Accept',
          value: '*/*'
        },
        {
          name: 'Origin',
          value: 'http://localhost:3000'
        },
        {
          name: 'Sec-Fetch-Site',
          value: 'same-site'
        },
        {
          name: 'Sec-Fetch-Mode',
          value: 'cors'
        },
        {
          name: 'Sec-Fetch-Dest',
          value: 'empty'
        },
        {
          name: 'Referer',
          value: 'http://localhost:3000/'
        },
        {
          name: 'Accept-Encoding',
          value: 'gzip, deflate, br'
        },
        {
          name: 'Accept-Language',
          value: 'en-US,en;q=0.9,fa;q=0.8,zh-CN;q=0.7,zh;q=0.6,ar;q=0.5'
        }
      ],
      queryString: [],
      cookies: [],
      headersSize: 734,
      bodySize: 427,
      postData: {
        mimeType: 'multipart/form-data; boundary=----WebKitFormBoundaryRXuSd5WIBTwXRZTR',
        text: '------WebKitFormBoundaryRXuSd5WIBTwXRZTR\r\nContent-Disposition: form-data; name="name"\r\n\r\nmajid\r\n------WebKitFormBoundaryRXuSd5WIBTwXRZTR\r\nContent-Disposition: form-data; name="last"\r\n\r\nsajadi\r\n------WebKitFormBoundaryRXuSd5WIBTwXRZTR\r\nContent-Disposition: form-data; name="age"\r\n\r\n28\r\n------WebKitFormBoundaryRXuSd5WIBTwXRZTR\r\nContent-Disposition: form-data; name="single"\r\n\r\nfalse\r\n------WebKitFormBoundaryRXuSd5WIBTwXRZTR--\r\n',
        params: [
          {
            name: 'name',
            value: 'majid'
          },
          {
            name: 'last',
            value: 'sajadi'
          },
          {
            name: 'age',
            value: '28'
          },
          {
            name: 'single',
            value: 'false'
          }
        ]
      }
    },
    response: {
      status: 200,
      statusText: 'OK',
      httpVersion: 'HTTP/1.1',
      headers: [
        {
          name: 'X-Powered-By',
          value: 'Express'
        },
        {
          name: 'Access-Control-Allow-Origin',
          value: '*'
        },
        {
          name: 'Content-Type',
          value: 'application/json; charset=utf-8'
        },
        {
          name: 'Content-Length',
          value: '60'
        },
        {
          name: 'ETag',
          value: 'W/"3c-IuVqX1Pvo9R43zSJ9fSR09qGeiw"'
        },
        {
          name: 'Date',
          value: 'Thu, 10 Feb 2022 18:14:28 GMT'
        },
        {
          name: 'Connection',
          value: 'keep-alive'
        }
      ],
      cookies: [],
      content: {
        size: 60,
        mimeType: 'application/json',
        compression: 0
      },
      redirectURL: '',
      headersSize: 244,
      bodySize: 60,
      _transferSize: 304,
      _error: null
    },
    serverIPAddress: '[::1]',
    startedDateTime: '2022-02-10T18:14:28.834Z',
    time: 19.64099999895552,
    timings: {
      blocked: 3.997000001081731,
      dns: -1,
      ssl: -1,
      connect: -1,
      send: 0.15300000000000002,
      wait: 14.513000001479872,
      receive: 0.977999996393919,
      _blocked_queueing: 3.399000001081731
    }
  }
];
