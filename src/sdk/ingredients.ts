/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Ingredients extends ClientSDK {
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
     * Get a list of ingredients.
     *
     * @remarks
     * Get a list of ingredients, if authenticated this will include stock levels and product codes otherwise it will only include public information.
     */
    async listIngredients(
        ingredients?: Array<string> | undefined,
        options?: RequestOptions
    ): Promise<operations.ListIngredientsResponse> {
        const input$: operations.ListIngredientsRequest = {
            ingredients: ingredients,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListIngredientsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/ingredients")();

        const query$ = [
            enc$.encodeForm("ingredients", payload$.ingredients, {
                explode: false,
                charEncoding: "percent",
            }),
        ]
            .filter(Boolean)
            .join("&");

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "listIngredients",
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

        const [result$] = await this.matcher<operations.ListIngredientsResponse>()
            .json(200, operations.ListIngredientsResponse$, { key: "Ingredients" })
            .fail("4XX")
            .json("5XX", errors.APIError$, { err: true })
            .json("default", operations.ListIngredientsResponse$, { key: "Error" })
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Get an ingredient.
     *
     * @remarks
     * Get an ingredient by name, if authenticated this will include stock levels and product codes otherwise it will only include public information.
     */
    async getIngredient(
        name: string,
        options?: RequestOptions
    ): Promise<operations.GetIngredientResponse> {
        const input$: operations.GetIngredientRequest = {
            name: name,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetIngredientRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            name: enc$.encodeSimple("name", payload$.name, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/ingredient/{name}")(pathParams$);

        const query$ = "";

        const security$ =
            typeof this.options$.security === "function"
                ? await this.options$.security()
                : this.options$.security;

        const context = {
            operationID: "getIngredient",
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

        const [result$] = await this.matcher<operations.GetIngredientResponse>()
            .json(200, operations.GetIngredientResponse$, { key: "Ingredient" })
            .fail("4XX")
            .json("5XX", errors.APIError$, { err: true })
            .json("default", operations.GetIngredientResponse$, { key: "Error" })
            .match(response, request$, { extraFields: responseFields$ });

        return result$;
    }
}
