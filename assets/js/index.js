var htmlTag = document.querySelector("html");
var bodyTag = document.querySelector("body");
var themeToggle = document.querySelector(".theme-toggle");
var gearSlideBtn = document.querySelector(".gear-slide");
var slideBar = document.querySelector(".slide-setteng");
var closeSettingsBar = document.getElementById("close-settings");
var scrollToTopBtn = document.getElementById("scroll-to-top");

var savedTheme = localStorage.getItem("themeMode");
var savedColors = localStorage.getItem("themeColors");

if (savedColors) {
  var { primary, secondary, accent } = JSON.parse(savedColors);

  document.documentElement.style.setProperty("--color-primary", primary);
  document.documentElement.style.setProperty("--color-secondary", secondary);
  document.documentElement.style.setProperty("--color-accent", accent);
}

var savedColor = localStorage.getItem("textColor");
// ======================= All Color Options ==================
var colorOne = document.querySelector(".theme-color-one");
var colorTwo = document.querySelector(".theme-color-two");
var colorTheree = document.querySelector(".theme-color-theree");
var colorFour = document.querySelector(".theme-color-four");
var colorFive = document.querySelector(".theme-color-five");
var colorSix = document.querySelector(".theme-color-six");
// ======================= All Color Functions ==================

colorOne.addEventListener("click", function () {
  changeColor("#3b82f6", "#06b6d4", "#22d3ee");
});

colorTwo.addEventListener("click", function () {
  changeColor("#10b981", "#059669", "#34d399");
});

colorTheree.addEventListener("click", function () {
  changeColor("#ec4899", "#f97316", "#fb923c");
});
colorFour.addEventListener("click", function () {
  changeColor("#6366f1", "#8b5cf6", "#a855f7");
});
colorFive.addEventListener("click", function () {
  changeColor("#ef4444", "#f43f5e", "#fb7185");
});

colorSix.addEventListener("click", function () {
  changeColor("#f59e0b", "#ea580c", "#fbbf24");
});
function changeColor(primary, secondary, accent) {
  document.documentElement.style.setProperty("--color-primary", primary);
  document.documentElement.style.setProperty("--color-secondary", secondary);
  document.documentElement.style.setProperty("--color-accent", accent);
  var themeBtns = document.querySelectorAll(".theme-backgraund-color");

  themeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      themeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
  localStorage.setItem(
    "themeColors",
    JSON.stringify({
      primary,
      secondary,
      accent,
    })
  );
}

// ======================= All Font Family Options And Icon ==================
var alexandriaFontBtn = document.querySelector(".alexandria");
var tajawalFontBtn = document.querySelector(".Tajawal");
var cairoFontBtn = document.querySelector(".cairo");
var fontIconOne = document.querySelector(".font-icon-one");
var fontIconTwo = document.querySelector(".font-icon-two");
var fontIconTheree = document.querySelector(".font-icon-theree");

var focusBtnFont = document.querySelector("focus-visible");
// ====================== Font Check ===========================
var savedFont = localStorage.getItem("fontChoses");

// ====================== Btn Reset ===========================
var resetBtn = document.getElementById("reset-settings");

if (savedFont) {
  changeFont(savedFont);
}

if (savedTheme === "light") {
  htmlTag.classList.remove("dark");
} else {
  htmlTag.classList.add("dark");
}

// ====================== Font Family Chosse ===========================
alexandriaFontBtn.addEventListener("click", function () {
  changeFont("alexandria");
});
tajawalFontBtn.addEventListener("click", function () {
  changeFont("tajawal");
});
cairoFontBtn.addEventListener("click", function () {
  changeFont("cairo");
});

// ====================== Font Family Change Function ===========================
function changeFont(font) {
  bodyTag.classList.remove("font-alexandria", "font-tajawal", "font-cairo");
  clearFontStyle();
  switch (font) {
    case "alexandria":
      bodyTag.classList.add("font-alexandria");
      alexandriaFontBtn.classList.add("active");
      fontIconOne.classList.remove("opacity-0");
      fontIconOne.classList.add("opacity-100");
      break;

    case "tajawal":
      bodyTag.classList.add("font-tajawal");
      tajawalFontBtn.classList.add("active");
      fontIconTwo.classList.remove("opacity-0");
      fontIconTwo.classList.add("opacity-100");
      break;

    case "cairo":
      bodyTag.classList.add("font-cairo");
      cairoFontBtn.classList.add("active");
      fontIconTheree.classList.remove("opacity-0");
      fontIconTheree.classList.add("opacity-100");
      break;
  }
  localStorage.setItem("fontChoses", font);
}

