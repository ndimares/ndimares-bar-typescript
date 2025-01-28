# Config
(*config*)

## Overview

### Available Operations

* [subscribeToWebhooks](#subscribetowebhooks) - Subscribe to webhooks.

## subscribeToWebhooks

Subscribe to webhooks.

### Example Usage

```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
  security: {
    apiKey: "<YOUR_API_KEY>",
  },
});

async function run() {
  const result = await ndimaresBar.config.subscribeToWebhooks([
    {},
    {},
    {},
  ]);

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NdimaresBarCore } from "ndimares-bar/core.js";
import { configSubscribeToWebhooks } from "ndimares-bar/funcs/configSubscribeToWebhooks.js";

// Use `NdimaresBarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ndimaresBar = new NdimaresBarCore({
  security: {
    apiKey: "<YOUR_API_KEY>",
  },
});

async function run() {
  const res = await configSubscribeToWebhooks(ndimaresBar, [
    {},
    {},
    {},
  ]);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RequestBody[]](../../models/.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SubscribeToWebhooksResponse](../../models/operations/subscribetowebhooksresponse.md)\>**

### Errors

| Error Type        | Status Code       | Content Type      |
| ----------------- | ----------------- | ----------------- |
| errors.BadRequest | 400               | application/json  |
| errors.APIError   | 5XX               | application/json  |
| errors.SDKError   | 4XX               | \*/\*             |