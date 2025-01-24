# GetIngredientResponse

## Example Usage

```typescript
import { IngredientType } from "ndimares-bar/models/components";
import { GetIngredientResponse } from "ndimares-bar/models/operations";

let value: GetIngredientResponse = {
  httpMeta: {
    response: new Response("{\"message\": \"hello world\"}", {
      headers: { "Content-Type": "application/json" },
    }),
    request: new Request("https://example.com"),
  },
  ingredient: {
    name: "Angostura Bitters",
    type: IngredientType.Packaged,
    stock: 10,
    productCode: "AC-A2DF3",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `httpMeta`                                                         | [components.HTTPMetadata](../../models/components/httpmetadata.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `ingredient`                                                       | [components.Ingredient](../../models/components/ingredient.md)     | :heavy_minus_sign:                                                 | An ingredient.                                                     |
| `error`                                                            | [components.ErrorT](../../models/components/errort.md)             | :heavy_minus_sign:                                                 | An unknown error occurred interacting with the API.                |