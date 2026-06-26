import { casePreviewImage } from "../data/caseData.js";
import { marketOpportunityPreview, servicesPreview } from "../data/homeAssets.js";

export default function HomeAssets() {
  return (
    <section className="bg-porcelain py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <AssetCard src={marketOpportunityPreview} title="市场机会视觉" />
          <AssetCard src={servicesPreview} title="服务模块视觉" />
          <AssetCard src={casePreviewImage} title="案例展示视觉" />
        </div>
      </div>
    </section>
  );
}

function AssetCard({ src, title }) {
  return (
    <figure className="overflow-hidden bg-white shadow-sm">
      <img src={src} alt={title} className="h-72 w-full object-cover" />
    </figure>
  );
}
