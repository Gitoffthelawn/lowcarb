import { safeMaybeOf } from './utils';

/* eslint-disable no-undef */
export const getAllCookies = () => safeMaybeOf(() => browser.cookies.getAll({}));
export const removeCookie = param => browser.cookies.remove(param);
export const openOptionsPage = () => browser.runtime.openOptionsPage();
export const onStartup = browser.runtime.onStartup.addListener;
export const getIntMessage = browser.i18n.getMessage;

export const createNotification = (id, param) => browser.notifications.create(id, param).then(() => true);
export const clearNotification = id => browser.notifications.clear(id);

export const setSyncStorage = object => safeMaybeOf(() => browser.storage.sync.set(object).then(() => true));
export const getSyncStorage = key => safeMaybeOf(() => browser.storage.sync.get(key));

export const onBrowserActionClicked = listener => browser.browserAction.onClicked.addListener(listener);

export const createAlarm = browser.alarms.create;
export const onAlarm = browser.alarms.onAlarm.addListener;
/* eslint-enable no-undef */
