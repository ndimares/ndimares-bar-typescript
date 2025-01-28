# DrinkInput

## Example Usage

```typescript
import { DrinkInput } from "ndimares-bar/models/components";

let value: DrinkInput = {
  name: "Negroni",
  price: 1200,
  productCode: "NAC-3F2D1",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | The name of the drink.                                            | Old Fashioned                                                     |
| `type`                                                            | [components.DrinkType](../../models/components/drinktype.md)      | :heavy_minus_sign:                                                | The type of drink.                                                |                                                                   |
| `price`                                                           | *number*                                                          | :heavy_check_mark:                                                | The price of one unit of the drink in US cents.                   | 1000                                                              |
| `productCode`                                                     | *string*                                                          | :heavy_minus_sign:                                                | The product code of the drink, only available when authenticated. | AC-A2DF3                                                          |