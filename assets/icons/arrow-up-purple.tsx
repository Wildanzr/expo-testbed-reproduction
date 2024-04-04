/* eslint-disable max-len */
import React from "react";
import { SvgXml } from "react-native-svg";

const ArrowUpIconPurple = (): React.ReactNode => {
  const xml = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z" fill="#7048F6"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4717 14.1924C15.2797 14.1924 15.0867 14.1194 14.9407 13.9714L11.9997 11.0184L9.0607 13.9714C8.7687 14.2654 8.2937 14.2654 7.9997 13.9734C7.7067 13.6814 7.7047 13.2074 7.9977 12.9134L11.4687 9.42642C11.7497 9.14342 12.2497 9.14342 12.5317 9.42642L16.0027 12.9134C16.2947 13.2074 16.2937 13.6814 16.0007 13.9734C15.8547 14.1194 15.6627 14.1924 15.4717 14.1924Z" fill="#7048F6"/>
    </svg>
    `;
  return <SvgXml xml={xml} width="24px" height="24px" />;
};

export default ArrowUpIconPurple;
