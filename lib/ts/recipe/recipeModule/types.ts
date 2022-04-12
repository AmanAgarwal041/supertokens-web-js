/* Copyright (c) 2022, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
import { NormalisedAppInfo, NormalisedStorageHandlers } from "../../types";

export type RecipePreAPIHookContext<Action> = {
    requestInit: RequestInit;
    url: string;
    action: Action;
    userContext: any;
};

export type RecipePostAPIHookContext<Action> = {
    action: Action;
    requestInit: RequestInit;
    url: string;
    fetchResponse: Response;
    userContext: any;
};

export type PreAPIHookFunction = (context: {
    requestInit: RequestInit;
    url: string;
}) => Promise<{ url: string; requestInit: RequestInit }>;

export type PostAPIHookFunction = (context: {
    requestInit: RequestInit;
    url: string;
    fetchResponse: Response;
}) => Promise<void>;

export type RecipePreAPIHookFunction<Action> = (
    context: RecipePreAPIHookContext<Action>
) => Promise<{ url: string; requestInit: RequestInit }>;

export type RecipePostAPIHookFunction<Action> = (context: RecipePostAPIHookContext<Action>) => Promise<void>;

export type UserInput<Action> = {
    preAPIHook?: RecipePreAPIHookFunction<Action>;
    postAPIHook?: RecipePostAPIHookFunction<Action>;
};

export type RecipeConfig<Action> = {
    storageHandlers: NormalisedStorageHandlers;
    recipeId: string;
    appInfo: NormalisedAppInfo;
} & UserInput<Action>;

export type NormalisedRecipeConfig<Action> = {
    recipeId: string;
    appInfo: NormalisedAppInfo;
    storageHandlers: NormalisedStorageHandlers;
    preAPIHook: RecipePreAPIHookFunction<Action>;
    postAPIHook: RecipePostAPIHookFunction<Action>;
};

/**
 * For the options object passed to recipe functions, we do not need a postAPIHook.
 *
 * This is because these functions will be called manually, so the user always knows which API is called (making the
 * postAPIHook redundant). They can consume the networkResponse returned by recipe functions as a way to handle post
 * API logic
 */
export type RecipeFunctionOptions = {
    preAPIHook?: (input: {
        url: string;
        requestInit: RequestInit;
        userContext: any;
    }) => Promise<{ url: string; requestInit: RequestInit }>;
};

export type RecipeImplementationInput<PrePostAPIHookAction> = {
    recipeId: string;
    appInfo: NormalisedAppInfo;
    preAPIHook: RecipePreAPIHookFunction<PrePostAPIHookAction>;
    postAPIHook: RecipePostAPIHookFunction<PrePostAPIHookAction>;
    storageHandlers: NormalisedStorageHandlers;
};