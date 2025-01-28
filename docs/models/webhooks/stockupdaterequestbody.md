# StockUpdateRequestBody

## Example Usage

```typescript
import { IngredientType } from "ndimares-bar/models/components";
import { StockUpdateRequestBody } from "ndimares-bar/models/webhooks";

let value: StockUpdateRequestBody = {
  drink: {
    name: "Old Fashioned",
    price: 1000,
    productCode: "NAC-3F2D1",
  },
  ingredient: {
    name: "Angostura Bitters",
    type: IngredientType.LongLife,
    productCode: "APM-1F2D3",
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `drink`                                                                  | [components.DrinkInput](../../models/components/drinkinput.md)           | :heavy_minus_sign:                                                       | N/A                                                                      |
| `ingredient`                                                             | [components.IngredientInput](../../models/components/ingredientinput.md) | :heavy_minus_sign:                                                       | N/A                                                                      |