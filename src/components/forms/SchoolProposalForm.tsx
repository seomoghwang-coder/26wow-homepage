'use client';

import { useState } from 'react';
import FormField from './FormField';
import Button from '@/components/ui/Button';

const PROGRAM_OPTIONS = [
  '1일 캠프',
  '2일 캠프',
  'Growth Sprint 2주',
  'Growth Sprint 4주',
  'GW-Coach AI 모듈',
  '기타 (상담 후 결정)',
];

const REGIONS = [
  '서울', '경기', '인천', '부산', '대구', '대전', '광주', '울산',
  '세종', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주',
];

interface FormState {
  schoolName: string;
  region: string;
  studentCount: string;
  programInterest: string[];
  contactName: string;
  phone: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  schoolName: '',
  region: '',
  studentCount: '',
  programInterest: [],
  contactName: '',
  phone: '',
  email: '',
  message: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function SchoolProposalForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleProgramToggle = (program: string) => {
    setForm((prev) => ({
      ...prev,
      programInterest: prev.programInterest.includes(program)
        ? prev.programInterest.filter((p) => p !== program)
        : [...prev.programInterest, program],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'school-proposal', ...form }),
      });
      if (res.ok) {
        setStatus('success');
        setForm(initialState);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-brand-emerald-pale flex items-center justify-center mx-auto mb-5">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-brand-navy mb-3">제안서 요청이 접수되었습니다.</h3>
        <p className="text-text-secondary mb-6">영업일 기준 1~2일 내에 담당자가 연락드립니다.</p>
        <Button onClick={() => setStatus('idle')} variant="secondary" size="sm">
          새 요청 작성
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="학교명"
          required
          inputProps={{
            id: 'schoolName',
            type: 'text',
            placeholder: '○○중학교',
            value: form.schoolName,
            onChange: (e) => handleChange('schoolName', e.target.value),
            required: true,
          }}
        />
        <div className="space-y-1.5">
          <label htmlFor="region" className="block text-sm font-semibold text-text-primary">
            지역 <span className="text-brand-emerald">*</span>
          </label>
          <select
            id="region"
            value={form.region}
            onChange={(e) => handleChange('region', e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg border border-border bg-white text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent"
          >
            <option value="">지역 선택</option>
            {REGIONS.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      </div>

      <FormField
        label="예상 참가 인원"
        required
        inputProps={{
          id: 'studentCount',
          type: 'number',
          placeholder: '예: 120',
          min: '10',
          max: '1000',
          value: form.studentCount,
          onChange: (e) => handleChange('studentCount', e.target.value),
          required: true,
        }}
        hint="정확하지 않아도 됩니다. 대략적인 인원을 입력해주세요."
      />

      {/* Program interest checkboxes */}
      <div className="space-y-2">
        <p className="text-sm font-semibold text-text-primary">
          관심 프로그램 <span className="text-brand-emerald">*</span>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {PROGRAM_OPTIONS.map((prog) => (
            <label
              key={prog}
              className={[
                'flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-sm transition-colors',
                form.programInterest.includes(prog)
                  ? 'border-brand-emerald bg-brand-emerald-pale text-brand-emerald-dark font-medium'
                  : 'border-border hover:border-brand-navy',
              ].join(' ')}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={form.programInterest.includes(prog)}
                onChange={() => handleProgramToggle(prog)}
              />
              {form.programInterest.includes(prog) && (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7l3.5 3.5 6.5-7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {prog}
            </label>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <FormField
          label="담당자 이름"
          required
          inputProps={{
            id: 'contactName',
            type: 'text',
            placeholder: '홍길동',
            value: form.contactName,
            onChange: (e) => handleChange('contactName', e.target.value),
            required: true,
          }}
        />
        <FormField
          label="연락처"
          required
          inputProps={{
            id: 'phone',
            type: 'tel',
            placeholder: '010-0000-0000',
            value: form.phone,
            onChange: (e) => handleChange('phone', e.target.value),
            required: true,
          }}
        />
        <FormField
          label="이메일"
          required
          inputProps={{
            id: 'email',
            type: 'email',
            placeholder: 'name@school.kr',
            value: form.email,
            onChange: (e) => handleChange('email', e.target.value),
            required: true,
          }}
        />
      </div>

      <FormField
        as="textarea"
        label="추가 문의사항"
        inputProps={{
          id: 'message',
          placeholder: '프로그램 관련 궁금한 점이나 특이사항을 자유롭게 적어주세요.',
          value: form.message,
          onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('message', e.target.value),
        }}
      />

      {status === 'error' && (
        <p className="text-sm text-red-500 bg-red-50 rounded-lg px-4 py-3">
          전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={status === 'loading'}
      >
        {status === 'loading' ? '전송 중...' : '제안서 요청하기'}
      </Button>
    </form>
  );
}
