import { BCMSImage } from '@thebcms/components-react';
import './organizers.css';
import type {
    PropMediaDataParsed,
    PropRichTextDataParsed,
} from '@thebcms/types';
import type { OrganizerGroup } from '../../../bcms/types/ts';
import type { ClientConfig } from '@thebcms/client';
import ContentManager from '../ContentManager';

interface Props {
    title: string;
    description: PropRichTextDataParsed;
    cover: PropMediaDataParsed;
    organizers: OrganizerGroup[];
    bcmsConfig: ClientConfig;
}

const HomeOrganizers: React.FC<Props> = ({
    title,
    description,
    cover,
    organizers,
    bcmsConfig,
}) => {
    return (
        <section className="pb-16 lg:pb-[136px]">
            <div className="container">
                <div className="container">
                    <div className="px-4 mb-[14px] lg:px-16 lg:mb-24 xl:mb-12">
                        <div className="relative aspect-[1.78] lg:aspect-[1.78]">
                            <BCMSImage
                                media={cover}
                                clientConfig={bcmsConfig}
                                className="relative z-10 size-full object-cover"
                            />
                            <div className="absolute -top-4 -left-4 w-[163px] aspect-square bg-[#5284C4] lg:w-[416px] xl:w-[544px] lg:-top-16 lg:-left-16" />
                            <div className="absolute bottom-0 -right-4 w-[163px] aspect-square bg-[#004C59] lg:w-[416px] xl:w-[544px] lg:-right-16 -mb-4 lg:-mb-16 xl:-mb-16" />
                        </div>
                    </div>
                </div>
                <div className="px-4 lg:px-16">
                    <div id="organizers" className="scroll-mt-24 md:scroll-mt-32 leading-none tracking-[-0.02em] font-semibold mb-3 lg:text-5xl lg:leading-none lg:mb-6">
                        <h2>{title}</h2>
                    </div>
                    <ContentManager
                        items={description.nodes}
                        className="text-sm leading-[1.4] tracking-[-0.8px] text-appGray-500 mb-6 lg:text-[26px] lg:leading-[1.4] lg:mb-[88px]"
                    />
                        {organizers &&
                            organizers.map((organizer, index) => (
                                <div key={index}>
                                    <div className="flex items-center mb-5 lg:mb-14">
                                        <div className="shrink-0">
                                            <BCMSImage
                                                media={organizer.avatar_image}
                                                clientConfig={bcmsConfig}
                                                className="w-16 h-16 object-cover rounded-full overflow-hidden mr-3 lg:w-24 lg:h-24 lg:mr-6"
                                            />
                                        </div>
                                        <div className="shrink">
                                            <div className="text-sm leading-none tracking-[-0.04em] mb-1.5 lg:text-[32px] lg:leading-none lg:mb-[14px]">
                                                {organizer.name}
                                            </div>
                                            <div className="text-xs tracking-[-0.05em] text-appGray-500 lg:text-2xl">
                                                {organizer.role}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </section>
    );
};

export default HomeOrganizers;
