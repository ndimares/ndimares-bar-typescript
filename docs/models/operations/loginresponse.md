# LoginResponse


## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `httpMeta`                                                                   | [components.HTTPMetadata](../../models/components/httpmetadata.md)           | :heavy_check_mark:                                                           | N/A                                                                          |
| `object`                                                                     | [operations.LoginResponseBody](../../models/operations/loginresponsebody.md) | :heavy_minus_sign:                                                           | The api key to use for authenticated endpoints.                              |
| `error`                                                                      | [components.ErrorT](../../models/components/errort.md)                       | :heavy_minus_sign:                                                           | An unknown error occurred interacting with the API.                          |