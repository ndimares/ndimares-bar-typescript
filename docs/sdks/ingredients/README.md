# Ingredients
(*ingredients*)

## Overview

The ingredients endpoints.

### Available Operations

* [listIngredients](#listingredients) - Get a list of ingredients.
* [getIngredient](#getingredient) - Get an ingredient.

## listIngredients

Get a list of ingredients, if authenticated this will include stock levels and product codes otherwise it will only include public information.

### Example Usage

```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
  security: {
    apiKey: "<YOUR_API_KEY>",
  },
});

async function run() {
  const result = await ndimaresBar.ingredients.listIngredients();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NdimaresBarCore } from "ndimares-bar/core.js";
import { ingredientsListIngredients } from "ndimares-bar/funcs/ingredientsListIngredients.js";

// Use `NdimaresBarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ndimaresBar = new NdimaresBarCore({
  security: {
    apiKey: "<YOUR_API_KEY>",
  },
});

async function run() {
  const res = await ingredientsListIngredients(ndimaresBar);

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
| `ingredients`                                                                                                                                                                  | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | A list of ingredients to filter by. If not provided all ingredients will be returned.                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListIngredientsResponse](../../models/operations/listingredientsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4XX              | \*/\*            |

## getIngredient

Get an ingredient by name, if authenticated this will include stock levels and product codes otherwise it will only include public information.

### Example Usage

```typescript
import { NdimaresBar } from "ndimares-bar";

const ndimaresBar = new NdimaresBar({
  security: {
    apiKey: "<YOUR_API_KEY>",
  },
});

async function run() {
  const result = await ndimaresBar.ingredients.getIngredient("<value>");

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NdimaresBarCore } from "ndimares-bar/core.js";
import { ingredientsGetIngredient } from "ndimares-bar/funcs/ingredientsGetIngredient.js";

// Use `NdimaresBarCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const ndimaresBar = new NdimaresBarCore({
  security: {
    apiKey: "<YOUR_API_KEY>",
  },
});

async function run() {
  const res = await ingredientsGetIngredient(ndimaresBar, "<value>");

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
| `name`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetIngredientResponse](../../models/operations/getingredientresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.APIError  | 5XX              | application/json |
| errors.SDKError  | 4XX              | \*/\*            |