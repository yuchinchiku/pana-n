// contact.ts
export type ContactFormData = {
  subject: string;
  company: string;
  name: string;
  email: string;
  emailConfirm: string;
  phone: string;
  message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>;
export type ContactFormTouched = Partial<Record<keyof ContactFormData, boolean>>;
