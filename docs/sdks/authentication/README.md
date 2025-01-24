# Authentication
(*authentication*)

## Overview

The authentication endpoints.

### Available Operations

* [login](#login) - Authenticate with the API by providing a username and password.

## login

Authenticate with the API by providing a username and password.

### Example Usage

```typescript
import { NdimaresBar } from "ndimares-bar";
import { Type } from "ndimares-bar/models/operations";

const ndimaresBar = new NdimaresBar();

async function run() {
  const result = await ndimaresBar.authentication.login({
    username: "<USERNAME>",
    password: "<PASSWORD>",
  }, {
    type: Type.ApiKey,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NdimaresBarCore } from "ndimares-bar/core.js";
import { authenticationLogin } from "ndimares-bar/funcs/authenticationLogin.js";
import { Type } from "ndimares-bar/models/operations";

// Use `NdimaresBarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ndimaresBar = new NdimaresBarCore();

async function run() {
  const res = await authenticationLogin(ndimaresBar, {
    username: "<USERNAME>",
    password: "<PASSWORD>",
  }, {
    type: Type.ApiKey,
  });

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
| `request`                                                                                                                                                                      | [operations.LoginRequestBody](../../models/operations/loginrequestbody.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.LoginSecurity](../../models/operations/loginsecurity.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LoginResponse](../../models/operations/loginresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4XX              | \*/\*            |