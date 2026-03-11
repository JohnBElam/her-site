(function () {
  'use strict';

  var revealClass = 'reveal';
  var staggerClass = 'reveal-stagger-children';
  var visibleClass = 'reveal--in';

  function init() {
    var revealEls = document.querySelectorAll('.' + revealClass);
    var staggerEls = document.querySelectorAll('.' + staggerClass);
    var staggerParents = document.querySelectorAll('.' + staggerClass);
    var isChildOfStagger = function (el) {
      var parent = el.parentElement;
      return parent && parent.classList.contains(staggerClass);
    };
    var revealOnly = [].slice.call(revealEls).filter(function (el) {
      return !el.classList.contains(staggerClass) && !isChildOfStagger(el);
    });
    var allObserved = revealOnly.concat([].slice.call(staggerEls));

    if (!allObserved.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
        }
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0
    });

    allObserved.forEach(function (el) {
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
