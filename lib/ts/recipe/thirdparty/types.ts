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
import {
    NormalisedInputType as AuthRecipeNormalisedInputType,
    InputType as AuthRecipeInputType,
    UserType,
    PreAndPostAPIHookAction as AuthRecipePreAndPostAPIHookAction,
} from "../authRecipeWithEmailVerification/types";
import {
    RecipePostAPIHookContext,
    RecipePreAPIHookContext,
    RecipeFunctionOptions,
    UserInput as RecipeModuleUserInput,
} from "../recipeModule/types";
import { InputTypeOverride as EmailVerificationOverride } from "../emailverification/types";
import OverrideableBuilder from "supertokens-js-override";

export type PreAndPostAPIHookAction =
    | AuthRecipePreAndPostAPIHookAction
    | "GET_AUTHORISATION_URL"
    | "THIRD_PARTY_SIGN_IN_UP";

export type PreAPIHookContext = RecipePreAPIHookContext<PreAndPostAPIHookAction>;
export type PostAPIHookContext = RecipePostAPIHookContext<PreAndPostAPIHookAction>;

export type UserInput = {
    override?: {
        emailVerification?: EmailVerificationOverride;
        functions?: (
            originalImplementation: RecipeInterface,
            builder: OverrideableBuilder<RecipeInterface>
        ) => RecipeInterface;
    };
} & RecipeModuleUserInput<PreAndPostAPIHookAction>;

export type InputType = AuthRecipeInputType<PreAndPostAPIHookAction> & UserInput;

export type NormalisedInputType = AuthRecipeNormalisedInputType<PreAndPostAPIHookAction> & {
    override: {
        functions: (
            originalImplementation: RecipeInterface,
            builder: OverrideableBuilder<RecipeInterface>
        ) => RecipeInterface;
    };
};

export type StateObject = {
    expiresAt: number;
    providerId: string;
    authorisationURL: string;
    stateForAuthProvider: string;
    providerClientId?: string;
};

export type RecipeInterface = {
    getStateAndOtherInfoFromStorage: <CustomStateProperties>(input: {
        userContext: any;
    }) => (StateObject & CustomStateProperties) | undefined;

    setStateAndOtherInfoToStorage: <CustomStateProperties>(input: {
        state: StateObject & CustomStateProperties;
        userContext: any;
    }) => Promise<void>;

    getAuthorisationURLWithQueryParamsAndSetState: (input: {
        providerId: string;
        authorisationURL: string;
        userContext: any;
        providerClientId?: string;
        options?: RecipeFunctionOptions;
    }) => Promise<string>;

    getAuthorisationURLFromBackend: (input: {
        providerId: string;
        userContext: any;
        options?: RecipeFunctionOptions;
    }) => Promise<{
        status: "OK";
        url: string;
        fetchResponse: Response;
    }>;

    signInAndUp: (input: { userContext: any; options?: RecipeFunctionOptions }) => Promise<
        | {
              status: "OK";
              user: UserType;
              createdNewUser: boolean;
              fetchResponse: Response;
          }
        | {
              status: "NO_EMAIL_GIVEN_BY_PROVIDER";
              fetchResponse: Response;
          }
    >;

    generateStateToSendToOAuthProvider: (input: { userContext: any }) => string;

    verifyAndGetStateOrThrowError: <CustomStateProperties>(input: {
        stateFromAuthProvider: string | undefined;
        stateObjectFromStorage: (StateObject & CustomStateProperties) | undefined;
        userContext: any;
    }) => Promise<StateObject & CustomStateProperties>;

    getAuthCodeFromURL: (input: { userContext: any }) => string;

    getAuthErrorFromURL: (input: { userContext: any }) => string | undefined;

    getAuthStateFromURL: (input: { userContext: any }) => string;
};