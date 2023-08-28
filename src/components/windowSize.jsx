import { useState, useLayoutEffect } from "react";
import $ from "jquery";

export function useWindowSize(container) {
  const [h3, seth3] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      var h = $(window).height();
      var h2 = $(container).height();
      var nh3 = h2 - h + 196;
      seth3(nh3);
    }
    function checkHeightTimer() {
      var h = $(window).height();
      var h2 = $(container).height();
      var nh3 = h2 - h + 196;
      seth3(nh3);
      setTimeout(checkHeightTimer, 500); //at 500 miliseconds
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    checkHeightTimer();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, [container]);
  return h3;
}

export function useWindowWidth() {
  const [h3, seth3] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      var h = $(window).width();
      seth3(h);
    }
    function checkHeightTimer() {
      var h = $(window).width();
      seth3(h);
      setTimeout(checkHeightTimer, 500); //at 500 miliseconds
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    checkHeightTimer();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return h3;
}