import React, { createContext, useEffect, useState } from 'react'
import { LOCAL_STORAGE_KEYS } from '../utils/Storages'
import { useTranslation } from 'react-i18next'

interface LangContextInterface {
    lang: string
    setLang: (lang: string) => void
}

interface LangContextProviderInterface {
    children: React.ReactNode
}

const defaultLang = localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE) ||
    navigator.language.substring(0, 2) ||
    'en'

const LangContext = createContext<LangContextInterface>({
    lang: defaultLang,
    setLang: () => {}
})

export const LangContextProvider = ({ children }: LangContextProviderInterface) => {
    const { i18n } = useTranslation()
    const [lang, setLangState] = useState<string>(defaultLang)

    const setLang = (newLang: string) => {
        setLangState(newLang)
        i18n.changeLanguage(newLang)
        localStorage.setItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE, newLang)
    }

    useEffect(() => {
        if (!localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE)) {
            setLang(defaultLang)
        }
    }, [])

    return (
        <LangContext.Provider value={{ lang, setLang }}>
            {children}
        </LangContext.Provider>
    )
}

export default LangContext
