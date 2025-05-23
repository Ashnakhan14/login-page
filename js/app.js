const container = document.querySelector('.main-div');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

const loginForm = container.querySelector('.login');
const registerForm = container.querySelector('.register');
const toggleBox = container.querySelector('.toggle-box');
const toggleInner = container.querySelector('.toggle');

gsap.set(loginForm, { x: "0%", opacity: 1 });
gsap.set(registerForm, { x: "100%", opacity: 0 });

registerBtn.addEventListener('click', () => {
  container.classList.add('active');

  gsap.to(loginForm, { x: "-100%", opacity: 0, duration: 0.4, ease: "power2.inOut" });
  gsap.to(registerForm, { x: "0%", opacity: 1, duration: 0.4, ease: "power2.inOut" });

  gsap.to(toggleBox, { x: "100%", duration: 0.2, delay: 0.1, ease: "power2.inOut" });

  gsap.set(toggleInner, { opacity: 0 });

  gsap.to(toggleInner, {
    x: "-50%",
    duration: 0.8,
    // delay: 0.1,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to(toggleInner, { opacity: 1, duration: 0.1});
    }
  });
});

loginBtn.addEventListener('click', () => {
  container.classList.remove('active');

  gsap.to(loginForm, { x: "0%", opacity: 1, duration: 0.4, ease: "power2.inOut" });
  gsap.to(registerForm, { x: "100%", opacity: 0, duration: 0.4, ease: "power2.inOut" });

  gsap.to(toggleBox, { x: "0%", duration: 0.2, delay: 0.1, ease: "power2.inOut" });

  gsap.set(toggleInner, { opacity: 0 });

  gsap.to(toggleInner, {
    x: "0%",
    duration: 0.8,
    // delay: 0.1,
    ease: "power2.inOut",
    onComplete: () => {
      gsap.to(toggleInner, { opacity: 1, duration: 0.1, });
    }
  });
});
