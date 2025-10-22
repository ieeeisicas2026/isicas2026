import classNames from 'classnames';
import React, { useState } from 'react';
import SwiperCore from 'swiper';
import { A11y, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper, type SwiperClass } from 'swiper/react';
import type { AgendaDayGroup } from '../../../bcms/types/ts';
import ContentManager from '../ContentManager';

SwiperCore.use([A11y, Pagination]);

const sliderOptions = {
    slidesPerView: 1,
    watchOverflow: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
        el: '.homeAgenda--pagination',
        clickable: true,
    },
};

interface Props {
    title: string;
    days: AgendaDayGroup[];
}

const HomeAgenda: React.FC<Props> = ({ title, days }) => {
    const [agendaSwiper, setAgendaSwiper] = useState<SwiperClass | null>(null);

    const handleAgendaSwiperInit = (swiper: SwiperClass) => {
        setAgendaSwiper(swiper);
    };

    const goToAgendaSlide = (index: number) => {
        if (agendaSwiper) {
            agendaSwiper.slideTo(index);
        }
    };

    const [activeSlide, setActiveSlide] = useState(0);

    const handleIndexChange = (swiper: SwiperClass): void => {
        setActiveSlide(swiper.activeIndex);
    };

    return (
        <section className="pb-[72px] lg:pb-[136px]">
            <div className="container">
                <div className="flex items-center justify-between mb-6 lg:mb-16">
                    <div id="agenda" className="scroll-mt-24 md:scroll-mt-32 leading-none tracking-[-0.02em] font-semibold text-center lg:text-5xl lg:leading-none">
                        <h2>{title}</h2>
                    </div>
                    <div className="p-1.5 rounded-[64px] bg-appGray-100 grid grid-cols-3 mb-0 lg:max-w-[620px] lg:mx-auto">
                        {days.map((day, index) => (
                            <button
                                className={classNames(
                                    'flex px-2 py-[5px] rounded-[25px] text-sm leading-none tracking-[-0.04em] lg:px-[15px] lg:py-2.5 lg:text-xl lg:leading-none',
                                    {
                                        'text-white bg-[#004C59] font-semibold':
                                            activeSlide === index,
                                        'text-appGray-600 font-medium':
                                            activeSlide !== index,
                                    },
                                )}
                                onClick={() => goToAgendaSlide(index)}
                                key={index}
                            >
                                {day.label}
                            </button>
                        ))}
                    </div>
                </div>
                <Swiper
                    {...sliderOptions}
                    className="mb-8 lg:mb-20"
                    onActiveIndexChange={handleIndexChange}
                    onSwiper={handleAgendaSwiperInit}
                >
                    {days.map((day, index) => (
                        <SwiperSlide key={index}>
                            <div className="grid grid-cols-1 gap-6 lg:gap-12">
                                {day.items.map((item, itemItem) => (
                                    <div
                                        key={itemItem}
                                        className="grid grid-cols-[70px,1fr] lg:grid-cols-[295px,1fr]"
                                    >
                                        <div className="text-sm leading-none tracking-[-0.04em] text-appGray-600 lg:text-2xl lg:leading-none">
                                            {item.hours}
                                        </div>
                                        <div>
                                            <div className="text-xs leading-none tracking-[-0.04em] text-appGray-600 mb-3 lg:text-xl lg:leading-none lg:mb-4">
                                                {item.title}
                                            </div>
                                            <ContentManager
                                                items={item.description.nodes}
                                                className="text-sm leading-[1.4] tracking-[-0.41px] text-appGray-500 mb-4 lg:text-xl lg:leading-[1.4] lg:mb-6"
                                            />
                                            <div className="text-sm leading-none tracking-[-0.04em] text-appGray-600 lg:text-2xl lg:leading-none">
                                                Location: {item.location}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="homeAgenda--pagination swiper--customPagination" />
            </div>
        </section>
    );
};

export default HomeAgenda;
