import { defineMessages } from 'frontend-platform-vi/i18n';

const messages = defineMessages({
  srPrices: {
    id: 'learning.offer.screenReaderPrices', // historic id
    defaultMessage: 'Original price: {originalPrice}, discount price: {discountedPrice}',
  },
  srInlinePrices: {
    id: 'learning.upgradeButton.screenReaderInlinePrices',
    defaultMessage: 'Original price: {originalPrice}',
  },
});

export default messages;
