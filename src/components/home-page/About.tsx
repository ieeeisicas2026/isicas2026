import ArrowIcon from '../../assets/icons/arrow.svg?raw';
import type { ClientConfig } from '@thebcms/client';
import { BCMSImage } from '@thebcms/components-react';
import type {
    PropMediaDataParsed,
    PropRichTextDataParsed,
} from '@thebcms/types';
import ContentManager from '../ContentManager';

interface Props {
    title: string;
    cover: PropMediaDataParsed;
    description: PropRichTextDataParsed;
    bcmsConfig: ClientConfig;
}

const HomeAbout: React.FC<Props> = ({
    title,
    cover,
    description,
    bcmsConfig,
}) => {
    return (
        <section className="pt-8 pb-16 lg:pt-[120px] lg:pb-[240px]">
            <div className="container">
                <div className="flex items-center justify-between mb-4 lg:mb-[72px]">
                    <h2 id="about" className="scroll-mt-24 md:scroll-mt-32 leading-none tracking-[-0.05em] font-semibold lg:text-[104px] lg:leading-none">
                        <h2>{title}</h2>
                    </h2>
                    <div
                        dangerouslySetInnerHTML={{ __html: ArrowIcon }}
                        className="w-4 h-4 lg:w-[100px] lg:h-[104px]"
                    />
                </div>
                <BCMSImage
                    media={cover}
                    clientConfig={bcmsConfig}
                    className="w-full aspect-[1.78] object-cover mb-5 lg:aspect-[2.15] lg:mb-12"
                />
                <ContentManager
                    items={description.nodes}
                    className="text-sm leading-[1.4] tracking-[-0.8px] text-appGray-500 mb-6 lg:text-[26px] lg:leading-[1.4] lg:mb-[112px]"
                />
            </div>
        </section>
    );
};

export default HomeAbout;
