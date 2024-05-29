/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type LoginSecurity = {
    username: string;
    password: string;
};

export enum Type {
    ApiKey = "apiKey",
    Jwt = "JWT",
}

export type LoginRequestBody = {
    type: Type;
};

/**
 * The api key to use for authenticated endpoints.
 */
export type LoginResponseBody = {
    token?: string | undefined;
};

export type LoginResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The api key to use for authenticated endpoints.
     */
    object?: LoginResponseBody | undefined;
    /**
     * An unknown error occurred interacting with the API.
     */
    error?: components.ErrorT | undefined;
};

/** @internal */
export namespace LoginSecurity$ {
    export const inboundSchema: z.ZodType<LoginSecurity, z.ZodTypeDef, unknown> = z
        .object({
            Username: z.string(),
            Password: z.string(),
        })
        .transform((v) => {
            return {
                username: v.Username,
                password: v.Password,
            };
        });

    export type Outbound = {
        Username: string;
        Password: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginSecurity> = z
        .object({
            username: z.string(),
            password: z.string(),
        })
        .transform((v) => {
            return {
                Username: v.username,
                Password: v.password,
            };
        });
}

/** @internal */
export namespace Type$ {
    export const inboundSchema = z.nativeEnum(Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace LoginRequestBody$ {
    export const inboundSchema: z.ZodType<LoginRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            type: Type$.inboundSchema,
        })
        .transform((v) => {
            return {
                type: v.type,
            };
        });

    export type Outbound = {
        type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginRequestBody> = z
        .object({
            type: Type$.outboundSchema,
        })
        .transform((v) => {
            return {
                type: v.type,
            };
        });
}

/** @internal */
export namespace LoginResponseBody$ {
    export const inboundSchema: z.ZodType<LoginResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            token: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.token === undefined ? null : { token: v.token }),
            };
        });

    export type Outbound = {
        token?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginResponseBody> = z
        .object({
            token: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.token === undefined ? null : { token: v.token }),
            };
        });
}

/** @internal */
export namespace LoginResponse$ {
    export const inboundSchema: z.ZodType<LoginResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => LoginResponseBody$.inboundSchema).optional(),
            Error: components.ErrorT$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
                ...(v.Error === undefined ? null : { error: v.Error }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: LoginResponseBody$.Outbound | undefined;
        Error?: components.ErrorT$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LoginResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => LoginResponseBody$.outboundSchema).optional(),
            error: components.ErrorT$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
                ...(v.error === undefined ? null : { Error: v.error }),
            };
        });
}
