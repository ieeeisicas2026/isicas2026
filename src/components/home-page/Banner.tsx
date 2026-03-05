import React from 'react';
import type { PropRichTextDataParsed } from '@thebcms/types';
import ContentManager from '../ContentManager';

interface Prop {
    description: PropRichTextDataParsed;
}

const HomeBanner: React.FC<Prop> = ({
    description,
}) => {
    if (!description) {
    return (none);
    }

    return ( 
        <section id="marketing-banner" className="fixed z-50 flex flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 lg:p-8 -translate-x-1/2 bg-white bg-opacity-95 border rounded-lg shadow-xs lg:max-w-7xl left-1/2 top-20 md:top-28 bg-yellow-50 dark:bg-gray-800 ">
            <div className="flex flex-col items-start md:items-center md:flex-row">
                <ContentManager
                    items={description.nodes}
                    className="text-sm text-yellow-800 dark:text-yellow-300 leading-[1.4] tracking-[-0.41px] max-w-[823px] mx-auto lg:text-2xl lg:leading-none"
                />
            </div>
        </section>
    );
};

export default HomeBanner;
