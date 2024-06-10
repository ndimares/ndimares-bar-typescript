/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetIngredientRequest = {
    name: string;
};

export type GetIngredientResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * An ingredient.
     */
    ingredient?: components.Ingredient | undefined;
    /**
     * An unknown error occurred interacting with the API.
     */
    error?: components.ErrorT | undefined;
};

/** @internal */
export namespace GetIngredientRequest$ {
    export const inboundSchema: z.ZodType<GetIngredientRequest, z.ZodTypeDef, unknown> = z.object({
        name: z.string(),
    });

    export type Outbound = {
        name: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIngredientRequest> = z.object(
        {
            name: z.string(),
        }
    );
}

/** @internal */
export namespace GetIngredientResponse$ {
    export const inboundSchema: z.ZodType<GetIngredientResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Ingredient: components.Ingredient$.inboundSchema.optional(),
            Error: components.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                Ingredient: "ingredient",
                Error: "error",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Ingredient?: components.Ingredient$.Outbound | undefined;
        Error?: components.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetIngredientResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            ingredient: components.Ingredient$.outboundSchema.optional(),
            error: components.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                ingredient: "Ingredient",
                error: "Error",
            });
        });
}