function clearFontStyle() {
  alexandriaFontBtn.classList.remove("active");
  tajawalFontBtn.classList.remove("active");
  cairoFontBtn.classList.remove("active");

  fontIconOne.classList.add("opacity-0");
  fontIconOne.classList.remove("opacity-100");

  fontIconTwo.classList.add("opacity-0");
  fontIconTwo.classList.remove("opacity-100");

  fontIconTheree.classList.add("opacity-0");
  fontIconTheree.classList.remove("opacity-100");
}

themeToggle.addEventListener("click", function () {
  htmlTag.classList.toggle("dark");

  if (htmlTag.classList.contains("dark")) {
    localStorage.setItem("themeMode", "dark");
  } else {
    localStorage.setItem("themeMode", "light");
  }
});

gearSlideBtn.addEventListener("click", function () {
  slideBar.classList.toggle("translate-x-full");
  updateGearState();
});

function updateGearState() {
  if (slideBar.classList.contains("translate-x-full")) {
    gearSlideBtn.classList.remove("rems");
  } else {
    gearSlideBtn.classList.add("rems");
  }
}

closeSettingsBar.addEventListener("click", function () {
  slideBar.classList.add("translate-x-full");
  updateGearState();
});
document.addEventListener("click", function (e) {
  if (slideBar.classList.contains("translate-x-full")) return;

  if (e.target.closest(".slide-setteng") || e.target.closest(".gear-slide")) {
    return;
  }

  slideBar.classList.add("translate-x-full");
  updateGearState();
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.remove("opacity-0", "invisible");
    scrollToTopBtn.classList.add("opacity-100", "visible");
  } else {
    scrollToTopBtn.classList.remove("opacity-100", "visible");
    scrollToTopBtn.classList.add("opacity-0", "invisible");
  }
});
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

var activeClasses = [
  "bg-linear-to-r",
  "from-primary",
  "to-secondary",
  "text-white",
  "hover:shadow-lg",
  "hover:shadow-primary/50",
];

var portfolioItems = document.querySelectorAll(".portfolio-item");
var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");

var activeClasses = [
  "bg-linear-to-r",
  "from-primary",
  "to-secondary",
  "text-white",
  "hover:shadow-lg",
  "hover:shadow-primary/50",
];

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
      b.classList.remove(...activeClasses);
      b.setAttribute("aria-pressed", "false");
    });

    btn.classList.add("active");
    btn.classList.add(...activeClasses);
    btn.setAttribute("aria-pressed", "true");

    var filterValue = btn.dataset.filter.toLowerCase();

    portfolioItems.forEach(function (item) {
      var category = item.dataset.category.toLowerCase();

      if (filterValue === "all" || category === filterValue) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  });
});

var sections = document.querySelectorAll("section[id]");
var navLinks = document.querySelectorAll(".nav-links a");
if (navLinks.length > 0) {
  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  navLinks[0].classList.add("active");
}

