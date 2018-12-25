window.onload = (() => {
  quoteBox = document.getElementById('quote');
  onePageScroll("#scroll", {
    sectionContainer: "section",
    easing: "ease",
    animationTime: 750,
    pagination: true,
    updateURL: false,
    beforeMove: (index) => {},
    afterMove: (index) => {},
    loop: false,
    keyboard: true,
    responsiveFallback: false
  });
});
