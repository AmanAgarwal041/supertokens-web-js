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

import { WindowHandlerReference } from "supertokens-website/utils/windowHandler";
import { StorageHandler } from "./types";

export default function getDefaultLocalStorageHandler(): StorageHandler {
    return {
        key: async function (index: number) {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().key(index);
        },
        clear: async function () {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().clear();
        },
        getItem: async function (key: string) {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().getItem(key);
        },
        removeItem: async function (key: string) {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().removeItem(key);
        },
        setItem: async function (key: string, value: string) {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().setItem(key, value);
        },
        keySync: function (index: number) {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().key(index);
        },
        clearSync: function () {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().clear();
        },
        getItemSync: function (key: string) {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().getItem(key);
        },
        removeItemSync: function (key: string) {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().removeItem(key);
        },
        setItemSync: function (key: string, value: string) {
            return WindowHandlerReference.getReferenceOrThrow().windowHandler.getLocalStorage().setItem(key, value);
        },
    };
}