window.addEventListener("scroll", function () {
  var current = "hero-section";

  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ======================== Reset Function =======================
resetBtn.addEventListener("click", function () {
  changeFont("tajawal");
  changeColor("#6366f1", "#8b5cf6", "#a855f7");

  document.querySelectorAll(".theme-backgraund-color").forEach((btn) => {
    btn.classList.remove("active");
  });
});

// ======================== Contact =======================
// ========================  =======================
// ========================  =======================

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  var fullNameInput = document.getElementById("full-name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");
  var projectTypeSelect = document.querySelector(
    ".custom-select-contact1 .custom-select"
  );
  var budgetSelect = document.querySelector(
    ".custom-select-contact2 .custom-select"
  );
  var projectDetailsTextarea = document.getElementById("project-details");
  var submitButton = document.getElementById("submit");

  var patterns = {
    name: /^[a-zA-Z\u0600-\u06FF\s]{3,}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^(?:\+20|0)?1[0-2,5]\d{8}$/,
  };

  var errorMessages = {
    name: "الاسم يجب أن يكون 3 أحرف على الأقل ولا يحتوي على أرقام",
    email: "البريد الإلكتروني غير صحيح",
    phone: "رقم الهاتف يجب أن يكون رقم مصري صحيح",
    projectType: "يرجى اختيار نوع المشروع",
    budget: "يرجى اختيار الميزانية المتوقعة",
  };

  var validationState = {
    name: false,
    email: false,
    phone: false,
    projectType: false,
    budget: false,
  };

  function updateInputValidation(inputElement, isValid) {
    if (isValid) {
      inputElement.classList.remove("border-red-500", "focus:border-red-500");
      inputElement.classList.add("border-green-500", "focus:border-green-500");
    } else {
      inputElement.classList.remove(
        "border-green-500",
        "focus:border-green-500"
      );
      inputElement.classList.add("border-red-500", "focus:border-red-500");
    }
  }

  function updateSelectValidation(selectElement, isValid) {
    if (isValid) {
      selectElement.classList.remove("border-red-500", "focus:border-red-500");
      selectElement.classList.add("border-green-500", "focus:border-green-500");
    } else {
      selectElement.classList.remove(
        "border-green-500",
        "focus:border-green-500"
      );
      selectElement.classList.add("border-red-500", "focus:border-red-500");
    }
  }

  function validateName() {
    var value = fullNameInput.value.trim();
    var isValid = patterns.name.test(value);
    validationState.name = isValid;
    updateInputValidation(fullNameInput, isValid);
    return isValid;
  }

  function validateEmail() {
    var value = emailInput.value.trim();
    var isValid = patterns.email.test(value);
    validationState.email = isValid;
    updateInputValidation(emailInput, isValid);
    return isValid;
  }

  function validatePhone() {
    var value = phoneInput.value.trim();
    if (value === "") {
      validationState.phone = true;
      updateInputValidation(phoneInput, true);
      return true;
    }
    var isValid = patterns.phone.test(value);
    validationState.phone = isValid;
    updateInputValidation(phoneInput, isValid);
    return isValid;
  }

  function validateProjectType() {
    var selectedText =
      projectTypeSelect.querySelector(".selected-text").textContent;
    var isValid = selectedText !== "اختر نوع المشروع";
    validationState.projectType = isValid;
    updateSelectValidation(projectTypeSelect, isValid);
    return isValid;
  }

  function validateBudget() {
    var selectedText = budgetSelect.querySelector(".selected-text").textContent;
    var isValid = selectedText !== "اختر الميزانية";
    validationState.budget = isValid;
    updateSelectValidation(budgetSelect, isValid);
    return isValid;
  }

  function validateAll() {
    var isNameValid = validateName();
    var isEmailValid = validateEmail();
    var isPhoneValid = validatePhone();
    var isProjectTypeValid = validateProjectType();
    var isBudgetValid = validateBudget();

    return (
      isNameValid &&
      isEmailValid &&
      isPhoneValid &&
      isProjectTypeValid &&
      isBudgetValid
    );
  }

  fullNameInput.addEventListener("input", validateName);
  fullNameInput.addEventListener("blur", validateName);

  emailInput.addEventListener("input", validateEmail);
  emailInput.addEventListener("blur", validateEmail);

  phoneInput.addEventListener("input", validatePhone);
  phoneInput.addEventListener("blur", validatePhone);

  projectTypeSelect.addEventListener("click", function () {
    setTimeout(validateProjectType, 100);
  });

  budgetSelect.addEventListener("click", function () {
    setTimeout(validateBudget, 100);
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("custom-option")) {
      setTimeout(() => {
        if (e.target.closest(".custom-select-contact1")) {
          validateProjectType();
        } else if (e.target.closest(".custom-select-contact2")) {
          validateBudget();
        }
      }, 50);
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateAll()) {
      alert("Message sent successfully!");

      form.reset();

      Object.keys(validationState).forEach((key) => {
        validationState[key] = false;
      });

      var allInputs = [fullNameInput, emailInput, phoneInput];
      var allSelects = [projectTypeSelect, budgetSelect];

      allInputs.forEach((input) => {
        input.classList.remove(
          "border-red-500",
          "border-green-500",
          "focus:border-red-500",
          "focus:border-green-500"
        );
      });

      allSelects.forEach((select) => {
        select.classList.remove(
          "border-red-500",
          "border-green-500",
          "focus:border-red-500",
          "focus:border-green-500"
        );
      });

      document.querySelectorAll(".selected-text").forEach((span) => {
        if (span.textContent.includes("نوع المشروع")) {
          span.textContent = "اختر نوع المشروع";
        } else if (span.textContent.includes("الميزانية")) {
          span.textContent = "اختر الميزانية";
        }
      });
    } else {
      alert("Please fix the errors in the form before submitting.");
    }
  });

  validateAll();
});
document.querySelectorAll(".custom-select").forEach((select) => {
  select.addEventListener("click", function () {
    var wrapper = this.closest(".custom-select-wrapper");
    var options = wrapper.querySelector(".custom-options");
    var arrow = this.querySelector("i");

    document.querySelectorAll(".custom-options").forEach((otherOptions) => {
      if (otherOptions !== options) {
        otherOptions.classList.add("hidden");
        otherOptions.previousElementSibling
          .querySelector("i")
          .classList.remove("fa-chevron-up");
        otherOptions.previousElementSibling
          .querySelector("i")
          .classList.add("fa-chevron-down");
      }
    });

    options.classList.toggle("hidden");
    arrow.classList.toggle("fa-chevron-up");
    arrow.classList.toggle("fa-chevron-down");

    var isExpanded = !options.classList.contains("hidden");
    this.setAttribute("aria-expanded", isExpanded);
  });
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".custom-select-wrapper")) {
    document.querySelectorAll(".custom-options").forEach((options) => {
      options.classList.add("hidden");
      var arrow = options.previousElementSibling.querySelector("i");
      arrow.classList.remove("fa-chevron-up");
      arrow.classList.add("fa-chevron-down");
      options.previousElementSibling.setAttribute("aria-expanded", "false");
    });
  }
});

