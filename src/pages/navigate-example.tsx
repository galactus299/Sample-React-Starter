import React from 'react';
import {useTranslation} from "react-i18next";
import navigationcodeimg from "../assets/navigation.png";

const NavigateExample = () => {
    const {t} = useTranslation()
    return (
        <section className="p-8">
            <div className="mx-auto max-w-screen-md">
                <div
                    // variant="small"
                    className="font-medium !text-blue-500"
                >
                    #REACT #react-i18next #react-router-dom
                </div>
                <div
                    // variant="h2"
                    color="blue-gray"
                    className="my-4 font-black text-4xl !leading-snug"
                >
                    {t('page.navigation.title')}
                </div>
                <div className="font-normal !text-gray-500 whitespace-pre-line">
                    {t('page.navigation.context')}
                </div>
                <img
                    src={navigationcodeimg}
                    alt="code snipet"
                    className="mb-4  w-full rounded-xl object-cover mt-4"
                />

                <a
                    href={'/'}
                    // variant="small"
                    className="font-medium text-blue-500 w-full text-center cursor-pointer hover:text-red-600 hover:underline"
                >
                    {t('component.check.out.translation')}
                </a>
            </div>
        </section>
    );
};

export default NavigateExample;