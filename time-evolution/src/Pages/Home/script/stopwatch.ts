import { useState, useRef } from 'react';

export default function Stopwatch(initialState: number = 0) {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timers, setTimers] = useState<number[]>([])
  const countRef = useRef(0);

  function handleStart() {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)

  }

  // function handlePause() {
  //   clearInterval(countRef.current)
  //   setIsPaused(false)
  //   setIsActive(false);
  // }

  function handleFinish() {
    if (timer === 0) return;
    clearInterval(countRef.current)
    setIsPaused(false);
    setIsActive(false);
    setTimer(0)
    setTimers([...timers, timer])
  }

  function CleanHistoric() {
    setTimers([])
  }

  return { timer, timers, isActive, isPaused, handleStart, CleanHistoric, handleFinish }
}
