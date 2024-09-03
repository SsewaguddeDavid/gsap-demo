import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
          delay: 0.3,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 z-10 w-full flex flex-col"
      >
        <h1 className="text-9xl" id="title-1">
          Software designer
        </h1>
        <h1 className="text-9xl" id="title-2">
          Freelancer
        </h1>
        <h1 className="text-9xl" id="title-3">
          Designer
        </h1>
      </div>
      <div className="h-screen flex bg-gray-950 justify-center place-items-center ">
        <h id="welcome" className="text-9xl font-bold text-gray-100 ">
          Welcome
        </h>
      </div>
    </div>
  );
}
