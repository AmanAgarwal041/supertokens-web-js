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

import EmailPassword from "../../recipe/emailpassword";
import ThirdPartyPasswordless from "../../recipe/thirdpartypasswordless";
import ThirdParty from "../../recipe/thirdparty";
import ThirdPartyEmailPassword from "../../recipe/thirdpartyemailpassword";
import EmailVerification from "../../recipe/emailverification";
import Passwordless from "../../recipe/passwordless";
import Session from "../../recipe/session";
import Multitenancy from "../../recipe/multitenancy";

import EmailPasswordRecipeCore from "../../recipe/emailpassword/recipe";
import ThirdPartyPasswordlessRecipeCore from "../../recipe/thirdpartypasswordless/recipe";
import ThirdPartyRecipeCore from "../../recipe/thirdparty/recipe";
import ThirdPartyEmailPasswordRecipeCore from "../../recipe/thirdpartyemailpassword/recipe";
import EmailVerificationRecipeCore from "../../recipe/emailverification/recipe";
import PasswordlessRecipeCore from "../../recipe/passwordless/recipe";
import SessionRecipeCore from "../../recipe/session/recipe";

import SuperTokens from "../../lib/build/supertokens";
import assert from "assert";
import { CookieHandlerReference } from "../../utils/cookieHandler";
import { WindowHandlerReference } from "../../utils/windowHandler";

