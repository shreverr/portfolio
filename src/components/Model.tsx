'use client'

import Spline from '@splinetool/react-spline'
import gsap from 'gsap/all';
import { use, useEffect, useRef, useState } from 'react'; // Import RefObject

interface ModelProps {
  className: string,

}

const Model: React.FC<ModelProps> = ({ className }, ref) => {
  const [isLoading, setIsLoading] = useState(true);

  const model = useRef(null);
  // useEffect(() => {
  // }, [])

  return (
    // <Spline onLoad={() => setIsLoading(false)} className={className} scene="https://prod.spline.design/n9W9C2MjMhM7790s/scene.splinecode" />
    <Spline
      onLoad={() => setIsLoading(false)}
      ref={model}
      className={`${className} fixed w-screen h-screen`}
      // scene="https://prod.spline.design/oNL0ipPPnzl3p46x/scene.splinecode" />
      scene="https://prod.spline.design/7XMtiqe2XkfiDV-C/scene.splinecode" />
      // scene="https://prod.spline.design/cJkq6hsiUPNRHeMf/scene.splinecode" />

  );
}


export default Model