document.querySelectorAll(".custom-option").forEach((option) => {
  option.addEventListener("click", function () {
    var value = this.getAttribute("data-value");
    var wrapper = this.closest(".custom-select-wrapper");
    var select = wrapper.querySelector(".custom-select");
    var selectedText = select.querySelector(".selected-text");

    selectedText.textContent = value;
    selectedText.classList.remove("text-slate-500", "dark:text-slate-400");
    selectedText.classList.add("text-slate-800", "dark:text-white");

    var options = wrapper.querySelector(".custom-options");
    options.classList.add("hidden");
    var arrow = select.querySelector("i");
    arrow.classList.remove("fa-chevron-up");
    arrow.classList.add("fa-chevron-down");
    select.setAttribute("aria-expanded", "false");
  });
});
// ========================  =======================
// ========================  =======================

/* var testimonials = [
  {
    name: "أحمد السعيد",
    role: "مدير شركة التقنية الحديثة",
    image: "assets/imgs/avatar-1-BQH9KX0X.webp",
    rating: 5,
    text: "شغل أحمد معانا كان حاجة تانية خالص. قدم حلول مبتكرة لكل المشاكل اللي واجهتنا. الموقع اللي عمله عدى كل توقعاتنا في التصميم والأداء.",
  },
  {
    name: "سيف أسامة",
    role: "ميديا باير",
    image: "assets/imgs/avatar-2-CyFiVXIH.webp",
    rating: 5,
    text: "المتجر بتاعنا بقى محترف ومريح جداً في الاستخدام. مبيعاتنا زادت 60% في أول شهر. شكراً يا أحمد على المجهود الجبار!",
  },
  {
    name: "خالد صلاح",
    role: "مدير تطوير الأعمال",
    image: "assets/imgs/avatar-3-CmoFRkys.webp",
    rating: 5,
    text: "شغل محترفين بجد ومواعيد مظبوطة. التطبيق اللي عمله لنا شغال زي الفل على كل الأجهزة. بننصح بيه جداً لأي مشروع.",
  },
  {
    name: "أحمد الرفاعي",
    role: "جرافيك ديزاينر",
    image: "assets/imgs/avatar-4-CI2X8fvY.webp",
    rating: 5,
    text: "تجربة ممتازة من الأول للآخر. أحمد سمع طلباتنا كويس وقدم أفكار برة الصندوق. الموقع الجديد عجب العملاء جداً.",
  },
  {
    name: "عمر عادل",
    role: "مؤسس شركة ناشئة",
    image: "assets/imgs/avatar-5-BF_5vAuR.webp",
    rating: 5,
    text: "أحمد ساعدنا نحول الفكرة لواقع. الـ MVP اللي عمله كان ممتاز عشان نجذب مستثمرين. شطارة تقنية وإبداع ملوش حل.",
  },
  {
    name: "كريم ياسر",
    role: "دكتور صيدلي",
    image: "assets/imgs/avatar-6-IIG--UcM.webp",
    rating: 5,
    text: "الشغل مع أحمد كان مريح ومنظم جداً. دايماً بيبعت تحديثات وبيرد بسرعة على أي تعديل. النتيجة النهائية أحسن من اللي كنا متخيلينه.",
  },
];
var cartona = "";
var i = 0;

for (i = 0; i < testimonials.length; i++) {
  cartona += `
                  <div
                  class="testimonial-card flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-0 lg:px-4 flex flex-col self-stretch"
                >
                  <div
                    class="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-accent transition-all duration-300 flex flex-col h-full"
                  >
                    <div class="flex items-center mb-6">
                      <img
                        src="${testimonials[i].image}"
                        alt="صورة أحمد السعيد"
                        class="w-16 h-16 rounded-full ml-4 object-cover border-2 border-accent"
                      />
                      <div>
                        <h4 class="text-xl font-bold">${testimonials[i].name}</h4>
                        <p class="text-slate-500 dark:text-slate-400">
                          ${testimonials[i].role}
                        </p>
                      </div>
                    </div>
                    <div
                      class="flex mb-4"
                      role="img"
                      aria-label="تقييم 5 من 5 نجوم"
                    >
                      <i
                        class="fa-solid fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                      <i
                        class="fa-solid fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                      <i
                        class="fa-solid fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                      <i
                        class="fa-solid fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                      <i
                        class="fa-solid fa-star text-yellow-400"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <p
                      class="text-slate-600 dark:text-slate-300 leading-relaxed text-lg flex-grow"
                    >
                      ${testimonials[i].text}
                    </p>
                  </div>
                </div>
  `;
  document.getElementById("testimonials-carousel").innerHTML = cartona;
}
var nextCard = document.getElementById("prev-testimonial");
nextCard.addEventListener("click", function () {
  i++;
  document.getElementById("testimonials-carousel").innerHTML = cartona;
}); */

