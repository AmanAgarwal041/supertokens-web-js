import { SessionClaimValidator, SessionClaim } from "../session";
import { MFAClaimValue, MFARequirementList, RecipeInterface } from "./types";
/**
 * We include "Class" in the class name, because it makes it easier to import/use the right thing (the instance exported by the recipe) instead of this.
 * */
export declare class MultiFactorAuthClaimClass implements SessionClaim<MFAClaimValue> {
    private readonly getRecipeImpl;
    readonly id = "st-mfa";
    readonly validators: {
        hasCompletedDefaultFactors: () => SessionClaimValidator;
        hasCompletedFactors: (requirements: MFARequirementList) => SessionClaimValidator;
    };
    constructor(getRecipeImpl: () => RecipeInterface);
    refresh(userContext: any): Promise<void>;
    getValueFromPayload(
        payload: any,
        _userContext?: any
    ):
        | {
              c: Record<string, number>;
              n: string[];
          }
        | undefined;
    getLastFetchedTime(payload: any, _userContext?: any): number | undefined;
}
