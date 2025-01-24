# Drink

## Example Usage

```typescript
import { Drink } from "ndimares-bar/models/components";

let value: Drink = {
  name: "Negroni",
  price: 1000,
  productCode: "NAC-3F2D1",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `name`                                                                        | *string*                                                                      | :heavy_check_mark:                                                            | The name of the drink.                                                        | Old Fashioned                                                                 |
| `type`                                                                        | [components.DrinkType](../../models/components/drinktype.md)                  | :heavy_minus_sign:                                                            | The type of drink.                                                            |                                                                               |
| `price`                                                                       | *number*                                                                      | :heavy_check_mark:                                                            | The price of one unit of the drink in US cents.                               | 1000                                                                          |
| `stock`                                                                       | *number*                                                                      | :heavy_minus_sign:                                                            | The number of units of the drink in stock, only available when authenticated. |                                                                               |
| `productCode`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | The product code of the drink, only available when authenticated.             | AC-A2DF3                                                                      |