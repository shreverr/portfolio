import { Montserrat, Poppins } from "next/font/google";
import localFont from 'next/font/local'

export const montserrat = Montserrat({ subsets: ['latin'] })
export const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
export const theSuavity = localFont({ src: '../../../public/TheSuavity.ttf' })
