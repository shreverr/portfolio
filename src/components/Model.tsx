'use client'

import Spline from '@splinetool/react-spline'
import { RefObject } from 'react'; // Import RefObject

interface ModelProps {
  className: string
}

// const Model: React.ForwardRefRenderFunction<HTMLDivElement, ModelProps> = ({ }, ref) => {
//   return (
//     <Spline ref={ref} scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
//   );
// }

const Model: React.FC<ModelProps> = ({ className }, ref) => {
  return (
    <Spline className={className} scene="https://prod.spline.design/n9W9C2MjMhM7790s/scene.splinecode" />
  );
}


export default Model
