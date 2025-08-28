import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // --- SMTP設定 ---
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // --- 管理者宛メール ---
    const mailOptionsAdmin = {
      from: `"お問い合わせフォーム" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO, // 管理者メール
      subject: `【お問い合わせ】${data.subject}`,
      text: `
新しいお問い合わせが届きました。

ご用件: ${data.subject}
貴社名: ${data.company || '-'}
お名前: ${data.name}
メールアドレス: ${data.email}
お電話番号: ${data.phone}

お問い合わせ内容:
${data.message}
      `,
    };

    // --- ユーザー宛確認メール ---
    const mailOptionsUser = {
      from: `"パナ・ン" <${process.env.MAIL_USER}>`,
      to: data.email, // ユーザー宛
      subject: 'お問い合わせありがとうございます',
      text: `
${data.name} 様

この度はお問い合わせいただきありがとうございます。
以下の内容で受け付け致しました。

ご用件: ${data.subject}
貴社名: ${data.company || '-'}
お名前: ${data.name}
メールアドレス: ${data.email}
お電話番号: ${data.phone}

お問い合わせ内容:
${data.message}

後ほど担当者よりご連絡いたしますので、もうしばらくお待ちください。
      `,
    };

    // --- メール送信 ---
    await transporter.sendMail(mailOptionsAdmin);
    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: 'メール送信に失敗しました' });
  }
}
