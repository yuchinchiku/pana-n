// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import sanitizeHtml from 'sanitize-html';
import { ContactFormData } from '@/app/contact/types';

export async function POST(req: NextRequest) {
  try {
    const data: ContactFormData & { recaptchaToken?: string } = await req.json();
    const { recaptchaToken, ...rest } = data;

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA トークンがありません' },
        { status: 400 }
      );
    }

    // reCAPTCHA 検証
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: recaptchaToken,
      }),
    });

    const verifyJson = await verifyRes.json();
    if (!verifyJson.success) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA 検証に失敗しました' },
        { status: 400 }
      );
    }

    // バリデーション
    const errors: Record<string, string> = {};
    ['subject', 'name', 'email', 'phone', 'message'].forEach((key) => {
      if (!rest[key as keyof FormData]) errors[key] = '必須項目です';
    });

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors, success: false }, { status: 400 });
    }

    const safeData = {
      subject: sanitizeHtml(rest.subject),
      company: sanitizeHtml(rest.company || ''),
      name: sanitizeHtml(rest.name),
      email: sanitizeHtml(rest.email),
      phone: sanitizeHtml(rest.phone),
      message: sanitizeHtml(rest.message),
    };

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${safeData.name}" <${safeData.email}>`,
      to: process.env.MAIL_TO,
      subject: `[お問い合わせ] ${safeData.subject}`,
      html: `
        <p><strong>ご用件:</strong> ${safeData.subject}</p>
        <p><strong>会社名:</strong> ${safeData.company}</p>
        <p><strong>お名前:</strong> ${safeData.name}</p>
        <p><strong>メール:</strong> ${safeData.email}</p>
        <p><strong>電話番号:</strong> ${safeData.phone}</p>
        <p><strong>内容:</strong><br/>${safeData.message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, message: '送信に失敗しました' },
      { status: 500 }
    );
  }
}
