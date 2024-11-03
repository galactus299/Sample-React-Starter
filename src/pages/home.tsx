import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";

import translateCodeImg from '../assets/translatecode.png'
import translateJsonImg from '../assets/translatejosn.png'
import translateJsonChinese from '../assets/translatejsonchinese.png'
import LangContext from '../context/language-context';

const Home = () => {
    const {t} = useTranslation()
    const {lang, setLang} = useContext(LangContext)
    return (
        <section className="p-8">
            <div className="mx-auto max-w-screen-md">
                <img
                    src={translateCodeImg}
                    alt="code snipet"
                    className="mb-4 w-full rounded-xl object-cover"
                />
                <div
                    // variant="small"
                    className="font-medium !text-blue-500"
                >
                    #REACT #react-i18next
                </div>
                <div
                    // variant="h2"
                    color="blue-gray"
                    className="my-4 font-black text-4xl !leading-snug"
                >
                    {t('page.i8n.title')}
                </div>
                <div className="font-normal !text-gray-500 whitespace-pre-line">
                    {t('page.i8n.context')}
                </div>
                <div className="font-normal text-sky-400/100 whitespace-pre-line hover:underline cursor-pointer"
                     onClick={() => {
                         if (lang === 'en') {
                             setLang('cn')
                         } else {
                             setLang('en')
                         }
                     }}
                >
                    {t('component.change.language', {Lang: `${lang === 'en' ? 'Chineese' : 'English'}`})}
                </div>
                <img
                    src={lang === 'en' ?translateJsonImg:translateJsonChinese}
                    alt="code snipet"
                    className="mb-4  w-full rounded-xl object-cover mt-4"
                />

                <a
                    href={'/navigate-example'}
                    // variant="small"
                    className="font-medium text-blue-500 w-full text-center cursor-pointer hover:text-red-600 hover:underline"
                >
                    {t('component.check.out.navigation')}
                </a>
            </div>
        </section>
    );
};

export default Home;