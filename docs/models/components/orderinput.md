# OrderInput

An order for a drink or ingredient.

## Example Usage

```typescript
import { OrderInput, OrderType } from "ndimares-bar/models/components";

let value: OrderInput = {
  type: OrderType.Ingredient,
  productCode: "APM-1F2D3",
  quantity: 210382,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | [components.OrderType](../../models/components/ordertype.md) | :heavy_check_mark:                                           | The type of order.                                           |                                                              |
| `productCode`                                                | *string*                                                     | :heavy_check_mark:                                           | The product code of the drink or ingredient.                 | AC-A2DF3                                                     |
| `quantity`                                                   | *number*                                                     | :heavy_check_mark:                                           | The number of units of the drink or ingredient to order.     |                                                              |