/* document.addEventListener("DOMContentLoaded", function () {
  var carousel = document.getElementById("testimonials-carousel");
  var cards = document.querySelectorAll(".testimonial-card");
  var nextBtn = document.getElementById("next-testimonial");
  var prevBtn = document.getElementById("prev-testimonial");
  var indicators = document.querySelectorAll(".carousel-indicator");

  let currentIndex = 0;
  let cardsPerView = getCardsPerView();

  function getCardsPerView() {
    var width = window.innerWidth;
    if (width >= 1024) return 3;
    if (width >= 640) return 2;
    return 1;
  }

  function updateCarousel() {
    var cardWidth = cards[0]?.offsetWidth || 0;
    var gap = 16;

    var translateX = -(currentIndex * (cardWidth + gap));

    carousel.style.transform = `translateX(${translateX}px)`;
    updateIndicators();
  }

  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      var isActive = index === currentIndex;
      indicator.setAttribute("aria-selected", isActive);
      indicator.classList.toggle("bg-accent", isActive);
      indicator.classList.toggle("bg-slate-400", !isActive);
      indicator.classList.toggle("dark:bg-slate-600", !isActive);
    });
  }

  nextBtn.addEventListener("click", function () {
    if (currentIndex < cards.length - cardsPerView) {
      currentIndex++;
      updateCarousel();
    } else {
      currentIndex = 0;
      updateCarousel();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    } else {
      currentIndex = Math.max(0, cards.length - cardsPerView);
      updateCarousel();
    }
  });

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", function () {
      currentIndex = parseInt(this.getAttribute("data-index"));
      updateCarousel();
    });
  });

  window.addEventListener("resize", function () {
    cardsPerView = getCardsPerView();
    currentIndex = Math.min(currentIndex, cards.length - cardsPerView);
    updateCarousel();
  });

  updateCarousel();
}); */
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap: "1.5rem",
    autoplay: true,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
    direction: "rtl",
    breakpoints: {
      1024: {
        perPage: 2,
      },
      640: {
        perPage: 1,
      },
    },
  }).mount();
});
