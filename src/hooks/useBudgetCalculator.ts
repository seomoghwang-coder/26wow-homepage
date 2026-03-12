'use client';

import { useState, useMemo } from 'react';
import {
  calculateSimulator,
  type SimulatorInputs,
  type SimulatorResult,
} from '@/lib/budget';

const INITIAL_INPUTS: SimulatorInputs = {
  campType: 'general',
  programName: '학습전략캠프',
  duration: 4,
  grade: '',
  classCount: 3,
  studentsPerClass: 25,
  includeWorkbook: true,
  schoolName: '',
  teacherName: '',
  customProgramName: '',
};

interface UseBudgetCalculatorReturn {
  inputs: SimulatorInputs;
  result: SimulatorResult;
  updateInput: <K extends keyof SimulatorInputs>(key: K, value: SimulatorInputs[K]) => void;
}

export function useBudgetCalculator(): UseBudgetCalculatorReturn {
  const [inputs, setInputs] = useState<SimulatorInputs>(INITIAL_INPUTS);

  const updateInput = <K extends keyof SimulatorInputs>(
    key: K,
    value: SimulatorInputs[K]
  ) => {
    setInputs((prev) => {
      const next = { ...prev, [key]: value };

      // 캠프 구분 변경 시 연동 처리
      if (key === 'campType') {
        if (value === 'vocational') {
          next.programName = '직업인체험';
          next.duration = 2;
        } else {
          next.programName = '학습전략캠프';
          next.duration = 4;
        }
      }

      return next;
    });
  };

  const result = useMemo(
    () => calculateSimulator(inputs),
    [inputs]
  );

  return { inputs, result, updateInput };
}
