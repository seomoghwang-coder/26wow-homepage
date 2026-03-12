'use client';

import { useState } from 'react';
import FormField from './FormField';
import Button from '@/components/ui/Button';

const INQUIRY_TYPES = [
  '학교 프로그램 도입 문의',
  'Growth Platform 소개 요청',
  'GW-Coach 데모 요청',
  '예산 견적 문의',
  '기타 일반 문의',
];

interface FormState {
  name: string;
  organization: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  organization: '',
  phone: '',
  email: '',
  inquiryType: '',
  message: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ConsultationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'consultation', ...form }),
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
        <h3 className="text-2xl font-bold text-brand-navy mb-3">문의가 접수되었습니다.</h3>
        <p className="text-text-secondary mb-6">영업일 기준 1~2일 내에 담당자가 연락드립니다.</p>
        <Button onClick={() => setStatus('idle')} variant="secondary" size="sm">
          새 문의 작성
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <FormField
          label="이름"
          required
          inputProps={{
            id: 'name',
            type: 'text',
            placeholder: '홍길동',
            value: form.name,
            onChange: (e) => handleChange('name', e.target.value),
            required: true,
          }}
        />
        <FormField
          label="소속 기관"
          inputProps={{
            id: 'organization',
            type: 'text',
            placeholder: '○○중학교 / 교육청 / 개인',
            value: form.organization,
            onChange: (e) => handleChange('organization', e.target.value),
          }}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
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
            placeholder: 'name@example.com',
            value: form.email,
            onChange: (e) => handleChange('email', e.target.value),
            required: true,
          }}
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-text-primary">
          문의 유형 <span className="text-brand-emerald">*</span>
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {INQUIRY_TYPES.map((type) => (
            <label
              key={type}
              className={[
                'flex items-center gap-2 px-3 py-2.5 rounded-lg border cursor-pointer text-sm transition-colors',
                form.inquiryType === type
                  ? 'border-brand-emerald bg-brand-emerald-pale text-brand-emerald-dark font-medium'
                  : 'border-border hover:border-brand-navy',
              ].join(' ')}
            >
              <input
                type="radio"
                name="inquiryType"
                className="sr-only"
                value={type}
                checked={form.inquiryType === type}
                onChange={() => handleChange('inquiryType', type)}
              />
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${form.inquiryType === type ? 'border-brand-emerald' : 'border-border'}`}>
                {form.inquiryType === type && (
                  <span className="w-2 h-2 rounded-full bg-brand-emerald" />
                )}
              </span>
              {type}
            </label>
          ))}
        </div>
      </div>

      <FormField
        as="textarea"
        label="문의 내용"
        required
        inputProps={{
          id: 'message',
          placeholder: '문의하실 내용을 자유롭게 작성해주세요.',
          value: form.message,
          onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange('message', e.target.value),
          required: true,
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
        {status === 'loading' ? '전송 중...' : '문의하기'}
      </Button>
    </form>
  );
}
