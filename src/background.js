import {ifRemoveCookiesOnStartup} from './settings';
import {removeCookies} from './removecookies';
import {onCommandPersistDomainCookieItems, onCommandRemoveCookies, onCommandRequestDomainCookieItems} from './commandlistener';
import {getDisplayItems, setDisplayItems} from './displayitems';
import {onBrowserActionClicked, openOptionsPage} from './webext';

onCommandPersistDomainCookieItems(setDisplayItems);
onCommandRequestDomainCookieItems(getDisplayItems);
onCommandRemoveCookies(removeCookies);

ifRemoveCookiesOnStartup()
    .map(removeCookies);

onBrowserActionClicked(openOptionsPage);