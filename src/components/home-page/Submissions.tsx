import type {
    PropRichTextDataParsed,
} from '@thebcms/types';
import ContentManager from '../ContentManager';

interface Props {
    title: string;
    description: PropRichTextDataParsed;
}

const HomeSubmissions: React.FC<Props> = ({
    title,
    description,
}) => {
    return (
        <section className="pt-8 pb-16 lg:pt-[120px] lg:pb-[120px]">
            <div className="container">
                <div className="flex items-center justify-between mb-4 lg:mb-[72px]">
                    <h2 id="submissions" className="scroll-mt-24 md:scroll-mt-32 leading-none tracking-[-0.05em] font-semibold lg:text-[104px] lg:leading-none">
                        <h2>{title}</h2>
                    </h2>
                </div>
                <ContentManager
                    items={description.nodes}
                    className="text-sm leading-[1.4] tracking-[-0.8px] text-appGray-500 mb-6 lg:text-[26px] lg:leading-[1.4] lg:mb-[112px]"
                />
            </div>
        </section>
    );
};

export default HomeSubmissions;
