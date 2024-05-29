/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../models/components";
import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { Params, pathToFunc } from "./url";

/**
 * The production server.
 */
export const ServerProd = "prod";
/**
 * The staging server.
 */
export const ServerStaging = "staging";
/**
 * A per-organization and per-environment API.
 */
export const ServerCustomer = "customer";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
    [ServerProd]: "https://speakeasy.bar",
    [ServerStaging]: "https://staging.speakeasy.bar",
    [ServerCustomer]: "https://{organization}.{environment}.speakeasy.bar",
} as const;

/**
 * The environment name. Defaults to the production environment.
 */
export enum ServerEnvironment {
    Prod = "prod",
    Staging = "staging",
    Dev = "dev",
}

export type SDKOptions = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: components.Security | (() => Promise<components.Security>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    server?: keyof typeof ServerList;
    /**
     * Allows setting the organization variable for url substitution
     */
    organization?: string;
    /**
     * Allows setting the environment variable for url substitution
     */
    environment?: ServerEnvironment;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const serverParams: Record<string, Params> = {
        prod: {},
        staging: {},
        customer: {
            organization: options.organization ?? "api",
            environment: options.environment ?? "prod",
        },
    };

    let params: Params = {};

    if (!serverURL) {
        const server = options.server ?? ServerProd;
        serverURL = ServerList[server] || "";
        params = serverParams[server] || {};
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "1.0.0",
    sdkVersion: "0.0.2",
    genVersion: "2.338.1",
    userAgent: "speakeasy-sdk/typescript 0.0.2 2.338.1 1.0.0 ndimares-bar",
} as const;
