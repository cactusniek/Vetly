export const messages = {
    en: {
        connection_error: 'Connection error',
    },

    nl: {
        connection_error: 'Verbindingsfout',
    },
} as const

export type MessageLanguage = keyof typeof messages
export type MessageKey = keyof typeof messages.en
