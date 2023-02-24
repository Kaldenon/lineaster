// Strings used for events tracking

export const PAGEVIEW = 'Pageview';
export const USER = {
  LOGIN: 'User login',
  LOGOUT: 'User logout',
  SIWL: 'Sign in with Lens',
  CHANGE_WALLET: 'Change wallet'
};

export const PROFILE = {
  FOLLOW: 'Follow profile',
  SUPER_FOLLOW: 'Super follow profile',
  UNFOLLOW: 'Unfollow profile',
  OPEN_SUPER_FOLLOW: 'Open super follow modal',
  SWITCH_PROFILE_FEED_TAB: 'Switch profile feed tab',
  SWITCH_PROFILE: 'Switch profile',
  LOGOUT: 'Profile logout'
};

export const PUBLICATION = {
  NEW_POST: 'New post',
  NEW_COMMENT: 'New comment',
  LIKE: 'Like publication',
  DISLIKE: 'Dislike publication',
  MIRROR: 'Mirror publication',
  EMBED: 'Embed publication',
  PERMALINK: 'Permalink publication',
  DELETE: 'Delete publication',
  REPORT: 'Report publication',
  OEMBED_CLICK: 'Click publication oembed',
  ATTACHMENT: {
    IMAGE: {
      OPEN: 'Open image attachment'
    },
    AUDIO: {
      PLAY: 'Play audio',
      PAUSE: 'Pause audio'
    }
  },
  COLLECT_MODULE: {
    OPEN_COLLECT: 'Open collect modal',
    COLLECT: 'Collect publication',
    OPEN_UNISWAP: 'Open Uniswap'
  },
  TOKEN_GATED: {
    CHECKLIST_NAVIGATED_TO_COLLECT: 'Decrypt checklist navigated to collect',
    CHECKLIST_NAVIGATED_TO_TOKEN: 'Decrypt checklist navigated to token',
    CHECKLIST_NAVIGATED_TO_NFT: 'Decrypt checklist navigated to NFT',
    DECRYPT: 'Decrypt token gated publication'
  }
};

export const NOTIFICATION = {
  SWITCH_NOTIFICATION_TAB: 'Switch notifications tab'
};

export const EXPLORE = {
  SWITCH_EXPLORE_FEED_TAB: 'Switch explore feed tab',
  SWITCH_EXPLORE_FEED_FOCUS: 'Switch explore feed focus'
};

export const MESSAGES = {
  SEND: 'Send message',
  OPEN_NEW_CONVERSATION: 'Open new conversation modal'
};

export const SETTINGS = {
  ACCOUNT: {
    SET_DEFAULT_PROFILE: 'Set default profile',
    SET_SUPER_FOLLOW: 'Set super follow'
  },
  PROFILE: {
    UPDATE: 'Update profile',
    SET_NFT_PICTURE: 'Set NFT profile picture',
    SET_PICTURE: 'Set profile picture',
    SET_STATUS: 'Set profile status',
    CLEAR_STATUS: 'Clear profile status'
  },
  DISPATCHER: {
    TOGGLE: 'Toggle dispatcher'
  },
  ALLOWANCE: {
    TOGGLE: 'Toggle allowance'
  },
  INTERESTS: {
    ADD: 'Add profile interest',
    REMOVE: 'Remove profile interest'
  },
  DELETE: 'Delete profile'
};

export const MOD = {
  SPAM: 'Mod spam report',
  OTHER: 'Mod report'
};

export const STAFFTOOLS = {
  TOGGLE_MODE: 'Toggle staff mode'
};

export const SYSTEM = {
  SWITCH_THEME: 'Switch theme',
  SWITCH_NETWORK: 'Switch network'
};

export const MISCELLANEOUS = {
  OPEN_RECOMMENDED_PROFILES: 'Open recommended profiles modal',
  OPEN_TRENDING_TAG: 'Open trending tag',
  SWITCH_TIMELINE: 'Switch to timeline',
  SWITCH_HIGHLIGHTS: 'Switch to highlights',
  SELECT_USER_FEED: 'Select user feed'
};

export const ONBOARDING = {
  NAVIGATE_UPDATE_PROFILE: 'Navigate to update profile from onboarding',
  NAVIGATE_UPDATE_PROFILE_INTERESTS: 'Navigate to update profile interests from onboarding'
};
