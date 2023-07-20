import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

export interface UseFitScreenHeightReturnType {
  /** 画面に収まるようになる高さ */
  fitScreenHeight: number;
  /** 対象の要素設定（refで設定） */
  setTargetElement: Dispatch<SetStateAction<HTMLDivElement | null>>;
  /** 対象の要素 */
  targetElement: HTMLDivElement | null;
}

/** 対象の要素が画面に収まるようになる高さを返す */
export const useFitScreenHeight = (
  /** 高さ調整 */
  adjustment = 0,
  /** 画面の下余白調整 */
  bottomPadding = 16,
): UseFitScreenHeightReturnType => {
  const [windowHeight, setWindowHeight] = useState<number | null>(null);
  const [height, setHeight] = useState(0);
  const [targetElement, setTargetElement] = useState<HTMLDivElement | null>(
    null,
  );

  const fitScreenHeight = useMemo(() => {
    return height - bottomPadding + adjustment;
  }, [height, bottomPadding, adjustment]);

  useEffect(() => {
    const { innerHeight } = window;
    setWindowHeight(innerHeight ?? null);
  }, [setWindowHeight]);

  useEffect(() => {
    const targetElmPositionTop = targetElement?.getBoundingClientRect().top;
    if (targetElmPositionTop && windowHeight) {
      setHeight(windowHeight - targetElmPositionTop);
    }
  }, [windowHeight, targetElement]);

  return {
    fitScreenHeight,
    setTargetElement,
    targetElement,
  };
};
