/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { OrderType, OrderType$ } from "./ordertype";
import * as z from "zod";

/**
 * The status of the order.
 */
export enum Status {
    Pending = "pending",
    Processing = "processing",
    Complete = "complete",
}

/**
 * An order for a drink or ingredient.
 */
export type Order = {
    /**
     * The type of order.
     */
    type: OrderType;
    /**
     * The product code of the drink or ingredient.
     */
    productCode: string;
    /**
     * The number of units of the drink or ingredient to order.
     */
    quantity: number;
    /**
     * The status of the order.
     */
    status: Status;
};

/** @internal */
export namespace Status$ {
    export const inboundSchema = z.nativeEnum(Status);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Order$ {
    export const inboundSchema: z.ZodType<Order, z.ZodTypeDef, unknown> = z.object({
        type: OrderType$.inboundSchema,
        productCode: z.string(),
        quantity: z.number().int(),
        status: Status$.inboundSchema,
    });

    export type Outbound = {
        type: string;
        productCode: string;
        quantity: number;
        status: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Order> = z.object({
        type: OrderType$.outboundSchema,
        productCode: z.string(),
        quantity: z.number().int(),
        status: Status$.outboundSchema,
    });
}
