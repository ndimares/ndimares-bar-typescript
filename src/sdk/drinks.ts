/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import { SecurityInput } from "../lib/security";
import * as components from "../models/components";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Drinks extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get a list of drinks.
     *
     * @remarks
     * Get a list of drinks, if authenticated this will include stock levels and product codes otherwise it will only include public information.
     */
    async listDrinks(
        security: operations.ListDrinksSecurity,
        drinkType?: components.DrinkType | undefined,
        options?: RequestOptions & { serverURL?: string }
    ): Promise<operations.ListDrinksResponse> {
        const input$: operations.ListDrinksRequest = {
            drinkType: drinkType,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListDrinksRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;
        const baseURL$ =
            options?.serverURL ||
            this.templateURLComponent(operations.ListDrinksServerList[0], {
                charEncoding: "percent",
            })();

        const path$ = this.templateURLComponent("/drinks")();

        const query$ = [
            enc$.encodeForm("drinkType", payload$.drinkType, {
                explode: true,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$: SecurityInput[][] = [
            [
                {
                    fieldName: "Authorization",
                    type: "http:bearer",
                    value: security?.bearerAuth,
                },
            ],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = { operationID: "listDrinks", oAuth2Scopes: [], securitySource: security$ };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                baseURL: baseURL$,
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.ListDrinksResponse>()
            .json(200, operations.ListDrinksResponse$, { key: "Drinks" })
            .fail("4XX")
            .json("5XX", errors.APIError$, { err: true })
            .json("default", operations.ListDrinksResponse$, { key: "Error" })
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get a drink.
     *
     * @remarks
     * Get a drink by name, if authenticated this will include stock levels and product codes otherwise it will only include public information.
     */
    async getDrink(name: string, options?: RequestOptions): Promise<operations.GetDrinkResponse> {
        const input$: operations.GetDrinkRequest = {
            name: name,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetDrinkRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            name: enc$.encodeSimple("name", payload$.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/drink/{name}")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getDrink",
            oAuth2Scopes: [],
            securitySource: this.options$.security,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.GetDrinkResponse>()
            .json(200, operations.GetDrinkResponse$, { key: "Drink" })
            .fail("4XX")
            .json("5XX", errors.APIError$, { err: true })
            .json("default", operations.GetDrinkResponse$, { key: "Error" })
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}
