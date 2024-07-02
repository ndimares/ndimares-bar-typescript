/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type CreateOrderRequest = {
    /**
     * The url to call when the order is updated.
     */
    callbackUrl?: string | undefined;
    order: components.OrderInput;
};

export type CreateOrderResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The order was created successfully.
     */
    order?: components.Order | undefined;
    /**
     * An unknown error occurred interacting with the API.
     */
    error?: components.ErrorT | undefined;
};

/** @internal */
export namespace CreateOrderRequest$ {
    export const inboundSchema: z.ZodType<CreateOrderRequest, z.ZodTypeDef, unknown> = z
        .object({
            callback_url: z.string().optional(),
            Order: components.OrderInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                callback_url: "callbackUrl",
                Order: "order",
            });
        });

    export type Outbound = {
        callback_url?: string | undefined;
        Order: components.OrderInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateOrderRequest> = z
        .object({
            callbackUrl: z.string().optional(),
            order: components.OrderInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                callbackUrl: "callback_url",
                order: "Order",
            });
        });
}

/** @internal */
export namespace CreateOrderResponse$ {
    export const inboundSchema: z.ZodType<CreateOrderResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Order: components.Order$.inboundSchema.optional(),
            Error: components.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                Order: "order",
                Error: "error",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Order?: components.Order$.Outbound | undefined;
        Error?: components.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateOrderResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            order: components.Order$.outboundSchema.optional(),
            error: components.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                order: "Order",
                error: "Error",
            });
        });
}
