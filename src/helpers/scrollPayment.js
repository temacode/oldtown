export const scrollElementDown = (elem) => {
    const animate = () => {
        elem.scroll({
            top: 1000,
            left: 0,
        });
    };
    const interval = setInterval(() => {
        window.requestAnimationFrame(animate);
    }, 10);

    setTimeout(() => {
        clearInterval(interval);
    }, 400);
};