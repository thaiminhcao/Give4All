import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useCallback } from "react";

type Props = { options?: EmblaOptionsType } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    ...options,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="mt-20 relative">
        <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16"
            onClick={scrollPrev}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
              <circle cx="22.5" cy="22.5" r="22" fill="white" stroke="#828282"/>
              <path d="M12.6464 22.6464C12.4512 22.8417 12.4512 23.1583 12.6464 23.3536L15.8284 26.5355C16.0237 26.7308 16.3403 26.7308 16.5355 26.5355C16.7308 26.3403 16.7308 26.0237 16.5355 25.8284L13.7071 23L16.5355 20.1716C16.7308 19.9763 16.7308 19.6597 16.5355 19.4645C16.3403 19.2692 16.0237 19.2692 15.8284 19.4645L12.6464 22.6464ZM33 22.5L13 22.5L13 23.5L33 23.5L33 22.5Z" fill="#828282"/>
            </svg>
        </button>
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-12">{children}</div>
        </div>
        <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-16"
            onClick={scrollNext}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
              <circle cx="22.5" cy="22.5" r="22" fill="white" stroke="#828282"/>
              <path d="M33.3536 23.3536C33.5488 23.1583 33.5488 22.8417 33.3536 22.6464L30.1716 19.4645C29.9763 19.2692 29.6597 19.2692 29.4645 19.4645C29.2692 19.6597 29.2692 19.9763 29.4645 20.1716L32.2929 23L29.4645 25.8284C29.2692 26.0237 29.2692 26.3403 29.4645 26.5355C29.6597 26.7308 29.9763 26.7308 30.1716 26.5355L33.3536 23.3536ZM13 23.5H33V22.5H13V23.5Z" fill="#828282"/>
            </svg>
        </button>
        </div>

    
  );
};
export default Slider;
