import type { ClientConfig } from '@thebcms/client';
import { BCMSImage } from '@thebcms/components-react';
import type {
    PropMediaDataParsed,
    PropRichTextDataParsed,
} from '@thebcms/types';
import ContentManager from '../ContentManager';

interface Props {
    cover: PropMediaDataParsed;
    cover_heading: string;
    cover_subheading: string;
    title: string;
    description: PropRichTextDataParsed;
    bcmsConfig: ClientConfig;
}

const HomeTravel: React.FC<Props> = ({
    cover,
    cover_heading,
    cover_subheading,
    title,
    description,
    bcmsConfig,
}) => {
    return (
        <section className="pt-8 pb-16 lg:pt-[120px] lg:pb-[120px]">
            <div className="container">
                <div className="flex items-center justify-between mb-4 lg:mb-[72px]">
                    <h2 id="travel" className="scroll-mt-24 md:scroll-mt-32 leading-none tracking-[-0.05em] font-semibold lg:text-[104px] lg:leading-none">
                        <h2>{title}</h2>
                    </h2>
                </div>
            </div>
            <div className="relative aspect-[1.74] bg-appGray-300 mb-8 lg:aspect-[2] xl:aspect-[2] 2xl:aspect-[3]">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container h-full">
                    <div className="h-full flex flex-col items-left justify-end">
                        <div className="text-[32px] leading-none tracking-[-0.41px] text-white mb-3 lg:text-[50px] lg:leading-none lg:mb-8 drop-shadow-xl">
                            {cover_heading}
                        </div>
                        <div className="text-[16px] leading-none tracking-[-0.41px] font-light text-white mb-3 lg:text-[25px] lg:leading-none lg:mb-8 drop-shadow-xl text-shadow-lg">
                            {cover_subheading}
                        </div>
                    </div>
                </div>
                <BCMSImage
                    media={cover}
                    clientConfig={bcmsConfig}
                    className="size-full object-cover"
                />
            </div>
            <div className="container">
                <ContentManager
                    items={description.nodes}
                    className="text-sm leading-[1.4] tracking-[-0.8px] text-appGray-500 mb-6 lg:text-[26px] lg:leading-[1.4] lg:mb-[112px]"
                />
            </div>
        </section>
    );
};

export default HomeTravel;
