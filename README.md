# ndimares-bar

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/ndimares/ndimares-bar-typescript
```

### Yarn

```bash
yarn add https://github.com/ndimares/ndimares-bar-typescript
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Sign in

First you need to send an authentication request to the API by providing your username and password.
In the request body, you should specify the type of token you would like to receive: API key or JSON Web Token.
If your credentials are valid, you will receive a token in the response object: `res.object.token: str`.

```typescript
import { NdimaresBar } from "ndimares-bar";
import { Type } from "ndimares-bar/models/operations";

const ndimaresBar = new NdimaresBar();

async function run() {
    const result = await ndimaresBar.authentication.login(
        {
            type: Type.ApiKey,
        },
        {
            username: "<USERNAME>",
            password: "<PASSWORD>",
        }
    );

    // Handle the result
    console.log(result);
}

run();

```

### Browse available drinks

Once you are authenticated, you can use the token you received for all other authenticated endpoints.
For example, you can filter the list of available drinks by type.

```typescript
import { NdimaresBar } from "ndimares-bar";
import { DrinkType } from "ndimares-bar/models/components";

const ndimaresBar = new NdimaresBar();

async function run() {
    const result = await ndimaresBar.drinks.listDrinks("<YOUR_JWT>", DrinkType.Spirit);

    // Handle the result
    console.log(result);
}

run();

```

### Create an order

When you submit an order, you can include a callback URL along your request.
This URL will get called whenever the supplier updates the status of your order.

```typescript
import { NdimaresBar } from "ndimares-bar";
import { OrderType } from "ndimares-bar/models/components";

const ndimaresBar = new NdimaresBar({
    security: {
        apiKey: "<YOUR_API_KEY>",
    },
});

async function run() {
    const result = await ndimaresBar.orders.createOrder(
        [
            {
                type: OrderType.Ingredient,
                productCode: "AC-A2DF3",
                quantity: 138554,
            },
        ],
        "<value>"
    );

    // Handle the result
    console.log(result);
}

run();

```

### Subscribe to webhooks to receive stock updates

```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
    security: {
        apiKey: "<YOUR_API_KEY>",
    },
});

async function run() {
    const result = await ndimaresBar.config.subscribeToWebhooks([{}]);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [authentication](docs/sdks/authentication/README.md)

* [login](docs/sdks/authentication/README.md#login) - Authenticate with the API by providing a username and password.

### [drinks](docs/sdks/drinks/README.md)

* [listDrinks](docs/sdks/drinks/README.md#listdrinks) - Get a list of drinks.
* [getDrink](docs/sdks/drinks/README.md#getdrink) - Get a drink.

### [ingredients](docs/sdks/ingredients/README.md)

* [listIngredients](docs/sdks/ingredients/README.md#listingredients) - Get a list of ingredients.

### [orders](docs/sdks/orders/README.md)

* [createOrder](docs/sdks/orders/README.md#createorder) - Create an order.

### [config](docs/sdks/config/README.md)

* [subscribeToWebhooks](docs/sdks/config/README.md#subscribetowebhooks) - Subscribe to webhooks.
<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
    security: {
        apiKey: "<YOUR_API_KEY>",
    },
});

async function run() {
    const result = await ndimaresBar.config.subscribeToWebhooks([{}], {
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    security: {
        apiKey: "<YOUR_API_KEY>",
    },
});

async function run() {
    const result = await ndimaresBar.config.subscribeToWebhooks([{}]);

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object      | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.BadRequest | 400               | application/json  |
| errors.APIError   | 5XX               | application/json  |
| errors.SDKError   | 4xx-5xx           | */*               |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { NdimaresBar } from "ndimares-bar";
import * as errors from "ndimares-bar/models/errors";

const ndimaresBar = new NdimaresBar({
    security: {
        apiKey: "<YOUR_API_KEY>",
    },
});

async function run() {
    let result;
    try {
        result = await ndimaresBar.config.subscribeToWebhooks([{}]);
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            case err instanceof errors.BadRequest: {
                console.error(err); // handle exception
                return;
            }
            case err instanceof errors.APIError: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name | Server | Variables |
| ----- | ------ | --------- |
| `prod` | `https://speakeasy.bar` | None |
| `staging` | `https://staging.speakeasy.bar` | None |
| `customer` | `https://{organization}.{environment}.speakeasy.bar` | `organization` (default is `api`), `environment` (default is `prod`) |

```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
    server: "customer",
    security: {
        apiKey: "<YOUR_API_KEY>",
    },
});

async function run() {
    const result = await ndimaresBar.ingredients.listIngredients(["<value>"]);

    // Handle the result
    console.log(result);
}

run();

```

#### Variables

Some of the server options above contain variables. If you want to set the values of those variables, the following optional parameters are available when initializing the SDK client instance:
 * `organization: string`
 * `environment: models.ServerEnvironment`

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
    serverURL: "https://speakeasy.bar",
    security: {
        apiKey: "<YOUR_API_KEY>",
    },
});

async function run() {
    const result = await ndimaresBar.ingredients.listIngredients(["<value>"]);

    // Handle the result
    console.log(result);
}

run();

```
### Override Server URL Per-Operation

The server URL can also be overridden on a per-operation basis, provided a server list was specified for the operation. For example:

```typescript
import { NdimaresBar } from "ndimares-bar";
import { DrinkType } from "ndimares-bar/models/components";

const ndimaresBar = new NdimaresBar();

async function run() {
    const result = await ndimaresBar.drinks.listDrinks("<YOUR_JWT>", DrinkType.Spirit, {
        serverURL: "https://speakeasy.bar",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { NdimaresBar } from "ndimares-bar";
import { HTTPClient } from "ndimares-bar/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new NdimaresBar({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `apiKey`     | apiKey       | API key      |
| `bearerAuth` | http         | HTTP Bearer  |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
    security: {
        apiKey: "<YOUR_API_KEY>",
    },
});

async function run() {
    const result = await ndimaresBar.ingredients.listIngredients(["<value>"]);

    // Handle the result
    console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { NdimaresBar } from "ndimares-bar";
import { Type } from "ndimares-bar/models/operations";

const ndimaresBar = new NdimaresBar();

async function run() {
    const result = await ndimaresBar.authentication.login(
        {
            type: Type.ApiKey,
        },
        {
            username: "<USERNAME>",
            password: "<PASSWORD>",
        }
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
