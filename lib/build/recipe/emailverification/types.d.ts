import {
    NormalisedRecipeConfig,
    RecipeConfig,
    RecipeFunctionOptions,
    RecipePreAPIHookContext,
    UserInput as RecipeModuleUserInput,
} from "../recipeModule/types";
import OverrideableBuilder from "supertokens-js-override";
export declare type PreAndPostAPIHookAction = "VERIFY_EMAIL" | "SEND_VERIFY_EMAIL" | "IS_EMAIL_VERIFIED";
export declare type PreAPIHookContext = RecipePreAPIHookContext<PreAndPostAPIHookAction>;
export declare type PostAPIHookContext = RecipePreAPIHookContext<PreAndPostAPIHookAction>;
export declare type InputTypeOverride = {
    functions?: (
        originalImplementation: RecipeInterface,
        builder: OverrideableBuilder<RecipeInterface>
    ) => RecipeInterface;
};
export declare type UserInput = {
    override?: InputTypeOverride;
} & RecipeModuleUserInput<PreAndPostAPIHookAction>;
export declare type InputType = RecipeConfig<PreAndPostAPIHookAction> & UserInput;
export declare type NormalisedInputType = NormalisedRecipeConfig<PreAndPostAPIHookAction> & {
    override: {
        functions: (
            originalImplementation: RecipeInterface,
            builder: OverrideableBuilder<RecipeInterface>
        ) => RecipeInterface;
    };
};
export declare type RecipeInterface = {
    verifyEmail: (input: { options?: RecipeFunctionOptions; userContext: any }) => Promise<{
        status: "OK" | "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR";
        fetchResponse: Response;
    }>;
    sendVerificationEmail: (input: { options?: RecipeFunctionOptions; userContext: any }) => Promise<{
        status: "EMAIL_ALREADY_VERIFIED_ERROR" | "OK";
        fetchResponse: Response;
    }>;
    isEmailVerified: (input: { options?: RecipeFunctionOptions; userContext: any }) => Promise<{
        status: "OK";
        isVerified: boolean;
        fetchResponse: Response;
    }>;
    getEmailVerificationTokenFromURL: (input: { userContext: any }) => string;
};