describe("Window handlers test", function () {
    let storageLogs = [];

    beforeEach(function () {
        SuperTokens.reset();
        CookieHandlerReference.instance = undefined;
        WindowHandlerReference.instance = undefined;
        storageLogs = [];

        // Reset all the recipes
        EmailPasswordRecipeCore.reset();
        ThirdPartyPasswordlessRecipeCore.reset();
        ThirdPartyRecipeCore.reset();
        ThirdPartyEmailPasswordRecipeCore.reset();
        EmailVerificationRecipeCore.reset();
        PasswordlessRecipeCore.reset();
        SessionRecipeCore.reset();
    });

    describe("General tests", function () {
        it("Test that window handlers are correctly used in website SDK", async function () {
            try {
                SuperTokens.init({
                    appInfo: {
                        appName: "SuperTokens",
                        apiDomain: "api.supertokens.io",
                    },
                    windowHandler: function (original) {
                        return {
                            ...original,
                            location: {
                                ...original.location,
                                // This is called when supertokens website init is called
                                getHostName: () => {
                                    throw new Error("Expected error during tests");
                                },
                            },
                        };
                    },
                    recipeList: [Session.init()],
                });
                throw new Error("SuperTokens.init should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }
        });
    });

    describe("Init tests for recipes", function () {
        it("Throws correct error when calling ThirdPartyPasswordless methods if SuperTokens is not initialized", async function () {
            try {
                await ThirdPartyPasswordless.getThirdPartyAuthorisationURLWithQueryParamsAndSetState({
                    thirdPartyId: "google",
                    frontendRedirectURI: "http://localhost:3000/auth/callback/google",
                });
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of ThirdPartyPasswordless found. Ensure that the 'ThirdPartyPasswordless.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling ThirdPartyPasswordless methods if recipe is not initialized but SuperTokens is initialized", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        location: {
                            ...original.location,
                            getHostName: () => {
                                return "http://localhost:3000";
                            },
                        },
                    };
                },
                recipeList: [EmailPassword.init()],
            });
            try {
                await ThirdPartyPasswordless.getThirdPartyAuthorisationURLWithQueryParamsAndSetState({
                    thirdPartyId: "google",
                    frontendRedirectURI: "http://localhost:3000/auth/callback/google",
                });
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of ThirdPartyPasswordless found. Ensure that the 'ThirdPartyPasswordless.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling EmailPassword methods if SuperTokens is not initialized", async function () {
            try {
                await EmailPassword.doesEmailExist({ email: "test@supertokens.com" });
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of EmailPassword found. Ensure that the 'EmailPassword.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling EmailPassword methods if recipe is not initialized but SuperTokens is initialized", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        location: {
                            ...original.location,
                            getHostName: () => {
                                return "http://localhost:3000";
                            },
                        },
                    };
                },
                recipeList: [ThirdPartyPasswordless.init()],
            });
            try {
                await EmailPassword.doesEmailExist({ email: "test@supertokens.com" });
            } catch (err) {
                console.log(err.message);
                assert(
                    err.message.startsWith(
                        "No instance of EmailPassword found. Ensure that the 'EmailPassword.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling ThirdParty methods if SuperTokens is not initialized", async function () {
            try {
                await ThirdParty.getAuthorisationURLWithQueryParamsAndSetState({
                    thirdPartyId: "google",
                    frontendRedirectURI: "http://localhost:3000/auth/callback/google",
                });
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling ThirdParty methods if recipe is not initialized but SuperTokens is initialized", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        location: {
                            ...original.location,
                            getHostName: () => {
                                return "http://localhost:3000";
                            },
                        },
                    };
                },
                recipeList: [EmailPassword.init()],
            });
            try {
                await ThirdParty.getAuthorisationURLWithQueryParamsAndSetState({
                    thirdPartyId: "google",
                    frontendRedirectURI: "http://localhost:3000/auth/callback/google",
                });
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of ThirdParty found. Ensure that the 'ThirdParty.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling ThirdPartyEmailPassword methods if SuperTokens is not initialized", async function () {
            try {
                await ThirdPartyEmailPassword.getAuthorisationURLWithQueryParamsAndSetState({
                    thirdPartyId: "google",
                    frontendRedirectURI: "http://localhost:3000/auth/callback/google",
                });
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of ThirdPartyEmailPassword found. Ensure that the 'ThirdPartyEmailPassword.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling ThirdPartyEmailPassword methods if recipe is not initialized but SuperTokens is initialized", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        location: {
                            ...original.location,
                            getHostName: () => {
                                return "http://localhost:3000";
                            },
                        },
                    };
                },
                recipeList: [EmailPassword.init()],
            });
            try {
                await ThirdPartyEmailPassword.getAuthorisationURLWithQueryParamsAndSetState({
                    thirdPartyId: "google",
                    frontendRedirectURI: "http://localhost:3000/auth/callback/google",
                });
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of ThirdPartyEmailPassword found. Ensure that the 'ThirdPartyEmailPassword.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling EmailVerification methods if SuperTokens is not initialized", async function () {
            try {
                await EmailVerification.isEmailVerified();
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of EmailVerification found. Ensure that the 'EmailVerification.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling EmailVerification methods if recipe is not initialized but SuperTokens is initialized", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        location: {
                            ...original.location,
                            getHostName: () => {
                                return "http://localhost:3000";
                            },
                        },
                    };
                },
                recipeList: [EmailPassword.init()],
            });
            try {
                await EmailVerification.isEmailVerified();
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of EmailVerification found. Ensure that the 'EmailVerification.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling Passwordless methods if SuperTokens is not initialized", async function () {
            try {
                Passwordless.getLinkCodeFromURL();
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling Passwordless methods if recipe is not initialized but SuperTokens is initialized", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        location: {
                            ...original.location,
                            getHostName: () => {
                                return "http://localhost:3000";
                            },
                        },
                    };
                },
                recipeList: [EmailPassword.init()],
            });
            try {
                Passwordless.getLinkCodeFromURL();
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of Passwordless found. Ensure that the 'Passwordless.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling Session methods if SuperTokens is not initialized", async function () {
            try {
                await Session.getUserId();
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling Session methods if recipe is not initialized but SuperTokens is initialized", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        location: {
                            ...original.location,
                            getHostName: () => {
                                return "http://localhost:3000";
                            },
                        },
                    };
                },
                recipeList: [EmailPassword.init()],
            });
            try {
                await Session.getUserId();
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList."
                    )
                );
            }
        });

        it("Throws correct error when calling Multitenancy methods if SuperTokens is not initialized", async function () {
            try {
                await Multitenancy.getTenantId();
            } catch (err) {
                assert(
                    err.message.startsWith(
                        "No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called."
                    )
                );
            }
        });
    });

    describe("Session storage tests", function () {
        it("Test that calling recipe functions uses custom storage handlers", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        sessionStorage: {
                            ...original.sessionStorage,
                            getItemSync: function (key) {
                                storageLogs.push(`GET_ITEM_SYNC ${key}`);
                                /**
                                 * When fetching from storage in sign in up, errors are handled by
                                 * returning undefined. In this case  we make getAuthStateFromURL
                                 *  throw an error
                                 */
                                throw new Error("Expected error during tests");
                            },
                            setItem: async function (key, _) {
                                storageLogs.push(`SET_ITEM ${key}`);
                                throw new Error("Expected error during tests");
                            },
                        },
                    };
                },
                recipeList: [
                    ThirdPartyPasswordless.init({
                        override: {
                            functions: function (original) {
                                return {
                                    ...original,
                                    generateThirdPartyStateToSendToOAuthProvider: () => "state",
                                    getAuthorisationURLFromBackend: () => ({
                                        status: "OK",
                                        url: "https://test.provider.com/authorize",
                                    }),
                                };
                            },
                        },
                    }),
                ],
            });

            try {
                await ThirdPartyPasswordless.getThirdPartyAuthorisationURLWithQueryParamsAndSetState({
                    providerId: "",
                    authorisationURL: "",
                });
                throw new Error("getThirdPartyAuthorisationURLWithQueryParamsAndSetState should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }

            try {
                await ThirdPartyPasswordless.thirdPartySignInAndUp();
                throw new Error("thirdPartySignInAndUp should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }

            assert.deepEqual(storageLogs, [
                "SET_ITEM supertokens-oauth-state-2",
                "GET_ITEM_SYNC supertokens-oauth-state-2",
            ]);
        });

        it("Test that recipe functions use default window APIs", async function () {
            /**
             * In normal SDK operation, the recipe functions will use storage from the
             * `window` object. We do this to mimic sessionStorage
             */
            global.window = {
                sessionStorage: {
                    /**
                     * In this test because we rely on default Window APIs, when getStateAndOtherInfoFromStorage
                     * calls getItemSync it will internally call sessionStorage.getItem
                     */
                    getItem: function (key) {
                        storageLogs.push(`GET_ITEM_GLOBAL ${key}`);
                        /**
                         * When fetching from storage in sign in up, errors are handled by
                         * returning undefined. In this case  we make getAuthStateFromURL
                         *  throw an error
                         */
                        throw new Error("Expected error during tests");
                    },
                    setItem: function (key, _) {
                        storageLogs.push(`SET_ITEM_GLOBAL ${key}`);
                        throw new Error("Expected error during tests");
                    },
                },
            };

            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                recipeList: [
                    ThirdPartyPasswordless.init({
                        override: {
                            functions: function (original) {
                                return {
                                    ...original,
                                    generateThirdPartyStateToSendToOAuthProvider: () => "state",
                                    getAuthorisationURLFromBackend: () => ({
                                        status: "OK",
                                        url: "https://test.provider.com/authorize",
                                    }),
                                };
                            },
                        },
                    }),
                ],
            });

            try {
                await ThirdPartyPasswordless.getThirdPartyAuthorisationURLWithQueryParamsAndSetState({
                    providerId: "",
                    authorisationURL: "",
                });
                throw new Error("getThirdPartyAuthorisationURLWithQueryParamsAndSetState should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }

            try {
                await ThirdPartyPasswordless.thirdPartySignInAndUp();
                throw new Error("thirdPartySignInAndUp should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }

            assert.deepEqual(storageLogs, [
                "SET_ITEM_GLOBAL supertokens-oauth-state-2",
                "GET_ITEM_GLOBAL supertokens-oauth-state-2",
            ]);
        });
    });

    describe("Local storage tests", function () {
        it("Test that calling recipe functions uses custom storage handlers", async function () {
            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                windowHandler: function (original) {
                    return {
                        ...original,
                        localStorage: {
                            ...original.localStorage,
                            getItem: async function (key) {
                                storageLogs.push(`GET_ITEM ${key}`);
                                throw new Error("Expected error during tests");
                            },
                            setItem: async function (key, _) {
                                storageLogs.push(`SET_ITEM ${key}`);
                                throw new Error("Expected error during tests");
                            },
                        },
                    };
                },
                recipeList: [
                    ThirdPartyPasswordless.init({
                        override: {
                            functions: function (original) {
                                return {
                                    ...original,
                                    createPasswordlessCode: () => {
                                        return {};
                                    },
                                };
                            },
                        },
                    }),
                ],
            });

            try {
                await ThirdPartyPasswordless.createPasswordlessCode({
                    email: "",
                });
                throw new Error("createPasswordlessCode should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }

            try {
                await ThirdPartyPasswordless.resendPasswordlessCode();
                throw new Error("resendPasswordlessCode should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }

            assert.deepEqual(storageLogs, [
                "SET_ITEM supertokens-passwordless-loginAttemptInfo",
                "GET_ITEM supertokens-passwordless-loginAttemptInfo",
            ]);
        });

        it("Test that recipe functions use default handlers", async function () {
            /**
             * In normal SDK operation, the recipe functions will use storage from the
             * `window` object. We do this to mimic localStorage
             */
            global.window = {
                localStorage: {
                    getItem: function (key) {
                        storageLogs.push(`GET_ITEM_GLOBAL ${key}`);
                        /**
                         * When fetching from storage in sign in up, errors are handled by
                         * returning undefined. In this case  we make getAuthStateFromURL
                         *  throw an error
                         */
                        throw new Error("Expected error during tests");
                    },
                    setItem: function (key, _) {
                        storageLogs.push(`SET_ITEM_GLOBAL ${key}`);
                        throw new Error("Expected error during tests");
                    },
                },
            };

            SuperTokens.init({
                appInfo: {
                    appName: "SuperTokens",
                    apiDomain: "api.supertokens.io",
                },
                recipeList: [
                    ThirdPartyPasswordless.init({
                        override: {
                            functions: function (original) {
                                return {
                                    ...original,
                                    createPasswordlessCode: () => {
                                        return {};
                                    },
                                };
                            },
                        },
                    }),
                ],
            });

            try {
                await ThirdPartyPasswordless.createPasswordlessCode({
                    email: "",
                });
                throw new Error("createPasswordlessCode should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }

            try {
                await ThirdPartyPasswordless.resendPasswordlessCode();
                throw new Error("resendPasswordlessCode should have failed but didnt");
            } catch (e) {
                if (e.message !== "Expected error during tests") {
                    throw e;
                }
            }

            assert.deepEqual(storageLogs, [
                "SET_ITEM_GLOBAL supertokens-passwordless-loginAttemptInfo",
                "GET_ITEM_GLOBAL supertokens-passwordless-loginAttemptInfo",
            ]);
        });
    });
});
