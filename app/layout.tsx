import { Metadata } from "next";
import "./globals.css"
import {  Noto_Sans_Thai } from 'next/font/google';
import PageWithLoading from "@/components/PageWithLoading";

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
  variable: '--font-noto-sans-thai',
});

type Metadata={
  title: string;
  description: string;
  keywords: string;
}

export const metadat:Metadata ={
  title:'PineApple',
  description:'pineapple',
  keywords:'pineapple'
};

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <html>
      <body className={`${notoSansThai.className}`}>
        <PageWithLoading/>
        {children}
      </body>
    </html>
  )
}
export default layout