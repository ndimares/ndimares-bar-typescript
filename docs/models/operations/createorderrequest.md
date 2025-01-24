# CreateOrderRequest

## Example Usage

```typescript
import { OrderType } from "ndimares-bar/models/components";
import { CreateOrderRequest } from "ndimares-bar/models/operations";

let value: CreateOrderRequest = {
  order: {
    type: OrderType.Drink,
    productCode: "APM-1F2D3",
    quantity: 778157,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `callbackUrl`                                                  | *string*                                                       | :heavy_minus_sign:                                             | The url to call when the order is updated.                     |
| `order`                                                        | [components.OrderInput](../../models/components/orderinput.md) | :heavy_check_mark:                                             | N/A                                                            |