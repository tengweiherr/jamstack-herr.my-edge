import gsap from "gsap"
import { MutableRefObject } from "react";

const animateQuote1 = (quote1TL:MutableRefObject<gsap.core.Timeline | undefined>) => {

    const scrollTriggerConfig = {
        trigger: ".quote-1",
        start: "top bottom",
        end: "+=200",
        scrub: 1,
        toggleActions: "play complete complete complete"
    }

    quote1TL.current = gsap.timeline({
        scrollTrigger: scrollTriggerConfig
    })
    .from(".quote-1 h2", {
      y: 50
    })
    .from(".quote-1 p", {
      y: 20,
      opacity: 0
    })

}

export default animateQuote1



