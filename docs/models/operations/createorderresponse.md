# CreateOrderResponse

## Example Usage

```typescript
import { OrderType, Status } from "ndimares-bar/models/components";
import { CreateOrderResponse } from "ndimares-bar/models/operations";

let value: CreateOrderResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  order: {
    type: OrderType.Ingredient,
    productCode: "APM-1F2D3",
    quantity: 799159,
    status: Status.Processing,
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `order`                                                            | [components.Order](../../models/components/order.md)               | :heavy_minus_sign:                                                 | The order was created successfully.                                |
| `error`                                                            | [components.ErrorT](../../models/components/errort.md)             | :heavy_minus_sign:                                                 | An unknown error occurred interacting with the API.                |