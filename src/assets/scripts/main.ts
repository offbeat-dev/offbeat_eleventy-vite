import "focus-visible"

const test = () => {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = "blue";    
  });
};

test();

export { };