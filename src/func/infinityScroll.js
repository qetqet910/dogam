import { useEffect, useRef, useState } from 'react';
import 'intersection-observer';

export const useIntersectionObserver = (callback) => {
  const [observationTarget, setObservationTarget] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        callback();
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    const currentTarget = observationTarget;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [observationTarget]);

  return setObservationTarget;
};

    // const observer = useRef(
    //     new IntersectionObserver(
    //         ([entry]) => {
    //             if (entry.isIntersecting) {
    //             callback(); 
    //             }
    //         },
    //         { threshold: 1 }
    //     )
    // );

    // function callback(){
    //     return;
    // }

    {/* <div className="Observer" ref={observer} ></div> */}
