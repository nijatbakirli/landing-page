import {useEffect} from 'react';

const useVPagination = (id, prev, next) => {
    useEffect(() => {
        let dom = document.getElementById(id);
        const handleScroll = (e) => {
            var rect = dom.getBoundingClientRect();
            var windowHeight = window.innerHeight;
            if (rect.y < 0 || rect.y > windowHeight || window.scrollInterval) {
                e.preventDefault();
                return false;
            }

            var st = window.pageYOffset || document.documentElement.scrollTop;
            let scrollBy = 0;
            if (st > (window.lastScrollTop || 0)){
                // downscroll code
                scrollBy = rect.y;
            } else {
                // upscroll code
                scrollBy = -(windowHeight - rect.y - 1);
            }
            window.lastScrollTop = st <= 0 ? 0 : st;

            let scrollStep = 10;
            let scrollAmount = Math.abs(scrollBy);
            let direction = scrollBy > 0 ? 1 : -1;
            
            window.scrollInterval = window.setInterval(() => {
                if (scrollAmount < scrollStep) {
                    window.clearInterval(window.scrollInterval);
                    window.scrollBy(0, direction * Math.floor(scrollAmount));
                    window.scrollInterval = null;
                    return;
                }
                scrollAmount -= scrollStep;
                window.scrollBy(0, direction * scrollStep);
            }, 1);
        }
        window.addEventListener("scroll", handleScroll, false);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [id]);
};

export default useVPagination;
