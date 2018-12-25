window.addEventListener('DOMContentLoaded', () => {
  let wrapper = document.getElementById('education');
  let topLayer = wrapper.querySelector('.top');
  let slider = wrapper.querySelector('#slider');
  let skew = 1000;
  let delta = 0;

  wrapper.addEventListener('mousemove', (event) => {
    delta = (event.clientX - window.innerWidth / 2) * 0.5;
    slider.style.left = event.clientX + delta + "px";
    topLayer.style.width = event.clientX + skew + delta + "px";
  });
});
