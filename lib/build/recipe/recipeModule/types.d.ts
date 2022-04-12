import { NormalisedAppInfo, NormalisedStorageHandlers } from "../../types";
export declare type RecipePreAPIHookContext<Action> = {
    requestInit: RequestInit;
    url: string;
    action: Action;
    userContext: any;
};
export declare type RecipePostAPIHookContext<Action> = {
    action: Action;
    requestInit: RequestInit;
    url: string;
    fetchResponse: Response;
    userContext: any;
};
export declare type PreAPIHookFunction = (context: { requestInit: RequestInit; url: string }) => Promise<{
    url: string;
    requestInit: RequestInit;
}>;
export declare type PostAPIHookFunction = (context: {
    requestInit: RequestInit;
    url: string;
    fetchResponse: Response;
}) => Promise<void>;
export declare type RecipePreAPIHookFunction<Action> = (context: RecipePreAPIHookContext<Action>) => Promise<{
    url: string;
    requestInit: RequestInit;
}>;
export declare type RecipePostAPIHookFunction<Action> = (context: RecipePostAPIHookContext<Action>) => Promise<void>;
export declare type UserInput<Action> = {
    preAPIHook?: RecipePreAPIHookFunction<Action>;
    postAPIHook?: RecipePostAPIHookFunction<Action>;
};
export declare type RecipeConfig<Action> = {
    storageHandlers: NormalisedStorageHandlers;
    recipeId: string;
    appInfo: NormalisedAppInfo;
} & UserInput<Action>;
export declare type NormalisedRecipeConfig<Action> = {
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
export declare type RecipeFunctionOptions = {
    preAPIHook?: (input: { url: string; requestInit: RequestInit; userContext: any }) => Promise<{
        url: string;
        requestInit: RequestInit;
    }>;
};
export declare type RecipeImplementationInput<PrePostAPIHookAction> = {
    recipeId: string;
    appInfo: NormalisedAppInfo;
    preAPIHook: RecipePreAPIHookFunction<PrePostAPIHookAction>;
    postAPIHook: RecipePostAPIHookFunction<PrePostAPIHookAction>;
    storageHandlers: NormalisedStorageHandlers;
};