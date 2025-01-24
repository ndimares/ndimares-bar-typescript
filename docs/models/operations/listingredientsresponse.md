# ListIngredientsResponse

## Example Usage

```typescript
import { IngredientType } from "ndimares-bar/models/components";
import { ListIngredientsResponse } from "ndimares-bar/models/operations";

let value: ListIngredientsResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  ingredients: [
    {
      name: "Orange Peel",
      type: IngredientType.LongLife,
      stock: 0,
      productCode: "NAC-3F2D1",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `ingredients`                                                      | [components.Ingredient](../../models/components/ingredient.md)[]   | :heavy_minus_sign:                                                 | A list of ingredients.                                             |
| `error`                                                            | [components.ErrorT](../../models/components/errort.md)             | :heavy_minus_sign:                                                 | An unknown error occurred interacting with the API.                |