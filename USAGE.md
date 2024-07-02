<!-- Start SDK Example Usage [usage] -->
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
        {
            type: OrderType.Ingredient,
            productCode: "AC-A2DF3",
            quantity: 138554,
        },
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