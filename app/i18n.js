/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */
const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
const nlLocaleData = require('react-intl/locale-data/nl');

const nlTranslationMessages = require('./translations/nl.json');

addLocaleData(nlLocaleData);

const DEFAULT_LOCALE = 'nl';

// prettier-ignore
const appLocales = [
  'nl',
];

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, nlTranslationMessages)
      : {};

  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];

    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };

  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  nl: formatTranslationMessages('nl', nlTranslationMessages),
};

exports.appLocales = appLocales;
exports.formatTranslationMessages = formatTranslationMessages;
exports.translationMessages = translationMessages;
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
