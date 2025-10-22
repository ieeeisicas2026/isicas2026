import classNames from 'classnames';
import { useMemo, useState } from 'react';
import SwiperCore from 'swiper';
import { A11y, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { BCMSImage } from '@thebcms/components-react';
import type { SponsorGroup } from '../../../bcms/types/ts';
import type { ClientConfig } from '@thebcms/client';
import ContentManager from '../ContentManager';

interface Props {
    title: string;
    sponsors: SponsorGroup[];
    bcmsConfig: ClientConfig;
}

type TiersType = 'hosts' | 'support';

const tiers: TiersType[] = ['hosts', 'support'];

SwiperCore.use([A11y, Pagination]);

const sliderOptions = {
    slidesPerView: 1,
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: '.homeSponsors--pagination',
        clickable: true,
    },
};

const HomeSponsors: React.FC<Props> = ({ title, sponsors, bcmsConfig }) => {
    const [activeTier, setActiveTier] = useState<TiersType>('hosts');

    const filteredSponsors = useMemo(() => {
        return sponsors.filter(
            (sponsor) =>
                sponsor.tier.toLowerCase() === activeTier.toLowerCase(),
        );
    }, [activeTier]);

    return (
        <section className="pb-16 lg:pb-[176px]">
            <div className="container">
                <div id="sponsors" className="scroll-mt-24 md:scroll-mt-32 leading-none tracking-[-0.02em] font-semibold text-center mb-6 lg:text-5xl lg:leading-none lg:mb-16">
                    <h2>{title}</h2>
                </div>
                <div className="p-1.5 rounded-[64px] bg-appGray-200 grid grid-cols-2 mb-8 lg:max-w-[828px] lg:mx-auto lg:mb-[128px]">
                    {tiers.map((tier) => (
                        <button
                            className={classNames(
                                'flex justify-center capitalize px-1 py-[7px] rounded-[38px] text-xs leading-none tracking-[-0.04em] transition-colors duration-300 lg:py-[18px] lg:text-2xl lg:leading-none',
                                {
                                    'text-white bg-appAccent font-semibold':
                                        activeTier === tier,
                                    'text-appGray-600 font-medium':
                                        activeTier !== tier,
                                },
                            )}
                            onClick={() => setActiveTier(tier)}
                            key={tier}
                        >
                            {tier}
                        </button>
                    ))}
                </div>
                <div className="mb-10 lg:mb-[128px]">
                    <Swiper {...sliderOptions} className="mb-8 lg:mb-[72px]">
                        {filteredSponsors.length &&
                            filteredSponsors.map((sponsor, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex items-center justify-center w-[384px] aspect-[2.17] rounded-lg bg-white mx-auto mb-6 lg:w-[462px] lg:aspect-[1.7] lg:rounded-2xl lg:mb-12">
                                        <BCMSImage
                                            media={sponsor.cover_image}
                                            clientConfig={bcmsConfig}
                                            className="max-w-full w-auto h-12 object-cover"
                                        />
                                    </div>
                                    <ContentManager
                                        items={sponsor.description.nodes}
                                        className="text-sm leading-[1.4] tracking-[-0.8px] text-center text-appGray-500 max-w-[1152px] mx-auto lg:text-[26px] lg:leading-[1.4]"
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    <div className="homeSponsors--pagination swiper--customPagination" />
                </div>
            </div>
        </section>
    );
};

export default HomeSponsors;
