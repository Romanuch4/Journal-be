export interface paths {
  "/ConnectByToken": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Connect to account using previously saved token details from DB */
    get: {
      parameters: {
        query: {
          /** @description Token returned by previous Connect or ConnectEx methods */
          id: string;
          /** @description Maximum time in seconds to wait for the initial connection to the MT5 server (default is 30 seconds). */
          connectTimeoutSeconds?: number;
          /**
           * @description Maximum time in seconds to wait when connecting to a specific cluster member (default is 30 seconds).
           *     Used in environments with distributed server architecture.
           */
          connectTimeoutClusterMemberSeconds?: number;
          otp?: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' if successfully connected */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": string;
          };
        };
        /** @description Exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ConnectEx": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Connects to an MT5 account using the specified credentials and server details.
     * @description This method performs a full login sequence to the specified MT5 server. Upon success, a token is generated and returned,
     *     which uniquely identifies the session. This token must be passed in subsequent API calls.
     */
    get: {
      parameters: {
        query: {
          /** @description The account number (login). */
          user: number;
          /** @description The account password. */
          password: string;
          /** @description The server name as specified in the MT5 terminal (e.g., "MetaQuotes-Demo"). */
          server: string;
          /**
           * @description Optional. Custom token value to assign for this session.
           *     If not specified, a random token will be generated and returned.
           */
          id?: string;
          /**
           * @description Optional. Unique 16-byte hardware identifier as a hexadecimal string (e.g., "E5E28B096E7F8877334B197DE7F7F54D").
           *     If not specified, a random ID will be generated.
           */
          hardwareId?: string;
          /** @description Optional. One-time password if two-factor authentication is enabled. */
          otp?: string;
          /** @description Maximum time in seconds to wait for connection (default is 60 seconds). */
          connectTimeoutSeconds?: number;
          /** @description Maximum time in seconds to wait for connection to a cluster member (default is 30 seconds). */
          connectTimeoutClusterMemberSeconds?: number;
          /**
           * @description If set to `true`, all historical orders will start downloading in the background immediately after connection.
           *     Use the `/OrderHistoryDownloaded` endpoint to check completion status.
           */
          downloadOrderHistory?: boolean;
          /** @description If set to `true`, enables automatic reconnection logic on symbol data updates */
          reconnectOnSymbolUpdate?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Token that need to use in futher requests as 'id' parameter */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": string;
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Connect": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Connect to account with user, password, host, port.
     * @description Returns Token that you need to use as "id" parameter for further reqests
     */
    get: {
      parameters: {
        query: {
          /** @description Account number. */
          user: number;
          /** @description Password. */
          password: string;
          /** @description Host - ip adddress or dns name. */
          host: string;
          /** @description Port. */
          port: number;
          /** @description Please specify if you need some exact token value. If not specifed - random generated. */
          id?: string;
          /** @description 16 bytes array as string. Example: E5E28B096E7F8877334B197DE7F7F54D. If not specifed - random generated. */
          hardwareId?: string;
          /** @description One time password */
          otp?: string;
          /** @description Connect timeout in seconds */
          connectTimeoutSeconds?: number;
          /** @description If set to true right after connection method starts to dowanload all order history in background. Use /OrderHsitoryDownloaded endpoint to check when order history download completed */
          downloadOrderHistory?: boolean;
          reconnectOnSymbolUpdate?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Token that need to use in futher requests as 'id' parameter */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": string;
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ConnectProxy": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Connect to account with user, password, host, port.
     * @description Returns Token that you need to use as "id" parameter for further reqests
     */
    get: {
      parameters: {
        query: {
          /** @description Account number */
          user: number;
          /** @description Password */
          password: string;
          /** @description Host - ip adddress or dns name */
          host: string;
          /** @description Port */
          port: number;
          /** @description Proxy user */
          proxyUser?: string;
          /** @description Proxy password */
          proxyPassword?: string;
          /** @description Proxy server ip adddress */
          proxyHost: string;
          /** @description Proxy port */
          proxyPort: number;
          /** @description Proxy type. Put 'Socks5' for default parameters */
          proxyType: "None" | "Https" | "Socks4" | "Socks5";
          /** @description Please specify if you need some exact token value. If not specifed - random generated. */
          id?: string;
          /** @description 16 bytes array as string. Example: E5E28B096E7F8877334B197DE7F7F54D. If not specifed - random generated. */
          hardwareId?: string;
          /** @description One time password */
          otp?: string;
          /** @description Connect timeout in seconds */
          connectTimeoutSeconds?: number;
          /** @description If set to true right after connection method starts to dowanload all order history in background. Use /OrderHsitoryDownloaded endpoint to check when order history download completed */
          downloadOrderHistory?: boolean;
          reconnectOnSymbolUpdate?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Token that need to use in futher requests as 'id' parameter */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": string;
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ConnectProxyEx": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Connects to an MT5 account by <b>server name</b> while routing through a proxy server. */
    get: {
      parameters: {
        query: {
          /** @description The account number (login). */
          user: number;
          /** @description The account password. */
          password: string;
          /** @description The MT5 server name (e.g., "MetaQuotes-Demo"). */
          server: string;
          /** @description Proxy server hostname or IP. */
          proxyHost: string;
          /** @description Proxy server port. */
          proxyPort: number;
          /** @description Proxy type (default is Socks5). */
          proxyType?: "None" | "Https" | "Socks4" | "Socks5";
          /** @description Optional proxy username. */
          proxyUser?: string;
          /** @description Optional proxy password. */
          proxyPassword?: string;
          /** @description Optional custom token for this session. If omitted, a random token is generated and returned. */
          id?: string;
          /** @description Optional 16-byte hardware ID as hex string (e.g., "E5E28B096E7F8877334B197DE7F7F54D"). */
          hardwareId?: string;
          /** @description Optional one-time password if 2FA is enabled. */
          otp?: string;
          /** @description Max total connect timeout in seconds (default 60). */
          connectTimeoutSeconds?: number;
          /** @description Per cluster member connect timeout in seconds (default 20). */
          connectTimeoutClusterMemberSeconds?: number;
          /** @description If true, starts downloading full order history in the background after connection. */
          downloadOrderHistory?: boolean;
          /** @description If true, enables automatic reconnection when symbol data updates. */
          reconnectOnSymbolUpdate?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Token that need to use in futher requests as 'id' parameter */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": string;
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ConnectCert": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Connect to account with user, password, host, port.
     * @description Returns Token that you need to use as "id" parameter for further reqests
     */
    post: {
      parameters: {
        query?: {
          /** @description Please specify if you need some exact token value. If not specifed - random generated. */
          id?: string;
          /** @description 16 bytes array as string. Example: E5E28B096E7F8877334B197DE7F7F54D. If not specifed - random generated. */
          hardwareId?: string;
          /** @description One time password */
          otp?: string;
          connectTimeoutSeconds?: number;
          /** @description If set to true right after connection method starts to dowanload all order history in background. Use /OrderHsitoryDownloaded endpoint to check when order history download completed */
          downloadOrderHistory?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          "multipart/form-data": {
            /**
             * Format: int64
             * @default 21455
             */
            user: number;
            /** @default 1nJeS+Ae */
            password: string;
            /** @default 95.217.147.61 */
            host: string;
            /**
             * Format: int32
             * @default 443
             */
            port: number;
            /** Format: binary */
            pfxFile?: string;
            pfxFilePassword?: string;
          };
        };
      };
      responses: {
        /** @description Token that need to use in futher requests as 'id' parameter */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": string;
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/CheckConnect": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Check connection state and reconnect if connection lost */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Disconnect": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Disconnect from account */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ConnectionStatus": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Check connection state and reconnect if connection lost */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-ConnectionStatus">ConnectionStatus</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ConnectionStatus"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ConnectionStatusAll": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Check connection state and reconnect if connection lost */
    get: {
      parameters: {
        query: {
          /** @description Admin key */
          adminKey: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-ConnectionStatus">ConnectionStatus</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ConnectionStatus"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Account": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Accound details */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-AccountRec">Account details</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["AccountRec"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/AccountSummary": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Balance, Equity, Currency, FreeMargin, Margin, MarginLevel, Profit, Leverage, Credit */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-AccountSummary">AccountSummary</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["AccountSummary"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/AccountDetails": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Account number, name, server name, server time, server timezone, company, currency, margin stopout, margin call, group, account type, account leverage */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-AccounDetails">AccounDetails</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["AccounDetails"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OpenedOrders": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List of opened orders */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Sort by open time or close time */
          sort?: "OpenTime" | "CloseTime";
          /** @description Ascending sort */
          ascending?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ClosedOrders": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Last 100 orders closed during current session */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OpenedOrder": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Opened order by ticket */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Ticket number */
          ticket?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OpenedOrdersTickets": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Just tickets of opened orders */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Int64 objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": number[];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/QuoteClient": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Lot of informationabout about acocount. Can stuck swagger because of long json. You can use filter to reduce data. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Fields that need to return */
          filter?: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description QuoteClient object without symbol parameters. Please use 'SymbolParams' to get symbol parameters. */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["MT5API"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Symbols": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List of avaliable symbols with parameters */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-SymbolInfo">SymbolInfo</a> array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": {
              [key: string]: components["schemas"]["SymbolInfo"];
            };
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SymbolList": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List of avaliable symbols */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description String array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string[];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/GetQuote": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Latest quote for the specified symbol */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
          /** @description If last quote arrived less than msOlderMs milliseconds ago function returns last quote, overwise - wait for new quote. If zero - always returns last quote. */
          msNotOlder?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-Quote">Quote</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Quote"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/GetQuoteMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Latest quote for the specified symbol */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols */
          symbols: string[];
          /** @description If last quote arrived less than msOlderMs milliseconds ago function returns last quote, overwise - wait for new quote. If zero - always returns last quote. */
          msNotOlder?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-Quote">Quote</a> objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Quote"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/MarketWatchMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Market Watch for the specified symbols */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols */
          symbols: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-MarketWatch">Quote</a> objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["MarketWatch"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SymbolParams": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Full infromation about symbol and his group
     * @description <a href="#model-AccountType">Go to</a>
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Required symbol */
          symbol: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Symbol parameters */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["SymbolParams"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SymbolParamsMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Full infromation about symbol and his group for several symbols
     * @description <a href="#model-AccountType">Go to</a>
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Required symbol */
          symbol?: string[];
          /** @description If server has more than 'limit' symbols functon throws an exception */
          limit?: number;
          /** @description List of fields that need to return. If not specified - all fields. */
          filter?: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-SymbolParams">SymbolParams</a> object array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["SymbolParams"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SymbolSessions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Quote and trade sessions(open and close time) for the symbol. Returns 2 arrays. One for quotes and one for trades. Each array contains 7 elements for each day of weeks starting from Sunday. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Required symbol */
          symbol: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-SymbolSessions">SymbolSessions</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["SymbolSessions"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ServerTimezone": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Server timezone.
     * @description Returns an array of avaliable symbols
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Integer */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": number;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/IsTradeSession": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Check market open or not for specified symbol.
     * @description Returns an array of avaliable symbols
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Integer */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": boolean;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/IsTradeSessionMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Check market open or not for specified symbol.
     * @description Returns an array of avaliable symbols
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols. If not specified - all symbols. */
          symbols?: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Integer */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["SessionState"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/IsQuoteSession": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Check market open or not for specified symbol.
     * @description Returns an array of avaliable symbols
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns <a href="#model-SessionState">SessionState</a> array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["SessionState"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/IsQuoteSessionMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Check market open or not for specified symbol.
     * @description Returns an array of avaliable symbols
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols. If not specified - all symbols. */
          symbols?: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns <a href="#model-SessionState">SessionState</a> array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["SessionState"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/GetTickValueMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Tick value.
     * @description Returns an array of double values
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols array */
          symbol?: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Double array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": {
              [key: string]: number;
            }[];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/TickValueWithSize": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Tick value as array. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols array */
          symbol?: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-TickValueWithSize">TickValueWithSize</a> array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["TickValueWithSize"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ClusterDetails": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Cluster servers details */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-ClusterDetails">ClusterDetails</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ClusterDetails"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ChangePassword": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Change account password. In case of master password changing function disconnects account from mt5 server and delete specified 'id' token. So you need to call Connect() again with new password. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description New password */
          password?: string;
          /** @description True - if need to change investor password, False - if master password */
          isInvestor?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description 'OK' string */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Mails": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Mail inbox */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-MailMessage">MailMessage</a> array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["MailMessage"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/RequiredMargin": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Required margin */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
          /** @description Lots */
          lots: number;
          /** @description Buy or Sell */
          type?:
            | "DealBuy"
            | "DealSell"
            | "Balance"
            | "Credit"
            | "Charge"
            | "Correction"
            | "Bonus"
            | "Commission"
            | "DailyCommission"
            | "MonthlyCommission"
            | "DailyAgentCommission"
            | "MonthlyAgentCommission"
            | "InterestRate"
            | "CanceledBuy"
            | "CanceledSell"
            | "Dividend"
            | "FrankedDividend"
            | "Tax"
            | "AgentCommission"
            | "SoCompensation"
            | "SoCreditCompensation";
          /** @description Price */
          price?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Double */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": number;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/UpdateProfits": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Update order profits */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Double */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": number;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderHistory": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Order history */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description 'From date' in format: yyyy-MM-ddTHH:mm:ss */
          from: string;
          /** @description 'To date' in format: yyyy-MM-ddTHH:mm:ss */
          to: string;
          /** @description Sort by open time or close time */
          sort?: "OpenTime" | "CloseTime";
          /** @description Ascending sort */
          ascending?: boolean;
          /** @description List of fields that need to return. If not specified - all fields. */
          filter?: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["OrderHistoryEventArgs"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PendingOrderHistory": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Pending order history */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description 'From date' in format: yyyy-MM-ddTHH:mm:ss */
          from: string;
          /** @description 'To date' in format: yyyy-MM-ddTHH:mm:ss */
          to: string;
          /** @description Sort by open time or close time */
          sort?: "OpenTime" | "CloseTime";
          /** @description Ascending sort */
          ascending?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["OrderInternal"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderHistoryPagination": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Order history */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description 'From date' in format: yyyy-MM-ddTHH:mm:ss */
          from: string;
          /** @description 'To date' in format: yyyy-MM-ddTHH:mm:ss */
          to: string;
          /** @description Orders per page */
          ordersPerPage: number;
          /** @description Page index, starts from 0. */
          pageNumber: number;
          /** @description If need to force refresh orders from mt5 server */
          requestAgain?: boolean;
          /** @description Sort by open time or close time */
          sort?: "OpenTime" | "CloseTime";
          /** @description Ascending sort */
          ascending?: boolean;
          /** @description List of tickets that need to return. If not specified - returns all tickets. */
          tickets?: number[];
          /** @description Do not return deposit and withdraw operations */
          ignoreDepositWithdraw?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["PaginationReply"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderHistoryPaginationRelease": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Release memory used for order history pagination */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description 'From date' in format: yyyy-MM-ddTHH:mm:ss */
          from: string;
          /** @description 'To date' in format: yyyy-MM-ddTHH:mm:ss */
          to: string;
          /** @description Orders per page */
          ordersPerPage: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["PaginationReply"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/HistoryDealsByPositionId": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Order history */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Position ticket number */
          ticket: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["DealInternal"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/HistoryPositions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get history positons by ticket numbers with caching */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Ticket list of positions that you need */
          tickets?: number[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/HistoryPositionsByCloseTime": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Get history positons with caching */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description 'From date' in format: yyyy-MM-ddTHH:mm:ss */
          from: string;
          /** @description 'To date' in format: yyyy-MM-ddTHH:mm:ss */
          to: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderHistoryDownloadComplete": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Shows that all order history dowanload */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": boolean;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistoryMonth": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Price history for 30 days */
    get: {
      parameters: {
        query: {
          id: string;
          symbol: string;
          year: number;
          month: number;
          day: number;
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-Bar">Bar</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Bar"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistoryMonthMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** OHLC for 30 days for several symbols */
    get: {
      parameters: {
        query: {
          id: string;
          symbols: string[];
          year: number;
          month: number;
          day: number;
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-QuoteHistoryEventArgs">QuoteHistoryEventArgs</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["QuoteHistoryEventArgs"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistoryToday": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Price history for today */
    get: {
      parameters: {
        query: {
          id: string;
          /** @description Symbol */
          symbol: string;
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-Bar">Bar</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Bar"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistoryTodayMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Price history for today for several symbols */
    get: {
      parameters: {
        query: {
          id: string;
          /** @description Symbol */
          symbols: string[];
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-QuoteHistoryEventArgs">QuoteHistoryEventArgs</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["QuoteHistoryEventArgs"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistory": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Price history for range */
    get: {
      parameters: {
        query: {
          id: string;
          symbol: string;
          from: string;
          to: string;
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-Bar">Bar</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Bar"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistoryMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Price history for several symbols */
    get: {
      parameters: {
        query: {
          id: string;
          symbol: string[];
          from: string;
          to: string;
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-BarsForSymbol">BarsForSymbol</a> objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["BarsForSymbol"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistoryHighLow": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Price history for range */
    get: {
      parameters: {
        query: {
          id: string;
          symbol: string;
          from: string;
          to: string;
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-Bar">Bar</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Bar"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistoryEx": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Request quote history from specified date for several bars back to the past */
    get: {
      parameters: {
        query: {
          id: string;
          symbol: string;
          from: string;
          numBars: number;
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-Bar">Bar</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Bar"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PriceHistoryExMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Request quote history from specified date for several bars back to the past */
    get: {
      parameters: {
        query: {
          id: string;
          symbol: string[];
          from: string;
          numBars: number;
          timeFrame: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-BarsForSymbol">BarsForSymbol</a> objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["BarsForSymbol"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Ping": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Simple test without parameters */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": string;
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PingHost": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Simple test without parameters */
    get: {
      parameters: {
        query: {
          host: string;
          port?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Ping time in milliseconds */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": number;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/PingHostMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Simple test without parameters */
    get: {
      parameters: {
        query: {
          host: string[];
          port: number[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Integer. In milliseconds */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": number[];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Broker search by company name */
    get: {
      parameters: {
        query: {
          /** @description Company name */
          company: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns company names with IP addresses or DNS names */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Company"][];
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/LoadServersDat": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /** Extract servers from servers.dat */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: {
        content: {
          "multipart/form-data": {
            /** Format: binary */
            file?: string;
          };
        };
      };
      responses: {
        /** @description Servers array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": components["schemas"]["Server"][];
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/GetDemo": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Create demo account */
    get: {
      parameters: {
        query: {
          host: string;
          port: number;
          userName?: string;
          accType?: string;
          country?: string;
          city?: string;
          state?: string;
          zipCode?: string;
          address?: string;
          phone?: string;
          email?: string;
          companyName?: string;
          deposit?: number;
          leverage?: number;
          flags?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Account details */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": components["schemas"]["AccountAnswer"];
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/ReadMe": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** readme.md as html */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Success */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Version": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** API version */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Version */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": string;
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/MetricsApiKey": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Metrics */
    get: {
      parameters: {
        query?: {
          apiKey?: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Version */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": components["schemas"]["MetricsApiKeyResult"];
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/Subscribe": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subscribe symbol for real time quotes and get results via /events socket connection
     * @description Use /events web socket to get result
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
          /** @description Minimum interval between events in milliseconds */
          interval?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SubscribeMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subscribe symbosl for real time quotes and get results via /events socket connection
     * @description Use /events web socket to get result
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols array */
          symbols: string[];
          /** @description Minimum interval between events in milliseconds */
          interval?: number;
          /** @description Susbcribe all symbols with one reuest to MT5 server. Experimantal. */
          force?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/UnSubscribe": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Unsubscribe symbol for real time quotes and get results via /events socket connection
     * @description Use /events web socket to get result
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/UnSubscribeMany": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * UnSubscribe symbosls for real time quotes and get results via /events socket connection
     * @description Use /events web socket to get result
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols array */
          symbols?: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SubscribeTickValue": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subscribe symbol for tick value updates
     * @description Use /events or /OnTickValue web socket to get result
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
          /** @description Minimum interval between events in milliseconds */
          interval?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SubscribeMarketWatch": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Subscribe market watch updates for /Events socket */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SubscribeOrderBook": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subscribe symbosl for real time quotes and get results via /events socket connection
     * @description Use /OnOrderBook websocket to get result
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols array */
          symbols: string[];
          /** @description Minimum interval between events in milliseconds */
          interval?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/UnsubscribeOrderBook": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** UnSubscribe symbosls for real time quotes and get results via /events socket connection */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbols array */
          symbols: string[];
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SubscribeOhlc": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subscribe Open/High/Low/Close price updates for symbol
     * @description Use /OnOhlc websocket to get result
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol?: string;
          /** @description Timeframe in minutes */
          timeframe?: number;
          /** @description Minimum interval between events in seconds */
          interval?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of Order objects */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/UnsubscribeOhlc": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** UnSubscribe symbosls for real time quotes and get results via /events socket connection */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol?: string;
          /** @description Timeframe in minutes */
          timeframe?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/SubscribedSymbols": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** List of subscribed symbols */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns string array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string[];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/TickHistoryRequest": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Request tick history from specified time to present time. Please get result with OnTickHistory websocket. */
    get: {
      parameters: {
        query: {
          id: string;
          symbol: string;
          startYear: number;
          startMonth: number;
          startDay: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-Bar">Bar</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/TickHistoryStop": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Stop tick history request for some symbol */
    get: {
      parameters: {
        query: {
          id: string;
          symbol: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Array of <a href="#model-Bar">Bar</a> */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/EquityHistory": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Equity history */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description From datetime */
          from: string;
          /** @description Return short version without equal bars */
          excludeSameBars?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-EquityPoint">EquityPoint</a> array */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["EquityPoint"][];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/TradeStats": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Long json response can stuck swagger. Please call directly from browser wihthout swagger in this case.
     * @description Returns StatsResult that contains calulcated parameters and charts.
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by Connect method from mt4.mtapi.io */
          id: string;
          /** @description 'From date' in format: yyyy-MM-ddTHH:mm:ss */
          from: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-Stats">StatsResult</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": components["schemas"]["Stats"];
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/TradeStatsEquityHistory": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Long json response can stuck swagger. Please call directly from browser wihthout swagger in this case.
     * @description Returns StatsResult that contains calulcated parameters and charts.
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by Connect method from mt4.mtapi.io */
          id: string;
          /** @description 'From date' in format: yyyy-MM-ddTHH:mm:ss */
          from: string;
          /** @description Return short version without equal bars */
          excludeSameBars?: boolean;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-StatsWithCharts">StatsResult</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": components["schemas"]["StatsWithCharts"];
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/TradeUnrealizedPL": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Long json response can stuck swagger. Please call directly from browser wihthout swagger in this case.
     * @description Returns StatsResult that contains calulcated parameters and charts.
     */
    get: {
      parameters: {
        query: {
          /** @description Token returned by Connect method from mt4.mtapi.io */
          id: string;
          /** @description 'From date' in format: yyyy-MM-ddTHH:mm:ss */
          from: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description <a href="#model-StatsWithCharts">StatsResult</a> object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/plain": components["schemas"]["TradeUnrealizedExtrema"][];
          };
        };
        /** @description Some exception happened */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderSendSafe": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Send market or pending order */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
          /** @description Buy, Sell, BuyLimit, SellLimit, BuyStop, SellStop */
          operation:
            | "Buy"
            | "Sell"
            | "BuyLimit"
            | "SellLimit"
            | "BuyStop"
            | "SellStop"
            | "BuyStopLimit"
            | "SellStopLimit"
            | "CloseBy"
            | "Balance"
            | "Credit";
          /** @description Lots */
          volume: number;
          /** @description Price. Optional, but required in case of Instant Execution. */
          price?: number;
          /** @description Slippage. Optional. */
          slippage?: number;
          /** @description StopLoss. Optional. */
          stoploss?: number;
          /** @description TakeProfit. Optional. */
          takeprofit?: number;
          /** @description Comment. Optional. */
          comment?: string;
          /** @description For the StopLimit order. Optional. */
          stopLimitPrice?: number;
          /** @description Expiration time in yyyy-MM-ddTHH:mm:ss format */
          expiration?: string;
          /** @description Expiration type */
          expirationType?: "GTC" | "Today" | "Specified" | "SpecifiedDay";
          /** @description Who placed the order */
          placedType?:
            | "Manually"
            | "ByExpert"
            | "ByDealer"
            | "OnSL"
            | "OnTP"
            | "OnStopOut"
            | "OnRollover"
            | "OnVmargin"
            | "Gateway"
            | "Signal"
            | "Settlement"
            | "Transfer"
            | "Sync"
            | "ExternalService"
            | "Migration"
            | "Mobile"
            | "Web"
            | "OnSplit"
            | "Default";
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Order object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderModifySafe": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Modify market or pending order */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Order ticket */
          ticket: number;
          /** @description StopLoss. */
          stoploss: number;
          /** @description TakeProfit */
          takeprofit: number;
          /** @description Price */
          price?: number;
          /** @description Expiartion in format: yyyy-MM-ddTHH:mm:ss */
          expiration?: string;
          /** @description Expiration type */
          expirationType?: "GTC" | "Today" | "Specified" | "SpecifiedDay";
          /** @description Stop limit price for stop limit orders */
          stoplimit?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Order object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderCloseSafe": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Close market or pending order */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Order ticket */
          ticket: number;
          /** @description Lots. Optional. */
          lots?: number;
          /** @description Price. Optional, but required in case of Instant Execution. */
          price?: number;
          /** @description Slippage. Optional. */
          slippage?: number;
          /** @description Comment */
          comment?: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Order object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderSendTask": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Send market or pending order */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Symbol */
          symbol: string;
          /** @description Buy, Sell, BuyLimit, SellLimit, BuyStop, SellStop */
          operation:
            | "Buy"
            | "Sell"
            | "BuyLimit"
            | "SellLimit"
            | "BuyStop"
            | "SellStop"
            | "BuyStopLimit"
            | "SellStopLimit"
            | "CloseBy"
            | "Balance"
            | "Credit";
          /** @description Lots */
          volume: number;
          /** @description Price. Optional, but required in case of Instant Execution. */
          price?: number;
          /** @description Slippage. Optional. */
          slippage?: number;
          /** @description StopLoss. Optional. */
          stoploss?: number;
          /** @description TakeProfit. Optional. */
          takeprofit?: number;
          /** @description Comment. Optional. */
          comment?: string;
          /** @description Custom user field. You can specify any value up to your needs. In MT4 this parameter called 'magic number.' */
          expertID?: number;
          /** @description For the StopLimit order. Optional. */
          stopLimitPrice?: number;
          /** @description Expiration time in yyyy-MM-ddTHH:mm:ss format */
          expiration?: string;
          /** @description Expiration type */
          expirationType?: "GTC" | "Today" | "Specified" | "SpecifiedDay";
          /** @description Who placed the order */
          placedType?:
            | "Manually"
            | "ByExpert"
            | "ByDealer"
            | "OnSL"
            | "OnTP"
            | "OnStopOut"
            | "OnRollover"
            | "OnVmargin"
            | "Gateway"
            | "Signal"
            | "Settlement"
            | "Transfer"
            | "Sync"
            | "ExternalService"
            | "Migration"
            | "Mobile"
            | "Web"
            | "OnSplit"
            | "Default";
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Order object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderModifyTask": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Modify market or pending order */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Order ticket */
          ticket: number;
          /** @description StopLoss. */
          stoploss: number;
          /** @description TakeProfit */
          takeprofit: number;
          /** @description Price */
          price?: number;
          /** @description Expiartion in format: yyyy-MM-ddTHH:mm:ss */
          expiration?: string;
          /** @description Expiration type */
          expirationType?: "GTC" | "Today" | "Specified" | "SpecifiedDay";
          /** @description Stop limit price for stop limit orders */
          stoplimit?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Order object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OrderCloseTask": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Close market or pending order */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Order ticket */
          ticket: number;
          /** @description Lots. Optional. */
          lots?: number;
          /** @description Price. Optional, but required in case of Instant Execution. */
          price?: number;
          /** @description Slippage. Optional. */
          slippage?: number;
          /** @description Comment */
          comment?: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Order object */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Order"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnOrderUpdate": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** All trading activity on accont. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["OrderUpdateSummary"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnQuote": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Real time quotes. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["Quote"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnTickValue": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Real time quotes. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["SymbolTickValue"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnOrderProfit": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Orders profits updates. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ProfitUpdate"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnMarketWatch": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Market watch updates. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["MarketWatch"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnTickHistory": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Tick history. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["TickHistoryEventArgs"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnMail": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Tick history. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["MailMessage"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnOpenedOrdersTickets": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Sends opened order tickets each 'interval' milliseconds */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Interval in milliseconds to send open order tickets */
          interval?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["MailMessage"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnOpenedOrdersTicketsProfit": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Periodically sends pairs { ticket, profit } for all opened orders. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
          /** @description Interval in milliseconds */
          interval?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": string;
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnOrderBook": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** Market depth. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["SymbolBook"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/OnOhlc": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /** K-line updates. */
    get: {
      parameters: {
        query: {
          /** @description Token returned by 'Connect' method */
          id: string;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Returns 'OK' */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["OhlcSubscription"];
          };
        };
        /** @description <a href="#model-ExceptionResult">ExceptionResult</a> object */
        201: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "text/json": components["schemas"]["ExceptionResult"];
          };
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** @description Server name and adresses from servers.dat */
    Access: {
      accessRec?: components["schemas"]["AccessRec"];
      addresses?: components["schemas"]["AddressRec"][] | null;
    };
    /** @description Server name and adresses from servers.dat */
    AccessEx: {
      accessRec?: components["schemas"]["AccessRecEx"];
      addresses?: components["schemas"]["AddressRecEx"][] | null;
    };
    /** @description ServerName from servers.dat */
    AccessRec: {
      serverName?: string | null;
    };
    /** @description Server information from servers.dat */
    AccessRecEx: Record<string, never>;
    /** @description Account details */
    AccounDetails: {
      /** @description Server name */
      serverName?: string | null;
      /**
       * Format: int64
       * @description Account number
       */
      user?: number;
      /** @description Password */
      password?: string | null;
      /** @description Host */
      host?: string | null;
      /**
       * Format: int32
       * @description Port
       */
      port?: number;
      /**
       * Format: date-time
       * @description Server time
       */
      serverTime?: string;
      /**
       * Format: int32
       * @description Server timezone
       */
      serverTimeZone?: number;
      /** @description Broker company name */
      company?: string | null;
      /** @description Account currency */
      currency?: string | null;
      /** @description Account user name */
      accountName?: string | null;
      /** @description Account group */
      group?: string | null;
      /** @description Account type */
      accountType?: string | null;
      /**
       * Format: int32
       * @description Account leverage
       */
      accountLeverage?: number;
      /**
       * @description Netting or Hedging
       * @enum {string}
       */
      accountMethod?: "Default" | "Netting" | "Hedging";
      /** @description Check if password is readonly */
      isInvestor?: boolean;
    };
    AccountAnswer: {
      /** Format: int64 */
      login?: number;
      password?: string | null;
      investor?: string | null;
    };
    /** @description Account details */
    AccountRec: {
      /** Format: int64 */
      login?: number;
      type?: string | null;
      userName?: string | null;
      /** Format: int32 */
      tradeFlags?: number;
      country?: string | null;
      city?: string | null;
      state?: string | null;
      zipCode?: string | null;
      userAddress?: string | null;
      phone?: string | null;
      email?: string | null;
      /** Format: double */
      balance?: number;
      /** Format: double */
      credit?: number;
      /** Format: double */
      blocked?: number;
      /** Format: int32 */
      leverage?: number;
    };
    /** @description Account summary trading information */
    AccountSummary: {
      /**
       * Format: double
       * @description Balance
       */
      balance?: number;
      /**
       * Format: double
       * @description Credit
       */
      credit?: number;
      /**
       * Format: double
       * @description Profit
       */
      profit?: number;
      /**
       * Format: double
       * @description Equity
       */
      equity?: number;
      /**
       * Format: double
       * @description Used margin
       */
      margin?: number;
      /**
       * Format: double
       * @description Free margin
       */
      freeMargin?: number;
      /**
       * Format: double
       * @description Margin percent
       */
      marginLevel?: number;
      /**
       * Format: double
       * @description Leverage
       */
      leverage?: number;
      /** @description Currency */
      currency?: string | null;
      /**
       * @description Netting or Hedging
       * @enum {string}
       */
      method?: "Default" | "Netting" | "Hedging";
      /** @description Demo or real */
      type?: string | null;
      /** @description Investor mode */
      isInvestor?: boolean;
    };
    /** @description Server address from servers.dat */
    AddressRec: {
      address?: string | null;
    };
    /** @description Server information from servers.dat */
    AddressRecEx: Record<string, never>;
    AveragePipsUsd: {
      /** Format: double */
      averagePips?: number;
      /** Format: double */
      averageUsd?: number;
    };
    /** @description OHLC */
    Bar: {
      /** Format: date-time */
      time?: string;
      /** Format: double */
      openPrice?: number;
      /** Format: double */
      highPrice?: number;
      /** Format: double */
      lowPrice?: number;
      /** Format: double */
      closePrice?: number;
      /** Format: int64 */
      tickVolume?: number;
      /** Format: int32 */
      spread?: number;
      /** Format: int64 */
      volume?: number;
    };
    /** @description QuoteHistoryMany reply */
    BarsForSymbol: {
      /** @description Symbols */
      symbol?: string | null;
      /** @description Bars */
      bars?: components["schemas"]["Bar"][] | null;
      /** @description Error details */
      exception?: string | null;
    };
    BookBar: {
      /** Format: int64 */
      updateMask?: number;
      /** @enum {string} */
      type?: "Reset" | "SellBook" | "BuyBook" | "SellMarket" | "BuyMarket";
      /** Format: double */
      price?: number;
      /** Format: int64 */
      volume?: number;
      /** Format: double */
      readonly lots?: number;
    };
    ClusterDetails: {
      general?: components["schemas"]["ServerRec"];
      servers?: {
        [key: string]: components["schemas"]["AddressRec"][] | null;
      } | null;
    };
    Comission: {
      /** @enum {string} */
      unitType?:
        | "vCurrencyUnit"
        | "vBaseCurrencyUnit"
        | "vProfitCurrencyUnit"
        | "vMarginCurrencyUnit"
        | "vPointsUnit"
        | "vMoneyCurrencyUnit"
        | "vSpecifiedUnit"
        | "vProfitUnit";
      /** @enum {string} */
      unitMode?: "vPerDealCommission" | "vPerLotCommission" | "vPerValueCommission";
      /** Format: double */
      unitValue?: number;
      /** Format: double */
      minValue?: number;
      /** Format: double */
      maxValue?: number;
      /** Format: double */
      minUnit?: number;
      currencyUnit?: string | null;
      /** Format: double */
      maxUnit?: number;
      /** Format: byte */
      s50?: string | null;
    };
    ComissionInfo: {
      comissions?: components["schemas"]["Comission"][] | null;
      s0?: string | null;
      s80?: string | null;
      groupName?: string | null;
      /** Format: byte */
      s200?: string | null;
      /** Format: int32 */
      s240?: number;
      /** @enum {string} */
      type?:
        | "vDefaultCommission"
        | "vTurnMoneyCommission"
        | "vTurnLotsCommission"
        | "vDealsCommission"
        | "vProfitCommission";
      /** @enum {string} */
      period?: "vPerDailyCommission" | "vPerMonthlyCommission" | "vPerInstantCommission";
      moneyCurrency?: string | null;
      /** @enum {string} */
      instantType?: "vInOutDealsCommission" | "vInDealsCommission" | "vOutDealsCommission";
      /** Format: int32 */
      s270?: number;
      /** Format: int32 */
      s274?: number;
      /** Format: int32 */
      s278?: number;
      /** Format: byte */
      s27C?: string | null;
    };
    Company: {
      companyName?: string | null;
      results?: components["schemas"]["Result"][] | null;
    };
    /**
     * @description Represents the connection status of a trading terminal,
     *     including connectivity state and key timestamps.
     */
    ConnectionStatus: {
      /** @description Token */
      id?: string | null;
      /** @description Gets or sets a value indicating whether the terminal is currently connected. */
      isConnected?: boolean;
      /**
       * Format: date-time
       * @description Gets or sets the UTC timestamp of the most recent successful connection to the server.
       */
      connectTimeUTC?: string;
      /**
       * Format: date-time
       * @description Gets or sets the UTC timestamp of the last received market quote from the server.
       */
      lastQuoteTimeUTC?: string;
    };
    /** @description Internal details for the deal */
    DealInternal: {
      /**
       * Format: int64
       * @description Deal ticket
       */
      ticketNumber?: number;
      /** @description Text id */
      id?: string | null;
      /**
       * Format: int64
       * @description Account login
       */
      login?: number;
      /**
       * Format: int64
       * @description History time (as FileTime format)
       */
      historyTime?: number;
      /**
       * Format: int64
       * @description Order ticket
       */
      orderTicket?: number;
      /**
       * Format: int64
       * @description Open time
       */
      openTime?: number;
      /** @description Symbol currency */
      symbol?: string | null;
      /**
       * @description Deal type
       * @enum {string}
       */
      type?:
        | "DealBuy"
        | "DealSell"
        | "Balance"
        | "Credit"
        | "Charge"
        | "Correction"
        | "Bonus"
        | "Commission"
        | "DailyCommission"
        | "MonthlyCommission"
        | "DailyAgentCommission"
        | "MonthlyAgentCommission"
        | "InterestRate"
        | "CanceledBuy"
        | "CanceledSell"
        | "Dividend"
        | "FrankedDividend"
        | "Tax"
        | "AgentCommission"
        | "SoCompensation"
        | "SoCreditCompensation";
      /**
       * @description Deal direction
       * @enum {string}
       */
      direction?: "In" | "Out" | "InOut" | "OutBy";
      /**
       * Format: double
       * @description Open price
       */
      openPrice?: number;
      /**
       * Format: double
       * @description Price
       */
      price?: number;
      /**
       * Format: double
       * @description Stop loss
       */
      stopLoss?: number;
      /**
       * Format: double
       * @description Take profit
       */
      takeProfit?: number;
      /**
       * Format: int64
       * @description Volume
       */
      volume?: number;
      /**
       * Format: double
       * @description Profit (money digits)
       */
      profit?: number;
      /**
       * Format: double
       * @description Profit rate
       */
      profitRate?: number;
      /**
       * Format: double
       * @description Volume rate
       */
      volumeRate?: number;
      /**
       * Format: double
       * @description Commission (money digits)
       */
      commission?: number;
      /** Format: double */
      fee?: number;
      /**
       * Format: double
       * @description Swap
       */
      swap?: number;
      /**
       * Format: int64
       * @description Expert id
       */
      expertId?: number;
      /**
       * Format: int64
       * @description Position ticket
       */
      positionTicket?: number;
      /** @description Text comment */
      comment?: string | null;
      /**
       * Format: double
       * @description Lots
       */
      contractSize?: number;
      /**
       * Format: int32
       * @description Significant digits
       */
      digits?: number;
      /**
       * Format: int32
       * @description Money significant digits
       */
      moneyDigits?: number;
      /**
       * Format: double
       * @description Free profit
       */
      freeProfit?: number;
      /**
       * Format: double
       * @description Trail rounder
       */
      trailRounder?: number;
      /**
       * Format: int64
       * @description Open time (ms)
       */
      openTimeMs?: number;
      /**
       * @description Placed type
       * @enum {string}
       */
      placedType?:
        | "Manually"
        | "ByExpert"
        | "ByDealer"
        | "OnSL"
        | "OnTP"
        | "OnStopOut"
        | "OnRollover"
        | "OnVmargin"
        | "Gateway"
        | "Signal"
        | "Settlement"
        | "Transfer"
        | "Sync"
        | "ExternalService"
        | "Migration"
        | "Mobile"
        | "Web"
        | "OnSplit"
        | "Default";
      /**
       * Format: date-time
       * @description Open time
       */
      readonly openTimeAsDateTime?: string;
      /**
       * Format: double
       * @description Lots
       */
      readonly lots?: number;
    };
    /** @description Point of equity history */
    EquityPoint: {
      /**
       * Format: date-time
       * @description Time
       */
      time?: string;
      /**
       * Format: double
       * @description Balance
       */
      balance?: number;
      /**
       * Format: double
       * @description Equity
       */
      equity?: number;
      /**
       * Format: double
       * @description Balance raw drawdown
       */
      balanceDrawdownRaw?: number;
      /**
       * Format: double
       * @description Balance relative drawdown
       */
      balanceDrawdownRelative?: number;
      /**
       * Format: double
       * @description Balance raw drawdown
       */
      equityDrawdownRaw?: number;
      /**
       * Format: double
       * @description Balance relative drawdown
       */
      equityDrawdownRelative?: number;
      /**
       * Format: double
       * @description Realized profit or loss
       */
      realizedPL?: number;
      /**
       * Format: double
       * @description Unrealized profit or loss
       */
      unrealizedPL?: number;
    };
    /** @description Result in case of exception(StatusCode == 201) */
    ExceptionResult: {
      /** @description Exception message */
      message?: string | null;
      /**
       * @description Returns zero in case of internal API exception, not zero - if exception reply from server
       * @enum {string}
       */
      code?:
        | "DONE"
        | "OK"
        | "COMMON_ERROR"
        | "INVALID_PARAM"
        | "INVALID_DATA"
        | "DISK_ERROR"
        | "MEMORY_ERROR"
        | "NETWORK_ERROR"
        | "NOT_PERMISSION"
        | "OPERATION_TIMEOUT"
        | "NO_CONNECTION"
        | "SERVICE_NOT_AVAILABLE"
        | "TOO_FREQUENT_REQUEST"
        | "NOT_FOUND"
        | "SERVER_SHUTDOWN"
        | "OPERATION_CANCELED"
        | "DUPLICATE_ATTEMPT"
        | "INVALID_TERMINAL"
        | "INVALID_ACCOUNT"
        | "ACCOUNT_DISABLED"
        | "ADVANCED_AUTHORIZATION"
        | "CERTIFICATE_REQUIRED"
        | "INVALID_CERTIFICATE"
        | "CERTIFICATE_NOT_CONFIRM"
        | "ATTEMPT_CONNECT_NON_ACCESS_SERVER"
        | "INVALID_SERVER"
        | "ONLY_UPDATES_AVAILABLE"
        | "OLD_VERSION"
        | "ACCOUNT_NOT_MANAGER_CONFIG"
        | "UNALLOWED_IP_ADDRESS"
        | "GROUP_NOT_INITIALIZED"
        | "CERTIFICATE_GENERATION_DISABLED"
        | "INVALID_SERVER_ID"
        | "UNALLOWED_ADDRESS"
        | "INVALID_SERVER_TYPE"
        | "SERVER_BUSY"
        | "INVALID_SERVER_CERTIFICATE"
        | "UNKNOWN_ACCOUNT"
        | "OLD_SERVER"
        | "SERVER_LICENSE_LIMITATION"
        | "MOBILE_TERMINAL_NOT_ALLOWED"
        | "CONNECTION_NOT_PERMITTED"
        | "DEMO_DISABLED"
        | "PASSWORD_MUST_CHANGED"
        | "INVALID_ONETIME_PASSWORD"
        | "SECRET_KEY_REQUIRED"
        | "MT4_MIGRATION_PASSWORD"
        | "MT5_MIGRATION_PASSWORD"
        | "LAST_CONFIG_CANT_DELETE"
        | "LAST_GROUP_CANT_DELETE"
        | "ACCOUNTS_IN_GROUP"
        | "INVALID_ACCOUNT_OR_TRADE_RANGES"
        | "ACCOUNT_NOT_GROUP"
        | "PROTECTED_CONFIG"
        | "CONFIG_DUPLICATE"
        | "CONFIG_LIMIT_REACHED"
        | "INVALID_NETWORK_CONFIG"
        | "DIALER_ID_ALREADY_EXISTS"
        | "ADDRESS_ALREADY_EXISTS"
        | "ATTEMPT_DELETE_WORKING_SERVER"
        | "GATEWAY_NAME_ALREADY_EXISTS"
        | "SERWER_SWITCHED_TO_BACKUP"
        | "BACKUP_MODULE_ABSENT"
        | "TRADE_MODULE_ABSENT"
        | "HISTORY_MODULE_ABSENT"
        | "ANOTHER_PROCESS_IN_PROGRESS"
        | "LAST_ACCOUNT_CANT_DELETE"
        | "LOGIN_RANGE_EXHAUSTED"
        | "LOGIN_RESERVED"
        | "ACCOUNT_ALREADY_EXISTS"
        | "ATTEMPT_SELF_DELETION"
        | "INVALID_PASSWORD"
        | "USERS_LIMIT_REACHED"
        | "ACCOUNT_HAS_OPEN_TRADES"
        | "ATTEMPT_TO_MORE_ACCOUNT"
        | "ATTEMPT_TO_MORE_GROUP"
        | "ACCOUNT_BALANCE_ERROR"
        | "ACCOUNT_HAS_INVALID_GROUP"
        | "ONETRADE_ACCOUNT_ALREADY_EXISTS"
        | "ACCOUNT_TRADE_DATA_IMPORT_ERROR"
        | "ACCOUNT_TRADE_POSITION_IMPORT_ERROR"
        | "ACCOUNT_OPEN_ORDERS_IMPORT_ERROR"
        | "ACCOUNT_DEALS_HISTORY_IMPORT_ERROR"
        | "ACCOUNT_ORDERS_HISTORY_IMPORT_ERROR"
        | "ORDER_LIMIT_REACHED"
        | "ORDER_ALREADY_EXISTS"
        | "ORDER_RANGE_EXHAUSTED"
        | "DEAL_RANGE_EXHAUSTED"
        | "MONEY_LIMIT_REACHED"
        | "DEAL_ALREADY_EXISTS"
        | "ORDER_TICKET_RESERVED"
        | "DEAL_TICKET_RESERVED"
        | "BASE_SNAPSHOT_ERROR"
        | "METHOD_NOT_SUPPORTED"
        | "NO_DATA_REPORT"
        | "BAD_TEMPLATE"
        | "END_OF_TEMPLATE"
        | "INVALID_ROW_SIZE"
        | "REPEAT_LIMIT_REACHED"
        | "REPORT_SIZE_LIMIT_REACHED"
        | "SYMBOL_NOT_FOUND"
        | "REQUEST_ON_WAY"
        | "REQUEST_ACCEPTED"
        | "REQUEST_PROCESSED"
        | "REQUOTE"
        | "PRICES"
        | "REQUEST_REJECTED"
        | "REQUEST_CANCELLED"
        | "ORDER_PLACED"
        | "REQUEST_EXECUTED"
        | "REQUEST_EXECUTED_PARTIALLY"
        | "REQUEST_ERROR"
        | "REQUEST_TIMEOUT"
        | "INVALID_REQUEST"
        | "INVALID_VOLUME"
        | "INVALID_PRICE"
        | "INVALID_STOPS"
        | "TRADE_DISABLED"
        | "MARKET_CLOSED"
        | "NO_MONEY"
        | "PRICE_CHANGED"
        | "NO_PRICES"
        | "INVALID_EXPIRATION"
        | "ORDER_ALREADY_CHANGED"
        | "TOO_MANY_TRADE_REQUESTS"
        | "NO_CHANGES"
        | "AUTOTRADE_DISABLE_SERVER"
        | "AUTOTRADE_DISABLE_CLIENT"
        | "MODIFICATION_FAILED"
        | "UNSUPPORTED_FILLING_MODE"
        | "REQUEST_REJECTED_TO_ABSENCE_CONNECT"
        | "ALLOWED_REAL_ACCOUNTS_ONLY"
        | "ORDER_LIMIT_REACHED_"
        | "VOLUME_LIMIT_REACHED"
        | "INVALID_ORDER"
        | "POSITION_NOT_EXISTS"
        | "EXECUTION_NOT_BELONG_SERVER"
        | "VOLUME_CLOSE_EXCEEDS_POSITION"
        | "ORDER_CLOSE_ALREADY_EXISTS"
        | "POSITION_LIMIT_REACHED"
        | "ORDER_CANCELLED"
        | "ONLY_LONG_POSITION"
        | "ONLY_SHORT_POSITION"
        | "ONLY_CLOSE_POSITION"
        | "FIFO_CLOSE"
        | "HEDGE_PROHIBITED"
        | "REQUEST_RETURNED_IN_QUEUE"
        | "REQUEST_EXECUTED_PARTIALLY_"
        | "REQUOTE_"
        | "INVALID_TOKEN"
        | "INVALID_SYMBOL"
        | "INVALID_TICKET"
        | "SAME_PARAMS"
        | "CONNECT_ERROR"
        | "TIMEOUT"
        | "SOCKET_ERROR"
        | "DOUBLE_REQUEST"
        | "SERVER_BLACKLISTED"
        | "SERVER_NOT_FOUND"
        | "TOO_FREQUENT_FAIL_CONNECT"
        | "TOO_FREQUENT_CONNECT_TO_ONE_SERVER"
        | "TOO_FREQUENT_SOCKET_ERROR"
        | "ORDER_HISTORY_NOT_READY"
        | "INVESTOR_MODE"
        | "NULL_ARGUMENT"
        | "NETWORK_PROBLEM";
      /** @description Stack trace */
      stackTrace?: string | null;
    };
    Expectancy: {
      /** Format: double */
      pips?: number;
      /** Format: double */
      dollar?: number;
    };
    /** @description Main class to trade and get data */
    MT5API: {
      /**
       * Format: int32
       * @description Maximum ms to wait for execution
       */
      executionTimeout?: number;
      /**
       * @description Manually or by expert
       * @enum {string}
       */
      placedType?:
        | "Manually"
        | "ByExpert"
        | "ByDealer"
        | "OnSL"
        | "OnTP"
        | "OnStopOut"
        | "OnRollover"
        | "OnVmargin"
        | "Gateway"
        | "Signal"
        | "Settlement"
        | "Transfer"
        | "Sync"
        | "ExternalService"
        | "Migration"
        | "Mobile"
        | "Web"
        | "OnSplit"
        | "Default";
      loginIdPath?: string | null;
      /** Format: int32 */
      loginIdWebServerTimeout?: number;
      apiKey?: string | null;
      exLoginManagers?: string[] | null;
      exLoginProxies?: string[] | null;
      disallowLocalConnections?: boolean;
      useConnectTask?: boolean;
      proxyEnable?: boolean;
      proxyHost?: string | null;
      /** Format: int32 */
      proxyPort?: number;
      proxyUser?: string | null;
      proxyPassword?: string | null;
      /**
       * @description Specifies the type of proxy servers that an instance of the ProxySocket class can use.
       * @enum {string}
       */
      proxyType?: "None" | "Https" | "Socks4" | "Socks5";
      /** Format: int32 */
      getQuoteTimeoutMs?: number;
      /** Format: int32 */
      processEventTimeoutMs?: number;
      /** Format: int32 */
      downloadOrderHistoryTimeout?: number;
      symbols?: components["schemas"]["Symbols"];
      /**
       * Format: int32
       * @description Force reconnect if no quotes for some number of milliseconds.
       */
      noServerMessagesTimeout?: number;
      /**
       * Format: date-time
       * @description Local time of last server message.
       */
      lastServerMessageTime?: string;
      /** @description Host */
      server?: string | null;
      /**
       * Format: int32
       * @description Milliseconds. Throw ConnectException if not connected at this period.
       */
      connectTimeout?: number;
      /** Format: int32 */
      connectTimeoutForOneClusterMember?: number;
      account?: components["schemas"]["AccountRec"];
      otpPassword?: string | null;
      /** Format: date-time */
      readonly connectTime?: string;
      disconnectOnSymbolUpdate?: boolean;
      processServerMessagesInThread?: boolean;
      /** @description For user purposes */
      id?: string | null;
      /** @description Host */
      host?: string | null;
      /**
       * Format: int32
       * @description Port
       */
      port?: number;
      /**
       * Format: byte
       * @description Certificate *.pfx file
       */
      pfxFile?: string | null;
      /** @description Pfx file password */
      pfxFilePassword?: string | null;
      /** Format: byte */
      commonKey?: string | null;
      /**
       * Format: date-time
       * @description Last quote time, refreshing goes with using incoming quotes.
       */
      readonly lastQuoteTime?: string;
      /**
       * Format: date-time
       * @description Server time, refreshing goes with using incoming quotes.
       */
      readonly serverTime?: string;
      /** Format: byte */
      hardwareId?: string | null;
      /** Format: int32 */
      readonly serverTimeZoneInMinutes?: number;
      clusterSummary?: components["schemas"]["ServerRec"];
      readonly clusterMembers?: {
        [key: string]: components["schemas"]["AddressRec"][] | null;
      } | null;
      /** @description Account currency */
      readonly accountCurrency?: string | null;
      /** Format: int32 */
      readonly serverBuild?: number;
      /** @description Company name */
      readonly accountCompanyName?: string | null;
      /**
       * @description Netting or hedging
       * @enum {string}
       */
      readonly accountMethod?: "Default" | "Netting" | "Hedging";
      /**
       * Format: double
       * @description Account profit
       */
      readonly accountProfit?: number;
      /**
       * Format: double
       * @description Account used margin
       */
      readonly accountMargin?: number;
      /** Format: double */
      readonly marginLevel?: number;
      /**
       * Format: double
       * @description Account free margin
       */
      readonly accountFreeMargin?: number;
      /**
       * Format: double
       * @description Account equity.
       */
      readonly accountEquity?: number;
      /** @description Check connection state. */
      readonly connected?: boolean;
      /**
       * Format: int64
       * @description Account number
       */
      user?: number;
      /** @description Account Password */
      password?: string | null;
      /** Format: int32 */
      build?: number;
      enableAllOrderUpdates?: boolean;
      readonly isInvestor?: boolean;
      readonly isTradeDisableOnServer?: boolean;
      readonly isNotConfirmedAccount?: boolean;
      readonly isTradeAllowed?: boolean;
      readonly mails?: components["schemas"]["MailMessage"][] | null;
    };
    MailMessage: {
      /** Format: int64 */
      id?: number;
      /** Format: date-time */
      time?: string;
      from?: string | null;
      to?: string | null;
      subject?: string | null;
      body?: string | null;
    };
    /**
     * @description Represents the number of trades executed for a specific market symbol
     *     from the inception of the account.
     */
    MarketTradeCount: {
      /** @description Gets or sets the name of the market symbol (e.g., "EURUSD-", "GBPJPY-"). */
      marketName?: string | null;
      /**
       * Format: int32
       * @description Gets or sets the total number of trades for the specified market symbol.
       */
      count?: number;
    };
    MarketWatch: {
      symbol?: string | null;
      /** Format: double */
      high?: number;
      /** Format: double */
      low?: number;
      /** Format: double */
      openPrice?: number;
      /** Format: double */
      closePrice?: number;
      /** Format: double */
      dailyChange?: number;
      /** Format: double */
      bid?: number;
      /** Format: double */
      ask?: number;
      /** Format: int32 */
      spread?: number;
      /** Format: int64 */
      volume?: number;
    };
    /** @description Account details */
    MetricAccountData: {
      /** @description Server */
      server?: string | null;
      /** @description ID */
      id?: string | null;
      /** @description Api key */
      apiKey?: string | null;
      /**
       * Format: int64
       * @description Account number
       */
      user?: number;
      /** @description Host */
      host?: string | null;
      /**
       * Format: int32
       * @description Port
       */
      port?: number;
    };
    /** @description Metric pod details */
    MetricPodData: {
      /** @description Running accounts */
      accounts?: components["schemas"]["MetricAccountData"][] | null;
      /** @description ID */
      id?: string | null;
      /**
       * Format: int32
       * @description Accounts number
       */
      accountsCount?: number;
    };
    /** @description Connected accounts for ApiKey */
    MetricsApiKeyResult: {
      /**
       * Format: int32
       * @description accounts
       */
      accountsCount?: number;
      /**
       * Format: int32
       * @description Pods
       */
      podsCount?: number;
      /** @description Accounts count on each pod */
      accountsCountByPod?: {
        [key: string]: number;
      } | null;
      /** @description All accounts */
      pods?: components["schemas"]["MetricPodData"][] | null;
    };
    OhlcSubscription: {
      symbol?: string | null;
      /** Format: int32 */
      timeframe?: number;
      /** Format: double */
      open?: number;
      /** Format: double */
      high?: number;
      /** Format: double */
      low?: number;
      /** Format: double */
      close?: number;
      /** Format: date-time */
      time?: string;
      /** Format: int64 */
      volume?: number;
      /** Format: int64 */
      tickVolume?: number;
      /** Format: date-time */
      lastQuoteTime?: string;
    };
    /** @description Pending, market or history order */
    Order: {
      /** Format: int64 */
      ticket?: number;
      /** Format: double */
      profit?: number;
      /** Format: double */
      swap?: number;
      /** Format: double */
      commission?: number;
      /** Format: double */
      fee?: number;
      /** Format: double */
      closePrice?: number;
      /** Format: date-time */
      closeTime?: string;
      /** Format: double */
      closeLots?: number;
      closeComment?: string | null;
      /** Format: double */
      openPrice?: number;
      /** Format: date-time */
      openTime?: string;
      /** Format: double */
      lots?: number;
      /** Format: double */
      contractSize?: number;
      /** Format: int64 */
      expertId?: number;
      /**
       * @description Placed manually or ByExpert
       * @enum {string}
       */
      placedType?:
        | "Manually"
        | "ByExpert"
        | "ByDealer"
        | "OnSL"
        | "OnTP"
        | "OnStopOut"
        | "OnRollover"
        | "OnVmargin"
        | "Gateway"
        | "Signal"
        | "Settlement"
        | "Transfer"
        | "Sync"
        | "ExternalService"
        | "Migration"
        | "Mobile"
        | "Web"
        | "OnSplit"
        | "Default";
      /**
       * @description Order type
       * @enum {string}
       */
      orderType?:
        | "Buy"
        | "Sell"
        | "BuyLimit"
        | "SellLimit"
        | "BuyStop"
        | "SellStop"
        | "BuyStopLimit"
        | "SellStopLimit"
        | "CloseBy"
        | "Balance"
        | "Credit";
      /**
       * @description Deal type
       * @enum {string}
       */
      dealType?:
        | "DealBuy"
        | "DealSell"
        | "Balance"
        | "Credit"
        | "Charge"
        | "Correction"
        | "Bonus"
        | "Commission"
        | "DailyCommission"
        | "MonthlyCommission"
        | "DailyAgentCommission"
        | "MonthlyAgentCommission"
        | "InterestRate"
        | "CanceledBuy"
        | "CanceledSell"
        | "Dividend"
        | "FrankedDividend"
        | "Tax"
        | "AgentCommission"
        | "SoCompensation"
        | "SoCreditCompensation";
      symbol?: string | null;
      comment?: string | null;
      /**
       * @description Order state
       * @enum {string}
       */
      state?:
        | "Started"
        | "Placed"
        | "Cancelled"
        | "Partial"
        | "Filled"
        | "Rejected"
        | "Expired"
        | "RequestAdding"
        | "RequestModifying"
        | "RequestCancelling";
      /** Format: double */
      stopLoss?: number;
      /** Format: double */
      takeProfit?: number;
      /** Format: int32 */
      requestId?: number;
      /** Format: int32 */
      digits?: number;
      /** Format: double */
      profitRate?: number;
      /** Format: double */
      stopLimitPrice?: number;
      dealInternalIn?: components["schemas"]["DealInternal"];
      dealInternalOut?: components["schemas"]["DealInternal"];
      orderInternal?: components["schemas"]["OrderInternal"];
      partialCloseDeals?: components["schemas"]["DealInternal"][] | null;
      partialFillDeals?: components["schemas"]["DealInternal"][] | null;
      /** Format: int64 */
      readonly closeVolume?: number;
      /** Format: int64 */
      readonly volume?: number;
      /**
       * @description Expiration type
       * @enum {string}
       */
      readonly expirationType?: "GTC" | "Today" | "Specified" | "SpecifiedDay";
      /** Format: date-time */
      readonly expirationTime?: string;
      /**
       * @description Fill policy
       * @enum {string}
       */
      readonly fillPolicy?: "FillOrKill" | "ImmediateOrCancel" | "FlashFill" | "Any";
      /** Format: int64 */
      readonly openTimestampUTC?: number;
      /** Format: int64 */
      readonly closeTimestampUTC?: number;
    };
    OrderHistoryEventArgs: {
      orders?: components["schemas"]["Order"][] | null;
      internalDeals?: components["schemas"]["DealInternal"][] | null;
      internalOrders?: components["schemas"]["OrderInternal"][] | null;
      /** Format: int32 */
      action?: number;
      readonly partialResponse?: boolean;
    };
    /** @description Internal information for the order(pending) */
    OrderInternal: {
      /**
       * Format: int64
       * @description Ticket number
       */
      ticketNumber?: number;
      /** @description Text id */
      id?: string | null;
      /**
       * Format: int64
       * @description Account login
       */
      login?: number;
      /** @description Symbol currency */
      symbol?: string | null;
      /**
       * Format: int64
       * @description History time	(as FileTime format)
       */
      historyTime?: number;
      /**
       * Format: int64
       * @description Open time
       */
      openTime?: number;
      /**
       * Format: int64
       * @description Expiration time
       */
      expirationTime?: number;
      /**
       * Format: int64
       * @description Execution time
       */
      executionTime?: number;
      /**
       * @description Order type
       * @enum {string}
       */
      type?:
        | "Buy"
        | "Sell"
        | "BuyLimit"
        | "SellLimit"
        | "BuyStop"
        | "SellStop"
        | "BuyStopLimit"
        | "SellStopLimit"
        | "CloseBy"
        | "Balance"
        | "Credit";
      /**
       * @description Fill policy
       * @enum {string}
       */
      fillPolicy?: "FillOrKill" | "ImmediateOrCancel" | "FlashFill" | "Any";
      /**
       * @description Expiration type
       * @enum {string}
       */
      expirationType?: "GTC" | "Today" | "Specified" | "SpecifiedDay";
      /**
       * @description Placed type
       * @enum {string}
       */
      placedType?:
        | "Manually"
        | "ByExpert"
        | "ByDealer"
        | "OnSL"
        | "OnTP"
        | "OnStopOut"
        | "OnRollover"
        | "OnVmargin"
        | "Gateway"
        | "Signal"
        | "Settlement"
        | "Transfer"
        | "Sync"
        | "ExternalService"
        | "Migration"
        | "Mobile"
        | "Web"
        | "OnSplit"
        | "Default";
      /**
       * Format: double
       * @description Open price
       */
      openPrice?: number;
      /**
       * Format: double
       * @description StopLimit price
       */
      stopLimitPrice?: number;
      /**
       * Format: double
       * @description Price
       */
      price?: number;
      /**
       * Format: double
       * @description Stop loss
       */
      stopLoss?: number;
      /**
       * Format: double
       * @description Take profit
       */
      takeProfit?: number;
      /**
       * Format: int64
       * @description Cover volume
       */
      volume?: number;
      /**
       * Format: int64
       * @description Request volume
       */
      requestVolume?: number;
      /**
       * @description Order state
       * @enum {string}
       */
      state?:
        | "Started"
        | "Placed"
        | "Cancelled"
        | "Partial"
        | "Filled"
        | "Rejected"
        | "Expired"
        | "RequestAdding"
        | "RequestModifying"
        | "RequestCancelling";
      /**
       * Format: int64
       * @description Expert id
       */
      expertId?: number;
      /**
       * Format: int64
       * @description Associative deal ticket
       */
      dealTicket?: number;
      /** @description Comment text */
      comment?: string | null;
      /**
       * Format: double
       * @description Lots
       */
      contractSize?: number;
      /**
       * Format: int32
       * @description Significant digits
       */
      digits?: number;
      /**
       * Format: int32
       * @description Symbols base significant digits
       */
      baseDigits?: number;
      /**
       * Format: double
       * @description Profit rate
       */
      profitRate?: number;
      /**
       * Format: int64
       * @description Open time (ms)
       */
      openTimeMs?: number;
      /** Format: int64 */
      readonly ticket?: number;
      /** Format: date-time */
      readonly executionTimeAsDateTime?: string;
      /**
       * Format: double
       * @description Lots
       */
      readonly lots?: number;
      /**
       * Format: double
       * @description Request lots
       */
      readonly requestLots?: number;
      /** Format: date-time */
      readonly openTimeMsAsDateTime?: string;
      /** Format: date-time */
      readonly openTimeAsDateTime?: string;
    };
    /** @description Details of order update */
    OrderUpdate: {
      trans?: components["schemas"]["TransactionInfo"];
      orderInternal?: components["schemas"]["OrderInternal"];
      deal?: components["schemas"]["DealInternal"];
      oppositeDeal?: components["schemas"]["DealInternal"];
      order?: components["schemas"]["Order"];
      /** @enum {string} */
      type?:
        | "Unknown"
        | "PendingClose"
        | "MarketOpen"
        | "PendingOpen"
        | "MarketClose"
        | "PartialClose"
        | "Started"
        | "Filled"
        | "Cancelling"
        | "MarketModify"
        | "PendingModify"
        | "OnStopLoss"
        | "OnTakeProfit"
        | "OnStopOut"
        | "Balance"
        | "Expired"
        | "Rejected"
        | "MarketCloseBy"
        | "PartialFill";
      /** Format: int64 */
      closeByTicket?: number;
    };
    /** @description Order update event details */
    OrderUpdateSummary: {
      /** @description Opened orders */
      openedOrders?: components["schemas"]["Order"][] | null;
      update?: components["schemas"]["OrderUpdate"];
      /**
       * Format: double
       * @description Balance
       */
      readonly balance?: number;
      /**
       * Format: double
       * @description Equity
       */
      readonly equity?: number;
      /**
       * Format: double
       * @description Used margin
       */
      readonly margin?: number;
      /**
       * Format: double
       * @description Free margin
       */
      readonly freeMargin?: number;
      /**
       * Format: double
       * @description Account profit
       */
      readonly profit?: number;
      /**
       * Format: double
       * @description Margin level
       */
      readonly marginLevel?: number;
      /**
       * Format: double
       * @description Account credit
       */
      readonly credit?: number;
      /**
       * Format: int64
       * @description Account number
       */
      readonly user?: number;
    };
    /** @description OrderHistoryPagination */
    PaginationReply: {
      /**
       * Format: int32
       * @description Total pages count
       */
      pagesCount?: number;
      /**
       * Format: int32
       * @description Current page
       */
      pageNumber?: number;
      /** @description Orders */
      orders?: components["schemas"]["Order"][] | null;
    };
    ProfitData: {
      /** Format: int64 */
      tiket?: number;
      /** Format: date-time */
      date?: string;
      /** Format: double */
      profit?: number;
    };
    /** @description Profit update message */
    ProfitUpdate: {
      /**
       * Format: double
       * @description Balace
       */
      readonly balance?: number;
      /**
       * Format: double
       * @description Credit
       */
      readonly credit?: number;
      /**
       * Format: double
       * @description Equity
       */
      readonly equity?: number;
      /**
       * Format: double
       * @description User margin
       */
      readonly margin?: number;
      /**
       * Format: double
       * @description Free margin
       */
      readonly freeMargin?: number;
      /**
       * Format: double
       * @description Account profit
       */
      readonly profit?: number;
      /** @description Opened orders */
      readonly orders?: components["schemas"]["Order"][] | null;
      /**
       * Format: double
       * @description Maring level
       */
      readonly marginLevel?: number;
      /**
       * Format: int64
       * @description Account number
       */
      readonly user?: number;
    };
    Profitability: {
      /** Format: int64 */
      wonTrades?: number;
      /** Format: double */
      wonTradesPercent?: number;
      /** Format: int64 */
      lostTrades?: number;
      /** Format: double */
      lostTradesPercent?: number;
    };
    /** @description New quote event arguments. */
    Quote: {
      /** @description Trading instrument. */
      symbol?: string | null;
      /**
       * Format: double
       * @description Bid.
       */
      bid?: number;
      /**
       * Format: double
       * @description Ask.
       */
      ask?: number;
      /**
       * Format: date-time
       * @description Server time.
       */
      time?: string;
      /**
       * Format: double
       * @description Last deal price.
       */
      last?: number;
      /**
       * Format: int64
       * @description Volume
       */
      volume?: number;
    };
    /** @description Quote history event args. */
    QuoteHistoryEventArgs: {
      /** @description Instrument. */
      symbol?: string | null;
      /** @description History bars. */
      bars?: components["schemas"]["Bar"][] | null;
    };
    Result: {
      name?: string | null;
      access?: string[] | null;
    };
    /** @description Server details from servers.dat */
    Server: {
      serverInfoEx?: components["schemas"]["ServerInfoEx"];
      serverInfo?: components["schemas"]["ServerInfo"];
      accesses?: components["schemas"]["Access"][] | null;
      accessesEx?: components["schemas"]["AccessEx"][] | null;
    };
    /** @description Server information from servers.dat */
    ServerInfo: {
      serverName?: string | null;
      companyName?: string | null;
      /** Format: int32 */
      dst?: number;
      /** Format: int32 */
      timeZone?: number;
      address?: string | null;
      /** Format: int32 */
      pingTime?: number;
    };
    /** @description Server information from servers.dat */
    ServerInfoEx: {
      serverName?: string | null;
      companyName?: string | null;
      /** Format: int32 */
      dst?: number;
      /** Format: int32 */
      timeZone?: number;
      address?: string | null;
      /** Format: int32 */
      pingTime?: number;
      companyLink?: string | null;
    };
    /** @description Server details from servers.dat */
    ServerRec: {
      serverName?: string | null;
      companyName?: string | null;
      /** Format: int32 */
      dst?: number;
      /** Format: int32 */
      timeZone?: number;
    };
    /** @description Trade or quote session details */
    Session: {
      /**
       * Format: int32
       * @description Start time (in minites)
       */
      startTime?: number;
      /**
       * Format: int32
       * @description End time (in minutes)
       */
      endTime?: number;
    };
    /** @description True or false for current symbol for now */
    SessionState: {
      /** @description Symbol */
      symbol?: string | null;
      /** @description Active or not */
      active?: boolean;
    };
    /** @description Trading statystics */
    Stats: {
      summary?: components["schemas"]["TradeSummary"];
      /**
       * Format: double
       * @description Maximum absolute drawdown based on balance, in account currency.
       */
      maxBalanceDrawdownRaw?: number;
      /**
       * Format: double
       * @description Maximum relative drawdown based on balance, as a percentage.
       */
      maxBalanceDrawdownRelative?: number;
      /**
       * Format: double
       * @description Maximum absolute drawdown based on equity, in account currency.
       */
      maxEquityDrawdownRaw?: number;
      /**
       * Format: double
       * @description Maximum relative drawdown based on equity, as a percentage.
       */
      maxEquityDrawdownRelative?: number;
      /**
       * @description Gets or sets the trade counts grouped by market symbol
       *     from the inception of the account.
       */
      markets?: components["schemas"]["MarketTradeCount"][] | null;
      profitability?: components["schemas"]["Profitability"];
      /** Format: double */
      readonly pips?: number;
      /** Format: double */
      readonly lots?: number;
      /** Format: double */
      readonly comissions?: number;
      averageWin?: components["schemas"]["AveragePipsUsd"];
      averageLost?: components["schemas"]["AveragePipsUsd"];
      longsWon?: components["schemas"]["Won"];
      shortsWon?: components["schemas"]["Won"];
      bestTrade?: components["schemas"]["ProfitData"];
      worstTrade?: components["schemas"]["ProfitData"];
      bestTradePips?: components["schemas"]["ProfitData"];
      worstTradePips?: components["schemas"]["ProfitData"];
      /** Format: date-span */
      readonly averageTradeLength?: string;
      /** Format: double */
      readonly profitFactor?: number;
      /** Format: double */
      readonly standardDeviation?: number;
      /** Format: double */
      readonly sharpeRatio?: number;
      zScore?: components["schemas"]["ZScore"];
      expectancy?: components["schemas"]["Expectancy"];
      /** Format: double */
      readonly ghpr?: number;
      /** Format: int64 */
      readonly trades?: number;
    };
    /** @description Equity history with trading statistic */
    StatsWithCharts: {
      stats?: components["schemas"]["Stats"];
      /** @description Equity history */
      charts?: components["schemas"]["EquityPoint"][] | null;
    };
    /** @description Base symbol information */
    SymBaseInfo: {
      companyName?: string | null;
      currency?: string | null;
      /** Format: int32 */
      digits?: number;
      /** Format: int32 */
      receiveUserMsg?: number;
      /**
       * @description Netting or Hedging
       * @enum {string}
       */
      accMethod?: "Default" | "Netting" | "Hedging";
      /**
       * @description Margin calculation mode
       * @enum {string}
       */
      marginMode?: "MarginForex" | "MarginFutures" | "vMarginCFD" | "MarginCFDIndex";
      /** Format: byte */
      symbolsHash?: string | null;
      /** Format: byte */
      spreadsHash?: string | null;
    };
    /** @description Symbol group information */
    SymGroup: {
      groupName?: string | null;
      /** Format: int32 */
      deviationRate?: number;
      /** Format: int32 */
      roundRate?: number;
      /**
       * @description Trade mode
       * @enum {string}
       */
      tradeMode?: "Disabled" | "LongOnly" | "ShortOnly" | "CloseOnly" | "FullAccess";
      /** Format: int32 */
      sl?: number;
      /** Format: int32 */
      tp?: number;
      /**
       * @description Execution type
       * @enum {string}
       */
      tradeType?: "Request" | "Instant" | "Market" | "Exchange";
      /** @enum {string} */
      fillPolicy?: "NONE" | "FOK" | "IOC" | "BOC";
      /** @enum {string} */
      expiration?: "NONE" | "GTC" | "DAY" | "SPECIFIED" | "SPECIFIED_DAY" | "ALL";
      /** Format: int32 */
      orderFlags?: number;
      /** Format: int32 */
      priceTimeout?: number;
      /** Format: int32 */
      requoteTimeout?: number;
      /** Format: int32 */
      requestLots?: number;
      /** Format: int32 */
      tmp1?: number;
      /** Format: int64 */
      minVolume?: number;
      /** Format: int64 */
      maxVolume?: number;
      /** Format: int64 */
      volumeStep?: number;
      /** Format: double */
      initialMargin?: number;
      /** Format: double */
      maintenanceMargin?: number;
      initMarginRate?: number[] | null;
      mntnMarginRate?: number[] | null;
      /** Format: double */
      hedgedMargin?: number;
      /**
       * @description Swap type
       * @enum {string}
       */
      swapType?:
        | "SwapNone"
        | "InPoints"
        | "SymInfo_s408"
        | "MarginCurrency"
        | "Currency"
        | "PercCurPrice"
        | "PercOpenPrice"
        | "PointClosePrice"
        | "PointBidPrice";
      /** Format: double */
      swapLong?: number;
      /** Format: double */
      swapShort?: number;
      /**
       * @description Swap day
       * @enum {string}
       */
      threeDaysSwap?:
        | "Sunday"
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday";
      swapRates?: number[] | null;
      /** Format: double */
      readonly minLots?: number;
      /** Format: double */
      readonly maxLots?: number;
      /** Format: double */
      readonly lotsStep?: number;
    };
    SymbolBook: {
      symbol?: string | null;
      bars?: {
        [key: string]: components["schemas"]["BookBar"];
      } | null;
    };
    /** @description Symbol details */
    SymbolInfo: {
      /**
       * Format: int64
       * @description Update time
       */
      updateTime?: number;
      /** @description Symbol currency */
      currency?: string | null;
      /** @description Symbol ISIN */
      isin?: string | null;
      /** @description Description */
      description?: string | null;
      basis?: string | null;
      /** @description Reference to site */
      refToSite?: string | null;
      /** Format: int32 */
      custom?: number;
      /** @description Currency for profit */
      profitCurrency?: string | null;
      /** @description Currency for margin */
      marginCurrency?: string | null;
      /** Format: int32 */
      precision?: number;
      /**
       * Format: int32
       * @description Background color
       */
      bkgndColor?: number;
      /**
       * Format: int32
       * @description Significant digits
       */
      digits?: number;
      /**
       * Format: double
       * @description Symbol points
       */
      points?: number;
      /**
       * Format: double
       * @description Symbol limit points
       */
      limitPoints?: number;
      /**
       * Format: int32
       * @description Symbol id
       */
      id?: number;
      /**
       * Format: int32
       * @description Depth of market
       */
      depthOfMarket?: number;
      /**
       * Format: int32
       * @description Spread
       */
      spread?: number;
      /**
       * Format: double
       * @description Tick value
       */
      tickValue?: number;
      /**
       * Format: double
       * @description Tick size
       */
      tickSize?: number;
      /**
       * Format: double
       * @description Contract size
       */
      contractSize?: number;
      /**
       * @description Good till canceled mode
       * @enum {string}
       */
      gtcMode?: "Cancelled" | "TodayIncludeSL_TP" | "TodayExcludeSL_TP";
      /**
       * @description Calculation mode
       * @enum {string}
       */
      calcMode?:
        | "Forex"
        | "Futures"
        | "CFD"
        | "CFDIndex"
        | "CFDLeverage"
        | "CalcMode5"
        | "ExchangeStocks"
        | "ExchangeFutures"
        | "FORTSFutures"
        | "ExchangeOption"
        | "ExchangeMarginOption"
        | "ExchangeBounds"
        | "Collateral";
      /**
       * Format: double
       * @description Settlement price
       */
      settlementPrice?: number;
      /**
       * Format: double
       * @description Lower limit
       */
      lowerLimit?: number;
      /**
       * Format: double
       * @description Upper limit
       */
      upperLimit?: number;
      /**
       * Format: double
       * @description Face value
       */
      faceValue?: number;
      /**
       * Format: double
       * @description Accuired interest
       */
      accruedInterest?: number;
      /**
       * Format: int64
       * @description First trade time
       */
      firstTradeTime?: number;
      /**
       * Format: int64
       * @description Last trade time
       */
      lastTradeTime?: number;
      /** Format: double */
      bid_tickvalue?: number;
      /** Format: double */
      ask_tickvalue?: number;
    };
    /** @description Information about symbol and his group. */
    SymbolParams: {
      /** @description Symbol name */
      symbol?: string | null;
      symbolInfo?: components["schemas"]["SymbolInfo"];
      symbolGroup?: components["schemas"]["SymGroup"];
    };
    /** @description Quotes and trades sessions of the symbol */
    SymbolSessions: {
      quotes?: components["schemas"]["Session"][][] | null;
      trades?: components["schemas"]["Session"][][] | null;
    };
    /** @description Tick value update */
    SymbolTickValue: {
      /** @description Symbol */
      symbol?: string | null;
      /**
       * Format: double
       * @description Tick value
       */
      tickValue?: number;
      /**
       * Format: double
       * @description Tick value
       */
      tickSize?: number;
    };
    /** @description All symbol information */
    Symbols: {
      base?: components["schemas"]["SymBaseInfo"];
      symGroups?: components["schemas"]["SymGroup"][] | null;
      sessions?: {
        [key: string]: components["schemas"]["SymbolSessions"];
      } | null;
      groups?: {
        [key: string]: components["schemas"]["SymGroup"];
      } | null;
      infos?: {
        [key: string]: components["schemas"]["SymbolInfo"];
      } | null;
      infosById?: {
        [key: string]: components["schemas"]["SymbolInfo"];
      } | null;
      readonly names?: string[] | null;
      readonly groupNames?: string[] | null;
      readonly comissions?: components["schemas"]["ComissionInfo"][] | null;
    };
    TickBar: {
      /** Format: date-time */
      time?: string;
      /** Format: double */
      bid?: number;
      /** Format: double */
      ask?: number;
      /** Format: double */
      last?: number;
      /** Format: int64 */
      volume?: number;
    };
    TickHistoryEventArgs: {
      symbol?: string | null;
      bars?: components["schemas"]["TickBar"][] | null;
    };
    /** @description Tick value with tick size */
    TickValueWithSize: {
      /** @description Symbol */
      symbol?: string | null;
      /**
       * Format: double
       * @description Tick value
       */
      tickValue?: number;
      /**
       * Format: double
       * @description Tick size
       */
      tickSize?: number;
      /**
       * Format: double
       * @description Tick value like in MT5 Terminal
       */
      tickValueMq?: number;
    };
    /** @description Represents a summary of trading statistics for an account. */
    TradeSummary: {
      /**
       * Format: int32
       * @description Gets or sets the number of currently open trades.
       */
      openTrades?: number;
      /**
       * Format: double
       * @description Gets or sets the total profit or loss from currently open trades.
       */
      openProfit?: number;
      /**
       * Format: double
       * @description Gets or sets the profit or loss for the current day.
       */
      dayProfit?: number;
      /**
       * Format: double
       * @description Gets or sets the profit or loss for the current week.
       */
      weekProfit?: number;
      /**
       * Format: double
       * @description Gets or sets the profit or loss for the current month.
       */
      monthProfit?: number;
      /**
       * Format: double
       * @description Gets or sets the total cumulative profit or loss over the account's history.
       */
      totalProfit?: number;
    };
    /**
     * @description Contains information about maximum and minimum unrealized profit or loss
     *     for a specific trade, calculated over its lifetime based on historical quote data.
     */
    TradeUnrealizedExtrema: {
      /**
       * Format: int64
       * @description Unique ticket number of the trade.
       */
      ticket?: number;
      /** @description Symbol of the financial instrument (e.g., "EURUSD"). */
      symbol?: string | null;
      /**
       * Format: date-time
       * @description The time when the maximum unrealized profit occurred during the trade's lifetime.
       */
      maxUnrealizedTime?: string;
      /**
       * Format: double
       * @description The highest unrealized profit value achieved by the trade.
       */
      maxUnrealizedPL?: number;
      /**
       * Format: date-time
       * @description The time when the minimum unrealized profit (maximum unrealized loss) occurred during the trade's lifetime.
       */
      minUnrealizedTime?: string;
      /**
       * Format: double
       * @description The lowest unrealized profit value (largest loss) recorded for the trade.
       */
      minUnrealizedPL?: number;
    };
    /** @description Transaction information */
    TransactionInfo: {
      /**
       * Format: int32
       * @description Transaction ticket
       */
      updateId?: number;
      /**
       * Format: int32
       * @description Order ticket
       */
      action?: number;
      /**
       * Format: int64
       * @description Deal ticket
       */
      ticketNumber?: number;
      currency?: string | null;
      /**
       * Format: int32
       * @description Symbol currency
       */
      id?: number;
      /**
       * @description Transaction id
       * @enum {string}
       */
      s58?:
        | "Buy"
        | "Sell"
        | "BuyLimit"
        | "SellLimit"
        | "BuyStop"
        | "SellStop"
        | "BuyStopLimit"
        | "SellStopLimit"
        | "CloseBy"
        | "Balance"
        | "Credit";
      /**
       * @description Order type
       * @enum {string}
       */
      orderState?:
        | "Started"
        | "Placed"
        | "Cancelled"
        | "Partial"
        | "Filled"
        | "Rejected"
        | "Expired"
        | "RequestAdding"
        | "RequestModifying"
        | "RequestCancelling";
      /**
       * @description Order state
       * @enum {string}
       */
      expirationType?: "GTC" | "Today" | "Specified" | "SpecifiedDay";
      /**
       * Format: int64
       * @description Order placed type
       */
      expirationTime?: number;
      /**
       * Format: double
       * @description Deal type
       */
      openPrice?: number;
      /**
       * Format: double
       * @description Deal placed type
       */
      orderPrice?: number;
      /**
       * Format: double
       * @description Expiration type
       */
      stopLoss?: number;
      /**
       * Format: double
       * @description Expiration time
       */
      takeProfit?: number;
      /**
       * Format: int64
       * @description Open price
       */
      volume?: number;
    };
    Won: {
      /** Format: int32 */
      wonCount?: number;
      /** Format: int32 */
      all?: number;
      /** Format: double */
      wonPersent?: number;
    };
    ZScore: {
      /** Format: double */
      zScoreDecimal?: number;
      /** Format: double */
      zScoreProbability?: number;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
