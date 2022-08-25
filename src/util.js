import { useEffect } from "react";


export function getNextId(listOfItems) {
  return (
    listOfItems.reduce(
      (prev, current) => {
        return current.id > prev.id ? current : prev;
      },
      { id: -1 }
    ).id + 1
  );
}


export function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}