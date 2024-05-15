/* eslint-disable max-len */
import { SvgXml } from "react-native-svg";

const ArrowGoIcon = (): React.ReactNode => {
  const xml = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_b_165_2904)">
<rect width="24" height="24" rx="12" fill="url(#paint0_linear_165_2904)"/>
<path d="M15.8968 12.1768L16.0736 12.0001L15.8968 11.8233L13.1268 9.05328C13.0795 9.00591 13.0795 8.9242 13.1268 8.87684C13.1742 8.82947 13.2559 8.82947 13.3033 8.87684L16.3383 11.9118C16.3857 11.9592 16.3857 12.0409 16.3383 12.0883L13.3033 15.1233C13.2776 15.1489 13.2473 15.1601 13.2151 15.1601C13.1828 15.1601 13.1525 15.1489 13.1268 15.1233C13.0795 15.0759 13.0795 14.9942 13.1268 14.9468L15.8968 12.1768Z" fill="#7048F6" stroke="#7048F6" stroke-width="0.5"/>
<path d="M16.165 12.125H7.75C7.68307 12.125 7.625 12.0669 7.625 12C7.625 11.9331 7.68307 11.875 7.75 11.875H16.165C16.2319 11.875 16.29 11.9331 16.29 12C16.29 12.0669 16.2319 12.125 16.165 12.125Z" fill="#7048F6" stroke="#7048F6" stroke-width="0.5"/>
</g>
<defs>
<filter id="filter0_b_165_2904" x="-10" y="-10" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImageFix" stdDeviation="5"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_165_2904"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_165_2904" result="shape"/>
</filter>
<linearGradient id="paint0_linear_165_2904" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
<stop stop-color="#FEFEFE"/>
<stop offset="1" stop-color="#C7C2E0"/>
</linearGradient>
</defs>
</svg>

    `;
  return <SvgXml xml={xml} width="24px" height="24px" />;
};

export default ArrowGoIcon;
